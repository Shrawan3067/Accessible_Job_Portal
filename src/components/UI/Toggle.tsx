/**
 * Accessible Toggle/Switch Component
 * WCAG: Proper ARIA roles, keyboard support
 */
import React, { forwardRef } from 'react';

interface ToggleProps {
  enabled: boolean;
  onChange: (value: boolean) => void;
  label?: React.ReactNode;
  disabled?: boolean;
  id?: string;
  className?: string;
}

const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(({ 
  enabled,
  onChange,
  label,
  disabled = false,
  id,
  className = '',
  ...props
}, ref) => {
  const toggleId = id || `toggle-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="flex items-center">
      <button
        ref={ref}
        id={toggleId}
        type="button"
        role="switch"
        aria-checked={enabled}
        disabled={disabled}
        onClick={() => onChange(!enabled)}
        className={`
          relative inline-flex h-6 w-11 items-center rounded-full
          transition-colors duration-200 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
          dark:focus:ring-offset-gray-900
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          ${enabled 
            ? 'bg-primary-600' 
            : 'bg-gray-200 dark:bg-gray-700'
          }
          ${className}
        `}
        {...props}
      >
        <span className="sr-only">{label || 'Toggle'}</span>
        <span
          className={`
            inline-block h-4 w-4 transform rounded-full bg-white
            transition-transform duration-200 ease-in-out
            ${enabled ? 'translate-x-6' : 'translate-x-1'}
          `}
          aria-hidden="true"
        />
      </button>
      
      {label && (
        <label
          htmlFor={toggleId}
          className={`ml-3 text-sm text-gray-700 dark:text-gray-300 ${disabled ? 'opacity-50' : 'cursor-pointer'}`}
        >
          {label}
        </label>
      )}
    </div>
  );
});

Toggle.displayName = 'Toggle';

export default Toggle;
