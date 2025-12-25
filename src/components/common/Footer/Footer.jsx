import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gray-900">
      {/* Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="w-full">
          <div className="px-4 sm:px-6 lg:px-8 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8">
              <div>
                <h3 className="text-lg font-bold mb-4 text-white">About Aruviah</h3>
                <p className="text-gray-300">Your one-stop e-commerce destination for quality products in Kenya and East Africa.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
                <ul className="text-gray-300 space-y-2">
                  <li><Link to="/" className="hover:text-white transition">Home</Link></li>
                  <li><Link to="/products" className="hover:text-white transition">Products</Link></li>
                  <li><Link to="/about" className="hover:text-white transition">About</Link></li>
                  <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4 text-white">Support</h3>
                <ul className="text-gray-300 space-y-2">
                  <li><Link to="/faq" className="hover:text-white transition">FAQ</Link></li>
                  <li><a href="#" className="hover:text-white transition">Shipping Info</a></li>
                  <li><a href="#" className="hover:text-white transition">Returns</a></li>
                  <li><Link to="/vendor-signup" className="hover:text-orange-400 transition font-semibold text-orange-500">Become a Vendor</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4 text-white">Legal</h3>
                <ul className="text-gray-300 space-y-2">
                  <li><Link to="/terms" className="hover:text-white transition">Terms & Conditions</Link></li>
                  <li><Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
                  <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
                </ul>
              </div>
            </div>
            
            <hr className="border-gray-700" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
              <div>
                <h3 className="text-lg font-bold mb-4 text-white">Contact Info</h3>
                <p className="text-gray-300 mb-2">📧 Email: <a href="mailto:support@aruviah.com" className="text-orange-500 hover:text-orange-400">support@aruviah.com</a></p>
                <p className="text-gray-300 mb-2">📱 Phone: <a href="tel:+254" className="text-orange-500 hover:text-orange-400">+254 (Your Number)</a></p>
                <p className="text-gray-300">📍 Kisii, Kenya</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4 text-white">Payment Methods</h3>
                <p className="text-gray-300">We accept:</p>
                <p className="text-gray-300">• M-Pesa • Bank Transfer • Credit/Debit Card • PayPal</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8 border-t border-gray-700 py-4">
          <div className="text-center text-gray-300">
            <p>&copy; 2025 Aruviah. All rights reserved.</p>
            <p className="text-xs mt-2">Registered in Kenya | Data Protection Act Compliant | East African E-commerce Platform</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
