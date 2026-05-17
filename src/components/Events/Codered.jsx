import React from 'react';
import SimpleEventGallery from './SimpleEventGallery';
import img8 from '../../assets/image8.webp';
import img11 from '../../assets/image11.webp';
import img12 from '../../assets/image12.webp';
import img13 from '../../assets/image13.webp';
import img14 from '../../assets/image14.webp';
import img17 from '../../assets/image17.webp';
import img18 from '../../assets/image18.webp';
import img39 from '../../assets/image39.webp';
import img42 from '../../assets/image42.webp';
import img10 from '../../assets/image10.webp';

const CodeRed25 = () => {
  const images = [img8, img11, img12, img13, img14, img17, img18, img39, img42, img10];

  return (
    <SimpleEventGallery 
      title="Code Red" 
      titleLine2="3.0" 
      images={images} 
    />
  );
};

export default CodeRed25;
