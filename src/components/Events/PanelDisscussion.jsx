import React from 'react';
import EventPageLayout from './EventPageLayout';

const PanelDiscussion = () => {
  const highlights = [
    'Insights from industry leaders and entrepreneurs',
    'Discussions on future tech trends and startup ecosystem',
    'Interactive Q&A session with students',
    'Networking opportunities with guest speakers',
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500&h=300&fit=crop',
    'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=500&h=300&fit=crop',
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop',
  ];

  return (
    <EventPageLayout
      title="PANEL"
      titleLine2="DISCUSSION"
      eventSubtitle="Feb 28, 2025 at 4 Hours"
      eventDetail="Industry experts • 8 speakers"
      mainStatValue="8"
      mainStatLabel="Industry Experts"
      statDetail="Key Topics: 5"
      highlights={highlights}
      galleryImages={galleryImages}
    />
  );
};

export default PanelDiscussion;
