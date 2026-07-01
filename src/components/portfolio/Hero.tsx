import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Github, Linkedin } from "lucide-react";
import profileAsset from "@/assets/arth-profile.jpeg.asset.json";
import { ROLES, CONTACT } from "./data";

function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 40 }).map((_, i) => {
        const size = Math.random() * 3 + 1;
        const dur = 8 + Math.random() * 14;
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
              opacity: 0.6,
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
      } else t = setTimeout(() => setPhase("hold"), 1200);
    } else if (phase === "hold") {
      t = setTimeout(() => setPhase("erase"), 900);
    } else {
      if (text.length > 0) t = setTimeout(() => setText(text.slice(0, -1)), 30);
      else { setPhase("type"); setI((i + 1) % ROLES.length); }
    }
    return () => clearTimeout(t);
  }, [text, phase, i]);

  return (
    <span className="caret font-mono text-accent">{text}</span>
  );
}

export function Hero() {
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!photoRef.current) return;
      const r = photoRef.current.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) / r.width;
      const dy = (e.clientY - cy) / r.height;
      photoRef.current.style.transform = `translate3d(${dx * 12}px, ${dy * 12}px, 0)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      {/* Background layers */}
      <div className="absolute inset-0 aurora-bg animate-aurora" />
      <div className="absolute inset-0 opacity-[0.08] noise" />
      <div className="absolute -top-40 left-1/3 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute -bottom-40 right-1/4 h-[28rem] w-[28rem] rounded-full bg-secondary/20 blur-3xl" />
      <Particles />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 pb-20 lg:grid-cols-[1fr_minmax(0,40%)]">
        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-muted-foreground">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Available for internships & collaborations
          </div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
            <span className="block text-muted-foreground text-2xl sm:text-3xl font-medium">Hi, I'm</span>
            <span className="mt-2 block gradient-text">Arth Shrivastava</span>
          </h1>

          <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
            I'm a <TypingRoles />
          </p>

          <p className="mt-6 max-w-xl text-base text-muted-foreground">
            Final-year B.Tech Information Technology student passionate about Artificial
            Intelligence, Software Testing, Deep Learning, Python Development, Automation,
            and Cybersecurity. I build intelligent software while learning secure engineering
            and emerging technologies.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="magnetic group inline-flex items-center gap-2 rounded-xl gradient-brand px-5 py-3 text-sm font-medium text-white glow-primary hover:brightness-110">
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#" className="magnetic inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-medium hover:bg-white/10">
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a href="#contact" className="magnetic inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-muted-foreground hover:text-white">
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
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
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right — photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto flex w-full max-w-md items-center justify-center"
        >
          <div ref={photoRef} className="relative aspect-square w-full transition-transform duration-300 ease-out">
            {/* Rotating gradient ring */}
            <div
              className="absolute inset-0 animate-spin-slow rounded-full"
              style={{
                background: "conic-gradient(from 0deg, #3B82F6, #8B5CF6, #06B6D4, #3B82F6)",
                padding: 3,
                WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                filter: "drop-shadow(0 0 30px rgba(59,130,246,0.55))",
              }}
            />
            {/* Glow orbs */}
            <div className="absolute -left-6 top-8 h-20 w-20 rounded-full bg-primary/50 blur-2xl animate-float-slow" />
            <div className="absolute -right-4 bottom-10 h-24 w-24 rounded-full bg-secondary/50 blur-2xl animate-float-slow" style={{ animationDelay: "-3s" }} />

            {/* Glassmorphism plate */}
            <div className="absolute inset-3 rounded-full glass-strong" />

            {/* Photo */}
            <div className="group absolute inset-4 overflow-hidden rounded-full ring-1 ring-white/20 shadow-[0_30px_80px_-20px_rgba(59,130,246,0.5)] transition-all duration-500 hover:shadow-[0_30px_100px_-10px_rgba(139,92,246,0.7)]">
              <img
                src={profileAsset.url}
                alt="Portrait of Arth Shrivastava"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-primary/0 via-transparent to-secondary/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
