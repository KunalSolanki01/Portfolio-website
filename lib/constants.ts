export const PERSONAL_INFO = {
  name: 'Kunal Solanki',
  role: 'Frontend Developer',
  university: 'Parul University',
  email: 'kunalsol2005@gmail.com',
  phone: '9511501034',
  linkedin: 'https://www.linkedin.com/in/kunal-solanki-642220321/',
  github: 'https://github.com/KunalSolanki01'
} as const;

export const SKILLS = [
  { name: 'Python', level: 85 },
  { name: 'JavaScript', level: 90 },
  { name: 'AWS', level: 75 },
  { name: 'Azure', level: 70 },
  { name: 'Google Cloud', level: 68 },
  { name: 'Java', level: 75 },
  { name: 'Swift', level: 70 },
  { name: 'MySQL', level: 78 },
  { name: 'C', level: 80},
  { name: 'ReactJs', level: 78}
] as const;

export const ROLES = [
  'Frontend Developer',
  'Full Stack Developer',
  'React Developer',
  'Mobile Developer',
  'Cloud Computing Enthusiast'
] as const;

export const PROJECTS = [
  {
    title: 'Blinkit Clone',
    description: 'A comprehensive iOS application replicating Blinkit\'s grocery delivery service with real-time tracking, payment integration, and intuitive user interface.',
    tech: ['Swift', 'UIKit', 'Core Data', 'MapKit', 'Firebase'],
    status: 'completed' as const,
    type: 'ios' as const,
    githubUrl: 'https://github.com/KunalSolanki01/blinkit-clone',
    liveUrl: undefined
  },
  {
    title: 'Full Stack E-Commerce Platform',
    description: 'Modern e-commerce platform with advanced features including user authentication, payment processing, inventory management, and admin dashboard.',
    tech: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe'],
    status: 'coming-soon' as const,
    type: 'fullstack' as const,
    githubUrl: undefined,
    liveUrl: undefined
  },
  {
    title: 'Portfolio Website',
    description: 'Interactive portfolio website showcasing my skills and projects with modern animations, responsive design, and dark mode support.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    status: 'completed' as const,
    type: 'web' as const,
    githubUrl: 'https://github.com/KunalSolanki01/portfolio',
    liveUrl: '#'
  }
] as const;

export const ACHIEVEMENTS = [
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2024',
    badgeUrl: 'https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
    credlyUrl: 'https://www.credly.com/users/kunal-solanki1'
  },
  {
    title: 'Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    date: '2024',
    badgeUrl: 'https://images.credly.com/size/340x340/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png',
    credlyUrl: 'https://www.credly.com/users/kunal-solanki1'
  },
  {
    title: 'Google Cloud Digital Leader',
    issuer: 'Google Cloud',
    date: '2024',
    badgeUrl: 'https://images.credly.com/size/340x340/images/44994cda-b7b0-44cb-9c6d-4d8a4d1d9a4a/image.png',
    credlyUrl: 'https://www.credly.com/users/kunal-solanki1'
  },
  {
    title: 'React Developer Certification',
    issuer: 'Meta',
    date: '2023',
    badgeUrl: 'https://images.credly.com/size/340x340/images/0a6d331e-8abf-4272-a949-33f754569a76/image.png',
    credlyUrl: 'https://www.credly.com/users/kunal-solanki1'
  }
] as const;

export const ABOUT_CONTENT = {
  intro: "I'm a passionate Frontend Developer and Computer Science student at Parul University, dedicated to creating innovative digital solutions that make a difference.",
  personality: [
    "🚀 Innovation-driven developer who loves exploring cutting-edge technologies",
    "💡 Problem solver with a keen eye for user experience and design",
    "🌱 Continuous learner, always staying updated with the latest tech trends",
    "🤝 Collaborative team player who enjoys sharing knowledge and learning from others",
    "⚡ Fast learner who adapts quickly to new technologies and frameworks"
  ],
  interests: [
    "Cloud Computing & DevOps",
    "Mobile App Development",
    "UI/UX Design",
    "Open Source Contribution",
    "Tech Community Building"
  ],
  goals: "My goal is to become a full-stack developer who can build scalable, user-friendly applications that solve real-world problems while contributing to the tech community."
} as const;