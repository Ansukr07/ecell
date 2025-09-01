import { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './Pages/Home';
import Navbar from './components/Navbar/Navbar';
import Alumni from './Pages/Alumni';
import Gallery from './Pages/Gallery';
import Codered from './components/Events/Codered';
import Team from './Pages/Team';
import Preloader from './components/Preloader/Preloader';
import './App.css';

export const PreloaderContext = createContext();

function App() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setShowContent(true), 100);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handlePreloaderComplete = () => {
    setLoading(false);
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <PreloaderContext.Provider value={{ loading, setLoading }}>
      <div className="relative pt-0">
        <AnimatePresence mode="wait">
          {loading ? (
            <Preloader key="preloader" onComplete={handlePreloaderComplete} />
          ) : (
            <motion.div
              key="content"
              initial={{ scale: 0.98, opacity: 0, filter: 'blur(10px)' }}
              animate={{ 
                scale: showContent ? 1 : 0.98, 
                opacity: showContent ? 1 : 0, 
                filter: showContent ? 'blur(0px)' : 'blur(10px)' 
              }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="min-h-screen"
            >
              <Router>
                <Navbar />  {/* ✅ Navbar now inside Router */}
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/events/codered" element={<Codered />} />
                  <Route path="/alumni" element={<Alumni />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/failure story" element={<failure story />} />
                </Routes>
              </Router>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PreloaderContext.Provider>
  );
}

export default App;