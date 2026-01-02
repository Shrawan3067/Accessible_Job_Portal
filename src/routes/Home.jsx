import React, { useState, useEffect } from 'react';
import { Filter, X } from 'lucide-react';
import JobList from '../components/Job/JobList';
import JobFilters from '../components/Job/JobFilters';
import JobSearch from '../components/Job/JobSearch';
import { useJobs } from '../context/JobsContext';
import useDebounce from '../hooks/useDebounce';  // <-- DEFAULT IMPORT

const Home = () => {
  const { filteredJobs, filters, updateFilters } = useJobs();
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebounce(searchQuery, 500);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Update search when debounced value changes
  useEffect(() => {
    updateFilters({ searchQuery: debouncedSearch });
  }, [debouncedSearch, updateFilters]);

  return (
    <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Find Your Dream Job
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Discover {filteredJobs.length} opportunities from top companies
        </p>
      </div>

      {/* Live announcement for screen readers */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {filteredJobs.length} jobs found
      </div>

      {/* Search */}
      <div className="mb-6">
        <JobSearch
          value={searchQuery}
          onChange={setSearchQuery}
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Desktop filters */}
        <div className="hidden lg:block">
          <JobFilters
            filters={filters}
            onFilterChange={updateFilters}
            totalJobs={filteredJobs.length}
          />
        </div>

        {/* Mobile filters button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileFiltersOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 
                     rounded-lg border border-gray-300 dark:border-gray-700"
            aria-label="Open filters"
            aria-expanded={isMobileFiltersOpen}
          >
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </button>
        </div>

        {/* Job listings */}
        <div className="flex-1">
          <JobList jobs={filteredJobs} />
        </div>
      </div>

      {/* Mobile filters modal */}
      {isMobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="absolute inset-0 bg-black/50" 
            onClick={() => setIsMobileFiltersOpen(false)}
            aria-hidden="true"
          />
          
          <div className="absolute inset-y-0 right-0 w-full max-w-sm bg-white dark:bg-gray-900 
                        shadow-xl overflow-y-auto">
            <div className="p-4 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button
                  onClick={() => setIsMobileFiltersOpen(false)}
                  aria-label="Close filters"
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-4">
              <JobFilters
                filters={filters}
                onFilterChange={updateFilters}
                totalJobs={filteredJobs.length}
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;