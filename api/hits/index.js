import connectDB from '../_db.js';
import HitCounter from '../_HitCounter.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    await connectDB();
    let counter = await HitCounter.findOne();
    if (!counter) {
      counter = await HitCounter.create({ count: 0 });
    }
    res.status(200).json({ success: true, count: counter.count });
  } catch (error) {
    console.error('Error fetching hits:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch hits' });
  }
}
