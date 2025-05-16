
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif font-bold text-xl mb-4">Dr. Ibrahim Yahaya Wuni</h3>
            <p className="text-gray-300 mb-4">
              Assistant Professor at King Fahd University of Petroleum and Minerals, specializing in Construction Engineering and Management.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-gold transition-colors">About</a></li>
              <li><a href="#education" className="text-gray-300 hover:text-gold transition-colors">Education</a></li>
              <li><a href="#research" className="text-gray-300 hover:text-gold transition-colors">Research</a></li>
              <li><a href="#publications" className="text-gray-300 hover:text-gold transition-colors">Publications</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif font-bold text-xl mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">Google Scholar</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">ResearchGate</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">ORCID</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6">
          <p className="text-center text-gray-400">
            &copy; {currentYear} Dr. Ibrahim Yahaya Wuni. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
