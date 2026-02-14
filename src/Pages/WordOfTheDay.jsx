import { useWord } from '../context/WordContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ExternalLink, ChevronLeft, ChevronRight, Calendar as CalendarIcon, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';
import { TextGenerateEffect } from '../components/ui/text-generate-effect';
import { BackgroundRippleEffect } from '../components/ui/background-ripple-effect';

export default function WordOfTheDay() {
    const { getLatestWord, getPreviousWords } = useWord();
    const latestWord = getLatestWord();
    const previousWords = getPreviousWords();

    useEffect(() => { window.scrollTo(0, 0); }, []);

    // Detect mobile for responsive adjustments
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    // Track scroll to move title upward (simulating natural scroll)
    // NO opacity fade — title stays fully visible and goes behind the card
    const { scrollY } = useScroll();
    const titleY = useTransform(scrollY, [0, 800], [0, -400]);

    // --- Calendar Logic ---
    const [viewDate, setViewDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

    const changeMonth = (offset) => {
        const newDate = new Date(viewDate);
        newDate.setMonth(newDate.getMonth() + offset);
        setViewDate(newDate);
    };

    const hasWordOnDate = (day) => {
        const dateStr = `${viewDate.getFullYear()}-${String(viewDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        return previousWords.some(w => w.date === dateStr) || (latestWord?.date === dateStr);
    };

    const isSelected = (day) => {
        if (!selectedDate) return false;
        const dateStr = `${viewDate.getFullYear()}-${String(viewDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        return selectedDate === dateStr;
    };

    const handleDateClick = (day) => {
        const dateStr = `${viewDate.getFullYear()}-${String(viewDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        if (selectedDate === dateStr) {
            setSelectedDate(null); // Deselect
        } else {
            setSelectedDate(dateStr);
        }
    };

    const isToday = (day) => {
        const now = new Date();
        return day === now.getDate() && viewDate.getMonth() === now.getMonth() && viewDate.getFullYear() === now.getFullYear();
    };

    const getDaysInMonth = () => {
        const year = viewDate.getFullYear();
        const month = viewDate.getMonth();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0 = Sunday
        const days = [];

        // Empty slots for previous month
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(null);
        }
        // Days of current month
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(i);
        }
        return days;
    };

    const filteredWords = selectedDate
        ? previousWords.filter(w => w.date === selectedDate)
        : previousWords;

    // --- End Calendar Logic ---

    if (!latestWord) {
        return (
            <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
                <h1 className="text-4xl font-black mb-4 tracking-tighter ">WORD OF THE DAY</h1>
                <p className="text-neutral-500 mb-8">No words verified yet. Check back soon!</p>
                <Link to="/" className="px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors">
                    Back Home
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-black text-white relative">

            {/* Full-page interactive grid background */}
            <div className="fixed inset-0 z-0 overflow-hidden">
                <BackgroundRippleEffect rows={isMobile ? 20 : 35} cols={isMobile ? 12 : 45} />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full z-[60] p-4 md:p-6 mix-blend-difference">

            </nav>

            {/* ============================================ */}
            {/* TITLE: "WORD OF THE DAY"                     */}
            {/* Scrolls up via JS translateY (no fade).      */}
            {/* Lower z-index so it goes BEHIND the card.    */}
            {/* ============================================ */}
            <div className="relative h-[70vh] md:h-screen flex items-center justify-center pt-[15vh] md:pt-0 pb-0 md:pb-0" style={{ zIndex: 1 }}>
                <motion.div
                    style={{ y: titleY }}
                    className="relative z-10 w-full flex flex-col items-center justify-center px-4"
                >
                    <span className="block text-[18vw] md:text-[16vw] font-black text-white leading-[0.85] tracking-[-0.04em] text-center">WORD</span>
                    <span className="block text-[11vw] md:text-[10vw] font-black text-white leading-[0.85] tracking-[-0.04em] text-center">OF THE</span>
                    <span className="block text-[18vw] md:text-[16vw] font-black text-white leading-[0.85] tracking-[-0.04em] text-center">DAY</span>
                </motion.div>
            </div>

            {/* ============================================ */}
            {/* CONTENT CARD                                 */}
            {/* Higher z-index covers the title.             */}
            {/* Semi-transparent bg so title peeks through.  */}
            {/* ============================================ */}
            <div className="relative -mt-[17vh]" style={{ zIndex: 10 }}>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.05 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="max-w-5xl mx-auto px-3 md:px-6"
                >
                    <div className="bg-black/65 backdrop-blur-sm border border-neutral-800 rounded-2xl shadow-[0_-20px_80px_rgba(0,0,0,0.7)] md:rounded-3xl overflow-hidden shadow-[0_-20px_80px_rgba(0,0,0,0.7)]">

                        {/* Card Header */}
                        <div className="p-5 md:p-12 lg:p-16 border-b border-neutral-800 relative">

                            <div className="relative z-10">
                                <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-white/10 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4 md:mb-6 text-white/80">
                                    {latestWord.date} &bull; {latestWord.category}
                                </span>
                                <h2 className="text-3xl md:text-5xl lg:text-8xl font-black tracking-tighter text-white mb-3 md:mb-6">
                                    {latestWord.title}
                                </h2>
                                <TextGenerateEffect
                                    words={latestWord.definition}
                                    className="text-sm md:text-xl lg:text-2xl italic text-neutral-400 max-w-3xl leading-relaxed" style={{ textAlign: "center" }}
                                    duration={2}
                                />
                            </div>
                        </div>

                        {/* Mobile-only image — shown right after definition */}
                        <div className="lg:hidden relative overflow-hidden max-h-[180px] border-b border-neutral-800">
                            {latestWord.imageUrl ? (
                                <>
                                    <img
                                        src={latestWord.imageUrl}
                                        alt={latestWord.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                                </>
                            ) : (
                                <div className="h-[120px] flex items-center justify-center bg-neutral-900">
                                    <p className="text-neutral-600 text-sm">No image available</p>
                                </div>
                            )}
                        </div>

                        {/* Card Body */}
                        <div className="flex flex-col lg:flex-row min-h-[250px] md:min-h-[400px]">
                            {/* Explanation */}
                            <div className="w-full lg:w-1/2 p-5 md:p-8 lg:p-12 lg:border-r border-neutral-800 flex flex-col justify-start text-left items-start">
                                <h3 className="text-xs md:text-sm font-bold text-neutral-500 uppercase tracking-widest mb-4 md:mb-6">Deep Dive</h3>
                                <div className="text-neutral-400 leading-relaxed text-xs md:text-sm">
                                    {latestWord.explanation.split('\n').map((para, i) => (
                                        <p key={i} className="mb-3 md:mb-4">{para}</p>
                                    ))}
                                </div>
                                {latestWord.readMoreUrl && (
                                    <a
                                        href={latestWord.readMoreUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 mt-4 md:mt-6 px-5 py-2.5 md:px-6 md:py-3 bg-white text-black text-sm md:text-base font-bold rounded-lg hover:bg-neutral-200 transition-colors self-start"
                                    >
                                        Read More <ExternalLink className="w-4 h-4" />
                                    </a>
                                )}
                            </div>

                            {/* Right Column: Image (desktop only) + Example */}
                            <div className="w-full lg:w-1/2 flex flex-col bg-neutral-900 border-t lg:border-t-0 lg:border-l border-neutral-800">
                                {/* Image — hidden on mobile (already shown above), visible on desktop */}
                                <div className="hidden lg:block relative overflow-hidden group">
                                    {latestWord.imageUrl ? (
                                        <>
                                            <img
                                                src={latestWord.imageUrl}
                                                alt={latestWord.title}
                                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                                        </>
                                    ) : (
                                        <div className="h-[250px] flex items-center justify-center bg-neutral-900">
                                            <p className="text-neutral-600 text-sm">No image available</p>
                                        </div>
                                    )}
                                </div>

                                {/* Example Section — content-fit, no wasted space */}
                                <div className="flex flex-col items-center justify-center p-4 md:p-8 lg:flex-1 border-t border-neutral-800 bg-neutral-900/50 backdrop-blur-sm">
                                    <h3 className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest mb-2 md:mb-3 text-center">
                                        Example
                                    </h3>
                                    <p className="text-neutral-400 text-xs md:text-sm leading-relaxed italic text-center">
                                        "{latestWord.example ? latestWord.example : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Archive Section (Calendar + List) */}
                <section className="py-12 md:py-24 bg-black border-t border-neutral-900 mt-10 md:mt-20 relative z-20">
                    <div className="max-w-7xl mx-auto px-4 md:px-6">
                        <div className="flex flex-col md:flex-row gap-8 md:gap-12">

                            {/* Left: Calendar Sticky */}
                            <div className="w-full md:w-1/3">
                                <div className="md:sticky md:top-24">
                                    <h2 className="text-2xl md:text-3xl font-black tracking-tighter mb-1 md:mb-2">Archive</h2>
                                    <p className="text-neutral-500 mb-5 md:mb-8 text-xs md:text-sm">Filter words by date.</p>

                                    <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl md:rounded-2xl p-4 md:p-6 backdrop-blur-sm">

                                        {/* Calendar Header */}
                                        <div className="flex items-center justify-between mb-4 md:mb-6">
                                            <h3 className="font-bold text-white text-sm md:text-base">
                                                {viewDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                                            </h3>
                                            <div className="flex gap-1">
                                                <button onClick={() => changeMonth(-1)} className="p-1 hover:bg-neutral-800 rounded-md transition-colors">
                                                    <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-neutral-400" />
                                                </button>
                                                <button onClick={() => changeMonth(1)} className="p-1 hover:bg-neutral-800 rounded-md transition-colors">
                                                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-neutral-400" />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Days Grid */}
                                        <div className="grid grid-cols-7 gap-x-6 gap-y-2 md:gap-2 text-center mb-2">
                                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
                                                <div key={d} className="text-[10px] md:text-xs font-bold text-neutral-600">{d}</div>
                                            ))}
                                        </div>
                                        <div className="grid grid-cols-7 gap-x-6 gap-y-2 md:gap-2">
                                            {getDaysInMonth().map((day, idx) => (
                                                <div key={idx} className="aspect-square flex items-center justify-center relative">
                                                    {day ? (
                                                        <button
                                                            onClick={() => handleDateClick(day)}
                                                            className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm font-medium transition-all outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0
                                                                ${isSelected(day) ? 'bg-white/20 text-white scale-110 shadow-lg z-10 ring-1 ring-white/50' : isToday(day) ? 'text-white bg-white/10 ring-1 ring-white/30' : 'text-neutral-400 hover:text-orange-400 hover:bg-neutral-800'}
                                                            `}
                                                        >
                                                            {day}
                                                        </button>
                                                    ) : (
                                                        <span />
                                                    )}
                                                </div>
                                            ))}
                                        </div>

                                        {/* Active Filter Indicator */}
                                        {selectedDate && (
                                            <div className="mt-6 pt-4 border-t border-neutral-800 flex justify-between items-center animate-in fade-in slide-in-from-top-2">
                                                <span className="text-xs text-neutral-400">Filtering by: <span className="text-white font-bold">{selectedDate}</span></span>
                                                <button onClick={() => setSelectedDate(null)} className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1">
                                                    <X className="w-3 h-3" /> Clear
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Right: Word List */}
                            <div className="w-full md:w-2/3">
                                {filteredWords.length > 0 ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                        {filteredWords.map((word, idx) => (
                                            <motion.div
                                                key={word._id}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ delay: idx * 0.05 }}
                                                className="group"
                                            >
                                                <Link to={`/word-of-the-day/${word._id}`} className="block cursor-pointer">
                                                    <div className="rounded-lg md:rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 group-hover:border-neutral-600 transition-colors">
                                                        {/* Image */}
                                                        <div className="aspect-[16/10] relative overflow-hidden">
                                                            <img
                                                                src={word.imageUrl}
                                                                alt={word.title}
                                                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                                        </div>
                                                        {/* Info */}
                                                        <div className="p-4 md:p-5">
                                                            <span className="text-[10px] md:text-[11px] font-mono text-neutral-500 mb-1.5 md:mb-2 block">{word.date} • {word.category}</span>
                                                            <h3 className="text-base md:text-xl font-bold text-white group-hover:text-orange-400 transition-colors leading-tight mb-1.5 md:mb-2">{word.title}</h3>
                                                            <p className="text-xs md:text-sm text-neutral-400 line-clamp-2 mb-3 md:mb-4">{word.definition}</p>
                                                            <span className="text-[10px] md:text-xs font-bold text-white/60 group-hover:text-white uppercase tracking-wider transition-colors">
                                                                Read More →
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="h-48 md:h-64 flex flex-col items-center justify-center border border-dashed border-neutral-800 rounded-xl md:rounded-2xl text-neutral-600">
                                        <CalendarIcon className="w-6 h-6 md:w-8 md:h-8 mb-2 md:mb-3 opacity-20" />
                                        <p className="text-sm md:text-base">No words found for this date.</p>
                                        {selectedDate && (
                                            <button onClick={() => setSelectedDate(null)} className="mt-3 md:mt-4 text-xs md:text-sm text-white underline decoration-neutral-700 hover:decoration-white underline-offset-4">
                                                View all words
                                            </button>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
}
