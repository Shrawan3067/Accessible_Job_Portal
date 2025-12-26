// components/JobListings.jsx
import React from 'react';
import JobCard from './JobCard';

const JobListings = ({ jobs, onApply, darkMode }) => {
  return (
    <section aria-labelledby="job-listings-heading">
      <div className="flex justify-between items-center mb-6">
        <h2 
          id="job-listings-heading" 
          className="text-2xl font-bold text-gray-800 dark:text-white"
        >
          Available Positions
        </h2>
        <div 
          className="text-sm text-gray-600 dark:text-gray-400"
          role="status"
          aria-live="polite"
        >
          Showing <span className="font-semibold">{jobs.length}</span> job{jobs.length !== 1 ? 's' : ''}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job, index) => (
          <JobCard
            key={job.id}
            job={job}
            index={index}
            onApply={onApply}
            darkMode={darkMode}
          />
        ))}
      </div>

      {/* Screen reader announcements */}
      <div 
        className="sr-only" 
        aria-live="polite" 
        aria-atomic="true"
      >
        {jobs.length} jobs found
      </div>
    </section>
  );
};

export default JobListings;