import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;

        if (currentScrollY < lastScrollY || currentScrollY < 10) {
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
          setIsOpen(false);
        }

        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => window.removeEventListener('scroll', controlNavbar);
    }
  }, [lastScrollY]);

  return (
    <>
      {/* Google Fonts Import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
        }`}
        style={{ fontFamily: 'Sora, sans-serif' }}
      >
        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl border border-slate-200/20 dark:border-slate-700/50 rounded-2xl px-8 py-3 flex items-center justify-between w-[95%] max-w-4xl transition-all duration-300 hover:shadow-3xl">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent tracking-tight">
              E-CELL
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-12 flex items-center space-x-8">
              <a href="#home" className="nav-link">Home</a>
              <a href="#gallery" className="nav-link">Gallery</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#services" className="nav-link">Services</a>
              <a href="#contact" className="contact-btn">Contact</a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-3 rounded-xl text-slate-700 dark:text-slate-300 hover:text-orange-500 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none transition-all duration-300 border border-slate-200 dark:border-slate-700"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[95%] max-w-4xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/20 dark:border-slate-700/50 rounded-2xl shadow-2xl md:hidden animate-in slide-in-from-top-2 duration-300">
            <div className="px-6 py-6 space-y-4">
              <a href="#home" className="mobile-link">Home</a>
              <a href="#gallery" className="mobile-link">Gallery</a>
              <a href="#failure story" className="mobile-link">Failure story</a>
              <a href="#about" className="mobile-link">About</a>
             
              <a href="#contact" className="contact-btn block w-full text-center mt-4">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Extra CSS for links */}
      <style jsx>{`
        .nav-link {
          position: relative;
          font-weight: 500;
          font-size: 0.875rem;
          color: #334155;
          transition: all 0.3s;
        }
        .nav-link:hover {
          color: #f97316;
        }
        .mobile-link {
          display: block;
          padding: 0.5rem 0;
          border-bottom: 1px solid #e2e8f0;
          color: #334155;
          transition: all 0.3s;
        }
        .mobile-link:hover {
          color: #f97316;
        }
        .contact-btn {
          background: linear-gradient(to right, #f97316, #ea580c);
          color: white;
          padding: 0.6rem 1.5rem;
          border-radius: 0.75rem;
          font-weight: 600;
          transition: all 0.3s;
        }
        .contact-btn:hover {
          background: linear-gradient(to right, #ea580c, #c2410c);
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(249, 115, 22, 0.25);
        }
      `}</style>
    </>
  );
}