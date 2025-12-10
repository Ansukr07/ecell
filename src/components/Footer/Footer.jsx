import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { px } from 'framer-motion';

const Footer = () => {
  return (
    <>
      {/* Add Inter font for modern look */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <footer className="relative bg-rgba(255,255,255,0.15)-900 text-white overflow-hidden" style={{ fontFamily: 'Sora, sans-serif' }}>
        {/* Orange top border */}
        <div className="w-full h-2 bg-orange-500"></div>

        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(156,163,175,3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(156,163,175,3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Main Footer Content */}
        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20">

          {/* Main Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 mb-16">

            {/* Brand Section */}
            <div className="space-y-8">
              <div className="flex items-center justify-center">
                <div className='flex items-center justify-center '>
                  <img src="./src/assets/ecellorange.png" alt="" width="70px" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-3xl tracking-tight">E-CELL</h3>
                  <p className="text-gray-400 text-sm font-medium tracking-wider uppercase mt-1">BMSIT&M</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed text-lg max-w-md font-light">
                Empowering the next generation of entrepreneurs through innovation and collaboration.
              </p>

              <div className="flex space-x-4 justify-center">
                <a href="https://www.instagram.com/ecell.bmsit" className="w-12 h-12 bg-gray-800 hover:bg-orange-500 rounded-xl flex items-center justify-center transition-all duration-300 group" target='blank'>
                  <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.linkedin.com/company/ecellbmsit" className="w-12 h-12 bg-gray-800 hover:bg-orange-500 rounded-xl flex items-center justify-center transition-all duration-300 group" target='blank'>
                  <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Quick Links & Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">

              {/* Quick Links */}
              <div>
                <h4 className="text-white font-semibold mb-8 text-lg">Quick Links</h4>
                <ul className="space-y-4">
                  {[{ name: 'Home', link: "/" }, { name: 'Events', link: '/events' }, { name: 'Alumni', link: '/Alumni' }, { name: 'Team', link: '/team' }].map((item) => (
                    <li key={item.name}>
                      <Link to={item.link} className="text-gray-400 hover:text-orange-400 transition-colors duration-200 font-medium">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-white font-semibold mb-8 text-lg">Contact</h4>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin size={16} className="text-gray-400" />
                    </div>
                    <div>
                      <p className="text-gray-300 font-medium leading-relaxed">
                        BMSIT&M<br />
                        <span className="text-gray-400 text-sm">Bengaluru, Karnataka</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail size={16} className="text-gray-400" />
                    </div>
                    <p className="text-gray-300 font-medium">ecell@bmsit.in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-12"></div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
            <div className="text-center sm:text-left">
              <p className="text-gray-400 font-medium mb-2">
                © 2025 E-CELL BMSIT&M
              </p>
              <p className="text-gray-500 text-sm font-light tracking-wider">
                Ideate • Innovate • Inspire
              </p>
            </div>

            <div className="flex space-x-8">
              <a href="#" className="text-gray-500 hover:text-orange-400 transition-colors duration-200 font-medium">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-400 transition-colors duration-200 font-medium">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;