import { createFileRoute } from "@tanstack/react-router";
import { InnerPage } from "@/components/InnerPage";
import { AutoCarousel, Slide } from "@/components/AutoCarousel";
import { Cpu, Database, GitBranch, LineChart, Bot, ShieldCheck, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/make-it")({
  head: () => ({
    meta: [
      { title: "Make-It — Cátedra Innova-tsn UPM" },
      {
        name: "description",
        content: "Make-It: del prototipo a la aplicación real. Programa avanzado de la Cátedra.",
      },
      { property: "og:title", content: "Make-It — Cátedra Innova-tsn UPM" },
      { property: "og:description", content: "Del prototipo a la aplicación real." },
      { property: "og:url", content: "/make-it" },
    ],
    links: [{ rel: "canonical", href: "/make-it" }],
  }),
  component: MakeItPage,
});

const HERO_SLIDES: Slide[] = [
  { title: "", image: "/images/2026/make_bck.jpg", hue: 250 },
  { title: "", image: "/images/2026/make_fondo.jpeg", hue: 260 },
  { title: "", image: "/images/2026/make_title_back.jpeg", hue: 245 },
  { title: "", image: "/images/2026/make_1.jpeg", hue: 245 },
  { title: "", image: "/images/2026/make_2.jpeg", hue: 245 },
  { title: "", image: "/images/2026/make_3.jpg", hue: 245 },
];

// Sustituye href por la URL externa correspondiente cuando la tengas.
const ACTIVITIES = [
  {
    icon: "/icons/2026/realidad_virtual.png",
    label: "Realidad Virtual",
    desc: "Explora la evolución de esta herramienta desde los primeros prototipos en 1960 hasta sus aplicaciones actuales.",
    href: "https://www.youtube.com/watch?v=ahjAKiTdpbc",
  },
  {
    icon: "/icons/2026/mindstorms.png",
    label: "LEGO Mindstorms",
    desc: "Descubre el mundo de la robótica con LEGO Mindstorms.",
    href: "https://www.lego.com/es-es/themes/mindstorms/about?age-gate=grown_up",
  },
  {
    icon: "/icons/2026/gearbots.png",
    label: "Lego Gear Bots",
    desc: "Juguetes de ingeniería mecánica, se mueven cuando giras la manivela, una serie de ejes, levas y manivelas que simulan los pistones de un motor.",
    href: "https://www.youtube.com/watch?v=Vv-DFDxFQlc",
  },
  {
    icon: "/icons/2026/programacion.png",
    label: "Programación por Bloques",
    desc: "Operaciones matemáticas, lógicas, de gestión de cadenas de vectores, etc para los más pequeños",
    href: "https://quees.com/programacion-bloques/#%C2%BFQu%C3%A9_es_la_programaci%C3%B3n_por_bloques_en_scratch?",
  },
  {
    icon: "/icons/2026/realidad_aumentada.png",
    label: "Realidad Aumentada",
    desc: "Usando sensores, matemáticas y datos de la cámara para extrapolar la posición de un objeto virtual en el mundo real.",
    href: "https://www.youtube.com/watch?v=ECWV4sCe1Ag",
  },
  {
    icon: "/icons/2026/microbit.png",
    label: "Micro:bit",
    desc: "Introducir a los niños en el apasionante mundo de la tecnología educativa, la programación y la robótica de una manera amena.",
    href: "https://www.youtube.com/watch?v=5J3aVSQcksM",
  },
];

/**
 * @constant ROOTED_SLIDES
 * @description Diapositivas para el carrusel principal de la página RootedCon ("Mini Make-IT! en acción").
 * @instruction Para añadir imágenes de la RootedCon:
 * 1. Guarda las fotografías en `public/images/202X/`.
 * 2. Referéncialas aquí en la propiedad `image` (ej. `"/images/2026/foto.jpg"`).
 * 3. Omite siempre el prefijo `public` en las rutas.
 */
const ROOTED_SLIDES: Slide[] = [
  { title: "", image: "/images/2026/mini_lego.jpg", hue: 250 },
  { title: "", image: "/images/2026/mini_ra1.jpg", hue: 260 },
  { title: "", image: "/images/2026/mini_ra2.jpg", hue: 245 },
  { title: "", image: "/images/2026/mini_rv1.jpg", hue: 265 },
  { title: "", image: "/images/2026/mini_rv2.jpg", hue: 255 },
];

/**
 * @constant ACTIVITIESROOTEDCON
 * @description Áreas temáticas abordadas durante el evento.
 * @instruction Para modificar o añadir una nueva actividad:
 * 1. Para el `icon`, añade un archivo `.svg` a la carpeta `public/icons/`.
 * 2. Modifica la ruta asegurándote de no incluir `public` al inicio.
 */
