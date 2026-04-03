import connectDB from './_db.js';
import mongoose from 'mongoose';

// Idea schema (matching backend/models/Idea.js)
const ideaSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  idea: { type: String, required: true, trim: true },
  status: { type: String, enum: ['pending', 'reviewed', 'archived'], default: 'pending' },
}, { timestamps: true });

const Idea = mongoose.models.Idea || mongoose.model('Idea', ideaSchema);

// Validate request body
const validateBody = ({ name, email, idea }) => {
  const errors = [];

  if (!name || name.trim().length < 2 || name.trim().length > 100) {
    errors.push({ path: 'name', msg: 'Name must be between 2 and 100 characters' });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push({ path: 'email', msg: 'Please provide a valid email address' });
  }

  if (!idea || idea.trim().length < 50 || idea.trim().length > 5000) {
    errors.push({ path: 'idea', msg: 'Idea must be between 50 and 5000 characters' });
  }

  return errors;
};

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

    const { name, email, idea } = req.body;

    // Validate
    const errors = validateBody({ name, email, idea });
    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: errors,
      });
    }

    // Save to MongoDB
    const newIdea = new Idea({
      name: name.trim(),
      email: email.trim(),
      idea: idea.trim(),
    });

    await newIdea.save();

    return res.status(200).json({
      success: true,
      message: 'Idea submitted successfully! Thank you for sharing your vision.',
    });
  } catch (error) {
    console.error('Error submitting idea:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to submit idea. Please try again later.',
    });
  }
}
