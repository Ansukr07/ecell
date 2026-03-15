import React from 'react';
import EventPageLayout from './EventPageLayout';

const SPL = () => {
  const highlights = [
    "'Code Crushers' dominated the league with unbeaten streak",
    'Lightning fast problem-solving in pressure situations',
    'Strategic team formations led to spectacular victories',
    'Nail-biting finale that kept everyone at the edge of their seats',
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop',
    'https://images.unsplash.com/photo-1551818255-e6e10975cd17?w=500&h=300&fit=crop',
    'https://images.unsplash.com/photo-1574169208507-84376144848b?w=500&h=300&fit=crop',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop',
  ];

  return (
    <EventPageLayout
      title="SPL"
      titleLine2="2025"
      eventSubtitle="3 Days • 18 Hours"
      eventDetail="Competitive programming league • 32 teams"
      mainStatValue="32"
      mainStatLabel="Teams Participated"
      statDetail="Matches Played: 28"
      highlights={highlights}
      galleryImages={galleryImages}
    />
  );
};

export default SPL;
