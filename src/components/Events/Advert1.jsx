import React from 'react';
import EventPageLayout from './EventPageLayout';

const Advert = () => {
  const highlights = [
    'Creative ad campaigns designed by 20+ teams',
    'Workshops on digital marketing and branding strategies',
    'Industry experts judged the final pitch presentations',
    'Interactive sessions on consumer psychology and trends',
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=300&fit=crop',
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop',
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=300&fit=crop',
  ];

  return (
    <EventPageLayout
      title="ADVERT"
      titleLine2="1.0"
      eventSubtitle="Jan 20, 2025 at 8 Hours"
      eventDetail="Advertising competition • 56 creative teams"
      mainStatValue="56"
      mainStatLabel="Creative Teams"
      statDetail="Ad Campaigns: 168 | Pitch presentations"
      highlights={highlights}
      galleryImages={galleryImages}
    />
  );
};

export default Advert;
