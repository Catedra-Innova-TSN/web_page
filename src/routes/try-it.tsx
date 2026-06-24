import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { InnerPage, InfoGrid } from "@/components/InnerPage";
import { AutoCarousel, type Slide } from "@/components/AutoCarousel";
import { Calendar, Mic, ChevronDown, ChevronUp, User } from "lucide-react";

export const Route = createFileRoute("/try-it")({
  head: () => ({
    meta: [
      { title: "Try-IT! — Cátedra Innova-tsn UPM" },
      {
        name: "description",
        content: "Programa Try-IT!: primer contacto real con proyectos de datos para estudiantes.",
      },
      { property: "og:title", content: "Try-IT! — Cátedra Innova-tsn UPM" },
      { property: "og:description", content: "Tu primera experiencia real con datos." },
      { property: "og:url", content: "/try-it" },
    ],
    links: [{ rel: "canonical", href: "/try-it" }],
  }),
  component: TryItPage,
});

interface Talk {
  date: string;
  title: string;
  speaker: string;
  desc?: string;
  /** hue for placeholder photo */
  hue?: number;
  image?: string;
}

interface YearTalks {
  year: number;
  talks: Talk[];
}

/**
 * @constant HERO_SLIDES
 * @description Diapositivas para el carrusel principal de la página Try-IT!
 * @instruction Para añadir o modificar imágenes del carrusel:
 * 1. Sube la foto a `public/images/202X/`.
 * 2. Referencia la foto en la propiedad `image` (ej. `"/images/2026/tryit_foto.jpg"`).
 * 3. Nota: Puedes usar la ruta con o sin `/` inicial, pero NO incluyas `public/`.
 */
const HERO_SLIDES: Slide[] = [
  { title: "Bienvenida TryIt 2026", image: "/images/2026/tryit_stand.jpg", hue: 250 },
  { title: "Keynotes", image: "/images/2026/tryit_keynote1.jpg", hue: 260 },
  {
    title: "Visita de Rectorado UPM a nuestro stand en Try-IT!",
    image: "/images/2026/tryit_rectorado.jpg",
    hue: 245,
  },
  { title: "Mesa redonda con empresas", image: "/images/2026/tryit_mesa.jpg", hue: 245 },
  //{ title: "Pasarela a Make-It", subtitle: "De TryIt al programa avanzado", hue: 265 },
];

/**
 * @constant TALKS_BY_YEAR
 * @description Listado de ponencias agrupadas por año. El primer elemento (año más reciente)
 * se muestra desplegado por defecto. Los anteriores van al "Histórico".
 * @instruction Para añadir la foto de un ponente:
 * 1. Sube la imagen del ponente a `public/images/people/innova/` (o la carpeta correspondiente).
 * 2. Referénciala en la propiedad `image` del objeto de la charla.
 * 3. Si no hay `image`, se mostrará un degradado y un icono genérico según el `hue`.
 */
