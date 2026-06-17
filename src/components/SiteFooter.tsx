import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Twitter, Mail, Youtube } from "lucide-react";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="relative z-10 mt-24 border-t border-electric/30 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-6">
            <Logo className="h-10 w-10" />
            <div className="font-display text-lg font-bold">
              Cátedra <span className="text-electric">Innova-tsn</span> UPM
            </div>
          </div>
          <p className="mt-4 max-w-md font-mono text-xs uppercase tracking-wider text-white/100">
            Donde los datos construyen la historia
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-mono text-xs uppercase tracking-widest text-electric">
            Enlaces
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/innova-tsn" className="hover:text-electric">Innova-tsn</Link></li>
            <li><Link to="/upm" className="hover:text-electric">UPM</Link></li>
            <li><Link to="/try-it" className="hover:text-electric">TryIt</Link></li>
            <li><Link to="/make-it" className="hover:text-electric">Make-It</Link></li>
            <li><Link to="/rootedcon" className="hover:text-electric">RootedCon</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-mono text-xs uppercase tracking-widest text-electric">
            Contacto
          </h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <Mail size={14} /> catedra@innova-tsn.upm.es
            </li>
            <li>ETSI Informáticos, UPM</li>
            <li>Campus de Montegancedo, Madrid</li>
          </ul>
          {/* Redes sociales (comentadas por ahora)}  
          <div className="mt-4 flex gap-3">
            {[Linkedin, Twitter, Github, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-md border border-electric/40 text-white/80 transition hover:bg-electric hover:text-white"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
          -->
          */}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-white/50 md:flex-row md:px-8">
          <div>© {new Date().getFullYear()} Cátedra Innova-tsn UPM. Todos los derechos reservados.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-electric">Aviso legal</a>
            <a href="#" className="hover:text-electric">Privacidad</a>
            <a href="#" className="hover:text-electric">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
