import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Using local assets as placeholders for the cinematic slideshow
import img1 from "../../assets/image1.jpg";
import img2 from "../../assets/image2.jpg";
import img3 from "../../assets/image3.jpg";


const images = [img1, img2, img3];

const scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ£$€¥₪¤₹₽";

const ScrambleText = ({ targetText, isReady }) => {
  const [text, setText] = useState(
    targetText.split("").map(() => scrambleChars[Math.floor(Math.random() * scrambleChars.length)]).join("")
  );

  useEffect(() => {
    let interval;
    if (isReady) {
      let start = Date.now();
      const scrambleDuration = 400;

      interval = setInterval(() => {
        let now = Date.now();
        let progress = (now - start) / scrambleDuration;

        if (progress >= 1) {
          setText(targetText);
          clearInterval(interval);
        } else {
          let scrambled = targetText.split("").map((c, i) => {
            if (progress > (i / targetText.length)) return c;
            return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
          }).join("");
          setText(scrambled);
        }
      }, 30);
    } else {
      interval = setInterval(() => {
        setText(targetText.split("").map(() => scrambleChars[Math.floor(Math.random() * scrambleChars.length)]).join(""));
      }, 50);
    }
    return () => clearInterval(interval);
  }, [targetText, isReady]);

  return <span>{text}</span>;
}

