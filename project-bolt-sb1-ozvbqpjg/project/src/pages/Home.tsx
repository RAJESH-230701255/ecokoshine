import React from 'react';
import { Sparkles, Recycle, Heart } from 'lucide-react';
import ImageSlider from '../components/ImageSlider';
import ServiceCard from '../components/ServiceCard';
import ScrollAnimatedText from '../components/ScrollAnimatedText';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-amber-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-32 left-20 text-yellow-200 opacity-10">
          <Recycle size={100} />
        </div>
        <div className="absolute bottom-20 right-10 text-amber-200 opacity-20">
          <Heart size={60} />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 px-4 py-12 animate-slide-up">
        <div className="text-center max-w-6xl mx-auto relative">
          
          {/* Geometric Design - Right Side */}
          <div className="absolute right-0 top-0 hidden lg:block pointer-events-none opacity-80 animate-slide-up-delay-1">
            <div className="relative w-[500px] h-full">
              {/* Vertical Flowing Wave Design */}
              <svg 
                width="400" 
                height="800" 
                viewBox="0 0 400 800" 
                className="absolute top-0 right-0"
              >
                {/* Gradient definitions */}
                <defs>
                  <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#F0B800" stopOpacity="0.9"/>
                    <stop offset="50%" stopColor="#FFD700" stopOpacity="0.7"/>
                    <stop offset="100%" stopColor="#F0B800" stopOpacity="0.5"/>
                  </linearGradient>
                  <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8"/>
                    <stop offset="50%" stopColor="#F0B800" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#FFA500" stopOpacity="0.4"/>
                  </linearGradient>
                  <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#F0B800" stopOpacity="0.7"/>
                    <stop offset="50%" stopColor="#FFD700" stopOpacity="0.5"/>
                    <stop offset="100%" stopColor="#F0B800" stopOpacity="0.3"/>
                  </linearGradient>
                </defs>
                
                {/* Primary Vertical Wave - Main Flow */}
                <path
                  d="M 350 0
                     C 300 50, 250 100, 300 150
                     C 350 200, 400 250, 350 300
                     C 300 350, 250 400, 300 450
                     C 350 500, 400 550, 350 600
                     C 300 650, 250 700, 300 750
                     C 350 800, 400 850, 350 900"
                  stroke="url(#waveGradient1)"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
                
                {/* Secondary Wave - Parallel Flow */}
                <path
                  d="M 320 25
                     C 270 75, 220 125, 270 175
                     C 320 225, 370 275, 320 325
                     C 270 375, 220 425, 270 475
                     C 320 525, 370 575, 320 625
                     C 270 675, 220 725, 270 775
                     C 320 825, 370 875, 320 925"
                  stroke="url(#waveGradient2)"
                  strokeWidth="3.5"
                  fill="none"
                  strokeLinecap="round"
                />
                
                {/* Tertiary Wave - Outer Flow */}
                <path
                  d="M 380 -25
                     C 330 25, 280 75, 330 125
                     C 380 175, 430 225, 380 275
                     C 330 325, 280 375, 330 425
                     C 380 475, 430 525, 380 575
                     C 330 625, 280 675, 330 725
                     C 380 775, 430 825, 380 875"
                  stroke="url(#waveGradient3)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                
                {/* Inner Wave - Delicate Flow */}
                <path
                  d="M 290 50
                     C 240 100, 190 150, 240 200
                     C 290 250, 340 300, 290 350
                     C 240 400, 190 450, 240 500
                     C 290 550, 340 600, 290 650
                     C 240 700, 190 750, 240 800"
                  stroke="#FFD700"
                  strokeWidth="2.5"
                  fill="none"
                  opacity="0.8"
                  strokeLinecap="round"
                />
                
                {/* Micro Wave - Center Flow */}
                <path
                  d="M 260 75
                     C 210 125, 160 175, 210 225
                     C 260 275, 310 325, 260 375
                     C 210 425, 160 475, 210 525
                     C 260 575, 310 625, 260 675
                     C 210 725, 160 775, 210 825"
                  stroke="#F0B800"
                  strokeWidth="2"
                  fill="none"
                  strokeOpacity="0.7"
                  strokeLinecap="round"
                />
                
                {/* Additional Flowing Lines */}
                <path
                  d="M 230 100
                     C 180 150, 130 200, 180 250
                     C 230 300, 280 350, 230 400
                     C 180 450, 130 500, 180 550
                     C 230 600, 280 650, 230 700"
                  stroke="#F0B800"
                  strokeWidth="1.5"
                  fill="none"
                  strokeOpacity="0.6"
                  strokeLinecap="round"
                />
                
                {/* Fine Detail Lines */}
                <path
                  d="M 200 125
                     C 150 175, 100 225, 150 275
                     C 200 325, 250 375, 200 425
                     C 150 475, 100 525, 150 575
                     C 200 625, 250 675, 200 725"
                  stroke="#FFD700"
                  strokeWidth="1.2"
                  fill="none"
                  strokeOpacity="0.5"
                  strokeLinecap="round"
                />
                
                {/* Subtle Grid Pattern */}
                <g opacity="0.3">
                  <line x1="170" y1="0" x2="170" y2="800" stroke="#F0B800" strokeWidth="0.8"/>
                  <line x1="200" y1="0" x2="200" y2="800" stroke="#F0B800" strokeWidth="0.8"/>
                  <line x1="230" y1="0" x2="230" y2="800" stroke="#F0B800" strokeWidth="0.8"/>
                  <line x1="260" y1="0" x2="260" y2="800" stroke="#F0B800" strokeWidth="0.8"/>
                  <line x1="290" y1="0" x2="290" y2="800" stroke="#F0B800" strokeWidth="0.8"/>
                  <line x1="320" y1="0" x2="320" y2="800" stroke="#F0B800" strokeWidth="0.8"/>
                  <line x1="350" y1="0" x2="350" y2="800" stroke="#F0B800" strokeWidth="0.8"/>
                  <line x1="380" y1="0" x2="380" y2="800" stroke="#F0B800" strokeWidth="0.8"/>
                </g>
                
                {/* Connecting Flow Elements */}
                <path
                  d="M 320 200 Q 340 220 320 240"
                  stroke="#F0B800"
                  strokeWidth="2"
                  fill="none"
                  strokeOpacity="0.7"
                  strokeLinecap="round"
                />
                <path
                  d="M 270 350 Q 290 370 270 390"
                  stroke="#FFD700"
                  strokeWidth="2"
                  fill="none"
                  strokeOpacity="0.7"
                  strokeLinecap="round"
                />
                <path
                  d="M 320 500 Q 340 520 320 540"
                  stroke="#F0B800"
                  strokeWidth="2"
                  fill="none"
                  strokeOpacity="0.7"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Brand name */}
          <div className="mb-8 animate-slide-up-delay-1">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight" style={{ color: '#F0B800' }}>
              <div>Activated Carbon,</div>
              <div>Crafted by Nature,</div>
              <div>Perfected by Technology</div>
            </h1>
            <div className="h-1 w-48 mx-auto rounded-full" style={{ backgroundColor: '#F0B800' }}></div>
          </div>

          {/* Description */}
          <div className="p-8 md:p-12 mb-12 animate-slide-up-delay-2">
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed font-normal max-w-3xl mx-auto">
              EcoKoshine leads in eco-friendly innovation. Our products harness the power of charcoal for sustainability. We value nature, purity, and functionality. Every product is a step toward a greener tomorrow.
            </p>
            
            {/* Decorative elements */}
            <div className="flex justify-center items-center mt-8 space-x-6 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-yellow-200/40">
              <div className="flex items-center space-x-2 text-yellow-600">
                <Sparkles size={24} />
                <span className="text-sm font-medium">Pure</span>
              </div>
              <div className="h-6 w-px bg-gradient-to-b from-yellow-300 to-yellow-400 shadow-sm"></div>
              <div className="flex items-center space-x-2 text-yellow-700">
                <Recycle size={24} />
                <span className="text-sm font-medium">Sustainable</span>
              </div>
              <div className="h-6 w-px bg-gradient-to-b from-yellow-300 to-yellow-400 shadow-sm"></div>
              <div className="flex items-center space-x-2 text-amber-600">
                <Heart size={24} />
                <span className="text-sm font-medium">Natural</span>
              </div>
            </div>
          </div>

          {/* Our Products Heading with coconut leaves */}
          <div className="relative rounded-2xl p-8 md:p-12 shadow-2xl border border-yellow-300/50 mb-12 overflow-hidden animate-slide-up-delay-3" style={{ backgroundColor: '#F0B800' }}>
            
            {/* Left side coconut leaves - perfectly aligned vertically */}
            <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-2 pointer-events-none z-30">
              {/* Top leaf */}
              <img 
                src="/istockphoto-154309723-612x612-removebg-preview.png" 
                alt="Coconut leaf" 
                className="w-20 h-auto transform -rotate-12 drop-shadow-lg opacity-85"
              />
              {/* Middle leaf - largest and centered */}
              <img 
                src="/istockphoto-154309723-612x612-removebg-preview.png" 
                alt="Coconut leaf" 
                className="w-28 h-auto transform -rotate-3 drop-shadow-xl opacity-95"
              />
              {/* Bottom leaf */}
              <img 
                src="/istockphoto-154309723-612x612-removebg-preview.png" 
                alt="Coconut leaf" 
                className="w-22 h-auto transform -rotate-18 drop-shadow-lg opacity-80"
              />
            </div>

            {/* Right side coconut leaves - perfectly aligned vertically (mirrored) */}
            <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-2 pointer-events-none z-30">
              {/* Top leaf (mirrored) */}
              <img 
                src="/istockphoto-154309723-612x612-removebg-preview.png" 
                alt="Coconut leaf" 
                className="w-20 h-auto transform rotate-12 scale-x-[-1] drop-shadow-lg opacity-85"
              />
              {/* Middle leaf - largest and centered (mirrored) */}
              <img 
                src="/istockphoto-154309723-612x612-removebg-preview.png" 
                alt="Coconut leaf" 
                className="w-28 h-auto transform rotate-3 scale-x-[-1] drop-shadow-xl opacity-95"
              />
              {/* Bottom leaf (mirrored) */}
              <img 
                src="/istockphoto-154309723-612x612-removebg-preview.png" 
                alt="Coconut leaf" 
                className="w-22 h-auto transform rotate-18 scale-x-[-1] drop-shadow-lg opacity-80"
              />
            </div>

            {/* Subtle tropical atmosphere overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-100/10 via-transparent to-green-100/10 pointer-events-none z-10"></div>
            
            {/* Natural light filtering effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent pointer-events-none z-15"></div>

            {/* Content */}
            <div className="relative z-40">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg tracking-tight">
                Our Products
              </h2>
              <div className="h-1 w-24 bg-white/80 mx-auto rounded-full mt-4"></div>
            </div>
          </div>

          {/* Image Slider */}
          <div className="animate-slide-up-delay-4">
            <ImageSlider />
          </div>

          {/* Applications Heading with same background styling */}
          <div className="relative rounded-2xl p-8 md:p-12 shadow-2xl border border-yellow-300/50 mb-12 overflow-hidden animate-slide-up-slow" style={{ backgroundColor: '#F0B800' }}>
            
            {/* Left side coconut leaves - perfectly aligned vertically */}
            <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-2 pointer-events-none z-30">
              {/* Top leaf */}
              <img 
                src="/istockphoto-154309723-612x612-removebg-preview.png" 
                alt="Coconut leaf" 
                className="w-20 h-auto transform -rotate-12 drop-shadow-lg opacity-85"
              />
              {/* Middle leaf - largest and centered */}
              <img 
                src="/istockphoto-154309723-612x612-removebg-preview.png" 
                alt="Coconut leaf" 
                className="w-28 h-auto transform -rotate-3 drop-shadow-xl opacity-95"
              />
              {/* Bottom leaf */}
              <img 
                src="/istockphoto-154309723-612x612-removebg-preview.png" 
                alt="Coconut leaf" 
                className="w-22 h-auto transform -rotate-18 drop-shadow-lg opacity-80"
              />
            </div>

            {/* Right side coconut leaves - perfectly aligned vertically (mirrored) */}
            <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-2 pointer-events-none z-30">
              {/* Top leaf (mirrored) */}
              <img 
                src="/istockphoto-154309723-612x612-removebg-preview.png" 
                alt="Coconut leaf" 
                className="w-20 h-auto transform rotate-12 scale-x-[-1] drop-shadow-lg opacity-85"
              />
              {/* Middle leaf - largest and centered (mirrored) */}
              <img 
                src="/istockphoto-154309723-612x612-removebg-preview.png" 
                alt="Coconut leaf" 
                className="w-28 h-auto transform rotate-3 scale-x-[-1] drop-shadow-xl opacity-95"
              />
              {/* Bottom leaf (mirrored) */}
              <img 
                src="/istockphoto-154309723-612x612-removebg-preview.png" 
                alt="Coconut leaf" 
                className="w-22 h-auto transform rotate-18 scale-x-[-1] drop-shadow-lg opacity-80"
              />
            </div>

            {/* Subtle tropical atmosphere overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-100/10 via-transparent to-green-100/10 pointer-events-none z-10"></div>
            
            {/* Natural light filtering effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent pointer-events-none z-15"></div>

            {/* Content */}
            <div className="relative z-40">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg tracking-tight">
                Applications
              </h2>
              <div className="h-1 w-24 bg-white/80 mx-auto rounded-full mt-4"></div>
            </div>
          </div>

          {/* Service Cards Grid - Updated to 6 cards with responsive layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12 animate-slide-up-cards">
            {/* Water Treatment Service Card */}
            <ServiceCard 
              image="/pexels-jakob-schlothane-183270347-12634302 copy.jpg"
              title="Water Treatment"
              width={350}
              height={200}
              url="https://www.wfa.com.au/charcoal-water/?srsltid=AfmBOor1tryPdcybfqChmXn8zqIAjodXzt0CQCpD579S0SXueDjsikrk"
            />

            {/* Air Treatment Service Card */}
            <ServiceCard 
              image="/csm_steuerungsysteme_biowaescher_biofilter_abluftreinigung_steinfeld_8b5370d2d5.webp"
              title="Air Treatment"
              width={350}
              height={200}
              url="https://airpurifiers.com/tech-center/activated-charcoal-for-air-purifiers/"
            />

            {/* Food And Beverage Service Card */}
            <ServiceCard 
              image="/HD-wallpaper-food-burger-drink-still-life.jpg"
              title="Food And Beverage"
              width={350}
              height={200}
              url="https://www.carbotech.de/en/applications/food-and-beverage/"
            />

            {/* Medical Pharmaceutical Service Card */}
            <ServiceCard 
              image="/pngtree-pharmaceutical-medicine-on-white-background-image_13182873.png"
              title="Medical Pharmaceutical"
              width={350}
              height={200}
              url="https://www.webmd.com/vitamins/ai/ingredientmono-269/activated-charcoal"
            />

            {/* Chemical Processing Service Card */}
            <ServiceCard 
              image="/working-with-chemicals.jpg"
              title="Chemical Processing"
              width={350}
              height={200}
              url="https://www.chemviron.eu/why-is-activated-carbon-important-for-liquid-chemicals/"
            />

            {/* Tobacco Service Card */}
            <ServiceCard 
              image="/desktop-wallpaper-tobacco-products-hq-tobacco-tobacco.jpg"
              title="Tobacco"
              width={350}
              height={200}
              url="https://pmc.ncbi.nlm.nih.gov/articles/PMC6471497/"
            />
          </div>

          {/* Charcoal Applications Description */}
          <ScrollAnimatedText className="p-8 md:p-12 mb-16">
            <div className="backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-yellow-200/30" style={{ backgroundColor: '#FFFBEA' }}>
              <div className="text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed font-semibold max-w-5xl mx-auto text-justify space-y-6">
                <p>
                  Activated charcoal plays a vital role across numerous industries thanks to its exceptional adsorption properties. In water treatment, it removes impurities, chlorine, and organic contaminants, ensuring clean, safe drinking water. For air purification, it traps harmful gases, odors, and VOCs, enhancing both indoor and industrial air quality. In the food and beverage industry, it's used to decolorize and purify ingredients like sugar and alcohol, eliminating unwanted tastes and odors.
                </p>
                <p>
                  The medical and pharmaceutical fields use activated charcoal for toxin removal, digestive aid, and purification of raw materials. In chemical processing, it acts as a catalyst support and filtration medium, helping remove impurities from chemicals and gases. Even in the tobacco industry, it's used in filters to reduce harmful substances in smoke.
                </p>
                <p>
                  Thanks to its high porosity and surface area, activated charcoal remains a highly effective and versatile agent for filtration and purification across diverse sectors.
                </p>
              </div>
            </div>
          </ScrollAnimatedText>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Home;