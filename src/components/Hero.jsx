import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = ({ 
  title = "Make a Difference Today", 
  subtitle = "Your donation can change lives and bring hope to those who need it most.",
  backgroundImage = "https://images.pexels.com/photos/6647035/pexels-photo-6647035.jpeg",
  buttonText = "Donate Now",
  buttonLink = "/donate"
}) => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-cover bg-center" 
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
        >
          {title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-white max-w-3xl mx-auto mb-8"
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link 
            to={buttonLink} 
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-block"
          >
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
