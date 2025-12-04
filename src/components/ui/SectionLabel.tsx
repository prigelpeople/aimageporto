import React from 'react';

interface SectionLabelProps {
  children: React.ReactNode;
  number?: string;
  className?: string;
}

const SectionLabel: React.FC<SectionLabelProps> = ({ children, number, className = '' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {number && (
        <span className="text-xs font-bold tracking-widest text-gray-400">[{number}]</span>
      )}
      <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
        {children}
      </span>
    </div>
  );
};

export default SectionLabel;
