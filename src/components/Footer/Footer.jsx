import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import custom animations and layout styles
import ecellLogo from '../../assets/ecell1.png'; // E-Cell logo

const Footer = () => {

    // Helper for wavy light paths
    const WavyLightPath = ({ intense }) => (
        <div className={`wavy-light-path ${intense ? 'intense' : ''}`}>
            <svg preserveAspectRatio="none" viewBox="0 0 1000 40">
                <path d="M0,20 Q125,5 250,20 T500,20 T750,20 T1000,20" />
                <path d="M0,20 Q125,35 250,20 T500,20 T750,20 T1000,20" style={{ opacity: 0.5 }} />
            </svg>
        </div>
    );

    const maltaText = "Mr Mark Seaton\nMITI NAVI Limited\n136, St Christopher Street\nValletta VLT 1463\nMALTE";
    const franceText = "MITI NAVI Sales Office\nPort Camille Rayon\nQuai Napoléon\n06210 Golfe-Juan\nFRANCE";

    return (
        <footer className="nebula-footer w-full relative font-[300]">

            {/* EXACT SVG BACKGROUND CUTOUT */}
            <div className="relative w-full overflow-hidden" style={{ height: '301.4px', backgroundColor: '#ffffff', zIndex: 0 }}>
                {/* 
                    Using the exact provided coordinates scaled to a viewBox of 1366
                    Start (0, 198.6) to (293.3, 198.6)
                    Curve to (683, 396.4)
                    Curve to (1366-293.3, 198.6) = (1072.7, 198.6)
                    Line to (1366, 198.6)
                */}
                <svg
                    viewBox="0 198.6 1366 301.4"
                    preserveAspectRatio="xMidYMin slice"
                    className="w-full h-full"
                >
                    <path
                        d="M 0 198.6
                           L 293.3 198.6
                           Q 488 198.6 683 396.4
                           Q 878 198.6 1072.7 198.6
                           L 1366 198.6
                           L 1366 500
                           L 0 500 Z"
                        fill="#030810" // The deep dark color from the image
                    />
                </svg>
            </div>
            {/* MIDDLE SECTION - NAVIGATION & CONTACT */}
            <div className="relative z-20 max-w-[1200px] mx-auto px-10 flex flex-col md:flex-row justify-between items-start gap-12 md:gap-4 mb-16 -mt-[100px]">
                
                {/* Left Side Links */}
                <div className="flex-1 text-sm leading-[2.2] text-left flex flex-col items-start gap-2 font-sans text-[14px] font-medium tracking-wide mt-12 w-full">
                    <Link to="/" className="text-white/60 hover:text-white transition-all duration-300" style={{ color: 'rgba(255,255,255,0.6)' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.6)'}>Home</Link>
                    <Link to="/about" className="text-white/60 hover:text-white transition-all duration-300" style={{ color: 'rgba(255,255,255,0.6)' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.6)'}>About Us</Link>
                    <Link to="/events" className="text-white/60 hover:text-white transition-all duration-300" style={{ color: 'rgba(255,255,255,0.6)' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.6)'}>Events</Link>
                    <Link to="/gallery" className="text-white/60 hover:text-white transition-all duration-300" style={{ color: 'rgba(255,255,255,0.6)' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.6)'}>Gallery</Link>
                    <Link to="/team" className="text-white/60 hover:text-white transition-all duration-300" style={{ color: 'rgba(255,255,255,0.6)' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.6)'}>Our Team</Link>
                </div>

                {/* Center Contact */}
                <div className="flex-1 flex flex-col items-center justify-start text-center z-30 mt-12 w-full">
                    <div className="floating-text-btn pt-4 px-4 pb-0 cursor-default">
                        CONTACT US
                    </div>
                    {/* Tiny energy line underneath */}
                    <div className="w-[80px] h-[1px] bg-white/30 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                </div>

                {/* Right Side Address (BICEP) */}
                <div className="flex-1 text-sm leading-[2.2] text-right md:text-right flex flex-col items-end gap-1 font-sans text-[14px] font-medium tracking-wide mt-12 w-full text-white/60">
                    <p className="font-semibold text-white/70 uppercase mb-1 tracking-wider">BICEP</p>
                    <p>BMS Institute of Technology</p>
                    <p>and Management</p>
                    <p>Avalahalli, Yelahanka</p>
                    <p>Bengaluru, Karnataka 560064</p>
                </div>
            </div>

            {/* LIGHT PATH DIVIDER 1 */}
            <div className="max-w-[1200px] mx-auto px-4">
                <WavyLightPath intense={false} />
            </div>

            {/* SOCIAL LINKS (Floating & Glowing) */}
            <div className="relative z-20 max-w-[800px] mx-auto px-4 flex flex-col sm:flex-row justify-between items-center my-6 gap-6 sm:gap-0 font-sans text-[13px] tracking-wide">
                {['INSTAGRAM', 'FACEBOOK', 'TWITTER', 'YOUTUBE'].map((social, idx) => (
                    <a
                        key={social}
                        href="#"
                        className="text-white/60 transition-all duration-300"
                        style={{ color: 'rgba(255,255,255,0.6)' }}
                        onMouseEnter={(e) => { e.target.style.color = 'white'; e.target.style.textShadow = '0 0 10px rgba(255,255,255,0.8)'; }}
                        onMouseLeave={(e) => { e.target.style.color = 'rgba(255,255,255,0.6)'; e.target.style.textShadow = 'none'; }}
                    >
                        {social}
                    </a>
                ))}
            </div>

            {/* LIGHT PATH DIVIDER 2 (Intense near the logo source) */}
            <div className="max-w-[1000px] mx-auto px-4 relative">
                {/* Central energy burst source behind logo */}
                <div className="absolute left-1/2 bottom-[-80px] transform -translate-x-1/2 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_60%)] animate-pulse border-none pointer-events-none" />

                <WavyLightPath intense={true} />
            </div>

            {/* BOTTOM BAR & LOGO RADIANT ENERGY */}
            <div className="relative z-30 max-w-[1200px] mx-auto px-10 pb-12 pt-8 flex justify-between items-center gap-4 text-[10px] uppercase tracking-[0.15em] text-white/60">

                {/* Left Side */}
                <div className="flex-1 text-left hover:text-white/90 transition-colors cursor-default">
                    © 2026 E-Cell BMSIT. All rights reserved.
                </div>

                {/* Center Logo - Radiant Source */}
                <div className="flex-1 flex justify-center items-center relative h-[80px]">
                    {/* The radiant E-Cell logo */}
                    <img
                        src={ecellLogo}
                        alt="E-Cell Logo"
                        className="w-16 h-16 object-contain animate-radiate select-none"
                        style={{ filter: "drop-shadow(0 0 10px rgba(255,255,255,0.6))" }}
                    />
                </div>

                {/* Right Side Tagline */}
                <div className="flex-1 text-right tracking-[0.2em] font-medium hidden sm:block">
                    INNOVATE.IDEATE.INSPIRE
                </div>
            </div>

            {/* Ambient Base Light (Fanning out from bottom center) */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-screen h-[400px] bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.06)_0%,rgba(200,180,160,0.02)_40%,transparent_70%)] pointer-events-none z-0" />

        </footer>
    );
};

export default Footer;