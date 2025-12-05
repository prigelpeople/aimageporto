import React from 'react';

const BASE_URL = import.meta.env.BASE_URL;

const Header: React.FC = () => {
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
          href="#" 
          className="bg-gray-100 hover:bg-gray-200 text-black text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
        >
          Contact Us
        </a>
      </nav>
    </header>
  );
};

export default Header;
