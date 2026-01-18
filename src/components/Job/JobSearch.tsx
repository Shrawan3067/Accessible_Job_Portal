/**
 * Accessible Search Component with Debouncing
 * WCAG: Proper labels, live announcements
 */
import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import useDebounce from '../../hooks/useDebounce';  // Import as default

interface JobSearchProps {
  value: string;
  onChange: (value: string) => void;
  onSearch?: (value: string) => void;
  placeholder?: string;
}

const JobSearch: React.FC<JobSearchProps> = ({ 
  value, 
  onChange, 
  onSearch,
  placeholder = 'Search for jobs, companies, or skills...' 
}) => {
  const [inputValue, setInputValue] = useState(value);
  const debouncedValue = useDebounce(inputValue, 500);  // Use as default import

  useEffect(() => {
    if (debouncedValue !== value) {
      onChange(debouncedValue);
    }
  }, [debouncedValue, onChange, value]);

  const handleClear = () => {
    setInputValue('');
    onChange('');
    // Focus search input after clear
    document.getElementById('job-search-input')?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(inputValue);
  };

  return (
    <form 
      onSubmit={handleSubmit}
      role="search"
      aria-label="Search jobs"
      className="w-full"
    >
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        
        <input
          id="job-search-input"
          type="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={placeholder}
          aria-label="Search job listings"
          className="
            block w-full pl-10 pr-10 py-3
            border border-gray-300 rounded-lg
            bg-white dark:bg-gray-800
            text-gray-900 dark:text-white
            placeholder-gray-500 dark:placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-primary-500
            focus:border-transparent
            dark:border-gray-700
          "
          aria-describedby="search-instructions"
        />
        
        {inputValue && (
          <button
            type="button"
            onClick={handleClear}
            aria-label="Clear search"
            className="
              absolute inset-y-0 right-0 pr-3
              flex items-center
              text-gray-400 hover:text-gray-600
              dark:hover:text-gray-300
              focus:outline-none focus:text-gray-600
            "
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        )}
      </div>
      
      <div id="search-instructions" className="sr-only">
        Type to search for jobs. Results will update as you type.
      </div>
      
      {/* Live region for search results */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {inputValue && `Searching for ${inputValue}`}
      </div>
    </form>
  );
};

export default JobSearch;
