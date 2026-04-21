import connectDB from '../_db.js';
import GameTeam from '../_GameTeam.js';

const GAME_DEMO_ADMIN_ID = process.env.GAME_DEMO_ADMIN_ID || 'demo-admin';
const GAME_DEMO_ADMIN_PASSWORD = process.env.GAME_DEMO_ADMIN_PASSWORD || 'demo-admin-123';

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    await connectDB();

    const { teamName, password } = req.body;

    if (!teamName || !password) {
      return res.status(400).json({ success: false, error: 'Team name and password are required' });
    }

    // Demo admin special case — always upsert and reset
    if (teamName === GAME_DEMO_ADMIN_ID && password === GAME_DEMO_ADMIN_PASSWORD) {
      const demoAdminTeam = await GameTeam.findOneAndUpdate(
        { teamName: GAME_DEMO_ADMIN_ID },
        {
          $set: {
            password: GAME_DEMO_ADMIN_PASSWORD,
            isDemoAdmin: true,
            hasPlayed: false,
            playedAt: null,
          },
          $setOnInsert: { score: 0 },
        },
        { new: true, upsert: true, setDefaultsOnInsert: true },
      );
      return res.status(200).json({ success: true, team: demoAdminTeam });
    }

    const team = await GameTeam.findOne({ teamName, password });

    if (!team) {
      return res.status(401).json({ success: false, error: 'Invalid team name or password' });
    }

    if (team.hasPlayed && !team.isDemoAdmin) {
      return res.status(403).json({
        success: false,
        error: 'This team has already played and cannot attempt again.',
      });
    }

    return res.status(200).json({ success: true, team });
  } catch (error) {
    console.error('Error logging in team:', error);
    return res.status(500).json({ success: false, error: 'Failed to login' });
  }
}
