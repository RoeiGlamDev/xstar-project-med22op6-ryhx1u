import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  content: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, content, imageUrl }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 mx-4 my-4 transition-transform duration-300 transform hover:scale-105"
      style={{
        backdropFilter: ''blur(10px)'',
        border: ''1px solid rgba(255', 255, 255, 0.3)',
      }}
      whileHover={{ scale: 1.05 }}
    >
      <img src={imageUrl} alt={title} className="rounded-md w-full h-32 object-cover mb-4" />
      <h2 className="text-purple-600 text-xl font-semibold">{title}</h2>
      <p className="text-gray-700 mt-2">{content}</p>
    </motion.div>
  );
};

export default Card;