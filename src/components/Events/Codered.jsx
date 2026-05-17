import React from 'react';
import EventDetailPage from './EventDetailPage';
import image10 from '../../assets/image10.webp';
import image11 from '../../assets/image25.webp';
import image13 from '../../assets/image13.jpg';
//src/assets/image25.jpg
import image17 from '../../assets/image17.jpg';
import image18 from '../../assets/group.png';

const CodeRed25 = () => {
  const images = [image10, image11, image13, image17, image18];
  const imageGrid = images.map((img, idx) => ({
    id: idx,
    image: img,
    title: `Code Red Moment ${idx + 1}`,
    summary: 'From Code Red 25 event',
  }));

  return (
    <EventDetailPage
      title="Code Red"
      titleLine2="3.0"
      eventSubtitle="Feb 15, 2025 | National Level Hackathon"
      eventDetail="Competitive programming • 247 participants"
      mainStatValue="247"
      mainStatLabel="Participants"
      statDetail="Duration: 24 Hours | Winners: 3 Teams"
      highlights={[
        'Fast-paced 24-hour coding competition',
        'Industry mentorship and guidance',
        'Innovative solutions to real-world problems',
        'Cash prizes and exciting challenges'
      ]}
      images={images}
      imageGrid={imageGrid}
    />
  );
};

export default CodeRed25;
