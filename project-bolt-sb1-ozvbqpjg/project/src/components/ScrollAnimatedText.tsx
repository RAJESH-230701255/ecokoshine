import React, { useEffect, useRef, useState } from 'react';

interface ScrollAnimatedTextProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollAnimatedText: React.FC<ScrollAnimatedTextProps> = ({ children, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[2000ms] ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-32 scale-95'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimatedText;