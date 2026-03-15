import React from 'react';
import EventPageLayout from './EventPageLayout';

const Ripoff = () => {
  const highlights = [
    'Unleash your inner designer with reimagined products',
    'Better utility, design, or sustainability focus',
    'Unique competition challenging participants to rip off and improve',
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1561070791-2526d31cc5b5?w=500&h=300&fit=crop',
    'https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&h=300&fit=crop',
    'https://images.unsplash.com/photo-1586717799252-22dcc255f70d?w=500&h=300&fit=crop',
  ];

  return (
    <EventPageLayout
      title="RIP"
      titleLine2="OFF"
      eventSubtitle="Design competition"
      eventDetail="Reimagine products • 60 designers"
      mainStatValue="60"
      mainStatLabel="Designers"
      statDetail=""
      highlights={highlights}
      galleryImages={galleryImages}
    />
  );
};

export default Ripoff;
