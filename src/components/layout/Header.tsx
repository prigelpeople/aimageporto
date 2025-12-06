import React, { useState, useEffect } from 'react';

const BASE_URL = import.meta.env.BASE_URL;

const Header: React.FC = () => {
  const [showPulse, setShowPulse] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPulse(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 pt-4 md:pt-6">
      <nav className="flex items-center justify-between w-full max-w-4xl bg-white rounded-full px-6 py-3 md:px-8 md:py-4 shadow-[0_2px_20px_rgba(0,0,0,0.08)]">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img 
            src={`${BASE_URL}logos/logo-prigel.png`}
            alt="PrigelPeople" 
            className="h-8 md:h-10 w-auto"
          />
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
            
          </a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
            
          </a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
            
          </a>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
            
          </a>
        </div>

        {/* CTA Button */}
        <a 
          href="https://www.instagram.com/prigelpeople/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-gray-100 hover:bg-black text-black hover:text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300"
        >
          {showPulse && <span className="absolute inset-0 rounded-full bg-gray-400/50 animate-ping" />}
          <span className="relative">Contact Us</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
