import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Instagram, Linkedin, Globe, MessageCircle } from "lucide-react";
import teamImage from "./assets/recap/image.png";
import coderedImage from "./assets/recap/codered.png";
import websiteImage from "./assets/recap/website.png";
import VintageImage from "../components/VintageImage";
import { StaggeredGrid } from "../components/ui/staggered-grid";
import { SmoothScroll } from "../components/ui/smooth-scroll";
import maxsonImg from "./assets/team/maxson.JPG";
import mohitImg from "./assets/team/mohit.jpeg";
import nishithaImg from "./assets/team/nishitha.jpeg";
import atulImg from "./assets/team/atul.jpg";
import tirthImg from "./assets/team/tirth.jpg";
import akhileshImg from "./assets/team/akhilesh.jpeg";
import gaganjithImg from "./assets/team/gaganjith.jpg";
import shriyaImg from "./assets/team/shriya.jpg";
import img1 from "../assets/image1.jpg";
import img3 from "../assets/image3.jpg";
import img5 from "../assets/image5.jpg";
import img7 from "../assets/image7.jpg";
import img9 from "../assets/image9.jpg";
import img11 from "../assets/image11.jpg";
import img13 from "../assets/image13.jpg";
import img15 from "../assets/image15.jpg";
import img17 from "../assets/image17.jpg";
import img19 from "../assets/image19.jpg";
import img21 from "../assets/image21.jpg";
import img23 from "../assets/image23.jpg";
import img25 from "../assets/image25.jpg";
import img27 from "../assets/image27.jpg";
import img29 from "../assets/image29.jpg";
import img31 from "../assets/image31.jpg";
import img33 from "../assets/image33.jpg";
import img35 from "../assets/image35.jpg";

const Recap2025 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const images = [
    img1, img3, img5, img7, img9, img11,
    img13, img15, img17, img19, img21, img23,
    img25, img27, img29, img31, img33, img35,
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="min-h-screen bg-[#e8dfd1] text-[#2d2b27] font-serif selection:bg-[#2d2b27] selection:text-[#e8dfd1] relative overflow-x-hidden pr-12 md:pr-16"
      style={{
        backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png'), linear-gradient(180deg, #e4d7c5 0%, #ede6db 50%, #e4d7c5 100%)",
        backgroundBlendMode: "overlay, normal"
      }}
    >
      {/* Vignette & Scanline Overlay - Fixed to viewport */}
      <div className="pointer-events-none fixed inset-0 z-50 shadow-[inset_0_0_120px_rgba(0,0,0,0.4)] md:shadow-[inset_0_0_200px_rgba(0,0,0,0.5)] mix-blend-multiply"></div>
      <div
        className="pointer-events-none fixed inset-0 z-40 opacity-[0.05]"
        style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)" }}
      ></div>

      {/* Right Sidebar Menu */}
      <div className="fixed top-0 right-0 h-screen w-12 md:w-16 bg-black z-[100] flex flex-col items-center py-6 text-white font-sans border-l border-zinc-800">

        {/* Menu Icon - Absolute Top */}
        <div className="absolute top-6 w-full flex justify-center">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex flex-col gap-1.5 p-2 bg-transparent border-none outline-none focus:outline-none focus:ring-0 active:outline-none hover:opacity-70 transition-opacity "
            style={{ background: 'none', outline: 'none' }}
          >
            <div className="w-5 md:w-6 h-[2px] bg-white"></div>
            <div className="w-5 md:w-6 h-[2px] bg-white"></div>
            <div className="w-5 md:w-6 h-[2px] bg-white"></div>
          </button>
        </div>

        {/* Vertical Text - Centered */}
        <div className="flex-1 flex justify-center items-center">
          <div
            className="whitespace-nowrap flex items-center gap-3 text-xs md:text-sm tracking-[0.2em] font-medium"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            <span className="text-white">E-CELL BMSIT</span>
            <span className="w-1 h-1 bg-zinc-500 rounded-full"></span>
            <span className="text-white">2025 RECAP</span>

          </div>
        </div>

        {/* Page Numbers - Absolute Bottom */}

      </div>

      {/* Full Screen Overlay Menu — Newspaper Style */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 z-[200] flex"
            style={{ backdropFilter: 'blur(14px)', background: 'rgba(232, 223, 209, 0.97)' }}
          >
            {/* Left column — Masthead & Edition info */}
            <div className="hidden md:flex flex-col justify-between w-64 border-r border-[#2d2b27]/15 px-8 py-10 text-[#2d2b27]">
              <div>
                <div className="text-xs tracking-[0.25em] uppercase font-sans text-[#2d2b27]/50 mb-4">Est. 2022</div>
                <div className="text-3xl font-serif font-black tracking-tighter leading-none">E-CELL BMSIT<br />TIMES</div>
                <div className="w-8 h-[2px] bg-[#2d2b27] mt-4 mb-6" />
                <div className="text-xs font-sans uppercase tracking-widest text-[#2d2b27]/50 leading-relaxed">
                  E-Cell BMSIT<br />Annual Recap<br />2025–26
                </div>
              </div>
              <div className="text-[10px] font-sans tracking-widest text-[#2d2b27]/40 uppercase leading-loose">
                Vol. IV · No. 42<br />The Autumn Curator
              </div>
            </div>

            {/* Main nav links */}
            <div className="flex-1 flex flex-col justify-center px-10 md:px-20 relative">

              {/* Close button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-8 right-8 hover:opacity-50 bg-transparent border-none outline-none appearance-none focus:outline-none focus-visible:outline-none cursor-pointer p-2 flex flex-col gap-0 items-center justify-center"
                style={{ background: 'none', outline: 'none' }}
              >
                <div className="w-6 h-[2px] bg-[#2d2b27] rotate-45 translate-y-[1px]" />
                <div className="w-6 h-[2px] bg-[#2d2b27] -rotate-45 -translate-y-[1px]" />
              </button>

              {/* Navigation Items */}
              <nav className="space-y-0">
                {[
                  { num: '01', label: 'News Flash', action: () => { setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); } },
                  { num: '02', label: 'Events', action: () => { setIsMenuOpen(false); document.getElementById('events-section')?.scrollIntoView({ behavior: 'smooth' }); } },
                  { num: '03', label: 'Moments', action: () => { setIsMenuOpen(false); document.getElementById('gallery-section')?.scrollIntoView({ behavior: 'smooth' }); } },
                  { num: '04', label: 'Farewell', action: () => { setIsMenuOpen(false); document.getElementById('farewell-section')?.scrollIntoView({ behavior: 'smooth' }); } },
                  { num: '05', label: 'Socials', action: () => { setIsMenuOpen(false); document.getElementById('network-section')?.scrollIntoView({ behavior: 'smooth' }); } },
                ].map((item, i) => (
                  <motion.div
                    key={item.num}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.45, delay: i * 0.07, ease: [0.76, 0, 0.24, 1] }}
                  >
                    <button
                      onClick={item.action}
                      className="group w-full text-left bg-transparent border-none outline-none focus:outline-none appearance-none cursor-pointer"
                      style={{ background: 'none', outline: 'none' }}
                    >
                      <div className="border-t border-[#2d2b27]/15 py-5 flex items-baseline gap-5">
                        <span className="text-[11px] font-sans tracking-widest text-[#2d2b27]/35 w-6 shrink-0">{item.num}</span>
                        <span className="text-4xl md:text-6xl font-serif font-black tracking-tighter text-[#2d2b27] leading-none group-hover:italic group-hover:translate-x-2 transition-all duration-300">
                          {item.label}
                        </span>
                      </div>
                    </button>
                  </motion.div>
                ))}
                <div className="border-t border-[#2d2b27]/15" />
              </nav>

              {/* Back to website */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-10"
              >
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex items-center gap-3 font-sans text-xs tracking-[0.25em] uppercase text-[#2d2b27]/50 hover:text-[#2d2b27] transition-colors outline-none focus:outline-none"
                  style={{ outline: 'none' }}
                >
                  <span className="text-base">←</span> Back to Main Website
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Image - Full bleed up to sidebar */}
      <div className="relative w-full h-[70vh] md:h-[78vh] overflow-hidden">
        <div className="absolute inset-0">
          <VintageImage
            src={teamImage}
            alt="E-Cell Team"
            className="w-full h-full"
            imgClassName="object-[center_25%]"
          />
        </div>
      </div>

      {/* Rest of Content - with padding */}
      <div className="px-6 md:px-16 pb-32 max-w-screen-2xl mx-auto">
        <main className="w-full">
          {/* Massive Headline */}


          {/* Newspaper Section (EXTRA KUNST Broadsheet Layout) */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-32 mt-12 bg-[#f4f1ea] text-black font-serif border-t-4 border-b-2 border-black py-4"
          >
            {/* Masthead Header */}
            <div className="flex justify-between items-center text-xs font-sans tracking-widest uppercase mb-4 px-2">
              <span>Where Ideas Turn Into Impact</span>
              <span>2025 — 2026 Edition</span>
            </div>

            {/* Massive Masthead Title */}
            <h1 className="text-[5.5rem] sm:text-[8rem] md:text-[10rem] lg:text-[11.5rem] leading-[0.8] font-bold text-center tracking-tighter mb-6 uppercase">
              E-CELL BMSIT TIMES
            </h1>

            {/* Thick Separator */}
            <div className="border-t-4 border-b border-black py-1 mb-8"></div>

            {/* 4-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0 text-black">

              {/* Column 1 (Left) */}
              <motion.div variants={fadeUp} className="md:col-span-1 border-b md:border-b-0 md:border-r border-black p-4 md:p-6 flex flex-col">
                <div className="w-full border-b border-black mb-6">
                  <img src={coderedImage} alt="E-Cell Event" className="w-full h-auto object-cover block" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold leading-none mb-4 tracking-tight uppercase">
                  A Landmark Year of Innovation, Impact, and Growth
                </h2>
                <p className="text-sm leading-snug text-justify mb-4">
                  <span className="font-bold">E-Cell BMSIT concludes a landmark year.</span> From hosting high-energy startup competitions to building a thriving entrepreneurial ecosystem within campus, the Entrepreneurship Cell of BMSIT has wrapped up one of its most defining years yet.
                </p>
                <p className="text-sm leading-snug text-justify mb-4">
                  With record-breaking participation, impactful collaborations, and a strong focus on student-led innovation, 2025–26 stands as a milestone in the club’s journey.
                </p>

                <div className="border-t-2 border-black my-6"></div>

                <h3 className="text-2xl font-bold uppercase tracking-tight mb-3">Our Vision</h3>
                <p className="text-sm leading-snug text-justify mb-6">
                  To cultivate a culture of innovation and entrepreneurship among students, empowering them to build solutions that create real-world impact.
                </p>

                <h3 className="text-xl font-bold uppercase tracking-tight mb-3">Our Mission</h3>
                <ul className="text-sm leading-snug text-justify list-disc pl-4 space-y-2">
                  <li>To provide a platform for aspiring entrepreneurs to ideate, build, and scale.</li>
                  <li>To bridge the gap between students and the startup ecosystem.</li>
                  <li>To foster leadership, creativity, and problem-solving skills.</li>
                  <li>To enable hands-on learning through events, competitions, and real projects.</li>
                </ul>
              </motion.div>

              {/* Columns 2 & 3 (Middle) */}
              <motion.div variants={fadeUp} className="md:col-span-2 border-b md:border-b-0 md:border-r border-black flex flex-col">
                <div className="w-full border-b border-black">
                  <img src={websiteImage} alt="Website Launch" className="w-full h-auto object-cover object-top block" />
                </div>
                <div className="p-4 md:p-6 flex flex-col flex-1">
                  <h2 className="text-5xl md:text-6xl font-bold leading-[0.9] mb-8 mt-4 uppercase tracking-tighter text-center">
                    Flagship Events & Initiatives
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-snug text-justify">
                    <div>
                      <h4 className="font-bold text-lg mb-2 uppercase">CODE RED 3.0 – The Ultimate Hackathon</h4>
                      <p className="mb-8">
                        One of the biggest highlights of the year, CODE RED 3.0 brought together some of the brightest minds to solve real-world problems through innovation and technology. The event saw intense competition, creative solutions, and a vibrant display of teamwork.
                      </p>

                      <h4 className="font-bold text-lg mb-2 uppercase">Startup Premier League (SPL)</h4>
                      <p>
                        Blending the thrill of auctions with business acumen, SPL turned entrepreneurship into a strategic game. Participants bid, built, and battled it out, showcasing their understanding of startups and valuations.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 uppercase">Speaker Sessions & Workshops</h4>
                      <p className="mb-8">
                        From industry leaders to startup founders, E-Cell hosted sessions that provided students with real-world insights, practical knowledge, and inspiration to pursue entrepreneurial journeys.
                      </p>

                      <h4 className="font-bold text-lg mb-2 uppercase">Ideathons & Pitch Competitions</h4>
                      <p>
                        Students pitched innovative ideas across domains, receiving feedback from experienced judges and mentors, helping them refine and elevate their concepts.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Column 4 (Right) */}
              <motion.div variants={fadeUp} className="md:col-span-1 p-4 md:p-6 flex flex-col">
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">The People Behind the Journey</h3>
                <p className="text-sm leading-snug mb-4">
                  Behind every successful event was a team of passionate individuals who worked tirelessly to make it happen.
                </p>
                <p className="text-sm leading-snug mb-6">
                  From brainstorming ideas at midnight to executing large-scale events seamlessly, the E-Cell team demonstrated dedication, creativity, and resilience throughout the year.
                </p>

                <div className="border-t-2 border-black my-6"></div>

                <h3 className="text-xl font-bold uppercase tracking-tight mb-4">Farewell: Legacy That Stays</h3>
                <p className="text-sm leading-snug mb-4">
                  As we bid farewell to our senior members, we celebrate not just their contributions but the legacy they leave behind.
                </p>
                <p className="text-sm leading-snug mb-6">
                  Their leadership, guidance, and vision have shaped E-Cell into what it is today. From mentoring juniors to leading major initiatives, their impact will continue to inspire future batches.
                </p>
                <p className="text-sm italic font-bold mb-8 text-center text-[#555]">“You built the foundation we now stand on.”</p>

                <div className="border-t-4 border-black pt-4 mt-auto mb-4">
                  <h3 className="text-3xl font-bold uppercase tracking-tighter mb-4 text-center">Events Conducted</h3>
                  <ul id="events-section" className="text-sm font-sans uppercase tracking-widest space-y-2 text-center">
                    <li className="border-b border-black/30 pb-1">Codered 3.0</li>
                    <li className="border-b border-black/30 pb-1">SPL</li>
                    <li className="border-b border-black/30 pb-1">Case Crackers</li>
                    <li className="border-b border-black/30 pb-1">Advert 1.0</li>
                    <li className="border-b border-black/30 pb-1">Speaker Sessions</li>
                    <li className="border-b border-black/30 pb-1">Panel Discussion</li>

                  </ul>
                </div>
              </motion.div>

            </div>
          </motion.section>

          {/* Gallery */}
          <section id="gallery-section" className="mb-24">
            <StaggeredGrid
              images={images}
              bentoItems={[]}
              centerText="Moments That Defined the Year"
              showFooter={false}
            />
          </section>

          {/* Farewell Section */}
          <section id="farewell-section" className="mb-32 px-4 max-w-[90rem] mx-auto">
            <div className="border-t-2 border-b-2 border-zinc-900 py-8 mb-16 flex flex-col md:flex-row md:items-baseline justify-between gap-4">
              <h2 className="text-4xl md:text-6xl font-serif font-black tracking-tighter uppercase text-zinc-900">The Farewell Chronicle</h2>
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-zinc-500 font-medium">Class of 2025–26</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12">
              {[
                { name: "Maxson Mathew", img: maxsonImg },
                { name: "Mohit Monnappa T N", img: mohitImg, imgClass: "scale-[1.18] object-[center_10%]" },
                { name: "Nishitha Bodipati", img: nishithaImg },
                { name: "Gaganjith R", img: gaganjithImg },
                { name: "Shriya Chowdary", img: shriyaImg },
                { name: "Atul Kumar", img: atulImg },
                { name: "Tirth Panchori", img: tirthImg },
                { name: "Akhilesh Pachnanda", img: akhileshImg },

              ].map((person, i) => (
                <div key={i} className="group flex flex-col items-center">
                  {/* Polaroid Frame */}
                  <div className="bg-[#faf9f6] p-3 md:p-4 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 w-full relative mb-6 border border-zinc-200/50 flex flex-col">
                    {/* Inner Photo container */}
                    <div className="aspect-[4/5] w-full overflow-hidden bg-zinc-200 relative grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 shadow-inner mb-4">
                      <img
                        src={person.img}
                        alt={person.name}
                        className={`w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-500 ${person.imgClass || ""}`}
                      />
                      {/* Subtle inner border to frame the photo like a real polaroid */}
                      <div className="absolute inset-0 border border-black/5 pointer-events-none"></div>
                    </div>
                    {/* Name inside frame */}
                    <div className="w-full text-center pb-2 md:pb-4 pt-1">
                      <h3
                        className="text-lg md:text-lg font-bold tracking-tight text-zinc-900 leading-snug uppercase"
                        style={{ fontFamily: "'Robit', sans-serif" }}
                      >
                        {person.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Join The Network Section */}
          <section id="network-section" className="mb-32 px-4">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 text-zinc-400 uppercase tracking-widest text-xs md:text-sm mb-8">
                <span className="w-16 h-[1px] bg-zinc-400"></span>
                <span className="flex gap-1">
                  <span className="w-1.5 h-1.5 bg-zinc-400 inline-block rotate-45"></span>
                  <span className="w-1.5 h-1.5 bg-zinc-400 inline-block rotate-45"></span>
                  <span className="w-1.5 h-1.5 bg-zinc-400 inline-block rotate-45"></span>
                </span>
                <span className="w-16 h-[1px] bg-zinc-400"></span>
              </div>
              <h2 className="text-6xl md:text-[8rem] leading-none font-black uppercase tracking-tighter mb-6 font-sans scale-y-125 origin-bottom">JOIN THE NETWORK</h2>
              <p className="tracking-[0.3em] text-sm md:text-base uppercase text-zinc-500 font-medium">Connect With Us</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {[
                { name: "INSTAGRAM", handle: "@ecell_bmsit", icon: Instagram, href: "https://instagram.com/ecellbmsit" },
                { name: "LINKEDIN", handle: "E-Cell BMSIT", icon: Linkedin, href: "https://linkedin.com/company/ecellbmsit" },
                { name: "WEBSITE", handle: "ecellbmsit.com", icon: Globe, href: "/" },
                { name: "WHATSAPP", handle: "Community Group", icon: MessageCircle, href: "https://chat.whatsapp.com/L5GdDKv23ikGUTposaqLDV" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block aspect-[4/3] w-full border-[1.5px] border-black bg-transparent hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0_0_#000] cursor-pointer p-8 flex flex-col items-center justify-center text-black"
                >
                  {/* Corner Brackets */}
                  <div className="absolute top-3 left-3 w-2 h-2 border-t-[1.5px] border-l-[1.5px] border-current opacity-100"></div>
                  <div className="absolute top-3 right-3 w-2 h-2 border-t-[1.5px] border-r-[1.5px] border-current opacity-100"></div>
                  <div className="absolute bottom-3 left-3 w-2 h-2 border-b-[1.5px] border-l-[1.5px] border-current opacity-100"></div>
                  <div className="absolute bottom-3 right-3 w-2 h-2 border-b-[1.5px] border-r-[1.5px] border-current opacity-100"></div>

                  <div className="mb-6 rounded-full border-[1.5px] border-current w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <social.icon strokeWidth={1.5} className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-wider mb-2 font-serif">{social.name}</h3>
                  <p className="font-mono text-xs tracking-tight text-zinc-500 group-hover:text-zinc-400">{social.handle}</p>
                </a>
              ))}
            </div>
          </section>

          {/* Vision & Mission Section */}


          {/* Story Continues Section */}
          <section className="py-16 md:py-15 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="relative flex flex-col items-center select-none text-[#2d2b27]">

              {/* 2025 (Crossed out) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative text-[8rem] md:text-[15rem] leading-none font-black text-black/10 font-sans tracking-tighter"
              >
                2025
                {/* Strike Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6, ease: [0.76, 0, 0.24, 1] }}
                  className="absolute top-[48%] left-[-5%] right-[-5%] h-2 md:h-4 bg-[#2d2b27] origin-left z-10"
                />
              </motion.div>

              {/* 2026 */}
              <motion.div
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                className="text-[8rem] md:text-[15rem] leading-none font-black text-[#2d2b27] font-sans tracking-tighter -mt-16 md:-mt-28 z-20"
              >
                2026
              </motion.div>

              {/* The Story Continues */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 2 }}
                className="mt-16 md:mt-24 flex flex-col items-center gap-6"
              >
                <div className="tracking-[0.5em] md:tracking-[0.8em] text-xs md:text-sm font-bold uppercase">
                  The Story Continues
                </div>
                <div className="flex gap-2 opacity-50">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2d2b27]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2d2b27]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2d2b27]"></span>
                </div>
              </motion.div>

            </div>
          </section>

        </main>



      </div>
    </div>
  );
};

export default Recap2025;
