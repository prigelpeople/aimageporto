import React from 'react';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-6 md:px-12 bg-[#F9F9F9]/90 backdrop-blur-sm transition-all duration-300">
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
          <Menu className="w-6 h-6" />
        </button>
      </div>
      
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <h1 className="text-sm md:text-base font-bold tracking-[0.2em] uppercase">Rachmatulla | PrigelPeople</h1>
      </div>

      <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-gray-500 uppercase tracking-wider">
        <a href="#" className="hover:text-black transition-colors">Home</a>
        <a href="#" className="hover:text-black transition-colors">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
