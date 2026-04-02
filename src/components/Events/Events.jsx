import React, { useState, useEffect } from 'react';
import { Search, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ECellEventsScroll = () => {
  const [showFlagships, setShowFlagships] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Sync scroll on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Restored Organization E-Cell Original Payload
  const events = [
    { name: "CODERED'25", displayName: "CODERED'25", description: "The ultimate coding showdown and 24-hour hackathon.", date: "01 \u2014 05.12.2025", location: "@BMSIT Campus", tags: ["#Hackathon", "#Coding", "#Tech"], imgSeed: "12", isFlagship: true },
    { name: "ADVERT1.0", displayName: "ADVERT 1.0", description: "Marketing and strategy competition exploring real-world campaigns.", date: "04.06.2025", location: "@BMSIT Seminar Hall", tags: ["#Marketing", "#Ads", "#Strategy"], imgSeed: "28", isFlagship: false },
    { name: "SPL", displayName: "SPL", description: "Premier sports league tournament fostering teamwork and competition.", date: "08.05.2025", location: "@BMSIT Ground", tags: ["#Sports", "#League", "#Network"], imgSeed: "43", isFlagship: true },
    { name: "CASE CRACKERS", displayName: "CASE CRACKERS", description: "Interactive workshops exploring corporate innovation setups.", date: "30.04.2025", location: "@BMSIT Seminar Hall", tags: ["#Business", "#CaseStudy"], imgSeed: "50", isFlagship: false },
    { name: "CHITTING", displayName: "CHITTING", description: "Open debate surrounding municipal technical upgrades.", date: "15.08.2025", location: "@Campus", tags: ["#Debate", "#Discussion"], imgSeed: "66", isFlagship: false },
    { name: "PANEL DISCUSSION", displayName: "PANEL DISCUSSION", description: "Panel of local founders discussing ecosystem challenges.", date: "22.10.2025", location: "@Main Auditorium", tags: ["#Talks", "#Founders"], imgSeed: "78", isFlagship: false },
    { name: "RIP OFF", displayName: "RIP OFF", description: "Ideation and pitch competition for early prototypes.", date: "10.12.2025", location: "@Creative Lab", tags: ["#Ideation", "#Startup"], imgSeed: "85", isFlagship: false }
  ];

  const filteredEvents = events.filter(e => 
    (showFlagships ? e.isFlagship : true) && 
    (e.displayName.toLowerCase().includes(searchQuery.toLowerCase()) || 
     e.description.toLowerCase().includes(searchQuery.toLowerCase()) || 
     e.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  const handleEventClick = (event) => {
    const componentPath = `/events/${event.name.toLowerCase().replace(/[^a-z0-9]/g, '')}`;
    window.open(componentPath, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-[#e2e2e2] w-full pb-20 pt-16 px-4 md:px-8 xl:px-12" style={{ fontFamily: 'Inter, sans-serif' }} id="events">

      {/* Massive Header & Search */}
      <div className="w-full flex flex-col">
        <h1
          className="text-white tracking-tighter leading-none mb-4 font-medium text-left"
          style={{ fontSize: '166.4px', letterSpacing: '-0.04em' }}
        >
          Events
        </h1>

        {/* Search Bar - Flush layout mirroring screenshot border styles */}
        <div className="w-full border border-[#222] bg-transparent flex items-center p-3 transition-colors duration-300 focus-within:border-white focus-within:ring-0">
          <Search className="text-[#444] w-10 h-10 ml-2 mr-4" strokeWidth={1.5} />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent border-none outline-none text-4xl text-white placeholder-[#333] font-normal tracking-tight"
          />
        </div>
      </div>

      {/* Main Layout 2 Columns */}
      <div className="w-full flex flex-col lg:flex-row gap-4 gap-y-8 mt-4 items-start">

        {/* Left Column - Flagships Toggle */}
        <div className="w-full lg:w-[280px] flex-shrink-0">
          <div className="bg-[#4d4d4d] p-4 px-5 flex items-center justify-between cursor-pointer" onClick={() => setShowFlagships(!showFlagships)}>
            <span className="text-sm font-medium text-white tracking-tight">Flagship Events</span>

            {/* iOS-Style Toggle Switch */}
            <div className={`w-10 h-5 rounded-full relative transition-colors duration-300 ease-in-out ${showFlagships ? 'bg-[#999]' : 'bg-[#777]'}`}>
              <div className={`w-[16px] h-[16px] rounded-full bg-white shadow-sm absolute top-[2px] transition-transform duration-300 ease-in-out ${showFlagships ? 'left-[22px]' : 'left-0.5'}`} />
            </div>
          </div>
        </div>

        {/* Right Column - Event Cards */}
        <div className="w-full flex-1 flex flex-col space-y-4">
          {filteredEvents.length === 0 ? (
            <div className="p-8 text-[#888] font-light text-xl border border-[#333] tracking-tight">No events found containing "{searchQuery}".</div>
          ) : filteredEvents.map((event, idx) => (
            <div
              key={idx}
              onClick={() => handleEventClick(event)}
              className="group flex flex-col sm:flex-row w-full sm:w-[1125px] cursor-pointer bg-[#292929] hover:bg-[#656565] transition-colors duration-300 overflow-hidden relative"
            >
              {/* Image Block: Absolute Dimensions 256x256 */}
              <div className="w-[256px] h-[256px] flex-shrink-0 bg-black overflow-hidden relative hidden sm:block">
                {/* Dynamically seeded image replacement to ensure diverse block visuals */}
                <img src={`https://picsum.photos/id/${event.imgSeed}/256/256`} alt={event.name} className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-screen opacity-90 group-hover:grayscale-0 transition-all duration-700" />
              </div>

              {/* Content Area: Explicit 869x256 size constraints as requested */}
              <div className="p-5 px-6 flex flex-col justify-between w-full sm:w-[869px] h-[256px]">

                {/* Top Metadata Row */}
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-row items-center gap-3 text-[13px] tracking-tight">
                    <span className="border border-white text-white px-2 py-[2px]">{event.date}</span>
                    <span className="text-white ml-1">{event.location}</span>
                  </div>

                  {/* Right Tags */}
                  <div className="flex flex-row gap-2 text-[13px] text-[#b48cff] tracking-tight">
                    {event.tags.map((tag, tIdx) => (
                      <span key={tIdx}>{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Event Description & Title Bottom Anchored */}
                <div className="mt-auto mb-2 relative flex flex-col items-start text-left w-full">
                  <h3 className="text-[36px] font-normal tracking-tight text-white mb-0 leading-tight text-left">
                    {event.displayName}
                  </h3>
                  <p className="text-[#888] text-[15px] font-normal tracking-tight max-w-2xl mt-1 text-left">
                    {event.description}
                  </p>
                </div>
              </div>

              {/* Diagonal Arrow UI Icon */}
              <div className="absolute right-4 bottom-4 md:right-8 md:bottom-8 text-white opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-500">
                <ArrowUpRight strokeWidth={1} className="w-12 h-12 md:w-16 md:h-16 lg:w-[70px] lg:h-[70px]" />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ECellEventsScroll;