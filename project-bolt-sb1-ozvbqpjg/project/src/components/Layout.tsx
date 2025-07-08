import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="relative z-50 bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/WhatsApp Image 2025-07-08 at 00.05.11_a6109bc3.jpg" 
                alt="EcoKoshine Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <div className="text-2xl font-bold text-black">ECOKOSHINE</div>
                <div className="font-bold" style={{ color: '#F0B800', fontSize: '18px' }}>CARBON</div>
              </div>
            </Link>

            {/* Navigation Menu and Contact Button */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-8">
                <Link 
                  to="/" 
                  className={`font-medium transition-colors duration-200 text-sm ${
                    location.pathname === '/' 
                      ? 'text-[#F0B800]' 
                      : 'text-gray-700 hover:text-[#F0B800]'
                  }`}
                >
                  HOME
                </Link>
                <Link 
                  to="/about" 
                  className={`font-medium transition-colors duration-200 text-sm ${
                    location.pathname === '/about' 
                      ? 'text-[#F0B800]' 
                      : 'text-gray-700 hover:text-[#F0B800]'
                  }`}
                >
                  ABOUT US
                </Link>
                <Link 
                  to="/products" 
                  className={`font-medium transition-colors duration-200 text-sm ${
                    location.pathname === '/products' 
                      ? 'text-[#F0B800]' 
                      : 'text-gray-700 hover:text-[#F0B800]'
                  }`}
                >
                  PRODUCTS & APPLICATIONS
                </Link>
              </div>
              <button 
                className="text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg" 
                style={{ backgroundColor: '#F0B800', fontSize: '16px' }} 
                onMouseEnter={(e) => e.target.style.backgroundColor = '#D4A017'} 
                onMouseLeave={(e) => e.target.style.backgroundColor = '#F0B800'}
                onClick={() => {
                  const footer = document.querySelector('footer');
                  if (footer) {
                    footer.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                CONTACT US
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-[#F0B800]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Comprehensive Footer Section */}
      <footer id="contact" className="relative z-10 bg-gray-900 text-white animate-slide-up-footer">
        {/* Main Footer Content */}
        <div className="px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              
              {/* Company Info Section */}
              <div className="lg:col-span-1">
                <div className="flex items-center mb-6">
                  <div>
                    <h3 className="font-bold text-white" style={{ fontSize: '18px' }}>Ecokoshine Carbon</h3>
                    <p className="font-bold" style={{ fontSize: '14px', color: '#F0B800' }}>Activated Carbon Solutions</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Leading manufacturer of premium activated carbon from coconut shells, serving worldwide with reliability.
                </p>
                
                {/* Social Media Links */}
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/sudha-govindan-04969136a/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin size={18} className="text-white" />
                  </a>
                </div>
              </div>

              {/* Quick Links Section */}
              <div>
                <h4 className="font-bold mb-6" style={{ fontSize: '18px', color: '#F0B800' }}>Quick Links</h4>
                <ul className="space-y-3">
                  <li><Link to="/" className="text-gray-300 hover:text-[#F0B800] transition-colors duration-300">Home</Link></li>
                  <li><Link to="/about" className="text-gray-300 hover:text-[#F0B800] transition-colors duration-300">About Us</Link></li>
                  <li><Link to="/products" className="text-gray-300 hover:text-[#F0B800] transition-colors duration-300">Products</Link></li>
                  <li><a href="#contact" className="text-gray-300 hover:text-[#F0B800] transition-colors duration-300">Contact Us</a></li>
                </ul>
              </div>

              {/* Products Section */}
              <div>
                <h4 className="font-bold mb-6" style={{ fontSize: '18px', color: '#F0B800' }}>Products</h4>
                <ul className="space-y-3">
                  <li><Link to="/products" className="text-gray-300 hover:text-[#F0B800] transition-colors duration-300">Granular activated carbon</Link></li>
                  <li><Link to="/products" className="text-gray-300 hover:text-[#F0B800] transition-colors duration-300">Powdered activated carbon</Link></li>
                  <li><Link to="/products" className="text-gray-300 hover:text-[#F0B800] transition-colors duration-300">Pelletized activated carbon</Link></li>
                </ul>
              </div>

              {/* Contact Info Section */}
              <div>
                <h4 className="font-bold mb-6" style={{ fontSize: '18px', color: '#F0B800' }}>Contact Info</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin size={20} className="text-[#F0B800] mt-1 flex-shrink-0" />
                    <div>
                      <a 
                        href="https://maps.app.goo.gl/VkEWAhQtHSZeBWXLA?g_st=iw" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-[#F0B800] transition-colors duration-300 leading-relaxed cursor-pointer"
                      >
                        Elanagar Village<br />
                        Kanchipuram district, Tamil Nadu 603402
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone size={20} className="text-[#F0B800] flex-shrink-0" />
                    <a href="tel:+917358328571" className="text-gray-300 hover:text-[#F0B800] transition-colors duration-300">
                      +91 7358328571
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail size={20} className="text-[#F0B800] flex-shrink-0" />
                    <a href="mailto:ecokoshine@gmail.com" className="text-gray-300 hover:text-[#F0B800] transition-colors duration-300">
                      ecokoshine@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800">
          <div className="px-4 py-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-center md:text-left">
                  <p className="text-gray-400 text-sm">
                    © 2025 EcoKoshine Carbon. All rights reserved.
                  </p>
                </div>
                
                <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
                  <a href="#" className="text-gray-400 hover:text-[#F0B800] transition-colors duration-300">Privacy Policy</a>
                  <a href="#" className="text-gray-400 hover:text-[#F0B800] transition-colors duration-300">Terms of Service</a>
                  <a href="#" className="text-gray-400 hover:text-[#F0B800] transition-colors duration-300">Cookie Policy</a>
                  <a href="#" className="text-gray-400 hover:text-[#F0B800] transition-colors duration-300">Sitemap</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;