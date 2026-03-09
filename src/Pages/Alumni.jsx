import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import ali from "./assets/mdAli.jpeg";
import meghana from "./assets/meghana.jpg";
import suhas from "./assets/suhas.jpg";
import shashank from "./assets/shashank.jpeg";
import chandana from "./assets/chandana.jpg";
import syeeda from "./assets/syeeda.jpg";
import adithya from "./assets/adithya.jpg";
import gul from "./assets/gul.jpeg";
import sarvani from "./assets/sarvani.jpg";

// Extracted StatCard to prevent heavy mobile re-renders
const StatCard = ({ stat, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="text-center"
    >
      <div className="relative group">
        <div className="text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-black mb-6 relative">
          <span 
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(to right, #FD7722, #ff8c42, #FD7722)' }}
          >
            {stat.value}
          </span>
          {stat.suffix && (
            <span 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(to right, #FD7722, #ff8c42, #FD7722)' }}
            >
              {stat.suffix}
            </span>
          )}
        </div>
        <div className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed whitespace-pre-line font-sans">
          {stat.label}
        </div>
        {/* Floating accent */}
        <div className="absolute -top-4 -right-4 w-2 h-16 bg-gradient-to-b from-[#FD7722] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
      </div>
    </motion.div>
  );
};

// Extracted AlumniCard to prevent heavy mobile re-renders
const AlumniCard = ({ member, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden border-2 transition-all duration-500 ${isHovered
        ? 'border-[#FD7722] shadow-2xl shadow-[#FD7722]/20 scale-105'
        : 'border-gray-700 hover:border-gray-600'
        }`}>
        {/* Image Container */}
        <div className="aspect-[4/5] relative overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800">
          <img
            src={member.image}
            alt={member.name}
            className={`w-full h-full object-cover transition-all duration-700 ${isHovered
              ? 'scale-110 grayscale-0'
              : 'scale-100 grayscale hover:grayscale-[50%]'
              }`}
          />
          {/* Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-40' : 'opacity-20'}`}></div>
          {/* Floating accent line */}
          <div className={`absolute top-4 right-4 w-1 h-12 bg-gradient-to-b from-[#FD7722] to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
        </div>
        {/* Content */}
        <div className="p-8 relative">
          <h3 className={`text-2xl lg:text-3xl font-bold mb-3 transition-colors duration-300 ${isHovered ? 'text-[#FD7722]' : 'text-white'} font-serif`}>
            {member.name}
          </h3>
          <p className="text-[#FD7722] font-semibold mb-2 text-xl font-sans">
            {member.position}
          </p>
          <p className="text-gray-400 text-lg font-sans">
            {member.year}
          </p>
          {/* Bottom accent line */}
          <div className={`absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-[#FD7722] via-transparent to-[#FD7722] transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
        </div>
      </div>
    </motion.div>
  );
};

const EcellAlumniPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const alumniData = {
    stats: [
      { id: 1, value: "5", suffix: "years", label: "of Innovation" },
      { id: 2, value: "100", suffix: "+", label: "Members" },
      { id: 3, value: "62", suffix: "%", label: "Growth" }
    ],
    members: [
      { id: 1, name: "Shashank Gowda S", position: "President", year: "2024/25", image: shashank, color: "#FD7722" },
      { id: 2, name: "Shri Adithya", position: "Mentor", year: "2024/25", image: adithya, color: "#8B5CF6" },
      { id: 3, name: "Mohammed Ali A", position: "Tech Head", year: "2024/25", image: ali, color: "#F59E0B" },
      { id: 4, name: "Syeeda", position: "Design Head", year: "2024/25", image: syeeda, color: "#EC4899" },
      { id: 5, name: "Suhas B S", position: "Operations Head", year: "2024/25", image: suhas, color: "#10B981" },
      { id: 6, name: "R Chandana", position: "Marketing Head", year: "2024/25", image: chandana, color: "#3B82F6" },
      { id: 7, name: "R Sarvani", position: "Marketing Vice Head", year: "2024/25", image: sarvani, color: "#14B8A6" },
      { id: 8, name: "Meghana N M", position: "Content Vice Head", year: "2024/25", image: meghana, color: "#EF4444" },
      { id: 9, name: "Gul Bhatia", position: "Operations Vice Head", year: "2024/25", image: gul, color: "#6366F1" }
    ]
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-20"
          >
            <h2 className="text-2xl lg:text-3xl text-gray-300 uppercase tracking-[0.3em] text-center relative font-sans">
              Our Alumni by the numbers
              <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#FD7722] to-transparent mx-auto mt-4"></div>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-16">
            {alumniData.stats.map((stat, index) => (
              <StatCard key={stat.id} stat={stat} index={index} />
            ))}
          </div>
        </div>

        <div className="absolute top-1/4 left-8 w-1 h-32 bg-gradient-to-b from-[#FD7722] to-transparent opacity-10"></div>
        <div className="absolute bottom-1/4 right-8 w-1 h-32 bg-gradient-to-t from-[#FD7722] to-transparent opacity-10"></div>
      </section>

      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-20"
          >
            <h2 className="text-5xl lg:text-7xl xl:text-8xl font-black text-center leading-tight font-serif">
              OUR <span className="text-[#FD7722]">ALUMNI</span><br />
              NETWORK
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FD7722] to-transparent mx-auto mt-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {alumniData.members.map((member, index) => (
              <AlumniCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcellAlumniPage;