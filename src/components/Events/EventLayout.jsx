import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from '../Footer/Footer';

const EventLayout = ({
    title,
    description,
    stats = [],
    highlights = [],
    galleryImages = [],
    themeColor = "orange", // orange, purple, blue, amber, green, teal, red
    backgroundGradient = "from-slate-900 via-gray-900 to-black"
}) => {
    const [animationStage, setAnimationStage] = useState(0);

    useEffect(() => {
        const timer1 = setTimeout(() => setAnimationStage(1), 500);
        return () => clearTimeout(timer1);
    }, []);

    // Theme configuration helper
    const getThemeClasses = (color) => {
        const themes = {
            orange: {
                text: "text-orange-400",
                bg: "bg-orange-500",
                border: "border-orange-500",
                hoverText: "hover:text-orange-300",
                gradientText: "from-orange-400 to-red-500",
                highlightBg: "from-orange-500/10 to-red-500/10",
                highlightBorder: "border-orange-500/20",
                pillText: "text-orange-300",
                pillBg: "bg-orange-500/10",
                pillBorder: "border-orange-500/30",
                statIcon: "text-orange-400",
                dot: "bg-orange-400",
                accentGroup: "group-hover:text-orange-400",
                hoverBorder: "group-hover:border-orange-400/20",
                hoverBg: "group-hover:bg-orange-400/5",
                line: "bg-orange-400"
            },
            purple: {
                text: "text-purple-400",
                bg: "bg-purple-500",
                border: "border-purple-500",
                hoverText: "hover:text-purple-300",
                gradientText: "from-purple-400 to-pink-400",
                highlightBg: "from-purple-500/10 to-pink-500/10",
                highlightBorder: "border-purple-500/20",
                pillText: "text-purple-300",
                pillBg: "bg-purple-500/10",
                pillBorder: "border-purple-500/30",
                statIcon: "text-purple-400",
                dot: "bg-purple-400",
                accentGroup: "group-hover:text-purple-400",
                hoverBorder: "group-hover:border-purple-400/20",
                hoverBg: "group-hover:bg-purple-400/5",
                line: "bg-purple-400"
            },
            blue: {
                text: "text-blue-400",
                bg: "bg-blue-500",
                border: "border-blue-500",
                hoverText: "hover:text-blue-300",
                gradientText: "from-blue-400 to-cyan-400",
                highlightBg: "from-blue-500/10 to-cyan-500/10",
                highlightBorder: "border-blue-500/20",
                pillText: "text-blue-300",
                pillBg: "bg-blue-500/10",
                pillBorder: "border-blue-500/30",
                statIcon: "text-blue-400",
                dot: "bg-blue-400",
                accentGroup: "group-hover:text-blue-400",
                hoverBorder: "group-hover:border-blue-400/20",
                hoverBg: "group-hover:bg-blue-400/5",
                line: "bg-blue-400"
            },
            amber: {
                text: "text-amber-400",
                bg: "bg-amber-500",
                border: "border-amber-500",
                hoverText: "hover:text-amber-300",
                gradientText: "from-amber-400 to-yellow-400",
                highlightBg: "from-amber-500/10 to-yellow-500/10",
                highlightBorder: "border-amber-500/20",
                pillText: "text-amber-300",
                pillBg: "bg-amber-500/10",
                pillBorder: "border-amber-500/30",
                statIcon: "text-amber-400",
                dot: "bg-amber-400",
                accentGroup: "group-hover:text-amber-400",
                hoverBorder: "group-hover:border-amber-400/20",
                hoverBg: "group-hover:bg-amber-400/5",
                line: "bg-amber-400"
            },
            green: {
                text: "text-green-400",
                bg: "bg-green-500",
                border: "border-green-500",
                hoverText: "hover:text-green-300",
                gradientText: "from-green-400 to-emerald-400",
                highlightBg: "from-green-500/10 to-emerald-500/10",
                highlightBorder: "border-green-500/20",
                pillText: "text-green-300",
                pillBg: "bg-green-500/10",
                pillBorder: "border-green-500/30",
                statIcon: "text-green-400",
                dot: "bg-green-400",
                accentGroup: "group-hover:text-green-400",
                hoverBorder: "group-hover:border-green-400/20",
                hoverBg: "group-hover:bg-green-400/5",
                line: "bg-green-400"
            },
            teal: {
                text: "text-teal-400",
                bg: "bg-teal-500",
                border: "border-teal-500",
                hoverText: "hover:text-teal-300",
                gradientText: "from-teal-400 to-cyan-400",
                highlightBg: "from-teal-500/10 to-cyan-500/10",
                highlightBorder: "border-teal-500/20",
                pillText: "text-teal-300",
                pillBg: "bg-teal-500/10",
                pillBorder: "border-teal-500/30",
                statIcon: "text-teal-400",
                dot: "bg-teal-400",
                accentGroup: "group-hover:text-teal-400",
                hoverBorder: "group-hover:border-teal-400/20",
                hoverBg: "group-hover:bg-teal-400/5",
                line: "bg-teal-400"
            },
            red: {
                text: "text-red-400",
                bg: "bg-red-500",
                border: "border-red-500",
                hoverText: "hover:text-red-300",
                gradientText: "from-red-400 to-rose-500",
                highlightBg: "from-red-500/10 to-rose-500/10",
                highlightBorder: "border-red-500/20",
                pillText: "text-red-300",
                pillBg: "bg-red-500/10",
                pillBorder: "border-red-500/30",
                statIcon: "text-red-400",
                dot: "bg-red-400",
                accentGroup: "group-hover:text-red-400",
                hoverBorder: "group-hover:border-red-400/20",
                hoverBg: "group-hover:bg-red-400/5",
                line: "bg-red-400"
            }
        };
        return themes[color] || themes.orange;
    };

    const theme = getThemeClasses(themeColor);

    return (
        <div className={`min-h-screen bg-gradient-to-br ${backgroundGradient} text-white relative overflow-hidden`}>
            {/* Animated Background Grid */}
            <motion.div
                className="absolute inset-0 opacity-[0.25]"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(231, 231, 231, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(231, 231, 231, 0.4) 1px, transparent 1px)
          `,
                    backgroundSize: '40px 40px'
                }}
            />
            {/* Secondary Grid */}
            <motion.div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(231, 231, 231, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(231, 231, 231, 0.4) 1px, transparent 1px)
          `,
                    backgroundSize: '80px 80px'
                }}
            />

            {/* Moving Gradient Blob */}
            <motion.div
                className="absolute inset-0 opacity-[0.3]"
                animate={{
                    background: [
                        'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                        'radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                        'radial-gradient(circle at 40% 60%, rgba(255,255,255,0.08) 0%, transparent 50%)',
                        'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)'
                    ]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Content Container */}
            <div className="relative z-10" style={{ fontFamily: 'Sora, sans-serif' }}>
                {/* Navbar removed as it is global */}



                {/* Hero Section */}
                <motion.div
                    className="pt-40 pb-16 px-6 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="max-w-4xl mx-auto">
                        <div className={`inline-block px-4 py-2 ${theme.pillBg} border ${theme.pillBorder} rounded-full ${theme.pillText} text-sm mb-6 uppercase tracking-wider`}>
                            Event Recap
                        </div>
                        <h1 className={`text-5xl md:text-7xl font-bold bg-gradient-to-r ${theme.gradientText} bg-clip-text text-transparent mb-6`} style={{ fontFamily: 'Georgia, serif' }}>
                            {title}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light">
                            {description}
                        </p>
                    </div>
                </motion.div>

                {/* Stats Grid */}
                {stats.length > 0 && (
                    <div className="px-6 py-8 max-w-6xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + (index * 0.1) }}
                                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 group"
                                >
                                    <stat.icon className={`w-8 h-8 ${theme.statIcon} mx-auto mb-3 transition-transform duration-300 group-hover:scale-110`} />
                                    <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                                    <p className="text-gray-400 text-sm">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Highlights Section */}
                {highlights.length > 0 && (
                    <div className="px-6 pb-12 max-w-6xl mx-auto">
                        <div className="mb-16">
                            <div className="flex items-center gap-4 mb-8 justify-center md:justify-start">
                                <div className={`h-px w-12 ${theme.bg}`}></div>
                                <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>
                                    Event Highlights
                                </h2>
                                <div className={`h-px w-12 ${theme.bg} md:hidden`}></div>
                            </div>

                            <motion.div
                                className={`bg-gradient-to-r ${theme.highlightBg} border ${theme.highlightBorder} rounded-2xl p-8`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                            >
                                <div className="grid md:grid-cols-2 gap-6">
                                    {highlights.map((highlight, index) => (
                                        <div key={index} className="flex items-start gap-4 group/item">
                                            <div className={`mt-1 flex-shrink-0 ${theme.text} opacity-80 group-hover/item:opacity-100 transition-opacity`}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                                                    <path d="m9 12 2 2 4-4" />
                                                </svg>
                                            </div>
                                            <p className="text-gray-300 text-lg font-light leading-relaxed">{highlight}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                )}

                {/* Gallery Section */}
                {galleryImages.length > 0 && (
                    <div className="px-6 pb-24 max-w-6xl mx-auto">
                        <div className="mb-8 ">
                            <h2 className="text-3xl font-bold text-white mb-8 text-center md:text-left" style={{ fontFamily: 'Georgia, serif' }}>
                                Captured Moments
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {galleryImages.map((src, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative overflow-hidden rounded-xl bg-gray-800 aspect-video shadow-2xl"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10`}></div>

                                    <img
                                        src={src}
                                        alt={`Event moment ${index + 1}`}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />

                                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
                                        <div className={`h-1 w-12 ${theme.bg} mb-2`}></div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default EventLayout;
