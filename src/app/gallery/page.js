"use client"

import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, Loader } from 'lucide-react';

const Gallery = () => {
  // Color theme
  const colors = {
    primary: '#31694E',
    secondary: '#658C58',
    accent: '#BBC863'
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(12);
  const [isLoading, setIsLoading] = useState(false);

  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      title: 'Modern Workspace',
      date: '2024-11-15'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      title: 'Team Collaboration',
      date: '2024-11-10'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop',
      title: 'Business Meeting',
      date: '2024-11-08'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
      title: 'Strategic Planning',
      date: '2024-11-05'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=800&h=600&fit=crop',
      title: 'Innovation Hub',
      date: '2024-11-01'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      title: 'Team Success',
      date: '2024-10-28'
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=800&h=600&fit=crop',
      title: 'Creative Session',
      date: '2024-10-25'
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop',
      title: 'Office Culture',
      date: '2024-10-20'
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop',
      title: 'Project Launch',
      date: '2024-10-15'
    },
    {
      id: 10,
      url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop',
      title: 'Workshop Day',
      date: '2024-10-12'
    },
    {
      id: 11,
      url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop',
      title: 'Team Building',
      date: '2024-10-08'
    },
    {
      id: 12,
      url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
      title: 'Annual Conference',
      date: '2024-10-05'
    },
    {
      id: 13,
      url: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&h=600&fit=crop',
      title: 'Design Sprint',
      date: '2024-10-01'
    },
    {
      id: 14,
      url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop',
      title: 'Company Gathering',
      date: '2024-09-28'
    },
    {
      id: 15,
      url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop',
      title: 'Training Session',
      date: '2024-09-25'
    },
    {
      id: 16,
      url: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=800&h=600&fit=crop',
      title: 'Networking Event',
      date: '2024-09-20'
    },
    {
      id: 17,
      url: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&h=600&fit=crop',
      title: 'Product Development',
      date: '2024-09-15'
    },
    {
      id: 18,
      url: 'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=800&h=600&fit=crop',
      title: 'Client Presentation',
      date: '2024-09-10'
    }
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(galleryImages[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const goToPrevious = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleImages((prev) => Math.min(prev + 6, galleryImages.length));
      setIsLoading(false);
    }, 600);
  };

  const handleKeyDown = (e) => {
    if (selectedImage) {
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'Escape') closeLightbox();
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

  // Prevent body scroll when lightbox is open
  React.useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h1 
            className="text-4xl md:text-5xl"
          >
            Our Gallery
          </h1>
          <div 
            className="w-20 h-1 mx-auto"
            style={{ backgroundColor: colors.accent }}
          ></div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Explore our collection of memorable moments and achievements. Each image tells a story of dedication, collaboration, and success. Click on any image to view it in full size and navigate through our gallery.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-16 md:pb-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.slice(0, visibleImages).map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
              onClick={() => openLightbox(index)}
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`
              }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                  style={{ 
                    background: `linear-gradient(to top, ${colors.primary}ee, ${colors.primary}00)` 
                  }}
                >
                  <div className="p-4 text-white w-full">
                    <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar size={14} />
                      <span>{new Date(image.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {visibleImages < galleryImages.length && (
          <div className="text-center mt-12">
            <button
              onClick={handleLoadMore}
              disabled={isLoading}
              className="px-8 py-4 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
              style={{ 
                backgroundColor: colors.primary,
              }}
              onMouseEnter={(e) => !isLoading && (e.target.style.backgroundColor = colors.secondary)}
              onMouseLeave={(e) => !isLoading && (e.target.style.backgroundColor = colors.primary)}
            >
              {isLoading ? (
                <>
                  <Loader className="animate-spin" size={20} />
                  <span>Loading...</span>
                </>
              ) : (
                <span>View More Images</span>
              )}
            </button>
            <p className="text-gray-600 mt-4 text-sm">
              Showing {visibleImages} of {galleryImages.length} images
            </p>
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-gray-300 transition-colors duration-300 z-10 p-2"
            style={{ backgroundColor: colors.primary }}
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 md:left-8 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 z-10"
            style={{ backgroundColor: colors.secondary }}
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 md:right-8 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 z-10"
            style={{ backgroundColor: colors.secondary }}
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>

          {/* Image Container */}
          <div 
            className="relative max-w-7xl max-h-[90vh] mx-4 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-[calc(90vh-120px)] w-auto h-auto object-contain rounded-lg shadow-2xl"
            />
            
            {/* Image Info */}
            <div 
              className="mt-4 p-4 rounded-lg text-white"
              style={{ backgroundColor: colors.primary }}
            >
              <h2 className="text-2xl font-bold mb-2">{selectedImage.title}</h2>
              <div className="flex items-center gap-2 text-sm">
                <Calendar size={16} />
                <span>{new Date(selectedImage.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <p className="text-sm mt-2 opacity-90">
                Image {currentIndex + 1} of {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Gallery;