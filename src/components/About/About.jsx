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
    <div className="bg-black text-white font-sora relative">
      <div 
        className="absolute top-0 left-0 w-full h-[40vh] opacity-10 pointer-events-none z-0 mix-blend-overlay"
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
      <section className="min-h-[40vh] md:min-h-[60vh] flex items-center justify-center px-6 md:px-24 pt-32 pb-12 md:pb-16">
        <div className="max-w-6xl text-left">
          <ScrollRevealText
            text="At E-CELL, we're a movement dedicated to helping students move forward. From discovering the perfect idea to building thriving startups, we make every step in entrepreneurship a positive one."
            className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-medium leading-[1.3] md:leading-[1.25]"
          />
        </div>
      </section>

      {/* 2. Mid Section (Split Layout) */}
      <section className="py-12 md:py-16 px-6 md:px-24 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
        <div className="md:col-span-4 flex flex-col justify-start">
          <h2 className="text-sm md:text-base uppercase tracking-[0.3em] font-semibold text-gray-400 mb-6 font-mono">
            Who We Are
          </h2>
        </div>
        <div className="md:col-span-8">
          <motion.div
            initial={{ clipPath: 'inset(0 0 0 100%)' }}
            whileInView={{ clipPath: 'inset(0 0 0 0)' }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 1.8, ease: "anticipate" }}
            className="relative overflow-hidden aspect-[4/3] md:aspect-[16/9] group bg-neutral-900 rounded-lg"
          >
            <img
              alt="E-CELL Team Collaboration"
              className="w-full h-full object-cover group-hover: transition-all duration-1000 hover:scale-105"
              src={groupImg}
            />
          </motion.div>
        </div>
      </section>

      {/* 3. Bottom Section (Reversed Layout) */}
      <section className="py-16 md:py-24 px-6 md:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
          {/* Left: Editorial Image Composition */}
          <div className="relative order-2 md:order-1 mt-12 md:mt-0 pl-12 md:pl-20 sm:pl-16">
            <motion.div
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              whileInView={{ clipPath: 'inset(0 0 0 0)' }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 1.8, ease: "anticipate" }}
              className="aspect-[3/4] bg-neutral-900 w-full ml-auto overflow-hidden rounded-lg z-0 relative"
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
              className="absolute -bottom-16 left-0 md:left-4 w-2/3 aspect-square border-[8px] md:border-[12px] border-black shadow-2xl overflow-hidden rounded-lg z-10"
            >
              <img
                alt="Student workspace"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              />
            </motion.div>
          </div>

          {/* Right: Text Content */}
          <div className="order-1 md:order-2 space-y-12 text-left">
            <p className="text-xl md:text-3xl lg:text-4xl font-medium leading-[1.4]">
              <ScrollRevealText
                text="Founded on the belief that innovation should be empowering for everyone involved, E-CELL combines innovative tools, a student-centered approach, and a collaborative model to redefine what a modern cell can be."
                className=""
              />
            </p>
            <p className="text-lg md:text-2xl font-light italic text-gray-400 leading-relaxed md:leading-loose">
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