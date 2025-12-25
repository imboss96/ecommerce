// Location: src/components/common/Header/Header.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FiShoppingCart, 
  FiHeart, 
  FiUser, 
  FiSearch,
  FiMenu,
  FiX
} from 'react-icons/fi';
import { useAuth } from '../../../context/AuthContext';
import { useCart } from '../../../context/CartContext';
import { useLogoSettings } from '../../../hooks/useLogoSettings';
import { signOutUser } from '../../../services/firebase/auth';
import { CATEGORIES } from '../../../utils/constants';
import NotificationBell from './NotificationBell';
import './Header.css';

const Header = () => {
  const { user, userData, isAdmin } = useAuth();
  const { cartCount } = useCart();
  const { logo } = useLogoSettings();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${searchQuery}`);
      setSearchQuery('');
    }
  };

  const handleSignOut = async () => {
    await signOutUser();
    navigate('/');
  };

  return (
    <header className="header sticky top-0 z-40 bg-white">
      {/* Top Bar */}
      <div className="top-bar bg-orange-500 text-white py-1 sm:py-2 text-xs sm:text-sm">
        <div className="container mx-auto px-3 sm:px-4 flex justify-between items-center gap-2">
          <div className="hidden sm:block">Free shipping on all orders</div>
          <div className="text-xs sm:text-sm">Free shipping</div>
          <div className="flex gap-2 sm:gap-4 text-xs sm:text-sm">
            <Link to="/help" className="hover:underline">Help</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header bg-white shadow">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Logo */}
            <Link to="/" className="logo flex-shrink-0">
              <img src={logo || '/logo.png'} alt="Store Logo" style={{ height: '40px', sm: '50px', width: 'auto' }} />
            </Link>

            {/* Search Bar - Hidden on small screens */}
            <form onSubmit={handleSearch} className="search-form flex-1 max-w-2xl hidden md:flex">
              <input
                type="text"
                placeholder="Search for products, brands and categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input flex-1 px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-l-lg focus:outline-none focus:border-orange-500"
              />
              <button
                type="submit"
                className="search-button bg-orange-500 text-white px-4 sm:px-6 py-2 rounded-r-lg hover:bg-orange-600 transition"
              >
                <FiSearch size={20} />
              </button>
            </form>

            {/* Icons */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Notification Bell - Hide on very small screens */}
              <div className="hidden sm:block">
                <NotificationBell />
              </div>

              {/* Wishlist */}
              <Link to="/wishlist" className="hover:text-orange-500 hidden md:block p-2 hover:bg-gray-100 rounded transition">
                <FiHeart size={20} />
              </Link>

              {/* Cart */}
              <Link to="/cart" className="relative hover:text-orange-500 p-2 hover:bg-gray-100 rounded transition">
                <FiShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* User Menu */}
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-1 sm:gap-2 hover:text-orange-500 p-2 hover:bg-gray-100 rounded transition text-sm sm:text-base"
                >
                  <FiUser size={20} />
                  <span className="hidden lg:inline">
                    {user ? 'Account' : 'Sign In'}
                  </span>
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-40 sm:w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                    {user ? (
                      <>
                        <Link
                          to="/profile"
                          className="block px-3 sm:px-4 py-2 hover:bg-gray-100 text-sm"
                          onClick={() => setUserMenuOpen(false)}
                        >
                          My Account
                        </Link>
                        <Link
                          to="/orders"
                          className="block px-3 sm:px-4 py-2 hover:bg-gray-100 text-sm"
                          onClick={() => setUserMenuOpen(false)}
                        >
                          Orders
                        </Link>
                        <Link
                          to="/wishlist"
                          className="block px-3 sm:px-4 py-2 hover:bg-gray-100 text-sm md:hidden"
                          onClick={() => setUserMenuOpen(false)}
                        >
                          Wishlist
                        </Link>
                        {userData?.isVendor && (
                          <>
                            <hr className="my-2" />
                            <Link
                              to="/vendor/dashboard"
                              className="block px-3 sm:px-4 py-2 hover:bg-gray-100 text-green-600 font-semibold text-sm"
                              onClick={() => setUserMenuOpen(false)}
                            >
                              🏪 Vendor Dashboard
                            </Link>
                          </>
                        )}
                        {isAdmin && (
                          <>
                            <hr className="my-2" />
                            <Link
                              to="/admin"
                              className="block px-3 sm:px-4 py-2 hover:bg-gray-100 text-orange-600 font-semibold text-sm"
                              onClick={() => setUserMenuOpen(false)}
                            >
                              Admin Dashboard
                            </Link>
                          </>
                        )}
                        <hr className="my-2" />
                        <button
                          onClick={() => {
                            handleSignOut();
                            setUserMenuOpen(false);
                          }}
                          className="block w-full text-left px-3 sm:px-4 py-2 hover:bg-gray-100 text-red-600 text-sm"
                        >
                          Sign Out
                        </button>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className="block px-3 sm:px-4 py-2 hover:bg-gray-100 text-sm"
                          onClick={() => setUserMenuOpen(false)}
                        >
                          Sign In
                        </Link>
                        <Link
                          to="/signup"
                          className="block px-3 sm:px-4 py-2 hover:bg-gray-100 text-sm"
                          onClick={() => setUserMenuOpen(false)}
                        >
                          Create Account
                        </Link>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-100 rounded transition"
              >
                {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="mt-3 md:hidden flex gap-2">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-orange-600 transition flex-shrink-0"
            >
              <FiSearch size={18} />
            </button>
          </form>
        </div>
      </div>

      {/* Navigation */}
      <nav className="nav-bar bg-gray-100 hidden md:block overflow-x-auto">
        <div className="container mx-auto px-3 sm:px-4">
          <ul className="flex gap-2 sm:gap-6 py-2 sm:py-3 text-sm sm:text-base whitespace-nowrap md:whitespace-normal">
            <li>
              <Link to="/products?category=electronics" className="hover:text-orange-500 inline-block py-1">
                Electronics
              </Link>
            </li>
            <li>
              <Link to="/products?category=fashion-apparel" className="hover:text-orange-500 inline-block py-1">
                Fashion & Apparel
              </Link>
            </li>
            <li>
              <Link to="/products?category=home-garden" className="hover:text-orange-500 inline-block py-1">
                Home & Garden
              </Link>
            </li>
            <li>
              <Link to="/products?category=sports-outdoors" className="hover:text-orange-500 inline-block py-1">
                Sports & Outdoors
              </Link>
            </li>
            <li>
              <Link to="/products?category=health-beauty" className="hover:text-orange-500 inline-block py-1">
                Health & Beauty
              </Link>
            </li>
            <li className="relative group">
              <button className="hover:text-orange-500 flex items-center gap-1 py-1">
                More Categories ▼
              </button>
              <div className="absolute left-0 mt-0 w-40 sm:w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                {CATEGORIES.slice(5).map((category) => (
                  <Link
                    key={category.id}
                    to={`/products?category=${category.id}`}
                    className="block px-3 sm:px-4 py-2 text-gray-700 hover:bg-orange-500 hover:text-white first:rounded-t-md last:rounded-b-md text-sm"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu md:hidden bg-white border-t max-h-screen overflow-y-auto">
          <div className="container mx-auto px-3 sm:px-4 py-4">
            <ul className="space-y-2">
              <li className="font-semibold text-gray-700 pb-2 border-b text-sm">Categories</li>
              {CATEGORIES.map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/products?category=${category.id}`}
                    className="block hover:text-orange-500 py-2 text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {category.icon} {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;