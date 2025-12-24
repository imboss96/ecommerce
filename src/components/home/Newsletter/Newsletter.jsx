// src/components/home/Newsletter/Newsletter.jsx

import React, { useState } from 'react';
import { FiMail, FiCheck } from 'react-icons/fi';
import { subscribeToNewsletter, sendWelcomeEmail } from '../../../services/email/brevoService';
import { toast } from 'react-toastify';
import './Newsletter.css';

const Newsletter = ({ variant = 'full' }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }

    setLoading(true);

    try {
      // Subscribe to newsletter
      const result = await subscribeToNewsletter({
        email,
        firstName: '',
        lastName: ''
      });

      if (result.success) {
        // Send welcome email
        await sendWelcomeEmail(email);
        
        setSubscribed(true);
        setEmail('');
        toast.success('Welcome to Shopki newsletter! Check your email for confirmation.');
        
        // Reset after 5 seconds
        setTimeout(() => {
          setSubscribed(false);
        }, 5000);
      } else {
        toast.error(result.error || 'Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast.error('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Compact variant (top of page)
  if (variant === 'compact') {
    return (
      <section className="newsletter-compact-section">
        <div className="container mx-auto px-4">
          <div className="newsletter-compact-content">
            <p className="newsletter-compact-subtitle">Get exclusive deals, new arrivals, and special offers delivered to your inbox</p>
            
            <form onSubmit={handleSubscribe} className="newsletter-compact-form">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading || subscribed}
                className="newsletter-compact-input"
              />
              <button
                type="submit"
                disabled={loading || subscribed}
                className="newsletter-compact-button"
              >
                {subscribed ? (
                  <>
                    <FiCheck size={18} />
                    Subscribed
                  </>
                ) : loading ? (
                  'Subscribing...'
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>
            
            <p className="newsletter-compact-disclaimer">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Full variant (main newsletter section)
  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <div className="newsletter-icon">
              <FiMail size={32} />
            </div>
            <h2 className="newsletter-title">Stay Updated with Our Newsletter</h2>
            <p className="newsletter-description">
              Get the latest updates on new products, exclusive deals, and special offers!
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="newsletter-form">
            <div className="newsletter-input-group">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading || subscribed}
                className="newsletter-input"
              />
              <button
                type="submit"
                disabled={loading || subscribed}
                className="newsletter-button"
              >
                {subscribed ? (
                  <>
                    <FiCheck size={20} />
                    Subscribed
                  </>
                ) : loading ? (
                  'Subscribing...'
                ) : (
                  'Subscribe Now'
                )}
              </button>
            </div>
            <p className="newsletter-disclaimer">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
