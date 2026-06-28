import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-24 py-6 bg-background/80 backdrop-blur-md border-b border-muted/50 transition-colors duration-300">
      <div className="flex items-center gap-2">
        {/* Placeholder for Logo Icon */}
        <div className="w-8 h-8 rounded bg-accent text-background flex items-center justify-center font-bold text-lg">
          K
        </div>
        <span className="text-xl font-bold tracking-wider uppercase text-foreground">
          Kerstein
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase">
        <Link href="#home" className="text-foreground border-b border-foreground pb-1">
          Home
        </Link>
        <Link href="#about" className="text-foreground/60 hover:text-foreground transition-colors">
          About Me
        </Link>
        <Link href="#projects" className="text-foreground/60 hover:text-foreground transition-colors">
          Projects
        </Link>
        <Link href="#services" className="text-foreground/60 hover:text-foreground transition-colors">
          Services
        </Link>
        <Link href="#contact" className="text-foreground/60 hover:text-foreground transition-colors">
          Contact
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <ThemeToggle />
        <Link href="#contact" suppressHydrationWarning className="flex items-center gap-2 bg-accent text-background px-6 py-2.5 rounded-full font-medium text-sm hover:opacity-90 transition-opacity uppercase tracking-wider">
          Let&apos;s Talk
        </Link>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden flex items-center gap-4">
        <ThemeToggle />
        <button suppressHydrationWarning className="text-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </div>
    </nav>
  );
}
