import React, { createContext, useContext, useMemo, useState, useCallback } from 'react';
import { mockJobs } from '../utils/mockData';
import { useLocalStorage } from '../hooks/useLocalStorage';

// Types for job data (simplified to match mockData)
export interface Company {
  name: string;
  logo?: string;
  industry?: string;
  description?: string;
}

export interface Location {
  city?: string;
  state?: string;
  country?: string;
  coordinates?: { lat: number; lng: number };
}

export interface Salary {
  min?: number;
  max?: number;
  currency?: string;
  period?: string;
}

export interface Job {
  id: string;
  title: string;
  company: Company;
  location?: Location;
  type?: string;
  experience?: string;
  salary?: Salary;
  postedDate?: string;
  description?: string;
  skills?: string[];
  isRemote?: boolean;
  [key: string]: any;
}

export interface JobsFilters {
  // Search query
  query?: string;
  // Job filter groups used by JobFilters component
  jobType: string[];
  experience: string[];
  salaryRange: string[];
  isRemote: boolean;
}

interface JobsContextValue {
  jobs: Job[];
  filteredJobs: Job[];
  loading: boolean;
  filters: JobsFilters;
  setFilters: (f: JobsFilters) => void;
  clearFilters: () => void;
  savedJobIds: string[];
  toggleSaveJob: (jobId: string) => void;
}

const JobsContext = createContext<JobsContextValue | undefined>(undefined);

export const useJobs = () => {
  const ctx = useContext(JobsContext);
  if (!ctx) throw new Error('useJobs must be used within JobsProvider');
  return ctx;
};

export const JobsProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [jobs] = useState<Job[]>(mockJobs as Job[]);
  const [filters, setFiltersState] = useState<JobsFilters>({
    query: undefined,
    jobType: [],
    experience: [],
    salaryRange: [],
    isRemote: false
  });
  const [loading] = useState(false);
  const [savedJobIds, setSavedJobIds] = useLocalStorage<string[]>('savedJobs', []);

  const setFilters = useCallback((f: Partial<JobsFilters>) => {
    setFiltersState(prev => ({ ...prev, ...f }));
  }, []);

  const clearFilters = useCallback(() => setFiltersState({
    query: undefined,
    jobType: [],
    experience: [],
    salaryRange: [],
    isRemote: false
  }), []);

  const toggleSaveJob = useCallback((jobId: string) => {
    setSavedJobIds(prev => {
      if (!prev) return [jobId];
      if (prev.includes(jobId)) return prev.filter(id => id !== jobId);
      return [...prev, jobId];
    });
  }, [setSavedJobIds]);

  const filteredJobs = useMemo(() => {
    let list = jobs.slice();


    // Full-text search
    if (filters.query) {
      const q = filters.query.toLowerCase();
      list = list.filter(j => (
        j.title?.toLowerCase().includes(q) ||
        j.company?.name?.toLowerCase().includes(q) ||
        (j.description || '').toLowerCase().includes(q)
      ));
    }

    // Job Type filter
    if (filters.jobType && filters.jobType.length > 0) {
      list = list.filter(j => filters.jobType.includes(j.type || ''));
    }

    // Experience level filter
    if (filters.experience && filters.experience.length > 0) {
      list = list.filter(j => filters.experience.includes(j.experience || ''));
    }

    // Salary range filter placeholder (mock data doesn't map directly to ranges)
    if (filters.salaryRange && filters.salaryRange.length > 0) {
      // For now, ignore salaryRange or extend in future
    }

    // Remote filter
    if (filters.isRemote) {
      list = list.filter(j => !!j.isRemote);
    }

    return list;
  }, [jobs, filters]);

  const value: JobsContextValue = {
    jobs,
    filteredJobs,
    loading,
    filters,
    setFilters,
    clearFilters,
    savedJobIds: savedJobIds || [],
    toggleSaveJob
  };

  return (
    <JobsContext.Provider value={value}>
      {children}
    </JobsContext.Provider>
  );
};
