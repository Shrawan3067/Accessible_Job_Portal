/**
 * Header Component
 * Accessibility: Uses semantic <header> element, proper ARIA labels,
 * and keyboard navigation for the menu
 */
import React, { useState, useRef } from 'react';
import { Menu, X, Search, User, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import Navigation from './Navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

  // Handle keyboard events for menu
  const handleMenuKeyDown = (e) => {
    switch (e.key) {
      case 'Escape':
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (isMenuOpen) {
          // Focus first menu item
          const firstMenuItem = document.querySelector('[role="menuitem"]');
          firstMenuItem?.focus();
        }
        break;
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-backdrop-blur:bg-white/60 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:rounded-md"
              aria-label="CareerConnect - Home"
            >
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                CareerConnect
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <Navigation />
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle - Accessible */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 
                       focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              ref={menuButtonRef}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              onKeyDown={handleMenuKeyDown}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 
                       focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Auth buttons - Desktop */}
            <div className="hidden md:flex items-center space-x-3">
              <Link
                to="/login"
                className="btn-primary flex items-center space-x-2"
                aria-label="Sign in to your account"
              >
                <User className="w-4 h-4" />
                <span>Sign In</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu - Accessible dropdown */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          role="menu"
          aria-label="Mobile navigation"
          className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Navigation mobile onItemClick={() => setIsMenuOpen(false)} />
            <div className="pt-4 border-t border-gray-200 dark:border-gray-800 space-y-2">
              <Link
                to="/login"
                role="menuitem"
                className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 
                         dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 
                         focus:outline-none"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                role="menuitem"
                className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 
                         dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 
                         focus:outline-none"
                onClick={() => setIsMenuOpen(false)}
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;