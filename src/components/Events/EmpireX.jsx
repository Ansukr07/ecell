import React from 'react';
import SimpleEventGallery from './SimpleEventGallery';
import e1 from '../../assets/e1.jpg';
import e2 from '../../assets/e2.jpg';
import e3 from '../../assets/e3.jpg';
import e4 from '../../assets/e4.jpg';
import e5 from '../../assets/e5.jpg';
import e6 from '../../assets/e6.jpg';
import e7 from '../../assets/e7.jpg';
import e8 from '../../assets/e8.jpg';
import e9 from '../../assets/e9.jpg';

const EmpireX = () => {
  const images = [e1, e2, e3, e4, e5, e6, e7, e8, e9];

  return (
    <SimpleEventGallery 
      title="EMPIRE" 
      titleLine2="X" 
      images={images} 
    />
  );
};

export default EmpireX;
