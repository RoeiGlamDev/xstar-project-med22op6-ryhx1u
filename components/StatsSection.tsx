import React from 'react';
import { motion } from 'framer-motion';

interface StatsItem {
  title: string;
  value: number;
  description: string;
}

const statsData: StatsItem[] = [
  {
    title: 'Clients Served',
    value: 1500,
    description: 'Happy clients benefiting from CleanSSR services.',
  },
  {
    title: 'Projects Completed',
    value: 300,
    description: 'Successfully completed projects in various sectors.',
  },
  {
    title: 'Awards Won',
    value: 10,
    description: 'Recognized for excellence in technology and service.',
  },
  {
    title: 'Years of Experience',
    value: 5,
    description: 'Five years of expertise in cleaning technology solutions.',
  },
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-600 mb-8">
          CleanSSR Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-purple-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-3xl font-semibold text-purple-600">
                {stat.value}
              </h3>
              <h4 className="text-xl text-gray-700">{stat.title}</h4>
              <p className="text-gray-500">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;