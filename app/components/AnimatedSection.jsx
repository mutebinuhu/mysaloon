"use client"
import React, { useRef, useEffect } from 'react';

const AnimatedSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('animate-fadeIn');
          } else {
            section.classList.remove('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="transition-opacity duration-1000 opacity-0"
    >
      <h1 className="text-4xl">Hello, I'm an animated section!</h1>
      <p>This section will fade in when it becomes visible in the viewport.</p>
    </div>
  );
};

export default AnimatedSection;
