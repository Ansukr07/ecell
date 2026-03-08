import React, { useEffect } from 'react';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';

// Use the group photo as requested
import teamImage from './assets/team/1team.jpg';

const TeamPage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f4f4] relative overflow-hidden font-sans text-black selection:bg-[#ff3b1f] selection:text-white pb-20">
      
      {/* Subtle Grain overlay */}
      <div 
        className="pointer-events-none fixed inset-0 opacity-[0.035] mix-blend-multiply z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Container bounds */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 w-full min-h-screen flex flex-col justify-between">
        
        {/* Navigation removed as requested */}

        {/* Hero Section */}
        <main className="w-full flex flex-col items-center justify-start mt-12 md:mt-24 lg:mt-32 mb-40 md:mb-56 px-4">
          
          <div className="relative w-full text-center flex flex-col items-center">
            {/* Headline - Sits normally in flow */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-0 w-full select-none tracking-tighter"
            >
               <span 
                  className="text-[17vw] sm:text-[15vw] md:text-[140px] lg:text-[180px] xl:text-[220px] font-black uppercase text-[#ff3b1f] leading-[0.8] whitespace-nowrap block"
                  style={{ fontFamily: "'Inter', 'Nhass', system-ui, sans-serif", fontWeight: 900 }}
               >
                 THE TEAM
               </span>
            </motion.h1>

            {/* Group Photo - Positioned ABSOLUTELY over the text */}
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="absolute z-10 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] max-w-[1400px] left-1/2 transform -translate-x-1/2 pointer-events-none mt-[8vw] sm:mt-[6vw] md:mt-[60px] lg:mt-[80px]"
            >
              <img 
                src={teamImage} 
                alt="Studio DSK Team" 
                className="w-full h-auto object-contain filter grayscale contrast-125 drop-shadow-2xl"
              />
            </motion.div>
          </div>
          
        </main>

      </div>
    </div>
  );
};

export default TeamPage;