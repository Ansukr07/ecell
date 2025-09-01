import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Sample gallery images with varying heights for masonry effect
  const galleryImages = [
    { id: 1, src: "/gallery/image1.jpg", alt: "Event 1", height: "h-64" },
    { id: 2, src: "/gallery/image2.jpg", alt: "Event 2", height: "h-60" },
    { id: 3, src: "/gallery/image3.jpg", alt: "Event 3", height: "h-80" },
    { id: 4, src: "/gallery/image4.jpg", alt: "Event 4",height: "h-60" },
    { id: 5, src: "/gallery/image5.jpg", alt: "Event 5",  height: "h-70" },
    { id: 6, src: "/gallery/image6.jpg", alt: "Event 6", height: "h-90" },
    { id: 7, src: "/gallery/image7.jpg", alt: "Event 7", height: "h-68" },
    { id: 8, src: "/gallery/image8.jpg", alt: "Event 8", height: "h-52" },
    { id: 9, src: "/gallery/image9.jpg", alt: "Event 9",height: "h-50" },
    
    { id: 11, src: "/gallery/image11.jpg", alt: "Event 11", height: "h-84" },
    { id: 12, src: "/gallery/image12.jpg", alt: "Event 12", height: "h-100" },
    { id: 13, src: "/gallery/image13.jpg", alt: "Event 13", height: "h-80" },
    { id: 14, src: "/gallery/image14.jpg", alt: "Event 14", height: "h-64" },
    { id: 15, src: "/gallery/image15.jpg", alt: "Event 15", height: "h-130" },
    { id: 16, src: "/gallery/image16.jpg", alt: "Event 16", height: "h-60" },
    { id: 17, src: "/gallery/image17.jpg", alt: "Event 17",height: "h-75" },
    { id: 18, src: "/gallery/image18.jpg", alt: "Event 18", height: "h-60" },
    { id: 19, src: "/gallery/image19.jpg", alt: "Event 19", height: "h-85" },
    { id: 20, src: "/gallery/image20.jpg", alt: "Event 20", height: "h-68" },
    { id: 21, src: "/gallery/image21.jpg", alt: "Event 21",  height: "h-80" },
    { id: 22, src: "/gallery/image22.jpg", alt: "Event 22",  height: "h-50" },
    { id: 23, src: "/gallery/image23.jpg", alt: "Event 23", height: "h-60" },
    { id: 24, src: "/gallery/image24.jpg", alt: "Event 24", height: "h-84" },
    { id: 25, src: "/gallery/image25.jpg", alt: "Event 25",  height: "h-72" },
    { id: 26, src: "/gallery/image26.jpg", alt: "Event 26",  height: "h-72" },
    { id: 27, src: "/gallery/image27.jpg", alt: "Event 27",  height: "h-72" },
    { id: 28, src: "/gallery/image28.jpg", alt: "Event 28",  height: "h-65" },
    { id: 29, src: "/gallery/image29.jpg", alt: "Event 29", height: "h-72" },
    { id: 30, src: "/gallery/image30.jpg", alt: "Event 30", height: "h-72" },
    { id: 31, src: "/gallery/image31.jpg", alt: "Event 31",  height: "h-72" },
    { id: 32, src: "/gallery/image32.jpg", alt: "Event 32", height: "h-72" },
    { id: 33, src: "/gallery/image33.jpg", alt: "Event 33",  height: "h-72" },
    { id: 34, src: "/gallery/image34.jpg", alt: "Event 34",  height: "h-72" },
    { id: 35, src: "/gallery/image35.jpg", alt: "Event 35", height: "h-72" },
    { id: 36, src: "/gallery/image36.jpg", alt: "Event 36",  height: "h-72" },
  ];
  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % galleryImages.length;
    } else {
      newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage(galleryImages[newIndex]);
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage]);

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap');
          
          .font-georgia {
            font-family: Georgia, 'Times New Roman', serif;
          }
          
          .font-sora {
            font-family: 'Sora', sans-serif;
          }
          
          .masonry-grid {
            column-count: 1;
            column-gap: 1.5rem;
          }
          
          @media (min-width: 640px) {
            .masonry-grid {
              column-count: 2;
            }
          }
          
          @media (min-width: 1024px) {
            .masonry-grid {
              column-count: 3;
            }
          }
          
          @media (min-width: 1280px) {
            .masonry-grid {
              column-count: 4;
            }
          }
          
          .masonry-item {
            break-inside: avoid;
            margin-bottom: 1.5rem;
            display: inline-block;
            width: 100%;
          }
        `}
      </style>
      
     <div className="min-h-screen bg-white py-16 px-4">
  <Navbar />
  <div className="max-w-7xl mx-auto pt-12"> {/* Add top padding here instead of <br/> */}
    {/* Header Section */}
    <div className="text-center mb-16">
      <h1 className="font-georgia text-5xl md:text-6xl font-bold text-gray-900 mb-7">
        Gallery
      </h1>
      <p className="font-sora text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Capturing moments of innovation, collaboration, and entrepreneurial spirit at our E-Cell events and activities.
      </p>
    </div>

          {/* Masonry Gallery Grid */}
          <div className="masonry-grid">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="masonry-item group relative overflow-hidden rounded-2xl bg-gray-100 cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/20"
                onClick={() => openLightbox(image)}
              >
                <div className={`relative ${image.height} w-full`}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="font-sora text-white text-lg font-semibold leading-tight">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Hover Indicator */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <div className="relative max-w-6xl w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-200 transform hover:scale-110"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
                className="absolute left-6 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-200 transform hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
                className="absolute right-6 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-200 transform hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Image Container */}
              <div 
                className="relative max-h-full max-w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-h-[85vh] max-w-full object-contain rounded-xl shadow-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 rounded-b-xl">
                  <h3 className="font-sora text-white text-2xl font-semibold mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="font-sora text-white/80 text-sm">
                    Press ← → to navigate or ESC to close
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
};

export default Gallery;