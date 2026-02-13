const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const { body, validationResult } = require('express-validator');
require('dotenv').config();

const Word = require('./models/Word');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Rate limiting - 5 submissions per hour per IP
const submissionLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  message: {
    error: 'Too many story submissions from this IP, please try again later.',
    retryAfter: 3600
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Email transporter configuration
const createTransporter = () => {
  // Gmail configuration (you can change this for other providers)
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS // Use App Password for Gmail
    }
  });
};

// Alternative configuration for other email providers
const createCustomTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
};

// Validation middleware
const validateStorySubmission = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),

  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),

  body('story')
    .trim()
    .isLength({ min: 50, max: 5000 })
    .withMessage('Story must be between 50 and 5000 characters'),
];

// Sanitize HTML content
const sanitizeContent = (content) => {
  return content
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

// Format email content
const formatEmailContent = (data) => {
  const sanitizedData = {
    name: sanitizeContent(data.name),
    email: sanitizeContent(data.email),
    story: sanitizeContent(data.story)
  };

  return {
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Failure Story Submission</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .header { background-color: #FD7722; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; max-width: 800px; margin: 0 auto; }
          .field { margin-bottom: 20px; }
          .label { font-weight: bold; color: #FD7722; }
          .story-content { background-color: #f9f9f9; padding: 15px; border-left: 4px solid #FD7722; white-space: pre-wrap; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>New Failure Story Submission</h1>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name:</div>
            <div>${sanitizedData.name}</div>
          </div>
          
          <div class="field">
            <div class="label">Email:</div>
            <div>${sanitizedData.email}</div>
          </div>
          
          <div class="field">
            <div class="label">Story:</div>
            <div class="story-content">${sanitizedData.story}</div>
          </div>
          
          <div class="field">
            <div class="label">Submitted At:</div>
            <div>${new Date().toLocaleString()}</div>
          </div>
        </div>
        <div class="footer">
          This email was sent from the E-Cell BMSIT Failure Story submission form.
        </div>
      </body>
      </html>
    `,
    text: `
New Failure Story Submission

Name: ${sanitizedData.name}
Email: ${sanitizedData.email}
Submitted At: ${new Date().toLocaleString()}

Story:
${sanitizedData.story}

---
This email was sent from the E-Cell BMSIT Failure Story submission form.
    `
  };
};

// Routes
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'Failure Story Backend'
  });
});

// Submit failure story
app.post('/api/submit-story',
  submissionLimiter,
  validateStorySubmission,
  async (req, res) => {
    try {
      // Check validation results
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          error: 'Validation failed',
          details: errors.array()
        });
      }

      const { name, email, story } = req.body;

      // Create email content
      const emailContent = formatEmailContent({ name, email, story });

      // Create transporter (using Gmail by default)
      const transporter = process.env.SMTP_HOST ? createCustomTransporter() : createTransporter();

      // Email options
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'ecell@bmsit.in',
        subject: `New Failure Story from ${name}`,
        text: emailContent.text,
        html: emailContent.html,
        replyTo: email
      };

      // Send confirmation email to submitter
      const confirmationOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Thank you for sharing your story!',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <title>Thank You</title>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .header { background-color: #FD7722; color: white; padding: 20px; text-align: center; }
              .content { padding: 30px; max-width: 600px; margin: 0 auto; }
              .footer { text-align: center; padding: 20px; color: #666; }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>Thank You, ${sanitizeContent(name)}!</h1>
            </div>
            <div class="content">
              <p>Thank you for sharing your failure story with E-Cell BMSIT. Your courage to share your journey will inspire countless entrepreneurs who face similar challenges.</p>
              
              <p>Every failure is a stepping stone to success, and by sharing your experience, you're helping build a community where entrepreneurs can learn from each other's setbacks and comebacks.</p>
              
              <p>We truly appreciate your contribution to our entrepreneurial community.</p>
              
              <p>Best regards,<br>
              <strong>E-Cell BMSIT Team</strong></p>
            </div>
            <div class="footer">
              <p>This is an automated message. Please do not reply to this email.</p>
            </div>
          </body>
          </html>
        `
      };

      // Send both emails
      await Promise.all([
        transporter.sendMail(mailOptions),
        transporter.sendMail(confirmationOptions)
      ]);

      res.json({
        success: true,
        message: 'Story submitted successfully! Thank you for sharing your experience.'
      });

    } catch (error) {
      console.error('Error submitting story:', error);

      // Don't expose internal errors to client
      res.status(500).json({
        success: false,
        error: 'Failed to submit story. Please try again later.'
      });
    }
  }
);

// ===== WORD OF THE DAY CRUD ROUTES =====

// GET all words (sorted by date descending)
app.get('/api/words', async (req, res) => {
  try {
    const words = await Word.find().sort({ date: -1 });
    res.json(words);
  } catch (error) {
    console.error('Error fetching words:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch words' });
  }
});

// GET single word by ID
app.get('/api/words/:id', async (req, res) => {
  try {
    const word = await Word.findById(req.params.id);
    if (!word) {
      return res.status(404).json({ success: false, error: 'Word not found' });
    }
    res.json(word);
  } catch (error) {
    console.error('Error fetching word:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch word' });
  }
});

// POST create new word
app.post('/api/words', async (req, res) => {
  try {
    const word = new Word(req.body);
    const saved = await word.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error('Error creating word:', error);
    res.status(500).json({ success: false, error: 'Failed to create word' });
  }
});

// PUT update word
app.put('/api/words/:id', async (req, res) => {
  try {
    const word = await Word.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!word) {
      return res.status(404).json({ success: false, error: 'Word not found' });
    }
    res.json(word);
  } catch (error) {
    console.error('Error updating word:', error);
    res.status(500).json({ success: false, error: 'Failed to update word' });
  }
});

// DELETE word
app.delete('/api/words/:id', async (req, res) => {
  try {
    const word = await Word.findByIdAndDelete(req.params.id);
    if (!word) {
      return res.status(404).json({ success: false, error: 'Word not found' });
    }
    res.json({ success: true, message: 'Word deleted' });
  } catch (error) {
    console.error('Error deleting word:', error);
    res.status(500).json({ success: false, error: 'Failed to delete word' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Failure Story Backend running on port ${PORT}`);
  console.log(`📧 Email service: ${process.env.SMTP_HOST ? 'Custom SMTP' : 'Gmail'}`);
  console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;