/**
 * SkipToContent Component
 * Accessibility: Provides keyboard users with a way to skip navigation
 * and jump directly to main content (WCAG 2.4.1 Bypass Blocks)
 */
import React from 'react';

const SkipToContent = () => {
  const handleSkip = (e) => {
    e.preventDefault();
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.setAttribute('tabindex', '-1');
      mainContent.focus();
      setTimeout(() => mainContent.removeAttribute('tabindex'), 1000);
    }
  };

  return (
    <a
      href="#main-content"
      onClick={handleSkip}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
                 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-primary-700 
                 focus:dark:bg-gray-900 focus:dark:text-primary-400 
                 focus:rounded-lg focus:shadow-lg focus:outline-none"
    >
      Skip to main content
    </a>
  );
};

export default SkipToContent;