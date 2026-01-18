/**
 * Application Constants (TypeScript)
 */
export const JOB_CATEGORIES = [
  { value: 'engineering', label: 'Engineering' },
  { value: 'design', label: 'Design' },
  { value: 'product', label: 'Product' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'sales', label: 'Sales' },
  { value: 'finance', label: 'Finance' },
  { value: 'hr', label: 'Human Resources' },
  { value: 'operations', label: 'Operations' },
  { value: 'support', label: 'Customer Support' },
  { value: 'legal', label: 'Legal' }
];

export const EXPERIENCE_LEVELS = [
  { value: 'entry', label: 'Entry Level' },
  { value: 'mid', label: 'Mid Level' },
  { value: 'senior', label: 'Senior' },
  { value: 'lead', label: 'Lead' },
  { value: 'executive', label: 'Executive' }
];

export const JOB_TYPES = [
  { value: 'full-time', label: 'Full-time' },
  { value: 'part-time', label: 'Part-time' },
  { value: 'contract', label: 'Contract' },
  { value: 'internship', label: 'Internship' },
  { value: 'remote', label: 'Remote' }
];

export const SALARY_RANGES = [
  { value: '30000-50000', label: '$30,000 - $50,000' },
  { value: '50000-80000', label: '$50,000 - $80,000' },
  { value: '80000-120000', label: '$80,000 - $120,000' },
  { value: '120000-160000', label: '$120,000 - $160,000' },
  { value: '160000-200000', label: '$160,000 - $200,000' },
  { value: '200000+', label: '$200,000+' }
];

export const COUNTRIES = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'au', label: 'Australia' },
  { value: 'sg', label: 'Singapore' },
  { value: 'in', label: 'India' },
  { value: 'jp', label: 'Japan' },
  { value: 'remote', label: 'Remote' }
];

export const POPULAR_SKILLS = [
  'React', 'JavaScript', 'TypeScript', 'Python', 'Java',
  'AWS', 'Docker', 'Kubernetes', 'Node.js', 'GraphQL',
  'UI/UX', 'Figma', 'Product Management', 'Data Analysis',
  'Machine Learning', 'DevOps', 'Agile', 'Scrum'
];

export const APPLICATION_STATUS = {
  DRAFT: 'draft',
  SUBMITTED: 'submitted',
  REVIEWING: 'reviewing',
  SHORTLISTED: 'shortlisted',
  INTERVIEW: 'interview',
  OFFER: 'offer',
  REJECTED: 'rejected',
  WITHDRAWN: 'withdrawn'
} as const;

export const KEYBOARD_SHORTCUTS = {
  SEARCH: 'Ctrl+K or /',
  SAVE_JOB: 'S',
  APPLY: 'A',
  NEXT_JOB: 'ArrowDown or J',
  PREV_JOB: 'ArrowUp or K',
  TOGGLE_THEME: 'Ctrl+T'
};

export const ACCESSIBILITY = {
  FOCUS_RING_COLOR: '#3b82f6',
  FOCUS_RING_WIDTH: '2px',
  FOCUS_RING_OFFSET: '2px',
  MIN_TAP_TARGET_SIZE: '44px',
  COLOR_CONTRAST_RATIO: 4.5
};

export const API_ENDPOINTS = {
  JOBS: '/api/jobs',
  JOB_DETAILS: (id: string) => `/api/jobs/${id}`,
  APPLY: (id: string) => `/api/jobs/${id}/apply`,
  SAVE_JOB: (id: string) => `/api/jobs/${id}/save`,
  UNSAVE_JOB: (id: string) => `/api/jobs/${id}/unsave`,
  APPLICATIONS: '/api/applications',
  PROFILE: '/api/profile',
  LOGIN: '/api/auth/login',
  SIGNUP: '/api/auth/signup'
};

export const STORAGE_KEYS = {
  USER: 'job_portal_user',
  SAVED_JOBS: 'job_portal_saved_jobs',
  THEME: 'job_portal_theme',
  RECENT_SEARCHES: 'job_portal_recent_searches',
  APPLICATION_DRAFTS: 'job_portal_application_drafts'
};

export const VALIDATION_PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^[\+]?[1-9][\d]{0,15}$/,
  URL: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.\-]*)*\/?$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
};

export const ERROR_MESSAGES = {
  REQUIRED: 'This field is required',
  EMAIL: 'Please enter a valid email address',
  PHONE: 'Please enter a valid phone number',
  PASSWORD: 'Password must be at least 8 characters with uppercase, lowercase, number, and special character',
  PASSWORD_MISMATCH: 'Passwords do not match',
  FILE_SIZE: 'File size must be less than 5MB',
  FILE_TYPE: 'Please upload a PDF or Word document',
  NETWORK: 'Network error. Please check your connection.',
  SERVER: 'Server error. Please try again later.',
  NOT_FOUND: 'The requested resource was not found.',
  UNAUTHORIZED: 'Please sign in to continue.',
  FORBIDDEN: 'You do not have permission to perform this action.'
};

export const SUCCESS_MESSAGES = {
  APPLICATION_SUBMITTED: 'Application submitted successfully!',
  JOB_SAVED: 'Job saved to your favorites',
  JOB_UNSAVED: 'Job removed from favorites',
  PROFILE_UPDATED: 'Profile updated successfully',
  PASSWORD_CHANGED: 'Password changed successfully'
};

export const DATE_FORMATS = {
  DISPLAY: 'MMM DD, YYYY',
  API: 'YYYY-MM-DD',
  RELATIVE: 'relative'
};

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  XXL: 1536
};