const Preloader = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) setImagesLoaded(true);
      };
      img.onerror = () => {
        // Fallback so it doesn't get stuck forever
        loadedCount++;
        if (loadedCount === images.length) setImagesLoaded(true);
      };
    });

    // Fallback: start anyway after 3 seconds if images are still loading too slowly
    const fallback = setTimeout(() => setImagesLoaded(true), 3000);
    return () => clearTimeout(fallback);
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return; // Wait for images to load into the browser

    const t0 = setTimeout(() => setStep(1), 600);  // 0.6s: Scramble locks
    const t1 = setTimeout(() => setStep(2), 1500); // 1.5s: Reveal words horizontally
    const t2 = setTimeout(() => setStep(3), 2800); // 2.8s: Slide words BELOW (stack vertically)
    const t3 = setTimeout(() => setStep(4), 4800); // 4.8s: Split down middle & reveal portrait

    // Exactly 4 image flashes of 600ms = 2400ms. 4800 + 2400 = 7200ms
    const t4 = setTimeout(() => setStep(5), 7200); // 7.2s: Fade out entire preloader
    const t5 = setTimeout(() => {
      setStep(6);
      if (onComplete) onComplete();
    }, 7700); // 7.7s: Unmount and transition

    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5); };
  }, [imagesLoaded, onComplete]);

  // Slideshow logic
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    if (step >= 4) {
      let count = 0;
      const flashInterval = setInterval(() => {
        count++;
        // Exactly cycle through 4 images, then stop the interval
        if (count < images.length) {
          setImageIndex(count);
        } else {
          clearInterval(flashInterval);
        }
      }, 600);
      return () => clearInterval(flashInterval);
    }
  }, [step]);

  if (step === 6) return null;

  const rows = [
    { id: 1, w1: "E-CELL", w2: "INNOVATE" },
    { id: 2, w1: "E-CELL", w2: "IDEATE" },
    { id: 3, w1: "E-CELL", w2: "INSPIRE" },
  ];

  const tickerString = "INNOVATE \u00A0 \u2022 \u00A0 IDEATE \u00A0 \u2022 \u00A0 INSPIRE \u00A0 \u2022 \u00A0 ENTREPRENEURSHIP \u00A0 \u2022 \u00A0 STARTUPS \u00A0 \u2022 \u00A0 LEADERSHIP \u00A0 \u2022 \u00A0 ";

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#000000] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: step === 5 ? 0 : 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* LEFT TICKER STRIP */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 bg-[#080808] border-r border-[#1a1a1a] flex items-center justify-center pointer-events-none z-30">
        <div className="rotate-[-90deg] whitespace-nowrap flex text-[#777777] font-sans text-[12px] sm:text-[14px] md:text-base font-medium tracking-[0.25em] uppercase">
          <motion.div className="flex gap-4" animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 30 }}>
            <span className="pr-4 leading-none">{tickerString}</span>
            <span className="pr-4 leading-none">{tickerString}</span>
          </motion.div>
        </div>
      </div>

      {/* RIGHT TICKER STRIP */}
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 bg-[#080808] border-l border-[#1a1a1a] flex items-center justify-center pointer-events-none z-30">
        <div className="rotate-[90deg] whitespace-nowrap flex text-[#777777] font-sans text-[12px] sm:text-[14px] md:text-base font-medium tracking-[0.25em] uppercase">
          <motion.div className="flex gap-4" animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 30 }}>
            <span className="pr-4 leading-none">{tickerString}</span>
            <span className="pr-4 leading-none">{tickerString}</span>
          </motion.div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex items-center justify-center w-full px-4 sm:px-12 h-screen">

        <AnimatePresence>
          {step < 4 && (
            <motion.div
              className="flex flex-col items-center gap-6 sm:gap-10 md:gap-14 justify-center absolute w-full h-full"
              exit={{ opacity: 0, scale: 1.1, filter: "blur(5px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {rows.map((row) => (
                <motion.div
                  layout
                  key={row.id}
                  className={`flex ${step >= 3 ? 'flex-col space-y-0 sm:-space-y-2 md:-space-y-4 lg:-space-y-3' : 'flex-row gap-0'} items-center justify-center font-sans tracking-tight sm:tracking-tighter text-white font-semibold text-[30px] leading-[0.95] sm:text-5xl md:text-6xl lg:text-[80px] sm:leading-none text-center`}
                >

                  {/* Word 1: GLOBAL */}
                  <motion.div
                    layout
                    layoutId={row.id === 2 ? "global-text" : undefined}
                    className="whitespace-nowrap text-[#B8C0C2]"
                  >
                    <ScrambleText targetText={row.w1} isReady={step >= 1} />
                  </motion.div>

                  {/* Word 2: PAYMENTS / MONEY / TRANSFERS */}
                  <motion.div
                    layout
                    className="whitespace-nowrap overflow-hidden flex items-center justify-center"
                    initial={{ width: 0, opacity: 0 }}
                    animate={step >= 2 ? { width: "auto", opacity: 1 } : { width: 0, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <motion.div
                      layout
                      layoutId={row.id === 2 ? "money-text" : undefined}
                      className={step >= 3 ? "pl-0  " : "pl-3 sm:pl-5"}
                    >
                      {row.w2}
                    </motion.div>
                  </motion.div>

                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {step >= 4 && (
            <motion.div
              className="flex flex-col items-center justify-center gap-8 md:gap-12 absolute w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <motion.div
                layoutId="global-text"
                className="font-sans tracking-tight sm:tracking-tighter text-white font-semibold text-[30px] leading-[0.95] sm:text-5xl md:text-6xl lg:text-[80px] sm:leading-none z-20"
              >
                E-CELL
              </motion.div>

              {/* Image Slideshow Frame */}
              <motion.div
                initial={{ opacity: 0, filter: "blur(10px)", scale: 0.8 }}
                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="w-[200px] h-[300px] sm:w-[260px] sm:h-[380px] lg:w-[320px] lg:h-[460px] bg-[#111111] relative z-10 rounded-[30px] sm:rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex items-center justify-center"
                style={{ aspectRatio: "2/3" }}
              >
                <AnimatePresence mode="popLayout">
                  <motion.img
                    key={imageIndex}
                    src={images[imageIndex]}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover absolute inset-0 rounded-[30px] sm:rounded-[40px]"
                    alt="fintech sequence"
                  />
                </AnimatePresence>
              </motion.div>

              <motion.div
                layoutId="money-text"
                className="font-sans tracking-tight sm:tracking-tighter text-white font-semibold text-[30px] leading-[0.95] sm:text-5xl md:text-6xl lg:text-[80px] sm:leading-none z-20"
              >
                BMSIT&M
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  );
};

export default Preloader;