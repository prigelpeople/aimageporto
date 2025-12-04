import React, { useRef } from 'react';
import { Play } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yLeft = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yRight = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen pt-24 pb-8 px-6 md:px-12 flex flex-col justify-between overflow-hidden bg-[#F9F9F9]">
      
      {/* Top Section: Images and Center Text */}
      <div className="flex flex-col md:flex-row justify-between items-start w-full relative flex-grow">
        
        {/* Left Image */}
        <motion.div 
          style={{ y: yLeft }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full md:w-[22%] mb-8 md:mb-0 z-10 md:mt-12"
        >
          <div className="aspect-[4/5] overflow-hidden">
            <img 
              src="https://picsum.photos/seed/photographer/600/800" 
              alt="Photographer" 
              className="w-full h-full object-cover transition-all duration-700 ease-[0.22,1,0.36,1] hover:scale-105 will-change-transform"
            />
          </div>
        </motion.div>

        {/* Center Typography */}
        <motion.div 
          style={{ y: yText }}
          className="flex-1 flex flex-col items-center justify-center text-center z-20 relative mt-8 md:mt-24 mix-blend-multiply pointer-events-none"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <h2 className="text-[11vw] md:text-[8vw] lg:text-[7.5vw] font-medium tracking-tighter leading-[0.8] text-slate-900">
              TRANSFORM
            </h2>
            <div className="flex items-center justify-center gap-2 md:gap-4 -my-1 md:-my-2">
                 <h2 className="text-[11vw] md:text-[8vw] lg:text-[7.5vw] font-light italic tracking-tighter leading-[0.8] text-slate-900">
                    CREATIVITY
                 </h2>
                 <span className="border border-black px-3 py-1 md:px-5 md:py-2 text-[10px] md:text-xs rounded-full uppercase tracking-widest bg-white z-30 pointer-events-auto hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer">
                    Projects
                 </span>
            </div>
            <h2 className="text-[11vw] md:text-[8vw] lg:text-[7.5vw] font-medium tracking-tighter leading-[0.8] text-slate-900">
              STYLE
            </h2>
            <h2 className="text-[11vw] md:text-[8vw] lg:text-[7.5vw] font-medium tracking-tighter leading-[0.8] text-slate-900">
              PROFESSIONALISM
            </h2>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          style={{ y: yRight }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full md:w-[22%] flex justify-end mt-8 md:mt-48 z-10"
        >
          <div className="w-2/3 aspect-[3/4] overflow-hidden">
            <img 
              src="https://picsum.photos/seed/sunglasses/600/400" 
              alt="Model" 
              className="w-full h-full object-cover transition-all duration-700 ease-[0.22,1,0.36,1] hover:scale-105 will-change-transform"
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="relative mt-8 md:mt-0 z-20 pb-4 md:pb-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 md:gap-12">
          
          {/* Bottom Left Text */}
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="w-full md:w-1/4 text-xs md:text-sm text-gray-500 leading-relaxed text-justify"
          >
            <p>
              A creative studio that creates visual meanings for brands and people. We help businesses speak the language of form, space, and typography. Minimal noise — maximum ideas.
            </p>
          </motion.div>

          {/* Bottom Right Interactive */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3 flex items-center gap-6"
          >
            <button className="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300 group flex-shrink-0 cursor-pointer">
              <Play className="w-5 h-5 fill-current ml-1" />
            </button>
            <p className="text-sm text-gray-600">
              Just write it down, and we will thoughtfully transform your idea into a visual form.
            </p>
          </motion.div>
        </div>

        {/* Giant Text Overlay */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute bottom-0 left-0 w-full text-center pointer-events-none mix-blend-overlay opacity-20 md:translate-y-1/4"
        >
          <h1 className="text-[16vw] leading-[0.75] font-semibold text-gray-200 tracking-tighter">
            Design<br />
            <span className="ml-[15%]">With Intent</span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
