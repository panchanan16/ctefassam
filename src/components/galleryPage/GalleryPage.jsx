"use client";

import { X, ChevronLeft, ChevronRight, Calendar, Loader } from "lucide-react";
import { useEffect, useState } from "react";

function GalleryPage({ galleryData }) {
  // Color theme
  const colors = {
    primary: "#31694E",
    secondary: "#658C58",
    accent: "#BBC863",
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(12);
  const [isLoading, setIsLoading] = useState(false);

  // Gallery images data

  const galleryImages = [
    {
      id: 1,
      title:
        "An Interactive Programmme On NEP-2020 Effective Implementation and Challenges To Overcome in School Education",
      image: "/gallery/gallery1.jpg",
      date: "April 04, 2022",
    },
    {
      id: 2,
      title: "Happy Hours of Effective Learning By School Children at Darrang",
      image: "/gallery/album12.jpg",
      date: "April 06, 2020",
    },
    {
      id: 3,
      title: "13th day happy schooling programme in 3 Tea gardens at Jorhat",
      image: "/gallery/album17.jpg",
      date: "June 08, 2020",
    },
    {
      id: 4,
      title:
        "Press Conference For The 34th CTEF Annual International E Conference",
      image: "/gallery/album27.jpg",
      date: "19th and 20th December 2020",
    },
    {
      id: 5,
      title:
        "Jorhat District Activity organised in collaboration with Chinamara Higher Secondary School, Jorhat",
      image: "/gallery/album62.jpg",
      date: "Feb 17, 2022",
    },
    {
      id: 6,
      title:
        "CTEF Jorhat District Chapter in collaboration with Gorumora High school, Jorhat organised an awareness program for teachers on Project Based Learning",
      image: "/gallery/album64.jpg",
      date: "Feb 23, 2022",
    },
    {
      id: 7,
      title:
        "Workshop on Taxonomy of Educational objectives organised by CTEF Assam ,Kamrup (R) at Ulubari H.S school",
      image: "/gallery/album73.jpg",
      date: "April 29, 2022",
    },
    {
      id: 8,
      title:
        "Workshop on Guidance and Counselling of Teachers organised by Malowali High School, Jorhat held on 24-09-2022",
      image: "/gallery/album79.jpg",
      date: "Sep 24, 2022",
    },
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(galleryData[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % galleryData.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryData[nextIndex]);
  };

  const goToPrevious = () => {
    const prevIndex =
      (currentIndex - 1 + galleryData.length) % galleryData.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryData[prevIndex]);
  };

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleImages((prev) => Math.min(prev + 6, galleryData.length));
      setIsLoading(false);
    }, 600);
  };

  const handleKeyDown = (e) => {
    if (selectedImage) {
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "Escape") closeLightbox();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <>
      {/* Gallery Grid */}
      <section className="pb-16 mt-10 md:pb-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryData.length > 0 && galleryData.slice(0, visibleImages).map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
              onClick={() => openLightbox(index)}
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`,
              }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={`${process.env.NEXT_PUBLIC_API_URL}${image.photo}`}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                  style={{
                    background: `linear-gradient(to top, ${colors.primary}ee, ${colors.primary}00)`,
                  }}
                >
                  <div className="p-4 text-white w-full">
                    <h3 className="font-bold text-sm mb-1">{image.title}</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar size={14} />
                      <span>
                        {new Date(image.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {visibleImages < galleryData.length && (
          <div className="text-center mt-12">
            <button
              onClick={handleLoadMore}
              disabled={isLoading}
              className="text-emerald-900 font-bold border-b border-emerald-900 hover:text-amber-500 hover:border-amber-500 transition"
            >
              {isLoading ? (
                <div className="flex items-center gap-2 justify-center">
                  <Loader className="animate-spin inline-block" size={20} />
                  <span className="inline-block">Loading...</span>
                </div>
              ) : (
                <span>View More</span>
              )}
            </button>
            <p className="text-gray-600 mt-4 text-sm">
              Showing {visibleImages} of {galleryData.length} images
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
              src={`${process.env.NEXT_PUBLIC_API_URL}${selectedImage.photo}`}
              alt={selectedImage.title}
              className="w-full h-auto md:h-[70vh] max-h-[80vh] object-contain rounded-lg"
            />

            {/* Image Info */}
            <div
              className="mt-4 p-4 rounded-lg text-white"
              style={{ backgroundColor: colors.primary }}
            >
              <h2 className="text-2xl font-bold mb-2">{selectedImage.title}</h2>
              <div className="flex items-center gap-2 text-sm">
                <Calendar size={16} />
                <span>
                  {new Date(selectedImage.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <p className="text-sm mt-2 opacity-90">
                Image {currentIndex + 1} of {galleryData.length}
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
    </>
  );
}

export default GalleryPage;
