import React, { useEffect } from 'react';
import './Spl.css';

const SPL = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f9f9f9] font-['Plus_Jakarta_Sans'] text-[#1a1c1c] selection:bg-[#586400] selection:text-[#ffffff] overflow-x-hidden min-h-screen">
      {/* Inject CSS styles directly for local use if needed, but we use Spl.css */}
      <style>{`
        .brutalist-stroke {
            -webkit-text-stroke: 2px #1a1c1c;
        }
        .text-shadow-brutal {
            text-shadow: 6px 6px 0px #1a1c1c;
        }
        .text-shadow-pink {
            text-shadow: 4px 4px 0px #bb0058;
        }
        .bg-grid-pattern {
            background-image: radial-gradient(#1a1c1c 1px, transparent 1px);
            background-size: 32px 32px;
        }
      `}</style>


      <main className="relative min-h-screen flex flex-col items-center justify-center bg-grid-pattern px-6 overflow-hidden">
        {/* Floating Elements Layer */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Cricket Bat */}
          <div className="absolute top-[15%] left-[10%] rotate-[-25deg] transform">
            <span className="material-symbols-outlined text-8xl text-[#0046fa] p-4 bg-[#d4f000] border-4 border-[#1a1c1c] shadow-[6px_6px_0px_0px_rgba(26,28,28,1)]">sports_cricket</span>
          </div>
          {/* Cricket Ball */}
          <div className="absolute bottom-[20%] right-[15%] rotate-[15deg] transform">
            <span className="material-symbols-outlined text-7xl text-[#ffffff] bg-[#bb0058] border-4 border-[#1a1c1c] shadow-[6px_6px_0px_0px_rgba(26,28,28,1)] p-3 rounded-full" data-weight="fill" style="font-variation-settings: 'FILL' 1;">sports_baseball</span>
          </div>
          {/* Lightning Bolts */}
          <div className="absolute top-[20%] right-[10%] rotate-[45deg] transform">
            <span className="material-symbols-outlined text-6xl text-[#d4f000]" data-weight="fill" style="font-variation-settings: 'FILL' 1;">bolt</span>
          </div>
          <div className="absolute bottom-[30%] left-[5%] rotate-[-15deg] transform">
            <span className="material-symbols-outlined text-9xl text-[#bb0058]" data-weight="fill" style="font-variation-settings: 'FILL' 1;">bolt</span>
          </div>
          {/* Starbursts/Stars */}
          <div className="absolute top-[10%] left-[45%] rotate-[10deg] transform">
            <span className="material-symbols-outlined text-5xl text-[#0046fa]" data-weight="fill" style="font-variation-settings: 'FILL' 1;">star</span>
          </div>
          <div className="absolute top-[60%] right-[5%] -rotate-12 transform">
            <span className="material-symbols-outlined text-8xl text-[#586400] border-4 border-[#1a1c1c] bg-[#f9f9f9] shadow-[8px_8px_0px_0px_rgba(187,0,88,1)] p-4">grade</span>
          </div>
          {/* Zigzags (Represented by symbols) */}
          <div className="absolute bottom-[10%] left-[25%] opacity-40">
            <span className="material-symbols-outlined text-9xl text-[#73768b]">waves</span>
          </div>
          <div className="absolute top-[5%] right-[25%] opacity-40">
            <span className="material-symbols-outlined text-9xl text-[#73768b]">waves</span>
          </div>
          {/* Stumps (Triple lines) */}
          <div className="absolute bottom-[15%] left-[45%] flex gap-2 rotate-12">
            <div className="w-4 h-32 bg-[#1a1c1c]"></div>
            <div className="w-4 h-32 bg-[#1a1c1c]"></div>
            <div className="w-4 h-32 bg-[#1a1c1c]"></div>
          </div>
        </div>
        {/* Central Content Canvas */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-6xl">
          {/* Secondary Brand */}
          <div className="mb-8 rotate-[-2deg]">
            <span className="bg-[#0046fa] text-[#ffffff] font-['Space_Grotesk'] font-black text-xl md:text-2xl px-6 py-2 border-4 border-[#1a1c1c] shadow-[4px_4px_0px_0px_rgba(26,28,28,1)] uppercase tracking-tighter italic">
              E-Cell X BMSIT&amp;M
            </span>
          </div>
          {/* Massive Title Section */}
          <div className="relative group">
            {/* Background decoration block */}
            <div className="absolute -inset-4 bg-[#d4f000] border-4 border-[#1a1c1c] -rotate-1 -z-10 shadow-[12px_12px_0px_0px_rgba(26,28,28,1)]"></div>
            <h1 className="font-['Space_Grotesk'] font-black text-6xl md:text-8xl lg:text-9xl leading-[0.85] text-[#0046fa] uppercase italic tracking-tighter">
              <span className="block brutalist-stroke text-shadow-brutal">STARTUP</span>
              <span className="block text-[#f9f9f9] brutalist-stroke text-shadow-pink mt-2">PREMIER</span>
              <span className="block brutalist-stroke text-shadow-brutal mt-2">LEAGUE 2.0</span>
            </h1>
          </div>
          {/* Sponsorship Tag */}
          <div className="mt-12 mb-12">
            <div className="inline-flex items-center bg-[#e2e2e2] border-4 border-[#1a1c1c] px-4 py-2 font-['Space_Grotesk'] font-bold text-lg md:text-xl uppercase tracking-widest text-[#1a1c1c] hover:bg-[#ffd9e0] transition-colors cursor-default">
              <span className="material-symbols-outlined mr-2">chevron_left</span>
              Sponsored By ...
              <span className="material-symbols-outlined ml-2">chevron_right</span>
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-8 w-full md:w-auto items-center justify-center">
            {/* Primary CTA */}
            <button className="group relative w-full md:w-72 h-20 bg-[#0046fa] text-[#ffffff] border-4 border-[#1a1c1c] shadow-[8px_8px_0px_0px_rgba(26,28,28,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all active:bg-[#bb0058]">
              <span className="flex items-center justify-center gap-3 font-['Space_Grotesk'] font-black text-2xl uppercase italic tracking-tighter">
                REGISTER NOW
                <span className="material-symbols-outlined text-3xl" data-weight="fill">send</span>
              </span>
            </button>
            {/* Secondary CTA */}
            <button className="group relative w-full md:w-72 h-20 bg-[#f9f9f9] text-[#1a1c1c] border-4 border-[#1a1c1c] shadow-[8px_8px_0px_0px_rgba(187,0,88,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all active:bg-[#d4f000]">
              <span className="flex items-center justify-center gap-3 font-['Space_Grotesk'] font-black text-2xl uppercase italic tracking-tighter">
                VIEW RULES
                <span className="material-symbols-outlined text-3xl">description</span>
              </span>
            </button>
          </div>
        </div>
        {/* Ticker Style Decorative Footer */}
        <div className="absolute bottom-0 left-0 w-full bg-[#1a1c1c] py-3 overflow-hidden whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex gap-12 font-['Space_Grotesk'] font-black text-[#d4f000] uppercase text-2xl italic tracking-widest animate-none">
              <span>NO RULES. ALL POWER.</span>
              <span className="text-[#bb0058]">●</span>
              <span>NO RULES. ALL POWER.</span>
              <span className="text-[#bb0058]">●</span>
              <span>NO RULES. ALL POWER.</span>
              <span className="text-[#bb0058]">●</span>
              <span>NO RULES. ALL POWER.</span>
              <span className="text-[#bb0058]">●</span>
              <span>NO RULES. ALL POWER.</span>
              <span className="text-[#bb0058]">●</span>
              <span>NO RULES. ALL POWER.</span>
              <span className="text-[#bb0058]">●</span>
              <span>NO RULES. ALL POWER.</span>
              <span className="text-[#bb0058]">●</span>
              <span>NO RULES. ALL POWER.</span>
            </div>
          </div>
        </div>
      </main>
      {/* Content Sections (Demonstrating Bento Layouts) */}
      <section className="bg-[#f9f9f9] py-24 px-6 md:px-20 border-t-8 border-[#1a1c1c]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-7xl mx-auto">
          {/* Bento Card 1: Large Feature */}
          <div className="md:col-span-8 bg-[#bb0058] border-4 border-[#1a1c1c] p-10 shadow-[10px_10px_0px_0px_rgba(26,28,28,1)] flex flex-col justify-between">
            <div>
              <span className="bg-[#1a1c1c] text-[#ffd9e0] font-['Space_Grotesk'] font-black px-4 py-1 uppercase text-sm mb-6 inline-block">The Arena</span>
              <h2 className="font-['Space_Grotesk'] font-black text-5xl md:text-7xl text-[#ffffff] uppercase italic leading-none mb-6">PITCH YOUR <br />EMPIRE.</h2>
              <p className="font-['Plus_Jakarta_Sans'] text-xl md:text-2xl text-[#ffffff]/90 max-w-xl">Where cricket meets capital. Assemble your team, trade shares like wickets, and dominate the startup ecosystem in the most chaotic tournament of the year.</p>
            </div>
            <div className="mt-12">
              <div className="w-full h-64 bg-[#ffffff]/20 border-4 border-[#ffffff]/40 flex items-center justify-center overflow-hidden">
                <img alt="Dynamic high contrast action shot of entrepreneurs in a cricket stadium setting with neon lights and brutalist overlays" className="w-full h-full object-cover grayscale contrast-125" data-alt="High contrast editorial photo of a group of young founders standing on a cricket pitch under stadium lights at night with a vibrant pink and blue color grade" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRzrEZCFGipQOu4SF8qcp2XRFRW8mCrr1BRBTrnp6y-Juqfen0Tqw-9foGpZjTkbsdRcqbqJf6YzZ5pG8GSYwvVOh9ZBQepAe2Z62x5gzlUJGcTljlShej6MZv94-cUSpVzzwWnWbClYcgLEf9sjKL8P7U23Jh53BDFmPl33wM1UvPVNPZVcxuqd3MlId7F_GilusAJa-ckXEy3vl5cpyJVpWIfkPM-cMmHeA7Hqp2OeAoXSZGnHw6Un7yLeRnQUd6Tj0Lf1HCEt4" />
              </div>
            </div>
          </div>
          {/* Bento Card 2: Stat Block */}
          <div className="md:col-span-4 flex flex-col gap-8">
            <div className="bg-[#d4f000] border-4 border-[#1a1c1c] p-8 shadow-[8px_8px_0px_0px_rgba(26,28,28,1)] flex-1 rotate-1 hover:rotate-0 transition-transform">
              <h3 className="font-['Space_Grotesk'] font-black text-6xl text-[#1a1c1c] mb-2">50+</h3>
              <p className="font-['Space_Grotesk'] font-black text-xl uppercase text-[#586400]">Startups Battle</p>
            </div>
            <div className="bg-[#0046fa] border-4 border-[#1a1c1c] p-8 shadow-[8px_8px_0px_0px_rgba(26,28,28,1)] flex-1 -rotate-2 hover:rotate-0 transition-transform">
              <h3 className="font-['Space_Grotesk'] font-black text-6xl text-[#ffffff] mb-2">₹2L+</h3>
              <p className="font-['Space_Grotesk'] font-black text-xl uppercase text-[#dde1ff]">Cash Prize Pool</p>
            </div>
          </div>
          {/* Bento Card 3: Small Grid Item */}
          <div className="md:col-span-4 bg-[#e2e2e2] border-4 border-[#1a1c1c] p-8 shadow-[8px_8px_0px_0px_rgba(26,28,28,1)]">
            <span className="material-symbols-outlined text-5xl text-[#bb0058] mb-4" data-weight="fill">groups</span>
            <h4 className="font-['Space_Grotesk'] font-black text-3xl uppercase mb-3">ELITE MENTORSHIP</h4>
            <p className="font-['Plus_Jakarta_Sans'] text-lg">Get direct access to investors who don't just write checks—they build legacies.</p>
          </div>
          {/* Bento Card 4: Medium Grid Item */}
          <div className="md:col-span-8 bg-[#1a1c1c] p-1 border-4 border-[#1a1c1c] shadow-[8px_8px_0px_0px_rgba(187,0,88,1)] overflow-hidden">
            <div className="h-full bg-[#f9f9f9] p-8 flex flex-col md:flex-row gap-8 items-center">
              <div className="w-32 h-32 bg-[#586400] flex-shrink-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-[#d4f000]">trophy</span>
              </div>
              <div>
                <h4 className="font-['Space_Grotesk'] font-black text-3xl uppercase mb-2">The Winner's Circle</h4>
                <p className="font-['Plus_Jakarta_Sans'] text-lg">Every participant gets exclusive access to the E-cell BMSIT&amp;M incubation network and cloud credits worth over $5k.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer from JSON Guide */}
      <footer className="w-full py-8 px-10 flex flex-col md:flex-row justify-between items-center gap-6 bg-[#d4f000] border-t-4 border-black">
        <div className="text-lg font-black text-black uppercase italic font-['Space_Grotesk']">
          STARTUP PREMIER LEAGUE 2.0
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a className="font-['Space_Grotesk'] font-bold uppercase text-sm tracking-widest text-black/80 hover:text-[#bb0058] transition-transform duration-75" href="#">Sponsors</a>
          <a className="font-['Space_Grotesk'] font-bold uppercase text-sm tracking-widest text-black/80 hover:text-[#bb0058] transition-transform duration-75" href="#">Rules</a>
          <a className="font-['Space_Grotesk'] font-bold uppercase text-sm tracking-widest text-black/80 hover:text-[#bb0058] transition-transform duration-75" href="#">Teams</a>
          <a className="font-['Space_Grotesk'] font-bold uppercase text-sm tracking-widest text-black/80 hover:text-[#bb0058] transition-transform duration-75" href="#">Archive</a>
        </div>
        <div className="font-['Space_Grotesk'] font-bold uppercase text-sm tracking-widest text-black text-center md:text-right">
          © 2024 STARTUP PREMIER LEAGUE 2.0 - NO RULES. ALL POWER.
        </div>
      </footer>

    </div>
  );
};

export default SPL;