const TALKS_BY_YEAR: YearTalks[] = [
  {
    year: 2026,
    talks: [
      {
        date: "16 MAR, 12:00 - 13:00​",
        title: "¡Piensa estratégicamente para ser diferente!​",
        speaker:
          "Ana María Niño - Comunicadora Estratégica​ y Consultora Desarrollo de Negocio en Innova-tsn",
        desc: "Conoce las claves para construir tu sello profesional.​ Durante la sesión conocerás temas claves del pensamiento estratégico para potenciar tu perfil y construir tu sello profesional como valor diferencial en el mundo laboral.\nCompartiremos algunas  claves del autoconocimiento, la comunicación asertiva y el desarrollo de habilidades profesionales, para que cuando tu vida profesional de un giro, sepas aprovechar tus “herramientas”, logres adaptarte a las nuevas realidades y abrirte a nuevos caminos.​​",
        image: "/images/people/innova/ana_maria.png",
        hue: 250,
      },
      {
        date: "16 MAR, 15:30 - 17:00",
        title: "Prompting para identificar sentimiento y sesgos en texto",
        speaker:
          "Beatriz Reyes Sánchez - Data Engineer Innova-tsn y Consultora en cuentas de seguros.​",
        desc: "Ingeniera informática con Máster en análisis financiero y gestión bancaria, con más de 7 años de experiencia en consultoría en el sector banca-seguros, especializada en proyectos basados en la ingestión, procesamiento y transformación de datos para su explotación analítica.​\nActualmente participa en proyectos de Speech Analytics estudiando interacciones de clientes mediante técnicas de procesamiento de lenguaje natural, utilizando herramientas de análisis textual y modelos de lenguaje de IA generativa (LLMs) a través de prompting para identificar sentimiento, intención e insights relevantes.​\nLe apasiona la aplicación de conocimientos teóricos y prácticos en el uso de datos e IA para mejorar la vida de los clientes, personalizando beneficios, apoyando su salud y analizando interacciones con Speech Analytics para comprender mejor sus necesidades.​",
        image: "/images/people/innova/beatriz_reyes.png",
        hue: 260,
      },
      {
        date: "17 ABR, 10:00 - 12:00",
        title:
          "Del dato a la decisión: un acercamiento práctico para entender cómo se construye un modelo de Machine Learning real​",
        speaker: "Ángela Díaz - Senior Data Scientist en Innova-tsn​",
        desc: "En esta sesión podrás conocer elementos clave del Machine Learning, recorreremos paso a paso el ciclo completo de vida de un proyecto de aprendizaje automático. Por medio de un caso real de predicción de grafitis en trenes, comprenderemos la definición del problema, la preparación de los datos, el modelado, la evaluación y despliegue y los retos a los que nos podemos enfrentar en cada fase.​\nEste taller será una sesión dinámica y participativa para entender qué ocurre cuando el Machine Learning sale del entorno académico y entra en la empresa para ser una base en soluciones de Inteligencia Artificial.​",
        image: "/images/people/innova/angela_diaz.png",
        hue: 245,
      },
      {
        date: "18 MAY, 11:00 - 11:40​",
        title: "Agentic AI: cuando el pensamiento pasa a la acción​",
        speaker: "Leyre Sánchez - Consultora en IA Generativa - Innova-tsn",
        desc: "Hablamos cada vez más de agentes de IA, pero ¿qué significa realmente que una máquina no solo genere texto, sino que pueda decidir y actuar?.​\nEn esta charla exploraremos qué son los grandes modelos de lenguaje (LLMs), cómo funcionan y por qué a veces parecen razonar, para entender después el salto hacia sistemas capaces de planificar, tomar decisiones y ejecutar tareas de forma autónoma. Una oportunidad para comprender el nuevo paradigma de la IA orientada a la acción y su impacto en la investigación, el trabajo y la vida cotidiana.​\nSi quieres entender hacia dónde avanza la IA y cómo puede potenciar tu forma de trabajar y de investigar, esta charla es para ti. ¡Únete y da el salto al futuro de la acción inteligente!​",
        image: "/images/people/innova/leyre_sanchez.png",
        hue: 265,
      },
    ],
  },
  {
    year: 2025,
    talks: [
      {
        date: "18 MAY​",
        title: "Mesa Redonda: Ética tecnológica​",
        speaker: "Begoña Vega​ - Head of AI Models & Applications",
        hue: 265,
      },
      {
        date: "19 MAY​",
        title: "Del campo de fútbol a la sala de proyectos tecnológicos​",
        speaker: "Alin Nicolae Giurca​ - Project Manager Innova-tsn",
        hue: 265,
      },
      {
        date: "20 MAY​",
        title: "Uso de la IA para la optimización y automatización de procesos de recruiting​",
        speaker:
          "Juan Ignacio Moreno​ - Chief Infraestructure Officer & Solution Architecture Innova-tsn​; Jose Barambones",
        hue: 265,
      },
    ],
  },
  {
    year: 2024,
    talks: [
      {
        date: "18 MAY​",
        title: "Ingeniería de prompts: técnicas y estrategias para Large Language Models​",
        speaker: "Fernando Sebastián​ - Senior Data Scientist Innova-tsn",
        hue: 265,
      },
      {
        date: "20 MAY​",
        title:
          "Cómo montar un departamento de ciberseguridad sin morir en el intento. Una perspectiva de Innova-tsn​​",
        speaker:
          "Luis Jorge González - Chief Infraestructure Officer & Solution Architecture Innova-tsn; Jose Manuel Toloba - Lead Project Manager for Internal Systems and Cybersecurity Area ​Innova-tsn",
        hue: 265,
      },
      {
        date: "21 MAY​",
        title: "¿Cómo será tu trabajo en proyectos de IA y Data?​​",
        speaker: "Ignacio Barahona - Head of Data Value y Socio Fundador de Innova-tsn",
        hue: 265,
      },
      {
        date: "22 MAY​",
        title: "¡Piensa estratégicamente para ser diferente!​​",
        speaker:
          "Ana María Niño - Comunicadora Estratégica​ y Consultora Desarrollo de Negocio Innova-tsn",
        hue: 265,
      },
    ],
  },
];

