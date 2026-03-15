import { useState, useEffect, useRef } from "react";

const AboutSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const position = window.scrollY;
        setScrollPosition(position);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const mainSection = document.querySelector(".main-section");
    if (mainSection) observer.observe(mainSection);

    return () => {
      if (mainSection) observer.unobserve(mainSection);
    };
  }, []);

  const parallaxOffset = scrollPosition * 0.05;
  const counterOffset = scrollPosition * 0.02;

  return (
    <>

      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Sora:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      <div className="bg-white min-h-screen relative overflow-hidden flex items-center justify-center" ref={sectionRef}>
        <style jsx global>{`
          .main-section {
            opacity: 0;
            transform: translateY(40px);
            transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          
          .main-section.animate-in {
            opacity: 1;
            transform: translateY(0);
          }
          
          .floating-element {
            animation: float 8s ease-in-out infinite;
          }
          
          .floating-element:nth-child(2n) {
            animation-delay: -4s;
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-25px) rotate(3deg); }
          }
          
          .gradient-text {
            background: linear-gradient(135deg, #FD7722 0%, #ff8c42 50%, #FD7722 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            background-size: 200% 200%;
            animation: gradientShift 4s ease-in-out infinite;
          }
          
          @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          .text-shadow {
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          
          .letter-spacing-wider {
            letter-spacing: 0.05em;
          }
          
          .leading-relaxed-custom {
            line-height: 1.75;
          }
        `}</style>


        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-20 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-[#FD7722]/8 to-transparent floating-element"
            style={{ transform: `translateY(${-parallaxOffset}px)` }}
          />
          <div
            className="absolute bottom-32 left-16 w-32 h-32 rounded-full bg-gradient-to-tr from-[#FD7722]/6 to-transparent floating-element"
            style={{ transform: `translateY(${parallaxOffset}px)` }}
          />
          <div
            className="absolute top-1/2 left-8 w-2 h-24 bg-gradient-to-b from-[#FD7722]/40 to-transparent opacity-50"
            style={{ transform: `translateY(${-counterOffset}px)` }}
          />
          <div
            className="absolute top-1/3 right-12 w-1 h-16 bg-gradient-to-b from-[#FD7722]/50 to-transparent opacity-60"
            style={{ transform: `translateY(${counterOffset}px)` }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20">

          <div className="main-section text-center relative">
            <div className="relative">

              <div
                className="absolute inset-0 flex items-center justify-center opacity-4 pointer-events-none"
                style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
              >

              </div>


              <div className="relative z-10 pt-8">

                <p className="text-xs md:text-sm font-medium tracking-[0.4em] text-gray-500 mb-8 uppercase" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Empowering Innovation
                </p>


                <div className="mb-12">
                  <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 text-gray-900 leading-none text-shadow" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Building Tomorrow's
                  </h2>
                  <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold gradient-text leading-none" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Entrepreneurs
                  </h2>
                </div>


                <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#FD7722] to-transparent mx-auto mb-12"></div>
              </div>
            </div>


            <div className="max-w-4xl mx-auto space-y-8">
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed-custom font-light letter-spacing-wider" style={{ fontFamily: 'Sora, sans-serif' }}>
                E-Cell is a dynamic entrepreneurship community dedicated to fostering innovation and nurturing the next generation of business leaders.
              </p>

              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed-custom font-light letter-spacing-wider" style={{ fontFamily: 'Sora, sans-serif' }}>
                We provide comprehensive support, resources, and mentorship to transform groundbreaking ideas into successful ventures.
              </p>

              <p className="text-base md:text-lg lg:text-xl text-gray-500 leading-relaxed-custom font-light letter-spacing-wider max-w-3xl mx-auto" style={{ fontFamily: 'sora, sans-serif' }}>
                Our mission extends beyond traditional business education—we create an ecosystem where creativity meets strategy, where ambitious minds collaborate, and where startup dreams become reality.
              </p>
            </div>
          </div>
        </div>


        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FD7722]/20 to-transparent"></div>
      </div>
    </>
  );
};

export default AboutSection;