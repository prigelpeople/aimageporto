import React from 'react';
import { motion } from 'framer-motion';
import GalleryItemCard from './GalleryItemCard';

const BASE_URL = import.meta.env.BASE_URL;

interface GalleryItem {
  src: string;
  alt: string;
  title?: string;
  tags?: string[];
}

interface ExtendedGallerySectionProps {
  items?: GalleryItem[];
}

const ExtendedGallerySection: React.FC<ExtendedGallerySectionProps> = ({ items }) => {
  const defaultItems: GalleryItem[] = [
    { src: `${BASE_URL}images/gallery1.jpg`, alt: "Gallery 1", title: "Urban Dreams", tags: ["Portrait", "Editorial"] },
    { src: `${BASE_URL}images/gallery2.jpg`, alt: "Gallery 2", title: "Natural Light", tags: ["Nature", "Lifestyle"] },
    { src: `${BASE_URL}images/gallery3.jpg`, alt: "Gallery 3", title: "Studio Session", tags: ["Fashion", "Studio"] },
    { src: `${BASE_URL}images/gallery4.jpg`, alt: "Gallery 4", title: "Street Style", tags: ["Street", "Documentary"] },
    { src: `${BASE_URL}images/gallery5.jpg`, alt: "Gallery 5", title: "Golden Hour", tags: ["Outdoor", "Portrait"] },
    { src: `${BASE_URL}images/gallery6.jpg`, alt: "Gallery 6", title: "Minimalist", tags: ["Product", "Commercial"] },
  ];

  const displayItems = items || defaultItems;

  return (
    <section className="w-full px-6 md:px-12 py-24 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4 block">
          [Extended Gallery]
        </span>
        <h2 className="text-4xl md:text-6xl font-light tracking-tight text-slate-900">
          Our Latest Work
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayItems.map((item, index) => (
          <GalleryItemCard
            key={index}
            src={item.src}
            alt={item.alt}
            title={item.title}
            tags={item.tags}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ExtendedGallerySection;
