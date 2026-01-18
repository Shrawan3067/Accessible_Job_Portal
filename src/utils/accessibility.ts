/**
 * Accessibility Utilities
 * WCAG helpers and utilities with TypeScript types
 */

export const generateId = (prefix = 'id'): string => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};

export const formatForScreenReader = (text?: string): string => {
  if (!text) return '';
  return text
    .replace(/\s+/g, ' ')
    .replace(/([.!?])\s*/g, '$1, ')
    .trim();
};

export const checkContrast = (foreground: string, background: string): boolean => {
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) }
      : null;
  };

  const getLuminance = (color: string) => {
    const rgb = hexToRgb(color);
    if (!rgb) return 0;
    const sRGB = [rgb.r / 255, rgb.g / 255, rgb.b / 255];
    const adjusted = sRGB.map(val => (val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4)));
    return 0.2126 * adjusted[0] + 0.7152 * adjusted[1] + 0.0722 * adjusted[2];
  };

  const lum1 = getLuminance(foreground);
  const lum2 = getLuminance(background);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  const contrast = (brightest + 0.05) / (darkest + 0.05);
  return contrast >= 4.5;
};

export const Keyboard = {
  isEnter: (e: KeyboardEvent) => e.key === 'Enter' || (e as any).keyCode === 13,
  isSpace: (e: KeyboardEvent) => e.key === ' ' || (e as any).keyCode === 32,
  isEscape: (e: KeyboardEvent) => e.key === 'Escape' || (e as any).keyCode === 27,
  isTab: (e: KeyboardEvent) => e.key === 'Tab' || (e as any).keyCode === 9,
  isArrowUp: (e: KeyboardEvent) => e.key === 'ArrowUp' || (e as any).keyCode === 38,
  isArrowDown: (e: KeyboardEvent) => e.key === 'ArrowDown' || (e as any).keyCode === 40,
  isArrowLeft: (e: KeyboardEvent) => e.key === 'ArrowLeft' || (e as any).keyCode === 37,
  isArrowRight: (e: KeyboardEvent) => e.key === 'ArrowRight' || (e as any).keyCode === 39,
  isHome: (e: KeyboardEvent) => e.key === 'Home' || (e as any).keyCode === 36,
  isEnd: (e: KeyboardEvent) => e.key === 'End' || (e as any).keyCode === 35
};

export const announceToScreenReader = (message: string, priority: 'polite' | 'assertive' = 'polite'): void => {
  const liveRegion = document.getElementById('sr-live-region');
  if (liveRegion) {
    liveRegion.textContent = message;
    liveRegion.setAttribute('aria-live', priority);
  } else {
    const region = document.createElement('div');
    region.id = 'sr-live-region';
    region.setAttribute('aria-live', priority);
    region.setAttribute('aria-atomic', 'true');
    region.className = 'sr-only';
    region.textContent = message;
    document.body.appendChild(region);
    setTimeout(() => document.body.removeChild(region), 1000);
  }
};

export const trapFocus = (element: HTMLElement | null) => {
  if (!element) return undefined;
  const focusableElements = element.querySelectorAll<HTMLElement>(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  if (focusableElements.length === 0) return undefined;
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  return {
    first: firstElement,
    last: lastElement,
    handleKeyDown: (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  };
};

export const safeFocus = (element: HTMLElement | null): void => {
  if (element && typeof element.focus === 'function') {
    try {
      (element as HTMLElement).focus({ preventScroll: true } as FocusOptions);
    } catch (err) {
      try {
        (element as HTMLElement).focus();
      } catch (_) {
        console.warn('Could not focus element:', err);
      }
    }
  }
};
