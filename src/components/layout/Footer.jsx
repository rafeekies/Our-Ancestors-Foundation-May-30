import * as React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary-600 text-white pt-12 pb-6 islamic-pattern-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <FaHeart className="mr-2" /> Our Ancestors Foundation
            </h3>
            <p className="mb-4">
              Dedicated to preserving cultural heritage and supporting communities through sustainable development projects aligned with Islamic values of charity and compassion.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-300">
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-300">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-300">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-300">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-secondary-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-secondary-300">About Us</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-secondary-300">Our Projects</Link>
              </li>
              <li>
                <Link to="/donate" className="hover:text-secondary-300">Donate</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-secondary-300">Contact Us</Link>
              </li>
              <li>
                <Link to="/donor-portal" className="hover:text-secondary-300">Donor Portal</Link>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Projects</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/projects/water" className="hover:text-secondary-300">Clean Water Initiative</Link>
              </li>
              <li>
                <Link to="/projects/education" className="hover:text-secondary-300">Education Support</Link>
              </li>
              <li>
                <Link to="/projects/healthcare" className="hover:text-secondary-300">Healthcare Access</Link>
              </li>
              <li>
                <Link to="/projects/food" className="hover:text-secondary-300">Food Security</Link>
              </li>
              <li>
                <Link to="/projects/emergency" className="hover:text-secondary-300">Emergency Relief</Link>
              </li>
              <li>
                <Link to="/projects/ramadan" className="hover:text-secondary-300">Ramadan Programs</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-secondary-300" />
                <span>123 Charity Lane, Giving City, GC 12345</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-secondary-300" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-secondary-300" />
                <span>info@ourancestorsfoundation.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-500 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Our Ancestors Foundation. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <Link to="/privacy-policy" className="hover:text-secondary-300 mr-4">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-secondary-300">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
