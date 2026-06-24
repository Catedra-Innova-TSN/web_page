import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/PageShell";
import { SectionHeader } from "@/components/SectionHeader";
import { Calendar, MapPin, ChevronDown, ChevronUp, Users } from "lucide-react";

export const Route = createFileRoute("/seminarios")({
  head: () => ({
    meta: [
      { title: "Seminarios — Cátedra Innova-tsn UPM" },
      {
        name: "description",
        content: "Seminarios anuales de la Cátedra Innova-tsn UPM. Histórico por años.",
      },
      { property: "og:title", content: "Seminarios — Cátedra Innova-tsn UPM" },
      { property: "og:description", content: "Seminarios anuales de la Cátedra." },
      { property: "og:url", content: "/seminarios" },
    ],
    links: [{ rel: "canonical", href: "/seminarios" }],
  }),
  component: SeminariosPage,
});

interface Seminar {
  date: string;
  title: string;
  speaker: string;
  place: string;
  desc: string;
  /** Hue 0-360 para el placeholder de foto */
  hue?: number;
  image?: string;
}

interface YearBlock {
  year: number;
  highlight?: string;
  seminars: Seminar[];
}

/**
 * @constant YEARS
 * @description Listado de seminarios organizados por año. El año más reciente (el primero del array)
 * se muestra como "Edición actual" y abierto por defecto.
 * @instruction Para añadir un nuevo año de seminarios:
 * 1. Inserta un nuevo objeto `YearBlock` al principio de este array.
 * 2. Para las imágenes de los seminarios, guárdalas en `public/images/202X/`.
 * 3. Referéncialas en la propiedad `image` omitiendo `public/` (ej. `"/images/2026/seminario.jpg"`).
 * 4. Si la propiedad `image` se omite, se generará un fondo degradado con el `hue` especificado.
 */
const YEARS: YearBlock[] = [
  {
    year: 2026,
    highlight: "Edición actual · Datos, IA y propósito",
    seminars: [
      {
        date: "",
        title: "Desde IA Generativa hasta IAs Agenticas: un cambio de paradigma",
        speaker: "Roberto Lara Martín - Consultor senior en Innova-tsn",
        place: "ETSI Informáticos, Aula 6102",
        desc: "Cómo escribir un prompt para obtener el resultado deseado de un modelo de lenguaje.",
        image: "/images/2026/seminario.jpg",
        hue: 250,
      },
      {
        date: "",
        title: "From Generative AI to Agentic AI: a paradigm shift ",
        speaker: "Roberto Lara Martín - Senior Consultant en Innova-tsn",
        place: "ETSI Informáticos, Aula 6102",
        desc: "Cómo escribir un prompt para obtener el resultado deseado de un modelo de lenguaje.",
        image: "/images/2026/seminario.jpg",
        hue: 250,
      },
    ],
  },
  {
    year: 2025,
    highlight: "Edición actual · Datos, IA y propósito",
    seminars: [
      {
        date: "",
        title: "Desde IA Generativa hasta IAs Agenticas: un cambio de paradigma",
        speaker: "Roberto Lara Martín - Consultor senior en Innova-tsn",
        place: "ETSI Informáticos, Aula 6102",
        desc: "Cómo escribir un prompt para obtener el resultado deseado de un modelo de lenguaje.",
        image: "/images/2026/seminario.jpg",
        hue: 250,
      },
      {
        date: "",
        title: "From Generative AI to Agentic AI: a paradigm shift ",
        speaker: "Roberto Lara Martín - Senior Consultant en Innova-tsn",
        place: "ETSI Informáticos, Aula 6102",
        desc: "Cómo escribir un prompt para obtener el resultado deseado de un modelo de lenguaje.",
        image: "/images/2026/seminario.jpg",
        hue: 250,
      },
    ],
  },
  {
    year: 2023,
    highlight: "Edición actual · Datos, IA y propósito",
    seminars: [
      {
        date: "",
        title: "Desde IA Generativa hasta IAs Agenticas: un cambio de paradigma",
        speaker: "Roberto Lara Martín - Consultor senior en Innova-tsn",
        place: "ETSI Informáticos, Aula 6102",
        desc: "Cómo escribir un prompt para obtener el resultado deseado de un modelo de lenguaje.",
        image: "/images/2026/seminario.jpg",
        hue: 250,
      },
      {
        date: "",
        title: "From Generative AI to Agentic AI: a paradigm shift ",
        speaker: "Roberto Lara Martín - Senior Consultant en Innova-tsn",
        place: "ETSI Informáticos, Aula 6102",
        desc: "Cómo escribir un prompt para obtener el resultado deseado de un modelo de lenguaje.",
        image: "/images/2026/seminario.jpg",
        hue: 250,
      },
    ],
  },
];

