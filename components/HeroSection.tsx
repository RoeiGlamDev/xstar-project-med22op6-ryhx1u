import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title = "Welcome to CleanSSR", 
  subtitle = "Your technology partner for seamless cleaning solutions.", 
  ctaText = "Get Started", 
  ctaLink = "#services" 
}) => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center">
        <motion.div 
          className="text-5xl font-bold text-purple-600 mb-4"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        <motion.div 
          className="text-xl text-gray-700 mb-8"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
        <motion.div 
          href={ctaLink} 
          className="inline-block px-6 py-3 text-white bg-purple-600 rounded-lg transition duration-300 hover:bg-purple-700"
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {ctaText}
        </motion.a>
        <div className="mt-8">
          <p className="text-sm text-gray-500">Trusted by industry leaders and technology innovators.</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;