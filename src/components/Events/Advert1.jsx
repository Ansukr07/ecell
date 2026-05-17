import React from 'react';
import SimpleEventGallery from './SimpleEventGallery';

const Advert = () => {
  const images = [
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=300&fit=crop',
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop',
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=300&fit=crop',
  ];

  return (
    <SimpleEventGallery 
      title="ADVERT" 
      titleLine2="2.0" 
      images={images} 
    />
  );
};

export default Advert;
