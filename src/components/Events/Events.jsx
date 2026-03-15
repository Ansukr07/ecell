import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ECellEventsScroll = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);
  const itemRefs = useRef([]);
  const autoplayTimeoutRef = useRef(null);
  const navigate = useNavigate();

  const events = [
    { name: "CODERED'25", displayName: "CODERED'25" },
    { name: "ADVERT1.0", displayName: "ADVERT 1.0" },
    { name: "SPL", displayName: "SPL" },
    { name: "CASE CRACKERS", displayName: "CASE CRACKERS" },
    { name: "CHITTING", displayName: "CHITTING" },
    { name: "PANEL DISCUSSION", displayName: "PANEL DISCUSSION" },
    { name: "RIP OFF", displayName: "RIP OFF" }
  ];

  // Create extended events for smooth infinite scroll
  const extendedEvents = [...events, ...events, ...events];

  // Smooth autoplay with pause functionality
  useEffect(() => {
    if (isAutoplay && !isPaused) {
      autoplayTimeoutRef.current = setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % events.length);
      }, 4000); // Slightly longer interval for better UX
    }

    return () => {
      if (autoplayTimeoutRef.current) {
        clearTimeout(autoplayTimeoutRef.current);
      }
    };
  }, [activeIndex, isAutoplay, isPaused, events.length]);

  // Handle scroll-based active index detection - Fixed for laptop
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;

      const container = scrollContainerRef.current;
      const items = itemRefs.current;

      let closestIndex = 0;
      let minDistance = Infinity;

      items.forEach((item, index) => {
        if (!item) return;
        const itemRect = item.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        const itemCenter = itemRect.top + itemRect.height / 2;
        const containerCenter = containerRect.top + containerRect.height / 2;

        const distance = Math.abs(itemCenter - containerCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index % events.length;
        }
      });

      if (closestIndex !== activeIndex) {
        setActiveIndex(closestIndex);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [events.length, activeIndex]);

  const handleEventClick = (event, index) => {
    // Pause autoplay temporarily when user interacts
    setIsPaused(true);
    setActiveIndex(index);

    const componentPath = `/events/${event.name.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '')}`;
    window.open(componentPath, '_blank');

    // Resume autoplay after interaction
    setTimeout(() => setIsPaused(false), 3000);
  };

  const scrollToEvent = (index) => {
    setIsPaused(true);
    setActiveIndex(index);

    const targetItem = itemRefs.current[index + events.length];
    if (targetItem && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const itemRect = targetItem.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      const scrollTop = targetItem.offsetTop - container.offsetTop - (containerRect.height / 2) + (itemRect.height / 2);
      container.scrollTo({ top: scrollTop, behavior: 'smooth' });
    }

    setTimeout(() => setIsPaused(false), 5000);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const getItemStyles = (index) => {
    const actualIndex = index % events.length;
    const isActive = actualIndex === activeIndex;

    return {
      transform: isActive ? 'scale(1.02)' : 'scale(0.92)',
      opacity: isActive ? 1 : 0.6,
      filter: isActive ? 'none' : 'grayscale(40%)',
    };
  };

  // Consistent display formatting - Fixed for original style
  const formatEventName = (name) => {
    if (name === "ADVERT 1.0") return ["ADVERT", "1.0"];
    if (name === "CASE CRACKERS") return ["CASE", "CRACKERS"];
    if (name === "PANEL DISCUSSION") return ["PANEL", "DISCUSSION"];
    if (name === "RIP OFF") return ["RIP", "OFF"];
    return [name];
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative" style={{ fontFamily: 'Sora, sans-serif' }} id='events'>
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      {/* Subtle background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-transparent to-[#FD7722]/5"></div>
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#FD7722] rounded-full opacity-60"></div>
        <div className="absolute bottom-1/3 left-1/5 w-1 h-1 bg-[#FD7722] rounded-full opacity-40"></div>
      </div>

      {/* View All Events Button */}


      {/* Desktop Layout */}
      <div className="hidden lg:flex h-screen items-center">
        {/* Left Panel - Fixed Content */}
        <div className="w-[55%] flex items-center justify-center pl-20 xl:pl-24">
          <div className="text-left">
            <div className="mb-8">
              <h2 className="text-sm font-medium tracking-[0.3em] text-gray-400 mb-6 uppercase" style={{ fontFamily: 'Georgia, serif' }}>
                Check out
              </h2>
              <h3 className="text-5xl xl:text-6xl font-bold text-white leading-tight mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                E-Cell's
              </h3>
              <h3 className="text-5xl xl:text-6xl font-bold text-white leading-tight mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                Cool
              </h3>
              <h3 className="text-5xl xl:text-6xl font-bold text-white leading-tight mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                & Fun
              </h3>
              <h3 className="text-6xl xl:text-7xl font-bold text-[#FD7722] leading-tight italic" style={{ fontFamily: 'Georgia, serif' }}>
                EVENTS
              </h3>
            </div>

            {/* Active Event Display - Fixed Height for Stability */}
            <div className="mt-12">
              <div className="w-32 h-0.5 bg-gradient-to-r from-[#FD7722] to-transparent mb-8"></div>
              <div className="min-h-[8rem] flex flex-col justify-center"> {/* Fixed height container */}
                <h1 className="text-7xl xl:text-8xl font-black text-[#FD7722] leading-none transition-all duration-500" style={{ fontFamily: 'Sora, sans-serif' }}>
                  {formatEventName(events[activeIndex].displayName).map((word, i) => (
                    <div key={i} className="leading-none">{word}</div>
                  ))}
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Scrollable Events */}
        <div className="w-[45%] h-screen flex items-center justify-center relative">
          {/* Background Text */}


          <div
            ref={scrollContainerRef}
            className="h-[85%] overflow-y-auto overflow-x-hidden scrollbar-hide w-full relative z-10"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <div className="flex flex-col items-center justify-center py-8 space-y-8">
              {extendedEvents.map((event, index) => (
                <div
                  key={`${event.name}-${index}`}
                  ref={(el) => itemRefs.current[index] = el}
                  className="text-center cursor-pointer transition-all duration-700 ease-out group relative"
                  style={getItemStyles(index)}
                  onClick={() => handleEventClick(event, index % events.length)}
                >
                  <h3 className="text-3xl xl:text-4xl font-bold text-white hover:text-[#FD7722] transition-all duration-500 group-hover:scale-110" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {event.displayName}
                  </h3>
                  <div className="mt-4 h-0.5 w-0 bg-[#FD7722] mx-auto group-hover:w-20 transition-all duration-500"></div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 -m-6 rounded-lg border border-transparent group-hover:border-[#FD7722]/20 group-hover:bg-[#FD7722]/5 transition-all duration-500 -z-10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden h-screen flex flex-col">
        {/* Header */}
        <div className="flex-shrink-0 pt-8 pb-4 px-4">
          <div className="text-center">
            <h2 className="text-xs font-medium tracking-[0.2em] text-gray-400 mb-4 uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
              Check out our
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#FD7722] italic mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Very Cool EVENTS
            </h3>
          </div>
        </div>

        {/* Active Event Display - Fixed Height */}
        <div className="flex-shrink-0 py-6 px-4">
          <div className="text-center">
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#FD7722] to-transparent mx-auto mb-4"></div>
            <div className="min-h-[6rem] flex flex-col justify-center"> {/* Fixed height container */}
              <h1 className="text-5xl md:text-6xl font-black text-white leading-tight transition-all duration-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                {formatEventName(events[activeIndex].displayName).map((word, i) => (
                  <div key={i}>{word}</div>
                ))}
              </h1>
            </div>
          </div>
        </div>

        {/* Scrollable Events */}
        <div className="flex-1 min-h-0">
          <div
            ref={scrollContainerRef}
            className="h-full overflow-y-auto overflow-x-hidden scrollbar-hide px-4"
            onTouchStart={handleMouseEnter}
            onTouchEnd={handleMouseLeave}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <div className="flex flex-col items-center py-4 space-y-6">
              {extendedEvents.map((event, index) => (
                <div
                  key={`${event.name}-${index}`}
                  ref={(el) => itemRefs.current[index] = el}
                  className="text-center cursor-pointer transition-all duration-700 ease-out group relative w-full max-w-xs"
                  style={getItemStyles(index)}
                  onClick={() => handleEventClick(event, index % events.length)}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white hover:text-[#FD7722] transition-all duration-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {event.displayName}
                  </h3>
                  <div className="mt-3 h-0.5 w-0 bg-[#FD7722] mx-auto group-hover:w-16 transition-all duration-500"></div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 -m-4 rounded-lg border border-transparent group-hover:border-[#FD7722]/20 group-hover:bg-[#FD7722]/5 transition-all duration-500 -z-10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={() => setIsAutoplay(!isAutoplay)}
        className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors duration-300 z-20"
      >
        <div className="flex items-center space-x-2 text-xs font-medium">
          <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${isAutoplay ? 'bg-[#FD7722]' : 'bg-red-500'
            }`}></div>
          <span style={{ fontFamily: 'Inter, sans-serif' }}>{isAutoplay ? 'AUTO' : 'MANUAL'}</span>
        </div>
      </button>

      {/* Gradient Overlays - More subtle */}
      <div className="absolute top-0 right-0 lg:w-[45%] w-full h-16 bg-gradient-to-b from-black to-transparent pointer-events-none z-10"></div>
      <div className="absolute bottom-0 right-0 lg:w-[45%] w-full h-16 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ECellEventsScroll;