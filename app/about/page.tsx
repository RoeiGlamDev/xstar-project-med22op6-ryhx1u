import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Alice Johnson',
    position: 'CEO',
    bio: 'Alice leads CleanSSR with a vision for innovation and excellence in technology-driven cleaning solutions.',
    image: '/images/alice.jpg',
  },
  {
    name: 'Mark Smith',
    position: 'CTO',
    bio: 'Mark oversees CleanSSR’s technology development, ensuring we stay at the forefront of the cleaning industry.',
    image: '/images/mark.jpg',
  },
  {
    name: 'Emily Davis',
    position: 'COO',
    bio: 'Emily manages operations at CleanSSR, focusing on efficiency and customer satisfaction with our services.',
    image: '/images/emily.jpg',
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-white text-purple-700 min-h-screen p-8">
      <motion.header
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold">About CleanSSR</h1>
        <p className="mt-4 text-lg">
          At CleanSSR, we leverage technology to bring you the most efficient cleaning solutions.
        </p>
      </motion.header>

      <motion.section
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-6">Our History</h2>
        <p>
          Founded in 2020, CleanSSR emerged from the need for modern cleaning solutions that utilize
          technology to enhance service delivery and customer experience. Our commitment to innovation
          drives us to continuously improve and adapt to the evolving needs of our clients.
        </p>
      </motion.section>

      <motion.section
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-6">Our Values</h2>
        <ul className="list-disc ml-5">
          <li>Innovation: We embrace cutting-edge technology to enhance our services.</li>
          <li>Integrity: We operate with transparency and honesty in all our interactions.</li>
          <li>Customer Focus: Our clients are at the heart of everything we do.</li>
        </ul>
      </motion.section>

      <motion.section
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold col-span-full mb-6">Meet Our Team</h2>
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-purple-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src={member.image} alt={member.name} className="rounded-full w-32 h-32 mx-auto mb-4" />
            <h3 className="text-xl font-bold">{member.name}</h3>
            <h4 className="text-lg text-purple-600">{member.position}</h4>
            <p className="mt-2 text-gray-700">{member.bio}</p>
          </div>
        ))}
      </motion.section>
    </div>
  );
};

export default About;