import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-5">
            <p className="text-[10px] font-mono text-accent uppercase tracking-[0.4em] mb-8">Get in Touch</p>
            <h2 className="text-6xl md:text-8xl font-serif italic font-light leading-tight mb-12">
              Let's <span className="text-accent">Build</span> the <br />
              Future.
            </h2>
            <div className="space-y-12">
              <div>
                <p className="text-[10px] font-mono text-muted uppercase tracking-widest mb-4">Direct Communication</p>
                <a href="mailto:fredrickloveday@gmail.com" className="text-2xl font-serif italic link-hover">
                  fredrickloveday@gmail.com
                </a>
              </div>
              <div>
                <p className="text-[10px] font-mono text-muted uppercase tracking-widest mb-4">Social Presence</p>
                <div className="flex gap-8">
                  {['Twitter', 'GitHub', 'LinkedIn'].map(social => (
                    <a key={social} href="#" className="text-sm font-light link-hover">{social}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.form 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-12 md:p-16 rounded-[3rem] space-y-10"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-mono text-muted uppercase tracking-widest ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:border-accent outline-none transition-colors font-light"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-mono text-muted uppercase tracking-widest ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:border-accent outline-none transition-colors font-light"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-mono text-muted uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent border-b border-white/10 py-4 focus:border-accent outline-none transition-colors font-light resize-none"
                />
              </div>
              <button className="group flex items-center gap-6 text-accent uppercase font-mono text-[10px] tracking-[0.4em] pt-4">
                <span>Send Message</span>
                <div className="w-12 h-[1px] bg-accent group-hover:w-20 transition-all duration-700" />
              </button>
            </motion.form>
          </div>
        </div>
      </div>

      {/* Decorative */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full -z-10" />
    </section>
  );
}
