import React, { useEffect, useRef, useState } from 'react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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
        threshold: 0.3,
        rootMargin: '-100px 0px -100px 0px'
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
      id="about" 
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 flex items-center relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-10 blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-yellow-400 rounded-full opacity-10 blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-500 rounded-full opacity-5 blur-lg"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Overview */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div 
            ref={textRef}
            className={`text-left relative z-10 transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-16'
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              About <span className="text-yellow-500">EcoKoshine Carbon</span>
            </h2>
            
            <p className="text-lg text-gray-900 mb-6 leading-relaxed font-semibold">
              Ecokoshine Carbon is an emerging name in sustainable activated carbon, made entirely from 100% coconut shells. We blend the purity of nature with modern innovation to deliver high-performance carbon solutions for water, air, food, pharma, and chemical industries.
            </p>
            <p className="text-lg text-gray-900 leading-relaxed font-semibold">
              With a strong focus on quality and sustainability, we're committed to powering cleaner, greener solutions for a healthier tomorrow
            </p>
          </div>
          
          <div 
            ref={imageRef}
            className={`flex flex-col items-center lg:items-end relative z-10 transition-all duration-1000 ease-out delay-300 ${
              isVisible 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-16'
            }`}
          >
            <img 
              src="/About.png" 
              alt="Coconut shells and activated carbon cubes with palm leaves" 
              className="w-full max-w-lg h-auto object-contain about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;