import React from 'react';
import { Users, Zap, Calendar, Clock } from 'lucide-react';
import EventLayout from './EventLayout';

const Chitting = () => {
    const eventStats = [
        { icon: Users, label: 'Participants', value: '150+' },
        { icon: Zap, label: 'Rounds', value: '4' },
        { icon: Calendar, label: 'Date', value: 'Apr 05, 2025' },
        { icon: Clock, label: 'Duration', value: '4 Hours' },
    ];

    const highlights = [
        "Fun and fast-paced trivia and logic rounds",
        "Team building activities and ice breakers",
        "Exciting prizes and goodies for winners",
        "A perfect blend of fun, competition, and learning"
    ];

    const galleryImages = [
        "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=500&h=300&fit=crop"
    ];

    return (
        <EventLayout
            title="CHITTING"
            description="An event full of surprises, wit, and quick thinking! Test your general knowledge, logical reasoning, and teamwork in this exciting and fun-filled competition."

            highlights={highlights}

            themeColor="orange"
            backgroundGradient="from-slate-900 via-gray-900 to-black"
        />
    );
};

export default Chitting;
