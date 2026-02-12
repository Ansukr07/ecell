import { useWord } from '../context/WordContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { TextGenerateEffect } from '../components/ui/text-generate-effect';
import { BackgroundRippleEffect } from '../components/ui/background-ripple-effect';

export default function WordOfTheDay() {
    const { getLatestWord, getPreviousWords } = useWord();
    const latestWord = getLatestWord();
    const previousWords = getPreviousWords();

    useEffect(() => { window.scrollTo(0, 0); }, []);

    // Track scroll to move title upward (simulating natural scroll)
    // NO opacity fade — title stays fully visible and goes behind the card
    const { scrollY } = useScroll();
    const titleY = useTransform(scrollY, [0, 800], [0, -400]);

    if (!latestWord) {
        return (
            <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
                <h1 className="text-4xl font-black mb-4 tracking-tighter">WORD OF THE DAY</h1>
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
                <BackgroundRippleEffect rows={35} cols={45} />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full z-[60] p-6 mix-blend-difference">
                <Link to="/" className="flex items-center gap-2 text-white font-medium hover:opacity-70 transition-opacity">
                    <ArrowLeft className="w-5 h-5" /> Back to E-Cell
                </Link>
            </nav>

            {/* ============================================ */}
            {/* TITLE: "WORD OF THE DAY"                     */}
            {/* Scrolls up via JS translateY (no fade).      */}
            {/* Lower z-index so it goes BEHIND the card.    */}
            {/* ============================================ */}
            <div className="relative h-screen flex items-center justify-center" style={{ zIndex: 1 }}>
                <motion.div
                    style={{ y: titleY }}
                    className="relative z-10 w-full flex flex-col items-center justify-center px-4"
                >
                    <span className="block text-[16vw] font-black text-white leading-[0.85] tracking-[-0.04em] text-center">WORD</span>
                    <span className="block text-[10vw] font-black text-white leading-[0.85] tracking-[-0.04em] text-center">OF THE</span>
                    <span className="block text-[16vw] font-black text-white leading-[0.85] tracking-[-0.04em] text-center">DAY</span>
                </motion.div>
            </div>

            {/* ============================================ */}
            {/* CONTENT CARD                                 */}
            {/* Higher z-index covers the title.             */}
            {/* Semi-transparent bg so title peeks through.  */}
            {/* ============================================ */}
            <div className="relative -mt-[30vh]" style={{ zIndex: 10 }}>

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.05 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="max-w-5xl mx-auto px-4 md:px-6"
                >
                    <div className="bg-black/85 backdrop-blur-lg border border-neutral-800 rounded-3xl overflow-hidden shadow-[0_-20px_80px_rgba(0,0,0,0.7)]">

                        {/* Card Header */}
                        <div className="p-8 md:p-12 lg:p-16 border-b border-neutral-800 relative">

                            <div className="relative z-10">
                                <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-xs font-bold tracking-widest uppercase mb-6 text-white/80">
                                    {latestWord.date} &bull; {latestWord.category}
                                </span>
                                <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6">
                                    {latestWord.title}
                                </h2>
                                <TextGenerateEffect
                                    words={latestWord.definition}
                                    className="text-xl md:text-2xl italic text-neutral-400 max-w-3xl leading-relaxed"
                                    duration={2}
                                />
                            </div>
                        </div>

                        {/* Card Body */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
                            {/* Explanation */}
                            <div className="p-8 md:p-12 lg:border-r border-neutral-800 flex flex-col justify-center">
                                <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-6">Deep Dive</h3>
                                <div className="text-neutral-400 leading-relaxed text-base">
                                    {latestWord.explanation.split('\n').map((para, i) => (
                                        <p key={i} className="mb-4">{para}</p>
                                    ))}
                                </div>
                                {latestWord.readMoreUrl && (
                                    <a
                                        href={latestWord.readMoreUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-neutral-200 transition-colors self-start"
                                    >
                                        Read More <ExternalLink className="w-4 h-4" />
                                    </a>
                                )}
                            </div>

                            {/* Single Image */}
                            <div className="relative overflow-hidden">
                                {latestWord.imageUrl ? (
                                    <>
                                        <img
                                            src={latestWord.imageUrl}
                                            alt={latestWord.title}
                                            className="w-full h-full object-cover min-h-[300px]"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                    </>
                                ) : (
                                    <div className="w-full h-full min-h-[300px] flex items-center justify-center bg-neutral-900">
                                        <p className="text-neutral-600">No image available</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Previous Words */}
                <section className="py-24 bg-black border-t border-neutral-900 mt-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex justify-between items-end mb-16">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-2">Previous Words</h2>
                                <p className="text-neutral-500">Explore the archive of entrepreneurial knowledge.</p>
                            </div>
                            <button className="hidden md:block text-sm font-bold border-b border-white pb-1 hover:opacity-70 transition-opacity">View Archive</button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            {previousWords.length > 0 ? (
                                previousWords.slice(0, 4).map((word, idx) => (
                                    <motion.div
                                        key={word.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="group cursor-pointer"
                                    >
                                        <div className="aspect-[4/5] rounded-xl overflow-hidden mb-4 relative bg-neutral-800">
                                            <img
                                                src={word.imageUrl}
                                                alt={word.title}
                                                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                                            <div className="absolute bottom-4 left-4 right-4">
                                                <span className="text-xs font-mono text-neutral-400 mb-1 block">{word.date}</span>
                                                <h3 className="text-xl font-bold text-white group-hover:text-neutral-200 transition-colors leading-tight">{word.title}</h3>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="col-span-4 py-20 text-center border border-dashed border-neutral-800 rounded-xl text-neutral-600">
                                    No previous words found.
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
}
