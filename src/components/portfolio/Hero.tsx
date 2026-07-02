import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Github, Linkedin, ArrowDown } from "lucide-react";

import { ROLES, CONTACT } from "./data";

function Particles() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 28 }).map((_, i) => {
        const size = Math.random() * 2.5 + 1;
        const dur = 10 + Math.random() * 16;
        const delay = Math.random() * -20;
        return (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: size, height: size,
              background: i % 3 === 0 ? "#06B6D4" : i % 3 === 1 ? "#3B82F6" : "#8B5CF6",
              boxShadow: `0 0 ${size * 4}px currentColor`,
              opacity: 0.55,
              animation: `float-slow ${dur}s ease-in-out ${delay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
}

function TypingRoles() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"type" | "hold" | "erase">("type");

  useEffect(() => {
    const current = ROLES[i];
    let t: ReturnType<typeof setTimeout>;
    if (phase === "type") {
      if (text.length < current.length) {
        t = setTimeout(() => setText(current.slice(0, text.length + 1)), 55);
      } else t = setTimeout(() => setPhase("hold"), 1400);
    } else if (phase === "hold") {
      t = setTimeout(() => setPhase("erase"), 900);
    } else {
      if (text.length > 0) t = setTimeout(() => setText(text.slice(0, -1)), 25);
      else { setPhase("type"); setI((i + 1) % ROLES.length); }
    }
    return () => clearTimeout(t);
  }, [text, phase, i]);

  return <span className="caret font-mono text-accent" aria-live="polite">{text}</span>;
}

export function Hero() {
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    const onMove = (e: MouseEvent) => {
      if (!photoRef.current) return;
      const r = photoRef.current.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) / window.innerWidth;
      const dy = (e.clientY - cy) / window.innerHeight;
      photoRef.current.style.transform = `translate3d(${dx * 18}px, ${dy * 18}px, 0)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative flex min-h-dvh items-center overflow-hidden pt-28 pb-16 md:pt-32"
    >
      {/* Background layers */}
      <div aria-hidden className="absolute inset-0 aurora-bg animate-aurora" />
      <div aria-hidden className="absolute inset-0 dot-grid opacity-40" />
      <div aria-hidden className="absolute -top-40 left-1/3 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
      <div aria-hidden className="absolute -bottom-40 right-1/4 h-[28rem] w-[28rem] rounded-full bg-secondary/20 blur-3xl" />
      <Particles />
      {/* Bottom fade */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 sm:px-8 md:gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,42%)] lg:gap-16">
        {/* Photo — first on mobile, right on desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative order-1 mx-auto flex w-full max-w-[280px] items-center justify-center sm:max-w-sm lg:order-2 lg:max-w-md"
        >
          <div ref={photoRef} className="relative aspect-square w-full transition-transform duration-500 ease-out will-change-transform">
            {/* Rotating conic ring */}
            <div
              aria-hidden
              className="absolute inset-0 animate-spin-slow rounded-full"
              style={{
                background: "conic-gradient(from 0deg, #3B82F6, #8B5CF6, #06B6D4, #3B82F6)",
                padding: 2,
                WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                filter: "drop-shadow(0 0 40px rgba(59,130,246,0.5))",
              }}
            />
            <div aria-hidden className="absolute -left-4 top-6 h-16 w-16 rounded-full bg-primary/50 blur-2xl animate-float-slow" />
            <div aria-hidden className="absolute -right-2 bottom-8 h-20 w-20 rounded-full bg-secondary/50 blur-2xl animate-float-slow" style={{ animationDelay: "-3s" }} />
            <div aria-hidden className="absolute inset-3 rounded-full glass-strong" />

            <div className="group absolute inset-4 overflow-hidden rounded-full ring-1 ring-white/15 shadow-[0_30px_80px_-20px_rgba(59,130,246,0.5)] transition-shadow duration-500 hover:shadow-[0_30px_100px_-10px_rgba(139,92,246,0.7)]">
              <img
                src="/arth-profile.jpeg"
                alt="Arth Shrivastava"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width={520}
                height={520}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div aria-hidden className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-primary/0 via-transparent to-secondary/25 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>

            {/* Orbiting badges */}
            <motion.div
              aria-hidden
              className="absolute -right-2 top-6 hidden sm:block"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="glass rounded-2xl px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-accent">AI · LLM</div>
            </motion.div>
            <motion.div
              aria-hidden
              className="absolute -left-4 bottom-10 hidden sm:block"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="glass rounded-2xl px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-primary">Python</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Text — second on mobile, left on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative order-2 max-w-2xl text-center lg:order-1 lg:text-left"
        >
          <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
            <span className="relative flex h-1.5 w-1.5" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Available for Full-Time Opportunities
          </div>

          <p className="mt-6 text-sm font-medium text-muted-foreground sm:text-base">Hi, I'm</p>
          <h1 className="mt-2 font-display text-[clamp(2.5rem,8vw,5.5rem)] font-bold leading-[0.95]">
            <span className="gradient-text">Arth Shrivastava</span>
          </h1>

          <p className="mt-5 text-lg text-muted-foreground sm:text-xl">
            <span className="text-white">I'm an </span>
            <TypingRoles />
          </p>

          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground lg:mx-0">
            B.Tech Information Technology Graduate building intelligent software —
            from deep learning systems to validation tooling and secure engineering practice. Open to Work.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a href="#projects" className="magnetic group inline-flex items-center gap-2 rounded-xl gradient-brand px-5 py-3 text-sm font-medium text-white glow-primary transition-all hover:brightness-110">
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </a>
            <a href="#" className="magnetic inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-medium hover:bg-white/10">
              <Download className="h-4 w-4" aria-hidden /> Resume
            </a>
            <a href="#contact" className="magnetic inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-muted-foreground hover:text-white">
              <Mail className="h-4 w-4" aria-hidden /> Contact
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
            {[
              { icon: Linkedin, href: CONTACT.linkedin, label: "LinkedIn" },
              { icon: Github, href: CONTACT.github, label: "GitHub" },
              { icon: Mail, href: `mailto:${CONTACT.email}`, label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="glass flex h-10 w-10 items-center justify-center rounded-xl transition-all hover:bg-white/10 hover:glow-primary"
              >
                <s.icon className="h-4 w-4" aria-hidden />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground md:flex"
      >
        <span>Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown className="h-4 w-4" aria-hidden />
        </motion.span>
      </motion.a>
    </section>
  );
}
