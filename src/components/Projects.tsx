import { motion } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "Aether Protocol",
    category: "DeFi / Smart Contracts",
    description: "Next-gen yield optimization engine.",
    image: "https://picsum.photos/seed/aether/1200/800",
    size: "col-span-12 md:col-span-8",
    color: "bg-accent/10"
  },
  {
    title: "Lumina NFT",
    category: "Marketplace",
    description: "High-fidelity digital asset exchange.",
    image: "https://picsum.photos/seed/lumina/800/800",
    size: "col-span-12 md:col-span-4",
    color: "bg-white/5"
  },
  {
    title: "Sovereign ID",
    category: "Identity",
    description: "Privacy-preserving identity layer.",
    image: "https://picsum.photos/seed/sovereign/800/800",
    size: "col-span-12 md:col-span-4",
    color: "bg-white/5"
  },
  {
    title: "Nexus Bridge",
    category: "Cross-chain",
    description: "Seamless asset interoperability.",
    image: "https://picsum.photos/seed/nexus/1200/800",
    size: "col-span-12 md:col-span-8",
    color: "bg-accent/10"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
          <h2 className="text-6xl md:text-8xl font-serif italic font-light">Selected <span className="text-accent">Works</span></h2>
          <p className="text-muted font-mono text-xs uppercase tracking-widest">001 — 004</p>
        </div>

        <div className="bento-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`bento-card group ${project.size} ${project.color}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-accent text-bg-paper flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </div>
              
              <div className="p-8 flex justify-between items-end">
                <div>
                  <p className="text-xs font-mono text-accent uppercase tracking-widest mb-2">{project.category}</p>
                  <h3 className="text-3xl font-serif">{project.title}</h3>
                  <p className="text-muted text-sm mt-2">{project.description}</p>
                </div>
                <div className="flex gap-4">
                  <Github className="w-5 h-5 text-muted hover:text-accent cursor-pointer transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
