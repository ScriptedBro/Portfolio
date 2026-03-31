import { motion } from "motion/react";
import { Code2, Database, Cpu } from "lucide-react";

const skills = [
  { 
    category: "Blockchain", 
    icon: Database,
    items: ["Solidity", "Ethers.js", "Hardhat", "Foundry", "Security Auditing"] 
  },
  { 
    category: "Frontend", 
    icon: Code2,
    items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"] 
  },
  { 
    category: "Backend", 
    icon: Cpu,
    items: ["Node.js", "PostgreSQL", "MongoDB", "GraphQL", "AWS"] 
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding border-y border-white/[0.03]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <p className="text-[10px] font-mono text-accent uppercase tracking-[0.4em] mb-6">Technical Stack</p>
            <h2 className="text-5xl md:text-7xl font-serif italic font-light leading-tight">
              The <span className="text-accent">Tools</span> of <br />
              Digital Sovereignty.
            </h2>
          </div>
          <div className="text-muted font-mono text-[10px] uppercase tracking-widest pb-4">
            (03) Core Domains
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="glass p-12 rounded-[2.5rem] hover:border-accent/20 transition-all duration-700 group"
            >
              <div className="mb-12 flex justify-between items-start">
                <span className="text-[10px] font-mono text-muted uppercase tracking-widest">0{index + 1}</span>
                <skill.icon className="w-8 h-8 text-accent/40 group-hover:text-accent transition-colors duration-700" />
              </div>
              <h3 className="text-3xl font-serif italic mb-8 group-hover:text-accent transition-colors duration-500">{skill.category}</h3>
              <div className="flex flex-wrap gap-x-6 gap-y-4">
                {skill.items.map((item) => (
                  <span key={item} className="text-lg font-serif italic text-muted/60 hover:text-ink transition-colors cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
