import Header from '@/components/common/Header';
import GalleryPage from '@/components/galleryPage/GalleryPage';
import axios from 'axios';

export const dynamic = 'force-dynamic';

const Gallery = async () => {
  const galleryImages = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/gallery`)

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
            A visual journey through CTEF’s events, achievements, and initiatives—capturing moments of purpose, partnership, and progress. Click on any image to explore in full view.
          </p>
        </div>
      </header>
      <GalleryPage galleryData={galleryImages ? galleryImages?.data?.data : []} />

    </div>
  );
};

export default Gallery;