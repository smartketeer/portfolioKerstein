export default function LogoStrip() {
  // Using simple text placeholders for the logos to match the "logoipsum" design
  return (
    <section className="py-12 bg-surface/50 border-y border-muted/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 opacity-50">
          
          <div className="flex items-center gap-2 text-xl font-bold font-serif">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-foreground"></div>
              <div className="w-2 h-2 rounded-full bg-foreground"></div>
              <div className="w-2 h-2 rounded-full bg-foreground"></div>
            </div>
            logoipsum
          </div>

          <div className="flex items-center gap-2 text-xl tracking-[0.2em] uppercase font-light">
            <div className="flex flex-col gap-[2px]">
              <div className="w-4 h-[2px] bg-foreground"></div>
              <div className="w-4 h-[2px] bg-foreground"></div>
              <div className="w-4 h-[2px] bg-foreground"></div>
            </div>
            LOGOIPSUM
          </div>

          <div className="flex items-center gap-2 text-xl font-bold">
            <div className="w-6 h-6 rounded-md bg-foreground flex items-center justify-center text-background text-xs font-black">
              L
            </div>
            logoipsum
          </div>

          <div className="flex items-center gap-2 text-xl tracking-[0.2em] font-medium">
            <div className="w-6 h-6 border-2 border-foreground rounded-full flex items-center justify-center text-[10px]">
              L
            </div>
            LOGOIPSUM
          </div>

          <div className="flex items-center gap-2 text-xl font-bold font-serif italic">
            <div className="w-6 h-6 bg-foreground rounded-tl-lg rounded-br-lg"></div>
            logoipsum
          </div>

        </div>
      </div>
    </section>
  );
}
