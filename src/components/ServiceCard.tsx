import React, { useState } from 'react';

interface ServiceCardProps {
  image: string;
  title: string;
  width?: number;
  height?: number;
  url?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  image, 
  title, 
  width = 350, 
  height = 200
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative animate-slide-up"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container with #FFFBEA background */}
      <div className="rounded-xl p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#FFFBEA' }}>
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-lg mb-4">
          <img 
            src={image}
            alt={title}
            style={{ width: `${width}px`, height: `${height}px` }}
            className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        {/* Title */}
        <div className="px-2">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#F0B800] transition-colors duration-300">
            {title}
          </h3>
        </div>
      </div>

      {/* Hover Popup */}
      {isHovered && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/80 backdrop-blur-sm rounded-xl flex items-center justify-center z-50 transition-all duration-300">
          <div className="bg-white rounded-lg p-6 shadow-2xl max-w-xs mx-4 transform scale-100 transition-transform duration-300">
            <h4 className="text-lg font-bold text-gray-800 mb-3 text-center">
              {title}
            </h4>
            <p className="text-gray-600 text-sm text-center leading-relaxed">
              {getDescription(title)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

// Helper function to get descriptions for each application
const getDescription = (title: string): string => {
  switch (title) {
    case 'Water Treatment':
      return 'Activated carbon removes impurities, chlorine, and organic contaminants from water, ensuring clean and safe drinking water for communities worldwide.';
    case 'Air Treatment':
      return 'Our carbon solutions trap harmful gases, odors, and volatile organic compounds (VOCs), significantly improving both indoor and industrial air quality.';
    case 'Food And Beverage':
      return 'Used to decolorize and purify ingredients like sugar and alcohol, eliminating unwanted tastes and odors while maintaining product quality.';
    case 'Medical Pharmaceutical':
      return 'Essential for toxin removal, digestive aid, and purification of raw materials in pharmaceutical manufacturing and medical applications.';
    case 'Chemical Processing':
      return 'Acts as a catalyst support and filtration medium, effectively removing impurities from chemicals and gases in industrial processes.';
    case 'Tobacco':
      return 'Utilized in tobacco filters to reduce harmful substances in smoke, contributing to improved product safety and quality.';
    default:
      return 'High-quality activated carbon solution for specialized industrial and commercial applications.';
  }
};

export default ServiceCard;