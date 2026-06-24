import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface Slide {
  title: string;
  subtitle?: string;
  href?: string;
  description?: string;
  /** Optional image url. If absent, gradient placeholder shown. */
  image?: string;
  /** Hue 0-360 for the gradient placeholder. */
  hue?: number;
}

interface Props {
  slides: Slide[];
  aspect?: string; // tailwind aspect class e.g. aspect-[16/9]
  autoplayMs?: number;
  /** "md" default, "sm" shows more slides per view (smaller cards) */
  slideSize?: "sm" | "md";
}

export function AutoCarousel({
  slides,
  aspect = "aspect-[16/9]",
  autoplayMs = 4000,
  slideSize = "md",
}: Props) {
  const basis =
    slideSize === "sm"
      ? "flex-[0_0_50%] md:flex-[0_0_30%] lg:flex-[0_0_22%]"
      : "flex-[0_0_100%] md:flex-[0_0_60%] lg:flex-[0_0_45%]";
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
          {slides.map((s, i) => (
            <div key={i} className={`min-w-0 ${basis} pl-0`}>
              <div className="mx-2">
                {s.href ? (
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative block ${aspect} overflow-hidden rounded-lg outline-none ring-0 transition hover:ring-2 hover:ring-electric focus-visible:ring-2 focus-visible:ring-electric`}
                    style={{
                      background: s.image
                        ? `url(${s.image}) center/cover`
                        : `linear-gradient(135deg, hsl(${s.hue ?? 250} 90% 18%), #1705DA 60%, #000)`,
                    }}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4">
                      <div className="font-display text-lg font-bold text-white text-readable">
                        {s.title}
                      </div>
                      {s.subtitle && (
                        <div className="mt-1 font-mono text-xs text-white/70 text-readable">
                          {s.subtitle}
                        </div>
                      )}
                      {s.description && (
                        <div className="mt-2 font-mono text-sm text-white/70 text-readable">
                          {s.description}
                        </div>
                      )}
                    </div>
                  </a>
                ) : (
                  <div
                    className={`relative ${aspect} overflow-hidden rounded-lg`}
                    style={{
                      background: s.image
                        ? `url(${s.image}) center/cover`
                        : `linear-gradient(135deg, hsl(${s.hue ?? 250} 90% 18%), #1705DA 60%, #000)`,
                    }}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 rounded-b-xl p-4 border-t border-white/10">
                      <div className="font-display text-lg font-bold text-white text-readable">
                        {s.title}
                      </div>
                      {s.subtitle && (
                        <div className="mt-1 font-mono text-xs text-white text-readable">
                          {s.subtitle}
                        </div>
                      )}
                      {s.description && (
                        <div className="mt-2 font-mono text-sm text-whit text-readable">
                          {s.description}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
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
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all ${
              i === selected ? "w-8 bg-orange" : "w-2 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
