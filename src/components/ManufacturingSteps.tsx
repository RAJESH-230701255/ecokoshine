import React, { useEffect, useRef, useState } from 'react';
import { Leaf, Flame, Droplets, Filter, Package, CheckCircle } from 'lucide-react';

const ManufacturingSteps: React.FC = () => {
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>([]);
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const steps = [
    {
      number: "01",
      title: "Raw Material Collection",
      description: "Premium coconut shells are carefully selected and collected from sustainable sources. The shells are inspected for quality, ensuring they have the right density and carbon content for optimal activation.",
      icon: Leaf,
      details: [
        "Sourcing from certified coconut farms",
        "Quality inspection for density and moisture",
        "Cleaning and preparation of shells"
      ]
    },
    {
      number: "02", 
      title: "Collection and Cleaning",
      description: "Coconut shells are collected and cleaned to remove any dirt, fiber, or organic residues.",
      icon: Flame,
      details: [
        "Collection from sustainable sources",
        "Removal of dirt and organic residues",
        "Cleaning and preparation for processing"
      ]
    },
    {
      number: "03",
      title: "Carbonization Process",
      description: "Coconut shells undergo controlled heating in the absence of oxygen (pyrolysis) at temperatures between 400-600°C. This process removes volatile compounds and creates the initial carbon structure.",
      icon: Droplets,
      details: [
        "Controlled temperature heating (400-600°C)",
        "Oxygen-free environment (pyrolysis)",
        "Formation of basic carbon structure"
      ]
    },
    {
      number: "04",
      title: "Activation",
      description: "The charcoal is activated to develop a highly porous structure that increases its surface area. Ecokoshine Carbon uses chemical activation, where the charcoal is treated with agents like phosphoric acid or potassium hydroxide before heating.",
      icon: Filter,
      details: [
        "Chemical activation with phosphoric acid or potassium hydroxide",
        "Development of highly porous structure",
        "Significant increase in surface area"
      ]
    },
    {
      number: "05",
      title: "Final Processing and Packaging",
      description: "The activated carbon is first dried to remove any remaining moisture. It is then sieved into various particle sizes based on application requirements. Finally, the product is carefully packed for storage or sale.",
      icon: Package,
      details: [
        "Drying to remove remaining moisture",
        "Sieving into various particle sizes",
        "Careful packaging for storage or sale"
      ]
    }
  ];

  useEffect(() => {
    // Track scroll position relative to hero section
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      const heroHeight = heroSection ? heroSection.offsetHeight : 0;
      const scrollPosition = window.scrollY;
      
      const currentlyPastHero = scrollPosition > heroHeight * 0.8; // Trigger when 80% past hero
      
      if (currentlyPastHero !== hasScrolledPastHero) {
        setHasScrolledPastHero(currentlyPastHero);
        
        // Reset all animations when scrolling back up to hero
        if (!currentlyPastHero) {
          setVisibleSteps([]);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              // Only trigger animation if we've scrolled past hero and element is intersecting
              if (entry.isIntersecting && hasScrolledPastHero) {
                setVisibleSteps(prev => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              } else if (!hasScrolledPastHero) {
                // Reset visibility when scrolled back to hero
                setVisibleSteps(prev => {
                  const newVisible = [...prev];
                  newVisible[index] = false;
                  return newVisible;
                });
              }
            });
          },
          {
            threshold: 0.2,
            rootMargin: '-100px 0px -100px 0px'
          }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observers.forEach(observer => observer.disconnect());
    };
  }, [hasScrolledPastHero]);

  return (
    <section id="manufacturing-steps" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4 uppercase">
            HOW ACTIVATED CARBON IS MADE
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From coconut shells to premium activated carbon - discover our comprehensive 
            5-step manufacturing process that creates superior adsorption materials.
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            const isVisible = visibleSteps[index];
            
            return (
              <div 
                key={index} 
                ref={el => stepRefs.current[index] = el}
                className={`grid lg:grid-cols-2 gap-12 items-stretch ${isEven ? '' : 'lg:grid-flow-col-dense'}`}
              >
                {/* Content Card - Left side for even, right side for odd */}
                <div className={`${isEven ? '' : 'lg:col-start-2'} bg-white rounded-lg shadow-lg p-8 border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300 flex flex-col ${
                  isVisible 
                    ? (isEven ? 'animate-slide-in-left' : 'animate-slide-in-right')
                    : 'opacity-0 transform translate-x-0'
                }`}>
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-gray-900">
                      <span className="text-yellow-500 mr-2">STEP {step.number}:</span>
                      {step.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg flex-grow">
                    {step.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Process Details:</h4>
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Element Card - Right side for even, left side for odd */}
                <div className={`${isEven ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'} transition-all duration-300 ${
                  isVisible 
                    ? (isEven ? 'animate-slide-in-right' : 'animate-slide-in-left')
                    : 'opacity-0 transform translate-x-0'
                }`}>
                  {/* Special content for Step 1 with coconut tree image only */}
                  {index === 0 ? (
                    <div className="bg-yellow-50 rounded-lg p-8 border-2 border-yellow-200 flex flex-col justify-center h-96 min-h-96">
                      <img 
                        src="/Coconut tree copy copy.jpg" 
                        alt="Coconut tree with fresh coconuts" 
                        className="w-full h-80 object-contain rounded-lg mx-auto coconut-tree-image"
                      />
                    </div>
                  ) : index === 1 ? (
                    <div className="bg-yellow-50 rounded-lg p-8 border-2 border-yellow-200 flex flex-col justify-center h-96 min-h-96">
                      <img 
                        src="/Firefly_generate a beautiful dehusked full coconut 672080 copy copy.jpg" 
                        alt="Dehusked coconut shell ready for processing" 
                        className="w-80 h-80 object-contain rounded-lg mx-auto coconut-shell-image"
                      />
                    </div>
                  ) : index === 2 ? (
                    <div className="bg-yellow-50 rounded-lg p-8 border-2 border-yellow-200 flex flex-col justify-center h-96 min-h-96">
                      <img 
                        src="/Coconut charcoal.png" 
                        alt="Coconut charcoal after carbonization process" 
                        className="w-80 h-80 object-contain rounded-lg mx-auto coconut-charcoal-image"
                      />
                    </div>
                  ) : index === 3 ? (
                    <div className="bg-yellow-50 rounded-lg p-8 border-2 border-yellow-200 flex flex-col justify-center h-96 min-h-96">
                      <img 
                        src="/Activated coconut carbon copy.jpg" 
                        alt="Activated coconut carbon granules in coconut shell bowl" 
                        className="w-80 h-80 object-contain rounded-lg mx-auto activated-carbon-image"
                      />
                    </div>
                  ) : index === 4 ? (
                    <div className="bg-yellow-50 rounded-lg p-8 border-2 border-yellow-200 flex flex-col justify-center h-96 min-h-96">
                      <img 
                        src="/Packaging1 copy.jpg" 
                        alt="Professional packaging of activated carbon products" 
                        className="w-80 h-80 object-contain rounded-lg mx-auto packaging-image"
                      />
                    </div>
                  ) : (
                    <div className="bg-yellow-50 rounded-lg p-8 border-2 border-yellow-200 flex flex-col justify-center h-96 min-h-96">
                      <div className="text-center">
                        <div className="bg-yellow-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-yellow-300">
                          <Icon className="h-12 w-12 text-yellow-600" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Step {step.number}:</h4>
                        <p className="text-gray-600">
                          {step.title.split(' ').map((word, i) => (
                            <span key={i} className={i === step.title.split(' ').length - 1 ? 'text-yellow-600 font-semibold' : ''}>
                              {word}{i < step.title.split(' ').length - 1 ? ' ' : ''}
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ManufacturingSteps;