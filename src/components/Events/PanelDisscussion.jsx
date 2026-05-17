import React from 'react';
import EventDetailPage from './EventDetailPage';
import panel1 from './assets/paneldiscussion/img1.jpg';
import panel2 from './assets/paneldiscussion/img2.jpg';
import panel3 from './assets/paneldiscussion/img3.jpg';
import panel4 from './assets/paneldiscussion/img4.jpg';
import panel5 from './assets/paneldiscussion/img5.jpg';

const PanelDiscussion = () => {
  const images = [panel1, panel2, panel3, panel4, panel5];
  const imageGrid = images.map((img, idx) => ({
    id: idx,
    image: img,
    title: `Panel Discussion Moment ${idx + 1}`,
    summary: 'From Panel Discussion event',
  }));

  const highlights = [
    'Industry experts share insights and experiences',
    'Interactive Q&A session with panelists',
    'Learn about career paths in entrepreneurship',
    'Network with successful entrepreneurs and mentors'
  ];

  return (
    <EventDetailPage
      title="PANEL"
      titleLine2="DISCUSSION"
      eventSubtitle="Feb 28, 2025 | Thought Leadership"
      eventDetail="Industry panel discussion • 150+ attendees"
      mainStatValue="150+"
      mainStatLabel="Attendees"
      statDetail="Expert Panelists: 5 | Duration: 2 Hours"
      highlights={highlights}
      images={images}
      imageGrid={imageGrid}
    />
  );
};

export default PanelDiscussion;
