/**
 * Formatter utilities
 */
export const formatDistanceToNow = (dateString?: string | Date): string => {
  if (!dateString) return '';
  const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
  const now = new Date();
  const diffInDays = Math.floor((+now - +date) / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) return 'Today';
  if (diffInDays === 1) return 'Yesterday';
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
  if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`;
  return `${Math.floor(diffInDays / 365)} years ago`;
};

export const formatSalary = (min?: number, max?: number, currency = 'USD', period = 'year'): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });

  const periodText = period === 'year' ? 'per year' : 'per month';
  const minText = typeof min === 'number' ? formatter.format(min) : '';
  const maxText = typeof max === 'number' ? formatter.format(max) : '';
  return `${minText} - ${maxText} ${periodText}`.trim();
};

export const formatForScreenReader = (text?: string): string => {
  if (!text) return '';
  return text.replace(/\s+/g, ' ').trim();
};
