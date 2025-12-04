import React from 'react';

interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ orientation = 'horizontal', className = '' }) => {
  const baseStyles = orientation === 'horizontal' 
    ? 'w-full h-px' 
    : 'h-full w-px';

  return (
    <div className={`${baseStyles} bg-gray-200 ${className}`} />
  );
};

export default Divider;
