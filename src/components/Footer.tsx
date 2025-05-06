import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 2, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Logo */}
                <img 
                  src="/logo2.png" 
                  alt="Hi-Tech Logo" 
                  className="h-41 w-40 mr-2"
                />
            <div className="flex space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-all">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center hover:bg-pink-700 transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center hover:bg-blue-500 transition-all">
                <Twitter size={18} />
              </a>
           
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-700 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-2C18.88 4 12 4 12 4s-6.88 0-8.59.42a2.78 2.78 0 0 0-1.95 2A29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 2c1.71.42 8.59.42 8.59.42s6.88 0 8.59-.42a2.78 2.78 0 0 0 1.95-2A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z"></path>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent translate-y-2"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">›</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">›</span> Products
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">›</span> Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">›</span> Contact
                </Link>
              </li>
              <li>
                <Link to="/get-quote" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">›</span> Get Quote
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 relative">
              Our Products
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent translate-y-2"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products/sliding-windows" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">›</span> Sliding Windows
                </Link>
              </li>
              <li>
                <Link to="/products/casement-openable-windows" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">›</span> Casement Windows
                </Link>
              </li>
              <li>
                <Link to="/products/fixed-windows" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">›</span> Fixed Windows
                </Link>
              </li>
              <li>
                <Link to="/products/sliding-doors" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">›</span> Sliding Doors
                </Link>
              </li>
              <li>
                <Link to="/products/bay-windows" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <span className="mr-2">›</span> Bay Windows
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 relative">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent translate-y-2"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-accent mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Hi Tech UPVC Windoorse, 63A, Chennimalai Road, Rasi Oil Mill Compound,
                  Kangayam - 638 701, Tiruppur District , Tamil Nadu - India.
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-accent mr-3 flex-shrink-0" />
                <a href="tel:+919842721415" className="text-gray-300 hover:text-white transition-colors">
                  98427 21415, 94428 21415
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-accent mr-3 flex-shrink-0" />
                <a href="hitechupvcwindoorse@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  hitechupvcwindoorse@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Clock size={20} className="text-accent mr-3 flex-shrink-0" />
                <span className="text-gray-300">
                  Mon - Sat: 9:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© {currentYear} Hi-Tech UPVC Windows & Doors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;