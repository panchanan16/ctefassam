"use client"

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, User, Menu } from 'lucide-react';

const CTEFHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://img.freepik.com/premium-photo/this-is-smile-sober-folks-shot-diverse-group-people-standing-together-after-group-therapy_590464-2072.jpg?semt=ais_hybrid&w=740&q=80',
      title: 'WELCOME TO CTEF ASSAM',
      subtitle: 'The Council for Teacher Education',
      description: 'The Council for Teacher Education Foundation (CTEF) is a leading professional organization in India, established in 1983 by the late Dr. Gulab Chaurasia — an eminent educationist and humanitarian.'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1600&h=900&fit=crop',
      title: 'EMPOWERING EDUCATORS',
      subtitle: 'Excellence in Teaching & Learning',
      description: 'We are committed to enhancing the quality of education through innovative teaching methodologies, comprehensive training programs, and fostering a community of dedicated educators across India.'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&h=900&fit=crop',
      title: 'BUILDING FUTURE LEADERS',
      subtitle: 'Transforming Education Together',
      description: 'Through collaborative initiatives, research, and continuous professional development, CTEF Assam strives to create a transformative educational ecosystem that nurtures excellence and innovation.'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&h=900&fit=crop',
      title: 'PROFESSIONAL DEVELOPMENT',
      subtitle: 'Advancing Teacher Excellence',
      description: 'Join us in our mission to elevate teaching standards through workshops, seminars, and conferences that bring together educators, researchers, and policy makers to shape the future of education.'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&h=900&fit=crop',
      title: 'INNOVATION IN EDUCATION',
      subtitle: "Shaping Tomorrow's Classroom",
      description: "Embracing modern pedagogical approaches and technology-driven solutions, CTEF Assam leads the way in creating dynamic learning environments that prepare students for the challenges of tomorrow."
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide]);

  // Touch support
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#a6c251] to-[#9ab646] shadow-lg">
        <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full flex items-center justify-between h-20 lg:h-22">
            {/* Logo Section */}
            <div className="flex items-center space-x-3 lg:space-x-4">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform duration-300">
                
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-wider drop-shadow-lg">
                CTEF ASSAM
              </h1>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center space-x-5">
              {['Home', 'About us', 'Photo Gallery', 'E-Conference'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-white text-lg font-medium hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            <div className="flex lg:hidden items-center space-x-3 lg:space-x-4">             
              <button className="w-10 h-10 lg:w-12 lg:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center border-2 border-white/50 transition-all duration-300 hover:scale-110 lg:hidden">
                <Menu className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section with Slider */}
      <section className="relative h-screen mt-20 overflow-hidden">
        <div 
          className="relative w-full h-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slides */}
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/40" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col lg:mt-20 items-center justify-center text-center px-4 sm:px-6 lg:px-8 animate-fade-in-up">
                {/* <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 lg:mb-6 tracking-wider drop-shadow-2xl leading-tight">
                  {slide.title}
                </h2> */}
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-medium text-white mb-6 lg:mb-10 italic drop-shadow-xl">
                  {slide.subtitle}
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-white max-w-5xl leading-relaxed drop-shadow-lg font-light px-4">
                  {slide.description.split('(CTEF)').map((part, i) => (
                    <React.Fragment key={i}>
                      {i > 0 && <span className="font-semibold">(CTEF)</span>}
                      {part}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 sm:left-6 lg:left-10 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/50 transition-all duration-300 hover:scale-110 z-10 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 sm:right-6 lg:right-10 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/50 transition-all duration-300 hover:scale-110 z-10 group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white group-hover:scale-110 transition-transform" />
          </button>

          {/* Navigation Dots */}
          <div className="absolute bottom-6 sm:bottom-8 lg:bottom-24 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 lg:space-x-4 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full border-2 border-white ${
                  index === currentSlide
                    ? 'w-4 h-4 sm:w-5 sm:h-5 bg-white scale-110'
                    : 'w-3 h-3 sm:w-4 sm:h-4 bg-white/50 hover:bg-white/80 hover:scale-110'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CTEFHeroSection;