import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 py-20 overflow-hidden">
      <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
        <div className="flex flex-col items-center gap-6 md:gap-8 max-w-5xl">
          <div className="flex items-center gap-4 justify-center">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
              className="h-[1px] bg-accent/50"
            />
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-[10px] font-mono uppercase tracking-[0.4em] text-accent/80"
            >
              Full Stack & Blockchain Architect
            </motion.span>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
              className="h-[1px] bg-accent/50"
            />
          </div>

          <div className="relative">
            <h1 className="editorial-title text-gradient leading-[0.9] md:leading-[0.85]">
              <span className="text-reveal">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                  className="reveal-inner"
                >
                  Architecting
                </motion.span>
              </span>
              <br />
              <span className="text-reveal">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
                  className="reveal-inner italic text-accent"
                >
                  Digital
                </motion.span>
              </span>
              <br />
              <span className="text-reveal">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
                  className="reveal-inner"
                >
                  Sovereignty.
                </motion.span>
              </span>
            </h1>
          </div>
        </div>

        <div className="mt-16 md:mt-20 flex flex-col items-center gap-12 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <p className="text-muted font-light leading-relaxed text-lg md:text-xl mb-8">
              Crafting high-integrity systems at the intersection of 
              <span className="text-ink"> modern web architectures</span> and <br className="hidden md:block" />
              <span className="text-ink"> decentralized protocols</span>.
            </p>
            <div className="flex justify-center gap-12 text-[10px] font-mono uppercase tracking-widest text-muted/60">
              <span className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-accent/40" />
                Based in London
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-accent/40" />
                Available for 2026
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="group relative"
          >
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-full border border-white/5 flex items-center justify-center group-hover:border-accent/40 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]">
              <div className="absolute inset-0 rounded-full bg-accent/5 scale-0 group-hover:scale-100 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]" />
              <ArrowDownRight className="w-8 h-8 group-hover:text-accent transition-colors duration-500 relative z-10" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[40%] h-full border-l border-white/[0.03] -z-10" />
      <div className="absolute bottom-0 left-0 w-full h-[30%] border-t border-white/[0.03] -z-10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 blur-[120px] rounded-full -z-10 animate-pulse" />
    </section>
  );
}
