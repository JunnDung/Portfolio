export interface Project {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  language: string;
  contribution?: 'Personal project' | 'Team contribution';
  private?: boolean;
  featured: boolean;
  category: 'ai' | 'rag' | 'web' | 'mobile' | 'backend' | 'coursework';
}

export const projects: Project[] = [
  {
    id: 'bien-so-viet',
    name: 'Biển Số Việt',
    description: 'Vietnamese license plate detection and OCR',
    fullDescription: 'Fine-tuned YOLO11n and CCT S v2 OCR for images, camera and video. Exported OCR to ONNX and added temporal consensus, quality checks, recognition history and CSV export through FastAPI and SQLite.',
    technologies: ['Python', 'YOLO11n', 'PyTorch', 'ONNX Runtime', 'FastAPI', 'SQLite'],
    githubUrl: 'https://github.com/JunnDung/vietnam-license-plate-recognition',
    language: 'Python',
    contribution: 'Personal project',
    featured: true,
    category: 'ai',
  },
  {
    id: 'zoneguard',
    name: 'ZoneGuard',
    description: 'Vehicle tracking and restricted-zone alerts',
    fullDescription: 'Fine-tuned a five-class YOLO11 detector and combined ByteTrack with polygon zones, dwell-time confirmation and duplicate-alert control. Built a dashboard with evidence snapshots, session history and CSV/JSON exports.',
    technologies: ['Python', 'YOLO11', 'ByteTrack', 'OpenCV', 'FastAPI', 'SQLite'],
    githubUrl: 'https://github.com/JunnDung/restricted-zone-vehicle-detection',
    language: 'Python',
    contribution: 'Personal project',
    featured: true,
    category: 'ai',
  },
  {
    id: 'uth-library-rag',
    name: 'UTH Library Assistant',
    description: 'Library search and source-grounded RAG',
    fullDescription: 'Contributed hybrid retrieval, Qwen3 answers with source citations, metadata ingestion and follow-up search to the team project. Added embedding fine-tuning, ONNX export and retrieval evaluation; the candidate embedding remains experimental.',
    technologies: ['Python', 'FastAPI', 'React', 'Qdrant', 'FastEmbed', 'Ollama'],
    githubUrl: 'https://github.com/LeSiTrung/Group4-HKDN',
    language: 'Python',
    contribution: 'Team contribution',
    featured: true,
    category: 'rag',
  },
  {
    id: 'traffic-lens',
    name: 'Traffic Lens',
    description: 'Five-class vehicle tracking and counting',
    fullDescription: 'Fine-tuned YOLO11n on VisDrone and integrated ByteTrack for directional line-crossing counts. Built a video dashboard with annotated output, progress, cancellation and downloadable statistics. Academic prototype with camera-specific tracking limitations.',
    technologies: ['Python', 'YOLO11n', 'ByteTrack', 'OpenCV', 'FastAPI', 'VisDrone'],
    githubUrl: 'https://github.com/JunnDung/vehicle-type-recognition',
    language: 'Python',
    contribution: 'Personal project',
    private: true,
    featured: true,
    category: 'ai',
  },
  {
    id: 'tcsa',
    name: 'TCSA',
    description: 'Vietnamese toxic-comment classification',
    fullDescription: 'Implemented the Naive Bayes module in a team coursework project using Vietnamese text preprocessing, TF-IDF and class-imbalance handling on ViHSD. Compared classification results with the team\'s MLP module.',
    technologies: ['Python', 'scikit-learn', 'TF-IDF', 'Naive Bayes', 'NLP'],
    githubUrl: 'https://github.com/JunnDung/TriTueNhanTao',
    language: 'Python',
    contribution: 'Team contribution',
    featured: true,
    category: 'ai',
  },
  {
    id: 'traffic-signs',
    name: 'Vietnamese Traffic Sign Recognition',
    description: 'Team coursework: YOLO detection with HOG/HSV features and SVM classification.',
    fullDescription: 'Contributed to a team computer vision project combining a single-class YOLO detector, image preprocessing, HOG/HSV features and an SVM classifier for Vietnamese traffic signs.',
    technologies: ['Python', 'OpenCV', 'scikit-learn', 'YOLO11n', 'HOG', 'SVM'],
    githubUrl: 'https://github.com/JunnDung/XuLiAnhVaThiGiacMayTinh',
    language: 'Python',
    contribution: 'Team contribution',
    featured: false,
    category: 'coursework',
  },
  {
    id: 'smartorder',
    name: 'SmartOrder',
    description: 'Microservices backend for restaurant ordering',
    fullDescription: 'A comprehensive backend system built with microservices architecture simulating the sales process of a store, cafeteria, restaurant, or mini e-commerce platform. Implements TypeScript with Node.js, Express, and modern API design.',
    technologies: ['TypeScript', 'Node.js', 'Express', 'REST API', 'Microservices', 'MySQL'],
    language: 'TypeScript',
    featured: false,
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
    featured: false,
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
    featured: false,
    category: 'mobile',
  },
  {
    id: 'aura-retinal',
    name: 'AURA Retinal Screening',
    description: 'Retinal screening application prototype',
    fullDescription: 'Contributed AI service integration, dashboards and backend workflows to a team retinal-screening project. Connected the web application to a Python FastAPI analysis service. Academic prototype; not clinically validated.',
    technologies: ['TypeScript', 'React', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/JunnDung/AURA-Retinal-Screening-System',
    language: 'TypeScript',
    contribution: 'Team contribution',
    featured: true,
    category: 'ai',
  },
  {
    id: 'pod-booking',
    name: 'POD Booking',
    description: 'Cinema POD seat booking system',
    fullDescription: 'Interactive cinema seat booking system with POD selection, showing schedules, and booking management. A web-based application for movie theater seat reservations.',
    technologies: ['JavaScript', 'HTML/CSS', 'DOM Manipulation', 'LocalStorage'],
    githubUrl: 'https://github.com/JunnDung/POD_Booking',
    language: 'JavaScript',
    featured: false,
    category: 'web',
  },
];

export const techStack = {
  languages: [
    { name: 'Python', icon: '🐍' },
    { name: 'TypeScript', icon: 'TS' },
    { name: 'JavaScript', icon: 'JS' },
    { name: 'SQL', icon: 'SQL' },
    { name: 'Java', icon: '☕' },
    { name: 'C++', icon: '⚡' },
    { name: 'Kotlin', icon: '🎯' },
    { name: 'PHP', icon: '🐘' },
  ],
  ai: [
    { name: 'PyTorch', icon: '🔥' },
    { name: 'YOLO11', icon: '👁' },
    { name: 'OpenCV', icon: '📷' },
    { name: 'scikit-learn', icon: 'ML' },
    { name: 'ONNX Runtime', icon: '⚙' },
    { name: 'ByteTrack', icon: '↗' },
  ],
  llm: [
    { name: 'RAG', icon: '🔎' },
    { name: 'Qdrant', icon: '◈' },
    { name: 'FastEmbed', icon: '↔' },
    { name: 'Ollama', icon: '🦙' },
    { name: 'Qwen3', icon: 'Q' },
    { name: 'Retrieval Evaluation', icon: '✓' },
  ],
  frontend: [
    { name: 'React', icon: '⚛️' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'Vite', icon: '⚡' },
    { name: 'HTML/CSS', icon: '🌐' },
  ],
  backend: [
    { name: 'FastAPI', icon: '⚡' },
    { name: 'SQLite', icon: '🗃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Express', icon: '🚂' },
    { name: 'REST API', icon: '🔗' },
    { name: 'MySQL', icon: '🗄️' },
  ],
  tools: [
    { name: 'Git', icon: '📊' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Google Colab', icon: 'GPU' },
    { name: 'VS Code', icon: '💻' },
    { name: 'Postman', icon: '📮' },
    { name: 'Android Studio', icon: '🤖' },
  ],
};

export const learningHighlights = [
  {
    title: 'Training & evaluation',
    description: 'Fine-tuning detectors and OCR, separating train/validation/test data, comparing baselines, and reading mAP, precision/recall and character error rate.',
    href: 'https://github.com/JunnDung/vietnam-license-plate-recognition#kết-quả-đánh-giá',
  },
  {
    title: 'Computer vision pipelines',
    description: 'Combining detection, tracking, temporal consensus and polygon rules, then connecting inference to APIs, storage and reviewable evidence.',
    href: 'https://github.com/JunnDung/restricted-zone-vehicle-detection',
  },
  {
    title: 'Retrieval & grounded answers',
    description: 'Applying chunking, hybrid search and source citations; experimenting with embedding fine-tuning and measuring retrieval with nDCG@5.',
    href: 'https://github.com/LeSiTrung/Group4-HKDN/pull/2',
  },
];

export const timeline = {
  education: {
    school: 'University of Transport Ho Chi Minh City (UTH)',
    degree: 'Bachelor of Information Technology',
    period: '2023 - Present',
    description: 'Studying Information Technology, combining software engineering and databases with applied machine learning, computer vision and a library RAG project during the Enterprise Semester.',
  },
  experience: [
    {
      title: 'Personal Projects',
      company: 'Self-directed',
      period: '2023 - Present',
      description: 'Building Python computer vision applications for license plate recognition, vehicle tracking and restricted-zone alerts, from dataset preparation and fine-tuning to APIs and dashboards.',
    },
    {
      title: 'Academic Projects',
      company: 'University Coursework',
      period: '2023 - Present',
      description: 'Team contributions across Vietnamese text classification, traffic sign recognition, retinal-screening software and the UTH Library Assistant. Recent work covers grounded RAG, metadata pipelines and experimental embedding evaluation.',
    },
  ],
};
