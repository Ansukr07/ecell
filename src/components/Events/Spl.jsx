import React from 'react';
import { Users, Trophy, Calendar, Clock } from 'lucide-react';
import EventLayout from './EventLayout';

const SPL = () => {
  const eventStats = [
    { icon: Users, label: 'Teams Participated', value: '32' },
    { icon: Trophy, label: 'Matches Played', value: '28' },
    { icon: Calendar, label: 'Tournament Days', value: '3 Days' },
    { icon: Clock, label: 'Total Hours', value: '18 Hours' },
  ];

  const highlights = [
    "'Code Crushers' dominated the league with unbeaten streak",
    "Lightning fast problem-solving in pressure situations",
    "Strategic team formations led to spectacular victories",
    "Nail-biting finale that kept everyone at the edge of their seats"
  ];

  // Mock images for SPL
  const galleryImages = [
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1551818255-e6e10975cd17?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1574169208507-84376144848b?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop"
  ];

  return (
    <EventLayout
      title="SPL 2025"
      description="The most competitive programming league of the year! Teams battled through intense coding challenges, strategic gameplay, and championship-level competition."

      highlights={highlights}

      themeColor="orange"
      backgroundGradient="from-slate-900 via-gray-900 to-black"
    />
  );
};

export default SPL;
