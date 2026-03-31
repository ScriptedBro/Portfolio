import { motion } from "motion/react";
import { Search, Layers, Terminal, ShieldCheck } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Discovery & Analysis",
    description: "Deep dive into business logic, user requirements, and protocol constraints to define the architectural foundation.",
    icon: Search,
  },
  {
    id: "02",
    title: "System Design",
    description: "Crafting robust, scalable architectures that bridge traditional web services with decentralized state machines.",
    icon: Layers,
  },
  {
    id: "03",
    title: "Implementation",
    description: "Writing high-integrity code, from smart contracts to frontend interfaces, with a focus on performance and UX.",
    icon: Terminal,
  },
  {
    id: "04",
    title: "Security & Audit",
    description: "Rigorous testing and formal verification to ensure system resilience and protect digital assets.",
    icon: ShieldCheck,
  },
];

export default function Process() {
  return (
    <section id="process" className="section-padding border-b border-white/[0.03]">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-24">
          <p className="text-[10px] font-mono text-accent uppercase tracking-[0.4em] mb-6">Methodology</p>
          <h2 className="text-5xl md:text-7xl font-serif italic font-light leading-tight">
            The <span className="text-accent">Architectural</span> <br />
            Lifecycle.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="relative group"
            >
              <div className="mb-12 flex justify-between items-start">
                <span className="text-[10px] font-mono text-muted uppercase tracking-widest">{step.id}</span>
                <step.icon className="w-6 h-6 text-accent/20 group-hover:text-accent transition-colors duration-700" />
              </div>
              <h3 className="text-2xl font-serif italic mb-6 group-hover:text-accent transition-colors duration-500">{step.title}</h3>
              <p className="text-muted/60 font-light leading-relaxed text-sm">
                {step.description}
              </p>
              
              {/* Decorative Line */}
              <div className="absolute -bottom-6 left-0 w-0 h-[1px] bg-accent/20 group-hover:w-full transition-all duration-1000" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
