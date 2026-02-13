import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/ecellorange.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  // Hide navbar on admin routes
  if (location.pathname.startsWith('/admin')) {
    return null;
  }



  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;

        // Show navbar when scrolling up or at the top
        if (currentScrollY < lastScrollY || currentScrollY < 10) {
          setIsVisible(true);
        }
        // Hide navbar when scrolling down
        else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
          setIsOpen(false); // Close mobile menu when hiding
        }

        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => window.removeEventListener('scroll', controlNavbar);
    }
  }, [lastScrollY]);

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/Gallery', label: 'Gallery' },
    { to: '/team', label: 'Team' },
    { to: '/Alumni', label: 'Alumni' },
    { to: '/word-of-the-day', label: 'Word of the Day' }
  ];

  return (
    <>
      <nav
        className={`fixed z-[99999] transition-all duration-500 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
          } md:top-6 md:left-1/2 md:-translate-x-1/2 top-4 right-4`}
        style={{
          fontFamily: 'Sora, sans-serif',
          opacity: lastScrollY < 50 ? 0 : 1,
          pointerEvents: lastScrollY < 50 ? 'none' : 'auto'
        }}
      >
        {/* Desktop & Mobile Container */}
        <div className="relative">
          {/* Main Navbar */}
          <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2.5 flex items-center gap-2 shadow-2xl shadow-slate-500/10 w-fit mx-auto">

            {/* Logo - Desktop Only */}
            <Link to="/" className="hidden md:flex flex-shrink-0 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 p-1.5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                <img
                  src={logo}
                  alt="E-CELL Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${location.pathname === item.to
                    ? 'bg-gradient-to-r from-slate-600 to-slate-700 text-white shadow-lg shadow-slate-500/20'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-full text-white hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {isOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 mt-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-slate-500/10 animate-in slide-in-from-top-2 duration-300">
              <div className="p-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300 ${location.pathname === item.to
                      ? 'bg-gradient-to-r from-slate-600 to-slate-700 text-white shadow-lg shadow-slate-500/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}