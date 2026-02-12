import { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './Pages/Home';
import Navbar from './components/Navbar/Navbar';
import Alumni from './Pages/Alumni';
import Gallery from './Pages/Gallery';
import Codered from './components/Events/Codered';
import Advert from './components/Events/Advert1';
import Spl from './components/Events/Spl';
import CaseCrackers from './components/Events/CaseCrackers';
import Chitting from './components/Events/Chitting';
import PanelDiscussion from './components/Events/PanelDisscussion';
import Ripoff from './components/Events/Ripoff';
import Team from './Pages/Team';
import Preloader from './components/Preloader/Preloader';
import WordOfTheDay from './Pages/WordOfTheDay.jsx';
import WordAdmin from './Pages/WordAdmin.jsx';
import { WordProvider } from './context/WordContext';
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
      <WordProvider>
        <Router>
          <Navbar /> {/* Now inside Router */}
          <div className="relative pt-0"> {/* Padding so content isn't hidden behind navbar */}
            <AnimatePresence mode="wait">
              {loading ? (
                <Preloader key="preloader" onComplete={handlePreloaderComplete} />
              ) : (
                <motion.div
                  key="content"
                  initial={{ scale: 0.98, opacity: 0, filter: 'blur(10px)' }}
                  animate={{ scale: showContent ? 1 : 0.98, opacity: showContent ? 1 : 0, filter: showContent ? 'blur(0px)' : 'blur(10px)' }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="min-h-screen"
                >
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/word-of-the-day" element={<WordOfTheDay />} />
                    <Route path="/admin/word-of-the-day" element={<WordAdmin />} />
                    <Route path="/events/codered25" element={<Codered />} />
                    <Route path="/events/advert10" element={<Advert />} />
                    <Route path="/events/spl" element={<Spl />} />
                    <Route path="/events/casecrackers" element={<CaseCrackers />} />
                    <Route path="/events/chitting" element={<Chitting />} />
                    <Route path="/events/paneldiscussion" element={<PanelDiscussion />} />
                    <Route path="/events/ripoff" element={<Ripoff />} />
                    <Route path="/alumni" element={<Alumni />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/gallery" element={<Gallery />} />
                  </Routes>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Router>
      </WordProvider>
    </PreloaderContext.Provider>
  );
}

export default App;
