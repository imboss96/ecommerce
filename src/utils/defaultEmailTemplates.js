// Default email templates for all email types

export const DEFAULT_EMAIL_TEMPLATES = {
  passwordReset: {
    subject: 'Reset Your Password - Aruviah Stores',
    htmlContent: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #ff9800 0%, #f57c00 100%); color: white; padding: 30px 20px; text-align: center; }
            .content { padding: 40px 30px; }
            .cta-button { display: inline-block; background: linear-gradient(135deg, #ff9800 0%, #f57c00 100%); color: white; padding: 14px 32px; text-decoration: none; border-radius: 6px; font-weight: 600; margin: 20px 0; }
            .footer { background-color: #f9f9f9; padding: 20px; text-align: center; border-top: 1px solid #eee; font-size: 12px; color: #888; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🔐 Password Reset Request</h1>
            </div>
            <div class="content">
              <p>Hello,</p>
              <p>We received a request to reset your password. Click the button below to create a new password.</p>
              <div style="text-align: center;">
                <a href="{{resetLink}}" class="cta-button">Reset Password</a>
              </div>
              <p><strong>Note:</strong> This link will expire in 1 hour for security reasons.</p>
              <p>If you didn't request this, please ignore this email and your password will remain unchanged.</p>
              <p>Best regards,<br><strong>Aruviah Stores Team</strong></p>
            </div>
            <div class="footer">
              <p>© 2025 Aruviah Stores. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `
  },

  welcomeEmail: {
    subject: 'Welcome to Aruviah Stores! 🎉',
    htmlContent: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #ff9800 0%, #f57c00 100%); color: white; padding: 30px 20px; text-align: center; }
            .content { padding: 40px 30px; }
            .benefits { list-style: none; padding: 0; }
            .benefits li { padding: 10px 0; padding-left: 25px; position: relative; }
            .benefits li:before { content: "✓"; position: absolute; left: 0; color: #ff9800; font-weight: bold; }
            .cta-button { display: inline-block; background: linear-gradient(135deg, #ff9800 0%, #f57c00 100%); color: white; padding: 14px 32px; text-decoration: none; border-radius: 6px; font-weight: 600; margin: 20px 0; }
            .footer { background-color: #f9f9f9; padding: 20px; text-align: center; border-top: 1px solid #eee; font-size: 12px; color: #888; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Welcome {{firstName}}! 🎉</h1>
            </div>
            <div class="content">
              <p>Thank you for joining Aruviah Stores! We're excited to have you as part of our community.</p>
              
              <h3 style="color: #ff9800;">What You Can Expect</h3>
              <ul class="benefits">
                <li>Exclusive deals and special offers</li>
                <li>New product arrivals</li>
                <li>Member rewards on every purchase</li>
                <li>Fast checkout and shipping</li>
              </ul>
              
              <div style="text-align: center;">
                <a href="{{shopUrl}}" class="cta-button">Start Shopping</a>
              </div>
              
              <p>If you have any questions, feel free to reach out to our support team.</p>
              <p>Best regards,<br><strong>Aruviah Stores Team</strong></p>
            </div>
            <div class="footer">
              <p>© 2025 Aruviah Stores. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `
  },

  orderPlaced: {
    subject: 'Order Placed - {{orderId}}',
    htmlContent: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #ff9800 0%, #f57c00 100%); color: white; padding: 30px 20px; text-align: center; }
            .content { padding: 40px 30px; }
            table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
            th { background-color: #f5f5f5; font-weight: 600; }
            .footer { background-color: #f9f9f9; padding: 20px; text-align: center; border-top: 1px solid #eee; font-size: 12px; color: #888; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📦 Order Received</h1>
            </div>
            <div class="content">
              <p>Thank you for your order, {{firstName}}!</p>
              <p><strong>Order ID:</strong> {{orderId}}</p>
              <p><strong>Order Date:</strong> {{orderDate}}</p>
              
              <h3 style="color: #ff9800;">Order Items</h3>
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Qty</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {{orderItems}}
                </tbody>
              </table>
              
              <h3 style="color: #ff9800;">Order Total: {{orderTotal}}</h3>
              <p>We'll notify you when your order ships.</p>
              <p>Best regards,<br><strong>Aruviah Stores Team</strong></p>
            </div>
            <div class="footer">
              <p>© 2025 Aruviah Stores. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `
  },

  orderConfirmed: {
    subject: 'Order Confirmed - {{orderId}}',
    htmlContent: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #4caf50 0%, #45a049 100%); color: white; padding: 30px 20px; text-align: center; }
            .content { padding: 40px 30px; }
            .cta-button { display: inline-block; background: linear-gradient(135deg, #ff9800 0%, #f57c00 100%); color: white; padding: 14px 32px; text-decoration: none; border-radius: 6px; font-weight: 600; margin: 20px 0; }
            .footer { background-color: #f9f9f9; padding: 20px; text-align: center; border-top: 1px solid #eee; font-size: 12px; color: #888; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✅ Order Confirmed</h1>
            </div>
            <div class="content">
              <p>Great news! Your order has been confirmed and is being prepared.</p>
              <p><strong>Order ID:</strong> {{orderId}}</p>
              
              <h3 style="color: #ff9800;">What's Next?</h3>
              <ul>
                <li>Your order is being packed</li>
                <li>You'll receive a shipping notification soon</li>
                <li>Estimated delivery: 3-5 business days</li>
              </ul>
              
              <div style="text-align: center;">
                <a href="{{orderTrackingUrl}}" class="cta-button">Track Order</a>
              </div>
              
              <p>Best regards,<br><strong>Aruviah Stores Team</strong></p>
            </div>
            <div class="footer">
              <p>© 2025 Aruviah Stores. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `
  },

  orderShipped: {
    subject: 'Your Order Has Shipped! 🚚 {{orderId}}',
    htmlContent: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #2196f3 0%, #1976d2 100%); color: white; padding: 30px 20px; text-align: center; }
            .content { padding: 40px 30px; }
            .highlight-box { background: #e3f2fd; padding: 15px; border-radius: 6px; border-left: 4px solid #2196f3; margin: 20px 0; }
            .cta-button { display: inline-block; background: linear-gradient(135deg, #ff9800 0%, #f57c00 100%); color: white; padding: 14px 32px; text-decoration: none; border-radius: 6px; font-weight: 600; margin: 20px 0; }
            .footer { background-color: #f9f9f9; padding: 20px; text-align: center; border-top: 1px solid #eee; font-size: 12px; color: #888; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚚 Order Shipped!</h1>
            </div>
            <div class="content">
              <p>Great news {{firstName}}! Your order has been shipped.</p>
              
              <div class="highlight-box">
                <p><strong>Order ID:</strong> {{orderId}}</p>
                <p><strong>Tracking Number:</strong> {{trackingNumber}}</p>
              </div>
              
              <h3 style="color: #ff9800;">Track Your Package</h3>
              <p>You can track your shipment in real-time using the tracking number above.</p>
              
              <div style="text-align: center;">
                <a href="{{trackingUrl}}" class="cta-button">Track Package</a>
              </div>
              
              <p><strong>Estimated Delivery:</strong> {{estimatedDelivery}}</p>
              <p>Best regards,<br><strong>Aruviah Stores Team</strong></p>
            </div>
            <div class="footer">
              <p>© 2025 Aruviah Stores. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `
  },

  orderCancelled: {
    subject: 'Order Cancelled - {{orderId}}',
    htmlContent: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #f44336 0%, #d32f2f 100%); color: white; padding: 30px 20px; text-align: center; }
            .content { padding: 40px 30px; }
            .info-box { background: #fff3e0; padding: 15px; border-radius: 6px; border-left: 4px solid #ff9800; margin: 20px 0; }
            .cta-button { display: inline-block; background: linear-gradient(135deg, #ff9800 0%, #f57c00 100%); color: white; padding: 14px 32px; text-decoration: none; border-radius: 6px; font-weight: 600; margin: 20px 0; }
            .footer { background-color: #f9f9f9; padding: 20px; text-align: center; border-top: 1px solid #eee; font-size: 12px; color: #888; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>❌ Order Cancelled</h1>
            </div>
            <div class="content">
              <p>Your order has been cancelled.</p>
              <p><strong>Order ID:</strong> {{orderId}}</p>
              
              <div class="info-box">
                <h3 style="color: #ff9800; margin-top: 0;">Refund Information</h3>
                <p>Your refund of <strong>{{refundAmount}}</strong> will be processed within 5-7 business days.</p>
              </div>
              
              <h3 style="color: #ff9800;">Need Help?</h3>
              <p>If you have questions about this cancellation or need assistance, please contact our support team.</p>
              
              <div style="text-align: center;">
                <a href="{{supportUrl}}" class="cta-button">Contact Support</a>
              </div>
              
              <p>We appreciate your business and hope to serve you again!</p>
              <p>Best regards,<br><strong>Aruviah Stores Team</strong></p>
            </div>
            <div class="footer">
              <p>© 2025 Aruviah Stores. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `
  }
};
