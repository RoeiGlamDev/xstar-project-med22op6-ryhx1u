import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormFields {
  name: string;
  email: string;
  message: string;
  reason: string;
}

const ContactSection: React.FC = () => {
  const [formFields, setFormFields] = useState<ContactFormFields>({
    name: '',
    email: '',
    message: '',
    reason: 'Inquiry',
  });

  const [errors, setErrors] = useState<Partial<ContactFormFields>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormFields> = {};
    if (!formFields.name) newErrors.name = 'Name is required';
    if (!formFields.email) newErrors.email = 'Email is required';
    if (!formFields.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formFields);
      // Here you would typically send the data to your API
    }
  };

  return (
    <section className="bg-white p-8 rounded-lg shadow-md">
      <motion.div
        className="text-purple-600 text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact CleanSSR
      </motion.h2>
      <p className="text-gray-700 mb-4">
        For technology inquiries or support, please fill out the form below. We are here to assist you.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700" htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formFields.name}
            onChange={handleChange}
            className={mt-1 p-2 border rounded w-full ${errors.name ? 'border-red-500' : 'border-gray-300'}}
            required
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-gray-700" htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formFields.email}
            onChange={handleChange}
            className={mt-1 p-2 border rounded w-full ${errors.email ? 'border-red-500' : 'border-gray-300'}}
            required
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-gray-700" htmlFor="reason">Reason for Contact</label>
          <select
            name="reason"
            id="reason"
            value={formFields.reason}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full border-gray-300"
          >
            <option value="Inquiry">General Inquiry</option>
            <option value="Support">Technical Support</option>
            <option value="Feedback">Feedback</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700" htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            value={formFields.message}
            onChange={handleChange}
            rows={4}
            className={mt-1 p-2 border rounded w-full ${errors.message ? 'border-red-500' : 'border-gray-300'}}
            required
          />
          {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
      <div className="mt-8">
        <h3 className="text-purple-600 font-semibold">Business Information</h3>
        <p className="text-gray-700">Location: 123 Tech Lane, Silicon Valley, CA 94043</p>
        <p className="text-gray-700">Business Hours: Mon-Fri 9 AM - 5 PM</p>
      </div>
    </section>
  );
};

export default ContactSection;