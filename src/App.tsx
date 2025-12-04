import React from 'react';
import { Header, Footer } from './components/layout';
import { HeroSection } from './components/hero';
import { AboutSection } from './components/info';
import { WorkflowSection } from './components/workflow';

export default function App() {
  return (
    <div className="w-full min-h-screen text-slate-900 bg-[#F9F9F9]">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WorkflowSection />
      </main>
      <Footer />
    </div>
  );
}
