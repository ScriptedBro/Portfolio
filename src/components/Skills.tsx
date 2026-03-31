import { motion } from "motion/react";

const skills = [
  { category: "Blockchain", items: ["Solidity", "Ethers.js", "Hardhat", "Foundry", "Security Auditing"] },
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "PostgreSQL", "MongoDB", "GraphQL", "AWS"] }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 md:px-12 border-y border-white/5">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <p className="text-[10px] font-mono text-accent uppercase tracking-[0.3em] mb-8">0{index + 1} / {skill.category}</p>
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                {skill.items.map((item) => (
                  <span key={item} className="text-2xl font-serif italic text-muted hover:text-ink transition-colors cursor-default">
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
