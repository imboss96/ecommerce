// Backend API for handling emails with SendGrid
// Location: backend/server.js

const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * POST /api/send-email
 * Send email via SendGrid
 */
app.post('/api/send-email', async (req, res) => {
  try {
    const { to, subject, html, text } = req.body;

    // Validate input
    if (!to || !subject || !html) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: to, subject, html'
      });
    }

    // Prepare email
    const msg = {
      to,
      from: process.env.SENDGRID_FROM_EMAIL || 'support@shopki.com',
      subject,
      html,
      text: text || html.replace(/<[^>]*>/g, '') // Strip HTML if no text provided
    };

    // Send email
    await sgMail.send(msg);

    console.log('✅ Email sent to:', to);
    res.json({
      success: true,
      message: `Email sent to ${to}`
    });

  } catch (error) {
    console.error('❌ Error sending email:', error);
    
    // Check if it's a SendGrid validation error
    if (error.response) {
      return res.status(error.response.status).json({
        success: false,
        error: error.response.body?.errors?.[0]?.message || error.message
      });
    }

    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

/**
 * GET /api/health
 * Health check endpoint
 */
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Email API server is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    success: false,
    error: err.message
  });
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Email API server running on port ${PORT}`);
  console.log(`📧 SendGrid API Key: ${process.env.SENDGRID_API_KEY ? '✅ Configured' : '❌ Missing'}`);
  console.log(`📧 From Email: ${process.env.SENDGRID_FROM_EMAIL}`);
});
