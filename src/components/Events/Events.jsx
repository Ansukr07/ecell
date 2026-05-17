import React, { useState, useEffect } from "react";
import { Search, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import image18 from "../../assets/image18.webp";
import s3 from "../../assets/s3.jpg";
import e9 from "../../assets/e9.jpg";
import p1 from "../../assets/p1.jpg";
import image2 from "../../assets/image2.jpg";

const ECellEventsScroll = () => {
  const [showFlagships, setShowFlagships] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Sync scroll on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Restored Organization E-Cell Original Payload
  const events = [
    {
      name: "Code Red 3.0",
      displayName: "Code Red 3.0",
      description: "Code Red 3.0 is E-Cell’s flagship 24-hour national-level hackathon, bringing together participants from across the country. Teams build innovative solutions to real-world problems in a fast-paced environment featuring industry mentorship, exciting challenges, and huge cash prizes.",
      image: image18,
      isFlagship: true,
      slug: "codered25"
    },
    {
      name: "SPL 3.0",
      displayName: "SPL 3.0",
      description: "Startup Premier League (SPL) is an inter-college business strategy event featuring startup quizzes, IPL-style auctions, business simulations, and strategy pitching. The event tests creativity, teamwork, and decision-making in a fun and competitive environment.",
      image: s3,
      isFlagship: true,
      slug: "spl"
    },
    {
      name: "PANEL DISCUSSION",
      displayName: "PANEL DISCUSSION",
      description: "“Next Compass: Navigating the New Universe” was a fun and interactive panel discussion where seniors shared insights on academics, careers, networking, and college life. Through engaging conversations and Q&A sessions, students gained practical advice, motivation, and valuable “senior secrets” for navigating college life.",
      image: p1,
      isFlagship: false,
      slug: "paneldiscussion"
    },
    {
      name: "EMPIRE X",
      displayName: "EMPIRE X",
      description: "EmpireX was a Monopoly-style business simulation event where participants built corporate empires through trading, negotiations, and market-based challenges. Teams competed to grow their net worth, survive market twists, and pitch innovative business models using the assets they acquired.",
      image: e9,
      isFlagship: false,
      slug: "empirex"
    },
  ];

  const filteredEvents = events.filter(
    (e) =>
      (showFlagships ? e.isFlagship : true) &&
      (e.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div
      className="min-h-screen bg-black text-[#e2e2e2] w-full pb-20 pt-6 md:pt-12 px-4 md:px-8 xl:px-12 border-t-0 -mt-[1px] md:mt-0"
      style={{ fontFamily: "Inter, sans-serif" }}
      id="events"
    >
      {/* Massive Header & Search */}
      <div className="w-full flex flex-col">
        <style>
          {`
            .events-main-title { font-size: 70px; }
            @media (min-width: 640px) { .events-main-title { font-size: 100px; } }
            @media (min-width: 768px) { .events-main-title { font-size: 130px; } }
            @media (min-width: 1024px) { .events-main-title { font-size: 166.4px; } }
          `}
        </style>
        <h1
          className="events-main-title text-white tracking-tighter leading-none mb-4 font-medium text-left"
          style={{ letterSpacing: "-0.04em" }}
        >
          Events
        </h1>

        {/* Search Bar - Flush layout mirroring screenshot border styles */}
        <div className="w-full border border-[#222] bg-transparent flex items-center p-3 transition-colors duration-300 focus-within:border-white focus-within:ring-0">
          <Search
            className="text-[#444] w-10 h-10 ml-2 mr-4"
            strokeWidth={1.5}
          />
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
        <div className="w-full lg:w-[280px] flex-shrink-0 lg:sticky lg:top-32 self-start z-10">
          <div
            className="flagship-box bg-[#4d4d4d] p-4 px-5 flex items-center justify-between cursor-pointer shadow-lg"
            onClick={() => setShowFlagships(!showFlagships)}
          >
            <span className="text-sm font-medium text-white tracking-tight">
              Flagship Events
            </span>

            {/* iOS-Style Toggle Switch */}
            <div
              className={`flagship-toggle-track w-10 h-5 rounded-full relative transition-colors duration-300 ease-in-out ${showFlagships ? "bg-[#999]" : "bg-[#777]"}`}
            >
              <div
                className={`flagship-toggle-thumb w-[16px] h-[16px] rounded-full bg-white shadow-sm absolute top-[2px] transition-transform duration-300 ease-in-out ${showFlagships ? "left-[22px]" : "left-0.5"}`}
              />
            </div>
          </div>
        </div>

        {/* Right Column - Event Cards */}
        <div className="w-full flex-1 flex flex-col space-y-4">
          {filteredEvents.length === 0 ? (
            <div className="p-8 text-[#888] font-light text-xl border border-[#333] tracking-tight">
              No events found containing "{searchQuery}".
            </div>
          ) : (
            filteredEvents.map((event, idx) => (
              <div
                key={idx}
                onClick={() => navigate(`/events/${event.slug}`)}
                className="event-card flex flex-col sm:flex-row w-full sm:w-[1125px] bg-[#292929] overflow-hidden relative cursor-pointer hover:bg-[#333] transition-colors"
              >
                {/* Image Block: Absolute Dimensions 256x256 */}
                <div className="w-[256px] h-[256px] flex-shrink-0 bg-black overflow-hidden relative hidden sm:block">
                  {/* Dynamically seeded image replacement to ensure diverse block visuals */}
                  <img
                    src={event.image}
                    alt={event.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
                      event.slug === 'codered25' || event.slug === 'paneldiscussion'
                        ? 'scale-[1.8] origin-top hover:scale-[1.9]'
                        : 'hover:scale-105'
                    }`}
                  />
                </div>

                {/* Content Area: Explicit 869x256 size constraints as requested */}
                <div className="p-5 px-6 flex flex-col justify-end w-full sm:w-[869px] h-[256px]">

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
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ECellEventsScroll;
