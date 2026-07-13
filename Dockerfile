# ============================================
# Stage 1: Build — instala deps y genera dist/
# ============================================
FROM node:22-alpine AS builder
WORKDIR /app

# Copia solo package.json y lockfile primero
# (capa cacheada: solo se reinstalan deps si cambian these archivos)
COPY package.json package-lock.json ./
RUN npm install

# Copia el código fuente y ejecuta build
COPY . .
RUN npm run build

# ============================================
# Stage 2: Production — sirve dist/ con nginx
# ============================================
FROM nginx:alpine

# Copia el dist/ generado en el stage 1
COPY --from=builder /app/dist /usr/share/nginx/html

# Sobreescribe la config por defecto de nginx con la nuestra
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
