import React, { useState, useEffect, useRef } from 'react';
import ali from "./assets/mdAli.jpeg";
import meghana from "./assets/meghana.jpg";
import suhas from "./assets/suhas.jpg";
import shashank from "./assets/shashank.jpeg";
import chandana from "./assets/chandana.jpg";
import syeeda from "./assets/syeeda.jpg";
import adithya from "./assets/adithya.jpg";
import gul from "./assets/gul.jpeg";
import sarvani from "./assets/sarvani.jpg";
import Footer from '../components/Footer/Footer';
const EcellAlumniPage = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);
  const observerRef = useRef(null);

  // Alumni data in JSON format
  const alumniData = {
    stats: [
      {
        id: 1,
        value: "5",
        suffix: "years",
        label: "of Innovation",
        delay: 0
      },
      {
        id: 2,
        value: "100",
        suffix: "+",
        label: "Members",
        delay: 200
      },
      {
        id: 3,
        value: "62",
        suffix: "%",
        label: "Growth",
        delay: 400
      }
    ],
    members: [
      {
        id: 1,
        name: "Shashank Gowda S",
        position: "President",
        year: "2024/25",
        image: shashank,
        color: "#FD7722"
      },
      {
        id: 2,
        name: "Shri Adithya",
        position: "Mentor",
        year: "2024/25",
        image: adithya,
        color: "#8B5CF6"
      },
      {
        id: 3,
        name: "Mohammed Ali A",
        position: "Tech Head",
        year: "2024/25",
        image: ali,
        color: "#F59E0B"
      },
      {
        id: 4,
        name: "Syeeda",
        position: "Design Head",
        year: "2024/25",
        image: syeeda,
        color: "#EC4899"
      },
      {
        id: 5,
        name: "Suhas B S",
        position: "Operations Head",
        year: "2024/25",
        image: suhas,
        color: "#10B981"
      },
      {
        id: 6,
        name: "R Chandana",
        position: "Marketing Head",
        year: "2024/25",
        image: chandana,
        color: "#3B82F6"
      },
      {
        id: 7,
        name: "R Sarvani",
        position: "Marketing Vice Head",
        year: "2024/25",
        image: sarvani,
        color: "#14B8A6"
      },
      {
        id: 8,
        name: "Meghana N M",
        position: "Content Vice Head",
        year: "2024/25",
        image: meghana,
        color: "#EF4444"
      },
      {
        id: 9,
        name: "Gul Bhatia",
        position: "Operations Vice Head",
        year: "2024/25",
        image: gul,
        color: "#6366F1"
      }
    ]
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = entry.target.getAttribute('data-card-id');
            if (cardId) {
              setVisibleCards(prev => new Set([...prev, cardId]));
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Register cards for observation
  const registerCard = (element, cardId) => {
    if (element && observerRef.current) {
      element.setAttribute('data-card-id', cardId);
      observerRef.current.observe(element);
    }
  };

  const StatCard = ({ stat, index }) => {
    const isVisible = visibleCards.has(`stat-${stat.id}`);

    return (
      <div
        ref={(el) => registerCard(el, `stat-${stat.id}`)}
        className={`text-center transform transition-all duration-1000 ease-out ${isVisible
            ? 'translate-y-0 opacity-100'
            : 'translate-y-20 opacity-0'
          }`}
        style={{ transitionDelay: `${stat.delay}ms` }}
      >
        <div className="relative group">
          <div className="text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-black mb-6 relative">
            <span className="bg-gradient-to-r from-[#FD7722] via-[#ff8c42] to-[#FD7722] bg-clip-text text-transparent animate-gradient-x">
              {stat.value}
            </span>
            {stat.suffix && (
              <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-[#FD7722] via-[#ff8c42] to-[#FD7722] bg-clip-text text-transparent">
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
      </div>
    );
  };

  const AlumniCard = ({ member, index }) => {
    const isVisible = visibleCards.has(`member-${member.id}`);
    const isHovered = hoveredCard === member.id;

    return (
      <div
        ref={(el) => registerCard(el, `member-${member.id}`)}
        className={`relative group cursor-pointer transform transition-all duration-700 ease-out ${isVisible
            ? 'translate-y-0 opacity-100'
            : 'translate-y-20 opacity-0'
          }`}
        style={{ transitionDelay: `${index * 100}ms` }}
        onMouseEnter={() => setHoveredCard(member.id)}
        onMouseLeave={() => setHoveredCard(null)}
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
            <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-40' : 'opacity-20'
              }`}></div>

            {/* Floating accent line */}
            <div className={`absolute top-4 right-4 w-1 h-12 bg-gradient-to-b from-[#FD7722] to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
              }`}></div>
          </div>

          {/* Content */}
          <div className="p-8 relative">
            <h3 className={`text-2xl lg:text-3xl font-bold mb-3 transition-colors duration-300 ${isHovered ? 'text-[#FD7722]' : 'text-white'
              } font-serif`}>
              {member.name}
            </h3>
            <p className="text-[#FD7722] font-semibold mb-2 text-xl font-sans">
              {member.position}
            </p>
            <p className="text-gray-400 text-lg font-sans">
              {member.year}
            </p>

            {/* Bottom accent line */}
            <div className={`absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-[#FD7722] via-transparent to-[#FD7722] transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
              }`}></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      {/* Navbar removed as it is global */}

      {/* OUR ALUMNI BY THE NUMBERS */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div
            ref={(el) => registerCard(el, 'section-title')}
            className={`transform transition-all duration-1000 ease-out mb-20 ${visibleCards.has('section-title')
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
              }`}
          >
            <h2 className="text-2xl lg:text-3xl text-gray-300 uppercase tracking-[0.3em] text-center relative font-sans">
              Our Alumni by the numbers
              <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#FD7722] to-transparent mx-auto mt-4"></div>
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-16">
            {alumniData.stats.map((stat, index) => (
              <StatCard key={stat.id} stat={stat} index={index} />
            ))}
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-8 w-1 h-32 bg-gradient-to-b from-[#FD7722] to-transparent opacity-10"></div>
        <div className="absolute bottom-1/4 right-8 w-1 h-32 bg-gradient-to-t from-[#FD7722] to-transparent opacity-10"></div>
      </section>

      {/* OUR ALUMNI TEAM */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div
            ref={(el) => registerCard(el, 'team-title')}
            className={`transform transition-all duration-1000 ease-out mb-20 ${visibleCards.has('team-title')
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
              }`}
          >
            <h2 className="text-5xl lg:text-7xl xl:text-8xl font-black text-center leading-tight font-serif">
              OUR <span className="text-[#FD7722]">ALUMNI</span><br />
              NETWORK
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FD7722] to-transparent mx-auto mt-8"></div>
          </div>

          {/* Alumni Grid - 3 columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {alumniData.members.map((member, index) => (
              <AlumniCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>


      <Footer />

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default EcellAlumniPage;