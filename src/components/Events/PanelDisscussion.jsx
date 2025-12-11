import React from 'react';
import { Users, Target, Calendar, Clock } from 'lucide-react';
import EventLayout from './EventLayout';

const PanelDiscussion = () => {
  const eventStats = [
    { icon: Users, label: 'Industry Experts', value: '8' },
    { icon: Target, label: 'Key Topics', value: '5' },
    { icon: Calendar, label: 'Event Date', value: 'Feb 28, 2025' },
    { icon: Clock, label: 'Discussion Time', value: '4 Hours' },
  ];

  const highlights = [
    "Insights from industry leaders and entrepreneurs",
    "Discussions on future tech trends and startup ecosystem",
    "Interactive Q&A session with students",
    "Networking opportunities with guest speakers"
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop"
  ];

  return (
    <EventLayout
      title="PANEL DISCUSSION"
      description="An enlightening conversation with industry pioneers! Distinguished experts shared their wisdom, discussed emerging trends, and provided invaluable career insights to aspiring professionals."

      highlights={highlights}

      themeColor="orange"
      backgroundGradient="from-slate-900 via-gray-900 to-black"
    />
  );
};
export default PanelDiscussion;