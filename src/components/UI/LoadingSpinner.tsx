/**
 * Accessible Loading Spinner Component
 * WCAG: Proper ARIA labels for loading states
 */
import React from 'react';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  label?: string;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'medium', 
  label = 'Loading...',
  className = '' 
}) => {
  const sizes = {
    small: 'w-4 h-4 border-2',
    medium: 'w-8 h-8 border-3',
    large: 'w-12 h-12 border-4'
  } as const;

  return (
    <div 
      className={`inline-flex items-center justify-center ${className}`}
      role="status"
      aria-live="polite"
    >
      <div
        className={`
          ${sizes[size]}
          border-gray-200 border-t-primary-600
          dark:border-gray-800 dark:border-t-primary-400
          rounded-full animate-spin
        `}
        aria-hidden="true"
      />
      <span className="sr-only">{label}</span>
    </div>
  );
};

export default LoadingSpinner;
