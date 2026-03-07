const connectDB = require('./_db');
const mongoose = require('mongoose');

// FailureStory schema
const failureStorySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  story: { type: String, required: true, trim: true },
}, { timestamps: true });

const FailureStory = mongoose.models.FailureStory || mongoose.model('FailureStory', failureStorySchema);

// Validate request body
const validateBody = ({ name, email, story }) => {
  const errors = [];

  if (!name || name.trim().length < 2 || name.trim().length > 100) {
    errors.push({ path: 'name', msg: 'Name must be between 2 and 100 characters' });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push({ path: 'email', msg: 'Please provide a valid email address' });
  }

  if (!story || story.trim().length < 50 || story.trim().length > 5000) {
    errors.push({ path: 'story', msg: 'Story must be between 50 and 5000 characters' });
  }

  return errors;
};

module.exports = async function handler(req, res) {
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

    const { name, email, story } = req.body;

    // Validate
    const errors = validateBody({ name, email, story });
    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: errors,
      });
    }

    // Save to MongoDB
    const failureStory = new FailureStory({
      name: name.trim(),
      email: email.trim(),
      story: story.trim(),
    });

    await failureStory.save();

    return res.status(200).json({
      success: true,
      message: 'Story submitted successfully! Thank you for sharing your experience.',
    });
  } catch (error) {
    console.error('Error submitting story:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to submit story. Please try again later.',
    });
  }
};
