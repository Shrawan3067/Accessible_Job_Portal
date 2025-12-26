import React, { useState } from 'react';

const SearchFilters = ({ filters, onFilterChange, darkMode }) => {
  const [expanded, setExpanded] = useState(false);

  const jobTypes = [
    { value: 'all', label: 'All Types' },
    { value: 'full-time', label: 'Full Time' },
    { value: 'part-time', label: 'Part Time' },
    { value: 'contract', label: 'Contract' },
    { value: 'internship', label: 'Internship' }
  ];

  const locations = [
    { value: 'all', label: 'All Locations' },
    { value: 'remote', label: 'Remote' },
    { value: 'new-york', label: 'New York' },
    { value: 'san-francisco', label: 'San Francisco' },
    { value: 'london', label: 'London' },
    { value: 'berlin', label: 'Berlin' },
    { value: 'toronto', label: 'Toronto' }
  ];

  const experienceLevels = [
    { value: 'all', label: 'All Levels' },
    { value: 'entry', label: 'Entry Level' },
    { value: 'mid', label: 'Mid Level' },
    { value: 'senior', label: 'Senior Level' },
    { value: 'lead', label: 'Lead/Manager' }
  ];

  const handleSearchChange = (e) => {
    onFilterChange({ search: e.target.value });
  };

  const handleTypeChange = (e) => {
    onFilterChange({ type: e.target.value });
  };

  const handleLocationChange = (e) => {
    onFilterChange({ location: e.target.value });
  };

  const handleExperienceChange = (e) => {
    onFilterChange({ experience: e.target.value });
  };

  const handleRemoteChange = (e) => {
    onFilterChange({ remote: e.target.checked });
  };

  const clearFilters = () => {
    onFilterChange({
      search: '',
      type: 'all',
      location: 'all',
      experience: 'all',
      remote: false
    });
  };

  return (
    <section 
      className="mb-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-200"
      aria-labelledby="filters-heading"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 
          id="filters-heading" 
          className="text-xl font-semibold text-gray-800 dark:text-white transition-colors duration-200"
        >
          Search & Filter Jobs
        </h2>
        <button
          onClick={() => setExpanded(!expanded)}
          className="sm:hidden text-blue-600 dark:text-blue-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-1 transition-colors duration-200"
          aria-expanded={expanded}
          aria-controls="filter-controls"
        >
          {expanded ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>

      <div id="filter-controls" className={expanded ? 'block' : 'hidden sm:block'}>
        {/* Search Input */}
        <div className="mb-6" role="search">
          <label htmlFor="job-search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-200">
            Search jobs
          </label>
          <div className="relative">
            <input
              id="job-search"
              type="text"
              value={filters.search}
              onChange={handleSearchChange}
              placeholder="Search by job title, company, or keywords..."
              className="w-full px-4 py-3 pl-12 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200 dark:text-white dark:placeholder-gray-400"
              aria-describedby="search-description"
            />
            <div className="absolute left-4 top-3.5 text-gray-400 dark:text-gray-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <p id="search-description" className="mt-1 text-sm text-gray-500 dark:text-gray-400 transition-colors duration-200">
            Press Enter to search, or type to filter results
          </p>
        </div>

        {/* Filter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Job Type Filter */}
          <div>
            <label htmlFor="job-type" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-200">
              Job Type
            </label>
            <select
              id="job-type"
              value={filters.type}
              onChange={handleTypeChange}
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200 dark:text-white"
            >
              {jobTypes.map(type => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          {/* Location Filter */}
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-200">
              Location
            </label>
            <select
              id="location"
              value={filters.location}
              onChange={handleLocationChange}
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200 dark:text-white"
            >
              {locations.map(location => (
                <option key={location.value} value={location.value}>
                  {location.label}
                </option>
              ))}
            </select>
          </div>

          {/* Experience Filter */}
          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-200">
              Experience Level
            </label>
            <select
              id="experience"
              value={filters.experience}
              onChange={handleExperienceChange}
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200 dark:text-white"
            >
              {experienceLevels.map(level => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </select>
          </div>

          {/* Remote Only Toggle */}
          <div className="flex items-end">
            <div className="flex items-center h-12">
              <input
                id="remote-only"
                type="checkbox"
                checked={filters.remote}
                onChange={handleRemoteChange}
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="remote-only" className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-200">
                Remote Only
              </label>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700 transition-colors duration-200">
          <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-200">
            Use <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs transition-colors duration-200">Tab</kbd> to navigate filters
          </div>
          <div className="flex space-x-3">
            <button
              onClick={clearFilters}
              className="px-6 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-200"
            >
              Clear Filters
            </button>
            <button
              onClick={() => {
                document.querySelector('[role="article"]')?.focus();
              }}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors duration-200"
            >
              View Results
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchFilters;