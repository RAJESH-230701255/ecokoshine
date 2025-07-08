import React from 'react';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { Leaf, Droplets, Wind, Factory, Shield, Heart, Users, Lightbulb, CheckCircle, Sparkles, Award, Target, Globe } from 'lucide-react';

function App() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-info');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // Scrolling down and past 100px
        setIsNavVisible(false);
      } else {
        // Scrolling up
        setIsNavVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className={`bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50 transition-transform duration-300 ${
        isNavVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/WhatsApp Image 2025-07-08 at 00.05.11_e5a43a38.jpg" 
                alt="Ecokoshine Carbon Logo"
                className="w-12 h-12 mr-3 object-contain"
              />
              <div>
                <div className="font-bold text-black" style={{ fontSize: '24px' }}>ECOKOSHINE</div>
                <div className="font-bold text-yellow-600" style={{ fontSize: '18px' }}>CARBON</div>
              </div>
            </div>

            {/* Navigation Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors text-sm">HOME</a>
              <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors text-sm">ABOUT US</a>
              <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium transition-colors text-sm">PRODUCTS & APPLICATIONS</a>
              <button 
                onClick={scrollToContact}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors" 
                style={{ fontSize: '16px' }}
              >
                CONTACT US
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-50 to-amber-50 py-20 overflow-hidden">
        {/* Vertical Wave Design */}
        <div className="absolute right-0 top-0 bottom-0 w-96 opacity-90">
          <svg viewBox="0 0 400 800" className="w-full h-full">
            {/* Main flowing wave */}
            <path
              d="M50 0 Q150 100 100 200 Q50 300 150 400 Q250 500 100 600 Q50 700 200 800"
              stroke="#FBE551"
              strokeWidth="8"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M70 0 Q170 120 120 220 Q70 320 170 420 Q270 520 120 620 Q70 720 220 800"
              stroke="#FBE551"
              strokeWidth="6"
              fill="none"
              opacity="1"
            />
            <path
              d="M90 0 Q190 140 140 240 Q90 340 190 440 Q290 540 140 640 Q90 740 240 800"
              stroke="#FBE551"
              strokeWidth="5"
              fill="none"
              opacity="0.95"
            />
            <path
              d="M110 0 Q210 160 160 260 Q110 360 210 460 Q310 560 160 660 Q110 760 260 800"
              stroke="#FBE551"
              strokeWidth="4"
              fill="none"
              opacity="0.9"
            />
            <path
              d="M130 0 Q230 180 180 280 Q130 380 230 480 Q330 580 180 680 Q130 780 280 800"
              stroke="#FBE551"
              strokeWidth="3"
              fill="none"
              opacity="0.85"
            />
            <path
              d="M150 0 Q250 200 200 300 Q150 400 250 500 Q350 600 200 700 Q150 800 300 800"
              stroke="#FBE551"
              strokeWidth="2"
              fill="none"
              opacity="0.8"
            />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Premium Coconut Shell
                <span className="text-yellow-600"> Activated Carbon</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A bold, forward-thinking startup dedicated to producing and supplying premium coconut shell-based activated carbon — and nothing else. We are on a mission to redefine purification and sustainability through innovation and natural solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg">
                  Learn More
                </button>
                <button className="border border-yellow-500 text-yellow-600 hover:bg-yellow-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <img 
                  src="/WhatsApp Image 2025-06-29 at 19.16.34_20b2483b.jpg" 
                  alt="Coconut shell activated carbon"
                  className="rounded-xl w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm">Natural</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-20 bg-white scroll-animate fade-up">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 scroll-animate fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              Our Purpose
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Empowering Clean Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Ecokoshine Carbon, we believe clean environments lead to healthier lives and a better future. 
              That's why we focus solely on activated carbon, empowering industries and communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 scroll-animate fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="p-8 text-center scroll-animate fade-up" style={{ animationDelay: '0.6s' }}>
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Water Purification</h3>
              <p className="text-gray-600">Purify water for safer consumption and healthier communities worldwide.</p>
            </div>

            <div className="p-8 text-center scroll-animate fade-up" style={{ animationDelay: '0.8s' }}>
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wind className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Air Purification</h3>
              <p className="text-gray-600">Clean air and gases for healthier breathing and improved air quality.</p>
            </div>

            <div className="p-8 text-center scroll-animate fade-up" style={{ animationDelay: '1s' }}>
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Factory className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industrial Solutions</h3>
              <p className="text-gray-600">Improve industrial processes while minimizing environmental footprints.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-amber-50 scroll-animate fade-up">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-animate slide-in-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Superior Quality & Performance</h2>
              
              <div className="space-y-6 scroll-animate fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-start scroll-animate fade-up" style={{ animationDelay: '0.4s' }}>
                  <div className="bg-green-100 p-2 rounded-lg mr-4 flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">100% Coconut Shell-Based</h3>
                    <p className="text-gray-600">Renewable, eco-friendly, and highly effective natural solution.</p>
                  </div>
                </div>

                <div className="flex items-start scroll-animate fade-up" style={{ animationDelay: '0.6s' }}>
                  <div className="bg-green-100 p-2 rounded-lg mr-4 flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Superior Adsorption Capacity</h3>
                    <p className="text-gray-600">Designed for maximum performance in critical applications.</p>
                  </div>
                </div>

                <div className="flex items-start scroll-animate fade-up" style={{ animationDelay: '0.8s' }}>
                  <div className="bg-green-100 p-2 rounded-lg mr-4 flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Startup Spirit, Big Impact</h3>
                    <p className="text-gray-600">Agile, innovative, and customer-focused approach.</p>
                  </div>
                </div>

                <div className="flex items-start scroll-animate fade-up" style={{ animationDelay: '1s' }}>
                  <div className="bg-green-100 p-2 rounded-lg mr-4 flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Sustainable Manufacturing</h3>
                    <p className="text-gray-600">We prioritize green processes and low waste production.</p>
                  </div>
                </div>

                <div className="flex items-start scroll-animate fade-up" style={{ animationDelay: '1.2s' }}>
                  <div className="bg-green-100 p-2 rounded-lg mr-4 flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Strict Quality Standards</h3>
                    <p className="text-gray-600">Consistent, reliable, and trusted by our partners.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative scroll-animate slide-in-right">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <img 
                  src="/WhatsApp Image 2025-06-29 at 19.13.56_40a2ad9b.jpg" 
                  alt="Premium activated carbon powder"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Premium Quality</h3>
                  <p className="text-lg opacity-90">Every batch crafted with precision</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white scroll-animate fade-up">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 scroll-animate fade-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-4xl font-bold text-gray-900">Our Core Values</h2>
          </div>
          
          <div className="max-w-4xl mx-auto text-center scroll-animate fade-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Ecokoshine Carbon, sustainability is at the heart of everything we do — we protect and respect the environment in every step of our process. We believe in integrity, maintaining honest communication and transparent business practices to build lasting trust. Our unwavering focus on quality ensures that we deliver only the highest standards in every product. We embrace innovation, constantly striving for improvement and pioneering forward-thinking solutions. Above all, we value collaboration, growing together with our clients and partners to create a cleaner, greener future.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact-info" className="bg-gray-900 text-white scroll-animate fade-up">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-12 scroll-animate fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="scroll-animate fade-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold text-white mb-2">Ecokoshine Carbon</h3>
              <h4 className="text-yellow-500 font-semibold mb-6">Activated Carbon Solutions</h4>
              <p className="text-gray-300 mb-6">
                Leading manufacturer of premium activated carbon from coconut shells, serving worldwide with reliability.
              </p>
              <div className="flex items-center">
                <a href="https://www.linkedin.com/in/sudha-govindan-04969136a/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors cursor-pointer">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="scroll-animate fade-up" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-yellow-500 font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="https://ecokoshine-carbon.netlify.app/" className="hover:text-yellow-500 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">About Us</a></li>
                <li><a href="https://ecokoshine-carbon-product.netlify.app/" className="hover:text-yellow-500 transition-colors">Products</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div className="scroll-animate fade-up" style={{ animationDelay: '0.8s' }}>
              <h3 className="text-yellow-500 font-bold mb-6">Products</h3>
              <ul className="space-y-3 text-gray-300">
                <li>Granular activated carbon</li>
                <li>Powdered activated carbon</li>
                <li>Pelletized activated carbon</li>
              </ul>
            </div>
            
            <div className="scroll-animate fade-up" style={{ animationDelay: '1s' }}>
              <h3 className="text-yellow-500 font-bold mb-6">Contact Info</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <a href="https://maps.app.goo.gl/M2quxZUn5aZvtNjs9" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors cursor-pointer">
                    <div>Elanagar Village</div>
                    <div>Kanchipuram district, Tamil Nadu 603402</div>
                  </a>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a href="tel:+917358328571" className="hover:text-yellow-500 transition-colors cursor-pointer">
                    +91 7358328571
                  </a>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a href="mailto:ecokoshine@gmail.com" className="hover:text-yellow-500 transition-colors cursor-pointer">
                    ecokoshine@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 scroll-animate fade-up" style={{ animationDelay: '1.2s' }}>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 EcoKoshine Carbon. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">Cookie Policy</a>
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;