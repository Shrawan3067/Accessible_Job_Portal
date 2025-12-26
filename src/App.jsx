import React, { useState, useEffect } from 'react';
import JobListings from './components/JobListings';
import SearchFilters from './components/SearchFilters';
import Header from './components/Header';
import { jobsData } from './data/jobsData';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [jobs, setJobs] = useState(jobsData);
  const [filteredJobs, setFilteredJobs] = useState(jobsData);
  const [darkMode, setDarkMode] = useState(false);
  const [filters, setFilters] = useState({
    search: '',
    type: 'all',
    location: 'all',
    experience: 'all',
    remote: false
  });

  // Initialize dark mode
  useEffect(() => {
    console.log('Initializing dark mode...');
    
    // 1. Check localStorage
    const savedTheme = localStorage.getItem('theme');
    console.log('Saved theme:', savedTheme);
    
    // 2. Check system preference
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log('System prefers dark:', systemPrefersDark);
    
    // Set initial state
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      console.log('Setting dark mode to TRUE');
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      console.log('Setting dark mode to FALSE');
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
    
    // Log current HTML classes
    console.log('HTML classes:', document.documentElement.className);
  }, []);

  // Update HTML class when darkMode changes
  useEffect(() => {
    console.log('Dark mode changed to:', darkMode);
    
    if (darkMode) {
      console.log('Adding dark class to HTML');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      console.log('Removing dark class from HTML');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    
    console.log('HTML classes after change:', document.documentElement.className);
  }, [darkMode]);

  useEffect(() => {
    filterJobs();
  }, [filters, jobs]);

  const filterJobs = () => {
    let result = jobs;

    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      result = result.filter(job => 
        job.title.toLowerCase().includes(searchTerm) ||
        job.company.toLowerCase().includes(searchTerm) ||
        job.description.toLowerCase().includes(searchTerm) ||
        job.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      );
    }

    if (filters.type !== 'all') {
      result = result.filter(job => job.type === filters.type);
    }

    if (filters.location !== 'all') {
      result = result.filter(job => job.location === filters.location);
    }

    if (filters.experience !== 'all') {
      result = result.filter(job => job.experience === filters.experience);
    }

    if (filters.remote) {
      result = result.filter(job => job.remote);
    }

    setFilteredJobs(result);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const toggleDarkMode = () => {
    console.log('Toggle button clicked. Current darkMode:', darkMode);
    setDarkMode(!darkMode);
  };

  const handleApplyJob = (jobId) => {
    const job = jobs.find(j => j.id === jobId);
    console.log(`Applied to: ${job.title} at ${job.company}`);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode} 
          jobCount={filteredJobs.length}
        />
        
        <main className="container mx-auto px-4 py-8" role="main">
          <SearchFilters 
            filters={filters}
            onFilterChange={handleFilterChange}
            darkMode={darkMode}
          />
          
          <JobListings 
            jobs={filteredJobs}
            onApply={handleApplyJob}
            darkMode={darkMode}
          />
          
          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                No jobs found matching your criteria
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Try adjusting your search filters
              </p>
            </div>
          )}
        </main>
        
        <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8 mt-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <span role="img" aria-label="Accessibility">♿</span> Fully accessible job portal
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                Built with React & Tailwind CSS
              </p>
            </div>
          </div>
        </footer>
        
        <ToastContainer 
          position="bottom-right"
          theme={darkMode ? 'dark' : 'light'}
        />
      </div>
    </div>
  );
}

export default App;