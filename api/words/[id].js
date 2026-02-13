const connectDB = require('../_db');
const Word = require('../_Word');

module.exports = async function handler(req, res) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') return res.status(200).end();

    await connectDB();

    const { id } = req.query;

    try {
        if (req.method === 'GET') {
            const word = await Word.findById(id);
            if (!word) return res.status(404).json({ error: 'Word not found' });
            return res.status(200).json(word);
        }

        if (req.method === 'PUT') {
            const word = await Word.findByIdAndUpdate(id, req.body, { new: true });
            if (!word) return res.status(404).json({ error: 'Word not found' });
            return res.status(200).json(word);
        }

        if (req.method === 'DELETE') {
            const word = await Word.findByIdAndDelete(id);
            if (!word) return res.status(404).json({ error: 'Word not found' });
            return res.status(200).json({ success: true, message: 'Word deleted' });
        }

        return res.status(405).json({ error: 'Method not allowed' });
    } catch (error) {
        console.error('API error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
