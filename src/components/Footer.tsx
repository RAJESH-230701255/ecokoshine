import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <h3 className="text-lg font-bold">EcoKoshine Carbon</h3>
              <p className="text-sm text-yellow-400">Activated Carbon Solutions</p>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading manufacturer of premium activated carbon from coconut shells, 
              serving industries worldwide with quality and reliability.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/sudha-govindan-04969136a/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-yellow-400">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-yellow-400 transition-colors">About Us</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-yellow-400 transition-colors">Products</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-yellow-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-yellow-400">Products</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Granular activated carbon</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Powdered activated carbon</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Pelletized activated carbon</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-yellow-400">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400 mt-1" />
                <a 
                  href="https://maps.app.goo.gl/VkEWAhQtHSZeBWXLA?g_st=iw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  <p>Elanagar Village</p>
                  <p>Kanchipuram district, Tamil Nadu 603402</p>
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <a 
                  href="tel:+917358328571" 
                  className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  +91 7358328571
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400" />
                <a 
                  href="mailto:ecokoshine@gmail.com" 
                  className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  ecokoshine@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 EcoKoshine Carbon. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Quality Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;