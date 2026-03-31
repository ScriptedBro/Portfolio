import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-24 items-start">
          <div className="sticky top-32">
            <p className="text-[10px] font-mono text-accent uppercase tracking-[0.3em] mb-12">The Philosophy</p>
            <h2 className="text-5xl md:text-7xl font-serif italic font-light leading-tight">
              Code is <br />
              <span className="text-accent">Poetry</span> <br />
              in motion.
            </h2>
          </div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-muted text-xl font-light leading-relaxed"
            >
              <p>
                I am Fredrick Loveday, a developer who believes that the most powerful 
                technology is that which remains invisible, serving the user with 
                unparalleled elegance and absolute integrity.
              </p>
              <p>
                My work exists at the intersection of high-performance web architecture 
                and the immutable logic of decentralized protocols. I don't just build 
                applications; I architect digital sovereignty.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/5">
              <div>
                <p className="text-4xl font-serif italic text-accent mb-2">05+</p>
                <p className="text-[10px] font-mono text-muted uppercase tracking-widest">Years of Craft</p>
              </div>
              <div>
                <p className="text-4xl font-serif italic text-accent mb-2">100%</p>
                <p className="text-[10px] font-mono text-muted uppercase tracking-widest">Security Record</p>
              </div>
            </div>

            <div className="aspect-[4/5] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
              <img 
                src="https://picsum.photos/seed/fredrick/800/1000" 
                alt="Portrait" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
