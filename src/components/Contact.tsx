import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="max-w-4xl">
          <p className="text-[10px] font-mono text-accent uppercase tracking-[0.3em] mb-12">Get in touch</p>
          <h2 className="text-6xl md:text-9xl font-serif italic font-light leading-tight mb-20">
            Let's create <br />
            <span className="text-accent">something</span> <br />
            exceptional.
          </h2>
          
          <div className="flex flex-col md:flex-row gap-16 md:gap-32">
            <div className="flex flex-col gap-8">
              <div className="group cursor-pointer">
                <p className="text-xs font-mono text-muted uppercase tracking-widest mb-2">Email</p>
                <a href="mailto:hello@fredrick.dev" className="text-2xl font-serif italic group-hover:text-accent transition-colors">
                  hello@fredrick.dev
                </a>
              </div>
              <div className="group cursor-pointer">
                <p className="text-xs font-mono text-muted uppercase tracking-widest mb-2">Social</p>
                <div className="flex gap-6">
                  <a href="#" className="text-lg font-serif italic hover:text-accent">LinkedIn</a>
                  <a href="#" className="text-lg font-serif italic hover:text-accent">Twitter</a>
                  <a href="#" className="text-lg font-serif italic hover:text-accent">GitHub</a>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <form className="flex flex-col gap-12" onSubmit={(e) => e.preventDefault()}>
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-accent transition-colors font-serif italic text-2xl"
                  />
                </div>
                <div className="relative group">
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-accent transition-colors font-serif italic text-2xl"
                  />
                </div>
                <button className="flex items-center gap-4 text-accent group w-fit">
                  <span className="text-2xl font-serif italic group-hover:mr-4 transition-all">Send Inquiry</span>
                  <ArrowRight className="w-6 h-6" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
