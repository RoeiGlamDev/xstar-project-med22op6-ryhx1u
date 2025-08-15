import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "Transform Your Space with CleanSSR",
  description = "Experience the future of cleaning technology with CleanSSR. Our innovative solutions ensure a spotless environment while being eco-friendly and efficient. Join the revolution in cleanliness.",
  buttonText = "Get Started",
}) => {
  return (
    <section className="flex flex-col items-center justify-center bg-white p-10">
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-purple-600">{title}</h2>
        <p className="text-gray-700 mt-4">{description}</p>
      </motion.div>
      <motion.div
        href="#contact"
        className="inline-block bg-purple-600 text-white font-semibold py-2 px-6 rounded transition duration-300 ease-in-out hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {buttonText}
      </motion.a>
    </section>
  );
};

export default CTASection;