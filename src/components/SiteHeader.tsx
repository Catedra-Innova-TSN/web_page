import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/", label: "Inicio" },
  { to: "/innova-tsn", label: "Innova-tsn" },
  { to: "/upm", label: "UPM" },
  { to: "/try-it", label: "Try-IT!" },
  { to: "/make-it", label: "Make-IT!" },
  { to: "/seminarios", label: "Seminarios" },
  { to: "/rootedcon", label: "RootedCon" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-electric/30 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Logo className="h-16 w-16" />
          <span className="font-display text-sm font-bold tracking-tight md:text-base">
            Cátedra <span className="text-electric text-glow">Innova-tsn</span> UPM
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-3 py-2 font-mono text-xs uppercase tracking-wider text-white/70 transition hover:bg-electric/10 hover:text-white"
              activeProps={{ className: "text-electric text-glow" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          className="lg:hidden text-white"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-electric/30 bg-black/95 px-4 py-3 lg:hidden">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 font-mono text-sm uppercase tracking-wider text-white/80"
              activeProps={{ className: "text-electric" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
