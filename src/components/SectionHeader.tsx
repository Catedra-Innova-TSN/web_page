import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow && (
        <div className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-electric">
        {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl">
        {title}
      </h2>
      {children && <p className="mt-3 text-white/70">{children}</p>}
    </div>
  );
}
