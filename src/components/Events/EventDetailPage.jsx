import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from '../Footer/Footer';

/**
 * EventDetailPage Component
 * Adapted from event comp's DynamicFrameLayout for React/Vite
 * Creates a magazine-style layout with grid-based image display
 */
const EventDetailPage = ({
  title,
  titleLine2 = '',
  eventSubtitle,
  eventDetail,
  mainStatValue,
  mainStatLabel,
  statDetail,
  highlights = [],
  images = [],
  imageGrid = [], // [{id, image, title, summary}, ...]
}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Use imageGrid if provided, otherwise create a simple grid from images array
  const displayGrid = imageGrid.length > 0 
    ? imageGrid 
    : images.map((img, idx) => ({
        id: idx,
        image: img,
        title: `Image ${idx + 1}`,
        summary: `From ${title}`,
      }));

  const gridConfig = [
    // First row - 3 larger photos
    { id: 0, x: 0, y: 0, w: 4, h: 4 },
    { id: 1, x: 4, y: 0, w: 4, h: 4 },
    { id: 2, x: 8, y: 0, w: 4, h: 4 },
    // Second row - 2 larger photos
    { id: 3, x: 2, y: 4, w: 4, h: 4 },
    { id: 4, x: 6, y: 4, w: 4, h: 4 },
    // Additional rows for more images
    { id: 5, x: 0, y: 8, w: 3, h: 3 },
    { id: 6, x: 3, y: 8, w: 3, h: 3 },
    { id: 7, x: 6, y: 8, w: 3, h: 3 },
    { id: 8, x: 9, y: 8, w: 3, h: 3 },
    { id: 9, x: 3, y: 11, w: 6, h: 3 },
  ];

  const cellSize = 60; // pixels per grid cell

  const getImageStyle = (index) => {
    if (isMobile) {
      // On mobile: each image takes full width
      return {
        gridColumn: '1 / -1',
      };
    }
    // On desktop: use the grid config
    const config = gridConfig[index % gridConfig.length];
    if (!config) return {};
    return {
      gridColumn: `${config.x + 1} / span ${config.w}`,
      gridRow: `${config.y + 1} / span ${config.h}`,
    };
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex flex-col" style={{ fontFamily: 'Sora, sans-serif' }}>
      <div className="flex flex-col lg:flex-row flex-1 min-h-screen">
        {/* Sidebar */}
        <aside className="w-full lg:w-[30%] flex-shrink-0 lg:border-r border-white/10 flex flex-col p-6 lg:p-8 xl:p-10 pt-20 sm:pt-16 lg:pt-6">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold italic leading-tight text-white" style={{ fontFamily: 'Georgia, serif' }}>
              <span className="block">{title}</span>
              {titleLine2 && <span className="block">{titleLine2}</span>}
            </h1>
            <p className="mt-4 text-sm text-white/70">{eventSubtitle}</p>
            <p className="text-xs text-white/50 mt-0.5">Event Recap</p>
          </div>

          {/* Event Details Card */}
          <div className="bg-white/[0.06] border border-white/10 rounded-xl p-5 lg:p-6 flex flex-col flex-1">
            <div className="flex items-baseline justify-between gap-2 mb-4">
              <h2 className="text-lg font-bold text-white">Event details</h2>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/70 mb-4">
              <span>{eventDetail}</span>
            </div>
            <div className="mb-4">
              <p className="text-4xl font-bold text-white">{mainStatValue}</p>
              <p className="text-sm text-white/60 mt-1">{mainStatLabel}</p>
            </div>
            {statDetail && <p className="text-xs text-white/50">{statDetail}</p>}
            
            {/* Highlights */}
            {highlights.length > 0 && (
              <div className="mt-6 pt-6 border-t border-white/10">
                <h3 className="text-sm font-semibold text-white mb-3">Highlights</h3>
                <ul className="space-y-2">
                  {highlights.map((highlight, idx) => (
                    <li key={idx} className="text-xs text-white/60 flex gap-2">
                      <span className="text-white/30">•</span>
                      <span>{typeof highlight === 'string' ? highlight : highlight.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </aside>

        {/* Main Content - Gallery Grid */}
        <main className="flex-1 overflow-hidden flex flex-col w-full lg:w-[70%]">
          <div className="flex-1 overflow-auto pt-6 lg:pt-24 px-6 lg:px-8 pb-6 lg:pb-8">
            <div className="grid gap-6" style={{ 
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(12, 1fr)',
              gridAutoRows: 'auto',
              minHeight: '100%',
            }}>
              {displayGrid.map((item, idx) => (
                  <motion.div
                    key={item.id || idx}
                    style={{
                      ...getImageStyle(idx),
                      aspectRatio: '4 / 3',
                    }}
                    className="relative rounded-lg overflow-hidden bg-white/5 border border-white/10 group cursor-pointer"
                    onClick={() => setSelectedImage(item)}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-fill group-hover:brightness-110 transition-all duration-300"
                    />
                  </motion.div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Modal for selected image */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            >
              ✕
            </button>
            <div className="mt-4 text-white">
              <h3 className="text-xl font-bold">{selectedImage.title}</h3>
              <p className="text-white/70">{selectedImage.summary}</p>
            </div>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
};

export default EventDetailPage;
