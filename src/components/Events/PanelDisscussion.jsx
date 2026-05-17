import React from 'react';
import SimpleEventGallery from './SimpleEventGallery';
import p1 from '../../assets/p1.jpg';
import p2 from '../../assets/p2.jpg';
import p3 from '../../assets/p3.jpg';
import p4 from '../../assets/p4.jpg';
import p5 from '../../assets/p5.jpg';

const PanelDiscussion = () => {
  const images = [p1, p2, p3, p4, p5];

  return (
    <SimpleEventGallery 
      title="PANEL" 
      titleLine2="DISCUSSION" 
      images={images} 
    />
  );
};

export default PanelDiscussion;
