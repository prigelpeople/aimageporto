import React from 'react';
import { TextPressure } from '../ui';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black text-white relative overflow-hidden">
      {/* Large Background Text */}
      <div className="relative py-16 md:py-24">
        <div className="h-[20vw] md:h-[15vw]">
          <TextPressure
            text="PRIGEL PEOPLE"
            textColor="rgba(255,255,255,0.8)"
            weight={true}
            width={true}
            italic={false}
            flex={true}
            minFontSize={48}
          />
        </div>
      </div>

      {/* Footer Content */}
      <div className="border-t border-white/20 px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Column 1 - Contact */}
          <div className="flex flex-col gap-3">
            <a href="mailto:hello@purecontrast.co" className="text-lg md:text-xl hover:text-white/70 transition-colors">
              hello@purecontrast.co
            </a>
            <a href="#" className="text-lg md:text-xl hover:text-white/70 transition-colors">
              X
            </a>
            <a href="#" className="text-lg md:text-xl hover:text-white/70 transition-colors">
              LinkedIn
            </a>
          </div>

          {/* Column 2 - Links */}
          <div className="flex flex-col gap-3">
            <a href="#" className="text-lg md:text-xl hover:text-white/70 transition-colors">
              Portfolio
            </a>
            <a href="#" className="text-lg md:text-xl hover:text-white/70 transition-colors">
              Services
            </a>
            <a href="#" className="text-lg md:text-xl hover:text-white/70 transition-colors">
              About Us
            </a>
          </div>

          {/* Column 3 - Location */}
          <div className="flex flex-col gap-3">
            <p className="text-lg md:text-xl">
              Nganjuk, East Java, Indonesia
            </p>
            <p className="text-lg md:text-xl">
              Available Worldwide
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-sm text-white/60">
                Crafted with passion. Operating globally.
              </p>
              <p className="text-sm text-white/60">
                Some rights reserved, all work considered.
              </p>
              <p className="text-sm text-white/60">
                &copy; {new Date().getFullYear()}, Pure Contrast.
              </p>
            </div>
            <p className="text-xs text-white/40 md:text-right max-w-xs">
              Pure Contrast is a creative studio specializing in AI-generated photography and visual storytelling.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
