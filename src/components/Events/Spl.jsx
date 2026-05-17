import React from 'react';
import SimpleEventGallery from './SimpleEventGallery';
import s1 from '../../assets/s1.jpg';
import s2 from '../../assets/s2.jpg';
import s3 from '../../assets/s3.jpg';
import s4 from '../../assets/s4.jpg';
import s5 from '../../assets/s5.jpg';

const SPL = () => {
  const images = [s1, s2, s3, s4, s5];

  return (
    <SimpleEventGallery 
      title="SPL" 
      titleLine2="3.0" 
      images={images} 
    />
  );
};

export default SPL;