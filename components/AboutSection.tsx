import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  expertise: string;
}

const teamMembers: TeamMember[] = [
  { name: 'Alice Johnson', role: 'CEO', expertise: 'Technology Strategy' },
  { name: 'Bob Smith', role: 'CTO', expertise: 'Software Development' },
  { name: 'Clara Davis', role: 'CMO', expertise: 'Digital Marketing' },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white text-purple-600 py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-8">About CleanSSR</h2>
        <p className="text-lg mb-6">
          CleanSSR is a pioneering technology company focused on delivering 
          innovative cleaning solutions through cutting-edge technology. Our mission 
          is to revolutionize the cleaning industry by integrating smart solutions 
          that enhance efficiency and sustainability. We believe that technology 
          can transform traditional practices into modern, eco-friendly approaches.
        </p>
        
        <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
        <p className="mb-6">
          At CleanSSR, our mission is to provide seamless, sustainable, and 
          high-tech cleaning solutions that not only meet but exceed our clients’ 
          expectations. We are committed to leveraging the latest advancements in 
          technology to create solutions that are efficient, effective, and 
          environmentally friendly.
        </p>
        
        <h3 className="text-2xl font-semibold mb-4">Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div 
              key={member.name} 
              className="bg-purple-600 text-white p-4 rounded-lg transition-transform transform hover:scale-105"
            >
              <h4 className="text-xl font-bold">{member.name}</h4>
              <p className="font-semibold">{member.role}</p>
              <p className="text-sm">{member.expertise}</p>
            </div>
          ))}
        </div>
        
        <h3 className="text-2xl font-semibold mt-8 mb-4">Our Values</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Innovation: We embrace technology to improve our services.</li>
          <li>Sustainability: We prioritize eco-friendly practices.</li>
          <li>Integrity: We operate with transparency and honesty.</li>
          <li>Customer Focus: We strive to exceed client expectations.</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4">Achievements</h3>
        <p>
          CleanSSR has been recognized as a leader in the technology-driven cleaning 
          sector, receiving multiple awards for innovation and sustainability. Our 
          commitment to excellence continues to drive our success and growth.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;