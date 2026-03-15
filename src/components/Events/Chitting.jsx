import React from 'react';
import EventPageLayout from './EventPageLayout';

const Chitting = () => {
  const highlights = [
    'Fun and fast-paced trivia and logic rounds',
    'Team building activities and ice breakers',
    'Exciting prizes and goodies for winners',
    'A perfect blend of fun, competition, and learning',
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=500&h=300&fit=crop',
    'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&h=300&fit=crop',
    'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&h=300&fit=crop',
    'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=500&h=300&fit=crop',
  ];

  return (
    <EventPageLayout
      title="CHITTING"
      titleLine2=""
      eventSubtitle="Apr 05, 2025 at 4 Hours"
      eventDetail="Trivia & logic • 150+ participants"
      mainStatValue="150+"
      mainStatLabel="Participants"
      statDetail="Rounds: 4"
      highlights={highlights}
      galleryImages={galleryImages}
    />
  );
};

export default Chitting;
