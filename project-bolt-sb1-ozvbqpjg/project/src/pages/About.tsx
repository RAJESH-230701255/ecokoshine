import React from 'react';
import { Leaf, Award, Globe, Users, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-amber-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-20 text-yellow-200 opacity-10">
          <Leaf size={120} />
        </div>
        <div className="absolute bottom-40 right-10 text-amber-200 opacity-20">
          <Globe size={80} />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 px-4 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Page Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight" style={{ color: '#F0B800' }}>
              About EcoKoshine
            </h1>
            <div className="h-1 w-48 mx-auto rounded-full mb-8" style={{ backgroundColor: '#F0B800' }}></div>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Leading the way in sustainable activated carbon solutions, crafted from nature's finest coconut shells
            </p>
          </div>

          {/* Company Story Section */}
          <div className="mb-16 animate-slide-up-delay-1">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-yellow-200/40">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#F0B800' }}>
                    Our Story
                  </h2>
                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p className="text-lg">
                      EcoKoshine Carbon was founded with a vision to transform waste coconut shells into premium activated carbon solutions. Our journey began with a commitment to environmental sustainability and innovation in carbon technology.
                    </p>
                    <p className="text-lg">
                      Located in the heart of Tamil Nadu's coconut-rich region, we have access to the finest raw materials. Our state-of-the-art manufacturing facility combines traditional knowledge with modern technology to produce world-class activated carbon products.
                    </p>
                    <p className="text-lg">
                      Today, we serve industries worldwide, from water treatment to pharmaceuticals, always maintaining our core values of quality, sustainability, and customer satisfaction.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="/coconutshell12.jpg" 
                    alt="Coconut shells raw material" 
                    className="w-full h-80 object-cover rounded-xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-slide-up-delay-2">
            
            {/* Mission */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-yellow-200/40 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F0B800' }}>
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#F0B800' }}>Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide sustainable, high-quality activated carbon solutions that protect the environment while meeting the diverse needs of industries worldwide.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-yellow-200/40 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F0B800' }}>
                <Globe size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#F0B800' }}>Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the global leader in eco-friendly activated carbon manufacturing, setting new standards for sustainability and innovation in the industry.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-yellow-200/40 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F0B800' }}>
                <Heart size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#F0B800' }}>Our Values</h3>
              <p className="text-gray-700 leading-relaxed">
                Sustainability, quality excellence, customer focus, innovation, and environmental responsibility guide everything we do.
              </p>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-16 animate-slide-up-delay-3">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#F0B800' }}>
                Why Choose EcoKoshine?
              </h2>
              <div className="h-1 w-32 mx-auto rounded-full" style={{ backgroundColor: '#F0B800' }}></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Quality Assurance */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFFBEA' }}>
                  <Award size={40} style={{ color: '#F0B800' }} />
                </div>
                <h4 className="text-xl font-bold mb-4 text-gray-800">Quality Assurance</h4>
                <p className="text-gray-600 leading-relaxed">
                  Rigorous testing and quality control ensure every batch meets international standards and customer specifications.
                </p>
              </div>

              {/* Sustainable Process */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFFBEA' }}>
                  <Leaf size={40} style={{ color: '#F0B800' }} />
                </div>
                <h4 className="text-xl font-bold mb-4 text-gray-800">Sustainable Process</h4>
                <p className="text-gray-600 leading-relaxed">
                  Our eco-friendly manufacturing process transforms agricultural waste into valuable products, reducing environmental impact.
                </p>
              </div>

              {/* Global Reach */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFFBEA' }}>
                  <Globe size={40} style={{ color: '#F0B800' }} />
                </div>
                <h4 className="text-xl font-bold mb-4 text-gray-800">Global Reach</h4>
                <p className="text-gray-600 leading-relaxed">
                  Serving customers worldwide with reliable supply chains and consistent product quality across all markets.
                </p>
              </div>

              {/* Expert Team */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFFBEA' }}>
                  <Users size={40} style={{ color: '#F0B800' }} />
                </div>
                <h4 className="text-xl font-bold mb-4 text-gray-800">Expert Team</h4>
                <p className="text-gray-600 leading-relaxed">
                  Our experienced team of engineers and technicians ensures optimal product performance and customer support.
                </p>
              </div>
            </div>
          </div>

          {/* Manufacturing Process */}
          <div className="mb-16 animate-slide-up-delay-4">
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
                <img 
                  src="/istockphoto-154309723-612x612-removebg-preview.png" 
                  alt="Coconut leaf" 
                  className="w-22 h-auto transform -rotate-18 drop-shadow-lg opacity-80"
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
                <img 
                  src="/istockphoto-154309723-612x612-removebg-preview.png" 
                  alt="Coconut leaf" 
                  className="w-22 h-auto transform rotate-18 scale-x-[-1] drop-shadow-lg opacity-80"
                />
              </div>

              <div className="relative z-40 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg tracking-tight mb-6">
                  Our Manufacturing Excellence
                </h2>
                <div className="h-1 w-32 bg-white/80 mx-auto rounded-full mb-8"></div>
                <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
                  From carefully selected coconut shells to precision-engineered activated carbon, our manufacturing process combines traditional craftsmanship with cutting-edge technology to deliver products that exceed industry standards.
                </p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center animate-slide-up-delay-5">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-yellow-200/40">
              <h3 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#F0B800' }}>
                Ready to Partner with Us?
              </h3>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Discover how EcoKoshine's premium activated carbon solutions can enhance your operations. Contact us today to discuss your specific requirements.
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
                Get In Touch
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

export default About;