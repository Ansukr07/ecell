import React from 'react';
import EventDetailPage from './EventDetailPage';
import e1 from '../../assets/e8.jpg';
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
  const imageGrid = images.map((img, idx) => ({
    id: idx,
    image: img,
    title: `Empire X Moment ${idx + 1}`,
    summary: 'From Empire X event',
  }));

  const highlights = [
    'Business simulation and strategy game',
    'Lead a virtual company to success',
    'Make critical decisions under pressure',
    'Compete with teams across colleges'
  ];

  return (
    <EventDetailPage
      title="EMPIRE"
      titleLine2="X"
      eventSubtitle="Feb 20, 2025 | Business Simulation"
      eventDetail="Business strategy game • 92 teams"
      mainStatValue="92"
      mainStatLabel="Teams"
      statDetail="Rounds: 4 | Duration: 5 Hours"
      highlights={highlights}
      images={images}
      imageGrid={imageGrid}
    />
  );
};

export default EmpireX;
