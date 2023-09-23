import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const P = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // Adjust typing speed here (milliseconds)
    
    return () => clearInterval(typingInterval);
  }, [text, currentIndex]);

  return (
    <p className='font-["Inconsolata"]'>
      {displayText} 
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {text[currentIndex]}
      </motion.span>
    </p>
  );
};

export default P;
