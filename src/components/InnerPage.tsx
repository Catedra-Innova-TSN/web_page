import type { ReactNode } from "react";
import { PageShell } from "./PageShell";
import { ExternalLink } from "lucide-react";

interface Props {
  eyebrow: string;
  title: ReactNode;
  description: string;
  externalUrl?: string;
  externalLabel?: string;
  children: ReactNode;
}

export function InnerPage({
  eyebrow,
  title,
  description,
  externalUrl,
  externalLabel,
  children,
}: Props) {
  return (
    <PageShell>
      <section className="relative scan-line">
        <div className="mx-auto max-w-5xl px-4 py-20 md:px-8 md:py-24">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-electric">
            {eyebrow}
          </div>
          <h1 className="mt-3 font-display text-5xl font-bold leading-[1.05] md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/75">{description}</p>
          {externalUrl && (
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-orange px-5 py-3 font-mono text-sm uppercase tracking-wider text-white"
            >
              {externalLabel ?? "Visitar web oficial"} <ExternalLink size={14} />
            </a>
          )}
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-4 pb-20 md:px-8">{children}</section>
    </PageShell>
  );
}

export function InfoGrid({ items }: { items: { title: string; desc: string }[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((i) => (
        <article
          key={i.title}
          className="rounded-xl border border-electric/30 bg-black/50 p-6 backdrop-blur transition hover:border-electric"
        >
          <h3 className="font-display text-lg font-bold">{i.title}</h3>
          <p className="mt-2 text-sm text-white/70">{i.desc}</p>
        </article>
      ))}
    </div>
  );
}
