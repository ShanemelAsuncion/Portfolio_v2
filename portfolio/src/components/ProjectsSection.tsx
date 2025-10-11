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
  fullDescription?: string; 
  image: string;
  images?: string[]; 
  tech: string[];
  color: string;
  metrics: Record<string, string>;
  featured?: boolean;
  liveUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
  timeline?: string;  
  teamSize?: string;  
  role?: string;      
  features?: string[]; 
  challenges?: string[]; 
  outcomes?: string[]; 
  testimonial?: {
    text: string;
    author: string;
    icon?: React.ReactNode;
  };
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
        title: "Website Builder",
        tagline: "No-code website builder with dynamic content and admin dashboard",
        description: "Modern marketing site + admin dashboard for real-world constraints: zero-redeploy content updates, resilient API, and clean local development.",
        fullDescription: "Features an admin dashboard to manage Hero, Services, Portfolio, Testimonials, and Contact. Supports seasonal modes (summer/winter), runtime-configurable API, uploads to Supabase Storage, and secure backend with hashed passwords.",
        image: "/1.png",
        images: ["/1.png", "/2.png", "/5.png", "/3.png","/4.png"],
        tech: ["React", "Vite", "TailwindCSS", "Framer Motion", "Radix UI", "Node.js", "Express", "Supabase", "JWT", "bcrypt"],
        color: "bg-purple-500",
        metrics: {
          "Redeploy needed": "0",
          "Uploads": "100+",
          "Rating": "4.3",
        },
        featured: true,
        liveUrl: "https://jaysbladeandsnowservicesinc.netlify.app",
        githubUrl: "https://github.com/ShanemelAsuncion/Website_builder",
        timeline: "2025",
        teamSize: "1",
        role: "Full-stack Developer",
        features: [
          "Admin dashboard for content management",
          "Zero-redeploy runtime config",
          "Uploads to cloud storage",
          "Resilient frontend with Axios retry"
        ],
        challenges: [
          "Implementing runtime configuration without redeploy",
          "Secure handling of uploads and authentication"
        ],
        outcomes: [
          "Fully functional no-code website builder",
          "Dynamic content editing for real-world business"
        ]
    },
    {
        id: 2,
        title: "AI Chatbot",
        tagline: "Chatbot with traditional and RAG-enhanced capabilities",
        description: "Streamlit-based AI chatbot that supports real-time chat, document uploads, and context-aware responses using Retrieval Augmented Generation (RAG).",
        fullDescription: "Provides traditional GPT-based chat with chat history management and customizable prompts. RAG-enhanced chat allows PDF uploads, real-time document indexing, and context-aware AI responses. Includes source tracking and supports multiple documents for informed answers.",
        image: "/13.png",
        images: ["/11.png", "/12.png", "/13.png"],
        tech: ["Python", "Streamlit", "OpenAI API", "Pinecone", "LangChain", "PyPDF"],
        color: "bg-cyan-500",
        metrics: {
            "Documents processed": "100+",
            "Accuracy": "8%",
            "Rating": "4.1",
        },
        featured: true,
        liveUrl: "https://ai-chatbot-bfgsesbwyzsoxgvshjayrs.streamlit.app/",
        githubUrl: "https://github.com/ShanemelAsuncion/ai-chatbot",
        timeline: "2025",
        teamSize: "1",
        role: "Full-stack Developer",
        features: [
            "Real-time GPT chat with customizable prompts",
            "RAG-enhanced chat with PDF upload and processing",
            "Context-aware responses with source tracking",
            "Supports multiple document uploads"
        ],
        challenges: [
            "Integrating RAG workflow with real-time chat",
            "Ensuring efficient vector search and retrieval",
            "Handling multiple PDF documents securely"
        ],
        outcomes: [
            "Fully functional AI chatbot with RAG capabilities",
            "Context-aware responses and document-informed answers"
        ]
    },
    {
      id: 3,
      title: "uniONE Mobile App",
      tagline: "MVP mobile application for data management",
      description: "Designed and developed a mobile MVP using React Native, Expo, and Django REST APIs.",
      fullDescription: "Implemented authentication, authorization, and secure backend communications using PostgreSQL for uniONE project.",
      image: "/10.png",
      images: ["/6.png", "/7.png", "/8.png", "/9.png", "/10.png"],
      tech: ["React Native", "Expo", "Django", "PostgreSQL"],
      color: "bg-orange-500",
      metrics: { },
      featured: false,
      liveUrl: "https://unione.cc/",
      githubUrl: "n/a",
      videoUrl: "https://www.youtube.com/watch?v=GjZJ43cEKqQ&t=301s",
      timeline: "JAN 2023 - APR 2023",
      teamSize: "7",
      role: "Front-end Developer",
      features: ["Mobile MVP", "Authentication & authorization", "Secure backend integration"],
      challenges: ["API integration", "Mobile optimization"],
      outcomes: ["Delivered a functional mobile MVP"]
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
          Building the future, one line of code at a time.
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
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-50 transition-opacity duration-500`}
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
                    {project.liveUrl && project.liveUrl.toLowerCase() !== "n/a" && (
                        <Button
                        size="sm"
                        className={`flex-1 ${project.color} hover:opacity-90 text-white border-0`}
                        onClick={() => window.open(project.liveUrl, "_blank")}
                        >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                        </Button>
                    )}

                    {project.githubUrl && project.githubUrl.toLowerCase() !== "n/a" && (
                        <Button
                        variant="outline"
                        className="flex-1"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                        >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                        </Button>
                    )}

                    {project.videoUrl && project.videoUrl.toLowerCase() !== "n/a" && (
                        <Button
                        size="sm"
                        className={`flex-1 ${project.color} hover:opacity-90 text-white border-0`}
                        onClick={() => window.open(project.videoUrl, "_blank")}
                        >
                        🎥 Video Demo
                        </Button>
                    )}
                    </div>

                </div>
              </div>
            </div>
          ))}
        </div>

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

      <ProjectDialog
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
