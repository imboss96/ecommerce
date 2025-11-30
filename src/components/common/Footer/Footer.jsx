import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About Shopki</h3>
            <p className="text-gray-400">Your one-stop e-commerce destination for quality products in Kenya and East Africa.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/products" className="hover:text-white transition">Products</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="text-gray-400 space-y-2">
              <li><Link to="/faq" className="hover:text-white transition">FAQ</Link></li>
              <li><a href="#" className="hover:text-white transition">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition">Returns</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="text-gray-400 space-y-2">
              <li><Link to="/terms" className="hover:text-white transition">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <p className="text-gray-400 mb-2">📧 Email: <a href="mailto:support@shopki.com" className="text-orange-500 hover:text-orange-400">support@shopki.com</a></p>
            <p className="text-gray-400 mb-2">📱 Phone: <a href="tel:+254" className="text-orange-500 hover:text-orange-400">+254 (Your Number)</a></p>
            <p className="text-gray-400">📍 Nairobi, Kenya</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Payment Methods</h3>
            <p className="text-gray-400">We accept:</p>
            <p className="text-gray-400">• M-Pesa • Bank Transfer • Credit/Debit Card • PayPal</p>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />
        
        <div className="text-center text-gray-400">
          <p>&copy; 2025 Shopki. All rights reserved.</p>
          <p className="text-xs mt-2">Registered in Kenya | Data Protection Act Compliant | East African E-commerce Platform</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
