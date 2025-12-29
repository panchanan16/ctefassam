"use client"
import { useState, useEffect } from 'react';

const HomeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { 
      src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000", 
      alt: "Teacher in classroom" 
    },
    { 
      src: "https://images.unsplash.com/photo-1544531585-9847b68c8c86?auto=format&fit=crop&q=80&w=1000", 
      alt: "Collaborative learning" 
    },
    { 
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000", 
      alt: "Digital education" 
    },
  ];

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative group max-w-2xl mx-auto md:mx-0">
      
      {/* Yellow decoration behind - 100% same as original */}
      <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-full h-full bg-amber-400 rounded-tr-[40px] md:rounded-tr-[50px] rounded-bl-[40px] md:rounded-bl-[50px] -z-10"></div>

      {/* Main Image Container */}
      <div className="relative w-full h-[350px] md:h-[400px] rounded-tr-[40px] md:rounded-tr-[50px] rounded-bl-[40px] md:rounded-bl-[50px] shadow-2xl border-4 border-white overflow-hidden">
        
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            {/* Dark gradient at bottom for indicator visibility */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        ))}

        {/* Manual Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "w-8 bg-amber-400" 
                  : "w-2 bg-white/60 hover:bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;