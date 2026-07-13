# Despliegue con Docker

Guía de despliegue del sitio web de la Cátedra Innova-tsn UPM mediante contenedores Docker, conectados a Nginx Proxy Manager.

---

## Arquitectura

```
Usuario → DNS → Nginx Proxy Manager → proxy_pass → contenedor (nginx:80) → dist/
```

El contenedor ejecuta nginx internamente y sirve los archivos estáticos generados por `npm run build`. Nginx Proxy Manager se encarga del dominio, SSL y routing externo.

---

## Ficheros de despliegue

### `Dockerfile`

Fichero multi-stage que construye la imagen de producción.

```dockerfile
# Stage 1: Build — instala dependencias y genera dist/
FROM node:22-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Production — sirve dist/ con nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Por qué multi-stage:**

- El stage 1 (node:22-alpine) solo se usa para buildear. Se descarta al final.
- El stage 2 (nginx:alpine) es la imagen de producción. Contiene nginx + dist/, nada más.
- Resultado: imagen ligera (~165MB) sin node_modules, sin código fuente, sin herramientas de build.

**Flujo:**

1. Copia `package.json` y `package-lock.json` → instala dependencias (capa cacheada)
2. Copia el código fuente → ejecuta `npm run build` → genera `dist/`
3. En el stage 2: copia solo `dist/` y `nginx.conf` al contenedor nginx

### `nginx.conf`

Configuración de nginx para servir la SPA dentro del contenedor.

```nginx
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    # SPA fallback — todas las rutas devuelven index.html
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache de assets estáticos — 1 año
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Compresión gzip
    gzip on;
    gzip_types text/plain text/css application/json application/javascript
               text/xml application/xml text/javascript image/svg+xml;
    gzip_min_length 256;
}
```

**Qué controla:**
- `try_files`: si alguien accede a `/try-it` o cualquier ruta, nginx sirve `index.html` y React se encarga del routing
- `expires 1y` en `/assets/`: los ficheros CSS/JS llevan hash en el nombre (`index-CHKmCcWh.js`), así que se pueden cachear agresivamente
- `gzip`: comprime las respuestas HTTP para reducir el tamaño transferido

### `docker-compose.yml`

Orquestación del contenedor y conexión a la red de Nginx Proxy Manager.

```yaml
services:
  web:
    build: .
    container_name: catedra-innovatsn
    restart: unless-stopped
    networks:
      - npm_network

networks:
  npm_network:
    external: true
    name: npm_network
```

**Claves:**
- `build: .` — construye la imagen desde el Dockerfile en el directorio actual
- `restart: unless-stopped` — el contenedor se reinicia automáticamente si se cae o el VPS se reinicia
- `networks: npm_network` — conecta el contenedor a la red externa de Nginx Proxy Manager
- `external: true` — la red ya existe (la crea Nginx Proxy Manager), Docker no la gestiona
- Sin `ports:` — no se expone ningún puerto al host. Nginx Proxy Manager accede al contenedor directamente via la red Docker

### `.dockerignore`

Ficheros excluidos del contexto de construcción Docker.

```
node_modules
dist
.git
.gitignore
.vscode
*.log
.env*
.prettierrc
.prettierignore
eslint.config.js
README.md
```

**Por qué:** enviar `node_modules` o `.git` al daemon de Docker encarece el build innecesariamente. El `.dockerignore` evita que se copien al stage 1.

---

## Despliegue en el VPS

### Requisitos previos

- Docker y Docker Compose instalados en el VPS
- Nginx Proxy Manager desplegado y funcionando
- La red `npm_network` debe existir (la crea Nginx Proxy Manager automáticamente)

### Pasos

```bash
# 1. Copiar el repositorio al VPS
git clone <repo-url> /ruta/catedra-web

# 2. Construir y levantar el contenedor
docker compose up -d --build

# 3. Verificar que funciona
curl -s -o /dev/null -w "%{http_code}" http://localhost:80
# Debe devolver 200

# 4. En Nginx Proxy Manager, crear un Proxy Host:
#    - Domain: <dominio-futuro>
#    - Scheme: http
#    - Forward Hostname / IP: catedra-innovatsn (o el nombre del contenedor)
#    - Forward Port: 80
#    - Habilitar WebSocket y Block Common Exploits
```

### Comandos útiles

```bash
# Ver logs del contenedor
docker compose logs -f web

# Reconstruir tras cambios en el código
docker compose up -d --build

# Detener el contenedor
docker compose down

# Verificar el estado
docker compose ps
```

---

## Estructura final

```
web_page/
├── Dockerfile          # Multi-stage build (node → nginx)
├── docker-compose.yml  # Orquestación + red NPM
├── nginx.conf          # Config nginx (SPA fallback, cache, gzip)
├── .dockerignore       # Exclusiones del build
└── src/                # Código fuente (se descarta en producción)
```
