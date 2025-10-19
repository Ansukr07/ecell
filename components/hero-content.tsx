"use client";

export default function HeroContent() {
  return (
    <div className="text-center my-0 p-0 px-0 py-16 rounded-4xl shadow-none bg-background/85 backdrop-blur-sm border-border border-none border-0">
      <div className="flex items-center justify-center flex-col text-center py-4">
        <div
          className="inline-flex items-center px-3 py-1 rounded-full bg-muted/50 backdrop-blur-sm relative border mb-0 border-border"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <div className="absolute top-0 left-1 right-1 h-2 bg-gradient-to-r from-transparent via-foreground/20 to-transparent rounded-full" />
          <span className="text-muted-foreground text-xl md:text-sm relative z-10 font-light">
            BMSIT&M PRESENTS
          </span>
        </div>
      </div>

      <h1
        id="main-content"
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-light text-foreground mb-6 leading-tight scroll-mt-20"
      >
        <span className="display-1 cyber-main-text" data-baffle>
          CODE RED
          <sup
            className="text-[3rem] align-super ml-1 maintext-year"
            data-baffle
          >
            '26
          </sup>
        </span>

        <br />
        <span className="font-light text-foreground tracking-tight">
          E-CELL
        </span>
      </h1>

      <p className="font-light text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto font-mono tracking-tight text-balance text-xs md:text-sm">
        INNOVATE. IDEATE. INSPIRE.
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-4 flex-wrap justify-center">
        <button
          className="px-6 py-3 sm:px-8 sm:py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-200 hover:bg-primary/90 focus:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background cursor-pointer tracking-tighter font-sans text-base min-h-[44px] touch-manipulation"
          style={{ WebkitTapHighlightColor: "rgba(255, 255, 255, 0.1)" }}
          aria-label="Open WAV0 Music Studio"
        >
          REGISTER NOW!
        </button>
      </div>
    </div>
  );
}
