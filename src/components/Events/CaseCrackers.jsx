import React from 'react';
import EventPageLayout from './EventPageLayout';

const CaseCrackers = () => {
  const highlights = [
    'Complex real-world business problems solved by students',
    'Collaboration with industry partners for case studies',
    'Top 3 teams received internship offers',
    'Evaluation based on feasibility, scalability, and innovation',
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&h=300&fit=crop',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=300&fit=crop',
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
  ];

  return (
    <EventPageLayout
      title="CASE"
      titleLine2="CRACKERS"
      eventSubtitle="Mar 10, 2025 at 5 Hours"
      eventDetail="Business case competition • 42 teams"
      mainStatValue="42"
      mainStatLabel="Teams"
      statDetail="Solutions: 38"
      highlights={highlights}
      galleryImages={galleryImages}
    />
  );
};

export default CaseCrackers;
