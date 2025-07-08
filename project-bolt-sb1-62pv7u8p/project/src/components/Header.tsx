import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroSection = document.getElementById('home');
      const heroHeight = heroSection ? heroSection.offsetHeight : 0;
      
      // Check if we've scrolled past the hero section
      if (scrollPosition >= heroHeight - 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
        // Change navbar style based on scroll position
        setIsScrolled(scrollPosition > 50);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <header 
      className={`fixed left-0 right-0 z-40 transition-all duration-700 ease-in-out ${
        isScrolled 
          ? 'top-0 bg-white shadow-lg backdrop-blur-sm' 
          : 'top-0 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img 
              src="/WhatsApp Image 2025-06-24 at 22.54.18_9377ec48.jpg" 
              alt="EcoKoshine Carbon Logo" 
              className="h-12 w-auto mr-3"
            />
            <div>
              <h1 className={`font-bold transition-all duration-700 ease-in-out ${
                isScrolled ? 'text-gray-900' : 'text-white drop-shadow-lg'
              }`}>
                <div className="text-2xl">ECOKOSHINE</div>
                <div className={`text-lg ${
                  isScrolled ? 'text-yellow-600' : 'text-yellow-400'
                }`}>CARBON</div>
              </h1>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <a 
              href="#home" 
              className={`font-medium transition-all duration-700 ease-in-out uppercase text-sm ${
                isScrolled 
                  ? 'text-gray-700 hover:text-yellow-600' 
                  : 'text-white hover:text-yellow-300 drop-shadow-lg'
              }`}
              style={{ fontSize: '14px' }}
            >
              HOME
            </a>
            <a 
              href="https://bolt.new/~/sb1-vkmowusr" 
              className={`font-medium transition-all duration-700 ease-in-out uppercase text-sm ${
                isScrolled 
                  ? 'text-gray-700 hover:text-yellow-600' 
                  : 'text-white hover:text-yellow-300 drop-shadow-lg'
              }`}
              style={{ fontSize: '14px' }}
            >
              ABOUT US
            </a>
            <a 
              href="#products" 
              className={`font-medium transition-all duration-700 ease-in-out uppercase text-sm ${
                isScrolled 
                  ? 'text-gray-700 hover:text-yellow-600' 
                  : 'text-white hover:text-yellow-300 drop-shadow-lg'
              }`}
              style={{ fontSize: '14px' }}
            >
              PRODUCTS & APPLICATIONS
            </a>
            <a 
              href="#footer" 
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-700 ease-in-out shadow-lg uppercase ${
              isScrolled 
                ? 'bg-yellow-500 text-white hover:bg-yellow-600' 
                : 'bg-yellow-500 bg-opacity-90 text-white hover:bg-yellow-600 hover:bg-opacity-100 backdrop-blur-sm'
            }`}
            >
              CONTACT US
            </a>
          </nav>

          <button
            className={`lg:hidden transition-all duration-700 ease-in-out ${
              isScrolled ? 'text-yellow-600' : 'text-white drop-shadow-lg'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6 flex flex-col justify-center items-center">
              <div className={`w-6 h-0.5 bg-current transition-all duration-500 ease-in-out transform origin-center ${
                isMenuOpen 
                  ? 'rotate-45 translate-y-0 scale-110' 
                  : 'rotate-0 -translate-y-1.5 scale-100'
              }`}></div>
              <div className={`w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                isMenuOpen 
                  ? 'opacity-0 scale-0' 
                  : 'opacity-100 scale-100'
              }`}></div>
              <div className={`w-6 h-0.5 bg-current transition-all duration-500 ease-in-out transform origin-center ${
                isMenuOpen 
                  ? '-rotate-45 translate-y-0 scale-110' 
                  : 'rotate-0 translate-y-1.5 scale-100'
              }`}></div>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className={`lg:hidden border-t transition-all duration-700 ease-in-out ${
            isScrolled 
              ? 'border-yellow-200 bg-white' 
              : 'border-white border-opacity-20 bg-black bg-opacity-30 backdrop-blur-sm'
          }`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a 
                href="#home" 
                className={`block px-3 py-2 rounded transition-all duration-700 ease-in-out uppercase ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-yellow-600 hover:bg-yellow-50' 
                    : 'text-white hover:text-yellow-300 hover:bg-white hover:bg-opacity-10'
                }`}
                style={{ fontSize: '14px' }}
              >
                HOME
              </a>
              <a 
                href="https://bolt.new/~/sb1-vkmowusr" 
                className={`block px-3 py-2 rounded transition-all duration-700 ease-in-out uppercase ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-yellow-600 hover:bg-yellow-50' 
                    : 'text-white hover:text-yellow-300 hover:bg-white hover:bg-opacity-10'
                }`}
                style={{ fontSize: '14px' }}
              >
                ABOUT US
              </a>
              <a 
                href="#products" 
                className={`block px-3 py-2 rounded transition-all duration-700 ease-in-out uppercase ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-yellow-600 hover:bg-yellow-50' 
                    : 'text-white hover:text-yellow-300 hover:bg-white hover:bg-opacity-10'
                }`}
                style={{ fontSize: '14px' }}
              >
                PRODUCTS & APPLICATIONS
              </a>
              <a 
                href="#footer" 
                className={`block px-3 py-2 rounded mt-2 transition-all duration-700 ease-in-out uppercase ${
                isScrolled 
                  ? 'bg-yellow-500 text-white hover:bg-yellow-600' 
                  : 'bg-yellow-500 bg-opacity-90 text-white hover:bg-yellow-600 hover:bg-opacity-100'
              }`}
              >
                CONTACT US
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;