const ACTIVITIESROOTEDCON = [
  {
    icon: "/icons/gafas.svg",
    label: "Realidad Virtual",
    desc: "Explora la evolución de esta herramienta desde los primeros prototipos en 1960 hasta sus aplicaciones actuales.",
    href: "https://www.youtube.com/watch?v=ahjAKiTdpbc",
  },
  {
    icon: "/icons/mindstorm.svg",
    label: "LEGO Mindstorms",
    desc: "Descubre el mundo de la robótica con LEGO Mindstorms.",
    href: "https://www.lego.com/es-es/themes/mindstorms/about?age-gate=grown_up",
  },
  {
    icon: "/icons/ra.svg",
    label: "Realidad Aumentada",
    desc: "Usando sensores, matemáticas y datos de la cámara para extrapolar la posición de un objeto virtual en el mundo real.",
    href: "https://www.youtube.com/watch?v=ECWV4sCe1Ag",
  },
  {
    icon: "/icons/lego_mecanico.svg",
    label: "Lego Gear Bots",
    desc: "Juguetes de ingeniería mecánica, se mueven cuando giras la manivela, una serie de ejes, levas y manivelas que simulan los pistones de un motor.",
    href: "https://www.youtube.com/watch?v=Vv-DFDxFQlc",
  },
];

function MakeItPage() {
  return (
    <InnerPage
      eyebrow=""
      title={<>Make-IT</>}
      description="Talleres de ingeniería informática, Robótica, Inteligencia Artificial, Diseño de aplicaciones móviles, programación de videojuegos, diseño e impresión 3D y mucho más. Make-It es el programa avanzado de la Cátedra, donde los estudiantes aplican sus conocimientos en proyectos reales."
    >
      {/* Carrusel principal */}
      <div className="mb-12">
        <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">
          La cátedra Innova-tsn UPM en Make-IT!
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-white/70">
          Momentos, sesiones y equipos que han pasado por el programa.
        </p>
        <div className="mt-6">
          <AutoCarousel slides={HERO_SLIDES} aspect="aspect-[16/8]" autoplayMs={3500} />
        </div>
      </div>

      {/* Actividades (ahora arriba) */}
      <div>
        <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">
          Seis áreas, una misma misión
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-white/70">
          Estas son las disciplinas en las que los equipos Make-It construyen, experimentan y
          entregan resultados.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
          {ACTIVITIES.map((a) => (
            <a
              key={a.label}
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center justify-center rounded-xl border border-electric/30 bg-black/50 p-6 text-center backdrop-blur transition hover:border-electric hover:bg-electric/5"
            >
              <ExternalLink
                size={14}
                className="absolute right-3 top-3 text-electric/60 transition group-hover:text-electric"
              />
              <div className="grid h-24 w-24 place-items-center rounded-lg transition group-hover:text-white">
                <img src={a.icon} alt={a.label} className="h-full w-full object-contain" />
              </div>
              <h3 className="mt-4 font-display text-sm font-bold uppercase tracking-wider">
                {a.label}
              </h3>
              <p className="mt-1 text-xs text-white/60">{a.desc}</p>
            </a>
          ))}
        </div>
      </div>

      {/* RootedCon */}
      <div className="mt-14">
        <div className="mb-8" gap-2>
          <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">RootedCon x Make-IT!</h2>
          <p className="mt-3 max-w-2xl text-sm text-white/70">
            La Cátedra asiste a RootedCon para llevar a cabo el programa Make-It. Equipos
            multidisciplinares que construyen prototipos funcionales en el marco de una de las
            principales conferencias de ciberseguridad en español.
          </p>
          <a
            href="https://www.rootedcon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-md bg-orange px-5 py-3 font-mono text-sm uppercase tracking-wider text-white"
          >
            rootedcon.com <ExternalLink size={14} />
          </a>
        </div>

        {/* Carrusel RootedCon */}
        <div className="mb-12">
          <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl gap-2">
            Mini Make-IT! en acción
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-white/70">
            Momentos destacados del programa Make-It celebrado en RootedCon.
          </p>
          <div className="mt-6">
            <AutoCarousel slides={ROOTED_SLIDES} aspect="aspect-[16/8]" autoplayMs={4500} />
          </div>
        </div>
      </div>
      {/* Logo Make-It */}
      <div className="mt-14 flex items-center justify-center">
        <a href="https://www.fi.upm.es/web/makeit/" target="_blank" rel="noopener noreferrer">
          <img
            src={"/logos/logo_makeit.png"}
            alt="Make-It — Campus Tecnológico ETSI Informáticos UPM"
            className="h-auto max-h-40 w-auto object-contain drop-shadow-lg"
          />
        </a>
      </div>
    </InnerPage>
  );
}
