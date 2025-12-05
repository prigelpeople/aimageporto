import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MasonryGallery } from '../hero';
import { useLightbox } from '../../App';

const BASE_URL = import.meta.env.BASE_URL;

const AboutSection: React.FC = () => {
  const { openLightbox } = useLightbox();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const yImg1 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const yImg2 = useTransform(scrollYProgress, [0, 1], ["30%", "-15%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["20%", "-10%"]);

  return (
    <section ref={sectionRef} className="w-full min-h-screen px-6 md:px-12 py-24 flex flex-col md:flex-row gap-12 md:gap-24 overflow-hidden bg-[#F9F9F9] relative z-10">
      
      {/* Left Column: Team/Images */}
      <div className="w-full md:w-1/2 flex flex-col relative h-full">
        <div className="relative pt-12 md:pt-0">
            <span className="absolute -top-6 md:-top-12 left-0 text-xs font-bold tracking-widest">[01]</span>
            <div className="flex gap-4 items-end">
                <motion.div 
                    style={{ y: yImg1 }}
                    className="w-2/3 aspect-[3/4] overflow-hidden cursor-zoom-in"
                    onClick={() => openLightbox(`${BASE_URL}images/blonde1.jpg`)}
                >
                    <img 
                      src={`${BASE_URL}images/blonde1.jpg`}
                      alt="Sophia Portrait" 
                      className="w-full h-full object-cover transition-all duration-700 ease-[0.22,1,0.36,1] hover:scale-105 will-change-transform" 
                    />
                </motion.div>
                <motion.div 
                     style={{ y: yImg2 }}
                     className="w-1/3 aspect-[3/4] overflow-hidden mb-12 cursor-zoom-in"
                     onClick={() => openLightbox(`${BASE_URL}images/blonde2.jpg`)}
                >
                    <img 
                      src={`${BASE_URL}images/blonde2.jpg`}
                      alt="Sophia Detail" 
                      className="w-full h-full object-cover transition-all duration-700 ease-[0.22,1,0.36,1] hover:scale-105 will-change-transform" 
                    />
                </motion.div>
            </div>
        </div>

        <div className="mt-16 md:mt-24 flex flex-col gap-8">
            <div>
                <h3 className="text-4xl md:text-5xl font-light uppercase tracking-wide leading-tight">Rachmatulla</h3>
                <p className="text-xs text-gray-400 mt-3 uppercase tracking-widest font-medium">[Creative Director]</p>
            </div>
            
            <div className="flex gap-4">
                <button className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300">
                    <ArrowLeft className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300">
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>

            <div>
                <p className="text-sm text-gray-500 max-w-xs mt-4 leading-relaxed">
                    Our focus is not just on photos, but on creating an atmosphere that stays in your memory.
                </p>
                <div className="mt-8">
                    <MasonryGallery />
                </div>
            </div>
        </div>
      </div>

      {/* Right Column: Text Content */}
      <motion.div 
        style={{ y: yText }}
        className="w-full md:w-1/2 flex flex-col justify-between md:min-h-[80vh] relative pt-24 md:pt-48"
      >
         <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="self-end text-right max-w-[240px] mb-12 md:mb-0"
         >
            <p className="text-xs text-gray-400 leading-relaxed uppercase tracking-wider">
                An AI-powered creative studio that makes your imagination real. From concept to hyper-real visuals, we craft images that drive impact and elevate your brand.<br/>
                [EST. 2025]
            </p>
         </motion.div>

         <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="my-auto flex items-start gap-6"
         >
             <h2 className="text-[12vw] md:text-[7vw] font-normal leading-[0.9] text-slate-900 tracking-tighter">
                 We Design<br/>
                 The Story<br/>
                 <span className="text-gray-300">Behind Every<br/>Frame</span>
             </h2>
             
             {/* Feature Image */}
             <div 
               className="hidden md:block w-[280px] lg:w-[350px] aspect-[4/3] overflow-hidden cursor-zoom-in flex-shrink-0 mt-8"
               onClick={() => openLightbox(`${BASE_URL}images/gallery1.jpg`)}
             >
               <img 
                 src={`${BASE_URL}images/gallery1.jpg`}
                 alt="Creative vision" 
                 className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
               />
             </div>
         </motion.div>

         {/* Image Grid - 3 images layout */}
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-3 mt-8"
         >
            {/* Large image left */}
            <div 
              className="w-1/2 aspect-[3/4] overflow-hidden cursor-zoom-in"
              onClick={() => openLightbox(`${BASE_URL}images/wolf.jpg`)}
            >
              <img 
                src={`${BASE_URL}images/wolf.jpg`}
                alt="Studio work" 
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              />
            </div>
            {/* Two stacked images right */}
            <div className="w-1/2 flex flex-col gap-3">
              <div 
                className="flex-1 overflow-hidden cursor-zoom-in"
                onClick={() => openLightbox(`${BASE_URL}images/horse.jpg`)}
              >
                <img 
                  src={`${BASE_URL}images/horse.jpg`}
                  alt="Creative process" 
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                />
              </div>
              <div 
                className="h-[45%] overflow-hidden cursor-zoom-in"
                onClick={() => openLightbox(`${BASE_URL}images/desert.jpg`)}
              >
                <img 
                  src={`${BASE_URL}images/desert.jpg`}
                  alt="Behind the scenes" 
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                />
              </div>
            </div>
         </motion.div>

         <div className="flex justify-end mt-8">
            <p className="text-xs font-bold uppercase tracking-widest max-w-[200px] text-right leading-relaxed">
                We create images that speak without words. From concept to final frame, everything is done with precision, meaning, and style.
            </p>
         </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
