import React from 'react';
import rightSvg from './assets/spl2/right.svg';
import leftSvg from './assets/spl2/left.svg';
import helmetSvg from './assets/spl2/helmet.svg';


const Spl2 = () => {
  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

        .spl-brutalist-stroke {
          -webkit-text-stroke: 2px #1a1c1c;
        }
        .spl-text-shadow-brutal {
          text-shadow: 6px 6px 0px #1a1c1c;
        }
        .spl-text-shadow-pink {
          text-shadow: 4px 4px 0px #bb0058;
        }
        .spl-bg-grid-pattern {
          background-image: radial-gradient(#1a1c1c 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .spl-ticker {
          animation: spl-ticker-scroll 18s linear infinite;
          white-space: nowrap;
        }
        @keyframes spl-ticker-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .material-symbols-outlined.filled {
          font-variation-settings: 'FILL' 1;
        }
        details > summary {
          list-style: none;
        }
        details > summary::-webkit-details-marker {
          display: none;
        }
      `}</style>

      <div className="overflow-x-hidden" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: '#f9f9f9', color: '#1a1c1c' }}>

        {/* ─── HERO ─────────────────────────────────────────────────────────── */}
        <main className="relative min-h-screen flex flex-col items-center justify-center spl-bg-grid-pattern px-6 overflow-hidden pb-16" style={{ paddingTop: '5rem' }}>

          {/* Floating Images substituting SVGs */}
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden z-0">

            {/* Stumps — bottom-left, peeking in from the edge */}
            <img
              src={leftSvg}
              alt="Stumps"
              style={{
                position: 'absolute',
                bottom: '2%',
                left: '-2%',
                width: '32rem',
                transform: 'rotate(10deg)',
                filter: 'drop-shadow(8px 8px 0px #1a1c1c)',
              }}
            />

            {/* People — bottom-right, large to fill the right gap */}
            <img
              src={rightSvg}
              alt="People cheering"
              style={{
                position: 'absolute',
                bottom: '0%',
                right: '-3%',
                width: '32rem',
                transform: 'rotate(-4deg)',
                filter: 'drop-shadow(10px 10px 0px #bb0058)',
              }}
            />

            {/* Helmet — adjust position/rotation/size freely below */}

          </div>

          {/* Helmet — above all text, adjust freely */}
          <img
            src={helmetSvg}
            alt="Cricket Helmet"
            style={{
              position: 'absolute',
              top: '12%',          /* ← move up/down */
              right: '28%',        /* ← move left/right */
              width: '12rem',      /* ← resize */
              transform: 'rotate(40deg)',  /* ← rotate */
              filter: 'none',
              zIndex: 50,
              pointerEvents: 'none',
              transition: 'transform 0.3s ease',
            }}
          />

          {/* Central Content */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-6xl w-full">

            {/* "by E-cell BMSIT&M" badge */}
            <div className="mb-8" style={{ transform: 'rotate(-2deg)' }}>
              <span
                style={{
                  backgroundColor: '#0046fa',
                  color: '#ffffff',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 900,
                  fontSize: '1.25rem',
                  padding: '0.5rem 1.5rem',
                  border: '4px solid #1a1c1c',
                  boxShadow: '4px 4px 0px 0px rgba(26,28,28,1)',
                  textTransform: 'uppercase',
                  letterSpacing: '-0.05em',
                  fontStyle: 'italic',
                  display: 'inline-block',
                }}
              >
                E-CELL X BMSIT&amp;M PRESENTS
              </span>
            </div>

            {/* Main Title Block */}
            <div className="flex flex-col items-center gap-1 md:gap-3" style={{ marginBottom: '1rem', marginTop: '1.5rem' }}>
              <h1 className="flex flex-col items-center" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, textTransform: 'uppercase', fontStyle: 'italic', letterSpacing: '-0.02em', lineHeight: 1 }}>
                <span
                  className="inline-block"
                  style={{
                    backgroundColor: '#0046fa', color: '#ffffff',
                    padding: '0.5rem 1.5rem',
                    border: '4px solid #1a1c1c',
                    boxShadow: '8px 8px 0px 0px #1a1c1c',
                    transform: 'rotate(-2deg)',
                    fontSize: 'clamp(3rem, 8vw, 6rem)',
                    marginBottom: '0.5rem',
                    zIndex: 2
                  }}>
                  STARTUP
                </span>
                <span
                  className="inline-block"
                  style={{
                    backgroundColor: '#d4f000', color: '#1a1c1c',
                    padding: '0.5rem 2rem',
                    border: '4px solid #1a1c1c',
                    boxShadow: '8px 8px 0px 0px #bb0058',
                    transform: 'rotate(1deg)',
                    fontSize: 'clamp(3.5rem, 9vw, 7rem)',
                    marginBottom: '0.5rem',
                    zIndex: 3
                  }}>
                  PREMIER
                </span>
                <span
                  className="inline-block relative"
                  style={{
                    backgroundColor: '#f9f9f9', color: '#1a1c1c',
                    padding: '0.5rem 1.5rem',
                    border: '4px solid #1a1c1c',
                    boxShadow: '8px 8px 0px 0px #0046fa',
                    transform: 'rotate(-1deg)',
                    fontSize: 'clamp(2.5rem, 7vw, 5rem)',
                    zIndex: 1
                  }}>
                  LEAGUE 2.0
                </span>
              </h1>
            </div>

            {/* Spacer between title and buttons */}
            <div style={{ marginTop: '1rem', marginBottom: '1rem' }} />

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-8 w-full md:w-auto items-center justify-center">
              {/* Register */}
              <button
                style={{
                  position: 'relative',
                  width: '18rem',
                  height: '5rem',
                  backgroundColor: '#0046fa',
                  color: '#ffffff',
                  border: '4px solid #1a1c1c',
                  boxShadow: '8px 8px 0px 0px rgba(26,28,28,1)',
                  cursor: 'pointer',
                  transition: 'all 0.1s ease',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 900,
                  fontSize: '1.5rem',
                  textTransform: 'uppercase',
                  fontStyle: 'italic',
                  letterSpacing: '-0.04em',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translate(4px, 4px)'; e.currentTarget.style.boxShadow = 'none'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '8px 8px 0px 0px rgba(26,28,28,1)'; }}
              >
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                  REGISTER NOW
                  <span className="material-symbols-outlined" style={{ fontSize: '1.75rem', fontVariationSettings: "'FILL' 1" }}>send</span>
                </span>
              </button>

              {/* View Rules */}
              <button
                style={{
                  position: 'relative',
                  width: '18rem',
                  height: '5rem',
                  backgroundColor: '#f9f9f9',
                  color: '#1a1c1c',
                  border: '4px solid #1a1c1c',
                  boxShadow: '8px 8px 0px 0px rgba(187,0,88,1)',
                  cursor: 'pointer',
                  transition: 'all 0.1s ease',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 900,
                  fontSize: '1.5rem',
                  textTransform: 'uppercase',
                  fontStyle: 'italic',
                  letterSpacing: '-0.04em',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translate(4px, 4px)'; e.currentTarget.style.boxShadow = 'none'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '8px 8px 0px 0px rgba(187,0,88,1)'; }}
              >
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                  VIEW RULES
                  <span className="material-symbols-outlined" style={{ fontSize: '1.75rem' }}>description</span>
                </span>
              </button>
            </div>
          </div>

          {/* Ticker Bar */}
          <div
            className="absolute bottom-0 left-0 w-full overflow-hidden"
            style={{ backgroundColor: '#1a1c1c', paddingTop: '0.75rem', paddingBottom: '0.75rem' }}
          >
            <div className="spl-ticker flex gap-12" style={{ display: 'inline-flex' }}>
              {Array(10).fill(null).map((_, i) => (
                <React.Fragment key={i}>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, color: '#d4f000', textTransform: 'uppercase', fontSize: '1.5rem', fontStyle: 'italic', letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>NO RULES. ALL POWER.</span>
                  <span style={{ color: '#bb0058', fontSize: '1.5rem' }}>●</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </main>

        {/* ─── BENTO SECTION ────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: '#f9f9f9', padding: '6rem 1.5rem', borderTop: '8px solid #1a1c1c' }}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-7xl mx-auto">

            {/* Card 1: Large Feature */}
            <div
              className="md:col-span-8 flex flex-col justify-between"
              style={{ backgroundColor: '#bb0058', border: '4px solid #1a1c1c', padding: '2.5rem', boxShadow: '10px 10px 0px 0px rgba(26,28,28,1)' }}
            >
              <div>
                <span style={{ backgroundColor: '#1a1c1c', color: '#ffd9e0', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, padding: '0.25rem 1rem', textTransform: 'uppercase', fontSize: '0.875rem', marginBottom: '1.5rem', display: 'inline-block' }}>
                  The Arena
                </span>
                <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: '#ffffff', textTransform: 'uppercase', fontStyle: 'italic', lineHeight: 1, marginBottom: '1.5rem' }}>
                  PITCH YOUR <br />EMPIRE.
                </h2>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', maxWidth: '36rem' }}>
                  Where cricket meets capital. Assemble your team, trade shares like wickets, and dominate the startup ecosystem in the most chaotic tournament of the year.
                </p>
              </div>
              <div style={{ marginTop: '3rem' }}>
                <div style={{ width: '100%', height: '16rem', backgroundColor: 'rgba(255,255,255,0.2)', border: '4px solid rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRzrEZCFGipQOu4SF8qcp2XRFRW8mCrr1BRBTrnp6y-Juqfen0Tqw-9foGpZjTkbsdRcqbqJf6YzZ5pG8GSYwvVOh9ZBQepAe2Z62x5gzlUJGcTljlShej6MZv94-cUSpVzzwWnWbClYcgLEf9sjKL8P7U23Jh53BDFmPl33wM1UvPVNPZVcxuqd3MlId7F_GilusAJa-ckXEy3vl5cpyJVpWIfkPM-cMmHeA7Hqp2OeAoXSZGnHw6Un7yLeRnQUd6Tj0Lf1HCEt4"
                    alt="Entrepreneurs on a cricket pitch"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1) contrast(1.25)' }}
                  />
                </div>
              </div>
            </div>

            {/* Card 2: Stats Block */}
            <div className="md:col-span-4 flex flex-col gap-8">
              <div
                style={{
                  backgroundColor: '#d4f000', border: '4px solid #1a1c1c', padding: '2rem',
                  boxShadow: '8px 8px 0px 0px rgba(26,28,28,1)', flex: 1,
                  transform: 'rotate(1deg)', transition: 'transform 0.2s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'rotate(0deg)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'rotate(1deg)'}
              >
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: '3.75rem', color: '#1a1c1c', marginBottom: '0.5rem' }}>50+</h3>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: '1.25rem', textTransform: 'uppercase', color: '#586400' }}>Startups Battle</p>
              </div>
              <div
                style={{
                  backgroundColor: '#0046fa', border: '4px solid #1a1c1c', padding: '2rem',
                  boxShadow: '8px 8px 0px 0px rgba(26,28,28,1)', flex: 1,
                  transform: 'rotate(-2deg)', transition: 'transform 0.2s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'rotate(0deg)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'rotate(-2deg)'}
              >
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: '3.75rem', color: '#ffffff', marginBottom: '0.5rem' }}>₹2L+</h3>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: '1.25rem', textTransform: 'uppercase', color: '#dde1ff' }}>Cash Prize Pool</p>
              </div>
            </div>

            {/* Card 3: Mentorship */}
            <div
              className="md:col-span-4"
              style={{ backgroundColor: '#e2e2e2', border: '4px solid #1a1c1c', padding: '2rem', boxShadow: '8px 8px 0px 0px rgba(26,28,28,1)' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '3rem', color: '#bb0058', marginBottom: '1rem', display: 'block', fontVariationSettings: "'FILL' 1" }}>groups</span>
              <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: '1.875rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>ELITE MENTORSHIP</h4>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '1.125rem' }}>Get direct access to investors who don't just write checks—they build legacies.</p>
            </div>

            {/* Card 4: Winner's Circle */}
            <div
              className="md:col-span-8"
              style={{ backgroundColor: '#1a1c1c', padding: '4px', border: '4px solid #1a1c1c', boxShadow: '8px 8px 0px 0px rgba(187,0,88,1)', overflow: 'hidden' }}
            >
              <div style={{ height: '100%', backgroundColor: '#f9f9f9', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }} className="md:flex-row">
                <div style={{ width: '8rem', height: '8rem', backgroundColor: '#586400', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '3.75rem', color: '#d4f000' }}>trophy</span>
                </div>
                <div>
                  <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: '1.875rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>The Winner's Circle</h4>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '1.125rem' }}>Every participant gets exclusive access to the E-cell BMSIT&amp;M incubation network and cloud credits worth over $5k.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── RULES & DETAILS ────────────────────────────────────────────── */}
        <section style={{ backgroundColor: '#e2e2e2', padding: '6rem 1.5rem', borderTop: '8px solid #1a1c1c' }}>
          <div className="max-w-7xl mx-auto">
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: '#1a1c1c', textTransform: 'uppercase', fontStyle: 'italic', lineHeight: 1, marginBottom: '4rem', textAlign: 'center' }}>
              HOW IT WORKS.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { step: '01', title: 'Team Formation', desc: 'Gather your squad of 2-4 members. Every great legacy starts with a solid foundation. Make sure you have a balanced mix of tech, business, and design brains.' },
                { step: '02', title: 'The Auction', desc: 'Experience the thrill of an IPL-style real-time auction. Bid on critical resources, features, and advantages using virtual currency. Strategy is everything.' },
                { step: '03', title: 'The Pitch', desc: 'Build your prototype and face the ruthless investors. You have exactly 5 minutes to convince the panel why your empire deserves the ultimate crown.' }
              ].map((rule, idx) => (
                <div key={idx} style={{ backgroundColor: '#ffffff', border: '4px solid #1a1c1c', padding: '2.5rem', boxShadow: '8px 8px 0px 0px rgba(26,28,28,1)', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-1.5rem', left: '1.5rem', backgroundColor: '#d4f000', border: '4px solid #1a1c1c', padding: '0.25rem 1rem', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: '1.5rem', color: '#1a1c1c' }}>
                    {rule.step}
                  </div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: '2rem', textTransform: 'uppercase', marginBottom: '1rem', marginTop: '1rem', color: '#1a1c1c', lineHeight: 1.1 }}>{rule.title}</h3>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '1.125rem', color: '#434659' }}>{rule.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQS ──────────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: '#0046fa', padding: '6rem 1.5rem', borderTop: '8px solid #1a1c1c' }}>
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-12 text-center inline-block w-full">
              <h2 className="spl-text-shadow-brutal" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: '#f9f9f9', textTransform: 'uppercase', fontStyle: 'italic', lineHeight: 1, position: 'relative', zIndex: 10 }}>
                BURNING QUESTIONS.
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              {[
                { q: 'Who can participate?', a: 'Any college student with a valid ID card. You don\'t need to be from BMSIT to conquer the league.' },
                { q: 'Do I need a technical background?', a: 'Not at all! A successful startup needs hustlers, designers, and visionaries just as much as it needs coders.' },
                { q: 'What is the registration fee?', a: 'The registration fee is ₹250 per team. An absolute steal for the amount of value, networking, and prizes you get.' },
                { q: 'Will food be provided?', a: 'Yes! We run on caffeine and good food. Energy drinks, snacks, and meals will be provided during the intensive hacking phases.' }
              ].map((faq, idx) => (
                <details key={idx} style={{ backgroundColor: '#ffffff', border: '4px solid #1a1c1c', boxShadow: '8px 8px 0px 0px rgba(26,28,28,1)', cursor: 'pointer' }} className="group">
                  <summary style={{ padding: '1.5rem', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: '1.5rem', textTransform: 'uppercase', color: '#1a1c1c', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {faq.q}
                    <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-3xl font-bold" style={{ color: '#bb0058' }}>expand_more</span>
                  </summary>
                  <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '1.125rem', color: '#434659' }}>
                    <div style={{ width: '100%', height: '2px', backgroundColor: '#e8e8e8', marginBottom: '1.5rem' }} />
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FOOTER ───────────────────────────────────────────────────────── */}
        <footer
          style={{
            width: '100%', padding: '2rem 2.5rem',
            display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem',
            backgroundColor: '#d4f000', borderTop: '4px solid #000000',
          }}
        >
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, fontSize: '1.125rem', color: '#000000', textTransform: 'uppercase', fontStyle: 'italic' }}>
            STARTUP PREMIER LEAGUE 2.0
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
            {['Sponsors', 'Rules', 'Teams', 'Archive'].map(link => (
              <a
                key={link}
                href="#"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '0.1em', color: 'rgba(0,0,0,0.8)', textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#bb0058'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(0,0,0,0.8)'}
              >{link}</a>
            ))}
          </div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '0.1em', color: '#000000' }}>
            © 2025 SPL 2.0 — NO RULES. ALL POWER.
          </div>
        </footer>
      </div>
    </>
  );
};

export default Spl2;
