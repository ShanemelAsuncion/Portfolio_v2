import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogClose, DialogDescription } from '@radix-ui/react-dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs';
import { Badge } from '../assets/badge';
import { Button } from '../assets/button';
import type { Project } from '../types/interfaces';
import {
  ExternalLink,
  Github,
  Star,
  Users,
  Calendar,
  Briefcase,
  Rocket,
  CheckCircle,
  Zap,
  Award,
  Code,
} from 'lucide-react';

interface ProjectDialogProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  if (!project) return null;

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  // Handle arrow key navigation + exit fullscreen
  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project.images) return;

      if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev + 1) % project.images!.length);
        setSelectedImage(project.images![(selectedIndex + 1) % project.images!.length]);
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev - 1 + project.images!.length) % project.images!.length);
        setSelectedImage(project.images![(selectedIndex - 1 + project.images!.length) % project.images!.length]);
      } else if (e.key === 'Escape' || e.key.toLowerCase() === 'x') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, selectedIndex, project?.images]);

  return (
    <Dialog open={project !== null} onOpenChange={(open) => !open && onClose()}>
      <div className="fixed inset-0 bg-black/50 z-40" />
      <DialogContent className="fixed top-1/2 left-1/2 z-50 w-full max-w-5xl max-h-[90vh] overflow-y-auto -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-6 shadow-xl">
        <DialogClose asChild>
          <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">✕</button>
        </DialogClose>

        <DialogTitle className={`text-3xl mb-2 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
          {project.title}
        </DialogTitle>

        <DialogDescription className="text-gray-500 mb-4">{project.tagline}</DialogDescription>

        {project.featured && (
          <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 flex items-center gap-1 mb-4">
            <Star className="w-3 h-3 fill-white" /> Featured
          </Badge>
        )}

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6 border-b">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="technical">Technical</TabsTrigger>
            <TabsTrigger value="impact">Impact</TabsTrigger>
          </TabsList>

          {/* OVERVIEW TAB */}
          <TabsContent value="overview" className="space-y-6">
            <div className="relative h-64 rounded-xl overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40`} />
              )}
            </div>

            {/* --- Info Grid --- */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { icon: Calendar, label: 'Timeline', value: project.timeline },
                    { icon: Users, label: 'Team', value: project.teamSize },
                    { icon: Briefcase, label: 'Role', value: project.role },
                    {
                    icon: Star,
                    label: 'Rating',
                    value:
                        Object.entries(project.metrics || {}).find(
                        ([k]) => k.toLowerCase() === 'rating'
                        )?.[1] || '–',
                    },
                ].map(({ icon: Icon, label, value }, i) => (
                    <div key={i} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-4 h-4 text-gray-500" />
                        <span className="text-xs text-gray-500">{label}</span>
                    </div>
                    <p className="text-sm">{value}</p>
                    </div>
                ))}
            </div>



            {/* --- Description --- */}
            <div>
              <h3 className="text-xl mb-3">About the Project</h3>
              <p className="text-gray-600 leading-relaxed">
                {project.fullDescription || project.description}
              </p>
            </div>

            {/* --- Tech Stack --- */}
            <div>
              <h3 className="text-xl mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} className={`bg-gradient-to-r ${project.color} text-white border-0`}>
                    <Code className="w-3 h-3 mr-1" /> {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* --- Buttons --- */}
            <div className="flex gap-4 pt-4">
                {/* Live Demo */}
                {project.liveUrl && project.liveUrl.toLowerCase() !== "n/a" && (
                    <Button
                    size="sm"
                    className={`flex-1 bg-gradient-to-r ${project.color} hover:opacity-90 text-white border-0`}
                    onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                    </Button>
                )}

                {/* GitHub */}
                {project.githubUrl && project.githubUrl.toLowerCase() !== "n/a" && (
                    <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                    <Github className="w-4 h-4 mr-2" /> View Source Code
                    </Button>
                )}

                {/* Video Demo */}
                {project.videoUrl && project.videoUrl.toLowerCase() !== "n/a" && (
                    <Button
                    size="sm"
                    className={`flex-1 bg-gradient-to-r ${project.color} hover:opacity-90 text-white border-0`}
                    onClick={() => window.open(project.videoUrl, "_blank")}
                    >
                    🎥 Video Demo
                    </Button>
                )}
            </div>

          </TabsContent>

          {/* GALLERY TAB */}
          <TabsContent value="gallery" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.images?.map((img, idx) => (
                <div
                  key={idx}
                  className="relative h-64 rounded-xl overflow-hidden group cursor-pointer"
                  onClick={() => {
                    setSelectedImage(img);
                    setSelectedIndex(idx);
                  }}
                >
                  <img
                    src={img}
                    alt={`${project.title} image ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 text-center italic">📸 Click an image to view full size</p>
          </TabsContent>

          <TabsContent value="technical" className="space-y-6">
            <div>
                <h3 className="text-xl mb-3 flex items-center gap-2">
                <Rocket className={`w-5 h-5 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`} />
                Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features?.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 bg-gray-50 rounded-lg p-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{f}</span>
                    </div>
                ))}
                </div>
            </div>

            <div>
                <h3 className="text-xl mb-3 flex items-center gap-2">
                <Zap className={`w-5 h-5 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`} />
                Technical Challenges
                </h3>
                <ul className="space-y-2">
                {project.challenges?.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span className="text-gray-600">{c}</span>
                    </li>
                ))}
                </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                <h4 className="text-sm mb-2">Tech Stack Breakdown</h4>
                <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                    <span key={t} className="text-xs bg-white px-3 py-1 rounded-full border border-gray-200">{t}</span>
                ))}
                </div>
            </div>
            </TabsContent>

            <TabsContent value="impact" className="space-y-6">
                <div>
                    <h3 className="text-xl mb-4">Project Metrics</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {Object.entries(project.metrics).map(([k, v]) => (
                        <div key={k} className={`bg-gradient-to-br ${project.color} rounded-xl p-6 text-white text-center`}>
                        <div className="text-3xl mb-1">{v}</div>
                        <div className="text-xs capitalize opacity-90">{k}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-xl mb-3 flex items-center gap-2">
                <Award className={`w-5 h-5 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`} />
                Key Outcomes
                </h3>
                <div className="space-y-3">
                    {project.outcomes?.map((o, i) => (
                        <div key={i} className="flex items-start gap-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center text-white flex-shrink-0`}>{i + 1}</div>
                        <p className="text-gray-700 pt-1">{o}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Testimonial */}
            {project.testimonial && (
                <div className="bg-white border-2 border-gray-100 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center text-white flex-shrink-0`}>
                        {project.testimonial.icon || <Users className="w-6 h-6" />}
                    </div>
                    <div>
                        <p className="text-gray-600 italic mb-2">"{project.testimonial.text}"</p>
                        <p className="text-sm text-gray-500">— {project.testimonial.author}</p>
                    </div>
                    </div>
                </div>
            )}
            </TabsContent>      
        </Tabs>
      </DialogContent>

      
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedImage(null);
          }}
        >
          <img
            src={selectedImage}
            alt="Full-size preview"
            className="max-w-full max-h-full rounded-lg shadow-2xl object-contain transition-all duration-500"
          />
          <button
            className="absolute top-6 right-6 text-black text-3xl hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
        </div>
      )}
    </Dialog>
  );
}
