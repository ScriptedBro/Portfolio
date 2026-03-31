import { Github, Linkedin, Twitter, Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-bg-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-brand-primary" />
            <span className="font-bold tracking-tighter">DEV.BLOCK</span>
          </div>
          
          <p className="text-gray-500 text-sm font-mono">
            © {new Date().getFullYear()} — DESIGNED & BUILT BY THE AGENT
          </p>

          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-brand-primary transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="text-gray-500 hover:text-brand-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-gray-500 hover:text-brand-primary transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
