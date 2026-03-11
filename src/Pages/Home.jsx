import { useEffect } from 'react';

import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Events from '../components/Events/Events';
import FailureStory from '../components/FailureStory/FailureStory';
import Footer from '../components/Footer/Footer';

const Home = () => {
  useEffect(() => {
    // Check for footer hash on mount (from cross-page navigation)
    if (window.location.hash === '#footer') {
      const element = document.getElementById('footer');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 1000); // Wait for preloader/content transition
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
  }, []);

  return (
    <>


      <div className="home-page">
        <Hero />
        <About />
        <Events />
        <FailureStory />
        <Footer />
      </div>
    </>
  );

};

export default Home;