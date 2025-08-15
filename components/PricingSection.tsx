import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  title: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    title: 'Basic Tech Cleanup',
    price: '$99/month',
    features: [
      'Basic System Optimization',
      'Monthly Performance Reports',
      'Email Support',
    ],
  },
  {
    title: 'Advanced Tech Maintenance',
    price: '$199/month',
    features: [
      'Advanced System Cleanup',
      'Weekly Performance Reports',
      'Priority Email Support',
      'Malware Protection',
    ],
  },
  {
    title: 'Premium Tech Overhaul',
    price: '$299/month',
    features: [
      'Complete System Overhaul',
      'Daily Performance Monitoring',
      '24/7 Support',
      'Custom Solutions',
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-4xl font-bold text-purple-600 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          CleanSSR Pricing Plans
        </motion.h2>
        <motion.div
          className="text-lg text-gray-600 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Choose the best plan that fits your technology needs. Each plan is designed to provide optimal performance and support.
        </motion.p>
        <div className="flex justify-center space-x-4">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-purple-50 rounded-lg shadow-lg p-6 w-72 transition-transform transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">{tier.title}</h3>
              <p className="text-3xl font-bold text-purple-600 mb-4">{tier.price}</p>
              <ul className="text-left mb-6">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-700 mb-2">
                    - {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;