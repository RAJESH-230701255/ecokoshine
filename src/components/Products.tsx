import React, { useEffect, useRef, useState } from 'react';
import { Droplets, Wind, Factory, Beaker, ArrowRight } from 'lucide-react';

const Products: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubheadingVisible, setIsSubheadingVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const subheadingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              setIsVisible(true);
            }
            if (entry.target === subheadingRef.current) {
              setIsSubheadingVisible(true);
            }
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-50px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    if (subheadingRef.current) {
      observer.observe(subheadingRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (subheadingRef.current) {
        observer.unobserve(subheadingRef.current);
      }
    };
  }, []);

  const products = [
    {
      icon: Droplets,
      title: "Water Treatment Grade",
      description: "High-performance activated carbon for municipal and industrial water treatment applications.",
      specifications: [
        "Iodine Number: 900-1200 mg/g",
        "Methylene Blue: 120-200 mg/g",
        "Ash Content: <5%",
        "Moisture: <5%"
      ],
      applications: ["Municipal water treatment", "Industrial wastewater", "Swimming pool filtration"]
    },
    {
      icon: Wind,
      title: "Air Purification Grade",
      description: "Specialized activated carbon designed for gas-phase adsorption and air purification systems.",
      specifications: [
        "CTC Activity: 60-80%",
        "Hardness: >95%",
        "Bulk Density: 0.45-0.55 g/ml",
        "Particle Size: 4x8, 6x12, 8x16 mesh"
      ],
      applications: ["HVAC systems", "Industrial air treatment", "Odor control"]
    },
    {
      icon: Factory,
      title: "Industrial Grade",
      description: "Heavy-duty activated carbon for demanding industrial processes and specialized applications.",
      specifications: [
        "High mechanical strength",
        "Chemical resistance",
        "Custom mesh sizes available",
        "Low dust content"
      ],
      applications: ["Chemical processing", "Solvent recovery", "Catalyst support"]
    },
    {
      icon: Beaker,
      title: "Pharmaceutical Grade",
      description: "Ultra-pure activated carbon meeting stringent pharmaceutical and food industry standards.",
      specifications: [
        "USP/EP compliant",
        "Heavy metals: <10 ppm",
        "pH: 6-8",
        "Chloride: <0.2%"
      ],
      applications: ["Pharmaceutical purification", "Food & beverage", "Medical applications"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-100 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-200 rounded-full opacity-15 blur-lg"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-yellow-50 rounded-full opacity-25 blur-2xl"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-yellow-100 rounded-full opacity-20 blur-xl"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(234, 179, 8, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className="text-center mb-16 relative z-10"
        >
          <h2 className={`text-4xl lg:text-5xl font-bold text-gray-900 mb-8 transition-all duration-1000 ease-out ${
            isVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-12'
          }`}>
            Our <span className="text-yellow-500">Product Range</span>
          </h2>
          
          <div 
            ref={subheadingRef}
            className="text-center mb-12 relative"
          >
            <p className={`text-2xl text-yellow-600 font-semibold italic mb-6 transition-all duration-1000 ease-out delay-300 ${
              isSubheadingVisible 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-8'
            }`}>
              Nature's gift, with a purifying lift
            </p>
            
            <p className={`text-xl text-gray-900 leading-relaxed font-medium max-w-4xl mx-auto transition-all duration-1000 ease-out delay-500 ${
              isSubheadingVisible 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-8'
            }`}>
              Comprehensive activated carbon solutions engineered for specific industrial applications
            </p>
          </div>
          
          {/* Featured product showcase */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-12 relative overflow-hidden transition-all duration-500 ease-in-out hover:shadow-2xl hover:scale-105 hover:border-yellow-300 hover:bg-gradient-to-br hover:from-yellow-50 hover:to-white group cursor-pointer">
            {/* Background pattern for featured section */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full" style={{
                backgroundImage: `linear-gradient(45deg, rgba(234, 179, 8, 0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(234, 179, 8, 0.1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(234, 179, 8, 0.1) 75%), linear-gradient(-45deg, transparent 75%, rgba(234, 179, 8, 0.1) 75%)`,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
              }}></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
              <div className="flex justify-center lg:justify-start relative">
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-yellow-200 rounded-full opacity-20 blur-3xl scale-110 transition-all duration-500 group-hover:opacity-40 group-hover:scale-125"></div>
                <div className="relative">
                  <img 
                    src="/Granular.png" 
                    alt="Granular activated carbon pile showing texture and quality" 
                    className="w-full max-w-xs h-auto object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              
              <div className="text-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-yellow-600">
                  Granular Activated Carbon
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Ideal for water and air purification, our coconut shell-based granular carbon offers high surface area, low ash content, and excellent adsorption capacity—perfect for continuous filtration systems
                </p>
                
                {/* Key features */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">High Surface Area</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Low Ash Content</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Excellent Adsorption</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Eco-Friendly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Powdered activated carbon showcase */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-12 relative overflow-hidden transition-all duration-500 ease-in-out hover:shadow-2xl hover:scale-105 hover:border-yellow-300 hover:bg-gradient-to-br hover:from-yellow-50 hover:to-white group cursor-pointer">
            {/* Background pattern for featured section */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full" style={{
                backgroundImage: `linear-gradient(45deg, rgba(234, 179, 8, 0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(234, 179, 8, 0.1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(234, 179, 8, 0.1) 75%), linear-gradient(-45deg, transparent 75%, rgba(234, 179, 8, 0.1) 75%)`,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
              }}></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
              <div className="flex justify-center lg:justify-start relative">
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-yellow-200 rounded-full opacity-20 blur-3xl scale-110 transition-all duration-500 group-hover:opacity-40 group-hover:scale-125"></div>
                <div className="relative">
                  <img 
                    src="/Powdered.png" 
                    alt="Powdered activated carbon showing fine texture and quality" 
                    className="w-full max-w-md h-auto object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              
              <div className="text-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-yellow-600">
                  Powdered Activated Carbon
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Finely ground for rapid adsorption, our powdered carbon is widely used in water treatment, food processing, and pharmaceuticals—where quick action and high purity are essential
                </p>
                
                {/* Key features */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Rapid Adsorption</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">High Purity</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Fine Particle Size</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Quick Action</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pelletized activated carbon showcase */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-12 relative overflow-hidden transition-all duration-500 ease-in-out hover:shadow-2xl hover:scale-105 hover:border-yellow-300 hover:bg-gradient-to-br hover:from-yellow-50 hover:to-white group cursor-pointer">
            {/* Background pattern for featured section */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full" style={{
                backgroundImage: `linear-gradient(45deg, rgba(234, 179, 8, 0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(234, 179, 8, 0.1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(234, 179, 8, 0.1) 75%), linear-gradient(-45deg, transparent 75%, rgba(234, 179, 8, 0.1) 75%)`,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
              }}></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
              <div className="flex justify-center lg:justify-start relative">
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-yellow-200 rounded-full opacity-20 blur-3xl scale-110 transition-all duration-500 group-hover:opacity-40 group-hover:scale-125"></div>
                <div className="relative">
                  <img 
                    src="/Pelletized.png" 
                    alt="Pelletized activated carbon showing uniform cylindrical pellets" 
                    className="w-full max-w-md h-auto object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              
              <div className="text-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-yellow-600">
                  Pelletized Activated Carbon
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Uniformly shaped and low-dust, our pelletized carbon is engineered for industrial gas phase applications, offering superior strength, low pressure drop, and consistent performance
                </p>
                
                {/* Key features */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Uniform Shape</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Low Dust</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Superior Strength</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Low Pressure Drop</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;