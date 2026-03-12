import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

export const StaggeredGrid = ({ images, bentoItems, centerText }) => {
    const [hoveredId, setHoveredId] = useState(null);

    // Combine images and bento items into a single grid array for display
    // This is a simplified version; a real masonry layout might need more logic
    // For now, we'll create a fixed layout pattern

    return (
        <div className="w-full max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
            {/* Feature Item - Large */}
            <motion.div
                className="col-span-1 md:col-span-2 row-span-2 relative group overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800"
                whileHover={{ scale: 0.98 }}
            >
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                {bentoItems[0] && (
                    <>
                        <img
                            src={bentoItems[0].image}
                            alt={bentoItems[0].title}
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute bottom-6 left-6 z-20">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white">
                                    {bentoItems[0].icon}
                                </span>
                                <span className="text-xs font-medium text-neutral-300 uppercase tracking-wider">{bentoItems[0].subtitle}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-1">{bentoItems[0].title}</h3>
                            <p className="text-neutral-400 text-sm max-w-sm">{bentoItems[0].description}</p>
                        </div>
                    </>
                )}
            </motion.div>

            {/* Center Text Block */}
            <div className="col-span-1 row-span-1 flex items-center justify-center bg-transparent border border-neutral-800 rounded-xl">
                <h2 className="text-4xl md:text-6xl font-black text-neutral-800 tracking-tighter uppercase">{centerText}</h2>
            </div>

            {/* Secondary Items */}
            {bentoItems.slice(1).map((item, index) => (
                <motion.div
                    key={item.id || index}
                    className={cn(
                        "relative group overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800",
                        index === 1 ? "md:col-span-2" : "col-span-1"
                    )}
                    whileHover={{ y: -5 }}
                >
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 to-transparent" />
                    <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                        <div className="flex items-center gap-2 mb-1">
                            {item.icon && <span className="text-white">{item.icon}</span>}
                            <h3 className="text-lg font-bold text-white">{item.title}</h3>
                        </div>
                        <p className="text-xs text-neutral-400">{item.description}</p>
                    </div>
                </motion.div>
            ))}

            {/* Filler Images from the images array */}
            {images.slice(0, 2).map((src, idx) => (
                <motion.div
                    key={`img-${idx}`}
                    className="col-span-1 row-span-1 rounded-xl overflow-hidden relative"
                    whileHover={{ scale: 1.02 }}
                >
                    <img src={src} alt="Gallery" loading="lazy" className="w-full h-full object-cover" />
                </motion.div>
            ))}

        </div>
    );
};
