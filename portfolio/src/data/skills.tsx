import {
  Code2,
  Globe,
  Database,
  Terminal,
} from 'lucide-react';

const skillCategories = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: <Code2 className="w-8 h-8" />,
    color: 'from-blue-400 to-blue-600',
    skills: ['C', 'C++', 'C#', 'Assembly', 'Java', 'Kotlin', 'Python', 'Julia'],
  },
  {
    id: 'web-mobile',
    title: 'Web & Mobile',
    icon: <Globe className="w-8 h-8" />,
    color: 'from-green-400 to-green-600',
    skills: ['JavaScript', 'HTML', 'CSS', 'Sass', 'React JS', 'React Native', 'Node.js', 'REST APIs', 'Ruby'],
  },
  {
    id: 'databases-backend',
    title: 'Databases & Backend',
    icon: <Database className="w-8 h-8" />,
    color: 'from-purple-400 to-purple-600',
    skills: ['SQL', 'MySQL', 'PostgreSQL', 'Data Analysis'],
  },
  {
    id: 'tools-platforms',
    title: 'Tools & Platforms',
    icon: <Terminal className="w-8 h-8" />,
    color: 'from-teal-400 to-cyan-600',
    skills: ['Git', 'Linux', 'Bash', 'PowerShell', 'AWS', 'Firebase', 'Google Cloud Platform'],
  },
];

export default skillCategories;
