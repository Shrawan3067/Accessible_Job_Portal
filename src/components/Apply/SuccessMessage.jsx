/**
 * Accessible Success Message Component
 * WCAG: Proper ARIA roles, focus management after submission
 */
import React, { useEffect, useRef } from 'react';
import { CheckCircle, Mail, Clock, FileText } from 'lucide-react';
import Button from '../UI/Button';

const SuccessMessage = ({ jobTitle, companyName, onClose }) => {
  const headingRef = useRef(null);

  useEffect(() => {
    // Focus heading for screen readers
    headingRef.current?.focus();
  }, []);

  return (
    <div 
      className="text-center"
      role="alert"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 mb-6">
        <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" aria-hidden="true" />
      </div>

      <h3 
        ref={headingRef}
        tabIndex="-1"
        className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
      >
        Application Submitted!
      </h3>
      
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Your application for <span className="font-semibold">{jobTitle}</span> at{' '}
        <span className="font-semibold">{companyName}</span> has been successfully submitted.
      </p>

      {/* Next Steps */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8 text-left">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
          <FileText className="w-5 h-5 mr-2" aria-hidden="true" />
          What happens next?
        </h4>
        
        <ul className="space-y-4">
          <li className="flex items-start">
            <Mail className="w-5 h-5 text-gray-400 mr-3 mt-0.5" aria-hidden="true" />
            <div>
              <span className="font-medium text-gray-900 dark:text-white">
                Confirmation Email
              </span>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                You'll receive a confirmation email within the next few minutes.
              </p>
            </div>
          </li>
          
          <li className="flex items-start">
            <Clock className="w-5 h-5 text-gray-400 mr-3 mt-0.5" aria-hidden="true" />
            <div>
              <span className="font-medium text-gray-900 dark:text-white">
                Review Process
              </span>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                The hiring team will review your application and get back to you within 5-7 business days.
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* Application ID (simulated) */}
      <div className="mb-8">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          Your application reference:
        </p>
        <code className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg font-mono text-sm">
          APP-{Math.random().toString(36).substr(2, 8).toUpperCase()}
        </code>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          variant="primary"
          onClick={onClose}
          className="flex-1"
        >
          Done
        </Button>
        
        <Button
          variant="outline"
          onClick={() => {
            // In a real app, this would navigate to applications page
            console.log('View applications clicked');
            onClose();
          }}
          className="flex-1"
        >
          View My Applications
        </Button>
      </div>

      {/* Accessibility note */}
      <p className="sr-only">
        Application submitted successfully. Press Tab to navigate to the done button.
      </p>
    </div>
  );
};

export default SuccessMessage;