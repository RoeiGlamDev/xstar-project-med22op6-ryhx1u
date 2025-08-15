import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

const features = [
  {
    title: 'Smart Cleaning Solutions',
    description: 'Leverage cutting-edge technology to achieve sparkling results with minimal effort.',
  },
  {
    title: 'Eco-Friendly Products',
    description: 'Utilize sustainable and safe cleaning solutions for a healthier environment.',
  },
  {
    title: 'Reliable Support',
    description: 'Our dedicated team is here to assist you with any queries or assistance you may need.',
  },
];

const reviews = [
  {
    name: 'Jessica Taylor',
    feedback: 'CleanSSR transformed my home! Their attention to detail is unmatched.',
  },
  {
    name: 'Daniel Brown',
    feedback: 'A hassle-free experience. I love their use of technology in cleaning!',
  },
  {
    name: 'Sophia Johnson',
    feedback: 'Amazing service! My office has never looked better, and it feels healthier too.',
  },
];

const Page: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen bg-white text-purple-700"
    >
      <header className="w-full p-6 bg-purple-600 text-white text-center">
        <h1 className="text-4xl font-bold">Welcome to CleanSSR</h1>
        <p className="mt-2 text-lg">Your trusted partner in high-tech cleaning solutions.</p>
      </header>

      <section className="w-full p-8 bg-white">
        <h2 className="text-3xl font-semibold text-purple-600 text-center">Our Features</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="p-4 border border-purple-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-purple-600">{feature.title}</h3>
              <p className="mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full p-8 bg-purple-100">
        <h2 className="text-3xl font-semibold text-purple-600 text-center">Client Reviews</h2>
        <div className="mt-6 space-y-4">
          {reviews.map((review, index) => (
            <div key={index} className="p-4 bg-white border border-purple-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <p className="font-semibold">{review.name}</p>
              <p className="mt-2 italic">"{review.feedback}"</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="w-full p-6 bg-purple-600 text-white text-center">
        <p>&copy; 2023 CleanSSR. All rights reserved.</p>
      </footer>
    </motion.div>
  );
};

export default Page;