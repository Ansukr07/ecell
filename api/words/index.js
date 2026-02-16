const connectDB = require('../_db');
const Word = require('../_Word');

module.exports = async function handler(req, res) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') return res.status(200).end();

    await connectDB();

    try {
        if (req.method === 'GET') {
            const words = await Word.find().sort({ date: -1 });
            return res.status(200).json(words);
        }

        if (req.method === 'POST') {
            const word = new Word(req.body);
            const saved = await word.save();
            return res.status(201).json(saved);
        }

        return res.status(405).json({ error: 'Method not allowed' });
    } catch (error) {
        console.error('API error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
