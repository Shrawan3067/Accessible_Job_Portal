/**
 * Mock job data for development
 * Real-world data structure with diversity for testing
 */
export const mockJobs: any[] = [
  {
    id: '1',
    title: 'Senior Frontend Engineer',
    company: {
      name: 'TechCorp Inc.',
      logo: 'https://via.placeholder.com/48',
      industry: 'Technology',
      description: 'Leading technology company specializing in enterprise solutions.'
    },
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA',
      coordinates: { lat: 37.7749, lng: -122.4194 }
    },
    type: 'Full-time',
    experience: 'Senior',
    salary: {
      min: 150000,
      max: 220000,
      currency: 'USD',
      period: 'year'
    },
    postedDate: '2024-01-15T10:30:00Z',
    description: 'We are looking for a Senior Frontend Engineer to join our team...',
    responsibilities: [
      'Build accessible, responsive web applications',
      'Collaborate with design and backend teams',
      'Mentor junior engineers',
      'Participate in code reviews'
    ],
    requirements: [
      '5+ years of React experience',
      'Strong understanding of accessibility (WCAG)',
      'Experience with TypeScript',
      'Knowledge of modern frontend tooling'
    ],
    skills: ['React', 'TypeScript', 'Accessibility', 'Tailwind CSS', 'GraphQL'],
    isRemote: true,
    benefits: [
      'Health insurance',
      '401k matching',
      'Flexible hours',
      'Remote work options'
    ]
  },
  {
    id: '2',
    title: 'UX/UI Designer',
    company: {
      name: 'DesignStudio Pro',
      logo: 'https://via.placeholder.com/48',
      industry: 'Design',
      description: 'Award-winning design agency focused on user-centered design.'
    },
    location: {
      city: 'New York',
      state: 'NY',
      country: 'USA',
      coordinates: { lat: 40.7128, lng: -74.0060 }
    },
    type: 'Full-time',
    experience: 'Mid Level',
    salary: {
      min: 85000,
      max: 120000,
      currency: 'USD',
      period: 'year'
    },
    postedDate: '2024-01-14T09:15:00Z',
    description: 'Join our creative team to design beautiful and functional interfaces.',
    responsibilities: [
      'Create user-centered designs',
      'Develop wireframes and prototypes',
      'Conduct user research',
      'Collaborate with developers'
    ],
    requirements: [
      '3+ years of UX/UI design experience',
      'Proficiency in Figma and Adobe Creative Suite',
      'Strong portfolio',
      'Understanding of accessibility standards'
    ],
    skills: ['Figma', 'UI/UX', 'Wireframing', 'Prototyping', 'User Research'],
    isRemote: false,
    benefits: [
      'Health & wellness program',
      'Professional development budget',
      'Creative workspace'
    ]
  },
  {
    id: '3',
    title: 'DevOps Engineer',
    company: {
      name: 'CloudSystems Ltd.',
      logo: 'https://via.placeholder.com/48',
      industry: 'Cloud Computing',
      description: 'Cloud infrastructure and DevOps solutions provider.'
    },
    location: {
      city: 'Seattle',
      state: 'WA',
      country: 'USA',
      coordinates: { lat: 47.6062, lng: -122.3321 }
    },
    type: 'Full-time',
    experience: 'Senior',
    salary: {
      min: 130000,
      max: 180000,
      currency: 'USD',
      period: 'year'
    },
    postedDate: '2024-01-13T14:20:00Z',
    description: 'Looking for DevOps Engineer to manage cloud infrastructure.',
    responsibilities: [
      'Manage AWS/GCP infrastructure',
      'Implement CI/CD pipelines',
      'Monitor system performance',
      'Ensure security compliance'
    ],
    requirements: [
      '5+ years DevOps experience',
      'AWS/GCP certification',
      'Kubernetes experience',
      'Scripting skills (Python/Bash)'
    ],
    skills: ['AWS', 'Kubernetes', 'Docker', 'CI/CD', 'Terraform'],
    isRemote: true,
    benefits: [
      'Remote-first culture',
      'Stock options',
      'Conference budget',
      'Home office setup'
    ]
  },
  {
    id: '4',
    title: 'Data Scientist',
    company: {
      name: 'DataInsights AI',
      logo: 'https://via.placeholder.com/48',
      industry: 'Artificial Intelligence',
      description: 'AI startup focusing on data-driven decision making.'
    },
    location: {
      city: 'Boston',
      state: 'MA',
      country: 'USA',
      coordinates: { lat: 42.3601, lng: -71.0589 }
    },
    type: 'Full-time',
    experience: 'Mid Level',
    salary: {
      min: 110000,
      max: 160000,
      currency: 'USD',
      period: 'year'
    },
    postedDate: '2024-01-12T11:45:00Z',
    description: 'Join our data science team to build predictive models.',
    responsibilities: [
      'Develop machine learning models',
      'Analyze large datasets',
      'Create data visualizations',
      'Present findings to stakeholders'
    ],
    requirements: [
      'MS in Data Science or related field',
      '3+ years experience',
      'Python/R proficiency',
      'ML frameworks experience'
    ],
    skills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL', 'Data Visualization'],
    isRemote: true,
    benefits: [
      'Equity package',
      'Flexible PTO',
      'Learning stipend',
      'Health insurance'
    ]
  },
  {
    id: '5',
    title: 'Marketing Intern',
    company: {
      name: 'GrowthMarketing Co.',
      logo: 'https://via.placeholder.com/48',
      industry: 'Marketing',
      description: 'Digital marketing agency specializing in growth strategies.'
    },
    location: {
      city: 'Austin',
      state: 'TX',
      coordinates: { lat: 30.2672, lng: -97.7431 }
    },
    type: 'Internship',
    experience: 'Entry',
    salary: {
      min: 2000,
      max: 3000,
      currency: 'USD',
      period: 'month'
    },
    postedDate: '2024-01-11T08:30:00Z',
    description: 'Paid internship for marketing students.',
    responsibilities: [
      'Assist with social media campaigns',
      'Content creation',
      'Market research',
      'Analytics reporting'
    ],
    requirements: [
      'Currently enrolled in marketing program',
      'Basic understanding of digital marketing',
      'Strong communication skills',
      'Eagerness to learn'
    ],
    skills: ['Social Media', 'Content Creation', 'SEO', 'Analytics', 'Communication'],
    isRemote: false,
    benefits: [
      'Mentorship program',
      'College credit',
      'Potential full-time offer',
      'Networking opportunities'
    ]
  },
  {
    id: '6',
    title: 'Backend Developer (Node.js)',
    company: {
      name: 'API Masters',
      logo: 'https://via.placeholder.com/48',
      industry: 'SaaS',
      description: 'Building scalable APIs for enterprise clients.'
    },
    location: {
      city: 'Toronto',
      state: 'ON',
      country: 'Canada',
      coordinates: { lat: 43.6532, lng: -79.3832 }
    },
    type: 'Full-time',
    experience: 'Mid Level',
    salary: {
      min: 95000,
      max: 135000,
      currency: 'CAD',
      period: 'year'
    },
    postedDate: '2024-01-10T13:15:00Z',
    description: 'Develop robust backend systems and APIs.',
    responsibilities: [
      'Design and implement REST APIs',
      'Optimize database performance',
      'Write unit tests',
      'Participate in code reviews'
    ],
    requirements: [
      '3+ years Node.js experience',
      'MongoDB/PostgreSQL knowledge',
      'API design experience',
      'Understanding of microservices'
    ],
    skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Docker'],
    isRemote: true,
    benefits: [
      'Competitive salary',
      'Extended health benefits',
      'RRSP matching',
      'Remote work'
    ]
  },
  {
    id: '7',
    title: 'Product Manager',
    company: {
      name: 'InnovateTech Solutions',
      logo: 'https://via.placeholder.com/48',
      industry: 'Product Development',
      description: 'Product development company focused on innovative solutions.'
    },
    location: {
      city: 'London',
      country: 'UK',
      coordinates: { lat: 51.5074, lng: -0.1278 }
    },
    type: 'Full-time',
    experience: 'Senior',
    salary: {
      min: 80000,
      max: 120000,
      currency: 'GBP',
      period: 'year'
    },
    postedDate: '2024-01-09T10:00:00Z',
    description: 'Lead product development from conception to launch.',
    responsibilities: [
      'Define product roadmap',
      'Gather and prioritize requirements',
      'Coordinate cross-functional teams',
      'Analyze market trends'
    ],
    requirements: [
      '5+ years product management',
      'Technical background',
      'Strong analytical skills',
      'Excellent communication'
    ],
    skills: ['Product Strategy', 'Agile', 'Market Research', 'Roadmapping', 'Leadership'],
    isRemote: false,
    benefits: [
      'Annual bonus',
      'Private healthcare',
      'Pension scheme',
      'Gym membership'
    ]
  },
  {
    id: '8',
    title: 'Cybersecurity Analyst',
    company: {
      name: 'SecureNet Systems',
      logo: 'https://via.placeholder.com/48',
      industry: 'Cybersecurity',
      description: 'Cybersecurity firm protecting enterprise networks.'
    },
    location: {
      city: 'Washington DC',
      state: 'DC',
      country: 'USA',
      coordinates: { lat: 38.9072, lng: -77.0369 }
    },
    type: 'Contract',
    experience: 'Mid Level',
    salary: {
      min: 80,
      max: 120,
      currency: 'USD',
      period: 'hour'
    },
    postedDate: '2024-01-08T16:45:00Z',
    description: '6-month contract for security monitoring and analysis.',
    responsibilities: [
      'Monitor security alerts',
      'Incident response',
      'Security assessments',
      'Compliance reporting'
    ],
    requirements: [
      'Security+ or CISSP certification',
      '3+ years security experience',
      'SIEM tools experience',
      'Strong analytical skills'
    ],
    skills: ['SIEM', 'Incident Response', 'Network Security', 'Compliance', 'Firewalls'],
    isRemote: true,
    benefits: [
      'Contract extension possible',
      'Training opportunities',
      'Flexible schedule'
    ]
  },
  {
    id: '9',
    title: 'Mobile App Developer (React Native)',
    company: {
      name: 'AppCraft Studios',
      logo: 'https://via.placeholder.com/48',
      industry: 'Mobile Development',
      description: 'Mobile app development agency.'
    },
    location: {
      city: 'Berlin',
      country: 'Germany',
      coordinates: { lat: 52.5200, lng: 13.4050 }
    },
    type: 'Full-time',
    experience: 'Mid Level',
    salary: {
      min: 65000,
      max: 90000,
      currency: 'EUR',
      period: 'year'
    },
    postedDate: '2024-01-07T12:30:00Z',
    description: 'Develop cross-platform mobile applications.',
    responsibilities: [
      'Develop React Native apps',
      'Collaborate with designers',
      'App store deployment',
      'Performance optimization'
    ],
    requirements: [
      '2+ years React Native experience',
      'iOS/Android deployment experience',
      'JavaScript/TypeScript proficiency',
      'Understanding of mobile UX'
    ],
    skills: ['React Native', 'TypeScript', 'iOS', 'Android', 'Redux'],
    isRemote: false,
    benefits: [
      '30 days vacation',
      'Public transport pass',
      'Language courses',
      'Team events'
    ]
  },
  {
    id: '10',
    title: 'Customer Success Manager',
    company: {
      name: 'SaaS Solutions Inc.',
      logo: 'https://via.placeholder.com/48',
      industry: 'SaaS',
      description: 'SaaS company serving small businesses.'
    },
    location: {
      city: 'Chicago',
      state: 'IL',
      country: 'USA',
      coordinates: { lat: 41.8781, lng: -87.6298 }
    },
    type: 'Full-time',
    experience: 'Mid Level',
    salary: {
      min: 70000,
      max: 95000,
      currency: 'USD',
      period: 'year'
    },
    postedDate: '2024-01-06T09:00:00Z',
    description: 'Manage customer relationships and ensure success.',
    responsibilities: [
      'Onboard new customers',
      'Conduct training sessions',
      'Gather customer feedback',
      'Renewal management'
    ],
    requirements: [
      '3+ years customer success experience',
      'SaaS industry knowledge',
      'Strong interpersonal skills',
      'CRM software experience'
    ],
    skills: ['Customer Success', 'CRM', 'Onboarding', 'Training', 'Communication'],
    isRemote: true,
    benefits: [
      'Commission structure',
      'Home office stipend',
      'Health benefits',
      'Unlimited PTO'
    ]
  },
  {
    id: '11',
    title: 'Full Stack Developer',
    company: {
      name: 'StartUp Ventures',
      logo: 'https://via.placeholder.com/48',
      industry: 'Startup',
      description: 'Fast-growing tech startup.'
    },
    location: {
      city: 'Miami',
      state: 'FL',
      country: 'USA',
      coordinates: { lat: 25.7617, lng: -80.1918 }
    },
    type: 'Full-time',
    experience: 'Mid Level',
    salary: {
      min: 90000,
      max: 130000,
      currency: 'USD',
      period: 'year'
    },
    postedDate: '2024-01-05T14:15:00Z',
    description: 'Full stack development for early-stage startup.',
    responsibilities: [
      'Develop frontend and backend features',
      'Participate in product decisions',
      'Write clean, maintainable code',
      'Deploy and maintain applications'
    ],
    requirements: [
      '3+ years full stack experience',
      'React and Node.js proficiency',
      'Database design experience',
      'Startup mindset'
    ],
    skills: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'TypeScript'],
    isRemote: true,
    benefits: [
      'Equity options',
      'Flexible work hours',
      'Learning budget',
      'Health insurance'
    ]
  },
  {
    id: '12',
    title: 'QA Automation Engineer',
    company: {
      name: 'QualityFirst Testing',
      logo: 'https://via.placeholder.com/48',
      industry: 'Quality Assurance',
      description: 'QA and testing services company.'
    },
    location: {
      city: 'Bangalore',
      country: 'India',
      coordinates: { lat: 12.9716, lng: 77.5946 }
    },
    type: 'Full-time',
    experience: 'Mid Level',
    salary: {
      min: 1200000,
      max: 1800000,
      currency: 'INR',
      period: 'year'
    },
    postedDate: '2024-01-04T11:30:00Z',
    description: 'Develop and maintain automated test suites.',
    responsibilities: [
      'Write automated test scripts',
      'Maintain test frameworks',
      'CI/CD integration',
      'Bug reporting and tracking'
    ],
    requirements: [
      '3+ years QA automation',
      'Selenium/Cypress experience',
      'Programming skills (Java/Python)',
      'Understanding of SDLC'
    ],
    skills: ['Selenium', 'Cypress', 'Java', 'Test Automation', 'CI/CD'],
    isRemote: false,
    benefits: [
      'Health insurance',
      'Provident fund',
      'Annual bonus',
      'Training programs'
    ]
  },
  {
    id: '13',
    title: 'Content Writer (Tech)',
    company: {
      name: 'TechBlog Media',
      logo: 'https://via.placeholder.com/48',
      industry: 'Media',
      description: 'Technology news and content platform.'
    },
    location: {
      city: 'Los Angeles',
      state: 'CA',
      country: 'USA',
      coordinates: { lat: 34.0522, lng: -118.2437 }
    },
    type: 'Part-time',
    experience: 'Entry',
    salary: {
      min: 35,
      max: 50,
      currency: 'USD',
      period: 'hour'
    },
    postedDate: '2024-01-03T10:00:00Z',
    description: 'Write technology articles and blog posts.',
    responsibilities: [
      'Research tech topics',
      'Write engaging articles',
      'SEO optimization',
      'Content editing'
    ],
    requirements: [
      'Writing portfolio',
      'Technology knowledge',
      'SEO understanding',
      'Excellent grammar'
    ],
    skills: ['Content Writing', 'SEO', 'Research', 'Editing', 'Technology'],
    isRemote: true,
    benefits: [
      'Flexible schedule',
      'Byline credits',
      'Professional development',
      'Remote work'
    ]
  },
  {
    id: '14',
    title: 'HR Business Partner',
    company: {
      name: 'Global Enterprises Inc.',
      logo: 'https://via.placeholder.com/48',
      industry: 'Corporate',
      description: 'Multinational corporation.'
    },
    location: {
      city: 'Sydney',
      state: 'NSW',
      country: 'Australia',
      coordinates: { lat: -33.8688, lng: 151.2093 }
    },
    type: 'Full-time',
    experience: 'Senior',
    salary: {
      min: 110000,
      max: 150000,
      currency: 'AUD',
      period: 'year'
    },
    postedDate: '2024-01-02T13:45:00Z',
    description: 'Strategic HR partner for business units.',
    responsibilities: [
      'Employee relations',
      'Performance management',
      'Talent development',
      'HR policy implementation'
    ],
    requirements: [
      '7+ years HR experience',
      'Business partnership experience',
      'Employment law knowledge',
      'Strategic thinking'
    ],
    skills: ['HR Business Partnering', 'Employee Relations', 'Talent Management', 'Coaching', 'Compliance'],
    isRemote: false,
    benefits: [
      'Superannuation',
      'Bonus scheme',
      'Health insurance',
      'Professional memberships'
    ]
  },
  {
    id: '15',
    title: 'Blockchain Developer',
    company: {
      name: 'CryptoInnovate Labs',
      logo: 'https://via.placeholder.com/48',
      industry: 'Blockchain',
      description: 'Blockchain technology company.'
    },
    location: {
      city: 'Singapore',
      country: 'Singapore',
      coordinates: { lat: 1.3521, lng: 103.8198 }
    },
    type: 'Full-time',
    experience: 'Senior',
    salary: {
      min: 140000,
      max: 200000,
      currency: 'SGD',
      period: 'year'
    },
    postedDate: '2024-01-01T15:00:00Z',
    description: 'Develop blockchain solutions and smart contracts.',
    responsibilities: [
      'Develop smart contracts',
      'Blockchain protocol development',
      'Security auditing',
      'Technical documentation'
    ],
    requirements: [
      '3+ years blockchain development',
      'Solidity proficiency',
      'Ethereum experience',
      'Cryptography understanding'
    ],
    skills: ['Solidity', 'Blockchain', 'Ethereum', 'Smart Contracts', 'Web3.js'],
    isRemote: true,
    benefits: [
      'Crypto bonuses',
      'Remote work',
      'Conference attendance',
      'Health benefits'
    ]
  },
  {
    id: '16',
    title: 'Sales Representative',
    company: {
      name: 'Enterprise Sales Pro',
      logo: 'https://via.placeholder.com/48',
      industry: 'Sales',
      description: 'Enterprise software sales company.'
    },
    location: {
      city: 'Dallas',
      state: 'TX',
      country: 'USA',
      coordinates: { lat: 32.7767, lng: -96.7970 }
    },
    type: 'Full-time',
    experience: 'Mid Level',
    salary: {
      min: 60000,
      max: 85000,
      currency: 'USD',
      period: 'year'
    },
    postedDate: '2023-12-31T11:00:00Z',
    description: 'Enterprise software sales with commission structure.',
    responsibilities: [
      'Prospect new clients',
      'Product demonstrations',
      'Negotiate contracts',
      'Account management'
    ],
    requirements: [
      '3+ years B2B sales',
      'CRM software experience',
      'Excellent presentation skills',
      'Negotiation skills'
    ],
    skills: ['B2B Sales', 'CRM', 'Negotiation', 'Presentation', 'Account Management'],
    isRemote: false,
    benefits: [
      'Uncapped commission',
      'Company car',
      'Health benefits',
      'Sales bonuses'
    ]
  },
  {
    id: '17',
    title: 'Junior Frontend Developer',
    company: {
      name: 'WebDev Agency',
      logo: 'https://via.placeholder.com/48',
      industry: 'Web Development',
      description: 'Web development agency serving various clients.'
    },
    location: {
      city: 'Portland',
      state: 'OR',
      country: 'USA',
      coordinates: { lat: 45.5152, lng: -122.6784 }
    },
    type: 'Full-time',
    experience: 'Entry',
    salary: {
      min: 60000,
      max: 80000,
      currency: 'USD',
      period: 'year'
    },
    postedDate: '2023-12-30T09:30:00Z',
    description: 'Entry-level frontend development position.',
    responsibilities: [
      'Implement UI designs',
      'Write clean HTML/CSS/JS',
      'Fix bugs',
      'Learn from senior developers'
    ],
    requirements: [
      '1+ years frontend experience',
      'HTML/CSS/JavaScript proficiency',
      'Basic React knowledge',
      'Eagerness to learn'
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design'],
    isRemote: true,
    benefits: [
      'Mentorship program',
      'Training budget',
      'Health insurance',
      'Flexible schedule'
    ]
  },
  {
    id: '18',
    title: 'System Administrator',
    company: {
      name: 'IT Services Corp',
      logo: 'https://via.placeholder.com/48',
      industry: 'IT Services',
      description: 'Managed IT services provider.'
    },
    location: {
      city: 'Atlanta',
      state: 'GA',
      country: 'USA',
      coordinates: { lat: 33.7490, lng: -84.3880 }
    },
    type: 'Full-time',
    experience: 'Mid Level',
    salary: {
      min: 75000,
      max: 100000,
      currency: 'USD',
      period: 'year'
    },
    postedDate: '2023-12-29T14:00:00Z',
    description: 'Manage and maintain IT infrastructure.',
    responsibilities: [
      'Server administration',
      'Network monitoring',
      'User support',
      'System backups'
    ],
    requirements: [
      '3+ years system admin experience',
      'Windows/Linux administration',
      'Active Directory knowledge',
      'Troubleshooting skills'
    ],
    skills: ['Windows Server', 'Linux', 'Active Directory', 'Networking', 'Troubleshooting'],
    isRemote: false,
    benefits: [
      'Certification training',
      'Health insurance',
      'Retirement plan',
      'Paid on-call'
    ]
  },
  {
    id: '19',
    title: 'Financial Analyst',
    company: {
      name: 'FinanceCorp Global',
      logo: 'https://via.placeholder.com/48',
      industry: 'Finance',
      description: 'International financial services firm.'
    },
    location: {
      city: 'Hong Kong',
      country: 'Hong Kong',
      coordinates: { lat: 22.3193, lng: 114.1694 }
    },
    type: 'Full-time',
    experience: 'Mid Level',
    salary: {
      min: 80000,
      max: 120000,
      currency: 'HKD',
      period: 'month'
    },
    postedDate: '2023-12-28T10:15:00Z',
    description: 'Financial analysis and reporting role.',
    responsibilities: [
      'Financial modeling',
      'Budget analysis',
      'Report preparation',
      'Data analysis'
    ],
    requirements: [
      '2+ years financial analysis',
      'Excel proficiency',
      'Accounting knowledge',
      'Analytical skills'
    ],
    skills: ['Financial Analysis', 'Excel', 'Financial Modeling', 'Reporting', 'Data Analysis'],
    isRemote: false,
    benefits: [
      'Performance bonus',
      'Medical coverage',
      'MPF contributions',
      'Professional development'
    ]
  },
  {
    id: '20',
    title: 'AI/ML Researcher',
    company: {
      name: 'AI Research Institute',
      logo: 'https://via.placeholder.com/48',
      industry: 'Research',
      description: 'Academic research institute focusing on AI.'
    },
    location: {
      city: 'Cambridge',
      state: 'MA',
      country: 'USA',
      coordinates: { lat: 42.3736, lng: -71.1097 }
    },
    type: 'Full-time',
    experience: 'Lead',
    salary: {
      min: 140000,
      max: 200000,
      currency: 'USD',
      period: 'year'
    },
    postedDate: '2023-12-27T13:30:00Z',
    description: 'Lead AI/ML research projects.',
    responsibilities: [
      'Conduct AI research',
      'Publish papers',
      'Lead research team',
      'Grant applications'
    ],
    requirements: [
      'PhD in AI/ML related field',
      'Publication record',
      'Leadership experience',
      'Advanced programming skills'
    ],
    skills: ['Machine Learning', 'Research', 'Python', 'TensorFlow', 'PyTorch'],
    isRemote: false,
    benefits: [
      'Research funding',
      'Conference travel',
      'Academic publishing support',
      'Comprehensive benefits'
    ]
  },
  {
    id: '21',
    title: 'Legal Counsel',
    company: {
      name: 'LegalTech Partners',
      logo: 'https://via.placeholder.com/48',
      industry: 'Legal',
      description: 'Legal technology company.'
    },
    location: {
      city: 'Paris',
      country: 'France',
      coordinates: { lat: 48.8566, lng: 2.3522 }
    },
    type: 'Full-time',
    experience: 'Senior',
    salary: {
      min: 90000,
      max: 130000,
      currency: 'EUR',
      period: 'year'
    },
    postedDate: '2023-12-26T11:00:00Z',
    description: 'In-house legal counsel for tech company.',
    responsibilities: [
      'Contract review',
      'Legal compliance',
      'Intellectual property',
      'Risk management'
    ],
    requirements: [
      'Law degree',
      '5+ years corporate law',
      'Tech industry experience',
      'Bilingual English/French'
    ],
    skills: ['Contract Law', 'Compliance', 'Intellectual Property', 'Negotiation', 'Risk Management'],
    isRemote: false,
    benefits: [
      'Comprehensive healthcare',
      'Pension plan',
      'Lunch vouchers',
      'Professional indemnity'
    ]
  },
  {
    id: '22',
    title: '3D Animator',
    company: {
      name: 'Animation Studios',
      logo: 'https://via.placeholder.com/48',
      industry: 'Entertainment',
      description: 'Animation and visual effects studio.'
    },
    location: {
      city: 'Vancouver',
      state: 'BC',
      country: 'Canada',
      coordinates: { lat: 49.2827, lng: -123.1207 }
    },
    type: 'Contract',
    experience: 'Mid Level',
    salary: {
      min: 40,
      max: 60,
      currency: 'CAD',
      period: 'hour'
    },
    postedDate: '2023-12-25T09:00:00Z',
    description: '12-month contract for animation project.',
    responsibilities: [
      'Create 3D animations',
      'Character modeling',
      'Scene composition',
      'Team collaboration'
    ],
    requirements: [
      '3+ years 3D animation',
      'Maya/Blender proficiency',
      'Portfolio required',
      'Animation principles knowledge'
    ],
    skills: ['Maya', 'Blender', '3D Animation', 'Character Modeling', 'Rigging'],
    isRemote: false,
    benefits: [
      'Overtime pay',
      'Studio facilities',
      'Creative environment',
      'Project completion bonus'
    ]
  },
  {
    id: '23',
    title: 'Environmental Scientist',
    company: {
      name: 'EcoSolutions Inc.',
      logo: 'https://via.placeholder.com/48',
      industry: 'Environmental',
      description: 'Environmental consulting firm.'
    },
    location: {
      city: 'Denver',
      state: 'CO',
      country: 'USA',
      coordinates: { lat: 39.7392, lng: -104.9903 }
    },
    type: 'Full-time',
    experience: 'Mid Level',
    salary: {
      min: 65000,
      max: 90000,
      currency: 'USD',
      period: 'year'
    },
    postedDate: '2023-12-24T14:45:00Z',
    description: 'Environmental assessment and consulting.',
    responsibilities: [
      'Field data collection',
      'Environmental impact assessments',
      'Report writing',
      'Regulatory compliance'
    ],
    requirements: [
      'MS in Environmental Science',
      '3+ years experience',
      'Fieldwork experience',
      'Report writing skills'
    ],
    skills: ['Environmental Assessment', 'Field Work', 'Data Analysis', 'Report Writing', 'GIS'],
    isRemote: false,
    benefits: [
      'Field work allowance',
      'Health benefits',
      'Professional certification',
      'Flexible fieldwork schedule'
    ]
  },
  {
    id: '24',
    title: 'E-commerce Manager',
    company: {
      name: 'Online Retail Group',
      logo: 'https://via.placeholder.com/48',
      industry: 'Retail',
      description: 'Online retail company.'
    },
    location: {
      city: 'Amsterdam',
      country: 'Netherlands',
      coordinates: { lat: 52.3676, lng: 4.9041 }
    },
    type: 'Full-time',
    experience: 'Senior',
    salary: {
      min: 70000,
      max: 100000,
      currency: 'EUR',
      period: 'year'
    },
    postedDate: '2023-12-23T10:30:00Z',
    description: 'Manage e-commerce operations and strategy.',
    responsibilities: [
      'E-commerce strategy',
      'Platform management',
      'Sales optimization',
      'Team leadership'
    ],
    requirements: [
      '5+ years e-commerce',
      'Shopify/Magento experience',
      'Analytical skills',
      'Team management experience'
    ],
    skills: ['E-commerce', 'Shopify', 'Digital Marketing', 'Analytics', 'Team Leadership'],
    isRemote: true,
    benefits: [
      'Performance bonus',
      'Remote work',
      'Product discounts',
      'Training budget'
    ]
  },
  {
    id: '25',
    title: 'Nurse Practitioner',
    company: {
      name: 'HealthFirst Medical',
      logo: 'https://via.placeholder.com/48',
      industry: 'Healthcare',
      description: 'Medical services provider.'
    },
    location: {
      city: 'Houston',
      state: 'TX',
      country: 'USA',
      coordinates: { lat: 29.7604, lng: -95.3698 }
    },
    type: 'Full-time',
    experience: 'Senior',
    salary: {
      min: 110000,
      max: 150000,
      currency: 'USD',
      period: 'year'
    },
    postedDate: '2023-12-22T08:00:00Z',
    description: 'Provide primary care services.',
    responsibilities: [
      'Patient care',
      'Diagnosis and treatment',
      'Medical documentation',
      'Patient education'
    ],
    requirements: [
      'NP certification',
      '5+ years experience',
      'State license',
      'Clinical experience'
    ],
    skills: ['Patient Care', 'Diagnosis', 'Medical Documentation', 'Clinical Skills', 'Communication'],
    isRemote: false,
    benefits: [
      'Malpractice insurance',
      'Health benefits',
      'Retirement plan',
      'Continuing education'
    ]
  },
  {
    id: '26',
    title: 'Game Developer (Unity)',
    company: {
      name: 'GameStudio X',
      logo: 'https://via.placeholder.com/48',
      industry: 'Gaming',
      description: 'Independent game development studio.'
    },
    location: {
      city: 'Tokyo',
      country: 'Japan',
      coordinates: { lat: 35.6762, lng: 139.6503 }
    },
    type: 'Full-time',
    experience: 'Mid Level',
    salary: {
      min: 6000000,
      max: 9000000,
      currency: 'JPY',
      period: 'year'
    },
    postedDate: '2023-12-21T15:15:00Z',
    description: 'Develop games using Unity engine.',
    responsibilities: [
      'Game mechanics development',
      'Unity programming',
      'Bug fixing',
      'Performance optimization'
    ],
    requirements: [
      '3+ years Unity experience',
      'C# proficiency',
      'Game development portfolio',
      '3D math knowledge'
    ],
    skills: ['Unity', 'C#', 'Game Development', '3D Math', 'Game Physics'],
    isRemote: false,
    benefits: [
      'Creative environment',
      'Flexible hours',
      'Game release bonuses',
      'Studio events'
    ]
  },
  {
    id: '27',
    title: 'Supply Chain Manager',
    company: {
      name: 'Logistics Solutions',
      logo: 'https://via.placeholder.com/48',
      industry: 'Logistics',
      description: 'Global logistics and supply chain company.'
    },
    location: {
      city: 'Dubai',
      country: 'UAE',
      coordinates: { lat: 25.2048, lng: 55.2708 }
    },
    type: 'Full-time',
    experience: 'Senior',
    salary: {
      min: 180000,
      max: 250000,
      currency: 'AED',
      period: 'year'
    },
    postedDate: '2023-12-20T12:00:00Z',
    description: 'Manage global supply chain operations.',
    responsibilities: [
      'Supply chain optimization',
      'Vendor management',
      'Inventory control',
      'Logistics coordination'
    ],
    requirements: [
      '7+ years supply chain',
      'International logistics',
      'ERP system experience',
      'Analytical skills'
    ],
    skills: ['Supply Chain Management', 'Logistics', 'Inventory Management', 'ERP', 'Analytics'],
    isRemote: false,
    benefits: [
      'Housing allowance',
      'Annual flight home',
      'Health insurance',
      'Performance bonus'
    ]
  },
  {
    id: '28',
    title: 'Architectural Designer',
    company: {
      name: 'Modern Architecture Firm',
      logo: 'https://via.placeholder.com/48',
      industry: 'Architecture',
      description: 'Architecture and design firm.'
    },
    location: {
      city: 'Copenhagen',
      country: 'Denmark',
      coordinates: { lat: 55.6761, lng: 12.5683 }
    },
    type: 'Full-time',
    experience: 'Mid Level',
    salary: {
      min: 500000,
      max: 700000,
      currency: 'DKK',
      period: 'year'
    },
    postedDate: '2023-12-19T10:45:00Z',
    description: 'Architectural design and project development.',
    responsibilities: [
      'Architectural design',
      'CAD drawings',
      'Client presentations',
      'Building code compliance'
    ],
    requirements: [
      'Architecture degree',
      '3+ years experience',
      'AutoCAD/Revit proficiency',
      'Portfolio required'
    ],
    skills: ['Architecture', 'AutoCAD', 'Revit', '3D Modeling', 'Building Codes'],
    isRemote: false,
    benefits: [
      'Professional memberships',
      'Design software',
      'Conference attendance',
      'Flexible work hours'
    ]
  },
  {
    id: '29',
    title: 'Digital Marketing Specialist',
    company: {
      name: 'Digital Growth Agency',
      logo: 'https://via.placeholder.com/48',
      industry: 'Marketing',
      description: 'Digital marketing agency.'
    },
    location: {
      city: 'Mexico City',
      country: 'Mexico',
      coordinates: { lat: 19.4326, lng: -99.1332 }
    },
    type: 'Full-time',
    experience: 'Mid Level',
    salary: {
      min: 35000,
      max: 50000,
      currency: 'MXN',
      period: 'month'
    },
    postedDate: '2023-12-18T13:00:00Z',
    description: 'Digital marketing campaigns and strategy.',
    responsibilities: [
      'Campaign management',
      'Social media marketing',
      'Content strategy',
      'Performance analysis'
    ],
    requirements: [
      '3+ years digital marketing',
      'Google Ads/Facebook Ads',
      'Analytics skills',
      'Content creation experience'
    ],
    skills: ['Digital Marketing', 'Social Media', 'Google Analytics', 'Content Strategy', 'SEO'],
    isRemote: true,
    benefits: [
      'Performance bonuses',
      'Remote work',
      'Training programs',
      'Flexible schedule'
    ]
  },
  {
    id: '30',
    title: 'Cloud Solutions Architect',
    company: {
      name: 'Cloud Consulting Group',
      logo: 'https://via.placeholder.com/48',
      industry: 'Cloud Consulting',
      description: 'Cloud migration and consulting services.'
    },
    location: {
      city: 'Zurich',
      country: 'Switzerland',
      coordinates: { lat: 47.3769, lng: 8.5417 }
    },
    type: 'Full-time',
    experience: 'Lead',
    salary: {
      min: 150000,
      max: 220000,
      currency: 'CHF',
      period: 'year'
    },
    postedDate: '2023-12-17T16:30:00Z',
    description: 'Design and implement cloud solutions.',
    responsibilities: [
      'Cloud architecture design',
      'Migration planning',
      'Technical leadership',
      'Client consultation'
    ],
    requirements: [
      '8+ years IT experience',
      'AWS/Azure certifications',
      'Solution architecture',
      'Leadership experience'
    ],
    skills: ['AWS', 'Azure', 'Cloud Architecture', 'Solution Design', 'Migration'],
    isRemote: true,
    benefits: [
      'High salary package',
      'Remote work',
      'Conference budget',
      'Home office setup'
    ]
  }
];

export const JOB_TYPES = [
  { value: 'full-time', label: 'Full-time' },
  { value: 'part-time', label: 'Part-time' },
  { value: 'contract', label: 'Contract' },
  { value: 'internship', label: 'Internship' },
  { value: 'remote', label: 'Remote' }
];

export const EXPERIENCE_LEVELS = [
  { value: 'entry', label: 'Entry Level' },
  { value: 'mid', label: 'Mid Level' },
  { value: 'senior', label: 'Senior' },
  { value: 'lead', label: 'Lead' },
  { value: 'executive', label: 'Executive' }
];

export const SALARY_RANGES = [
  '50000-80000',
  '80000-120000',
  '120000-160000',
  '160000-200000',
  '200000+'
];
