import React from 'react';
import { motion } from 'framer-motion';

interface MasonryGalleryProps {
  images?: string[];
}

const MasonryGallery: React.FC<MasonryGalleryProps> = ({ images }) => {
  const defaultImages = [
    "https://picsum.photos/seed/masonry1/300/400",
    "https://picsum.photos/seed/masonry2/300/300",
    "https://picsum.photos/seed/masonry3/300/500",
    "https://picsum.photos/seed/masonry4/300/350",
    "https://picsum.photos/seed/masonry5/300/450",
    "https://picsum.photos/seed/masonry6/300/300",
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
          className="break-inside-avoid relative overflow-hidden group"
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
