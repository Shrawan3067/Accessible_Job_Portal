/**
 * Skeleton Loading Card
 * Accessibility: Provides loading indicators that work with screen readers
 */
import React from 'react';

const SkeletonJobCard = () => {
  return (
    <div 
      className="card p-6"
      role="status"
      aria-label="Loading job information"
    >
      <div className="animate-pulse">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          {/* Job Info Skeleton */}
          <div className="flex-1 space-y-4">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
              </div>
              <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
            </div>
            
            {/* Metadata Skeleton */}
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-20"
                  ></div>
                ))}
              </div>
              
              {/* Experience Skeleton */}
              <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
              
              {/* Skills Skeleton */}
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16"
                  ></div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Action Buttons Skeleton */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-2">
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
          </div>
        </div>
      </div>
      
      <span className="sr-only">Loading job card...</span>
    </div>
  );
};

export default React.memo(SkeletonJobCard);