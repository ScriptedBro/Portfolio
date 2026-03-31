import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
              className="h-[1px] bg-accent"
            />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xs font-mono uppercase tracking-[0.3em] text-accent"
            >
              Full Stack & Blockchain
            </motion.span>
          </div>

          <div className="relative">
            <h1 className="editorial-title">
              <span className="text-reveal">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
                  className="reveal-inner"
                >
                  Architecting
                </motion.span>
              </span>
              <br />
              <span className="text-reveal ml-[10vw]">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.1, ease: [0.77, 0, 0.175, 1] }}
                  className="reveal-inner text-accent"
                >
                  Digital
                </motion.span>
              </span>
              <br />
              <span className="text-reveal">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.77, 0, 0.175, 1] }}
                  className="reveal-inner"
                >
                  Sovereignty.
                </motion.span>
              </span>
            </h1>
          </div>
        </div>

        <div className="mt-24 flex flex-col md:flex-row justify-between items-end gap-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="max-w-md text-muted font-light leading-relaxed text-lg"
          >
            A multidisciplinary developer crafting high-integrity systems 
            at the intersection of modern web architectures and decentralized protocols.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="group cursor-pointer"
          >
            <div className="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent transition-colors duration-500">
              <ArrowDownRight className="w-8 h-8 group-hover:text-accent transition-colors" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-white/5 -z-10" />
      <div className="absolute bottom-0 left-0 w-full h-1/4 border-t border-white/5 -z-10" />
    </section>
  );
}
