import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { AutoCarousel, type Slide } from "@/components/AutoCarousel";
import { ExperienceCarousel, type Experience } from "@/components/ExperienceCarousel";
import { SectionHeader } from "@/components/SectionHeader";
import { Logo } from "@/components/Logo";
import {
  FlaskConical,
  GraduationCap,
  Users,
  Calendar,
  MapPin,
  ArrowDown,
  Newspaper,
  Earth,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cátedra Innova-tsn UPM — Analytics en la sociedad digital" },
      {
        name: "description",
        content:
          "Donde los datos construyen la historia",
      },
      { property: "og:title", content: "Cátedra Innova-tsn UPM" },
      { property: "og:description", content: "Analytics en la sociedad digital." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

/**
 * @constant PILLARS
 * @description Define los 4 pilares fundamentales de la Cátedra que se muestran en la sección "Qué hacemos".
 * Para cambiar el icono de un pilar, asegúrate de guardar el nuevo archivo `.svg` en la carpeta `public/icons/`
 * y luego actualiza la ruta aquí omitiendo la barra inicial (ej. "public/icons/nuevo_icono.svg").
 * El `hue` (0-360) determina el color del degradado de fondo.
 */
const PILLARS = [
  {
    icon: "public/icons/loupe.svg",
    title: "I+D+i para la sociedad",
    desc: "Aplicación práctica de datos y tecnología complementa a la perfección el enfoque académico de la UPM. Esta asociación permite la transferencia de los resultados de investigación en soluciones que benefician a la industria, la academia y a la sociedad en general.",
    hue: 250,
  },
  {
    icon: "public/icons/mortarboard.svg",
    title: "Fomento del Talento",
    desc: "La Cátedra fomenta un entorno de aprendizaje dinámico en el que los estudiantes de la UPM pueden interactuar con proyectos reales del sector de Innova-tsn. Esta exposición complementa su formación y les dota de habilidades para estar a la vanguardia del mercado laboral.",
    hue: 260,
  },
  {
    icon: "public/icons/coach.svg",
    title: "Mentoring",
    desc: "Profesionales experimentados actuarán como mentores, guiando a los estudiantes para hacer puente entre la academia y la industria. Esta Cátedra busca nutrir a la sociedad de nuevas generaciones de profesionales capaces de abordar cualquier reto tecnológico. ",
    hue: 245,
  },
  {
    icon: "public/icons/worldwide.svg",
    title: "Aplicación en el Mundo Real",
    desc: "papel de la UPM como nexo para la difusión del conocimiento, canalización de iniciativas científicas y de investigación, y el compromiso con la comunidad. Los proyectos de estudio, talleres y seminarios conjuntos ayudarán a resolver problemas del mundo real.",
    hue: 265,
  },
] as const;

/**
 * @constant PROJECT_SLIDES
 * @description Contiene las diapositivas del carrusel "Conoce lo que hacemos" (Eventos, proyectos e hitos).
 * @instruction Para añadir una imagen nueva:
 * 1. Sube la imagen a la carpeta `public/images/202X/`.
 * 2. Referencia la imagen en la propiedad `image` como `"images/202X/tu_imagen.jpg"`.
 * 3. Si omites la propiedad `image`, el componente generará un fondo degradado usando el valor de `hue`.
 */
const PROJECT_SLIDES: Slide[] = [
  { title: "Acto de renovación de la cátedra", 
    subtitle: "La Cátedra Innova-tsn UPM ha renovado su compromiso con la Universidad Politécnica de Madrid para continuar impulsando la investigación y la formación en el ámbito de la ciencia de datos.",
    image: "images/2026/renovacion_catedra.jpg", hue: 250 },
  { title: "Try IT!", 
    subtitle: "Patrocinamos el Congreso Try IT! con talleres, conferencias, una mesa redonda y stand en la feria de talento.", 
    image: "images/2026/tryit_stand.jpg", hue: 260 },
  { title: "Make IT!", 
    subtitle: "Patrocinamos el campamento de verano Make-IT!. Una jornada de aprendizaje que acerca a niños y niñas al mundo de la informática", 
    image: "images/2024/makeit.jpeg", hue: 240 },
  { title: "Taller de liderazgo", 
    subtitle: "La cátedra presenta el taller \"Qué tipo de líder quieres llegar a ser\" impartido por Innova-tsn en la ETSI Informáticos de la UPM.", 
    image: "images/2024/taller_consultoria.jpg", hue: 270 },
  { title: "Seminarios", 
    subtitle: "Cómo escribir un prompt para obtener el resultado deseado de un modelo de lenguaje. Taller impartido por Innova-tsn en la ETSI Informáticos de la UPM.", 
    image: "images/2026/seminario.jpg", hue: 230 },
  { title: "Oportunidad laboral", 
    subtitle: "Continuamos gestionando oportunidades para alumnos de Grado y Máster, con posibilidad de incorporación a plantilla según las necesidades de los proyectos.", 
    image: "images/2026/oportunidad_laboral.jpg", hue: 270 },
  {
    title: "Visita al Observatorio I+D+I de la Cátedra",
    subtitle: "Consulta aquí las memorias de la Cátedra publicadas en el observatorio.",
    href: "https://www.upm.es/observatorio/vi/index.jsp?pageac=proyectos/ficha_proyecto.jsp&idp=18805&tipo=Catedras",
    image: "images/observatorio.png",
    hue: 230,
  },
];

/**
 * @constant TEAM_SLIDES
 * @description Carrusel del equipo de la Cátedra ("Las personas detrás del dato").
 * @instruction Para añadir la foto de un nuevo integrante:
 * 1. Sube la foto (preferiblemente cuadrada o de proporciones 3:4) a `public/images/people/innova/` o `upm/`.
 * 2. Usa esa ruta en la propiedad `image` (ej. `"images/people/upm/nueva_persona.png"`).
 */
const TEAM_SLIDES: Slide[] = [
  { title: "Juan Ignacio Moreno", 
    subtitle: "Director de la Cátedra Innova-tsn & UK Country Manager & Global Head of AI en Innova-tsn", 
    image: "images/people/innova/juan_ignacio.png", hue: 250 },
  { title: "Ana Maria Niño", 
    subtitle: "Coordinadora de la Cátedra Innova-tsn UPM por parte de Innova-tsn", 
    image: "images/people/innova/ana_maria.png", hue: 260 },
  { title: "Begoña Vega", 
    subtitle: "Head of AI Models & Applications AI Solutions & Strategy en Innova-tsn", 
    image: "images/people/innova/begona_vega.png", hue: 245 },
  { title: "Jose Ignacio Bernaldo", 
    subtitle: "Head of Big Data, AI & ML Technologies", 
    image: "images/people/innova/jose_ignacio.png", hue: 265 },
  { title: "Mencía Vega", 
    subtitle: "Talento y Cultura en Innova-tsn", 
    image: "images/people/innova/mencia_vega.jpg", hue: 255 },
  { title: "Elena Villaba", 
    subtitle: "Directora de la Cátedra Innova-tsn UPM por parte de la UPM. Human-Computer Interaction/UX, personas mayores y salud en la UPM", 
    image: "images/people/upm/elena_villalba.png", hue: 248 },
  { title: "Cristian Moral", 
    subtitle: "Human-Computer Interaction/UX, Virtual Reality en la UPM", 
    image: "images/people/upm/cristian_moral.jpg", hue: 265 },
  { title: "Angélica de Antonio", 
    subtitle: "Human-Computer Interaction/UX, Virtual Reality, eLearning y Psicología en la UPM", 
    image: "images/people/upm/angelica.png", hue: 255 },
  { title: "Jose María Barambones", 
    subtitle: "Human-Computer Interaction/UX, Virtual Reality, Games and AI en la UPM", 
    image: "images/people/upm/jose_maria_txema.jpg", hue: 248 },
  { title: "Loic Martínez", 
    subtitle: "Human-Computer Interaction/UX y accesibilidad en la UPM", 
    image: "images/people/upm/loic.jpg", hue: 265 },
  { title: "Ricardo Imbert", 
    subtitle: "Human-Computer Interaction/UX y agentes en la UPM", 
    image: "images/people/upm/ricardo.jpg", hue: 255 },
  { title: "Jaime Ramírez", 
    subtitle: "Salud, eLearning y psicología en la UPM", 
    image: "images/people/upm/jaime.png", hue: 248 },
];

/**
 * @constant EXPERIENCE_SLIDES
 * @description Testimonios y experiencias de antiguos alumnos/empleados ("Experiencias de primera mano").
 * @instruction Las imágenes de perfil deben añadirse en la carpeta `public/images/people/alumni/`.
 */
const EXPERIENCE_SLIDES: Experience[] = [
  {
    name: "Carmen Romera Navarro",
    title: "Ingeniera en Tecnologías Industriales de la UPM, Consultora – 4 años en Innova-tsn",
    description: "Esta es mi primera experiencia laboral, ya que empecé a trabajar en Innova-tsn realizando las prácticas curriculares de mi Máster. Ha sido una experiencia muy enriquecedora. Poder trabajar codo con codo con tantos compañeros de tan amplia experiencia, y que siempre estén dispuestos a ayudarme a mejorar, sin duda, ha propiciado el impulso de mi carrera profesional. Además, es genial trabajar en una empresa que ofrece retos constantes para desarrollar todo tu potencial.",
    image: "images/people/alumni/carmen_romera.jpg",
    hue: 250,
  },
  {
    name: "Roberto Doncel Muñoz",
    title: "Ingeniero Técnico en Topografía de la UPM, Consultor – 2 años en Innova-tsn",
    description: "Mi experiencia en Innova-tsn ha sido muy enriquecedora. He tenido la oportunidad de trabajar en proyectos innovadores y de aprender de profesionales con gran experiencia.",
    image: "images/people/alumni/roberto_doncel.jpg",
    hue: 250,
  },
  {
    name: "Sonia Prieto Sainz",
    title: "Ingeniera Técnica en Informática de Gestión, Administrador y Desarrollo del Salesforce  – 6 años en Innova-tsn",
    description: "Mi experiencia en Innova-tsn ha sido muy enriquecedora. He tenido la oportunidad de trabajar en proyectos innovadores y de aprender de profesionales con gran experiencia.",
    image: "images/people/alumni/sonia_prieto.jpg",
    hue: 250,
  },
];

/**
 * @constant EVENTS
 * @description Lista de próximos eventos para la sección "Agenda". 
 * Los eventos pasados pueden comentarse o borrarse de esta lista.
 */
const EVENTS = [ 
  /*{ date: "12 JUN", title: "Sesión TryIt: Datos abiertos de Madrid", place: "ETSI Informáticos · Aula 1", tag: "TryIt" },*/
  { date: "NONE", title: "NONE", place: "ETSI Informáticos", tag: "NONE" }
];

/**
 * @constant NEWS
 * @description Últimas noticias relacionadas con la Cátedra. Se muestran en formato de tarjetas ("Noticias").
 * @instruction Para añadir la imagen de portada de la noticia:
 * 1. Guarda la imagen en `public/images/202X/`.
 * 2. Referénciala aquí en la propiedad `image` (ej. `"images/2026/nueva_noticia.jpg"`).
 */
const NEWS = [
    {
    source: "UPM",
    title: "Renovación de la Cátedra Innova-tsn UPM",
    excerpt: "La Cátedra Innova-tsn ha impulsado más de 50 iniciativas en los ámbitos de la formación, la investigación, el fomento de la excelencia y la atracción de talento, beneficiando a más de 1.000 estudiantes.",
    when: "1 de Junio de 2026",
    image: "images/2026/renovacion_bienvenida.jpg",
    href: "https://www.upm.es/?id=CON28263&prefmt=articulo&fmt=detail",
    hue: 245,
  },
  {
    source: "Cátedra Innova-tsn UPM",
    title: "Innova-tsn en el Try IT! como patrocinador diamante",
    excerpt: "Innova-tsn participa otro año más en el Try IT! 2026 como patrocinador diamante. Feria de empleo, talleres, seminarios, keynotes y scaperoom.",
    when: "16-20 de Marzo 2026",
    image: "images/2026/tryit_feria.jpg",
    href: "/try-it",
    hue: 245,
  },
  {
    source: "LinkedIn",
    title: "Cátedra de Innova-tsn en la UPM acompaña a Ricardo Imbert Paredes en su toma de posesión como Director de la ETSIINF",
    excerpt: "",
    when: "2 de junio 2025",  
    image: "images/2025/toma_posesion_ricardo.jpg",
    href: "https://www.linkedin.com/posts/innovatsn_upm-catedrainnovaupm-caertedraanalytics-activity-7333859651161096192-xDCz?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAABMp1mkB5e1u6VS6OmwOhynQSWZJPUmmvaQ",
    hue: 245,
  },
  {
    source: "LinkedIn",
    title: "Mesa redonda sobre igualdad de género en el sector tecnológico en Beijing 30",
    excerpt: "Mesa redonda sobre igualdad de género en el sector tecnológico.",
    when: "Noviembre 2025",
    image: "images/2025/mesa_redonda_beijin30.jpg",
    href: "https://www.linkedin.com/posts/innovatsn_innovaupmchair-innovatsn-equality-ugcPost-7386417622701084672-gZ47?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAABMp1mkB5e1u6VS6OmwOhynQSWZJPUmmvaQ",
    hue: 245,
  },
];
/**
 * @constant SALA
 * @description Imágenes y enlaces a las distintas salas del campus, mostradas en la sección "Encuéntranos".
 * @instruction Las fotos de las salas deben guardarse en `public/images/sala_zero_one/`.
 */
const SALA = [
  {
    id: 1,
    title: "Sala 1",
    image: "images/sala_zero_one/entrada.jpg",
    href: "/sala1",
    hue: 250
  },
    {
    id: 2,
    title: "Sala 2",
    image: "images/sala_zero_one/cafe.jpg",
    href: "/sala2",
    hue: 250
  },
  {
    id: 3,
    title: "Sala 3",
    image: "images/sala_zero_one/taller.jpg",
    href: "/sala3",
    hue: 250
  },
  {
    id: 4,
    title: "Sala 4",
    image: "images/sala_zero_one/1.jpg",
    href: "/sala4",
    hue: 250
  },
];

function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden scan-line">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
          <div className="flex flex-col items-start gap-6">
            <Logo className="h-64 w-64" />
            <h1 className="font-display text-5xl font-bold leading-[1.05] md:text-7xl">
              Cátedra Innova-tsn x UPM <br />
            </h1>
            <h2 className="font-display text-5xl font-bold leading-[1.05] md:text-7xl">
              Analytics en la <br />
              <span className="text-electric text-glow">sociedad</span> digital
            </h2>
            <p className="max-w-2xl text-lg text-white/75 md:text-xl">
              En colaboración con Innova-tsn y la Universidad Politécnica de Madrid, 
              la Cátedra Innova-tsn UPM investiga, forma y aplica la ciencia de datos en el mundo real.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#que-hacemos"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("que-hacemos")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center gap-2 rounded-md bg-electric px-5 py-3 font-mono text-sm uppercase tracking-wider text-white border-glow"
              >
                Saber más <ArrowDown size={16} className="transition group-hover:translate-y-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section id="que-hacemos" className="mx-auto max-w-7xl px-4 py-16 md:px-8 scroll-mt-24">
        <SectionHeader title="Cuatro pilares, una misión">

        </SectionHeader>
        <div className="grid gap-4 md:grid-cols-2">
          {PILLARS.map((p) => (
            <article
              key={p.title}
              className="group relative flex items-stretch gap-5 overflow-hidden rounded-xl border border-electric/30 bg-black/50 backdrop-blur transition hover:border-electric min-h-[200px]"
            >
              <div
                className="relative flex w-[30%] shrink-0 items-center justify-center self-stretch overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, hsl(${p.hue} 90% 16%), #1705DA 70%, #000)`,
                }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_60%)]" />
                <img src={p.icon} alt={p.title} className="relative h-24 w-24 drop-shadow-[0_0_12px_rgba(23,5,218,0.9)]" />
              </div>
              <div className="flex flex-1 flex-col justify-center py-6 pr-6">
                <h3 className="font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROJECTS CAROUSEL */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <SectionHeader title="Conoce lo que hacemos">
          Eventos, proyectos y hitos recientes contados en imágenes.
        </SectionHeader>
        <AutoCarousel slides={PROJECT_SLIDES} autoplayMs={2500} />
      </section>

      {/* TEAM CAROUSEL */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <SectionHeader title="Las personas detrás del dato">
          Investigadores, mentores y consultores de la Cátedra
        </SectionHeader>
        <AutoCarousel slides={TEAM_SLIDES} aspect="aspect-[3/4]" autoplayMs={2500} slideSize="sm" />
      </section>

      {/* EXPERIENCES */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <SectionHeader title="Experiencias de primera mano">
          Lo que cuentan quienes han pasado por la Cátedra.
        </SectionHeader>
        <ExperienceCarousel items={EXPERIENCE_SLIDES} />
      </section>

      {/* EVENTS */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <SectionHeader title="Próximos eventos">
          Conferencias, talleres y meetups abiertos a la comunidad.
        </SectionHeader>
        <div className="grid gap-3 md:grid-cols-2">
          {EVENTS.map((e) => (
            <article
              key={e.title}
              className="flex items-center gap-5 rounded-xl border border-electric/30 bg-black/50 p-5 backdrop-blur transition hover:border-electric"
            >
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-md bg-electric text-white">
                <Calendar size={18} />
              </div>
              <div className="flex-1">
                <div className="font-mono text-xs uppercase tracking-widest text-electric">
                  {e.date} · {e.tag}
                </div>
                <div className="mt-1 font-display text-base font-bold">{e.title}</div>
                <div className="mt-1 flex items-center gap-1 text-xs text-white/60">
                  <MapPin size={12} /> {e.place}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* NEWS */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <SectionHeader title="Noticias">
          Lo último publicado por la Cátedra y su entorno.
        </SectionHeader>
        <div className="grid gap-4 md:grid-cols-3">
          {NEWS.map((n) => (
            <a
              key={n.title}
              href={n.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
            <article
              className="flex flex-col overflow-hidden rounded-xl border border-electric/30 bg-black/50 backdrop-blur transition hover:border-electric"
            >
              <div
                className="relative aspect-[16/10] w-full"
                style={{
                  background: `linear-gradient(135deg, hsl(${n.hue} 90% 18%), #1705DA 70%, #000)`,
                }}
              >
    
                <img src={n.image} alt={n.title} className="relative w-full shrink-0 h-64 md:h-full" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-electric/40 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-electric">
                  <Newspaper size={12} /> {n.source}
                </div>
                <h3 className="font-display text-lg font-bold leading-snug">{n.title}</h3>
                <p className="mt-2 flex-1 text-sm text-white/70">{n.excerpt}</p>
                <div className="mt-4 font-mono text-[10px] uppercase tracking-widest text-white/40">
                  {n.when}
                </div>
              </div>
            </article>
            </a>
          ))}
        </div>
      </section>

      {/* FIND US */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8" id="encuentranos">
        <SectionHeader title="ETSI Informáticos  UPM">
          Campus de Montegancedo, Madrid ¡Pasa a vernos!
        </SectionHeader>
        <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <div className="overflow-hidden rounded-xl border border-electric/40">
            <iframe
              title="Mapa Cátedra Innova-tsn UPM"
              src="https://www.google.com/maps?q=ETSI+Inform%C3%A1ticos+UPM+Boadilla+del+Monte+Bloque+5&output=embed"
              width="100%"
              height="500"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0, filter: "grayscale(0.6) invert(0.92) hue-rotate(180deg)" }}
            />
          </div>
          <div className="grid grid-cols-4 gap-2 lg:grid-cols-2">
            {SALA.map((s) => (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square overflow-hidden rounded-lg border border-electric/30"
                style={{
                  background: `linear-gradient(135deg, hsl(${s.hue} 90% 14%), #1705DA 70%, #000)`,
                }}
              >
              <div className="relative w-full shrink-0 h-64 md:h-full">
                <img src={s.image} alt={s.title} className="relative w-full shrink-0 h-full" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-1.5 font-mono text-[9px] uppercase tracking-widest text-white/80">
                  Sala {s.id}
                </div>
              </div>
            </a>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
