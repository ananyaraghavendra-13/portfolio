export interface ProjectItem {
  index: string;
  title: string;
  tag: string;
  description: string;
  tech: string[];
  features: string[];
  achievement?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: 'cpu' | 'layers' | 'boxes' | 'database' | 'brain-circuit' | 'workflow' | 'sparkles' | 'badge-check';
  items: string[];
}

export interface ExperienceItem {
  role: string;
  org: string;
  meta: string;
  body: string;
  current?: boolean;
}

export interface CapabilityItem {
  iconName: 'layers' | 'boxes' | 'brain-circuit' | 'database' | 'workflow';
  title: string;
  body: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
}

export interface EducationItem {
  title: string;
  org: string;
  period: string;
  score: string;
}

export interface AchievementItem {
  iconName: 'trophy' | 'award' | 'sparkles';
  text: string;
}

export const personalInfo = {
  name: 'Ananya R',
  role: 'Information Science & Engineering Student | Junior Developer Intern',
  email: 'ananyaraghavendra11@gmail.com',
  location: 'Bengaluru, India',
  github: 'https://github.com/ananyaraghavendra-13',
  linkedin: 'https://www.linkedin.com/in/ananya-raghavendra-878516326',
  resumeUrl: '',
  cgpa: '8.3 / 10',
  degreeTimeline: 'B.E. ISE · 2023–2027',
  profileImage: '/profile.jpg',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const aboutData = {
  bio: "I'm an Information Science & Engineering student passionate about software development, full-stack technologies, machine learning and automation. I enjoy learning new technologies and building practical solutions to real-world problems.",
  tags: ['Full-Stack', 'Machine Learning', 'Databases', 'Automation'],
  details: [
    { label: 'Degree', value: 'B.E. Information Science & Engineering' },
    { label: 'Institute', value: 'Sai Vidya Institute of Technology' },
    { label: 'Location', value: 'Bengaluru, India' },
    { label: 'CGPA', value: '8.3 / 10' },
    { label: 'Duration', value: '2023 – 2027' },
  ],
};

export const skillsData: SkillCategory[] = [
  {
    iconName: 'cpu',
    title: 'Programming',
    items: ['Java', 'C', 'Python', 'SQL'],
  },
  {
    iconName: 'layers',
    title: 'Frontend',
    items: ['React', 'HTML5', 'CSS3'],
  },
  {
    iconName: 'boxes',
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    iconName: 'database',
    title: 'Database',
    items: ['MySQL'],
  },
  {
    iconName: 'brain-circuit',
    title: 'Machine Learning & Data',
    items: ['Pandas', 'NumPy', 'Scikit-learn', 'Machine Learning'],
  },
  {
    iconName: 'workflow',
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
  {
    iconName: 'sparkles',
    title: 'Analytics',
    items: ['Tableau', 'Power BI'],
  },
  {
    iconName: 'badge-check',
    title: 'Other',
    items: ['Cybersecurity', 'Automation'],
  },
];

export const projectsData: ProjectItem[] = [
  {
    index: '01',
    title: 'Disease Outbreak Tracker',
    tag: 'MERN Full-Stack',
    description: 'Developed a real-time disease outbreak monitoring dashboard using the MERN stack.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    features: [
      'Real-time outbreak monitoring',
      'Interactive maps showing affected regions',
      'Health metric visualization',
      'Outbreak trend tracking',
      'Early detection workflows',
      'Automated public health alerts',
      'Safety guidelines',
    ],
    featured: true,
  },
  {
    index: '02',
    title: 'Water Quality Analysis using Machine Learning',
    tag: 'Machine Learning',
    description: 'Built a machine learning classification system that analyzes eight chemical parameters to assess water quality.',
    tech: ['Python', 'Pandas', 'Scikit-learn'],
    achievement: 'Up to 96–98% classification accuracy',
    features: [
      'Parameters: pH, Calcium, Magnesium, Chlorine, Benzene, THM, Copper, Nitrate',
      'Models: Random Forest, SVM, KNN, Decision Tree, Naive Bayes',
      'Classifies water suitability for drinking, irrigation and industrial use',
      'Predicts potential health risks from unsafe samples',
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    role: 'Junior Developer Intern',
    org: 'BackBoneHub.in — IT Team',
    meta: 'Bengaluru · 4-month internship',
    body: 'Working with the IT team as a junior developer intern, gaining practical industry experience in day-to-day software development.',
    current: true,
  },
];

export const capabilitiesData: CapabilityItem[] = [
  {
    iconName: 'layers',
    title: 'Web Development',
    body: 'Building responsive and user-friendly websites and web applications.',
  },
  {
    iconName: 'boxes',
    title: 'Full-Stack Development',
    body: 'Developing complete web applications across frontend, backend and APIs.',
  },
  {
    iconName: 'brain-circuit',
    title: 'Machine Learning Solutions',
    body: 'Building machine-learning-based classification and prediction solutions.',
  },
  {
    iconName: 'database',
    title: 'Database Development',
    body: 'Designing and managing databases and implementing efficient data operations.',
  },
  {
    iconName: 'workflow',
    title: 'Automation',
    body: 'Developing technology-driven solutions to reduce repetitive manual work.',
  },
];

export const certificationsData: CertificationItem[] = [
  {
    title: 'Google Cloud Data Analytics Certificate',
    issuer: 'Google',
    year: 'Mar 2026',
  },
  {
    title: 'AI Agents with MongoDB',
    issuer: 'MongoDB',
    year: 'Apr 2026',
    credentialId: 'MDBgv8t7bivv9',
  },
  {
    title: 'RAG with MongoDB',
    issuer: 'MongoDB',
    year: 'Apr 2026',
    credentialId: 'MDB3x36e6zxmb',
  },
  {
    title: 'Vector Search Fundamentals',
    issuer: 'MongoDB',
    year: 'Apr 2026',
    credentialId: 'MDBk2887b2x7h',
  },
  {
    title: 'AI Data Strategy with MongoDB',
    issuer: 'MongoDB',
    year: 'Apr 2026',
    credentialId: 'MDBa6wrtgosyx',
  },
  {
    title: 'Artificial Intelligence Fundamentals',
    issuer: 'IBM',
    year: 'Aug 2025',
  },
  {
    title: 'Essentials Automation Certification - 2024',
    issuer: 'Automation Anywhere',
    year: 'Nov 2025',
    credentialId: '167923989',
  },
];

export const educationData: EducationItem[] = [
  {
    title: 'B.E. Information Science & Engineering',
    org: 'Sai Vidya Institute of Technology, Bengaluru',
    period: '2023 – 2027',
    score: 'CGPA: 8.3/10',
  },
  {
    title: 'Pre-University Education',
    org: 'Vidya Mandira PU College',
    period: '2021 – 2023',
    score: '91%',
  },
  {
    title: 'Secondary Education',
    org: 'Poornaprajna Education Center, Bengaluru',
    period: '2020',
    score: '98%',
  },
];

export const achievementsData: AchievementItem[] = [
  {
    iconName: 'trophy',
    text: 'Maintained 8.3 CGPA in Information Science & Engineering at Sai Vidya Institute of Technology',
  },
  {
    iconName: 'award',
    text: 'Achieved up to 98% accuracy in Water Quality ML project',
  },
  {
    iconName: 'sparkles',
    text: 'Built technical projects spanning full-stack development, database management and machine learning',
  },
];
