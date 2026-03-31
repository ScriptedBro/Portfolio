import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Fredrick's architectural vision transformed our legacy system into a high-performance, decentralized powerhouse. His attention to system integrity is unparalleled.",
    author: "Alexander Vance",
    role: "CTO, Nexus Protocol",
  },
  {
    quote: "A rare talent who bridges the gap between complex blockchain protocols and seamless user experiences. The implementation was flawless.",
    author: "Elena Rossi",
    role: "Founder, EtherFlow",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-surface/30">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <p className="text-[10px] font-mono text-accent uppercase tracking-[0.4em] mb-6">Social Proof</p>
            <h2 className="text-5xl md:text-7xl font-serif italic font-light leading-tight">
              Voices of <br />
              <span className="text-accent">Integrity</span>.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="glass p-12 md:p-16 rounded-[3rem] relative overflow-hidden group"
            >
              <Quote className="absolute top-12 right-12 w-12 h-12 text-accent/5 group-hover:text-accent/10 transition-colors duration-700" />
              
              <p className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-12 text-ink/80">
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-6">
                <div className="w-12 h-[1px] bg-accent/40" />
                <div>
                  <p className="text-sm font-serif italic text-ink">{t.author}</p>
                  <p className="text-[10px] font-mono text-muted uppercase tracking-widest mt-1">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