function SeminariosPage() {
  const [openYears, setOpenYears] = useState<Set<number>>(new Set([YEARS[0]?.year]));

  const toggle = (year: number) => {
    setOpenYears((prev) => {
      const next = new Set(prev);
      next.has(year) ? next.delete(year) : next.add(year);
      return next;
    });
  };

  return (
    <PageShell>
      <section className="relative scan-line">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-24">
          <h1 className="mt-3 font-display text-5xl font-bold leading-[1.05] md:text-6xl">
            Seminarios Innova-tsn
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/75">
            Cada año, la Cátedra organiza un ciclo de seminarios abiertos a estudiantes UPM,
            profesionales y la comunidad. Encuentra el programa actual y consulta el histórico de
            ediciones anteriores.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-6 px-4 pb-24 md:px-8">
        {YEARS.map((block, idx) => {
          const isOpen = openYears.has(block.year);
          const isCurrent = idx === 0;
          return (
            <div
              key={block.year}
              className="overflow-hidden rounded-xl border border-electric/40 bg-black/50 backdrop-blur"
            >
              <button
                onClick={() => toggle(block.year)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-electric/5"
              >
                <div className="flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-md bg-electric text-white font-display text-lg font-bold">
                    {block.year}
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-electric">
                      {isCurrent ? "Edición actual" : "Histórico"}
                    </div>
                    <div className="mt-1 font-display text-xl font-bold">
                      Seminarios {block.year}
                    </div>
                    {block.highlight && (
                      <div className="mt-1 text-sm text-white/60">{block.highlight}</div>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/70">
                  {block.seminars.length} sesiones
                  {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
              </button>

              {isOpen && (
                <div className="grid gap-3 border-t border-electric/30 p-6 md:grid-cols-2">
                  {block.seminars.map((s) => (
                    <article
                      key={s.title}
                      className="flex items-stretch overflow-hidden rounded-lg border border-electric/30 bg-black/40 transition hover:border-electric min-h-[200px]"
                    >
                      <div
                        className="relative flex w-[30%] shrink-0 items-center justify-center self-stretch overflow-hidden"
                        style={{
                          background: s.image
                            ? `url(${s.image}) center/cover`
                            : `linear-gradient(135deg, hsl(${s.hue ?? 250} 90% 16%), #1705DA 70%, #000)`,
                        }}
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_60%)]" />
                        {!s.image && (
                          <Users
                            size={40}
                            className="relative text-white drop-shadow-[0_0_12px_rgba(23,5,218,0.9)]"
                          />
                        )}
                      </div>
                      <div className="flex flex-1 flex-col justify-center p-5">
                        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-electric">
                          <Calendar size={12} /> {s.date}
                        </div>
                        <h3 className="mt-2 font-display text-base font-bold">{s.title}</h3>
                        <p className="mt-2 text-sm text-white/70">{s.desc}</p>
                        <div className="mt-3 flex flex-col gap-1 text-xs text-white/60">
                          <span className="flex items-center gap-1">
                            <Users size={12} /> {s.speaker}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={12} /> {s.place}
                          </span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </section>
    </PageShell>
  );
}
