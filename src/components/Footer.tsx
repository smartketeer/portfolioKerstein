import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-muted bg-surface/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-xl font-medium mb-1">Kerstein Kyle Violon</h2>
          <p className="text-foreground/60 text-sm">Crafting modern web experiences.</p>
        </div>
        
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/kersteinviolon1009" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-foreground/80 hover:text-accent transition-colors">
            LinkedIn <ArrowUpRight size={16} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-foreground/80 hover:text-accent transition-colors">
            GitHub <ArrowUpRight size={16} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-foreground/80 hover:text-accent transition-colors">
            Twitter <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
