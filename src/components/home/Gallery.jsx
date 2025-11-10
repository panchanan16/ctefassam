"use client";

import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Women\'s Conclave 2025',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
      date: 'Nov 24, 2025'
    },
    {
      id: 2,
      title: 'Team Building Session',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
      date: 'Oct 15, 2025'
    },
    {
      id: 3,
      title: 'Award Ceremony',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80',
      date: 'Sep 20, 2025'
    },
    {
      id: 4,
      title: 'Leadership Workshop',
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80',
      date: 'Aug 10, 2025'
    },
    {
      id: 5,
      title: 'Tech Innovation Summit',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80',
      date: 'Jul 18, 2025'
    },
    {
      id: 6,
      title: 'Annual Team Retreat',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
      date: 'Jun 05, 2025'
    },
    {
      id: 7,
      title: 'Milestone Celebration',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80',
      date: 'May 12, 2025'
    },
    {
      id: 8,
      title: 'Design Thinking Session',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      date: 'Apr 22, 2025'
    },
    {
      id: 9,
      title: 'Community Gathering',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
      date: 'Mar 30, 2025'
    },
    {
      id: 10,
      title: 'Innovation Workshop',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80',
      date: 'Feb 14, 2025'
    },
    {
      id: 11,
      title: 'Networking Event',
      image: 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=800&q=80',
      date: 'Jan 25, 2025'
    },
    {
      id: 12,
      title: 'Annual Conference',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
      date: 'Dec 10, 2024'
    }
  ];

  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-12">
      <style jsx>{`
        /* Image hover effect */
        .gallery-image {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .gallery-item:hover .gallery-image {
          transform: scale(1.1);
        }

        /* Overlay effect */
        .image-overlay {
          background: linear-gradient(180deg, transparent 40%, rgba(0, 0, 0, 0.85) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .gallery-item:hover .image-overlay {
          opacity: 1;
        }

        /* Content slide up effect */
        .overlay-content {
          transform: translateY(20px);
          transition: transform 0.4s ease;
        }

        .gallery-item:hover .overlay-content {
          transform: translateY(0);
        }

        /* Modal animations */
        @keyframes modalFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .modal-backdrop {
          animation: modalFadeIn 0.3s ease-out;
        }

        .modal-content {
          animation: modalSlideUp 0.4s ease-out;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-[#62791c] mb-4 tracking-wide">
            GALLERY
          </h1>
          <div className="w-24 h-1 bg-[#62791c]/40 mx-auto rounded-full"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="gallery-item group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedImage(item)}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-image w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="image-overlay absolute inset-0 flex flex-col justify-end p-5">
                  <div className="overlay-content">
                    <h3 className="text-white text-lg md:text-xl font-semibold mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-white/90">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">{item.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Selected Image */}
        {selectedImage && (
          <div 
            className="modal-backdrop fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="modal-content bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white flex items-center justify-center transition-all duration-200 shadow-lg"
              >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Image */}
              <div className="relative">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-cover"
                />
              </div>

              {/* Modal Info */}
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
                  {selectedImage.title}
                </h2>
                <div className="flex items-center gap-2 text-gray-600 mb-6">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-lg">{selectedImage.date}</span>
                </div>                
              </div>
            </div>
          </div>
        )}

        {/* Decorative Bottom Element */}
        <div className="mt-16">
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;