/**
 * Accessible Job Application Form
 * WCAG: Proper form labels, error handling, validation
 */
import React, { useState } from 'react';
import { Upload, FileText, User, Mail, Phone } from 'lucide-react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import Checkbox from '../UI/Checkbox';

interface JobApplicationFormProps {
  job: any;
  onSubmit: (data: any) => void;
  onCancel: () => void;
  isSubmitting?: boolean;
}

const JobApplicationForm: React.FC<JobApplicationFormProps> = ({ job, onSubmit, onCancel, isSubmitting }) => {
  const [formData, setFormData] = useState<any>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: '',
    portfolioUrl: '',
    linkedinUrl: '',
    agreeToTerms: false,
    receiveUpdates: true
  });

  const [errors, setErrors] = useState<any>({});
  const [resumeName, setResumeName] = useState('');

  const validateForm = () => {
    const newErrors: any = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.resume) {
      newErrors.resume = 'Resume is required';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        setErrors((prev: any) => ({
          ...prev,
          resume: 'Please upload a PDF or Word document'
        }));
        return;
      }

      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev: any) => ({
          ...prev,
          resume: 'File size must be less than 5MB'
        }));
        return;
      }

      setFormData((prev: any) => ({ ...prev, resume: file }));
      setResumeName(file.name);
      setErrors((prev: any) => ({ ...prev, resume: null }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleChange = (field: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev: any) => ({ ...prev, [field]: null }));
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      aria-label="Job application form"
      noValidate
    >
      {/* Live region for form status */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {isSubmitting ? 'Submitting application...' : ''}
      </div>

      <div className="space-y-6">
        {/* Job info */}
        <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg">
          <h3 className="font-medium text-gray-900 dark:text-white mb-1">
            Applying for: {job?.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {job?.company.name} • {job?.location.city}, {job?.location.country}
          </p>
        </div>

        {/* Personal Information */}
        <fieldset className="space-y-4">
          <legend className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Personal Information
          </legend>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="First Name"
              value={formData.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
              error={errors.firstName}
              required
              icon={User}
              autoComplete="given-name"
            />
            
            <Input
              label="Last Name"
              value={formData.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
              error={errors.lastName}
              required
              autoComplete="family-name"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              error={errors.email}
              required
              icon={Mail}
              autoComplete="email"
            />
            
            <Input
              label="Phone Number"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              error={errors.phone}
              required
              icon={Phone}
              autoComplete="tel"
            />
          </div>
        </fieldset>

        {/* Resume Upload */}
        <fieldset className="space-y-4">
          <legend className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Resume & Documents
          </legend>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Resume *
            </label>
            
            <div className="mt-1">
              <label
                htmlFor="resume-upload"
                className={`
                  relative cursor-pointer
                  bg-white dark:bg-gray-800
                  rounded-lg border-2 border-dashed
                  px-6 pt-5 pb-6
                  flex flex-col items-center justify-center
                  transition-colors
                  ${errors.resume 
                    ? 'border-red-300 dark:border-red-500' 
                    : 'border-gray-300 dark:border-gray-700 hover:border-primary-400'
                  }
                `}
              >
                <Upload className="mx-auto h-12 w-12 text-gray-400" aria-hidden="true" />
                
                <div className="mt-4 text-center">
                  <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                    Upload a file
                  </span>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    PDF, DOC, DOCX up to 5MB
                  </p>
                </div>
                
                <input
                  id="resume-upload"
                  name="resume"
                  type="file"
                  className="sr-only"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  aria-describedby="resume-description"
                />
              </label>
              
              {resumeName && (
                <div className="mt-2 flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <FileText className="w-4 h-4" />
                  <span>{resumeName}</span>
                </div>
              )}
              
              {errors.resume && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                  {errors.resume}
                </p>
              )}
            </div>
            
            <p id="resume-description" className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              Your resume helps us understand your experience and qualifications
            </p>
          </div>

          {/* Cover Letter */}
          <div>
            <label 
              htmlFor="cover-letter"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Cover Letter (Optional)
            </label>
            <textarea
              id="cover-letter"
              rows={4}
              value={formData.coverLetter}
              onChange={(e) => handleChange('coverLetter', e.target.value)}
              className="
                w-full px-3 py-2 border border-gray-300 rounded-lg
                focus:ring-2 focus:ring-primary-500 focus:border-transparent
                dark:bg-gray-800 dark:text-white dark:border-gray-700
                resize-none
              "
              placeholder="Tell us why you're interested in this position..."
              aria-describedby="cover-letter-description"
            />
            <p id="cover-letter-description" className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              Optional. Briefly explain why you're a good fit for this role
            </p>
          </div>
        </fieldset>

        {/* Links */}
        <fieldset className="space-y-4">
          <legend className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Additional Links (Optional)
          </legend>
          
          <Input
            label="Portfolio URL"
            type="url"
            value={formData.portfolioUrl}
            onChange={(e) => handleChange('portfolioUrl', e.target.value)}
            placeholder="https://yourportfolio.com"
            aria-describedby="portfolio-description"
          />
          
          <Input
            label="LinkedIn Profile"
            type="url"
            value={formData.linkedinUrl}
            onChange={(e) => handleChange('linkedinUrl', e.target.value)}
            placeholder="https://linkedin.com/in/yourprofile"
            aria-describedby="linkedin-description"
          />
        </fieldset>

        {/* Terms and Conditions */}
        <fieldset className="space-y-4">
          <legend className="sr-only">Terms and conditions</legend>
          
          <Checkbox
            label="I agree to the terms and conditions"
            checked={formData.agreeToTerms}
            onChange={(checked) => handleChange('agreeToTerms', checked)}
            error={errors.agreeToTerms}
            required
            aria-describedby="terms-description"
          />
          
          <Checkbox
            label="I'd like to receive updates about my application"
            checked={formData.receiveUpdates}
            onChange={(checked) => handleChange('receiveUpdates', checked)}
            aria-describedby="updates-description"
          />
          
          <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
            <p id="terms-description">
              By submitting this application, you agree to our{' '}
              <a href="/privacy" className="text-primary-600 dark:text-primary-400 hover:underline">
                Privacy Policy
              </a>{' '}
              and consent to having your data processed.
            </p>
            <p id="updates-description">
              We'll notify you about your application status and may contact you 
              about other relevant opportunities.
            </p>
          </div>
        </fieldset>

        {/* Form Actions */}
        <div className="flex flex-col-reverse sm:flex-row gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            disabled={isSubmitting}
            className="sm:flex-1"
          >
            Cancel
          </Button>
          
          <Button
            type="submit"
            variant="primary"
            loading={isSubmitting}
            disabled={isSubmitting}
            className="sm:flex-1"
            aria-label={isSubmitting ? 'Submitting application...' : 'Submit application'}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default JobApplicationForm;
