/**
 * JobsContext
 * Centralized state management for jobs data
 */
import React, { createContext, useContext, useReducer, useCallback, useMemo, useEffect, useRef } from 'react';
import { mockJobs } from '../utils/mockData';

const initialState = {
  jobs: mockJobs,
  filteredJobs: mockJobs,
  savedJobs: JSON.parse(localStorage.getItem('savedJobs')) || [],
  filters: {
    jobType: [],
    experience: [],
    salaryRange: [],
    isRemote: false,
    searchQuery: ''
  },
  loading: false
};

const JobsContext = createContext();

const jobsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FILTERS':
      return {
        ...state,
        filters: { ...state.filters, ...action.payload }
      };
    
    case 'SET_FILTERED_JOBS':
      return {
        ...state,
        filteredJobs: action.payload
      };
    
    case 'TOGGLE_SAVE_JOB':
      const jobId = action.payload;
      const isSaved = state.savedJobs.includes(jobId);
      const newSavedJobs = isSaved
        ? state.savedJobs.filter(id => id !== jobId)
        : [...state.savedJobs, jobId];
      
      localStorage.setItem('savedJobs', JSON.stringify(newSavedJobs));
      
      return {
        ...state,
        savedJobs: newSavedJobs
      };
    
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload
      };
    
    default:
      return state;
  }
};

export const JobsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(jobsReducer, initialState);
  const prevFiltersRef = useRef(state.filters);

  // Memoize applyFilters function with proper case handling
  const applyFilters = useCallback((jobs, filters) => {
    let filtered = [...jobs];

    // Search query filter
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(query) ||
        job.company.name.toLowerCase().includes(query) ||
        job.description.toLowerCase().includes(query) ||
        job.skills?.some(skill => skill.toLowerCase().includes(query))
      );
    }

    // Job type filter - Handle case sensitivity
    if (filters.jobType.length > 0) {
      filtered = filtered.filter(job => {
        // Convert job type to match filter format
        const jobTypeValue = job.type.toLowerCase().replace(' ', '-');
        return filters.jobType.includes(jobTypeValue);
      });
    }

    // Experience level filter - Handle case sensitivity
    if (filters.experience.length > 0) {
      filtered = filtered.filter(job => {
        // Convert experience to match filter format
        const experienceValue = job.experience.toLowerCase().split(' ')[0];
        return filters.experience.includes(experienceValue);
      });
    }

    // Remote filter
    if (filters.isRemote) {
      filtered = filtered.filter(job => job.isRemote);
    }

    // Salary range filter - Only if we have salary ranges defined
    if (filters.salaryRange && filters.salaryRange.length > 0) {
      filtered = filtered.filter(job => {
        const avgSalary = (job.salary.min + job.salary.max) / 2;
        return filters.salaryRange.some(range => {
          if (range === '200000+') {
            return avgSalary >= 200000;
          }
          const [min, max] = range.split('-').map(Number);
          return avgSalary >= min && avgSalary <= max;
        });
      });
    }

    return filtered;
  }, []);

  // Update filtered jobs when filters change
  useEffect(() => {
    const filtersChanged = JSON.stringify(prevFiltersRef.current) !== JSON.stringify(state.filters);
    
    if (filtersChanged) {
      dispatch({ type: 'SET_LOADING', payload: true });
      
      const timeoutId = setTimeout(() => {
        const filtered = applyFilters(state.jobs, state.filters);
        dispatch({ type: 'SET_FILTERED_JOBS', payload: filtered });
        dispatch({ type: 'SET_LOADING', payload: false });
        prevFiltersRef.current = state.filters;
      }, 300);

      return () => clearTimeout(timeoutId);
    }
  }, [state.filters, state.jobs, applyFilters]);

  const updateFilters = useCallback((newFilters) => {
    dispatch({ type: 'SET_FILTERS', payload: newFilters });
  }, []);

  const toggleSaveJob = useCallback((jobId) => {
    dispatch({ type: 'TOGGLE_SAVE_JOB', payload: jobId });
  }, []);

  const value = useMemo(() => ({
    ...state,
    updateFilters,
    toggleSaveJob
  }), [state, updateFilters, toggleSaveJob]);

  return (
    <JobsContext.Provider value={value}>
      {children}
    </JobsContext.Provider>
  );
};

export const useJobs = () => {
  const context = useContext(JobsContext);
  if (!context) {
    throw new Error('useJobs must be used within JobsProvider');
  }
  return context;
};