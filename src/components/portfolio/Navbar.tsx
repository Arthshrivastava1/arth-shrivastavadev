import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { NAV_LINKS } from "./data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      // active section detection
      const y = window.scrollY + window.innerHeight / 3;
      for (const l of NAV_LINKS) {
        const el = document.querySelector(l.href);
        if (el) {
          const r = (el as HTMLElement).offsetTop;
          const h = (el as HTMLElement).offsetHeight;
          if (y >= r && y < r + h) { setActive(l.href); break; }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-4">
        <div className={`flex items-center justify-between rounded-2xl px-3 py-2.5 transition-all sm:px-4 sm:py-3 ${scrolled ? "glass-strong shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]" : "glass"}`}>
          <a href="#home" aria-label="Home" className="group flex items-center gap-2">
            <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl">
              <span aria-hidden className="absolute inset-0 gradient-brand" />
              <span className="relative font-display text-sm font-bold text-white">AS</span>
            </span>
            <span className="hidden font-display text-sm font-semibold tracking-wide sm:inline">Arth Shrivastava</span>
          </a>


          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative rounded-lg px-3 py-1.5 text-sm transition-colors ${active === l.href ? "text-white" : "text-muted-foreground hover:text-white"}`}
              >
                {active === l.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-lg bg-white/5 ring-1 ring-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-lg gradient-brand px-4 py-2 text-sm font-medium text-white glow-primary hover:brightness-110 sm:inline-flex"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="glass flex h-10 w-10 items-center justify-center rounded-lg lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-strong mt-2 grid grid-cols-2 gap-1 rounded-2xl p-3 lg:hidden"
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
