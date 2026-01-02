/**
 * Accessible Navigation Component
 * WCAG: Proper ARIA roles, keyboard navigation, focus management
 */
import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Briefcase, Bookmark, User } from 'lucide-react';

const Navigation = ({ mobile = false, onItemClick }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const navItems = [
    { 
      to: '/', 
      icon: Home, 
      label: 'Home',
      exact: true
    },
    { 
      to: '/jobs', 
      icon: Briefcase, 
      label: 'All Jobs'
    },
    { 
      to: '/saved', 
      icon: Bookmark, 
      label: 'Saved Jobs'
    },
    { 
      to: '/profile', 
      icon: User, 
      label: 'Profile',
      submenu: [
        { to: '/profile', label: 'My Profile' },
        { to: '/applications', label: 'Applications' },
        { to: '/settings', label: 'Settings' }
      ]
    }
  ];

  const handleKeyDown = (e, item) => {
    switch (e.key) {
      case 'ArrowDown':
        if (item.submenu) {
          e.preventDefault();
          setActiveDropdown(item.label);
          // Focus first submenu item
          setTimeout(() => {
            const firstItem = dropdownRef.current?.querySelector('a');
            firstItem?.focus();
          }, 0);
        }
        break;
      case 'ArrowUp':
        if (item.submenu && activeDropdown === item.label) {
          e.preventDefault();
          setActiveDropdown(null);
        }
        break;
      case 'Escape':
        setActiveDropdown(null);
        break;
    }
  };

  const handleSubmenuKeyDown = (e, index, submenuItems) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        const nextItem = submenuItems[index + 1];
        if (nextItem) {
          const nextLink = document.querySelector(`[href="${nextItem.to}"]`);
          nextLink?.focus();
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (index === 0) {
          // Return to parent item
          const parentItem = e.target.closest('[role="menuitem"]').previousElementSibling;
          parentItem?.focus();
          setActiveDropdown(null);
        } else {
          const prevItem = submenuItems[index - 1];
          const prevLink = document.querySelector(`[href="${prevItem.to}"]`);
          prevLink?.focus();
        }
        break;
    }
  };

  const baseClasses = mobile 
    ? 'flex flex-col space-y-1'
    : 'flex items-center space-x-4';

  const linkClasses = mobile
    ? ({ isActive }) => `
        flex items-center px-3 py-2 rounded-md text-base font-medium
        ${isActive
          ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300'
          : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
        }
      `
    : ({ isActive }) => `
        flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium
        ${isActive
          ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300'
          : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
        }
      `;

  return (
    <nav 
      className={baseClasses}
      aria-label="Main navigation"
    >
      {navItems.map((item) => (
        <div key={item.label} className="relative">
          {item.submenu ? (
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(
                  activeDropdown === item.label ? null : item.label
                )}
                onKeyDown={(e) => handleKeyDown(e, item)}
                aria-expanded={activeDropdown === item.label}
                aria-haspopup="true"
                aria-controls={`submenu-${item.label}`}
                className={mobile ? linkClasses({ isActive: false }) : `
                  flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium
                  text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800
                  ${activeDropdown === item.label 
                    ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300' 
                    : ''
                  }
                `}
                role="menuitem"
              >
                <item.icon className="w-5 h-5" aria-hidden="true" />
                <span>{item.label}</span>
                <svg 
                  className={`w-4 h-4 ml-1 transition-transform ${
                    activeDropdown === item.label ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {activeDropdown === item.label && (
                <div
                  id={`submenu-${item.label}`}
                  ref={dropdownRef}
                  role="menu"
                  aria-label={`${item.label} submenu`}
                  className={`
                    absolute z-10 mt-1 min-w-[200px]
                    bg-white dark:bg-gray-800 rounded-lg shadow-lg
                    border border-gray-200 dark:border-gray-700
                    ${mobile ? 'static mt-0' : 'left-0'}
                  `}
                >
                  <div className="py-1">
                    {item.submenu.map((subItem, index) => (
                      <NavLink
                        key={subItem.label}
                        to={subItem.to}
                        onClick={() => {
                          setActiveDropdown(null);
                          onItemClick?.();
                        }}
                        onKeyDown={(e) => handleSubmenuKeyDown(e, index, item.submenu)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 
                                 dark:text-gray-300 dark:hover:bg-gray-700
                                 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700"
                        role="menuitem"
                      >
                        {subItem.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <NavLink
              to={item.to}
              end={item.exact}
              onClick={onItemClick}
              className={linkClasses}
              role="menuitem"
            >
              <item.icon className="w-5 h-5" aria-hidden="true" />
              <span>{item.label}</span>
            </NavLink>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Navigation;