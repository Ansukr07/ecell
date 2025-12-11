import React from 'react';
import { Users, Scissors, Calendar, Clock } from 'lucide-react';
import EventLayout from './EventLayout';

const Ripoff = () => {
    const eventStats = [
        { icon: Users, label: 'Designers', value: '60' },
    ];

    return (
        <EventLayout
            title="RIP OFF"
            description="Unleash your inner designer! A unique competition challenging participants to 'rip off' existing products and reimagine them with better utility, design, or sustainability."

            highlights={highlights}

            themeColor="orange"
            backgroundGradient="from-slate-900 via-gray-900 to-black"
        />
    );
};

export default Ripoff;
