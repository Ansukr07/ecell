import React from 'react';
import { Linkedin, Github, Crown, Star, Shield, Users, Award, Heart } from 'lucide-react';

// Mock images for demonstration - replace with actual imports
import arush from './assets/team/arush.jpg';
import ashutosh from './assets/team/ashutosh.jpg';
import deepthijain from './assets/team/deepthijain.jpg';
import Dhyeya from './assets/team/Dhyeya.jpg';
import divyashree from './assets/team/divyashree.jpg';
import gaganhs from './assets/team/gaganhs.jpeg';
import gaganjith from './assets/team/gaganjith.jpg';
import jasvanti from './assets/team/jasvanti.jpeg';
import jayakeerthi from './assets/team/jayakeerthi.jpg';
import krishna from './assets/team/krishna.jpg';
import manal from './assets/team/manal.png';
import maxson from './assets/team/maxson.JPG';
import mohit from './assets/team/mohit.jpeg';
import parathana from './assets/team/parathana.jpeg';
import sathyashivani from './assets/team/sathyashivani.jpeg';
import vaibhav from './assets/team/vaibhav.jpg';
import atul from './assets/team/atul.jpg';
import hitesh from './assets/team/hitesh.jpeg';
import tirth from './assets/team/tirth.jpg';
import fardeen from './assets/team/fardeen.jpeg';
import krishjain from './assets/team/krishjain.jpg'
import shriya from './assets/team/shriya.jpg';
import nishitha from './assets/team/nishitha.jpeg'
import milan from './assets/team/milan.jpg';
import akhilesh from './assets/team/akhilesh.jpeg';
import bhanu from './assets/team/bhanu.JPG';
import raashi from './assets/team/raashi.jpg';
import ananya from './assets/team/ananya.jpg';
import anvita from './assets/team/anvita.jpg';
import ansu from './assets/team/ansu.jpg';
import bhavana from './assets/team/bhavana.jpg';
import faizan from './assets/team/Faizan.jpg';
import rishav from './assets/team/rishav.jpg';
import talha from './assets/team/talha.jpg';

const teamData = {
  "leadership": [
    {
      "name": "Maxson Matthew",
      "position": "President",
      "image": maxson,
      "socials": { "linkedin": "", "github": "" }
    },
    {
      "name": "Mohit Monnappa",
      "position": "Mentor",
      "image": mohit,
      "socials": { "linkedin": "", "github": "" }
    },
    {
      "name": "Nishitha Bodipati",
      "position": "Vice President",
      "image": nishitha,
      "socials": { "linkedin": "", "github": "" }
    },
    {
      "name": "Vaibhav P",
      "position": "Vice President",
      "image": vaibhav,
      "socials": { "linkedin": "", "github": "" }
    }
  ],
  "heads": [
    { "name": "Atul Kumar", "position": "Tech", "image": atul, "socials": { "linkedin": "", "github": "" } },
    { "name": "Fardeen K", "position": "Corporate Relations", "image": fardeen, "socials": { "linkedin": "", "github": "" } },
    { "name": "Gaganjith R", "position": "Events & Ops", "image": gaganjith, "socials": { "linkedin": "", "github": "" } },
    { "name": "Hitesh R", "position": "Media & Marketing", "image": hitesh, "socials": { "linkedin": "", "github": "" } },
    { "name": "Shriya", "position": "Content", "image": shriya, "socials": { "linkedin": "", "github": "" } },
    { "name": "Tirth Panchori", "position": "Design", "image": tirth, "socials": { "linkedin": "", "github": "" } },
    { "name": "Milan S", "position": "Tech", "image": milan, "socials": { "linkedin": "", "github": "" } },
    { "name": "Bhanu Prasad", "position": "Media", "image": bhanu, "socials": { "linkedin": "", "github": "" } },
    { "name": "Akhilesh Pachnanda", "position": "Design", "image": akhilesh, "socials": { "linkedin": "", "github": "" } }
  ],
  
  "associates": [
    { "name": "Ananya", "position": "Media", "image": ananya, "socials": {} },
    { "name": "Bhavana", "position": "Marketing", "image": bhavana, "socials": {} },
    { "name": "Dhyeya", "position": "Operations", "image": Dhyeya, "socials": {} },
    
    { "name": "Jasvanti", "position": "Design", "image": jasvanti, "socials": {} },
    { "name": "Krishna", "position": "Marketing", "image": krishna, "socials": {} },
    { "name": "Faizan Khan", "position": "Marketing", "image": faizan, "socials": {} },
    
    { "name": "Ansu Kumar", "position": "Tech", "image": ansu, "socials": {} },
    { "name": "Anvita", "position": "Marketing", "image": anvita, "socials": {} },
    { "name": "Arush", "position": "Corporate Relations", "image": arush, "socials": {} },
    { "name": "Ashutosh", "position": "Content", "image": ashutosh, "socials": {} },
    { "name": "Deepthi Jain", "position": "Event & Ops", "image": deepthijain, "socials": {} },
    { "name": "Gagan HS", "position": "Operations", "image": gaganhs, "socials": {} },
    { "name": "Jayakeerthi", "position": "Content", "image": jayakeerthi, "socials": {} },
    { "name": "Krish Jain", "position": "Tech", "image": krishjain, "socials": {} },
    { "name": "Manal", "position": "Marketing", "image": manal, "socials": {} },
    { "name": "Raashi", "position": "Design", "image": raashi, "socials": {} },
    { "name": "Rishav", "position": "Event & Ops", "image": rishav, "socials": {} },
    { "name": "Sathya Shivani", "position": "Corporate Relations", "image": sathyashivani, "socials": {} },
    { "name": "Talha", "position": "Operations", "image": talha, "socials": {} }

  ]
};

