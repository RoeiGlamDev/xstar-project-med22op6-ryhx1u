import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  photo: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Alex Johnson',
    position: 'CTO',
    company: 'Tech Innovations',
    content: 'CleanSSR has transformed our technology stack with their innovative solutions. Their attention to detail is unmatched!',
    rating: 5,
    photo: '/images/alex.jpg',
  },
  {
    id: 2,
    name: 'Maria Smith',
    position: 'Product Manager',
    company: 'Future Tech',
    content: 'The efficiency and reliability of CleanSSR’s services have greatly improved our workflow and productivity.',
    rating: 4,
    photo: '/images/maria.jpg',
  },
  {
    id: 3,
    name: 'David Brown',
    position: 'CEO',
    company: 'NextGen Solutions',
    content: 'With CleanSSR, we have achieved remarkable results. Their team understands technology and delivers exceptional value.',
    rating: 5,
    photo: '/images/david.jpg',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="text-3xl font-semibold text-purple-600 text-center mb-8"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        What Our Clients Say About CleanSSR
      </motion.h2>
      <div className="max-w-5xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map(({ id, name, position, company, content, rating, photo }) => (
          <motion.div 
            key={id} 
            className="bg-purple-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            <img src={photo} alt={name} className="w-16 h-16 rounded-full mb-4" />
            <h3 className="text-lg font-semibold text-purple-600">{name}</h3>
            <p className="text-gray-600">{position} at {company}</p>
            <p className="text-gray-700 my-4">{content}</p>
            <div className="flex items-center">
              {[...Array(rating)].map((_, index) => (
                <svg key={index} className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.121-6.568L1 6.91l6.568-.955L10 0l2.432 5.955L19 6.91l-4.243 4.612 1.121 6.568z"/></svg>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;