/**
 * Accessible Job Details Page
 * WCAG: Proper semantic structure, keyboard navigation, skip links
 */
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, 
  Briefcase, 
  DollarSign, 
  Clock, 
  Building,
  Globe,
  Users,
  Award,
  Heart,
  Share2,
  ArrowLeft,
  Check
} from 'lucide-react';
import Button from '../components/UI/Button';
import ApplyModal from '../components/Apply/ApplyModal';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import { useJobs } from '../context/JobsContext';
import { formatDistanceToNow, formatSalary } from '../utils/formatters';

const JobDetails = () => {
  const { id } = useParams();
  const { jobs, savedJobs, toggleSaveJob } = useJobs();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    // Simulate API call
    const fetchJob = async () => {
      setLoading(true);
      
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const foundJob = jobs.find(j => j.id === id);
      setJob(foundJob);
      setIsSaved(savedJobs.includes(id));
      setLoading(false);
    };

    fetchJob();
  }, [id, jobs, savedJobs]);

  const handleSaveJob = () => {
    toggleSaveJob(id);
    setIsSaved(!isSaved);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: job.title,
          text: `Check out this job: ${job.title} at ${job.company.name}`,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-center min-h-[60vh]">
          <LoadingSpinner size="large" label="Loading job details..." />
        </div>
      </main>
    );
  }

  if (!job) {
    return (
      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Job Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            The job you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/">
            <Button variant="primary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Job Listings
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <li>
              <Link 
                to="/" 
                className="hover:text-primary-600 dark:hover:text-primary-400 focus:text-primary-600 dark:focus:text-primary-400 focus:outline-none"
              >
                Home
              </Link>
            </li>
            <li>
              <span aria-hidden="true">/</span>
            </li>
            <li>
              <Link 
                to="/jobs" 
                className="hover:text-primary-600 dark:hover:text-primary-400 focus:text-primary-600 dark:focus:text-primary-400 focus:outline-none"
              >
                Jobs
              </Link>
            </li>
            <li>
              <span aria-hidden="true">/</span>
            </li>
            <li className="font-medium text-gray-900 dark:text-white" aria-current="page">
              {job.title}
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job header */}
            <header className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {job.title}
                  </h1>
                  
                  <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <Building className="w-5 h-5 mr-2" aria-hidden="true" />
                      <span className="font-medium">{job.company.name}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2" aria-hidden="true" />
                      <span>
                        {job.location.city}, {job.location.country}
                        {job.isRemote && (
                          <span className="ml-1 text-primary-600 dark:text-primary-400">
                            • Remote
                          </span>
                        )}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleSaveJob}
                    aria-label={isSaved ? `Remove ${job.title} from saved jobs` : `Save ${job.title}`}
                    aria-pressed={isSaved}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 
                             focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <Heart 
                      className={`w-5 h-5 ${isSaved ? 'fill-current text-red-500' : 'text-gray-400'}`}
                      aria-hidden="true"
                    />
                  </button>
                  
                  <button
                    onClick={handleShare}
                    aria-label="Share this job"
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 
                             focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <Share2 className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Job metadata */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <Briefcase className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Job Type</p>
                    <p className="font-medium">{job.type}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Salary</p>
                    <p className="font-medium">
                      {formatSalary(job.salary.min, job.salary.max, job.salary.currency, job.salary.period)}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Experience</p>
                    <p className="font-medium">{job.experience} level</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Posted</p>
                    <p className="font-medium">{formatDistanceToNow(job.postedDate)}</p>
                  </div>
                </div>
              </div>
            </header>

            {/* Job description */}
            <section aria-labelledby="job-description-heading" className="space-y-6">
              <h2 id="job-description-heading" className="text-2xl font-bold text-gray-900 dark:text-white">
                Job Description
              </h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300">
                  {job.description}
                </p>
              </div>
            </section>

            {/* Responsibilities */}
            <section aria-labelledby="responsibilities-heading" className="space-y-4">
              <h2 id="responsibilities-heading" className="text-2xl font-bold text-gray-900 dark:text-white">
                Responsibilities
              </h2>
              
              <ul className="space-y-2">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-700 dark:text-gray-300">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Requirements */}
            <section aria-labelledby="requirements-heading" className="space-y-4">
              <h2 id="requirements-heading" className="text-2xl font-bold text-gray-900 dark:text-white">
                Requirements
              </h2>
              
              <ul className="space-y-2">
                {job.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-700 dark:text-gray-300">{requirement}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Skills */}
            <section aria-labelledby="skills-heading" className="space-y-4">
              <h2 id="skills-heading" className="text-2xl font-bold text-gray-900 dark:text-white">
                Skills
              </h2>
              
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Benefits */}
            {job.benefits && job.benefits.length > 0 && (
              <section aria-labelledby="benefits-heading" className="space-y-4">
                <h2 id="benefits-heading" className="text-2xl font-bold text-gray-900 dark:text-white">
                  Benefits
                </h2>
                
                <ul className="space-y-2">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            {/* Company info */}
            <div className="card p-6 space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                About {job.company.name}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400">
                {job.company.description}
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Globe className="w-5 h-5 mr-3" aria-hidden="true" />
                  <span className="text-sm">Industry: {job.company.industry}</span>
                </div>
                
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Users className="w-5 h-5 mr-3" aria-hidden="true" />
                  <span className="text-sm">Company size: 1000+ employees</span>
                </div>
              </div>
            </div>

            {/* Quick apply card */}
            <div className="card p-6 space-y-6 sticky top-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Ready to apply?
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Submit your application and join an amazing team.
                </p>
              </div>
              
              <Button
                variant="primary"
                size="large"
                onClick={() => setIsApplyModalOpen(true)}
                className="w-full"
              >
                Apply Now
              </Button>
              
              <div className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                <p>Application process:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Submit application</li>
                  <li>Initial screening call</li>
                  <li>Technical assessment</li>
                  <li>Final interview</li>
                </ul>
              </div>
            </div>

            {/* Similar jobs */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Similar Jobs
              </h3>
              
              <div className="space-y-4">
                {jobs
                  .filter(j => j.id !== id && j.type === job.type)
                  .slice(0, 3)
                  .map(similarJob => (
                    <Link
                      key={similarJob.id}
                      to={`/jobs/${similarJob.id}`}
                      className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 
                               focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {similarJob.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {similarJob.company.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                        {similarJob.location.city} • {similarJob.type}
                      </p>
                    </Link>
                  ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Accessibility note */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Need assistance with your application?{' '}
              <a 
                href="/help" 
                className="text-primary-600 dark:text-primary-400 hover:underline"
              >
                Contact our support team
              </a>
            </p>
            
            <Button
              variant="outline"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
            >
              Back to Top
            </Button>
          </div>
        </div>
      </main>

      {/* Apply Modal */}
      <ApplyModal
        job={job}
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />
    </>
  );
};

export default JobDetails;