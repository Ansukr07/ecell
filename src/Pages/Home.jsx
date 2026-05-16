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
  const [isLightMode, setIsLightMode] = useState(false);

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

  return (
    <>


      <div className={`home-page ${isLightMode ? 'light-theme' : ''}`}>
        <Hero />
        <About />
        <Events />
        <IdeaSectionHeader />
        <Footer />
        
        {/* Theme Toggle Button */}
        <button 
          onClick={() => setIsLightMode(!isLightMode)}
          className="fixed bottom-6 right-6 z-[999999] bg-white text-black px-4 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
          style={{ fontFamily: 'Sora, sans-serif' }}
        >
          {isLightMode ? <Moon size={20} /> : <Sun size={20} />}
          {isLightMode ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    </>
  );

};

export default Home;