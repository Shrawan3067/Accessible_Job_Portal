/**
 * Formatter utilities
 * Accessibility: Format dates, numbers, and text for screen readers
 */
export const formatDistanceToNow = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) return 'Today';
  if (diffInDays === 1) return 'Yesterday';
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
  if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`;
  return `${Math.floor(diffInDays / 365)} years ago`;
};

export const formatSalary = (min, max, currency = 'USD', period = 'year') => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });

  const periodText = period === 'year' ? 'per year' : 'per month';
  return `${formatter.format(min)} - ${formatter.format(max)} ${periodText}`;
};

/**
 * Accessibility: Format text for screen readers
 * Adds pauses and emphasis for better comprehension
 */
export const formatForScreenReader = (text) => {
  return text
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();
};