import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ThankYou = () => {
  const navigate = useNavigate();
  const donationId = `DON-${Math.floor(100000 + Math.random() * 900000)}`;
  const donationDate = new Date().toLocaleDateString();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
    >
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-green-600 p-6 text-white text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h1 className="text-3xl font-bold">Thank You for Your Donation!</h1>
          </motion.div>
        </div>
        
        <div className="p-8">
          <div className="text-center mb-8">
            <p className="text-xl mb-2">Your generosity makes a real difference.</p>
            <p className="text-gray-600">
              We've sent a confirmation email with your donation receipt and tax information.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">Donation Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600 text-sm">Donation ID</p>
                <p className="font-medium">{donationId}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Date</p>
                <p className="font-medium">{donationDate}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">Your Impact</h2>
            <p className="mb-4">
              Your donation helps us continue our mission to make a positive difference in the world. 
              Here's how your contribution will help:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Provide essential resources to communities in need</li>
              <li>Support sustainable development initiatives</li>
              <li>Fund educational programs for underprivileged children</li>
              <li>Contribute to environmental conservation efforts</li>
            </ul>
          </div>
          
          <div className="text-center space-y-4">
            <Link 
              to="/" 
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
            >
              Return to Homepage
            </Link>
            <p className="text-gray-600">
              Have questions about your donation? <Link to="/contact" className="text-green-600 hover:underline">Contact us</Link>
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto mt-12 text-center">
        <h2 className="text-2xl font-bold mb-6">Share Your Support</h2>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
            </svg>
          </button>
          <button className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-full transition duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
            </svg>
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 7h-2v-3.25c0-.69-.56-1.25-1.25-1.25s-1.25.56-1.25 1.25V17h-2v-6h2v1.13c.43-.63 1.16-1.13 2-1.13 1.38 0 2.5 1.12 2.5 2.5V17z"></path>
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ThankYou;
