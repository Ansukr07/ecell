import connectDB from '../_db.js';
import GameTeam from '../_GameTeam.js';

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

    const { teamId, score } = req.body;

    if (!teamId || score === undefined) {
      return res.status(400).json({ success: false, error: 'teamId and score are required' });
    }

    const team = await GameTeam.findById(teamId);

    if (!team) {
      return res.status(404).json({ success: false, error: 'Team not found' });
    }

    if (score > team.score) {
      team.score = score;
    }

    if (team.isDemoAdmin) {
      team.hasPlayed = false;
      team.playedAt = null;
    } else {
      team.hasPlayed = true;
      team.playedAt = new Date();
    }

    await team.save();

    return res.status(200).json({ success: true, team });
  } catch (error) {
    console.error('Error updating score:', error);
    return res.status(500).json({ success: false, error: 'Failed to update score' });
  }
}
