import { motion } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "Aether Protocol",
    category: "DeFi / Smart Contracts",
    description: "Next-gen yield optimization engine.",
    image: "https://picsum.photos/seed/aether/1200/800",
    size: "col-span-12 md:col-span-8",
  },
  {
    title: "Lumina NFT",
    category: "Marketplace",
    description: "High-fidelity digital asset exchange.",
    image: "https://picsum.photos/seed/lumina/800/800",
    size: "col-span-12 md:col-span-4",
  },
  {
    title: "Sovereign ID",
    category: "Identity",
    description: "Privacy-preserving identity layer.",
    image: "https://picsum.photos/seed/sovereign/800/800",
    size: "col-span-12 md:col-span-4",
  },
  {
    title: "Nexus Bridge",
    category: "Cross-chain",
    description: "Seamless asset interoperability.",
    image: "https://picsum.photos/seed/nexus/1200/800",
    size: "col-span-12 md:col-span-8",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-8">
          <div className="max-w-2xl">
            <p className="text-[10px] font-mono text-accent uppercase tracking-[0.4em] mb-6">Selected Works</p>
            <h2 className="text-6xl md:text-8xl font-serif italic font-light leading-tight">
              Engineering <span className="text-accent">Trust</span> through <br />
              Transparent Architectures.
            </h2>
          </div>
          <p className="text-muted font-mono text-[10px] uppercase tracking-widest pb-4">001 — 004</p>
        </div>

        <div className="bento-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className={`bento-card group overflow-hidden ${project.size}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-bg-paper/20 group-hover:bg-transparent transition-colors duration-700" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-accent text-bg-paper flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </div>
              
              <div className="p-10 flex justify-between items-end">
                <div>
                  <p className="text-[10px] font-mono text-accent/60 uppercase tracking-widest mb-4">{project.category}</p>
                  <h3 className="text-3xl font-serif italic group-hover:text-accent transition-colors duration-500">{project.title}</h3>
                  <p className="text-muted font-light text-sm mt-4 max-w-xs">{project.description}</p>
                </div>
                <div className="flex gap-6">
                  <Github className="w-5 h-5 text-muted hover:text-accent cursor-pointer transition-colors duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
