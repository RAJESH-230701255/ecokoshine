import React, { useEffect, useRef, useState } from 'react';

const Applications: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const [isClosingVisible, setIsClosingVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const closingRef = useRef<HTMLDivElement>(null);

  const applications = [
    { emoji: "💧", title: "Water & Wastewater Treatment", description: "Removal of chlorine, odors, organic pollutants" },
    { emoji: "🌬️", title: "Air & Gas Purification", description: "Adsorption of VOCs, toxic gases, and odors" },
    { emoji: "🥤", title: "Food & Beverage", description: "Decolorization and purification of liquids like sugar and alcohol" },
    { emoji: "💊", title: "Pharmaceuticals & Healthcare", description: "Toxin removal, raw material purification" },
    { emoji: "🧪", title: "Chemical Processing", description: "Filtration, catalyst support, impurity removal" },
    { emoji: "🚬", title: "Tobacco Industry", description: "Smoke filtration for reduced harmful intake" }
  ];

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    // Main section observer
    const sectionObserver = new IntersectionObserver(
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
      sectionObserver.observe(sectionRef.current);
      observers.push(sectionObserver);
    }

    // Individual item observers
    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        const itemObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleItems(prev => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }
            });
          },
          {
            threshold: 0.3,
            rootMargin: '-80px 0px -80px 0px'
          }
        );
        itemObserver.observe(ref);
        observers.push(itemObserver);
      }
    });

    // Closing statement observer
    if (closingRef.current) {
      const closingObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsClosingVisible(true);
            }
          });
        },
        {
          threshold: 0.3,
          rootMargin: '-50px 0px -50px 0px'
        }
      );
      closingObserver.observe(closingRef.current);
      observers.push(closingObserver);
    }

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <section 
      id="applications" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-10 blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-yellow-400 rounded-full opacity-10 blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-500 rounded-full opacity-5 blur-lg"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 transform translate-y-0 scale-100' 
            : 'opacity-0 transform translate-y-20 scale-95'
        }`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Applications & <span className="text-yellow-500">Industries</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our activated carbon products serve diverse industries with specialized solutions 
            for filtration, purification, and adsorption applications.
          </p>
        </div>

        {/* Applications List */}
        <div className="max-w-5xl mx-auto">
          <div className={`bg-white rounded-2xl shadow-lg border-2 border-yellow-200 p-8 lg:p-12 transition-all duration-1000 ease-out delay-300 ${
            isVisible 
              ? 'opacity-100 transform translate-y-0 scale-100 rotate-0' 
              : 'opacity-0 transform translate-y-16 scale-90 rotate-1'
          }`}>
            <div className="space-y-6">
              {applications.map((app, index) => (
                <div 
                  key={index}
                  ref={el => itemRefs.current[index] = el}
                  className={`flex items-start space-x-4 p-4 rounded-lg transition-all duration-700 ease-out hover:bg-yellow-50 hover:shadow-md hover:scale-105 ${
                    visibleItems[index] 
                      ? 'opacity-100 transform translate-x-0 scale-100' 
                      : 'opacity-0 transform translate-x-16 scale-95'
                  }`}
                  style={{ 
                    transitionDelay: `${600 + (index * 200)}ms`,
                    transformOrigin: 'left center'
                  }}
                >
                  <span className={`text-2xl transition-transform duration-500 ${
                    visibleItems[index] ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                  }`} style={{ transitionDelay: `${800 + (index * 200)}ms` }}>
                    {app.emoji}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{app.title}</h3>
                    <p className="text-gray-700">{app.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Closing statement */}
            <div 
              ref={closingRef}
              className={`mt-12 text-center transition-all duration-1000 ease-out ${
                isClosingVisible 
                  ? 'opacity-100 transform translate-y-0 scale-100 rotate-0' 
                  : 'opacity-0 transform translate-y-12 scale-90 rotate-2'
              }`}
              style={{ transitionDelay: '1800ms' }}
            >
              <div className={`bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg p-6 border-2 border-yellow-300 transition-all duration-700 ease-out ${
                isClosingVisible 
                  ? 'shadow-lg hover:shadow-xl hover:scale-105 animate-pulse' 
                  : 'shadow-none'
              }`}>
                <p className="text-2xl font-bold text-gray-900 italic">
                  Clean and green, like you've never seen
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Applications;