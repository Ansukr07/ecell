import React, { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { PreloaderContext } from '../../App';
import logo from '../../assets/ecell.png';
import './PhoneMenu.css';

const PhoneMenu = ({ isOpen, toggleMenu, isInstantClose, setIsInstantClose }) => {
  const location = useLocation();
  const { setLoading } = useContext(PreloaderContext);

  const displayItems = [
    { label: 'Home', to: '/' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Team', to: '/team' },
    { label: 'Alumni', to: '/alumni' },
    { label: 'Word of the Day', to: '/word-of-the-day' },
    { label: 'Contact Us', to: '#footer', isScroll: true }
  ];

  const handleLinkClick = (e, item) => {
    if (item.isScroll) {
      e.preventDefault();

      if (location.pathname !== '/') {
        // Navigate to Home first
        setLoading(true);
        setIsInstantClose(true);
        toggleMenu();
        // Simple window navigation to triggers Home page mount logic
        window.location.href = '/#footer';
      } else {
        // Already on home, just scroll
        setIsInstantClose(false);
        toggleMenu();
        const footer = document.getElementById('footer');
        if (footer) {
          footer.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // Check if routing to a new page
      const isNewPage = location.pathname !== item.to;

      if (isNewPage) {
        setIsInstantClose(true);
        setLoading(true);
        toggleMenu();
      } else {
        // Same page - slow collapse
        setIsInstantClose(false);
        toggleMenu();
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="phone-menu-overlay"
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{
            duration: isInstantClose ? 0.01 : 1.0,
            ease: [0.33, 1, 0.68, 1]
          }}
        >
          <div className="menu-logo">
            <img src={logo} alt="E-Cell Logo" className="menu-logo-img" />
            <span className="menu-logo-text">E-CELL</span>
          </div>

          <div className="menu-items-container">
            {displayItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                {item.isScroll ? (
                  <a
                    href={item.to}
                    className="menu-item-link"
                    onClick={(e) => handleLinkClick(e, item)}
                  >
                    <span className="menu-item-dot" />
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.to}
                    className="menu-item-link"
                    onClick={(e) => handleLinkClick(e, item)}
                  >
                    <span className="menu-item-dot" />
                    {item.label}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PhoneMenu;
