export const announceToScreenReader = (message) => {
  // Create a live region for screen reader announcements
  const liveRegion = document.getElementById('sr-announcements') || createLiveRegion();
  liveRegion.textContent = message;
  
  // Clear message after announcement
  setTimeout(() => {
    liveRegion.textContent = '';
  }, 1000);
};

const createLiveRegion = () => {
  const liveRegion = document.createElement('div');
  liveRegion.id = 'sr-announcements';
  liveRegion.setAttribute('aria-live', 'polite');
  liveRegion.setAttribute('aria-atomic', 'true');
  liveRegion.className = 'sr-only';
  document.body.appendChild(liveRegion);
  return liveRegion;
};

export const focusFirstInteractive = (containerSelector) => {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  
  const focusableElements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  if (focusableElements.length > 0) {
    focusableElements[0].focus();
  }
};

export const trapFocus = (element) => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  if (focusableElements.length === 0) return;
  
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  
  element.addEventListener('keydown', (e) => {
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
  });
};

export const getAriaLiveAttributes = (politeness = 'polite', atomic = true) => ({
  'aria-live': politeness,
  'aria-atomic': atomic.toString(),
  role: 'status'
});