import React, { useEffect, useRef, useState } from 'react';

const WhyChooseUs: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="why-choose-us" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-10 blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-yellow-400 rounded-full opacity-10 blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-500 rounded-full opacity-5 blur-lg"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-8'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-yellow-500">EcoKoshine Carbon</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-900 leading-relaxed mb-8 font-medium">
              At Ecokoshine Carbon, we don't just sell activated carbon — we deliver clean, green performance. 
              Crafted from premium coconut shells, our products are engineered for purity, power, and sustainability.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-lg text-gray-900 font-semibold">100% Natural & Eco-Friendly</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-lg text-gray-900 font-semibold">High Adsorption. Low Ash. Maximum Efficiency.</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-lg text-gray-900 font-semibold">Tailored Solutions for Every Industry</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-lg text-gray-900 font-semibold">Trusted Quality. Emerging Innovation.</span>
              </div>
            </div>
            
            <p className="text-xl text-yellow-600 font-bold italic mt-8">
              Choose Ecokoshine — where nature meets next-gen purification
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;