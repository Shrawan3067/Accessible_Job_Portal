import { useState, useMemo, useCallback } from 'react';

export const useJobFilters = (initialJobs) => {
  const [filters, setFilters] = useState({
    search: '',
    type: 'all',
    location: 'all',
    experience: 'all',
    remote: false,
    salaryRange: [0, 300000]
  });

  const filterJobs = useCallback((jobs) => {
    return jobs.filter(job => {
      // Search filter
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        const matchesSearch = 
          job.title.toLowerCase().includes(searchTerm) ||
          job.company.toLowerCase().includes(searchTerm) ||
          job.description.toLowerCase().includes(searchTerm) ||
          job.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        if (!matchesSearch) return false;
      }

      // Job type filter
      if (filters.type !== 'all' && job.type !== filters.type) {
        return false;
      }

      // Location filter
      if (filters.location !== 'all') {
        if (filters.location === 'remote' && !job.remote) {
          return false;
        }
        if (filters.location !== 'remote' && job.location !== filters.location) {
          return false;
        }
      }

      // Experience filter
      if (filters.experience !== 'all' && job.experience !== filters.experience) {
        return false;
      }

      // Remote filter
      if (filters.remote && !job.remote) {
        return false;
      }

      // Salary filter
      const avgSalary = (job.salary.min + job.salary.max) / 2;
      if (avgSalary < filters.salaryRange[0] || avgSalary > filters.salaryRange[1]) {
        return false;
      }

      return true;
    });
  }, [filters]);

  const filteredJobs = useMemo(() => {
    return filterJobs(initialJobs);
  }, [initialJobs, filterJobs]);

  const updateFilters = useCallback((newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters({
      search: '',
      type: 'all',
      location: 'all',
      experience: 'all',
      remote: false,
      salaryRange: [0, 300000]
    });
  }, []);

  const filterStats = useMemo(() => {
    const types = {};
    const locations = {};
    const experiences = {};
    
    initialJobs.forEach(job => {
      types[job.type] = (types[job.type] || 0) + 1;
      locations[job.location] = (locations[job.location] || 0) + 1;
      experiences[job.experience] = (experiences[job.experience] || 0) + 1;
    });

    return { types, locations, experiences };
  }, [initialJobs]);

  return {
    filters,
    filteredJobs,
    updateFilters,
    clearFilters,
    filterStats
  };
};