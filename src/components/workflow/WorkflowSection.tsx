import React, { useState, useRef, useEffect } from 'react';
import { MoveHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';
import WorkflowStep from './WorkflowStep';
import { VariableProximity } from '../ui';

const BASE_URL = import.meta.env.BASE_URL;

const LogoMarquee: React.FC = () => {
  const logos = [
    { 
      name: "GOOGLE GEMINI", 
      logo: `${BASE_URL}logos/gemini.svg`
    },
    { 
      name: "SEEDREAMS", 
      logo: `${BASE_URL}logos/seedreams.svg`
    },
    { 
      name: "FLUX", 
      logo: `${BASE_URL}logos/flux.svg`
    },
    { 
      name: "COMFYUI", 
      logo: `${BASE_URL}logos/comfyui.svg`
    },
    { 
      name: "MIDJOURNEY", 
      logo: `${BASE_URL}logos/midjourney.svg`
    },
  ];

  const marqueeContent = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="w-full bg-black border-y border-gray-800 py-6 md:py-8 overflow-hidden relative z-20">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />
      <motion.div 
        className="flex items-center gap-12 md:gap-24 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: 30 
        }}
      >
        {marqueeContent.map((logo, index) => (
          <div key={index} className="flex items-center gap-3 md:gap-4 text-white group cursor-default hover:scale-105 transition-transform duration-300">
            <img 
              src={logo.logo} 
              alt={logo.name}
              className="w-6 h-6 md:w-8 md:h-8 object-contain"
              style={{ filter: 'brightness(0) invert(1)' }}
              loading="lazy"
            />
            <span className="text-lg md:text-2xl font-bold tracking-[0.2em] uppercase">{logo.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleTouchStart = () => setIsDragging(true);

  useEffect(() => {
    const handleWindowMove = (e: MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    };
    const handleWindowUp = () => setIsDragging(false);
    
    const handleWindowTouchMove = (e: TouchEvent) => {
        if (isDragging) handleMove(e.touches[0].clientX);
    };
    const handleWindowTouchEnd = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('mousemove', handleWindowMove);
      window.addEventListener('mouseup', handleWindowUp);
      window.addEventListener('touchmove', handleWindowTouchMove);
      window.addEventListener('touchend', handleWindowTouchEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleWindowMove);
      window.removeEventListener('mouseup', handleWindowUp);
      window.removeEventListener('touchmove', handleWindowTouchMove);
      window.removeEventListener('touchend', handleWindowTouchEnd);
    };
  }, [isDragging]);

  return (
    <div 
        ref={containerRef} 
        className="relative w-full h-[60vh] md:h-[85vh] overflow-hidden cursor-ew-resize select-none bg-gray-900"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
    >
      <img 
        src={`${BASE_URL}images/compare2.jpg`}
        alt="After" 
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />
      
       <div className="absolute top-8 right-6 md:right-12 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full z-10 pointer-events-none">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-white">PROCESSED</span>
       </div>

      <div 
        className="absolute inset-0 w-full h-full"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
            src={`${BASE_URL}images/compare1.jpg`}
            alt="Before" 
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
        />
        <div className="absolute top-8 left-6 md:left-12 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full z-10 pointer-events-none">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-white">RAW SOURCE</span>
        </div>
      </div>

      <div 
        className="absolute top-0 bottom-0 w-[1px] bg-white cursor-ew-resize z-20"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] transform active:scale-90 transition-transform hover:bg-white/20">
             <MoveHorizontal className="w-5 h-5 text-white" />
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-black/50 text-xs tracking-widest pointer-events-none"
      >
        DRAG TO COMPARE
      </motion.div>
    </div>
  );
};

const WorkflowSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  const steps = [
{ 
  id: 1, 
  title: 'Decode the Brief',
  description: "We begin by understanding your ideas, exploring creative directions, and shaping moodboards that transform imagination into a clear visual identity powered by AI."
},
{ 
  id: 2, 
  title: 'Sample First Look',
  description: "We generate sample images through AI workflows, experimenting with styles, compositions, and tones to provide you with tangible previews that capture the essence of your imagination."
},
{ 
  id: 3, 
  title: 'Final Glow Up',
  description: "We refine and craft the final image, polishing every detail with precision so that the outcome not only reflects your vision but also delivers a professional, immersive visual experience."
},
{ 
  id: 4, 
  title: 'Upscaling and Boost',
  description: "Using advanced upscaling techniques, we enhance resolution, texture, and clarity, ensuring your visuals achieve hyper‑real quality that is ready for both digital and physical applications.",
},
{ 
  id: 5, 
  title: 'Deliver & Feedback Loop',
  description: "Finally, we deliver the completed visuals and gather your feedback, making adjustments where needed to guarantee that the final result fully embodies your expectations and creative intent."
}

  ];

  return (
    <section className="w-full bg-black text-white pb-12 md:pb-16 min-h-screen flex flex-col justify-between overflow-hidden relative">
      
      <BeforeAfterSlider />
      <LogoMarquee />

      <div className="px-6 md:px-12 flex flex-col flex-grow pt-16 md:pt-24">
        
        <div ref={textContainerRef} className="w-full flex-grow flex flex-col justify-center mb-12 relative z-10">
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[10vw] md:text-[7vw] lg:text-[7.5vw] font-medium leading-[0.9] tracking-tighter uppercase w-full max-w-[90vw] mx-auto md:mx-0"
            >
                <div className="flex flex-wrap items-center gap-x-3 md:gap-x-6">
                    <VariableProximity
                      label="HERE"
                      containerRef={textContainerRef}
                      radius={100}
                      falloff="gaussian"
                      fromFontVariationSettings="'wght' 400"
                      toFontVariationSettings="'wght' 900"
                      className="text-[10vw] md:text-[7vw] lg:text-[7.5vw] leading-[0.9] tracking-tighter uppercase"
                    />
                    <span className="inline-block w-[12vw] h-[8vw] md:w-[6.5vw] md:h-[4.5vw] overflow-hidden rounded-md bg-gray-800 self-center mt-1 md:mt-2 transform rotate-2">
                        <img src={`${BASE_URL}images/concert.jpg`} className="w-full h-full object-cover opacity-80 hover:scale-110 transition-transform duration-500" alt="icon" />
                    </span>
                    <VariableProximity
                      label="BECOMES YOUR"
                      containerRef={textContainerRef}
                      radius={100}
                      falloff="gaussian"
                      fromFontVariationSettings="'wght' 400"
                      toFontVariationSettings="'wght' 900"
                      className="text-[10vw] md:text-[7vw] lg:text-[7.5vw] leading-[0.9] tracking-tighter uppercase"
                    />
                </div>

                <div className="flex flex-wrap items-center gap-x-3 md:gap-x-6">
                    <VariableProximity
                      label="VISUAL STORY"
                      containerRef={textContainerRef}
                      radius={100}
                      falloff="gaussian"
                      fromFontVariationSettings="'wght' 400"
                      toFontVariationSettings="'wght' 900"
                      className="text-[10vw] md:text-[7vw] lg:text-[7.5vw] leading-[0.9] tracking-tighter uppercase"
                    />
                    <span className="inline-block w-[16vw] h-[10vw] md:w-[9vw] md:h-[5.5vw] overflow-hidden rounded-md bg-gray-800 self-center mt-1 md:mt-2 -rotate-2">
                        <img src={`${BASE_URL}images/nature.jpg`} className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-500" alt="visual" />
                    </span>
                    <VariableProximity
                      label="A"
                      containerRef={textContainerRef}
                      radius={100}
                      falloff="gaussian"
                      fromFontVariationSettings="'wght' 400"
                      toFontVariationSettings="'wght' 900"
                      className="text-[10vw] md:text-[7vw] lg:text-[7.5vw] leading-[0.9] tracking-tighter uppercase"
                    />
                </div>
                
                <div className="flex flex-wrap items-center gap-x-3 md:gap-x-6 align-middle">
                    <VariableProximity
                      label="LASTING"
                      containerRef={textContainerRef}
                      radius={100}
                      falloff="gaussian"
                      fromFontVariationSettings="'wght' 400"
                      toFontVariationSettings="'wght' 900"
                      className="text-[10vw] md:text-[7vw] lg:text-[7.5vw] leading-[0.9] tracking-tighter uppercase"
                    />
                    <div className="inline-block w-auto max-w-[150px] md:max-w-[260px] self-center mt-1 md:mt-3">
                        <p className="text-[9px] md:text-xs lg:text-sm font-normal tracking-normal normal-case leading-tight text-gray-400 text-justify">
                            This concept was designed to embody the essence of modern photography, reimagined through the lens of AI.
                        </p>
                    </div>
                    <VariableProximity
                      label="IMPRESSION"
                      containerRef={textContainerRef}
                      radius={100}
                      falloff="gaussian"
                      fromFontVariationSettings="'wght' 400"
                      toFontVariationSettings="'wght' 900"
                      className="text-[10vw] md:text-[7vw] lg:text-[7.5vw] leading-[0.9] tracking-tighter uppercase"
                    />
                </div>
            </motion.div>
            
            <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 md:mt-16 ml-1"
            >
                <p className="text-sm text-gray-400 font-light">
                    Step-by-step approach to bring your vision to life.
                </p>
            </motion.div>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-start border-t border-gray-800 pt-8 mt-auto z-10">
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
                <motion.h3 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-light leading-tight tracking-tight mb-2"
                >
                    Our Comprehensive<br/>
                    Creative Process Includes
                </motion.h3>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col">
                {steps.map((step, index) => (
                    <WorkflowStep
                        key={step.id}
                        step={step}
                        index={index}
                        isActive={activeStep === index}
                        onToggle={() => setActiveStep(activeStep === index ? null : index)}
                    />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
