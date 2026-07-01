import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ExternalLink, MapPin, Send, ArrowUp, Sparkles, Trophy, GraduationCap, Award,
} from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";
import {
  STATS, SKILL_GROUPS, TIMELINE, EXPERIENCE, PROJECTS,
  CERTIFICATES, ACHIEVEMENTS, SERVICES, CONTACT, SOCIAL,
} from "./data";

/* -------- ABOUT -------- */
export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeader eyebrow="About Me" title="Engineer. Builder. Learner." />
        <div className="grid gap-8 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="glass-strong rounded-3xl p-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm <span className="text-white font-medium">Arth Shrivastava</span>, a final-year B.Tech Information Technology student passionate about
                <span className="text-white"> AI, Software Testing, Deep Learning, Automation,</span> and
                <span className="text-white"> Cybersecurity</span>.
              </p>
              <p className="mt-4 text-muted-foreground">
                I enjoy solving real-world engineering problems through AI, Python, modern
                software engineering and secure development practices. I love learning new
                technologies, building impactful projects, and continuously improving my craft.
              </p>
              <p className="mt-4 text-muted-foreground">
                My long-term goal is to become an <span className="text-accent">AI Engineer &amp; Cybersecurity Professional</span> while building
                scalable software products.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="glass rounded-3xl p-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="h-4 w-4 text-accent" /> Currently
              </div>
              <div className="mt-3 space-y-4">
                <Detail label="Role" value="LLM Generalist Intern @ Ethara AI" />
                <Detail label="Focus" value="AI · Testing · Cybersecurity" />
                <Detail label="Location" value="India" />
                <Detail label="Graduation" value="2026" />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {STATS.map((s, idx) => <StatCard key={s.label} {...s} delay={idx * 0.05} />)}
        </div>
      </div>
    </section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-white/5 pb-3 last:border-0 last:pb-0">
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="mt-1 text-sm text-white">{value}</div>
    </div>
  );
}

function StatCard({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const start = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * value));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="glass group relative overflow-hidden rounded-2xl p-5 text-center transition-transform hover:-translate-y-1"
    >
      <div className="absolute inset-0 -z-10 opacity-0 transition-opacity group-hover:opacity-100"
           style={{ background: "radial-gradient(circle at 50% 0%, rgba(59,130,246,0.25), transparent 70%)" }} />
      <div className="font-display text-3xl font-bold gradient-text">{n}{suffix}</div>
      <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
    </motion.div>
  );
}

