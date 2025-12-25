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
          <div className="px-3 sm:px-4 md:px-6 lg:px-8 pt-6 sm:pt-8">
            {/* Main Footer Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 py-6 sm:py-8">
              <div>
                <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white">About Aruviah</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">Your one-stop e-commerce destination for quality products in Kenya and East Africa.</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white">Quick Links</h3>
                <ul className="text-gray-300 space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <li><Link to="/" className="hover:text-white transition">Home</Link></li>
                  <li><Link to="/products" className="hover:text-white transition">Products</Link></li>
                  <li><Link to="/about" className="hover:text-white transition">About</Link></li>
                  <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white">Support</h3>
                <ul className="text-gray-300 space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <li><Link to="/faq" className="hover:text-white transition">FAQ</Link></li>
                  <li><a href="#" className="hover:text-white transition">Shipping Info</a></li>
                  <li><a href="#" className="hover:text-white transition">Returns</a></li>
                  <li><Link to="/vendor-signup" className="hover:text-orange-400 transition font-semibold text-orange-500">Become a Vendor</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white">Legal</h3>
                <ul className="text-gray-300 space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <li><Link to="/terms" className="hover:text-white transition">Terms & Conditions</Link></li>
                  <li><Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
                  <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
                </ul>
              </div>
            </div>
            
            <hr className="border-gray-700" />
            
            {/* Contact and Payment Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 py-6 sm:py-8">
              <div>
                <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white">Contact Info</h3>
                <p className="text-gray-300 mb-1 sm:mb-2 text-xs sm:text-sm">📧 Email: <a href="mailto:support@aruviah.com" className="text-orange-500 hover:text-orange-400">support@aruviah.com</a></p>
                <p className="text-gray-300 mb-1 sm:mb-2 text-xs sm:text-sm">📱 Phone: <a href="tel:+254" className="text-orange-500 hover:text-orange-400">+254 (Your Number)</a></p>
                <p className="text-gray-300 text-xs sm:text-sm">📍 Kisii, Kenya</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white">Payment Methods</h3>
                <p className="text-gray-300 text-xs sm:text-sm">We accept:</p>
                <p className="text-gray-300 text-xs sm:text-sm">• M-Pesa • Bank Transfer • Credit/Debit Card • PayPal</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 border-t border-gray-700 py-3 sm:py-4">
          <div className="text-center text-gray-300 text-xs sm:text-sm">
            <p>&copy; 2025 Aruviah. All rights reserved.</p>
            <p className="text-xs mt-1 sm:mt-2 opacity-80">Registered in Kenya | Data Protection Act Compliant | East African E-commerce Platform</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
