import { 
    Code2, 
    Database, 
    Server, 
    Smartphone, 
    Palette, 
    Cloud,
  } from 'lucide-react';
  
  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <Code2 className="w-8 h-8" />,
      color: 'from-blue-400 to-blue-600',
      bgGradient: 'from-blue-50 to-cyan-50',
      skills: [
        { name: 'JavaScript', level: 80, description: 'ES6+, DOM Manipulation, Functional Programming' },
        { name: 'React', level: 78, description: 'Hooks, Context, Component Design' },
        { name: 'TypeScript', level: 70, description: 'Basic Types & Generics' },
        { name: 'HTML5/CSS3', level: 85, description: 'Semantic & Responsive Layouts' },
        { name: 'Tailwind CSS', level: 75, description: 'Utility-first styling' },
        { name: 'Next.js', level: 65, description: 'SSR & Static Generation' },
        { name: 'SASS/SCSS', level: 60, description: 'Mixins & Variables' }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: <Server className="w-8 h-8" />,
      color: 'from-green-400 to-green-600',
      bgGradient: 'from-green-50 to-emerald-50',
      skills: [
        { name: 'Node.js', level: 75, description: 'Express & REST API basics' },
        { name: 'Python', level: 70, description: 'Django or Flask fundamentals' },
        { name: 'Ruby on Rails', level: 65, description: 'MVC & REST APIs' },
        { name: 'REST APIs', level: 72, description: 'Basic CRUD and routing' },
        { name: 'Java', level: 60, description: 'Spring Boot basics' },
        { name: 'WebSockets', level: 55, description: 'Real-time features (basic)' },
        { name: 'Authentication', level: 68, description: 'JWT & OAuth fundamentals' },
        { name: 'API Security', level: 60, description: 'CORS & basic practices' }
      ]
    },
    {
      id: 'database',
      title: 'Database & Storage',
      icon: <Database className="w-8 h-8" />,
      color: 'from-purple-400 to-purple-600',
      bgGradient: 'from-purple-50 to-pink-50',
      skills: [
        { name: 'PostgreSQL', level: 70, description: 'Basic schema & queries' },
        { name: 'MongoDB', level: 65, description: 'Collections & basic aggregation' },
        { name: 'Redis', level: 60, description: 'Caching basics' },
        { name: 'MySQL', level: 68, description: 'Basic relational DB design' },
        { name: 'Supabase', level: 65, description: 'Realtime & basic RLS' },
        { name: 'Firebase', level: 60, description: 'Firestore basics' },
        { name: 'SQL', level: 70, description: 'CRUD & joins' },
        { name: 'Database Design', level: 65, description: 'Normalization & relationships' }
      ]
    },
    {
      id: 'mobile',
      title: 'Mobile Development',
      icon: <Smartphone className="w-8 h-8" />,
      color: 'from-pink-400 to-pink-600',
      bgGradient: 'from-pink-50 to-rose-50',
      skills: [
        { name: 'React Native', level: 70, description: 'Cross-platform basics' },
        { name: 'Android (Kotlin)', level: 60, description: 'Jetpack Compose basics' },
        { name: 'Android (Java)', level: 55, description: 'Legacy apps & UI implementation' }, 
        { name: 'Responsive Design', level: 75, description: 'Mobile-first approach' }
      ]
    },
    {
      id: 'design',
      title: 'UI/UX & Design',
      icon: <Palette className="w-8 h-8" />,
      color: 'from-yellow-400 to-orange-600',
      bgGradient: 'from-yellow-50 to-orange-50',
      skills: [
        { name: 'Figma', level: 70, description: 'Prototyping & design systems' },
        { name: 'UI/UX Design', level: 65, description: 'User research basics' },
        { name: 'Wireframing', level: 60, description: 'Low-fidelity to high-fidelity' },
        { name: 'Design Systems', level: 60, description: 'Component libraries basics' },
        { name: 'Accessibility', level: 55, description: 'WCAG & ARIA intro' }
      ]
    },
    {
      id: 'devops',
      title: 'DevOps & Cloud',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-teal-400 to-cyan-600',
      bgGradient: 'from-teal-50 to-cyan-50',
      skills: [
        { name: 'Oracle', level: 50, description: 'Basic DB usage' },
        { name: 'AWS', level: 65, description: 'EC2, S3 basics' },
        { name: 'CI/CD', level: 60, description: 'GitHub Actions & pipelines' },
        { name: 'Kubernetes', level: 50, description: 'Conceptual understanding' },
        { name: 'Git', level: 75, description: 'Version control basics' },
        { name: 'Linux', level: 60, description: 'Server fundamentals' },
        { name: 'Nginx', level: 55, description: 'Reverse proxy basics' }
      ]
    }
  ];
  
  export default skillCategories;
  