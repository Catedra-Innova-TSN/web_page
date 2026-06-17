# Cátedra Innova-tsn UPM

> Donde los datos construyen la historia

Sitio web de la Cátedra Innova-tsn UPM, un espacio donde la historia, presente y pasada, que extraemos de los datos, nos permite construir el futuro.

---

## Tabla de contenidos

1. [Instalación y ejecución](#instalación-y-ejecución-con-npm)
2. [Scripts útiles](#otros-scripts-útiles)
3. [Estructura de carpetas](#estructura-de-carpetas)
4. [Tecnologías principales](#tecnologías-principales)

---

## Instalación y ejecución con npm
También es posible la ejecución con bun.

### Requisitos previos

- [npm](https://robots.uc3m.es/installation-guides/install-npm.html) instalado en tu sistema.

### 1. Instalar dependencias

```powershell
npm install
```

### 2. Ejecutar en modo desarrollo

```bash
npm run dev
```

El servidor de desarrollo se iniciará y podrás acceder al sitio desde tu navegador (normalmente en `http://localhost:5173`).

---

## Estructura de carpetas

```text
src/
├── components/       # Componentes reutilizables (header, footer, carruseles, etc.)
│   └── ui/           # Componentes base de la UI (botones, inputs, modales, etc.)
├── hooks/            # Custom hooks de React
├── lib/              # Utilidades, helpers y configuración
│   └── api/          # Funciones del servidor (server functions)
├── routes/           # Páginas del sitio (routing basado en archivos de TanStack)
├── router.tsx        # Configuración del router
├── server.ts         # Punto de entrada del servidor
├── start.ts          # Bootstrap de la aplicación
└── styles.css        # Estilos globales y tokens de diseño de Tailwind
```

---

## Tecnologías principales

- **Framework:** [TanStack Start](https://tanstack.com/start) (React + Vite)
- **Estilos:** Tailwind CSS v4
- **Lenguaje:** TypeScript
- **Runtime / Gestor de paquetes:** Bun

---

## Cómo modificar el contenido

> Esta guía explica **dónde editar** cada dato sin tener que tocar la estructura de la web.

### Gestión de Imágenes (IMPORTANTE)

Para añadir nuevas imágenes (fotos de eventos, ponentes, logotipos, etc.):

1. **Ubicación de archivos:** Todas las imágenes deben guardarse dentro de la carpeta `public/images/` (puedes crear subcarpetas por año o categoría para mantener el orden, ej. `public/images/2026/foto.jpg`).
2. **Referencia en el código:** Cuando edites los datos en los archivos `.tsx` (como se explica a continuación), debes omitir la carpeta `public/` en la ruta.
   - **Incorrecto:** `image: "public/images/2026/foto.jpg"` o `image: "/public/images/2026/foto.jpg"`
   - **Correcto:** `image: "images/2026/foto.jpg"` o `image: "/images/2026/foto.jpg"`
3. **Imágenes por defecto:** Si no proporcionas una imagen (omitiendo la propiedad `image` o dejándola vacía), el sistema generará automáticamente un fondo degradado elegante utilizando la propiedad `hue`.

### Carruseles (Home, TryIt, RootedCon, Seminarios)

Los carruseles se configuran como **arrays de objetos** dentro de cada página. Busca la constante que termina en `SLIDES` o `HERO_SLIDES` y añade/edita objetos con `title`, `subtitle`,`desc`, `image` (opcional) y `hue` (0-360).

| Página | Archivo | Constante |
|--------|---------|-----------|
| Home — Proyectos | `src/routes/index.tsx` | `PROJECT_SLIDES` |
| Home — Equipo | `src/routes/index.tsx` | `TEAM_SLIDES` |
| Home — Experiencias | `src/routes/index.tsx` | `EXPERIENCE_SLIDES` |
| TryIt | `src/routes/try-it.tsx` | `HERO_SLIDES` |
| RootedCon | `src/routes/rootedcon.tsx` | `ROOTED_SLIDES` |

Ejemplo para añadir una diapositiva con foto real:
```ts
{ title: "Nuevo evento", subtitle: "Descripción", image: "/fotos/evento.jpg" }
```
Si no pones `image`, se genera automáticamente un degradado con el `hue` indicado.

### Eventos (Home — Agenda)

Edita el array `EVENTS` en `src/routes/index.tsx`:
```ts
{ date: "12 JUN", title: "Nombre del evento", place: "Lugar", tag: "TryIt" }
```

### Noticias (Home — Actualidad)

Edita el array `NEWS` en `src/routes/index.tsx`:
```ts
{
  source: "Innova-tsn",
  title: "Título",
  excerpt: "Resumen",
  when: "Hace 2 días",
  hue: 250,
}
```
Cambia `hue` (0-360) para variar el color del placeholder.

### Ponencias / TryIt

Edita `TALKS_BY_YEAR` en `src/routes/try-it.tsx`. El primer objeto del array es la **edición actual** (se muestra arriba). Los siguientes se pliegan bajo *Descubre años anteriores*.

```ts
{
  year: 2026,
  talks: [
    { date: "08 MAR", title: "Título", speaker: "Nombre", desc: "Descripción", hue: 250, photo: "/fotos/ponente.jpg" },
  ]
}
```
Puedes añadir `photo` para mostrar una imagen real en lugar del degradado.

### Seminarios

Edita `YEARS` en `src/routes/seminarios.tsx`. El primer objeto es la edición actual. Para añadir un año nuevo, **inserta un objeto nuevo al inicio del array**.

```ts
{
  year: 2027,
  highlight: "Edición actual · …",
  seminars: [
    { date: "15 FEB 2027", title: "…", speaker: "…", place: "…", desc: "…", hue: 250, photo: "/fotos/seminario.jpg" },
  ],
}
```

### Actividades Make-It

Edita `ACTIVITIES` en `src/routes/make-it.tsx`. Cada área es un enlace externo: reemplaza `href: "#"` por la URL real cuando la tengas.

```ts
{ icon: Cpu, label: "Prototipado IA", desc: "…", href: "https://…" }
```

### Pilares (Home — Qué hacemos)

Edita `PILLARS` en `src/routes/index.tsx` si necesitas cambiar los textos o los iconos. Los iconos se importan de `lucide-react`.

---

## Mapa de páginas

| Ruta URL | Archivo | ¿Qué contiene? |
|----------|---------|---------------|
| `/` (home) | `src/routes/index.tsx` | Hero, 4 pilares, carruseles (proyectos, equipo, experiencias), agenda de eventos, noticias, mapa de localización |
| `/try-it` | `src/routes/try-it.tsx` | Descripción del programa, carrusel, grid informativo, ponencias del año actual, histórico de años anteriores |
| `/make-it` | `src/routes/make-it.tsx` | Descripción del programa, 6 áreas de actividad (enlaces externos), grid informativo |
| `/seminarios` | `src/routes/seminarios.tsx` | Página de seminarios anuales con acordeón por año; edición actual arriba, histórico debajo |
| `/rootedcon` | `src/routes/rootedcon.tsx` | Descripción de la colaboración, carrusel de momentos, grid informativo |
| `/innova-tsn` | `src/routes/innova-tsn.tsx` | Ficha del socio industrial con enlace externo y grid de áreas |
| `/upm` | `src/routes/upm.tsx` | Ficha de la universidad con enlace externo y grid de áreas |
| `/sitemap.xml` | `src/routes/sitemap[.]xml.ts` | Sitemap generado automáticamente para SEO |

### Componentes compartidos

| Componente | Archivo | Uso |
|------------|---------|-----|
| `PageShell` | `src/components/PageShell.tsx` | Layout envolvente de las páginas principales (header + footer) |
| `InnerPage` | `src/components/InnerPage.tsx` | Layout de páginas interiores (título, descripción, grid info) |
| `AutoCarousel` | `src/components/AutoCarousel.tsx` | Carrusel reutilizable; recibe un array de `Slide` |
| `SectionHeader` | `src/components/SectionHeader.tsx` | Encabezado de sección (eyebrow + título + descripción) |
| `SiteHeader` | `src/components/SiteHeader.tsx` | Navegación superior del sitio |
| `SiteFooter` | `src/components/SiteFooter.tsx` | Pie de página |
| `Logo` | `src/components/Logo.tsx` | Logo SVG de la Cátedra |
# web_page
