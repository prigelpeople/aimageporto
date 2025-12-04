import React from 'react';

interface TagPillProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'filled';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const TagPill: React.FC<TagPillProps> = ({ 
  children, 
  variant = 'default', 
  size = 'md',
  className = '' 
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full uppercase tracking-widest font-medium transition-colors duration-300';
  
  const sizeStyles = {
    sm: 'px-2 py-0.5 text-[8px]',
    md: 'px-3 py-1 text-[10px]',
    lg: 'px-5 py-2 text-xs',
  };

  const variantStyles = {
    default: 'bg-white border border-black text-black hover:bg-black hover:text-white',
    outline: 'bg-transparent border border-gray-300 text-gray-600 hover:border-black hover:text-black',
    filled: 'bg-black text-white hover:bg-gray-900',
  };

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default TagPill;
