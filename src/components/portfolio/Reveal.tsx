import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] } },
};

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
        <span className="h-1 w-1 rounded-full bg-accent" /> {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl gradient-text">{title}</h2>
      {description && <p className="mt-4 text-base text-muted-foreground">{description}</p>}
    </Reveal>
  );
}
