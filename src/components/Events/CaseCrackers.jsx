import React from 'react';
import { Users, Lightbulb, Calendar, Clock } from 'lucide-react';
import EventLayout from './EventLayout';

const CaseCrackers = () => {
    const eventStats = [
        { icon: Users, label: 'Teams', value: '42' },
        { icon: Lightbulb, label: 'Solutions', value: '38' },
        { icon: Calendar, label: 'Date', value: 'Mar 10, 2025' },
        { icon: Clock, label: 'Duration', value: '5 Hours' },
    ];

    const highlights = [
        "Complex real-world business problems solved by students",
        "Collaboration with industry partners for case studies",
        "Top 3 teams received internship offers",
        "Evaluation based on feasibility, scalability, and innovation"
    ];

    const galleryImages = [
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop"
    ];

    return (
        <EventLayout
            title="CASE CRACKERS"
            description="Dive into the world of strategy and problem-solving! Teams analyzed complex business cases, proposed innovative solutions, and competed for the title of ultimate strategists."

            highlights={highlights}

            themeColor="orange"
            backgroundGradient="from-slate-900 via-gray-900 to-black"
        />
    );
};

export default CaseCrackers;
