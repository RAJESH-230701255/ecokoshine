import React, { useState, useEffect } from 'react';

interface SlideData {
  image: string;
  title: string;
  description: string;
}

const ImageSlider: React.FC = () => {
  const slides: SlideData[] = [
    {
      image: "/Granular Activated Carbon.png/efc1156d-c7e1-49e5-8fca-94cc5ea065be-removebg-preview.png",
      title: "Granular Activated Carbon",
      description: "Premium quality granular carbon for superior filtration"
    },
    {
      image: "/Firefly_create_an_empty_coconut_and_fill_it_with_powder_activated_carbon_61920-removebg-preview (1).png",
      title: "Powder Activated Carbon",
      description: "Fine powder form for enhanced surface area and absorption"
    },
    {
      image: "/pellitized activated carbon.png/Firefly_create_an_empty_coconut_and_fill_it_with_pelletized_activated_carbon_61920-removebg-preview.png",
      title: "Pellitized Activated Carbon",
      description: "Precisely sized pellets for optimal flow rates"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Changed from 5000ms to 3000ms (3 seconds)

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full max-w-4xl mx-auto mb-12 animate-slide-up">
      {/* Main slider container with #FDF060 background */}
      <div className="relative h-96 rounded-2xl shadow-2xl border border-yellow-300/50 overflow-hidden" style={{ backgroundColor: '#F0B800' }}>
        
        {/* Left side coconut leaves - organized in vertical alignment */}
        <div className="absolute -left-12 top-0 bottom-0 flex flex-col justify-center pointer-events-none z-30">
          {/* Top leaf */}
          <img 
            src="/istockphoto-154309723-612x612-removebg-preview.png" 
            alt="Coconut leaf" 
            className="w-32 h-auto transform -rotate-15 drop-shadow-xl opacity-85 mb-4"
          />
          {/* Middle leaf - largest */}
          <img 
            src="/istockphoto-154309723-612x612-removebg-preview.png" 
            alt="Coconut leaf" 
            className="w-40 h-auto transform -rotate-5 drop-shadow-2xl opacity-90 mb-4"
          />
          {/* Bottom leaf */}
          <img 
            src="/istockphoto-154309723-612x612-removebg-preview.png" 
            alt="Coconut leaf" 
            className="w-28 h-auto transform -rotate-20 drop-shadow-lg opacity-80"
          />
        </div>

        {/* Right side coconut leaves - organized in vertical alignment (mirrored) */}
        <div className="absolute -right-12 top-0 bottom-0 flex flex-col justify-center pointer-events-none z-30">
          {/* Top leaf (mirrored) */}
          <img 
            src="/istockphoto-154309723-612x612-removebg-preview.png" 
            alt="Coconut leaf" 
            className="w-32 h-auto transform rotate-15 scale-x-[-1] drop-shadow-xl opacity-85 mb-4"
          />
          {/* Middle leaf - largest (mirrored) */}
          <img 
            src="/istockphoto-154309723-612x612-removebg-preview.png" 
            alt="Coconut leaf" 
            className="w-40 h-auto transform rotate-5 scale-x-[-1] drop-shadow-2xl opacity-90 mb-4"
          />
          {/* Bottom leaf (mirrored) */}
          <img 
            src="/istockphoto-154309723-612x612-removebg-preview.png" 
            alt="Coconut leaf" 
            className="w-28 h-auto transform rotate-20 scale-x-[-1] drop-shadow-lg opacity-80"
          />
        </div>

        {/* Subtle tropical atmosphere overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-100/10 via-transparent to-green-100/10 pointer-events-none z-10"></div>
        
        {/* Natural light filtering effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent pointer-events-none z-15"></div>

        {/* Slides container */}
        <div 
          className="flex transition-transform duration-700 ease-in-out h-full relative z-25"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full h-full flex items-center justify-center p-8">
              <div className="text-center bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-white/60 max-w-md">
                <div className="mb-6">
                  <img 
                    src={slide.image}
                    alt={slide.title}
                    className="w-56 h-56 object-contain mx-auto drop-shadow-xl"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 leading-tight">
                  {slide.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;