// Enhanced Circular Card with bigger size and better ribbons
const CircularCard = ({ member, ribbonColor = "orange", isAssociate = false }) => {
  const ribbonColors = {
    orange: { from: "#f97316", to: "#ea580c", glow: "orange-500" },
    blue: { from: "#3b82f6", to: "#1d4ed8", glow: "blue-500" }, 
    purple: { from: "#8b5cf6", to: "#7c3aed", glow: "purple-500" },
    green: { from: "#10b981", to: "#059669", glow: "green-500" }
  };

  const colors = ribbonColors[ribbonColor];
  const imageSize = isAssociate ? "w-36 h-36" : "w-44 h-44";
  const ribbonWidth = isAssociate ? 160 : 180;
  const ribbonHeight = isAssociate ? 45 : 55;

  return (
    <div className={`group relative flex flex-col items-center ${isAssociate ? 'mb-8' : 'mb-12'}`}>
      {/* Circular Image Container with more spacing */}
      <div className="relative mb-4">
        <div className={`${imageSize} rounded-full overflow-hidden border-4 border-gray-600/50 group-hover:border-${colors.glow}/60 transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-${colors.glow}/30`}>
          <img
            src={member.image || mockImage}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        
        {/* Enhanced Decorative Ring with more spacing */}
        <div className={`absolute -inset-4 rounded-full border-2 border-${colors.glow}/20 group-hover:border-${colors.glow}/50 transition-all duration-500 group-hover:rotate-180`}></div>
        <div className={`absolute -inset-2 rounded-full border border-${colors.glow}/10 group-hover:border-${colors.glow}/30 transition-all duration-700 group-hover:-rotate-180`}></div>
      </div>
      
      {/* Enhanced SVG Ribbon with vertical text */}
      <div className={`relative ${isAssociate ? '-mt-2' : '-mt-4'} z-10 mb-4`}>
        <svg width={ribbonWidth} height={ribbonHeight} viewBox={`0 0 ${ribbonWidth} ${ribbonHeight}`} className="drop-shadow-xl">
          <defs>
            <linearGradient id={`ribbon-${member.name.replace(/\s+/g, '')}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={colors.from} />
              <stop offset="50%" stopColor={colors.to} />
              <stop offset="100%" stopColor={colors.from} />
            </linearGradient>
            <filter id={`glow-${member.name.replace(/\s+/g, '')}`}>
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <path
            d={`M10 ${ribbonHeight/5} L${ribbonWidth-10} ${ribbonHeight/5} L${ribbonWidth-5} ${ribbonHeight/2} L${ribbonWidth-10} ${ribbonHeight*4/5} L10 ${ribbonHeight*4/5} L5 ${ribbonHeight/2} Z`}
            fill={`url(#ribbon-${member.name.replace(/\s+/g, '')})`}
            filter={`url(#glow-${member.name.replace(/\s+/g, '')})`}
            className="group-hover:brightness-110 transition-all duration-300"
          />
        </svg>
        
        {/* Vertical Text on Ribbon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-white font-bold ${isAssociate ? 'text-sm' : 'text-base'} text-center px-2 leading-tight tracking-wide transform -rotate-0`}>
            {member.position.length > (isAssociate ? 16 : 20) ? member.position.substring(0, (isAssociate ? 13 : 17)) + '...' : member.position}
          </span>
        </div>
      </div>
      
      {/* Name with more spacing */}
      <h3 className={`font-bold text-white text-center mt-2 ${isAssociate ? 'text-base' : 'text-lg'} group-hover:text-${colors.glow} transition-colors duration-300`}>
        {member.name}
      </h3>
    </div>
  );
};

// Enhanced Team Section Component
const TeamSection = ({ title, members, ribbonColor = "orange", isAssociate = false }) => {
  if (!members || members.length === 0) return null;
  
  const getSectionIcon = (title) => {
    if (title.includes('LEADERSHIP')) return Crown;
    if (title.includes('HEADS')) return Shield;
    if (title.includes('VICE')) return Star;
    return Users;
  };

  const IconComponent = getSectionIcon(title);
  
  return (
    <section className={`${isAssociate ? 'mb-16' : 'mb-24'}`}>
      <div className="text-center mb-16">
        <div className="flex items-center justify-center mb-6">
          
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
            {title}
          </h2>

        </div>
        <div className="w-32 h-2 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 mx-auto rounded-full"></div>
      </div>
      
      {/* Centered Grid Layout */}
      <div className="flex justify-center">
        <div className={`grid ${isAssociate ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12'} px-4`}>
          {members.map((member, index) => (
            <CircularCard key={index} member={member} ribbonColor={ribbonColor} isAssociate={isAssociate} />
          ))}
        </div>
      </div>
    </section>
  );
};


const TeamPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">

      <div 
        className="absolute inset-0 opacity-10 animate-pulse"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'gridMove 20s linear infinite'
        }}
      />
      
   
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
      `}</style>
      

      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-orange-500/10 via-amber-400/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-purple-500/10 via-orange-500/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-full h-96 bg-gradient-to-r from-transparent via-amber-400/5 to-transparent pointer-events-none" />

      <div className="absolute top-20 left-10 w-2 h-2 bg-orange-400 rounded-full animate-ping opacity-70"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-amber-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-bounce opacity-50"></div>

      <div className="relative z-10 container mx-auto px-6 py-16">
 
        <div className="text-center mb-32">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent to-orange-500 mr-8"></div>
            
            <div className="w-20 h-1 bg-gradient-to-l from-transparent to-orange-500 ml-8"></div>
          </div>
          
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tighter bg-gradient-to-r from-white via-amber-200 to-white bg-clip-text text-transparent">
            TEAM
          </h1>
          <div className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text mb-10 tracking-tight">
            
            
            E-CELL

          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed">
            The innovators, creators, and entrepreneurs shaping tomorrow
          </p>
        </div>

        <TeamSection 
          title="LEADERSHIP" 
          members={teamData.leadership}
          ribbonColor="orange"
        />
        
        <TeamSection 
          title="HEADS" 
          members={teamData.heads}
          ribbonColor="orange"
        />
       
        <TeamSection 
          title="ASSOCIATES" 
          members={teamData.associates}
          ribbonColor="purple"
          isAssociate={true}
        />
      </div>
    </div>
  );
};

export default TeamPage;