import React from 'react';
import { motion } from 'framer-motion';
import groupImg from '../../assets/group.png';

const ScrollRevealText = ({ text, className }) => {
  const words = text.split(" ");

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.08 } // rapid fire left-to-right
        }
      }}
      className={className}
    >
      {words.map((word, i) => (
        <span key={i}>
          <motion.span
            variants={{
              hidden: { color: "gray", opacity: 0.4 },
              visible: { color: "inherit", opacity: 1, transition: { duration: 0.4 } }
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </motion.span>
  );
};

const AboutSection = () => {
  return (
    <div className="bg-black text-white font-sora relative border-y-0 -mt-[1px] md:mt-0">
      <div
        className="absolute top-1 left-0 w-full h-[40vh] opacity-10 pointer-events-none z-0 mix-blend-overlay"
        style={{
          backgroundImage: `
            linear-gradient(currentColor 1px, transparent 1px),
            linear-gradient(90deg, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)'
        }}
      />
      {/* 1. Full-height Scroll-reveal Section */}
      <section className="flex items-center justify-center px-6 md:px-12 pt-16 pb-6 md:pb-8">
        <div className="max-w-6xl text-left" style={{ fontFamily: 'Quera' }}>
          <ScrollRevealText
            text="At E-CELL, we're a movement dedicated to helping students move forward. From discovering the perfect idea to building thriving startups, we make every step in entrepreneurship a positive one."
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl tracking-wide leading-[1.35] md:leading-[1.3]"
          />
        </div>
      </section>

      {/* 2. Unified Content Section */}
      <section className="pt-4 pb-24 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-stretch">

        {/* Left Column: Heading + Floating Images */}
        <div className="md:col-span-4 flex flex-col justify-between pt-2 pb-15">
          <h2 className="text-sm md:text-base uppercase tracking-[0.3em] font-semibold text-gray-400 mb-12 font-mono">
            Who We Are
          </h2>

          {/* Left Images (Positioned at the bottom of the left column to align with text) */}
          <div className="relative w-[80%] md:w-full mt-12 md:mt-auto">
            <motion.div
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              whileInView={{ clipPath: 'inset(0 0 0 0)' }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 1.8, ease: "anticipate" }}
              className="aspect-[3/4] bg-neutral-900 w-full overflow-hidden rounded-lg z-0 relative"
            >
              <img
                alt="Collaborative innovation"
                className="w-full h-full object-cover saturate-50 hover:saturate-100 transition-all duration-1000"
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              />
            </motion.div>
            <motion.div
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              whileInView={{ clipPath: 'inset(0 0 0 0)' }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 1.8, ease: "anticipate" }}
              className="absolute -bottom-12 -right-8 md:-bottom-16 md:-right-6 w-2/3 aspect-square border-[8px] md:border-[12px] border-black shadow-2xl overflow-hidden rounded-lg z-10"
            >
              <img
                alt="Student workspace"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              />
            </motion.div>
          </div>
        </div>

        {/* Right Column: Group Image + Paragraphs */}
        <div className="md:col-span-7 md:col-start-6 lg:col-span-6 lg:col-start-7 flex flex-col pt-8 md:pt-0">
          <motion.div
            initial={{ clipPath: 'inset(0 0 0 100%)' }}
            whileInView={{ clipPath: 'inset(0 0 0 0)' }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 1.8, ease: "anticipate" }}
            className="relative overflow-hidden aspect-[4/3] md:aspect-[16/9] w-full group bg-neutral-900 rounded-lg mb-12 md:mb-20"
          >
            <img
              alt="E-CELL Team Collaboration"
              className="w-full h-full object-cover group-hover: transition-all duration-1000 hover:scale-105"
              src={groupImg}
            />
          </motion.div>

          {/* Right: Text Content directly below image */}
          <div className="space-y-10 text-left">
            <p className="text-xl md:text-3xl lg:text-4xl leading-[1.4] tracking-wide" style={{ fontFamily: 'Quera' }}>
              <ScrollRevealText
                text="Founded on the belief that innovation should be empowering for everyone involved, E-CELL combines innovative tools, a student-centered approach, and a collaborative model to redefine what a modern cell can be."
                className=""
              />
            </p>
            <p className="text-lg md:text-2xl italic text-gray-400 leading-relaxed md:leading-loose tracking-wide" style={{ fontFamily: 'Quera' }}>
              <ScrollRevealText
                text="Today, we're proud to support countless students on their entrepreneurial journeys."
                className=""
              />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;