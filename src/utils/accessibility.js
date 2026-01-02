/**
 * Accessibility Utilities
 * WCAG compliance helpers and utilities
 */

/**
 * Generates a unique ID for ARIA attributes
 */
export const generateId = (prefix = 'id') => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Formats text for screen readers
 * Adds pauses between sections for better comprehension
 */
export const formatForScreenReader = (text) => {
  if (!text) return '';
  
  return text
    .replace(/\s+/g, ' ') // Normalize whitespace
    .replace(/([.!?])\s*/g, '$1, ') // Add pauses after sentences
    .trim();
};

/**
 * Checks if color contrast meets WCAG AA requirements
 * @param {string} foreground - CSS color
 * @param {string} background - CSS color
 * @returns {boolean}
 */
export const checkContrast = (foreground, background) => {
  // Convert hex to RGB
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  // Calculate relative luminance
  const getLuminance = (color) => {
    const rgb = hexToRgb(color);
    if (!rgb) return 0;
    
    const sRGB = [rgb.r / 255, rgb.g / 255, rgb.b / 255];
    const adjusted = sRGB.map(val => 
      val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4)
    );
    
    return 0.2126 * adjusted[0] + 0.7152 * adjusted[1] + 0.0722 * adjusted[2];
  };

  const lum1 = getLuminance(foreground);
  const lum2 = getLuminance(background);
  
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  const contrast = (brightest + 0.05) / (darkest + 0.05);
  
  return contrast >= 4.5; // WCAG AA requirement for normal text
};

/**
 * Keyboard navigation helpers
 */
export const Keyboard = {
  isEnter: (e) => e.key === 'Enter' || e.keyCode === 13,
  isSpace: (e) => e.key === ' ' || e.keyCode === 32,
  isEscape: (e) => e.key === 'Escape' || e.keyCode === 27,
  isTab: (e) => e.key === 'Tab' || e.keyCode === 9,
  isArrowUp: (e) => e.key === 'ArrowUp' || e.keyCode === 38,
  isArrowDown: (e) => e.key === 'ArrowDown' || e.keyCode === 40,
  isArrowLeft: (e) => e.key === 'ArrowLeft' || e.keyCode === 37,
  isArrowRight: (e) => e.key === 'ArrowRight' || e.keyCode === 39,
  isHome: (e) => e.key === 'Home' || e.keyCode === 36,
  isEnd: (e) => e.key === 'End' || e.keyCode === 35
};

/**
 * ARIA live region helper
 */
export const announceToScreenReader = (message, priority = 'polite') => {
  const liveRegion = document.getElementById('sr-live-region');
  
  if (liveRegion) {
    liveRegion.textContent = message;
    liveRegion.setAttribute('aria-live', priority);
  } else {
    // Create live region if it doesn't exist
    const region = document.createElement('div');
    region.id = 'sr-live-region';
    region.setAttribute('aria-live', priority);
    region.setAttribute('aria-atomic', 'true');
    region.className = 'sr-only';
    region.textContent = message;
    document.body.appendChild(region);
    
    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(region);
    }, 1000);
  }
};

/**
 * Focus trap for modals and dialogs
 */
export const trapFocus = (element) => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  if (focusableElements.length === 0) return;
  
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  
  return {
    first: firstElement,
    last: lastElement,
    handleKeyDown: (e) => {
      if (e.key !== 'Tab') return;
      
      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  };
};

/**
 * Safe set focus with fallback
 */
export const safeFocus = (element) => {
  if (element && typeof element.focus === 'function') {
    try {
      element.focus({ preventScroll: true });
    } catch (err) {
      console.warn('Could not focus element:', err);
    }
  }
};