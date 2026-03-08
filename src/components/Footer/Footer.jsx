import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';
import './Footer.css'; // Import custom animations and layout styles
import ecellLogoDesktop from '../../assets/ecell1.png'; // E-Cell logo
import ecellLogoMobile from '../../assets/ecellorange.png';

// ─── Desktop Helper ────────────────────────────────────────────────────────────
const WavyLightPath = ({ intense }) => (
    <div className={`wavy-light-path ${intense ? 'intense' : ''}`}>
        <svg preserveAspectRatio="none" viewBox="0 0 1000 40">
            <path d="M0,20 Q125,5 250,20 T500,20 T750,20 T1000,20" />
            <path d="M0,20 Q125,35 250,20 T500,20 T750,20 T1000,20" style={{ opacity: 0.5 }} />
        </svg>
    </div>
);

// ─── Desktop Footer Component ──────────────────────────────────────────────────
const DesktopFooter = () => {
    return (
        <footer className="nebula-footer w-full relative font-[300]">

            {/* EXACT SVG BACKGROUND CUTOUT */}
            <div className="relative w-full overflow-hidden" style={{ height: '301.4px', backgroundColor: '#ffffff', zIndex: 0 }}>
                {/* 
                    Using the exact provided coordinates scaled to a viewBox of 1366
                    Start (0, 198.6) to (293.3, 198.6)
                    Curve to (683, 396.4)
                    Curve to (1366-293.3, 198.6) = (1072.7, 198.6)
                    Line to (1366, 198.6)
                */}
                <svg
                    viewBox="0 198.6 1366 301.4"
                    preserveAspectRatio="xMidYMin slice"
                    className="w-full h-full"
                >
                    <path
                        d="M 0 198.6
                           L 293.3 198.6
                           Q 488 198.6 683 396.4
                           Q 878 198.6 1072.7 198.6
                           L 1366 198.6
                           L 1366 500
                           L 0 500 Z"
                        fill="#030810" // The deep dark color from the image
                    />
                </svg>
            </div>
            {/* MIDDLE SECTION - NAVIGATION & CONTACT */}
            <div className="relative z-20 max-w-[1200px] mx-auto px-10 flex flex-col md:flex-row justify-between items-start gap-12 md:gap-4 mb-16 -mt-[100px]">
                
                {/* Left Side Links */}
                <div className="flex-1 text-sm leading-[2.2] text-left flex flex-col items-start gap-2 font-sans text-[14px] font-medium tracking-wide mt-12 w-full">
                    <Link to="/" className="text-white/60 hover:text-white transition-all duration-300" style={{ color: 'rgba(255,255,255,0.6)' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.6)'}>Home</Link>
                    <Link to="/about" className="text-white/60 hover:text-white transition-all duration-300" style={{ color: 'rgba(255,255,255,0.6)' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.6)'}>About Us</Link>
                    <Link to="/events" className="text-white/60 hover:text-white transition-all duration-300" style={{ color: 'rgba(255,255,255,0.6)' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.6)'}>Events</Link>
                    <Link to="/gallery" className="text-white/60 hover:text-white transition-all duration-300" style={{ color: 'rgba(255,255,255,0.6)' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.6)'}>Gallery</Link>
                    <Link to="/team" className="text-white/60 hover:text-white transition-all duration-300" style={{ color: 'rgba(255,255,255,0.6)' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.6)'}>Our Team</Link>
                </div>

                {/* Center Contact */}
                <div className="flex-1 flex flex-col items-center justify-start text-center z-30 mt-12 w-full">
                    <div className="floating-text-btn pt-4 px-4 pb-0 cursor-default">
                        CONTACT US
                    </div>
                    {/* Tiny energy line underneath */}
                    <div className="w-[80px] h-[1px] bg-white/30 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                </div>

                {/* Right Side Address (BICEP) */}
                <div className="flex-1 text-sm leading-[2.2] text-right md:text-right flex flex-col items-end gap-1 font-sans text-[14px] font-medium tracking-wide mt-12 w-full text-white/60">
                    <p className="font-semibold text-white/70 uppercase mb-1 tracking-wider">BICEP</p>
                    <p>BMS Institute of Technology</p>
                    <p>and Management</p>
                    <p>Avalahalli, Yelahanka</p>
                    <p>Bengaluru, Karnataka 560064</p>
                </div>
            </div>

            {/* LIGHT PATH DIVIDER 1 */}
            <div className="max-w-[1200px] mx-auto px-4">
                <WavyLightPath intense={false} />
            </div>

            {/* SOCIAL LINKS (Floating & Glowing) */}
            <div className="relative z-20 max-w-[800px] mx-auto px-4 flex flex-col sm:flex-row justify-between items-center my-6 gap-6 sm:gap-0 font-sans text-[13px] tracking-wide">
                {['INSTAGRAM', 'FACEBOOK', 'TWITTER', 'YOUTUBE'].map((social, idx) => (
                    <a
                        key={social}
                        href="#"
                        className="text-white/60 transition-all duration-300"
                        style={{ color: 'rgba(255,255,255,0.6)' }}
                        onMouseEnter={(e) => { e.target.style.color = 'white'; e.target.style.textShadow = '0 0 10px rgba(255,255,255,0.8)'; }}
                        onMouseLeave={(e) => { e.target.style.color = 'rgba(255,255,255,0.6)'; e.target.style.textShadow = 'none'; }}
                    >
                        {social}
                    </a>
                ))}
            </div>

            {/* LIGHT PATH DIVIDER 2 (Intense near the logo source) */}
            <div className="max-w-[1000px] mx-auto px-4 relative">
                {/* Central energy burst source behind logo */}
                <div className="absolute left-1/2 bottom-[-80px] transform -translate-x-1/2 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_60%)] animate-pulse border-none pointer-events-none" />

                <WavyLightPath intense={true} />
            </div>

            {/* BOTTOM BAR & LOGO RADIANT ENERGY */}
            <div className="relative z-30 max-w-[1200px] mx-auto px-10 pb-12 pt-8 flex justify-between items-center gap-4 text-[10px] uppercase tracking-[0.15em] text-white/60">

                {/* Left Side */}
                <div className="flex-1 text-left hover:text-white/90 transition-colors cursor-default">
                    © 2026 E-Cell BMSIT. All rights reserved.
                </div>

                {/* Center Logo - Radiant Source */}
                <div className="flex-1 flex justify-center items-center relative h-[80px]">
                    {/* The radiant E-Cell logo */}
                    <img
                        src={ecellLogoDesktop}
                        alt="E-Cell Logo"
                        className="w-16 h-16 object-contain animate-radiate select-none"
                        style={{ filter: "drop-shadow(0 0 10px rgba(255,255,255,0.6))" }}
                    />
                </div>

                {/* Right Side Tagline */}
                <div className="flex-1 text-right tracking-[0.2em] font-medium hidden sm:block">
                    INNOVATE.IDEATE.INSPIRE
                </div>
            </div>

            {/* Ambient Base Light (Fanning out from bottom center) */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-screen h-[400px] bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.06)_0%,rgba(200,180,160,0.02)_40%,transparent_70%)] pointer-events-none z-0" />

        </footer>
    );
};

// ─── Spring Wave Canvas (Mobile) ─────────────────────────────────────────────────────────
const SpringWaveCanvas = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const isVisibleRef = useRef(false);
  const animFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width, height;
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    // Physics-based spring points
    const COLS = 60;
    const ROWS = 20;
    const points = [];
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        points.push({
          x: (c / (COLS - 1)) * width,
          y: (r / (ROWS - 1)) * height,
          baseX: (c / (COLS - 1)),
          baseY: (r / (ROWS - 1)),
          vx: 0, vy: 0,
          dx: 0, dy: 0,
        });
      }
    }

    // Observer
    const obs = new IntersectionObserver(([e]) => {
      isVisibleRef.current = e.isIntersecting;
    }, { threshold: 0.05 });
    obs.observe(canvas);

    // Mouse tracking
    const handleMouse = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };
    canvas.addEventListener('mousemove', handleMouse);

    let time = 0;
    const SPRING = 0.015;
    const DAMPING = 0.92;
    const MOUSE_RADIUS = 180;
    const MOUSE_STRENGTH = 12;

    const animate = () => {
      animFrameRef.current = requestAnimationFrame(animate);
      if (!isVisibleRef.current) return;

      time += 0.008;
      resize();

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Update points
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const targetX = p.baseX * width;
        const targetY = p.baseY * height;

        // Organic wave displacement
        const wave1 = Math.sin(p.baseX * 4 + time * 1.2) * Math.cos(p.baseY * 3 + time * 0.8) * 6;
        const wave2 = Math.cos(p.baseX * 2.5 - time * 0.9) * Math.sin(p.baseY * 5 + time * 1.1) * 4;
        const wave3 = Math.sin((p.baseX + p.baseY) * 3 + time * 0.6) * 3;

        p.dx = wave1 + wave2;
        p.dy = wave3 + wave1 * 0.5;

        // Mouse interaction
        const ddx = targetX + p.dx - mx;
        const ddy = targetY + p.dy - my;
        const dist = Math.sqrt(ddx * ddx + ddy * ddy);
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (1 - dist / MOUSE_RADIUS) * MOUSE_STRENGTH;
          p.dx += (ddx / dist) * force;
          p.dy += (ddy / dist) * force;
        }

        // Spring back
        p.vx += (p.dx - (p.x - targetX)) * SPRING;
        p.vy += (p.dy - (p.y - targetY)) * SPRING;
        p.vx *= DAMPING;
        p.vy *= DAMPING;
        p.x = targetX + (p.x - targetX) + p.vx;
        p.y = targetY + (p.y - targetY) + p.vy;
      }

      // Draw
      ctx.clearRect(0, 0, width, height);

      // Background gradient (changed to black as requested)
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      bgGrad.addColorStop(0, '#000000');
      bgGrad.addColorStop(1, '#000000');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw mesh lines
      for (let r = 0; r < ROWS - 1; r++) {
        for (let c = 0; c < COLS - 1; c++) {
          const i = r * COLS + c;
          const p0 = points[i];
          const p1 = points[i + 1];
          const p2 = points[i + COLS];
          const p3 = points[i + COLS + 1];

          // Subtle mesh fill
          const brightness = 0.03 + Math.sin(p0.baseX * 6 + time) * 0.015 + Math.cos(p0.baseY * 4 + time * 0.7) * 0.01;
          ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`;
          ctx.beginPath();
          ctx.moveTo(p0.x, p0.y);
          ctx.lineTo(p1.x, p1.y);
          ctx.lineTo(p3.x, p3.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.closePath();
          ctx.fill();

          // Horizontal lines
          if (r % 3 === 0) {
            const alpha = 0.04 + Math.sin(c * 0.3 + time) * 0.02;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p0.x, p0.y);
            ctx.lineTo(p1.x, p1.y);
            ctx.stroke();
          }

          // Vertical lines
          if (c % 3 === 0) {
            const alpha = 0.04 + Math.cos(r * 0.3 + time) * 0.02;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p0.x, p0.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Flowing highlight bands
      for (let b = 0; b < 3; b++) {
        const bandY = height * (0.2 + b * 0.3) + Math.sin(time * 0.5 + b * 2) * height * 0.08;
        const bandGrad = ctx.createLinearGradient(0, bandY - 60, 0, bandY + 60);
        bandGrad.addColorStop(0, 'rgba(255, 255, 255, 0)');
        bandGrad.addColorStop(0.5, `rgba(255, 255, 255, ${0.06 + Math.sin(time + b) * 0.03})`);
        bandGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = bandGrad;
        ctx.fillRect(0, bandY - 60, width, 120);
      }

      // Vignette
      const vigGrad = ctx.createRadialGradient(width / 2, height / 2, height * 0.2, width / 2, height / 2, width * 0.8);
      vigGrad.addColorStop(0, 'rgba(0,0,0,0)');
      vigGrad.addColorStop(1, 'rgba(0,0,0,0.25)');
      ctx.fillStyle = vigGrad;
      ctx.fillRect(0, 0, width, height);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouse);
      obs.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block' }}
    />
  );
};

// ─── Mobile Footer Component ───────────────────────────────────────────────────
const MobileFooter = () => {
  const navLinks = [
    { name: 'About', to: '/' },
    { name: 'Events', to: '/events' },
    { name: 'Word of the Day', to: '/word-of-the-day' },
    { name: 'Team', to: '/team' },
    { name: 'Contact', to: '/' },
  ];

  const socials = [
    { icon: Instagram, href: 'https://www.instagram.com/ecell.bmsit', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/ecellbmsit', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'X (Twitter)' },
  ];

  return (
    <footer className="relative overflow-hidden bg-black" style={{ fontFamily: 'Sora, sans-serif' }}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <SpringWaveCanvas />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Big Statement */}
        <div className="px-6 sm:px-10 lg:px-16 pt-20 pb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white/95 tracking-tighter leading-[0.95] max-w-4xl">
            IDEATE.
            <br />
            <span className="text-white/60">INNOVATE. INSPIRE.</span>
          </h2>
        </div>

        {/* Divider */}
        <div className="mx-6 sm:mx-10 lg:mx-16 h-px bg-white/15" />

        {/* Main Grid */}
        <div className="px-6 sm:px-10 lg:px-16 py-14 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Left: Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img src={ecellLogoMobile} alt="E-Cell Logo" className="w-10 h-10 brightness-0 invert opacity-90" />
              <div>
                <h3 className="text-white font-bold text-xl tracking-tight leading-none">E-CELL</h3>
                <p className="text-white/50 text-[11px] font-semibold tracking-[0.2em] uppercase">BMSIT&M</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs text-left">
              Empowering the next generation of entrepreneurs through innovation, mentorship, and collaboration.
            </p>
          </div>

          {/* Center: Navigation */}
          <div>
            <h4 className="text-white/40 text-[11px] font-bold tracking-[0.2em] uppercase mb-5">Navigate</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200 flex items-center gap-1.5 group"
                    style={{ color: 'rgba(255,255,255,0.8)' }}
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-[-4px] group-hover:opacity-60 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Social + Contact */}
          <div>
            <h4 className="text-white/40 text-[11px] font-bold tracking-[0.2em] uppercase mb-5">Connect</h4>
            <div className="flex gap-3 mb-6 justify-center md:justify-start">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 group backdrop-blur-sm"
                  aria-label={s.label}
                >
                  <s.icon className="w-4 h-4 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-200" />
                </a>
              ))}
            </div>
            <div className="flex justify-center md:justify-start">
                <a
                  href="mailto:ecell@bmsit.in"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white/90 text-sm font-medium transition-all duration-300"
                  style={{ color: 'rgba(255,255,255,0.9)' }}
                >
                  <Mail className="w-4 h-4" />
                  ecell@bmsit.in
                </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mx-6 sm:mx-10 lg:mx-16 h-px bg-white/10" />
        <div className="px-6 sm:px-10 lg:px-16 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-xs font-medium">
            © 2026 E-Cell BMSIT&M · Ideate · Innovate · Inspire
          </p>
          <p className="text-white/30 text-xs">
            Built with passion in ECELL BMSIT&M
          </p>
        </div>
      </div>
    </footer>
  );
};

// ─── Main Footer ───────────────────────────────────────────────────────────────
const Footer = () => {
    return (
        <>
            <div className="hidden md:block">
                <DesktopFooter />
            </div>
            <div className="block md:hidden">
                <MobileFooter />
            </div>
        </>
    );
};

export default Footer;