import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: Feature[] = [
  {
    title: 'Advanced Cleaning Technology',
    description: 'At CleanSSR, we leverage cutting-edge technology to provide the most efficient cleaning solutions.',
    icon: <i className="fas fa-cogs text-purple-500"></i>,
  },
  {
    title: 'Eco-Friendly Solutions',
    description: 'Our cleaning products are environmentally friendly, ensuring safety for your home and the planet.',
    icon: <i className="fas fa-leaf text-purple-500"></i>,
  },
  {
    title: 'Real-Time Tracking',
    description: 'Stay informed with our real-time tracking system, allowing you to monitor the cleaning progress.',
    icon: <i className="fas fa-clock text-purple-500"></i>,
  },
  {
    title: 'Customer-Centric Approach',
    description: 'At CleanSSR, we prioritize your needs, offering customized cleaning plans tailored just for you.',
    icon: <i className="fas fa-users text-purple-500"></i>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-purple-500 text-center mb-10">Our Technology Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-purple-100 p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-purple-500">{feature.title}</h3>
              <p className="text-gray-700 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;