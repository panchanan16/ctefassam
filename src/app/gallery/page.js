import Header from '@/components/common/Header';
import GalleryPage from '@/components/galleryPage/GalleryPage';

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      {/* Header Section */}
      <header className="bg-emerald-950 py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4"> Our Gallery</h1>
          <p className="text-emerald-200 text-sm md:text-base max-w-2xl mx-auto">
            Explore our collection of memorable moments and achievements. Each image tells a story of dedication, collaboration, and success. Click on any image to view it in full size and navigate through our gallery.
          </p>
        </div>
      </header>
      <GalleryPage />
      
    </div>
  );
};

export default Gallery;