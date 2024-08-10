import {
  ai,
  android2,
  product,
  backend,
  javascript,
  git,
  docker,
  postgresql,
  dot,
  android,
  java,
  spring,
  csharp,
  dotnet,
  python,
  kotlin,
  linux,
  aws,
  azure,
  bank,
  casespy,
  teacher,
  website,
  calculator

} from '../assets';



export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Backend Development',
    icon: backend,
  },
  {
    title: 'Machine / Deep Learning Model development',
    icon: ai,
  },
  {
    title: 'Android Development',
    icon: android2,
  },
  {
    title: 'Product Management',
    icon: product,
  },
];

const technologies = [
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'Spring Boot',
    icon: spring,
  },
  {
    name: 'C#',
    icon: csharp,
  },
  {
    name: '.Net',
    icon: dotnet,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Kotlin',
    icon: kotlin,
  },
  {
    name: 'android',
    icon: android,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Linux',
    icon: linux,
  },
  {
    name: 'AWS',
    icon: aws,
  },
  {
    name: 'Azure',
    icon: azure,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Investor Relations Intern - Toronto / Canada',
    company_name: 'CovalentHQ',
    icon: dot,
    iconBg: '#333333',
    date: 'Jan 2020 - Sep 2020',
  },
  {
    title: 'Data Analyst Intern - İstanbul / Turkey',
    company_name: 'HelloVillam',
    icon: dot,
    iconBg: '#333333',
    date: 'Dec 2020 - Mar 2021',
  },
  {
    title: 'Product Delivery Intern - İstanbul / Turkey',
    company_name: 'PI Works',
    icon: dot,
    iconBg: '#333333',
    date: 'Aug 2023 - Sep 2023',
  },
  {
    title: 'Back-End / ML Engineer Intern - İstanbul / Turkey',
    company_name: 'Softtech',
    icon: dot,
    iconBg: '#333333',
    date: 'Apr 2024 - Jul 2024',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'bankApp-Microservices',
    description: 'Presenting case of a bank backend microservice architecture REST API',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: bank,
    repo: 'https://github.com/tmrtrkr/BankApp-microservice-REST-API',
  },
  {
    id: 'project-2',
    name: 'CaseSpy',
    description:
      'A tool to demonstrate the vulnerability of digital exam methods to computer-vision applications. This program built for educational purposes.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: casespy,
    repo: 'https://github.com/tmrtrkr/CaseSpy',
  },
  {
    id: 'project-3',
    name: 'AI-LanguageTeacher',
    description: 'This is a android project that provides a language speaking and learning platform enhanced 3d models integrated with AI modelsk',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: teacher,
    repo: 'https://github.com/tmrtrkr/languageTeacherr',
  },
  {
    id: 'project-4',
    name: 'Portfolio-Website',
    description: `A Node.js portfolio website with mailing service`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: website,
    repo: 'https://github.com/tmrtrkr/portfolio-website',
  },
  {
    id: 'project-5',
    name: 'Android-Calculator',
    description:
      'Modern android calculator UI for mobile phones using kotlin\n',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: calculator,
    repo: 'https://github.com/tmrtrkr/Android_Calculator_v1',
  },
];

export { services, technologies, experiences, projects };
