import React from 'react';
import { Users, Trophy, Calendar, Clock } from 'lucide-react';
import EventLayout from './EventLayout';

const Advert = () => {
  const eventStats = [
    { icon: Users, label: 'Creative Teams', value: '56' },
    { icon: Trophy, label: 'Ad Campaigns', value: '168' },
    { icon: Calendar, label: 'Presentation Day', value: 'Jan 20, 2025' },
    { icon: Clock, label: 'Pitch Duration', value: '8 Hours' },
  ];

  const highlights = [
    "Creative ad campaigns designed by 20+ teams",
    "Workshops on digital marketing and branding strategies",
    "Industry experts judged the final pitch presentations",
    "Interactive sessions on consumer psychology and trends"
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=300&fit=crop"
  ];

  return (
    <EventLayout
      title="ADVERT 1.0"
      description="Where creativity meets strategy! The inaugural advertising competition that challenged teams to create compelling campaigns, innovative concepts, and persuasive presentations."

      highlights={highlights}

      themeColor="orange"
      backgroundGradient="from-slate-900 via-gray-900 to-black"
    />
  );
};
export default Advert;
