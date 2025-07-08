import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative text-white min-h-screen flex items-center">
      {/* Reduced overlay opacity from 35% to 30% for slightly less darkness */}
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
      
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/Background.jpg')`,
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.75) contrast(1.05) saturate(1.1)'
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full z-20">
        <div className="flex items-center justify-start">
          <div className="animate-slide-up text-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight text-white drop-shadow-2xl">
              DELIVERING PREMIUM
              <span className="text-yellow-500 block">ACTIVATED CARBON</span>
            </h1>
            <div className="text-3xl lg:text-4xl mb-8 leading-tight text-white drop-shadow-2xl">
              with Purpose, Performance, and Sustainability
            </div>
            <p className="leading-relaxed max-w-4xl drop-shadow-lg text-white" style={{ fontSize: '20px' }}>
              <span className="lg:text-2xl">
                Providing coconut shell based activated carbon solutions that support cleaner, 
                safer, and more sustainable production across industries.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;