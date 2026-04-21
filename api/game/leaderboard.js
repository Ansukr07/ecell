import connectDB from '../_db.js';
import GameTeam from '../_GameTeam.js';

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    await connectDB();

    const teams = await GameTeam.find().sort({ score: -1 }).select('-password');

    return res.status(200).json({ success: true, leaderboard: teams });
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return res.status(500).json({ success: false, error: 'Failed to fetch leaderboard' });
  }
}
