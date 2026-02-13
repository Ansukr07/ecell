import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';
import ecellLogo from '../../assets/ecellorange.png';

// ─── Spring Bands (AngelList-style elastic layers) ──────────────────────────────
const SpringBands = ({ position = 'top' }) => {
  const bands = [
    { color: 'rgba(124, 45, 18, 0.15)', height: 10, delay: 0 },
    { color: 'rgba(124, 45, 18, 0.25)', height: 12, delay: 0.05 },
    { color: 'rgba(154, 52, 18, 0.35)', height: 14, delay: 0.1 },
    { color: 'rgba(154, 52, 18, 0.5)', height: 16, delay: 0.15 },
    { color: 'rgba(194, 65, 12, 0.65)', height: 18, delay: 0.2 },
    { color: 'rgba(194, 65, 12, 0.8)', height: 20, delay: 0.25 },
    { color: 'rgba(234, 88, 12, 0.9)', height: 22, delay: 0.3 },
    { color: 'rgba(234, 88, 12, 1)', height: 24, delay: 0.35 },
  ];

  const orderedBands = position === 'top' ? bands : [...bands].reverse();

  return (
    <div className="relative w-full">
      {orderedBands.map((band, i) => (
        <div
          key={i}
          className="w-full"
          style={{
            height: `${band.height}px`,
            backgroundColor: band.color,
            animation: `springBounce 3s ease-in-out ${band.delay}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes springBounce {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(1.15); }
        }
      `}</style>
    </div>
  );
};

// ─── Spring Wave Canvas ─────────────────────────────────────────────────────────
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

      // Background gradient
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      bgGrad.addColorStop(0, '#7c2d12');    // deep burnt orange
      bgGrad.addColorStop(0.3, '#9a3412');  // warm rust
      bgGrad.addColorStop(0.6, '#c2410c');  // rich orange
      bgGrad.addColorStop(1, '#ea580c');    // vibrant orange
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
          ctx.fillStyle = `rgba(255, 200, 120, ${brightness})`;
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
            ctx.strokeStyle = `rgba(255, 180, 100, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p0.x, p0.y);
            ctx.lineTo(p1.x, p1.y);
            ctx.stroke();
          }

          // Vertical lines
          if (c % 3 === 0) {
            const alpha = 0.04 + Math.cos(r * 0.3 + time) * 0.02;
            ctx.strokeStyle = `rgba(255, 180, 100, ${alpha})`;
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
        bandGrad.addColorStop(0, 'rgba(251, 146, 60, 0)');
        bandGrad.addColorStop(0.5, `rgba(251, 146, 60, ${0.06 + Math.sin(time + b) * 0.03})`);
        bandGrad.addColorStop(1, 'rgba(251, 146, 60, 0)');
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

// ─── Footer Component ───────────────────────────────────────────────────────────
const Footer = () => {
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
    <footer className="relative overflow-hidden" style={{ fontFamily: 'Sora, sans-serif' }}>
      {/* Spring Bands Top */}
      <SpringBands position="top" />

      {/* Animated Background */}
      <div className="absolute inset-0" style={{ top: '130px', bottom: '130px' }}>
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
              <img src={ecellLogo} alt="E-Cell Logo" className="w-10 h-10 brightness-0 invert opacity-90" />
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
            <div className="flex gap-3 mb-6 justify-center">
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

        {/* Bottom Bar */}
        <div className="mx-6 sm:mx-10 lg:mx-16 h-px bg-white/10" />
        <div className="px-6 sm:px-10 lg:px-16 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-xs font-medium">
            © 2025 E-Cell BMSIT&M · Ideate · Innovate · Inspire
          </p>
          <p className="text-white/30 text-xs">
            Built with passion in ECELL BMSIT&M
          </p>
        </div>
      </div>

      {/* Spring Bands Bottom */}
      <SpringBands position="bottom" />
    </footer>
  );
};

export default Footer;