import React, { useMemo } from 'react';
import NoiseBackground from '../components/NoiseBackground';
import InfiniteMasonryGallery from '../components/InfiniteMasonryGallery';
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
  const images = useMemo(() => [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
    img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
    img31, img32, img33, img34, img35, img37, img38, img39, img40,
    img41, img42, img43
  ], []);

  return (
    <>
      <NoiseBackground />
      <InfiniteMasonryGallery images={images} />
    </>
  );
};

export default Gallery;