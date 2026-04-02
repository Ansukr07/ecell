import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer/Footer';

// Image Imports
import img1 from '../assets/image1.jpg';
import img2 from '../assets/image2.jpg';
import img3 from '../assets/image3.jpg';
import img4 from '../assets/image4.jpg';
import img5 from '../assets/image5.jpg';
import img6 from '../assets/image6.jpg';
import img7 from '../assets/image7.jpg';
import img8 from '../assets/image8.jpg';
import img9 from '../assets/image9.jpg';
import img10 from '../assets/image10.jpg';
import img11 from '../assets/image11.jpg';
import img12 from '../assets/image12.jpg';
import img13 from '../assets/image13.jpg';
import img14 from '../assets/image14.jpg';
import img15 from '../assets/image15.jpg';
import img16 from '../assets/image16.jpg';
import img17 from '../assets/image17.jpg';
import img18 from '../assets/image18.jpg';
import img19 from '../assets/image19.jpg';
import img20 from '../assets/image20.jpg';
import img21 from '../assets/image21.jpg';
import img22 from '../assets/image22.jpg';
import img23 from '../assets/image23.jpg';
import img24 from '../assets/image24.jpg';
import img25 from '../assets/image25.jpg';
import img26 from '../assets/image26.jpg';
import img27 from '../assets/image27.jpg';
import img28 from '../assets/image28.jpg';
import img29 from '../assets/image29.jpg';
import img30 from '../assets/image30.jpg';
import img31 from '../assets/image31.jpg';
import img32 from '../assets/image32.jpg';
import img33 from '../assets/image33.jpg';
import img34 from '../assets/image34.jpg';
import img35 from '../assets/image35.jpg';
import img37 from '../assets/image37.jpg';
import img38 from '../assets/image38.jpg';
import img39 from '../assets/image39.jpg';
import img40 from '../assets/image40.jpg';
import img41 from '../assets/image41.JPG';
import img42 from '../assets/image42.JPG';
import img43 from '../assets/image43.JPG';

const Gallery = () => {
  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    // Array of all images
    const allImages = [
      img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
      img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
      img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
      img31, img32, img33, img34, img35, img37, img38, img39, img40,
      img41, img42, img43
    ];

    // Create gallery data objects
    const galleryData = allImages.map((src, index) => ({
      id: index + 1,
      src: src,
      alt: `E-Cell Gallery Image ${index + 1}`,
      title: "E-Cell Moment"
    }));

    // Shuffle images
    const shuffled = [...galleryData].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffled);
  }, []);


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

      <div className="min-h-screen bg-white pt-32 pb-16 md:pt-23 px-4">
        {/* Navbar removed as it is global */}
        <div className="max-w-7xl mx-auto pt-8 md:pt-16">
          {/* Header Section */}
          <div className="text-center mb-16 md:mb-24">
            <h1 className="text-[5.5rem] sm:text-8xl md:text-[16vw] text-black tracking-[0.05em] uppercase leading-none" style={{ fontFamily: 'Boreck' }}>
              Gallery
            </h1>
          </div>

          {/* Masonry Gallery Grid */}
          <div className="masonry-grid">
            {shuffledImages.map((image) => (
              <div
                key={image.id}
                className="masonry-item group relative overflow-hidden rounded-2xl bg-gray-100 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/20"
              >
                <div className="relative w-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" // h-auto preserves aspect ratio
                    loading="lazy"
                  />

                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
      <Footer />
    </>
  );
};

export default Gallery;