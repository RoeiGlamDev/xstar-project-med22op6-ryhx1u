import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ label, type = 'text', placeholder, required = false }) => {const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (required && e.target.value.trim() === '') {
      setIsValid(false);} else {
      setIsValid(true);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {setIsFocused(false);
    if (required && value.trim() === '') {
      setIsValid(false);}
  };

  return (
    <div className="mb-4">
      <label className={block text-purple-600 font-semibold mb-2 ${isFocused ? 'text-purple-800' : ''}}>
        {label}
      </label>
      <motion.div
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={w-full p-2 border-2 rounded transition duration-300 ease-in-out ${
          isValid ? 'border-purple-300' : 'border-red-500'
        } ${isFocused ? 'shadow-lg' : 'shadow-sm'} focus:outline-none focus:ring-2 focus:ring-purple-500}
        whileHover={{ scale: 1.02 }}
        whileFocus={{ scale: 1.02 }}
      />
      {!isValid && <p className="text-red-500 text-sm">This field is required.</p>}
    </div>
  );
};

export default Input;