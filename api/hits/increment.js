import connectDB from '../_db.js';
import HitCounter from '../_HitCounter.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    await connectDB();
    let counter = await HitCounter.findOneAndUpdate(
      {},
      { $inc: { count: 1 }, lastHit: new Date() },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    res.status(200).json({ success: true, count: counter.count });
  } catch (error) {
    console.error('Error incrementing hits:', error);
    res.status(500).json({ success: false, error: 'Failed to increment hits' });
  }
}
