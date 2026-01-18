/**
 * Accessible Checkbox Component
 * WCAG: Proper labels, keyboard support, focus management
 */
import React, { forwardRef } from 'react';
import { Check } from 'lucide-react';

interface CheckboxProps {
  label?: React.ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  required?: boolean;
  id?: string;
  className?: string;
  error?: string | null;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
  label,
  checked,
  onChange,
  disabled = false,
  required = false,
  id,
  className = '',
  ...props
}, ref) => {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="flex items-center">
      <div className="relative">
        <input
          ref={ref}
          id={checkboxId}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
          disabled={disabled}
          required={required}
          className={`
            sr-only
            ${className}
          `}
          aria-checked={checked}
          {...(props as any)}
        />
        <label
          htmlFor={checkboxId}
          className={`
            flex items-center justify-center w-5 h-5 border rounded transition-colors
            cursor-pointer select-none
            ${disabled 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:border-primary-400'
            }
            ${checked 
              ? 'bg-primary-600 border-primary-600' 
              : 'bg-white border-gray-300 dark:bg-gray-800 dark:border-gray-700'
            }
          `}
          aria-hidden="true"
        >
          {checked && (
            <Check className="w-3.5 h-3.5 text-white" />
          )}
        </label>
      </div>
      
      {label && (
        <label
          htmlFor={checkboxId}
          className={`ml-3 text-sm text-gray-700 dark:text-gray-300 ${disabled ? 'opacity-50' : 'cursor-pointer'}`}
        >
          {label}
          {required && (
            <span className="text-red-500 ml-1" aria-hidden="true">*</span>
          )}
        </label>
      )}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
