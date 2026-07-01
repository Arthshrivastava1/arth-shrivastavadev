import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p += Math.random() * 14 + 6;
      if (p >= 100) { p = 100; clearInterval(id); setTimeout(() => setDone(true), 350); }
      setProgress(Math.min(100, p));
    }, 140);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(24px)" }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background"
        >
          <div className="absolute inset-0 aurora-bg opacity-60" />
          <div className="relative flex flex-col items-center gap-8">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative flex h-24 w-24 items-center justify-center"
            >
              <div className="absolute inset-0 animate-spin-slow rounded-full"
                   style={{ background: "conic-gradient(from 0deg, #3B82F6, #8B5CF6, #06B6D4, #3B82F6)", padding: 2, WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }} />
              <div className="glass-strong flex h-20 w-20 items-center justify-center rounded-full">
                <span className="font-display text-2xl font-bold gradient-text">AS</span>
              </div>
            </motion.div>

            <div className="w-64">
              <div className="mb-2 flex justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                <span>Loading</span>
                <span>{Math.floor(progress)}%</span>
              </div>
              <div className="h-1 w-full overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full gradient-brand"
                  style={{ width: `${progress}%`, transition: "width 200ms ease-out" }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
