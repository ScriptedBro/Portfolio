import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="section-padding bg-surface/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <p className="text-[10px] font-mono text-accent uppercase tracking-[0.4em] mb-8">The Philosophy</p>
              <h2 className="text-5xl md:text-6xl font-serif italic font-light leading-tight mb-12">
                Code is <span className="text-accent">Law</span>, <br />
                Design is <span className="text-accent">Empathy</span>.
              </h2>
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-[1px] bg-accent/30 group-hover:w-20 transition-all duration-700" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted">Est. 2018</span>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-[1px] bg-accent/30 group-hover:w-20 transition-all duration-700" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted">12+ Protocols Launched</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-16">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-light leading-relaxed text-muted"
              >
                I specialize in building <span className="text-ink">resilient digital infrastructures</span>. 
                My work exists at the intersection of high-performance web applications 
                and the decentralized future.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12"
              >
                <div className="glass p-10 rounded-[2rem]">
                  <h3 className="text-xl font-serif italic mb-4 text-accent">Web Architecture</h3>
                  <p className="text-muted font-light leading-relaxed text-sm">
                    Crafting seamless, high-performance interfaces using React, Next.js, and modern CSS frameworks. 
                    Focusing on speed, accessibility, and intuitive user journeys.
                  </p>
                </div>
                <div className="glass p-10 rounded-[2rem]">
                  <h3 className="text-xl font-serif italic mb-4 text-accent">Blockchain Systems</h3>
                  <p className="text-muted font-light leading-relaxed text-sm">
                    Designing secure smart contracts and decentralized protocols. 
                    Expertise in Solidity, Rust, and cross-chain interoperability.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="pt-12 border-t border-white/[0.05]"
              >
                <p className="text-muted font-light leading-relaxed">
                  Beyond technical execution, I am driven by the pursuit of digital sovereignty. 
                  I believe that the next era of the internet should be built on principles of 
                  transparency, ownership, and uncompromising security.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
