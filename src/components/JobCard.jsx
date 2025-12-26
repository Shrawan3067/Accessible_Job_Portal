import React, { useState } from 'react';

const JobCard = ({ job, index, onApply }) => {
  const [expanded, setExpanded] = useState(false);

  const getTypeColor = (type) => {
    switch(type) {
      case 'full-time': return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
      case 'part-time': return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200';
      case 'contract': return 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200';
      case 'internship': return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200';
      default: return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300';
    }
  };

  const getExperienceColor = (exp) => {
    switch(exp) {
      case 'entry': return 'text-green-600 dark:text-green-400';
      case 'mid': return 'text-yellow-600 dark:text-yellow-400';
      case 'senior': return 'text-red-600 dark:text-red-400';
      case 'lead': return 'text-purple-600 dark:text-purple-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setExpanded(!expanded);
    }
  };

  return (
    <article
      role="article"
      aria-labelledby={`job-title-${job.id}`}
      aria-describedby={`job-description-${job.id}`}
      tabIndex={0}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        expanded ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''
      }`}
      onKeyDown={(e) => {
        if (e.key === 'Escape' && expanded) {
          setExpanded(false);
        }
      }}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center space-x-4">
            <div 
              className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl"
              aria-hidden="true"
            >
              {job.company.charAt(0)}
            </div>
            <div>
              <h3 
                id={`job-title-${job.id}`}
                className="text-lg font-semibold text-gray-800 dark:text-white transition-colors duration-200"
              >
                {job.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 transition-colors duration-200">{job.company}</p>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${getTypeColor(job.type)}`}>
            {job.type.replace('-', ' ')}
          </span>
        </div>

        {/* Job Details */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className={`font-medium transition-colors duration-200 ${getExperienceColor(job.experience)}`}>
              {job.experience.charAt(0).toUpperCase() + job.experience.slice(1)} Level
            </span>
            <span className="text-gray-600 dark:text-gray-400 transition-colors duration-200">•</span>
            <span className="text-gray-600 dark:text-gray-400 flex items-center transition-colors duration-200">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {job.remote ? 'Remote' : job.location}
            </span>
            <span className="text-gray-600 dark:text-gray-400 transition-colors duration-200">•</span>
            <span className="text-gray-600 dark:text-gray-400 transition-colors duration-200">
              ${job.salary.min.toLocaleString()} - ${job.salary.max.toLocaleString()}
            </span>
          </div>

          <p 
            id={`job-description-${job.id}`}
            className={`text-gray-600 dark:text-gray-400 transition-colors duration-200 ${expanded ? '' : 'line-clamp-2'}`}
          >
            {job.description}
          </p>
        </div>

        {/* Tags */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {job.tags.map((tag, i) => (
              <span 
                key={i}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => setExpanded(!expanded)}
            onKeyDown={handleKeyDown}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-1 transition-colors duration-200"
            aria-expanded={expanded}
            aria-controls={`job-details-${job.id}`}
          >
            {expanded ? 'Show Less' : 'Show More'}
          </button>
          
          <button
            onClick={() => onApply(job.id)}
            className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors duration-200"
            aria-label={`Apply for ${job.title} at ${job.company}`}
          >
            Apply Now
          </button>
        </div>

        {/* Expanded Details */}
        {expanded && (
          <div 
            id={`job-details-${job.id}`}
            className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 transition-colors duration-200"
          >
            <h4 className="font-medium text-gray-800 dark:text-white mb-2 transition-colors duration-200">Requirements:</h4>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 mb-4 transition-colors duration-200">
              {job.requirements.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
            
            <h4 className="font-medium text-gray-800 dark:text-white mb-2 transition-colors duration-200">Benefits:</h4>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 transition-colors duration-200">
              {job.benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
            
            <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 transition-colors duration-200">
              Posted {job.postedDate}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default JobCard;