import React, { useEffect, useRef, useState } from 'react';

const WhatIsActivatedCarbon: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              setIsVisible(true);
            }
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
      id="what-is-activated-carbon" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-blue-100 rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-green-100 rounded-full opacity-25 blur-xl"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-yellow-100 rounded-full opacity-15 blur-lg"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Content Grid */}
        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-8'
        }`}>
          {/* Left side - Text content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-yellow-500">What is</span> <span className="text-black">Activated Carbon</span><span className="text-yellow-500">?</span>
            </h2>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
              Often called "Black Gold", activated carbon is a highly porous form of carbon known for its incredible ability to trap impurities, toxins, and odors. Made from natural sources like coconut shells, it's the invisible powerhouse behind cleaner water, fresher air, safer food, and purer pharmaceuticals.
            </p>
            
            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg p-6 border border-yellow-200">
              <p className="text-lg text-gray-800 font-semibold">
                At Ecokoshine Carbon, we harness the power of this black gold — refining coconut shells into high-performance carbon that fuels sustainability and purification across industries.
              </p>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="flex justify-center lg:justify-end">
            <img 
              src="/How activated.png" 
              alt="Activated carbon in coconut shell bowl with palm leaves" 
              className="w-full max-w-5xl h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsActivatedCarbon;