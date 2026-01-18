/**
 * Accessible Apply Modal Component
 * WCAG: Focus trap, proper ARIA labels, keyboard navigation
 */
import React, { useState } from 'react';
import Modal from '../UI/Modal';
import JobApplicationForm from './JobApplicationForm';
import SuccessMessage from './SuccessMessage';
import { useJobs } from '../../context/JobsContext';

interface ApplyModalProps {
  job: any;
  isOpen: boolean;
  onClose: () => void;
}

const ApplyModal: React.FC<ApplyModalProps> = ({ job, isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (formData: any) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={isSubmitted ? 'Application Submitted' : `Apply for ${job?.title}`}
      size="lg"
      ariaLabel={isSubmitted ? 'Application success message' : 'Job application form'}
    >
      {isSubmitted ? (
        <SuccessMessage
          jobTitle={job?.title}
          companyName={job?.company.name}
          onClose={handleClose}
        />
      ) : (
        <JobApplicationForm
          job={job}
          onSubmit={handleSubmit}
          onCancel={handleClose}
          isSubmitting={isSubmitting}
        />
      )}
    </Modal>
  );
};

export default ApplyModal;