function TryItPage() {
  const [showHistory, setShowHistory] = useState(false);
  const current = TALKS_BY_YEAR[0];
  const older = TALKS_BY_YEAR.slice(1);

  return (
    <InnerPage
      eyebrow=""
      title={<>Try-IT!</>}
      description="El Try It! es el congreso tecnológico más grande de la UPM. Su objetivo de acercar las tendencias tecnológicas actuales a los participantes, así como ofrecer un contacto directo con las empresas más punteras del sector."
    >
      {/* Carrusel principal */}
      <div className="mb-12">
        <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">
          La cátedra Innova-tsn UPM en Try-IT!
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-white/70">
          Momentos, sesiones y equipos que han pasado por el programa.
        </p>
        <div className="mt-6">
          <AutoCarousel slides={HERO_SLIDES} aspect="aspect-[16/8]" autoplayMs={4500} />
        </div>
      </div>

      <InfoGrid
        items={[
          {
            title: "Seminarios",
            desc: "Workshops donde se trabaja habilidades técnicas y multidisciplinarias.",
          },
          {
            title: "Scaperoom",
            desc: "Experiencias de aprendizaje inmersivas basadas en desafíos.",
          },
          {
            title: "Networking",
            desc: "Oportunidades de empleo y networking con empresas del sector.",
          },
          {
            title: "Compromiso",
            desc: "Participación activa en el programa y colaboración con otros estudiantes cada año.",
          },
        ]}
      />

      {/* Ponencias edición actual */}
      <div className="mt-12">
        <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Edición {current.year}</h2>
        <p className="mt-3 max-w-2xl text-sm text-white/70">
          Estas son las sesiones programadas para este año dentro de Try-IT!.
        </p>
        <div className="mt-6 grid gap-4">
          {current.talks.map((t) => (
            <article
              key={t.title}
              className="flex items-stretch gap-0 overflow-hidden rounded-xl border border-electric/30 bg-black/50 backdrop-blur transition hover:border-electric min-h-[180px]"
            >
              <div
                className="relative flex w-[30%] shrink-0 items-center justify-center self-stretch overflow-hidden"
                style={{
                  background: t.image
                    ? `url(${t.image}) center/cover`
                    : `linear-gradient(135deg, hsl(${t.hue ?? 250} 90% 16%), #1705DA 70%, #000)`,
                }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_60%)]" />
                {!t.image && (
                  <User
                    size={48}
                    className="relative text-white drop-shadow-[0_0_12px_rgba(23,5,218,0.9)]"
                  />
                )}
              </div>
              <div className="flex flex-1 flex-col justify-center p-5">
                <div className="font-mono text-[10px] uppercase tracking-widest text-electric">
                  <Calendar size={10} className="mr-1 inline" /> {t.date} {current.year}
                </div>
                <h3 className="mt-1 font-display text-lg font-bold">{t.title}</h3>
                <div className="mt-1 text-xs text-white/60">Ponente: {t.speaker}</div>
                {t.desc && <p className="mt-3 text-sm text-white/70">{t.desc}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Histórico */}
      <div className="mt-14">
        <button
          onClick={() => setShowHistory((v) => !v)}
          className="flex w-full items-center justify-between gap-4 rounded-xl border border-electric/40 bg-black/50 px-6 py-4 text-left backdrop-blur transition hover:bg-electric/5"
        >
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-electric">
              Histórico
            </div>
            <div className="mt-1 font-display text-lg font-bold">Descubre años anteriores</div>
          </div>
          {showHistory ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        {showHistory && (
          <div className="mt-6 space-y-8">
            {older.map((y) => (
              <section key={y.year}>
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-md bg-electric/15 font-display text-sm font-bold text-electric ring-1 ring-electric/40">
                    {y.year}
                  </div>
                  <h3 className="font-display text-xl font-bold">Actividades {y.year}</h3>
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {y.talks.map((t) => (
                    <article
                      key={t.title}
                      className="flex items-center gap-4 rounded-xl border border-electric/30 bg-black/50 p-5 backdrop-blur transition hover:border-electric"
                    >
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-electric/15 text-electric ring-1 ring-electric/40">
                        <Mic size={16} />
                      </div>
                      <div className="flex-1">
                        <div className="font-mono text-[10px] uppercase tracking-widest text-electric">
                          {t.date} {y.year}
                        </div>
                        <div className="mt-1 font-display text-sm font-bold">{t.title}</div>
                        <div className="mt-1 text-xs text-white/60">{t.speaker}</div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </InnerPage>
  );
}
