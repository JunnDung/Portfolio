export interface Project {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  language: string;
  stars: number;
  forks: number;
  featured: boolean;
  category: 'web' | 'mobile' | 'backend' | 'coursework';
}

export const projects: Project[] = [
  {
    id: 'smartorder',
    name: 'SmartOrder',
    description: 'Microservices backend for restaurant ordering',
    fullDescription: 'A comprehensive backend system built with microservices architecture simulating the sales process of a store, cafeteria, restaurant, or mini e-commerce platform. Implements TypeScript with Node.js, Express, and modern API design.',
    technologies: ['TypeScript', 'Node.js', 'Express', 'REST API', 'Microservices', 'MySQL'],
    githubUrl: 'https://github.com/JunnDung/SmartOrder-Microservices',
    language: 'TypeScript',
    stars: 0,
    forks: 0,
    featured: true,
    category: 'backend',
  },
  {
    id: 'carrental',
    name: 'CarRental',
    description: 'Full-stack car rental web application',
    fullDescription: 'A complete car rental management system with user authentication, vehicle browsing, booking management, and admin dashboard. Deployed on Vercel with PHP backend.',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS', 'Vercel'],
    githubUrl: 'https://github.com/JunnDung/CarRental',
    liveUrl: 'https://car-rental-theta-flax.vercel.app',
    language: 'PHP',
    stars: 0,
    forks: 0,
    featured: true,
    category: 'web',
  },
  {
    id: 'hydromate',
    name: 'HydroMate',
    description: 'Android water tracking mobile app',
    fullDescription: 'A mobile application designed to help users track their daily water intake and maintain healthy hydration habits. Built with Kotlin for Android platform.',
    technologies: ['Kotlin', 'Android', 'Jetpack Compose', 'Room Database'],
    githubUrl: 'https://github.com/JunnDung/HydroMate',
    language: 'Kotlin',
    stars: 0,
    forks: 0,
    featured: true,
    category: 'mobile',
  },
  {
    id: 'aura-retinal',
    name: 'AURA Retinal Screening',
    description: 'AI-powered retinal disease screening system',
    fullDescription: 'An advanced healthcare AI system for automated retinal screening using computer vision and machine learning. Built with TypeScript, featuring image processing, disease classification, and a modern web interface for medical professionals.',
    technologies: ['TypeScript', 'React', 'TensorFlow.js', 'Computer Vision', 'Machine Learning', 'Node.js'],
    githubUrl: 'https://github.com/JunnDung/AURA-Retinal-Screening-System',
    language: 'TypeScript',
    stars: 0,
    forks: 0,
    featured: true,
    category: 'web',
  },
  {
    id: 'pod-booking',
    name: 'POD Booking',
    description: 'Cinema POD seat booking system',
    fullDescription: 'Interactive cinema seat booking system with POD selection, showing schedules, and booking management. A web-based application for movie theater seat reservations.',
    technologies: ['JavaScript', 'HTML/CSS', 'DOM Manipulation', 'LocalStorage'],
    githubUrl: 'https://github.com/JunnDung/POD_Booking',
    language: 'JavaScript',
    stars: 0,
    forks: 0,
    featured: true,
    category: 'web',
  },
];

export const techStack = {
  languages: [
    { name: 'Java', icon: '☕' },
    { name: 'C++', icon: '⚡' },
    { name: 'JavaScript', icon: 'JS' },
    { name: 'TypeScript', icon: 'TS' },
    { name: 'SQL', icon: '⊞</' },
    { name: 'Python', icon: '🐍' },
    { name: 'Kotlin', icon: '🎯' },
    { name: 'PHP', icon: '🐘' },
  ],
  frontend: [
    { name: 'React', icon: '⚛️' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'Vite', icon: '⚡' },
    { name: 'HTML/CSS', icon: '🌐' },
  ],
  backend: [
    { name: 'Node.js', icon: '🟢' },
    { name: 'Express', icon: '🚂' },
    { name: 'REST API', icon: '🔗' },
    { name: 'MySQL', icon: '🗄️' },
  ],
  tools: [
    { name: 'Git', icon: '📊' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'VS Code', icon: '💻' },
    { name: 'Postman', icon: '📮' },
    { name: 'Android Studio', icon: '🤖' },
  ],
};

export const timeline = {
  education: {
    school: 'University of Transport Ho Chi Minh City (UTH)',
    degree: 'Bachelor of Information Technology',
    period: '2023 - Present',
    description: 'Currently in 3rd year, focusing on software engineering, database systems, and modern web technologies.',
  },
  experience: [
    {
      title: 'Personal Projects',
      company: 'Self-directed',
      period: '2023 - Present',
      description: 'Building real-world applications to enhance programming skills and create a portfolio of work.',
    },
    {
      title: 'Academic Projects',
      company: 'University Coursework',
      period: '2023 - Present',
      description: 'Completed various software engineering projects as part of coursework requirements.',
    },
  ],
};
