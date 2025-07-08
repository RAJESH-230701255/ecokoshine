import React from 'react';
import { Package, Zap, Filter, Droplets } from 'lucide-react';
import ImageSlider from '../components/ImageSlider';

const Products: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-amber-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-20 text-yellow-200 opacity-10">
          <Package size={120} />
        </div>
        <div className="absolute bottom-40 left-10 text-amber-200 opacity-20">
          <Filter size={80} />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 px-4 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Page Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight" style={{ color: '#F0B800' }}>
              Our Products
            </h1>
            <div className="h-1 w-48 mx-auto rounded-full mb-8" style={{ backgroundColor: '#F0B800' }}></div>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Premium activated carbon products engineered for superior performance across diverse applications
            </p>
          </div>

          {/* Product Slider */}
          <div className="mb-16 animate-slide-up-delay-1">
            <ImageSlider />
          </div>

          {/* Product Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-slide-up-delay-2">
            
            {/* Granular Activated Carbon */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-yellow-200/40">
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFFBEA' }}>
                  <Package size={40} style={{ color: '#F0B800' }} />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#F0B800' }}>
                  Granular Activated Carbon
                </h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  Our granular activated carbon offers excellent adsorption capacity with optimal particle size distribution for various filtration applications.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>High surface area (900-1200 m²/g)</li>
                    <li>Uniform particle size</li>
                    <li>Low ash content</li>
                    <li>Excellent mechanical strength</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Applications:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Water treatment systems</li>
                    <li>Air purification</li>
                    <li>Food & beverage processing</li>
                    <li>Chemical processing</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Powder Activated Carbon */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-yellow-200/40">
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFFBEA' }}>
                  <Zap size={40} style={{ color: '#F0B800' }} />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#F0B800' }}>
                  Powder Activated Carbon
                </h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  Fine powder form provides maximum surface area contact for rapid adsorption in liquid phase applications.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Ultra-fine particle size</li>
                    <li>Rapid adsorption kinetics</li>
                    <li>High purity levels</li>
                    <li>Easy mixing and dispersion</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Applications:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Pharmaceutical purification</li>
                    <li>Sugar decolorization</li>
                    <li>Wastewater treatment</li>
                    <li>Chemical decolorization</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pelletized Activated Carbon */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-yellow-200/40">
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFFBEA' }}>
                  <Droplets size={40} style={{ color: '#F0B800' }} />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#F0B800' }}>
                  Pelletized Activated Carbon
                </h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  Cylindrical pellets engineered for optimal flow characteristics and minimal pressure drop in fixed-bed applications.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Uniform cylindrical shape</li>
                    <li>Low pressure drop</li>
                    <li>High mechanical strength</li>
                    <li>Excellent flow properties</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Applications:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Gas phase adsorption</li>
                    <li>Solvent recovery</li>
                    <li>Air pollution control</li>
                    <li>Catalyst support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="mb-16 animate-slide-up-delay-3">
            <div className="relative rounded-2xl p-8 md:p-12 shadow-2xl border border-yellow-300/50 overflow-hidden" style={{ backgroundColor: '#F0B800' }}>
              
              {/* Coconut leaves decoration */}
              <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-2 pointer-events-none z-30">
                <img 
                  src="/istockphoto-154309723-612x612-removebg-preview.png" 
                  alt="Coconut leaf" 
                  className="w-20 h-auto transform -rotate-12 drop-shadow-lg opacity-85"
                />
                <img 
                  src="/istockphoto-154309723-612x612-removebg-preview.png" 
                  alt="Coconut leaf" 
                  className="w-28 h-auto transform -rotate-3 drop-shadow-xl opacity-95"
                />
              </div>

              <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-2 pointer-events-none z-30">
                <img 
                  src="/istockphoto-154309723-612x612-removebg-preview.png" 
                  alt="Coconut leaf" 
                  className="w-20 h-auto transform rotate-12 scale-x-[-1] drop-shadow-lg opacity-85"
                />
                <img 
                  src="/istockphoto-154309723-612x612-removebg-preview.png" 
                  alt="Coconut leaf" 
                  className="w-28 h-auto transform rotate-3 scale-x-[-1] drop-shadow-xl opacity-95"
                />
              </div>

              <div className="relative z-40 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg tracking-tight mb-6">
                  Technical Excellence
                </h2>
                <div className="h-1 w-32 bg-white/80 mx-auto rounded-full mb-8"></div>
                <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
                  All our products meet international quality standards including ASTM, AWWA, and NSF certifications. Custom specifications available upon request.
                </p>
              </div>
            </div>
          </div>

          {/* Quality Assurance */}
          <div className="mb-16 animate-slide-up-delay-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-yellow-200/40">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#F0B800' }}>
                  Quality Assurance
                </h2>
                <div className="h-1 w-32 mx-auto rounded-full" style={{ backgroundColor: '#F0B800' }}></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFFBEA' }}>
                    <Filter size={32} style={{ color: '#F0B800' }} />
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-gray-800">Raw Material Testing</h4>
                  <p className="text-gray-600 text-sm">
                    Every batch of coconut shells undergoes rigorous quality checks before processing.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFFBEA' }}>
                    <Zap size={32} style={{ color: '#F0B800' }} />
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-gray-800">Process Control</h4>
                  <p className="text-gray-600 text-sm">
                    Advanced monitoring systems ensure consistent activation and quality parameters.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFFBEA' }}>
                    <Package size={32} style={{ color: '#F0B800' }} />
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-gray-800">Final Inspection</h4>
                  <p className="text-gray-600 text-sm">
                    Comprehensive testing of surface area, pore structure, and adsorption capacity.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFFBEA' }}>
                    <Droplets size={32} style={{ color: '#F0B800' }} />
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-gray-800">Certification</h4>
                  <p className="text-gray-600 text-sm">
                    All products come with detailed certificates of analysis and compliance documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center animate-slide-up-delay-5">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-yellow-200/40">
              <h3 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#F0B800' }}>
                Need Custom Solutions?
              </h3>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Our technical team can develop customized activated carbon products to meet your specific application requirements.
              </p>
              <button 
                className="text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg text-lg" 
                style={{ backgroundColor: '#F0B800' }} 
                onMouseEnter={(e) => e.target.style.backgroundColor = '#D4A017'} 
                onMouseLeave={(e) => e.target.style.backgroundColor = '#F0B800'}
                onClick={() => {
                  const footer = document.querySelector('footer');
                  if (footer) {
                    footer.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Products;