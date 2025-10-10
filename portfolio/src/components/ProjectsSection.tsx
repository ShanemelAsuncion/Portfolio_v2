import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Badge } from '../assets/badge';
import { Button } from '../assets/button';
import { ExternalLink, Github, Star, Users } from 'lucide-react';
import ProjectDialog from './ProjectDialog';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  tagline: string;
  description: string;
  image: string;
  tech: string[];
  color: string;
  metrics: Record<string, string>;
  featured?: boolean;
  liveUrl?: string;
  githubUrl?: string;
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    // Entrance animation
    gsap.fromTo(
      '.project-card',
      { y: 100, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'back.out(1.4)',
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 70%',
        },
      }
    );

    // Floating animation
    gsap.to('.project-card-inner', {
      y: -8,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.15,
    });
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Project 1',
      tagline: 'Innovating the Future',
      description:
        'Project 1 is a cutting-edge web application that streamlines workflow for developers and teams.',
      image:
        'https://images.unsplash.com/photo-1581091215369-5e7ed2e2f2aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      tech: ['React', 'Node.js', 'PostgreSQL', 'GraphQL', 'Docker'],
      color: 'from-green-400 to-emerald-600',
      metrics: { users: '10K+', uptime: '99.9%', rating: '4.8' },
      featured: true,
      liveUrl: 'https://project1.example.com',
      githubUrl: 'https://github.com/username/project1',
    },
    {
      id: 2,
      title: 'Project 2',
      tagline: 'Connecting the World',
      description:
        'Project 2 is a real-time messaging platform for global teams to collaborate seamlessly.',
      image:
        'https://images.unsplash.com/photo-1581091215369-5e7ed2e2f2aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      tech: ['Angular', 'Python', 'MongoDB', 'WebSocket', 'Redis'],
      color: 'from-blue-400 to-indigo-600',
      metrics: { users: '5K+', accuracy: '95%', rating: '4.9' },
      featured: true,
      liveUrl: 'https://project2.example.com',
      githubUrl: 'https://github.com/username/project2',
    },
    {
      id: 3,
      title: 'Project 3',
      tagline: 'Simplifying Complexity',
      description:
        'Project 3 is an analytics dashboard that visualizes complex data in simple charts.',
      image:
        'https://images.unsplash.com/photo-1581091215369-5e7ed2e2f2aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      tech: ['Vue.js', 'Express.js', 'MySQL', 'JWT', 'AWS'],
      color: 'from-purple-400 to-violet-600',
      metrics: { teams: '500+', projects: '2K+', rating: '4.7' },
      featured: false,
      liveUrl: 'https://project3.example.com',
      githubUrl: 'https://github.com/username/project3',
    },
    {
      id: 4,
      title: 'Project 4',
      tagline: 'Empowering Mobile Users',
      description:
        'Project 4 is a mobile app that tracks fitness routines and health metrics efficiently.',
      image:
        'https://images.unsplash.com/photo-1581091215369-5e7ed2e2f2aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      tech: ['React Native', 'Firebase', 'Node.js', 'Stripe'],
      color: 'from-pink-400 to-rose-600',
      metrics: { users: '15K+', workouts: '100K+', rating: '4.6' },
      featured: false,
      liveUrl: 'https://project4.example.com',
      githubUrl: 'https://github.com/username/project4',
    },
    {
      id: 5,
      title: 'Project 5',
      tagline: 'Next-Level Performance',
      description:
        'Project 5 is a high-performance web platform for financial analytics and trading signals.',
      image:
        'https://images.unsplash.com/photo-1581091215369-5e7ed2e2f2aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'WebSocket'],
      color: 'from-yellow-400 to-orange-600',
      metrics: { tracked: '$5M+', signals: '1K+', rating: '4.8' },
      featured: false,
      liveUrl: 'https://project5.example.com',
      githubUrl: 'https://github.com/username/project5',
    },
    {
      id: 6,
      title: 'Project 6',
      tagline: 'AI-Powered Insights',
      description:
        'Project 6 leverages AI to deliver intelligent course recommendations for students worldwide.',
      image:
        'https://images.unsplash.com/photo-1581091215369-5e7ed2e2f2aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      tech: ['React', 'Django', 'PostgreSQL', 'Redis', 'ML APIs'],
      color: 'from-teal-400 to-cyan-600',
      metrics: { students: '50K+', courses: '200+', rating: '4.9' },
      featured: false,
      liveUrl: 'https://project6.example.com',
      githubUrl: 'https://github.com/username/project6',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-20 right-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-pink-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-blue-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-5xl text-center mb-4 animate-in bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 animate-in">
          Building the future, one line of code at a time 💻
        </p>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 auto-rows-fr">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card group bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100 hover:border-purple-300 hover:shadow-2xl transition-all duration-500"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-card-inner flex flex-col h-full will-change-transform">
                {project.featured && (
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                      <Star className="w-3 h-3 fill-white" />
                      <span className="text-xs">Featured</span>
                    </div>
                  </div>
                )}

                <div className="relative h-48 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 group-hover:opacity-80 transition-opacity duration-500`}
                  ></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm backdrop-blur-sm bg-white/20 px-3 py-1 rounded-full inline-block">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3
                    className={`text-2xl mb-3 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}
                  >
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-gray-50 rounded-lg">
                    {Object.entries(project.metrics)
                      .slice(0, 3)
                      .map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-sm text-gray-800">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <Button
                      size="sm"
                      className={`flex-1 bg-gradient-to-r ${project.color} hover:opacity-90 text-white border-0`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action section */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <Users className="w-12 h-12 mx-auto mb-4 text-purple-600" />
            <h3 className="text-2xl mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-gray-600 mb-6">
              Have an idea for a project? I'd love to hear about it and help bring your vision to
              life.
            </p>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg">
              Start a Project
            </Button>
          </div>
        </div>
      </div>

      {/* Project Dialog */}
      <ProjectDialog
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
