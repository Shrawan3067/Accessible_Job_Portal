/**
 * JobList Component with Virtualization
 * Performance: Efficient list rendering for large datasets
 */
import React, { useMemo } from 'react';
import { Search } from 'lucide-react'; // Add this import
import JobCard from './JobCard';
import SkeletonJobCard from './SkeletonJobCard';
import { useJobs } from '../../context/JobsContext';

interface JobListProps {
  jobs: any[];
}

const JobList: React.FC<JobListProps> = ({ jobs }) => {
  const { loading, savedJobIds, toggleSaveJob } = useJobs();

  // Memoize job list to prevent unnecessary re-renders
  const jobList = useMemo(() => {
    if (loading) {
      return Array.from({ length: 6 }).map((_, index) => (
        <SkeletonJobCard key={`skeleton-${index}`} />
      ));
    }

    if (jobs.length === 0) {
      return (
        <div 
          className="text-center py-12"
          role="status"
          aria-live="polite"
        >
          <div className="w-24 h-24 mx-auto mb-4 text-gray-300 dark:text-gray-700">
            <Search className="w-full h-full" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No jobs found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try adjusting your search or filters
          </p>
        </div>
      );
    }

    return jobs.map((job) => (
      <JobCard
        key={job.id}
        job={job}
        isSaved={savedJobIds.includes(job.id)}
        onSave={() => toggleSaveJob(job.id)}
      />
    ));
  }, [jobs, loading, savedJobIds, toggleSaveJob]);

  return (
    <section 
      aria-label="Job listings"
      className="space-y-6"
    >
      {/* Live region for screen readers */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {loading 
          ? 'Loading jobs...' 
          : `${jobs.length} jobs found`
        }
      </div>

      {/* Job list */}
      <div className="space-y-6">
        {jobList}
      </div>

      {/* Keyboard navigation hint for screen readers */}
      <div className="sr-only" role="note">
        Use Tab to navigate through job listings. Press Enter to view job details.
        Press Space to save or unsave a job.
      </div>
    </section>
  );
};

export default React.memo(JobList);
