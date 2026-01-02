/**
 * Modal Component
 * Accessibility: WCAG compliant modal with focus trap,
 * escape key close, and proper ARIA attributes
 */
import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';
import useFocusTrap from '../../hooks/useFocusTrap';

const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  size = 'md',
  ariaLabel 
}) => {
  const modalRef = useRef(null);
  const previousFocusRef = useRef(null);

  // Initialize focus trap
  useFocusTrap(modalRef, isOpen);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Save previous focus and manage modal open/close
  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement;
      
      // Prevent background scrolling
      document.body.style.overflow = 'hidden';
      
      // Focus modal when opened
      setTimeout(() => {
        modalRef.current?.focus();
      }, 100);
    } else {
      // Restore previous focus
      previousFocusRef.current?.focus?.();
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
  };

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel || title}
      ref={modalRef}
      tabIndex="-1"
      className="fixed inset-0 z-50 overflow-y-auto"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 transition-opacity"
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Modal container */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div
          className={`relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl 
                     ${sizeClasses[size]} w-full transform transition-all`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b 
                        border-gray-200 dark:border-gray-800">
            <h2 
              id="modal-title"
              className="text-xl font-semibold text-gray-900 dark:text-white"
            >
              {title}
            </h2>
            
            {/* Close button - Accessible */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 
                       focus:outline-none focus:ring-2 focus:ring-primary-500"
              ref={(el) => {
                // Store close button ref for focus trap
                if (el) el.dataset.modalClose = 'true';
              }}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;