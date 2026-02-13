import { createContext, useContext, useState, useEffect } from 'react';

const WordContext = createContext();

export const useWord = () => useContext(WordContext);

export const WordProvider = ({ children }) => {
    const [words, setWords] = useState(() => {
        const saved = localStorage.getItem('wordOfTheDayData');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('wordOfTheDayData', JSON.stringify(words));
    }, [words]);

    const addWord = (newWord) => {
        setWords(prev => [...prev, { ...newWord, id: Date.now(), createdAt: new Date().toISOString() }]);
    };

    const updateWord = (id, updatedData) => {
        setWords(prev => prev.map(word => word.id === id ? { ...word, ...updatedData } : word));
    };

    const deleteWord = (id) => {
        setWords(prev => prev.filter(word => word.id !== id));
    };

    const getLatestWord = () => {
        // innovative sorting to get the latest word based on date
        const sorted = [...words].sort((a, b) => new Date(b.date) - new Date(a.date));
        return sorted[0] || null;
    };

    const getPreviousWords = () => {
        const sorted = [...words].sort((a, b) => new Date(b.date) - new Date(a.date));
        return sorted.slice(1);
    };

    const getWordById = (id) => {
        return words.find(word => String(word.id) === String(id)) || null;
    };

    return (
        <WordContext.Provider value={{ words, addWord, updateWord, deleteWord, getLatestWord, getPreviousWords, getWordById }}>
            {children}
        </WordContext.Provider>
    );
};
