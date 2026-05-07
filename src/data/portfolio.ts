export const profile = {
  name: 'Vengateshwaran N',
  shortName: 'Vengat',
  role: 'Java, PHP and AI-Aware Full-Stack Developer',
  headline:
    'I build reliable academic workflow systems, automation tools and data-driven products with clean engineering practices.',
  summary:
    'MCA software professional with hands-on experience in institutional web applications, backend workflows, database-backed modules and applied AI projects.',
  email: 'nvengatesh7373@gmail.com',
  phone: '+91 8610622718',
  location: 'Tamil Nadu, India',
  portfolio: 'https://vengat.vercel.app',
  github: 'https://github.com/003vengatesh',
  linkedin: 'https://www.linkedin.com/in/vengateshwaran-n-66437926b/',
  twitter: 'https://twitter.com/vengat_x',
};

export const metrics = [
  { value: '15', label: 'Public GitHub repositories' },
  { value: '1,000+', label: 'Students supported through course workflows' },
  { value: '5+', label: 'Institutional modules shipped' },
  { value: '2025', label: 'Web developer since' },
];

export const skillGroups = [
  {
    title: 'Languages',
    items: ['Java', 'PHP', 'C++', 'Python', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Backend and Frameworks',
    items: ['CodeIgniter 4', 'Django', 'FastAPI', 'REST APIs', 'Role-Based Access Control'],
  },
  {
    title: 'Frontend',
    items: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive UI'],
  },
  {
    title: 'Data and AI',
    items: ['MySQL', 'Pandas', 'Scikit-learn', 'XGBoost', 'NLP', 'LLM Integration'],
  },
  {
    title: 'Engineering',
    items: ['OOP', 'File I/O', 'Database Design', 'Workflow Automation', 'Performance Tuning'],
  },
];

export const skillLevels = [
  { name: 'Java', level: 86 },
  { name: 'PHP / CodeIgniter', level: 88 },
  { name: 'MySQL', level: 86 },
  { name: 'Python', level: 84 },
  { name: 'React / TypeScript', level: 78 },
  { name: 'AI / Machine Learning', level: 78 },
];

export const experiences = [
  {
    role: 'Web Developer',
    company: 'NPR Group of Institutions',
    period: 'Jul 2025 - Present',
    location: 'Dindigul, Tamil Nadu',
    highlights: [
      'Designed and maintained internal applications for academic and administrative workflows.',
      'Optimized database and backend processes for high-volume institutional usage.',
      'Built modular components for letters, assessments, appointments, course registration and slot booking.',
      'Improved operational visibility through tracking, reporting and role-based workflows.',
    ],
  },
  {
    role: 'Data Science and Business Analytics Intern',
    company: 'The Sparks Foundation',
    period: 'Nov 2023 - Jan 2024',
    location: 'Remote',
    highlights: [
      'Worked on analytics problems using Python, Pandas and visualization workflows.',
      'Converted business datasets into clear insights and model-ready features.',
    ],
  },
  {
    role: 'Data Science Intern',
    company: 'Oasis Infobyte',
    period: 'Oct 2023 - Nov 2023',
    location: 'Remote',
    highlights: [
      'Built ML notebooks for classification, prediction, analysis and NLP tasks.',
      'Practiced end-to-end preprocessing, model training and evaluation workflows.',
    ],
  },
  {
    role: 'Machine Learning Intern',
    company: 'CodSoft',
    period: 'Sep 2023 - Oct 2023',
    location: 'Remote',
    highlights: [
      'Implemented supervised learning projects for classification and predictive analytics.',
      'Worked on fraud detection, churn prediction, genre classification and related ML tasks.',
    ],
  },
];

export const education = [
  {
    degree: 'Master of Computer Applications',
    institution: 'Bharathidasan University',
    period: '2024 - 2026',
    detail: 'Pursuing with 8.2 CGPA',
  },
  {
    degree: 'B.Sc. Computer Science',
    institution: 'NPR Arts and Science College',
    period: '2021 - 2024',
    detail: 'Graduated with 80%',
  },
];

export const certifications = [
  'Cybersecurity Threat Landscape - LinkedIn',
  'Machine Learning - Great Learning',
  'Deep Learning - Great Learning / Infosys Springboard',
  'Microsoft Power BI - Great Learning',
  'Tableau Desktop - Udemy',
  'Advanced Python 3 - Udemy',
  'MySQL Database Development Mastery - Udemy',
  'Object-Oriented Programming in Python - Udemy',
];

export const projectTrackMeta = [
  {
    id: 'academic',
    label: 'Final-Year Projects',
    description: 'MCA and B.Sc Computer Science capstone work with stronger engineering depth.',
  },
  {
    id: 'real-time',
    label: 'Real-Time Projects',
    description: 'Production-style systems, institutional modules and public product experiments.',
  },
  {
    id: 'internship',
    label: 'Internship Projects',
    description: 'Machine learning, analytics and notebook-based projects completed during internships.',
  },
] as const;

export type ProjectTrack = (typeof projectTrackMeta)[number]['id'];
export type ProjectLanguage = 'Python' | 'PHP' | 'Java' | 'TypeScript' | 'HTML/CSS' | 'Markdown';

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  track: ProjectTrack;
  language: ProjectLanguage;
  source: string;
  description: string;
  impact: string[];
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const languageOrder: ProjectLanguage[] = [
  'Python',
  'PHP',
  'Java',
  'TypeScript',
  'HTML/CSS',
  'Markdown',
];

export const projects: Project[] = [
  {
    id: 'green-software-optimizer',
    title: 'Green Software Optimizer',
    subtitle: 'MCA final-year project',
    track: 'academic',
    language: 'Python',
    source: 'GitHub',
    description:
      'Static analysis, energy prediction, optimization and carbon reporting platform for Python software.',
    impact: [
      'Combines AST analysis, feature extraction, ML scoring and optimization recommendations.',
      'Includes FastAPI services, Streamlit UI, reporting, CI/CD support and test coverage.',
      'Uses CodeCarbon-style measurement concepts and predictive modeling for greener software decisions.',
    ],
    tags: ['Python', 'FastAPI', 'Streamlit', 'XGBoost', 'CodeCarbon', 'Static Analysis'],
    github: 'https://github.com/003vengatesh/green_software_optimizer',
    featured: true,
  },
  {
    id: 'cuby-assistant',
    title: 'Cuby Assistant',
    subtitle: 'B.Sc Computer Science project',
    track: 'academic',
    language: 'Python',
    source: 'GitHub',
    description:
      'Voice-enabled AI assistant with speech recognition, text-to-speech, NLP conversation and desktop automation.',
    impact: [
      'Automates common desktop actions such as search, screenshots, system commands and media control.',
      'Integrates web scraping, Wikipedia lookup, YouTube actions and chatbot-style responses.',
      'Built as a Django-backed project with assistant logic and user-facing pages.',
    ],
    tags: ['Python', 'Django', 'Voice Assistant', 'NLP', 'Automation'],
    github: 'https://github.com/003vengatesh/Cuby_Assistant',
    featured: true,
  },
  {
    id: 'student-grade-management',
    title: 'Student Grade Management System',
    subtitle: 'Java resume project',
    track: 'academic',
    language: 'Java',
    source: 'Resume',
    description:
      'Java application for managing student records, grades and personal details with persistent file storage.',
    impact: [
      'Implements CRUD operations for student data and grade records.',
      'Uses File I/O for persistent storage across sessions.',
      'Applies OOP principles for modular, maintainable design.',
    ],
    tags: ['Java', 'OOP', 'File I/O', 'CRUD'],
    featured: true,
  },
  {
    id: 'letter-communication',
    title: 'Institutional Letter Communication Portal',
    subtitle: 'Real-time institutional system',
    track: 'real-time',
    language: 'PHP',
    source: 'GitHub',
    description:
      'CodeIgniter-based official communication workflow for NPR Institutional Governance Council.',
    impact: [
      'Digitizes request, approval, signature and communication tracking workflows.',
      'Supports role-specific dashboards for admin, departments, directors, staff, students and CAO users.',
      'Adds document generation, signatures, notifications and report visibility.',
    ],
    tags: ['PHP', 'CodeIgniter 4', 'MySQL', 'RBAC', 'Dompdf'],
    github: 'https://github.com/003vengatesh/Letter_Communication_Portal',
    featured: true,
  },
  {
    id: 'assessment-portal',
    title: 'Assessment and Exam Portal',
    subtitle: 'Letter portal module',
    track: 'real-time',
    language: 'PHP',
    source: 'GitHub',
    description:
      'Assessment module for test configuration, question banks, participants, attempts, review and results.',
    impact: [
      'Manages assessment tests, papers, target users and grading configuration.',
      'Tracks attempts, responses, revisions, events and result data.',
      'Supports admin control for high-volume academic test workflows.',
    ],
    tags: ['PHP', 'CodeIgniter 4', 'Assessment', 'Question Bank', 'Reports'],
    github: 'https://github.com/003vengatesh/Letter_Communication_Portal/tree/main/app/Controllers/Assessment',
    featured: true,
  },
  {
    id: 'appointment-workflow',
    title: 'Appointment Booking Workflow',
    subtitle: 'Letter portal module',
    track: 'real-time',
    language: 'PHP',
    source: 'GitHub',
    description:
      'Appointment booking module for meeting requests, venues, responsible users and approval workflows.',
    impact: [
      'Coordinates appointments across admin, CAO, director and staff roles.',
      'Structures meeting person, venue and booking data through dedicated models.',
      'Reduces manual scheduling and approval follow-up work.',
    ],
    tags: ['PHP', 'MySQL', 'Scheduling', 'Workflow', 'RBAC'],
    github: 'https://github.com/003vengatesh/Letter_Communication_Portal/tree/main/app/Controllers/Admin',
  },
  {
    id: 'course-registration',
    title: 'Foundation Course Registration Platform',
    subtitle: '1,000+ active student workflow',
    track: 'real-time',
    language: 'PHP',
    source: 'GitHub',
    description:
      'Scalable course registration and allocation platform for student enrollment, eligibility and tutor/venue management.',
    impact: [
      'Handles course eligibility by college, department and academic year.',
      'Supports registration, freeze state, assessment topics, reward points and tutor history.',
      'Designed to reduce manual processing for large student batches.',
    ],
    tags: ['PHP', 'CodeIgniter 4', 'MySQL', 'Course Registration', 'Student Workflow'],
    github: 'https://github.com/003vengatesh/Letter_Communication_Portal/tree/main/app/Controllers/FsCourse',
    featured: true,
  },
  {
    id: 'slot-booking-attendance',
    title: 'Skill Slot Booking and Attendance System',
    subtitle: 'Letter portal module',
    track: 'real-time',
    language: 'PHP',
    source: 'GitHub',
    description:
      'Slot creation, booking, attendance marking and reporting module for structured skill sessions.',
    impact: [
      'Supports slot creation, booking, manual attendance and attendance register workflows.',
      'Includes reporting paths for slot booking and attendance tracking.',
      'Improves visibility across session planning and participation records.',
    ],
    tags: ['PHP', 'Slot Booking', 'Attendance', 'Reports', 'MySQL'],
    github: 'https://github.com/003vengatesh/Letter_Communication_Portal/tree/main/app/Controllers/SlotBooking',
  },
  {
    id: 'optistudio',
    title: 'OptiStudio Image Optimiser',
    subtitle: 'Image optimization tool',
    track: 'real-time',
    language: 'Python',
    source: 'GitHub',
    description:
      'Face-aware cropping and image optimization utility for cleaner image preparation workflows.',
    impact: [
      'Focuses on image quality, cropping intelligence and optimized output handling.',
      'Useful for profile images, content assets and visual publishing pipelines.',
    ],
    tags: ['Python', 'Image Processing', 'Optimization', 'Computer Vision'],
    github: 'https://github.com/003vengatesh/OptiStudio_Image_Optimiser',
  },
  {
    id: 'medmate-ai',
    title: 'MedMateAI',
    subtitle: 'AI healthcare assistant',
    track: 'real-time',
    language: 'Python',
    source: 'GitHub',
    description:
      'AI-powered healthcare assistant using FastAPI, React, MongoDB and LLM-based guidance flows.',
    impact: [
      'Combines backend APIs with conversational healthcare guidance.',
      'Explores full-stack AI application architecture using modern services.',
    ],
    tags: ['Python', 'FastAPI', 'React', 'MongoDB', 'LLM'],
    github: 'https://github.com/003vengatesh/MedMateAI',
    featured: true,
  },
  {
    id: 'portfolio',
    title: 'Portfolio Platform',
    subtitle: 'Current professional website',
    track: 'real-time',
    language: 'TypeScript',
    source: 'GitHub',
    description:
      'React and TypeScript portfolio frontend designed for recruiter-ready project storytelling and resume access.',
    impact: [
      'Centralizes personal brand, project catalogue, resume and contact entry points.',
      'Built as a Vite app suitable for Vercel deployment.',
    ],
    tags: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/003vengatesh/portfolio',
    demo: profile.portfolio,
  },
  {
    id: 'basic-chatbot',
    title: 'Basic Chatbot Application',
    subtitle: 'Conversational UI project',
    track: 'real-time',
    language: 'HTML/CSS',
    source: 'GitHub',
    description:
      'Frontend chatbot application demonstrating conversational UI structure and basic web interaction patterns.',
    impact: [
      'Shows practical HTML, CSS and client-side interface construction.',
      'Useful as a lightweight foundation for chatbot interaction experiments.',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Chatbot UI'],
    github: 'https://github.com/003vengatesh/Basic-chatbot-application',
  },
  {
    id: 'legacy-portfolio',
    title: 'Legacy GitHub Pages Portfolio',
    subtitle: 'Earlier portfolio iteration',
    track: 'real-time',
    language: 'HTML/CSS',
    source: 'GitHub',
    description:
      'Earlier static portfolio repository that documents the evolution from a simple web presence to the current React portfolio.',
    impact: [
      'Preserves earlier personal website work and public hosting experimentation.',
      'Shows progression in frontend structure and portfolio maturity.',
    ],
    tags: ['HTML', 'CSS', 'GitHub Pages'],
    github: 'https://github.com/003vengatesh/003vengatesh.github.io',
  },
  {
    id: 'github-profile',
    title: 'GitHub Profile Repository',
    subtitle: 'Developer profile content',
    track: 'real-time',
    language: 'Markdown',
    source: 'GitHub',
    description:
      'Profile README repository used to present developer identity, skills, links and public GitHub presence.',
    impact: [
      'Maintains profile-level visibility for recruiters and collaborators.',
      'Connects public repositories, skills and contact information.',
    ],
    tags: ['Markdown', 'GitHub Profile', 'Developer Branding'],
    github: 'https://github.com/003vengatesh/003vengatesh',
  },
  {
    id: 'codsoft-ml',
    title: 'CODSOFT Machine Learning Suite',
    subtitle: 'Internship project collection',
    track: 'internship',
    language: 'Python',
    source: 'GitHub',
    description:
      'Machine learning internship projects covering classification, NLP and predictive modeling tasks.',
    impact: [
      'Includes task folders for applied ML implementation and documentation.',
      'Covers practical model-building workflows with real datasets.',
    ],
    tags: ['Python', 'Jupyter Notebook', 'Machine Learning', 'NLP', 'Classification'],
    github: 'https://github.com/003vengatesh/CODSOFT/tree/main/Machine%20Learning',
  },
  {
    id: 'codsoft-ds',
    title: 'CODSOFT Data Science Tasks',
    subtitle: 'Internship notebook collection',
    track: 'internship',
    language: 'Python',
    source: 'GitHub',
    description:
      'Data science internship notebooks for analysis, prediction and model evaluation tasks.',
    impact: [
      'Documents multiple notebook-based assignments from preprocessing to results.',
      'Demonstrates applied Python analytics and ML experimentation.',
    ],
    tags: ['Python', 'Jupyter Notebook', 'Data Science', 'Analytics'],
    github: 'https://github.com/003vengatesh/CODSOFT/tree/main/Data%20Science',
  },
  {
    id: 'oasis-infobyte',
    title: 'OASIS INFOBYTE Data Science Projects',
    subtitle: 'Internship project collection',
    track: 'internship',
    language: 'Python',
    source: 'GitHub',
    description:
      'Notebook projects for unemployment analysis, car price prediction, iris classification, sales prediction and spam detection.',
    impact: [
      'Covers regression, classification, NLP and exploratory analysis.',
      'Shows consistent notebook delivery across multiple internship assignments.',
    ],
    tags: ['Python', 'Jupyter Notebook', 'Regression', 'Classification', 'NLP'],
    github: 'https://github.com/003vengatesh/OASIS-INFOBYTE',
  },
  {
    id: 'sales-prediction',
    title: 'Sales Prediction',
    subtitle: 'Machine learning notebook',
    track: 'internship',
    language: 'Python',
    source: 'GitHub',
    description:
      'Predictive analytics notebook for estimating sales outcomes from structured business data.',
    impact: [
      'Applies data preprocessing, visualization and model training steps.',
      'Demonstrates business-oriented regression workflow practice.',
    ],
    tags: ['Python', 'Jupyter Notebook', 'Regression', 'Sales Analytics'],
    github: 'https://github.com/003vengatesh/Sales-Prediction',
  },
  {
    id: 'iris-classification',
    title: 'Iris Flower Classification',
    subtitle: 'Classification notebook',
    track: 'internship',
    language: 'Python',
    source: 'GitHub',
    description:
      'Classic supervised learning project for classifying iris species from measured flower features.',
    impact: [
      'Practices feature understanding, classifier training and model evaluation.',
      'Useful baseline for explaining classification fundamentals.',
    ],
    tags: ['Python', 'Jupyter Notebook', 'Classification', 'Scikit-learn'],
    github: 'https://github.com/003vengatesh/Iris-Flower-Classification',
  },
  {
    id: 'titanic-survival',
    title: 'Titanic Survival Prediction',
    subtitle: 'Classification notebook',
    track: 'internship',
    language: 'Python',
    source: 'GitHub',
    description:
      'Predictive ML notebook for estimating Titanic passenger survival using structured dataset features.',
    impact: [
      'Covers data cleaning, feature handling and classifier evaluation.',
      'Demonstrates beginner-to-intermediate ML workflow discipline.',
    ],
    tags: ['Python', 'Jupyter Notebook', 'Classification', 'Data Cleaning'],
    github: 'https://github.com/003vengatesh/Titanic-Survival-Prediction',
  },
  {
    id: 'boston-pricing',
    title: 'Boston House Pricing Prediction',
    subtitle: 'Regression notebook',
    track: 'internship',
    language: 'Python',
    source: 'GitHub',
    description:
      'Regression notebook for predicting housing prices from structured property and neighborhood variables.',
    impact: [
      'Applies supervised regression, evaluation and feature interpretation.',
      'Shows core predictive modeling practice with a benchmark dataset.',
    ],
    tags: ['Python', 'Jupyter Notebook', 'Regression', 'Prediction'],
    github: 'https://github.com/003vengatesh/Boston-House-Pricing-Prediction',
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
