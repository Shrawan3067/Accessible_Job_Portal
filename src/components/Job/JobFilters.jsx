/**
 * JobFilters Component
 * Accessibility: Accessible filter controls with ARIA labels,
 * keyboard navigation, and live announcements
 */
import React, { useState, useEffect } from 'react';
import { Filter, X } from 'lucide-react';
import { JOB_TYPES, EXPERIENCE_LEVELS, SALARY_RANGES } from '../../utils/constants';

const JobFilters = ({ filters, onFilterChange, totalJobs }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [localFilters, setLocalFilters] = useState(filters);

  // Debounce filter changes
  useEffect(() => {
    const timer = setTimeout(() => {
      onFilterChange(localFilters);
    }, 300);

    return () => clearTimeout(timer);
  }, [localFilters, onFilterChange]);

  const handleFilterChange = (filterType, value) => {
    setLocalFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(item => item !== value)
        : [...prev[filterType], value]
    }));
  };

  const clearFilters = () => {
    setLocalFilters({
      jobType: [],
      experience: [],
      salaryRange: [],
      isRemote: false
    });
  };

  const hasActiveFilters = 
    localFilters.jobType.length > 0 ||
    localFilters.experience.length > 0 ||
    localFilters.salaryRange.length > 0 ||
    localFilters.isRemote;

  return (
    <aside 
      className="lg:w-64 space-y-6"
      aria-label="Job filters"
    >
      {/* Mobile filter toggle */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          aria-controls="filter-section"
          className="flex items-center justify-between w-full p-4 bg-white dark:bg-gray-800 
                   rounded-lg border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5" />
            <span className="font-medium">Filters</span>
            {hasActiveFilters && (
              <span className="px-2 py-1 text-xs font-medium bg-primary-100 
                             dark:bg-primary-900 text-primary-700 dark:text-primary-300 
                             rounded-full">
                {Object.values(localFilters).reduce((acc, curr) => 
                  Array.isArray(curr) ? acc + curr.length : acc + (curr ? 1 : 0), 0
                )}
              </span>
            )}
          </div>
          <span className="text-sm text-gray-500">
            {isExpanded ? 'Hide' : 'Show'}
          </span>
        </button>
      </div>

      {/* Filter section - Accessible with proper ARIA */}
      <div
        id="filter-section"
        className={`${isExpanded ? 'block' : 'hidden lg:block'} space-y-6`}
        role="group"
        aria-label="Filter options"
      >
        {/* Clear filters button */}
        {hasActiveFilters && (
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Active filters
            </span>
            <button
              onClick={clearFilters}
              className="text-sm text-primary-600 dark:text-primary-400 
                       hover:text-primary-700 dark:hover:text-primary-300 
                       focus:outline-none focus:underline"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Job Type Filter */}
        <div>
          <h3 className="font-medium text-gray-900 dark:text-white mb-3">
            Job Type
          </h3>
          <div className="space-y-2" role="group" aria-label="Job type options">
            {JOB_TYPES.map(type => (
              <label
                key={type.value}
                className="flex items-center space-x-3 cursor-pointer 
                         hover:bg-gray-50 dark:hover:bg-gray-800/50 p-2 rounded-lg"
              >
                <input
                  type="checkbox"
                  checked={localFilters.jobType.includes(type.value)}
                  onChange={() => handleFilterChange('jobType', type.value)}
                  className="w-4 h-4 text-primary-600 rounded 
                           focus:ring-primary-500 focus:ring-offset-0
                           dark:focus:ring-offset-gray-900"
                  aria-label={`Filter by ${type.label} jobs`}
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {type.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Experience Level Filter */}
        <div>
          <h3 className="font-medium text-gray-900 dark:text-white mb-3">
            Experience Level
          </h3>
          <div className="space-y-2" role="group" aria-label="Experience level options">
            {EXPERIENCE_LEVELS.map(level => (
              <label
                key={level.value}
                className="flex items-center space-x-3 cursor-pointer 
                         hover:bg-gray-50 dark:hover:bg-gray-800/50 p-2 rounded-lg"
              >
                <input
                  type="checkbox"
                  checked={localFilters.experience.includes(level.value)}
                  onChange={() => handleFilterChange('experience', level.value)}
                  className="w-4 h-4 text-primary-600 rounded 
                           focus:ring-primary-500 focus:ring-offset-0
                           dark:focus:ring-offset-gray-900"
                  aria-label={`Filter by ${level.label} experience`}
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {level.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Remote Work Filter */}
        <div>
          <label className="flex items-center space-x-3 cursor-pointer 
                           hover:bg-gray-50 dark:hover:bg-gray-800/50 p-2 rounded-lg">
            <input
              type="checkbox"
              checked={localFilters.isRemote}
              onChange={() => setLocalFilters(prev => ({
                ...prev,
                isRemote: !prev.isRemote
              }))}
              className="w-4 h-4 text-primary-600 rounded 
                       focus:ring-primary-500 focus:ring-offset-0
                       dark:focus:ring-offset-gray-900"
              aria-label="Show only remote jobs"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Remote only
            </span>
          </label>
        </div>

        {/* Live results announcement for screen readers */}
        <div
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        >
          {totalJobs} jobs found with current filters
        </div>
      </div>
    </aside>
  );
};

export default JobFilters;