/**
 * Accessible Footer Component
 * WCAG: Proper semantic HTML, keyboard navigation
 */
import React from 'react';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Heart, 
  ArrowUp 
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Press', href: '/press' },
        { label: 'Blog', href: '/blog' }
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '/help' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' }
      ]
    },
    {
      title: 'For Employers',
      links: [
        { label: 'Post a Job', href: '/employers/post' },
        { label: 'Pricing', href: '/employers/pricing' },
        { label: 'Employer Resources', href: '/employers/resources' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' }
  ];

  return (
    <footer 
      className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
      role="contentinfo"
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <a 
              href="/" 
              className="flex items-center space-x-2 mb-4 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:rounded-md"
              aria-label="CareerConnect - Home"
            >
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                CareerConnect
              </span>
            </a>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Connecting talented professionals with amazing opportunities worldwide.
              Accessible job searching for everyone.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${social.label} page`}
                  className="p-2 rounded-lg bg-white dark:bg-gray-800 
                           text-gray-700 dark:text-gray-300
                           hover:bg-gray-100 dark:hover:bg-gray-700
                           focus:outline-none focus:ring-2 focus:ring-primary-500
                           transition-colors"
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 
                               dark:hover:text-primary-400 transition-colors
                               focus:outline-none focus:text-primary-600 dark:focus:text-primary-400"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" aria-hidden="true" />
              <span>for the community</span>
              <span className="mx-2">•</span>
              <span>© {currentYear} CareerConnect. All rights reserved.</span>
            </div>
            
            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="
                mt-4 md:mt-0
                flex items-center space-x-2
                px-4 py-2
                text-sm text-gray-600 dark:text-gray-400
                hover:text-primary-600 dark:hover:text-primary-400
                focus:outline-none focus:ring-2 focus:ring-primary-500 focus:rounded-md
                transition-colors
              "
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          {/* Accessibility statement */}
          <div className="mt-6 text-sm text-gray-500 dark:text-gray-500">
            <p>
              We are committed to making our platform accessible to everyone. 
              Our website follows WCAG 2.2 AA guidelines.
              <a 
                href="/accessibility" 
                className="text-primary-600 dark:text-primary-400 hover:underline ml-2"
              >
                Read our accessibility statement
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;