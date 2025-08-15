import React from 'react';
import { motion } from 'framer-motion';

interface PricingOption {
  title: string;
  price: string;
  features: string[];
}

const pricingOptions: PricingOption[] = [
  {
    title: 'Basic Cleaning Package',
    price: '$99',
    features: [
      'One-time deep cleaning',
      'Surface dusting',
      'Vacuuming & mopping',
      'Eco-friendly products'
    ],
  },
  {
    title: 'Standard Cleaning Package',
    price: '$179',
    features: [
      'Weekly cleaning',
      'All Basic features',
      'Bathroom sanitation',
      'Kitchen appliance cleaning'
    ],
  },
  {
    title: 'Premium Cleaning Package',
    price: '$299',
    features: [
      'Bi-weekly cleaning',
      'All Standard features',
      'Window washing',
      'Post-renovation cleaning'
    ],
  },
];

const FAQ = [
  {
    question: 'What products do you use?',
    answer: 'We use eco-friendly and non-toxic cleaning products to ensure safety for your family and pets.',
  },
  {
    question: 'How do I book a service?',
    answer: 'You can book a service directly on our website or contact us through our customer service line.',
  },
  {
    question: 'Are your cleaners insured?',
    answer: 'Yes, all of our cleaners are fully insured and trained to meet our high standards.',
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-10">
      <motion.div 
        className="text-4xl font-bold text-purple-600 mb-6" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        CleanSSR Pricing Plans
      </motion.h1>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ y: 20 }} 
        animate={{ y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        {pricingOptions.map((option) => (
          <div key={option.title} className="border rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-purple-600">{option.title}</h2>
            <p className="text-xl text-gray-700 mt-2">{option.price}</p>
            <ul className="mt-4">
              {option.features.map((feature) => (
                <li key={feature} className="text-gray-600">• {feature}</li>
              ))}
            </ul>
            <button className="mt-6 bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-500 transition-colors">
              Choose Plan
            </button>
          </div>
        ))}
      </motion.div>

      <motion.div 
        className="text-3xl font-bold text-purple-600 mt-12 mb-4" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions
      </motion.h2>
      <div className="mt-4">
        {FAQ.map((item) => (
          <div key={item.question} className="border-b py-4">
            <h3 className="text-lg font-medium text-purple-600">{item.question}</h3>
            <p className="text-gray-600">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;