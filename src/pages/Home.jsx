import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Make a Difference Today Section */}
      <section className="py-16 bg-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Make a Difference Today</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Your donation can change lives and bring hope to those who need it most.
          </p>
          <Link to="/donate" className="bg-white text-teal-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300 inline-block">
            Donate Now
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Rest of the homepage content */}
      {/* ... */}
    </div>
  );
};

export default Home;
