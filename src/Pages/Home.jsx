import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Events from '../components/Events/Events';
import Footer from '../components/Footer/Footer';
import { IdeaSectionHeader } from '../components/lamp-demo';


const Home = () => {
  const location = useLocation();
  const [isLightMode, setIsLightMode] = useState(true);

  useEffect(() => {
    // Check for hash on mount or route change (e.g. #footer or #events)
    if (location.hash) {
      const targetId = location.hash.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          const topPosition = element.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: topPosition, behavior: 'smooth' });
        }, 500); // Wait for preloader/content transition
      }
    }

    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);

        if (element) {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      anchorLinks.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, [location.hash]);

  const handleThemeToggle = (event) => {
    const isKeyboardTrigger = event?.clientX === 0 && event?.clientY === 0;
    const fallbackX = window.innerWidth - 28;
    const fallbackY = window.innerHeight - 28;
    const clickX = isKeyboardTrigger ? fallbackX : event.clientX;
    const clickY = isKeyboardTrigger ? fallbackY : event.clientY;

    document.documentElement.style.setProperty('--theme-toggle-x', `${clickX}px`);
    document.documentElement.style.setProperty('--theme-toggle-y', `${clickY}px`);

    if (typeof document.startViewTransition !== 'function') {
      setIsLightMode((prev) => !prev);
      return;
    }

    document.startViewTransition(() => {
      setIsLightMode((prev) => !prev);
    });
  };

  return (
    <>
      <div className={`home-page ${isLightMode ? 'light-theme' : ''}`}>
        <Hero />
        <About />
        <Events />
        <IdeaSectionHeader />
        <Footer />
      </div>

      {/* Theme Toggle Button */}
      <button
        type="button"
        role="switch"
        aria-checked={isLightMode}
        aria-label={isLightMode ? 'Switch to dark mode' : 'Switch to light mode'}
        title={isLightMode ? 'Switch to dark mode' : 'Switch to light mode'}
        onClick={handleThemeToggle}
        className={`theme-toggle preserve-color ${isLightMode ? 'theme-toggle--light' : 'theme-toggle--dark'}`}
      >
        {isLightMode ? <Moon size={22} /> : <Sun size={22} />}
      </button>
    </>
  );

};

export default Home;