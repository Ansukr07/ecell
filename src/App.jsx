import { useState, useEffect, createContext, useRef, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Preloader from './components/Preloader/Preloader';
import { WordProvider } from './context/WordContext';
import './App.css';

const Home = lazy(() => import('./Pages/Home'));
const Alumni = lazy(() => import('./Pages/Alumni'));
const Gallery = lazy(() => import('./Pages/Gallery'));
const Codered = lazy(() => import('./components/Events/Codered'));
const Advert = lazy(() => import('./components/Events/Advert1'));
const Spl = lazy(() => import('./components/Events/Spl'));
const CaseCrackers = lazy(() => import('./components/Events/CaseCrackers'));
const Chitting = lazy(() => import('./components/Events/Chitting'));
const PanelDiscussion = lazy(() => import('./components/Events/PanelDisscussion'));
const Ripoff = lazy(() => import('./components/Events/Ripoff'));
const Team = lazy(() => import('./Pages/Team'));
const WordOfTheDay = lazy(() => import('./Pages/WordOfTheDay.jsx'));
const WordDetailPage = lazy(() => import('./Pages/WordDetailPage.jsx'));
const WordAdmin = lazy(() => import('./Pages/WordAdmin.jsx'));

export const PreloaderContext = createContext();

// NavigationWatcher: Component that listens for route changes
const NavigationWatcher = ({ setLoading, setShowContent }) => {
  const location = useLocation();
  const prevPath = useRef(location.pathname);

  useEffect(() => {
    // Only trigger if path actually changed and it's not the initial mount
    // And if it's a desktop view (optional, but requested "in desktop view")
    if (prevPath.current !== location.pathname) {
      if (window.innerWidth > 768) {
        setLoading(true);
        setShowContent(false);
      }
      prevPath.current = location.pathname;
    }
  }, [location, setLoading, setShowContent]);

  return null;
};

function App() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const hasSeenPreloader = sessionStorage.getItem('preloaderShown');
  const [loading, setLoading] = useState(!hasSeenPreloader);
  const [showContent, setShowContent] = useState(!!hasSeenPreloader);

  const handlePreloaderComplete = () => {
    sessionStorage.setItem('preloaderShown', 'true');
    setDisplayLocation(location); // Sync the displayed route ONLY after preloader is done
    setLoading(false);
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <PreloaderContext.Provider value={{ loading, setLoading }}>
      <WordProvider>
        {/* We move Router to wrap everything including useLocation usage */}
        <NavigationWatcher setLoading={setLoading} setShowContent={setShowContent} />
        <Navbar />
        <div className="relative pt-0">
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
                <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-10 h-10 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div></div>}>
                  <Routes location={displayLocation}>
                    <Route path="/" element={<Home />} />
                    <Route path="/word-of-the-day" element={<WordOfTheDay />} />
                    <Route path="/word-of-the-day/:id" element={<WordDetailPage />} />
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
                </Suspense>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </WordProvider>
    </PreloaderContext.Provider>
  );
}

// We need to move Router out of App to use useLocation inside App
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
