/**
 * Accessible Input Component
 * WCAG: Proper labels, error states, descriptions
 */
import React, { forwardRef } from 'react';
import { AlertCircle } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  error?: string | null;
  description?: React.ReactNode;
  icon?: any;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  description,
  required = false,
  id,
  className = '',
  type = 'text',
  ...props
}, ref) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  const errorId = error ? `${inputId}-error` : undefined;
  const descriptionId = description ? `${inputId}-description` : undefined;
  const ariaDescribedBy = [errorId, descriptionId].filter(Boolean).join(' ') || undefined;

  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
          {required && (
            <span className="text-red-500 ml-1" aria-hidden="true">*</span>
          )}
        </label>
      )}
      
      <div className="relative">
        <input
          ref={ref as any}
          id={inputId}
          type={type}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={ariaDescribedBy}
          aria-required={required}
          className={`
            w-full px-3 py-2 border rounded-lg transition-colors
            focus:ring-2 focus:ring-primary-500 focus:border-transparent
            dark:bg-gray-800 dark:text-white dark:border-gray-700
            ${error 
              ? 'border-red-300 focus:ring-red-500 dark:border-red-500' 
              : 'border-gray-300 focus:border-transparent'
            }
            ${className}
          `}
          {...props}
        />
        
        {error && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <AlertCircle 
              className="w-5 h-5 text-red-500" 
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      
      {description && (
        <p 
          id={descriptionId}
          className="text-sm text-gray-500 dark:text-gray-400"
        >
          {description}
        </p>
      )}
      
      {error && (
        <p 
          id={errorId}
          className="text-sm text-red-600 dark:text-red-400"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
