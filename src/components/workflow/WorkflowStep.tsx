import React from 'react';
import { ArrowDownRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface WorkflowStepProps {
  step: {
    id: number;
    title: string;
    description: string;
    images?: string[];
  };
  index: number;
  isActive: boolean;
  onToggle: () => void;
}

const WorkflowStep: React.FC<WorkflowStepProps> = ({ step, index, isActive, onToggle }) => {
  return (
    <motion.div 
      className={`border-b border-gray-800 last:border-0 transition-colors duration-300 ${isActive ? 'bg-gray-900/40' : 'bg-transparent'}`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <button 
        onClick={onToggle}
        className="w-full py-5 md:py-6 flex items-start md:items-center justify-between group text-left relative"
      >
        <div className="hidden md:block absolute inset-0 bg-gray-800/0 group-hover:bg-gray-800/20 transition-colors duration-300 pointer-events-none" />

        <div className="flex items-start md:items-center gap-4 md:gap-8 relative z-10 pr-4 flex-1">
          <span className="text-xs md:text-sm text-gray-500 font-mono mt-1 md:mt-0 min-w-[24px]">
            0{step.id}
          </span>
          <span className={`text-lg md:text-2xl uppercase tracking-wider font-light transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
            {step.title}
          </span>
        </div>

        <div className={`relative z-10 w-8 h-8 md:w-10 md:h-10 flex-shrink-0 flex items-center justify-center rounded-full border transition-all duration-300 ${isActive ? 'bg-white border-white text-black' : 'border-gray-700 text-gray-500 group-hover:border-gray-500'}`}>
          <ArrowDownRight className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-500 ${isActive ? 'rotate-0' : '-rotate-90'}`} />
        </div>
      </button>
      
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="px-2 md:px-0 md:pl-[3.5rem] pb-8 pt-2">
              <p className="text-gray-400 text-sm md:text-base mb-6 max-w-lg leading-relaxed">
                {step.description}
              </p>

              {step.images && (
                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 touch-pan-x mb-2">
                  {step.images.map((img, i) => (
                    <div key={i} className="min-w-[150px] md:min-w-[200px] aspect-[3/4] bg-gray-800 overflow-hidden relative shrink-0">
                      <img src={img} alt="Process" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white cursor-pointer group/link w-fit">
                <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center group-hover/link:scale-110 transition-transform duration-300">
                  <ArrowRight className="w-4 h-4" />
                </div>
                <span className="group-hover/link:translate-x-1 transition-transform duration-300">View Details</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default WorkflowStep;
