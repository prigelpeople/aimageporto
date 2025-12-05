import React from 'react';
import { motion } from 'framer-motion';
import { useLightbox } from '../../App';

const BASE_URL = import.meta.env.BASE_URL;

interface MasonryGalleryProps {
  images?: string[];
}

const MasonryGallery: React.FC<MasonryGalleryProps> = ({ images }) => {
  const { openLightbox } = useLightbox();
  
  const defaultImages = [
    `${BASE_URL}images/masonry1.jpg`,
    `${BASE_URL}images/masonry2.jpg`,
    `${BASE_URL}images/masonry3.jpg`,
    `${BASE_URL}images/masonry4.jpg`,
    `${BASE_URL}images/masonry5.jpg`,
    `${BASE_URL}images/masonry6.jpg`,
  ];

  const displayImages = images || defaultImages;

  return (
    <div className="columns-2 md:columns-3 gap-3 space-y-3">
      {displayImages.map((src, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="break-inside-avoid relative overflow-hidden group cursor-zoom-in"
          onClick={() => openLightbox(src)}
        >
          <img
            src={src}
            alt={`Gallery item ${i + 1}`}
            className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default MasonryGallery;
