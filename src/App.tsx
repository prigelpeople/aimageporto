import React, { useState, createContext, useContext } from 'react';
import { Header, Footer } from './components/layout';
import { HeroSection } from './components/hero';
import { AboutSection } from './components/info';
import { WorkflowSection } from './components/workflow';
import { ImageLightbox } from './components/ui';

interface LightboxContextType {
  openLightbox: (src: string) => void;
}

export const LightboxContext = createContext<LightboxContextType>({ openLightbox: () => {} });

export const useLightbox = () => useContext(LightboxContext);

export default function App() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const openLightbox = (src: string) => setLightboxImage(src);
  const closeLightbox = () => setLightboxImage(null);

  return (
    <LightboxContext.Provider value={{ openLightbox }}>
      <div className="w-full min-h-screen text-slate-900 bg-[#F9F9F9]">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <WorkflowSection />
        </main>
        <Footer />
        <ImageLightbox src={lightboxImage} onClose={closeLightbox} />
      </div>
    </LightboxContext.Provider>
  );
}
