import React from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  onSubmit: (data: { name: string; email: string; message: string }) => void;
}

const ContactPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <motion.div
        className="text-4xl font-bold text-purple-600 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact CleanSSR
      </motion.h1>
      <motion.div
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            name="message"
            required
          />
        </div>
        <motion.div
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          Send
        </motion.button>
      </motion.form>
      <div className="text-center mt-8">
        <h2 className="text-2xl font-semibold text-purple-600">Business Hours</h2>
        <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
        <p className="text-gray-600">Saturday: 10:00 AM - 3:00 PM</p>
        <p className="text-gray-600">Sunday: Closed</p>
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold text-purple-600">Location</h2>
        <p className="text-gray-600">123 Clean Street, Tech City, TX 00000</p>
      </div>
    </div>
  );
};

export default ContactPage;