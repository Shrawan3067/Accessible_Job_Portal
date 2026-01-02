/**
 * JobCard Component
 * Accessibility: Fully keyboard accessible, screen reader friendly,
 * with proper ARIA labels and semantic markup
 */
import React from 'react';
import { 
  MapPin, 
  Briefcase, 
  DollarSign, 
  Clock, 
  ExternalLink,
  Building
} from 'lucide-react';
import { formatDistanceToNow } from '../../utils/formatters';

const JobCard = ({ job, onSave, isSaved = false }) => {
  const {
    id,
    title,
    company,
    location,
    type,
    salary,
    postedDate,
    experience,
    isRemote,
    skills = []
  } = job;

  // Handle save button click
  const handleSaveClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onSave?.(id);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      // Navigate to job details
      window.location.href = `/jobs/${id}`;
    }
  };

  return (
    <article
      className="card p-6 hover:shadow-xl transition-all duration-200 
                 focus-within:ring-2 focus-within:ring-primary-500"
      aria-labelledby={`job-title-${id}`}
      tabIndex="0"
      onKeyDown={handleKeyDown}
      role="article"
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        {/* Job Info */}
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 
                id={`job-title-${id}`}
                className="text-lg font-semibold text-gray-900 dark:text-white mb-2"
              >
                <a
                  href={`/jobs/${id}`}
                  className="hover:text-primary-600 dark:hover:text-primary-400 
                           focus:outline-none focus:text-primary-600 inline-block"
                  aria-label={`View details for ${title} at ${company.name}`}
                >
                  {title}
                </a>
              </h3>
              
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mb-3">
                <Building className="w-4 h-4" aria-hidden="true" />
                <span className="font-medium">{company.name}</span>
                <span aria-hidden="true">•</span>
                <span className="text-sm">{company.industry}</span>
              </div>
            </div>

            {/* Save button - Accessible */}
            <button
              onClick={handleSaveClick}
              onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                  e.stopPropagation();
                }
              }}
              aria-label={isSaved ? `Remove ${title} from saved jobs` : `Save ${title}`}
              aria-pressed={isSaved}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 
                       focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <svg
                className={`w-5 h-5 ${isSaved ? 'fill-current text-yellow-500' : 'text-gray-400'}`}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </button>
          </div>

          {/* Job Metadata - Accessible list */}
          <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex flex-wrap gap-2" role="list">
              <div className="inline-flex items-center gap-1" role="listitem">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                <span>
                  {location.city}, {location.country}
                  {isRemote && (
                    <span className="ml-1 text-primary-600 dark:text-primary-400">
                      • Remote
                    </span>
                  )}
                </span>
              </div>
              
              <div className="inline-flex items-center gap-1" role="listitem">
                <Briefcase className="w-4 h-4" aria-hidden="true" />
                <span>{type}</span>
              </div>
              
              <div className="inline-flex items-center gap-1" role="listitem">
                <DollarSign className="w-4 h-4" aria-hidden="true" />
                <span>
                  ${salary.min.toLocaleString()} - ${salary.max.toLocaleString()}
                  <span className="text-xs"> {salary.currency}/{salary.period}</span>
                </span>
              </div>
              
              <div className="inline-flex items-center gap-1" role="listitem">
                <Clock className="w-4 h-4" aria-hidden="true" />
                <span>{formatDistanceToNow(postedDate)}</span>
              </div>
            </div>

            {/* Experience level */}
            <div className="mt-2">
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800">
                {experience} level
              </span>
            </div>

            {/* Skills tags */}
            {skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3" role="list" aria-label="Required skills">
                {skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs rounded-full bg-primary-50 text-primary-700 
                             dark:bg-primary-900/30 dark:text-primary-300"
                    role="listitem"
                  >
                    {skill}
                  </span>
                ))}
                {skills.length > 3 && (
                  <span className="text-xs text-gray-500">
                    +{skills.length - 3} more
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row md:flex-col gap-2">
          <a
            href={`/jobs/${id}`}
            className="btn-secondary inline-flex items-center justify-center gap-2"
            aria-label={`View details and apply for ${title}`}
          >
            <span>View Details</span>
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
          
          <a
            href={`/jobs/${id}#apply`}
            className="btn-primary text-center"
            aria-label={`Quick apply for ${title} at ${company.name}`}
          >
            Quick Apply
          </a>
        </div>
      </div>
    </article>
  );
};

export default React.memo(JobCard);