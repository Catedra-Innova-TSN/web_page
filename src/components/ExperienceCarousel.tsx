import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export interface Experience {
  title: string;
  name: string;
  description: string;
  image?: string;
  hue?: number;
}

interface Props {
  items: Experience[];
  autoplayMs?: number;
}

export function ExperienceCarousel({ items, autoplayMs = 6000 }: Props) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: autoplayMs, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);

  return (
    <div className="relative">
      <div
        className="overflow-hidden rounded-xl border border-electric/40 bg-black/50"
        ref={emblaRef}
      >
        <div className="flex">
          {items.map((it, i) => (
            <div key={i} className="min-w-0 flex-[0_0_100%]">
              <article className="flex flex-col md:flex-row md:h-[420px]">
                <div
                  className="relative w-full md:w-[40%] shrink-0 h-64 md:h-full"
                  style={{
                    background: it.image
                      ? `url(${it.image}) center/cover`
                      : `linear-gradient(135deg, hsl(${it.hue ?? 250} 90% 18%), #1705DA 60%, #000)`,
                  }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
                </div>
                <div className="flex flex-1 flex-col justify-center gap-3 p-6 md:p-10">
                  <Quote size={28} className="text-electric" />
                  <h3 className="font-display text-2xl font-bold leading-snug md:text-3xl">
                    {it.name}
                  </h3>
                  <div className="font-mono text-xs uppercase tracking-widest text-electric">
                    {it.title}
                  </div>
                  <p className="text-sm leading-relaxed text-white/75 md:text-base">
                    {it.description}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => embla?.scrollPrev()}
        className="absolute left-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-electric/60 bg-black/70 text-white backdrop-blur hover:bg-orange focus:bg-orange"
        aria-label="Anterior"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => embla?.scrollNext()}
        className="absolute right-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-electric/60 bg-black/70 text-white backdrop-blur hover:bg-orange focus:bg-orange"
        aria-label="Siguiente"
      >
        <ChevronRight size={20} />
      </button>

      <div className="mt-4 flex justify-center gap-1.5" aria-hidden="true">
        {items.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all ${
              i === selected ? "w-8 bg-orange" : "w-2 bg-white/30"
            }`}
            aria-label={`Ir al slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
