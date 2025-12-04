import React from 'react';
import { motion } from 'framer-motion';

interface GalleryItemCardProps {
  src: string;
  alt: string;
  title?: string;
  tags?: string[];
  index?: number;
}

const GalleryItemCard: React.FC<GalleryItemCardProps> = ({ src, alt, title, tags, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden"
    >
      <div className="aspect-[4/5] overflow-hidden bg-gray-100">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />
      </div>
      {(title || tags) && (
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex flex-col justify-end p-4">
          <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            {title && (
              <h4 className="text-white text-lg font-medium mb-2">{title}</h4>
            )}
            {tags && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <span key={i} className="text-xs text-white/80 bg-white/20 px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default GalleryItemCard;
