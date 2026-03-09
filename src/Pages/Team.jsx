import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import teamData from './teamData.json';

// Group photo for the hero section
import teamImage from './assets/team/1team.jpg';

// Dynamically import all team member images via Vite glob
const imageModules = import.meta.glob('./assets/team/*.{jpg,jpeg,png,JPG,HEIF}', {
  eager: true,
  query: '?url',
  import: 'default',
});

/* ─────────────────────────────────────────
   TEAM MEMBER CARD (UNBOXED BORDERLESS STYLE)
───────────────────────────────────────── */
const TeamMemberCard = ({ member }) => {
  const imageSrc = imageModules[member.image] || member.image;

  // Best effort to split name onto two lines per the reference image stylistic preference
  const nameParts = member.name.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

  return (
    <div className="flex flex-col group cursor-pointer w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[6px]">

      {/* Image box: Flush, borderless, matching 4:5 aspect ratio with red reveal hover */}
      <div className="w-full aspect-[4/5] bg-[#0a0000] overflow-hidden relative mb-4 shadow-sm group-hover:shadow-xl transition-shadow duration-500">

        {/* Base: greyscale image that turns to original color on hover */}
        <img
          src={imageSrc}
          alt={member.name}
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-85 contrast-115 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
        />

        {/* Subdued shadow overlay to slightly darken the image on hover if desired */}
        <div
          className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"
        />
      </div>

      {/* Unboxed Metadata: Large Name, Tiny Position far below */}
      <div className="flex flex-col w-full text-left mt-2">
        {/* Massive 2-line name using Robit font */}
        <h3
          className="text-[#e2e2e2] text-2xl sm:text-3xl lg:text-3xl xl:text-4xl tracking-wide leading-[1.1] mb-4 group-hover:text-[rgb(215,2,90)] transition-colors duration-300"
          style={{ fontFamily: "'Robit', sans-serif" }}
        >
          <span className="block">{firstName}</span>
          {lastName && <span className="block">{lastName}</span>}
        </h3>

        {/* Tiny uppercase monospace-style position far down */}
        <p
          className="text-gray-400 font-medium text-[0.7rem] sm:text-[0.75rem] uppercase tracking-[0.2em] leading-relaxed"
          style={{ fontFamily: "'SuisseIntl', monospace, sans-serif" }}
        >
          {member.position}
        </p>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────
   TEAM SECTION GROUP
───────────────────────────────────────── */
const TeamSectionGroup = ({ title, members, isLast }) => {
  if (!members || members.length === 0) return null;
  return (
    <div className={`${isLast ? 'mb-0' : 'mb-32 lg:mb-34'} w-full`}>
      <h2
        className="text-white text-4xl md:text-6xl lg:text-7xl font-bold uppercase mb-16 tracking-tighter"
        style={{ fontFamily: "'Nhass', sans-serif" }}
      >
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-16 lg:gap-x-10 lg:gap-y-20">
        {members.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <TeamMemberCard member={member} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────
   MAIN TEAM PAGE
───────────────────────────────────────── */
const TeamPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // The team roster is now explicitly structured in teamData.json

  return (
    <div className="font-sans selection:bg-[#ff3b1f] selection:text-white">

      {/* ════════════ HERO SECTION (original light design) ════════════ */}
      <div className="min-h-screen bg-[#f4f4f4] relative overflow-hidden pb-20">

        {/* Grain overlay */}
        <div
          className="pointer-events-none fixed inset-0 opacity-[0.035] mix-blend-multiply z-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 w-full min-h-screen flex flex-col justify-between">

          {/* Main hero block */}
          <main className="w-full flex flex-col items-center justify-start mt-12 md:mt-24 lg:mt-32 mb-40 md:mb-56 px-4">
            <div className="relative w-full text-center flex flex-col items-center">

              {/* THE TEAM headline — sits behind image */}
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

              {/* Group photo — absolutely positioned OVER the text */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="absolute z-10 w-[100%] sm:w-[98%] md:w-[95%] lg:w-[85%] max-w-[1400px] left-1/2 transform -translate-x-1/2 pointer-events-none mt-[8vw] sm:mt-[6vw] md:mt-[60px] lg:mt-[80px]"
              >
                <img
                  src={teamImage}
                  alt="E-Cell BMSIT Team"
                  className="w-full h-auto object-contain filter grayscale contrast-125 drop-shadow-2xl"
                />
              </motion.div>
            </div>
          </main>

        </div>
      </div>

      {/* ════════════ TEAM GRID SECTION (dark, interactive) ════════════ */}
      <div className="bg-black relative overflow-hidden pb-32">

        {/* Grain overlay for dark section */}
        <div
          className="pointer-events-none fixed inset-0 opacity-[0.06] mix-blend-screen z-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="max-w-[1400px] mx-auto px-2 md:px-6 relative z-10 w-full flex flex-col items-start pt-24">

          {/* 1. Leadership */}
          <TeamSectionGroup title="Leadership" members={teamData.leadership} />

          {/* 2. Tech Team */}
          <TeamSectionGroup title="Tech Team" members={teamData.tech_team} />

          {/* 3. Design Team */}
          <TeamSectionGroup title="Design Team" members={teamData.design_team} />

          {/* 4. Media & Marketing */}
          <TeamSectionGroup title="Media & Marketing" members={teamData.media_marketing} />

          {/* 5. Events & Ops */}
          <TeamSectionGroup title="Events & Ops" members={teamData.events_ops} />

          {/* 6. Corporate Relations */}
          <TeamSectionGroup title="Corporate Relations" members={teamData.corporate_relations} />

          {/* 7. Content Team */}
          <TeamSectionGroup title="Content Team" members={teamData.content_team} isLast />

        </div>
      </div>

    </div>
  );
};

export default TeamPage;