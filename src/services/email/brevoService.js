// Brevo Email Service
import axios from 'axios';

const BREVO_API_KEY = process.env.REACT_APP_BREVO_API_KEY;
const BREVO_API_BASE = 'https://api.brevo.com/v3';

const brevoClient = axios.create({
  baseURL: BREVO_API_BASE,
  headers: {
    'api-key': BREVO_API_KEY,
    'Content-Type': 'application/json'
  }
});

/**
 * Send transactional email via Brevo
 * @param {string} email - Recipient email
 * @param {string} subject - Email subject
 * @param {string} htmlContent - HTML content
 * @param {string} senderName - Sender name
 * @param {string} senderEmail - Sender email
 * @returns {Promise}
 */
export const sendTransactionalEmail = async ({
  email,
  subject,
  htmlContent,
  senderName = 'Shopki',
  senderEmail = process.env.REACT_APP_BREVO_SENDER_EMAIL
}) => {
  try {
    const response = await brevoClient.post('/smtp/email', {
      to: [{ email }],
      sender: { 
        name: senderName, 
        email: senderEmail 
      },
      subject,
      htmlContent
    });
    
    return { success: true, messageId: response.data.messageId };
  } catch (error) {
    console.error('Brevo email error:', error.response?.data || error.message);
    return { 
      success: false, 
      error: error.response?.data?.message || error.message 
    };
  }
};

/**
 * Add subscriber to newsletter list
 * @param {string} email - Subscriber email
 * @param {string} firstName - Subscriber first name
 * @param {string} lastName - Subscriber last name
 * @returns {Promise}
 */
export const subscribeToNewsletter = async ({ email, firstName = '', lastName = '' }) => {
  try {
    const response = await brevoClient.post('/contacts', {
      email,
      firstName,
      lastName,
      listIds: [parseInt(process.env.REACT_APP_BREVO_NEWSLETTER_LIST_ID)],
      updateEnabled: true
    });
    
    return { success: true, contactId: response.data.id };
  } catch (error) {
    console.error('Brevo subscription error:', error.response?.data || error.message);
    return { 
      success: false, 
      error: error.response?.data?.message || error.message 
    };
  }
};

/**
 * Send password reset email
 * @param {string} email - User email
 * @param {string} resetLink - Password reset link
 * @returns {Promise}
 */
export const sendPasswordResetEmail = async (email, resetLink) => {
  const htmlContent = `
    <h2>Password Reset Request</h2>
    <p>Click the link below to reset your password:</p>
    <a href="${resetLink}" style="background-color: #ff9800; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; display: inline-block;">
      Reset Password
    </a>
    <p>This link will expire in 1 hour.</p>
    <p>If you didn't request this, please ignore this email.</p>
  `;

  return sendTransactionalEmail({
    email,
    subject: 'Reset Your Shopki Password',
    htmlContent
  });
};

/**
 * Send order confirmation email
 * @param {string} email - Customer email
 * @param {object} orderData - Order information
 * @returns {Promise}
 */
export const sendOrderConfirmationEmail = async (email, orderData) => {
  const itemsHtml = orderData.items.map(item => `
    <tr>
      <td>${item.name}</td>
      <td>x${item.quantity}</td>
      <td>KES ${(item.price * item.quantity).toLocaleString()}</td>
    </tr>
  `).join('');

  const htmlContent = `
    <h2>Order Confirmation</h2>
    <p>Thank you for your order!</p>
    <p><strong>Order ID:</strong> ${orderData.id}</p>
    <p><strong>Order Date:</strong> ${new Date(orderData.createdAt).toLocaleDateString()}</p>
    
    <h3>Order Items</h3>
    <table style="width:100%; border-collapse: collapse;">
      <tr style="background-color: #f5f5f5;">
        <th style="border: 1px solid #ddd; padding: 10px;">Product</th>
        <th style="border: 1px solid #ddd; padding: 10px;">Quantity</th>
        <th style="border: 1px solid #ddd; padding: 10px;">Amount</th>
      </tr>
      ${itemsHtml}
    </table>
    
    <h3 style="margin-top: 20px;">Order Total: KES ${orderData.total.toLocaleString()}</h3>
    <p>Estimated delivery: 3-5 business days</p>
  `;

  return sendTransactionalEmail({
    email,
    subject: `Order Confirmation - Shopki Order #${orderData.id.slice(0, 8).toUpperCase()}`,
    htmlContent
  });
};

/**
 * Send order status update email
 * @param {string} email - Customer email
 * @param {object} orderData - Order information
 * @returns {Promise}
 */
export const sendOrderStatusEmail = async (email, orderData) => {
  const statusMessages = {
    pending: 'Your order has been received and is being prepared.',
    processing: 'Your order is being processed and will be shipped soon.',
    shipped: 'Your order has been shipped! Track your package with the tracking number below.',
    completed: 'Your order has been delivered. We hope you enjoy your purchase!',
    cancelled: 'Your order has been cancelled.',
    returned: 'Your return has been processed.'
  };

  const htmlContent = `
    <h2>Order Status Update</h2>
    <p><strong>Order ID:</strong> ${orderData.id.slice(0, 8).toUpperCase()}</p>
    <p><strong>New Status:</strong> ${orderData.status.toUpperCase()}</p>
    <p>${statusMessages[orderData.status] || 'Your order status has been updated.'}</p>
    ${orderData.trackingNumber ? `<p><strong>Tracking Number:</strong> ${orderData.trackingNumber}</p>` : ''}
    <p><a href="${process.env.REACT_APP_BASE_URL}/orders/${orderData.id}">View Order Details</a></p>
  `;

  return sendTransactionalEmail({
    email,
    subject: `Order Status Update - Order #${orderData.id.slice(0, 8).toUpperCase()}`,
    htmlContent
  });
};

/**
 * Send welcome email to new newsletter subscriber
 * @param {string} email - Subscriber email
 * @returns {Promise}
 */
export const sendWelcomeEmail = async (email) => {
  const htmlContent = `
    <h2>Welcome to Shopki Newsletter!</h2>
    <p>Thank you for subscribing to our newsletter.</p>
    <p>You'll now receive:</p>
    <ul>
      <li>Exclusive deals and promotions</li>
      <li>New product arrivals</li>
      <li>Special offers for subscribers</li>
      <li>Shopping tips and trends</li>
    </ul>
    <p>Happy shopping!</p>
  `;

  return sendTransactionalEmail({
    email,
    subject: 'Welcome to Shopki Newsletter!',
    htmlContent
  });
};

export default {
  sendTransactionalEmail,
  subscribeToNewsletter,
  sendPasswordResetEmail,
  sendOrderConfirmationEmail,
  sendOrderStatusEmail,
  sendWelcomeEmail
};
