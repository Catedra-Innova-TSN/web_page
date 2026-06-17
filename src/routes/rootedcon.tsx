import { createFileRoute } from "@tanstack/react-router";
import { InnerPage, InfoGrid } from "@/components/InnerPage";
import { AutoCarousel, type Slide } from "@/components/AutoCarousel";
import {
  Cpu,
  Database,
  GitBranch,
  LineChart,
  Bot,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";

export const Route = createFileRoute("/rootedcon")({
  head: () => ({
    meta: [
      { title: "RootedCon — Cátedra Innova-tsn UPM" },
      { name: "description", content: "La Cátedra participa en RootedCon para llevar a cabo el programa Make-It: prototipos reales, equipos multidisciplinares y demo day." },
      { property: "og:title", content: "RootedCon — Cátedra Innova-tsn UPM" },
      { property: "og:description", content: "Make-It en RootedCon: del prototipo a la aplicación real." },
      { property: "og:url", content: "/rootedcon" },
    ],
    links: [{ rel: "canonical", href: "/rootedcon" }],
  }),
  component: RootedConPage,
});

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
 * @constant ACTIVITIES
 * @description Áreas temáticas abordadas durante el evento.
 * @instruction Para modificar o añadir una nueva actividad:
 * 1. Para el `icon`, añade un archivo `.svg` a la carpeta `public/icons/`.
 * 2. Modifica la ruta asegurándote de no incluir `public` al inicio.
 */
const ACTIVITIES = [
  { icon: "/icons/gafas.svg", 
    label: "Realidad Virtual", 
    desc: "Explora la evolución de esta herramienta desde los primeros prototipos en 1960 hasta sus aplicaciones actuales.", 
    href: "https://www.youtube.com/watch?v=ahjAKiTdpbc"},
  { icon: "/icons/mindstorm.svg", 
    label: "LEGO Mindstorms", 
    desc: "Descubre el mundo de la robótica con LEGO Mindstorms.", 
    href: "https://www.lego.com/es-es/themes/mindstorms/about?age-gate=grown_up"},
  { icon: "/icons/ra.svg", 
    label: "Realidad Aumentada", 
    desc: "Usando sensores, matemáticas y datos de la cámara para extrapolar la posición de un objeto virtual en el mundo real.", 
    href: "https://www.youtube.com/watch?v=ECWV4sCe1Ag" },
  { icon: "/icons/lego_mecanico.svg", 
    label: "Lego Gear Bots", 
    desc: "Juguetes de ingeniería mecánica, se mueven cuando giras la manivela, una serie de ejes, levas y manivelas que simulan los pistones de un motor.", 
    href: "https://www.youtube.com/watch?v=Vv-DFDxFQlc" },
  ];

function RootedConPage() {
  return (
    <InnerPage
      eyebrow=""
      title={<>RootedCon x <span className="text-electric text-glow">Make-IT!</span></>}
      description="La Cátedra asiste a RootedCon para llevar a cabo el programa Make-It. Equipos multidisciplinares que construyen prototipos funcionales en el marco de una de las principales conferencias de ciberseguridad en español."
      externalUrl="https://www.rootedcon.com"
      externalLabel="rootedcon.com"
    >
      {/* Carrusel principal */}
      <div className="mb-12">
        <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">
          Mini <span className="text-electric text-glow">Make-IT!</span> en acción 
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-white/70">
          Momentos destacados del programa Make-It celebrado en RootedCon.
        </p>
        <div className="mt-6">
          <AutoCarousel slides={ROOTED_SLIDES} aspect="aspect-[16/8]" autoplayMs={4500} />
        </div>
      </div>

      {/* Actividades Make-It */}
      <div>
        <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">
          Cuatro áreas, una misma misión
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-white/70">
          Estas son las disciplinas en las que los equipos Make-It construyen,
          experimentan y entregan resultados durante RootedCon.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {ACTIVITIES.map((a) => (
            <a
              key={a.label}
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-stretch gap-5 overflow-hidden rounded-xl border border-electric/30 bg-black/50 p-6 text-center backdrop-blur transition hover:border-electric hover:bg-electric/5"
            >
              <ExternalLink
                size={14}
                className="absolute right-3 top-3 text-electric/60 transition group-hover:text-electric"
              />
              <div className="relative flex w-[30%] shrink-0 items-center justify-center self-stretch overflow-hidden rounded-lg bg-electric/15 text-electric ring-1 ring-electric/40 transition group-hover:bg-electric group-hover:text-white">
                <img src={a.icon} alt={a.label} className="h-full w-full object-contain" />
              </div>
              <div className="flex flex-1 flex-col justify-center py-6 pr-6">
                <h3 className="font-display text-xl font-bold">{a.label}</h3>
                <p className="mt-2 text-xs text-white/60">{a.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </InnerPage>
  );
}