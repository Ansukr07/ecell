import React from 'react';
import EventPageLayout from './EventPageLayout';
import codered1 from './assets/codered25/codered1.jpg';
import codered2 from './assets/codered25/codered2.jpg';
import codered3 from './assets/codered25/codered3.jpg';
import codered4 from './assets/codered25/codered4.jpg';

const CodeRed25 = () => {
  const galleryImages = [codered1, codered2, codered3, codered4];

  const highlights = [
    {
      title: "Team 'ByteForce' secured first place with an innovative solution",
      description:
        'ByteForce topped the leaderboard with a novel approach to the optimization challenge, impressing judges with clean code and efficient algorithms.',
      time: 'Event highlight',
    },
    {
      title: '45+ creative algorithms were submitted across all challenges',
      description:
        'Participants tackled multiple problem sets, with a wide variety of solutions showcasing different strategies and programming styles.',
      time: 'Event highlight',
    },
    {
      title: 'Record-breaking participation with 80+ teams competing',
      description:
        'CODERED 25 saw the highest number of registrations yet, with teams from across the campus and beyond joining the competition.',
      time: 'Event highlight',
    },
    {
      title: 'Live coding sessions that kept everyone on the edge',
      description:
        'Real-time problem-solving and live leaderboard updates created an intense, immersive atmosphere throughout the six-hour event.',
      time: 'Event highlight',
    },
    {
      title: 'An electrifying day of competitive programming',
      description:
        'From opening bell to final submission, the energy in the room was palpable as coders raced against the clock.',
      time: 'Event highlight',
    },
    {
      title: 'The finest coding minds came together',
      description:
        'Top talent from the community gathered to compete, collaborate, and push the boundaries of what they could build in a single day.',
      time: 'Event highlight',
    },
    {
      title: 'Witness the passion and the competition',
      description:
        'The spirit of healthy competition was on full display as teams supported each other while vying for the top spots.',
      time: 'Event highlight',
    },
    {
      title: 'Incredible solutions emerged from the challenges',
      description:
        'Judges were impressed by the creativity and technical skill demonstrated in the winning solutions and beyond.',
      time: 'Event highlight',
    },
    {
      title: 'Live leaderboard kept the energy high',
      description:
        'Real-time rankings added to the excitement as teams watched their positions change with every submission.',
      time: 'Event highlight',
    },
  ];

  return (
    <EventPageLayout
      title="CODERED"
      titleLine2="25"
      eventSubtitle="Feb 15, 2025 at 6 Hours"
      eventDetail="Competitive programming • 247 participants"
      mainStatValue="247"
      mainStatLabel="Participants"
      statDetail="Duration: 6 Hours | Winners: 3 Teams"
      highlights={highlights}
      galleryImages={galleryImages}
    />
  );
};

export default CodeRed25;