/* -------- SKILLS -------- */
export function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeader eyebrow="Skills" title="Tools of the trade" description="A modern stack across AI, testing, security and the web." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05}>
              <div className="glass group relative h-full overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-brand text-white glow-primary">
                    <g.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{g.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span key={s} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-white">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------- TIMELINE -------- */
export function Timeline() {
  return (
    <section id="timeline" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <SectionHeader eyebrow="Journey" title="A timeline of growth" />
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-secondary/60 to-accent/60 md:left-1/2" />
          {TIMELINE.map((item, i) => (
            <Reveal key={item.year} delay={i * 0.06}>
              <div className={`relative mb-10 flex flex-col md:flex-row ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
                  <div className="glass inline-block rounded-2xl p-5">
                    <div className="font-mono text-xs uppercase tracking-widest text-accent">{item.year}</div>
                    <div className="mt-1 font-display text-lg font-semibold">{item.title}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{item.desc}</div>
                  </div>
                </div>
                <span className="absolute left-4 top-4 -ml-1.5 h-3 w-3 rounded-full gradient-brand ring-4 ring-background md:left-1/2 md:-ml-1.5" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------- EXPERIENCE -------- */
export function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeader eyebrow="Experience" title="Where I've contributed" />
        <div className="grid gap-6 md:grid-cols-2">
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.company} delay={i * 0.08}>
              <div className="glass-strong h-full rounded-3xl p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold">{e.company}</h3>
                    <div className="text-sm text-accent">{e.role}</div>
                  </div>
                  <GraduationCap className="h-5 w-5 text-muted-foreground" />
                </div>
                <ul className="mt-5 space-y-2">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------- PROJECTS -------- */
export function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const tags = ["All", ...Array.from(new Set(PROJECTS.flatMap((p) => p.tags)))];
  const visible = PROJECTS.filter((p) => filter === "All" || p.tags.includes(filter));

  return (
    <section id="projects" aria-label="Projects" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeader eyebrow="Projects" title="Selected work" description="A snapshot of things I've built and shipped." />
        <div className="mb-10 -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0" role="tablist" aria-label="Filter projects by technology">
          {tags.slice(0, 10).map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={filter === t}
              onClick={() => setFilter(t)}
              className={`shrink-0 rounded-full px-3 py-1.5 text-xs transition-all ${filter === t ? "gradient-brand text-white glow-primary" : "glass text-muted-foreground hover:text-white"}`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => <ProjectCard key={p.title} project={p} index={i} delay={i * 0.06} />)}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, delay }: { project: typeof PROJECTS[number]; index: number; delay: number }) {

  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `perspective(900px) rotateX(${-y * 6}deg) rotateY(${x * 8}deg) translateZ(0)`;
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = ""; };

  return (
    <Reveal delay={delay}>
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="glass group relative flex h-full flex-col overflow-hidden rounded-3xl p-6 transition-transform duration-300"
      >
        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.hue} opacity-30 transition-opacity group-hover:opacity-60`} />
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/30 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />

        <div className="relative flex flex-1 flex-col">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-black/30 px-2 py-0.5 text-[10px] uppercase tracking-widest text-muted-foreground">{t}</span>
            ))}
          </div>
          <h3 className="mt-4 font-display text-xl font-semibold">{project.title}</h3>
          <p className="mt-2 flex-1 text-sm text-muted-foreground">{project.desc}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white hover:border-primary/50 hover:bg-white/10"
              >
                <l.icon className="h-3.5 w-3.5" /> {l.label}
                <ExternalLink className="h-3 w-3 opacity-60" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* -------- ACHIEVEMENTS -------- */
export function Achievements() {
  return (
    <section id="achievements" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <SectionHeader eyebrow="Achievements" title="Milestones & recognition" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((a, i) => (
            <Reveal key={a} delay={i * 0.05}>
              <div className="glass flex items-start gap-3 rounded-2xl p-5 transition-transform hover:-translate-y-1">
                <div className="flex h-9 w-9 flex-none items-center justify-center rounded-xl gradient-brand glow-primary">
                  <Trophy className="h-4 w-4 text-white" />
                </div>
                <p className="pt-1.5 text-sm">{a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------- CERTIFICATES -------- */
export function Certificates() {
  return (
    <section id="certificates" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeader eyebrow="Certificates" title="Credentials & learning" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATES.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.05}>
              <div className="glass rounded-2xl p-5 transition-all hover:bg-white/5">
                <div className="flex items-start justify-between">
                  <Award className="h-5 w-5 text-accent" />
                  <span className={`rounded-full px-2 py-0.5 text-[10px] uppercase tracking-widest ${
                    c.status === "Completed" ? "bg-primary/15 text-primary" :
                    c.status === "In progress" ? "bg-secondary/15 text-secondary" :
                    "bg-white/5 text-muted-foreground"
                  }`}>{c.status}</span>
                </div>
                <h3 className="mt-3 font-display text-base font-semibold">{c.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{c.issuer}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------- SERVICES -------- */
export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeader eyebrow="Services" title="How I can help" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="glass group h-full rounded-2xl p-6 transition-transform hover:-translate-y-1">
                <div className="mb-3 h-1 w-8 rounded-full gradient-brand" />
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------- CONTACT -------- */
export function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeader eyebrow="Contact" title="Let's build something together" description="Reach out for internships, collaborations or a quick hello." />
        <div className="grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="glass-strong h-full rounded-3xl p-7">
              <h3 className="font-display text-xl font-semibold">Get in touch</h3>
              <p className="mt-2 text-sm text-muted-foreground">Prefer email? Ping me directly — I usually respond within a day.</p>
              <div className="mt-6 space-y-4">
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-sm hover:bg-white/10">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg gradient-brand"><Send className="h-4 w-4 text-white" /></span>
                  {CONTACT.email}
                </a>
                <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-sm hover:bg-white/10">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg gradient-brand"><MapPin className="h-4 w-4 text-white" /></span>
                  {CONTACT.phone}
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {SOCIAL.map((s) => (
                  <a key={s.label} href={s.href} className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs hover:bg-white/10">
                    <s.icon className="h-3.5 w-3.5" /> {s.label}
                  </a>
                ))}
              </div>
              <div className="mt-6 aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                <div className="flex h-full w-full items-center justify-center text-xs text-muted-foreground">
                  <MapPin className="mr-2 h-4 w-4" /> Map placeholder — India
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-3">
            <form onSubmit={submit} className="glass-strong grid gap-4 rounded-3xl p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Your name" />
                <Field label="Email" name="email" type="email" placeholder="you@example.com" />
              </div>
              <Field label="Subject" name="subject" placeholder="What's this about?" />
              <div>
                <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea
                  rows={5}
                  required
                  placeholder="Tell me a bit about your project or idea…"
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-1 focus:ring-primary/40"
                />
              </div>
              <button
                type="submit"
                className="magnetic inline-flex items-center justify-center gap-2 rounded-xl gradient-brand px-5 py-3 text-sm font-semibold text-white glow-primary hover:brightness-110"
              >
                {sent ? "Sent ✓" : "Send message"} <Send className="h-4 w-4" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-1 focus:ring-primary/40"
      />
    </div>
  );
}

/* -------- FOOTER -------- */
export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
        <div className="text-xs text-muted-foreground">
          Designed &amp; developed by <span className="text-white">Arth Shrivastava</span> · © {new Date().getFullYear()}
        </div>
        <div className="flex items-center gap-2">
          {SOCIAL.map((s) => (
            <a key={s.label} href={s.href} aria-label={s.label} className="glass flex h-9 w-9 items-center justify-center rounded-lg hover:bg-white/10">
              <s.icon className="h-4 w-4" />
            </a>
          ))}
          <a
            href="#home"
            className="ml-2 inline-flex h-9 items-center gap-2 rounded-lg gradient-brand px-3 text-xs font-medium text-white glow-primary"
          >
            <ArrowUp className="h-3.5 w-3.5" /> Top
          </a>
        </div>
      </div>
    </footer>
  );
}
