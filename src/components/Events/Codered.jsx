import React from 'react';
import { Users, Trophy, Calendar, Clock } from 'lucide-react';
import EventLayout from './EventLayout';
import codered1 from "./assets/codered25/codered1.jpg";
import codered2 from "./assets/codered25/codered2.jpg";
import codered3 from "./assets/codered25/codered3.jpg";
import codered4 from "./assets/codered25/codered4.jpg";

const CodeRed25 = () => {
  const galleryImages = [codered1, codered2, codered3, codered4];

  const eventStats = [
    { icon: Users, label: 'Total Participants', value: '247' },
    { icon: Trophy, label: 'Winners', value: '3 Teams' },
    { icon: Calendar, label: 'Event Date', value: 'Feb 15, 2025' },
    { icon: Clock, label: 'Duration', value: '6 Hours' },
  ];

  const highlights = [
    "Team 'ByteForce' secured first place with an innovative solution",
    "45+ creative algorithms were submitted across all challenges",
    "Record-breaking participation with 80+ teams competing",
    "Live coding sessions that kept everyone on the edge"
  ];

  return (
    <EventLayout
      title="CODERED 25"
      description="An electrifying day of competitive programming that brought together the finest coding minds. Witness the passion, the competition, and the incredible solutions that emerged."

      highlights={highlights}

      themeColor="orange"
      backgroundGradient="from-slate-900 via-gray-900 to-black"
    />
  );
};

export default CodeRed25;
