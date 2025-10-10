import { Dialog, DialogContent, DialogTitle, DialogClose } from '@radix-ui/react-dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs';
import { Badge } from '../assets/badge';
import { Button } from '../assets/button';
import { ExternalLink, Github, Star, Users, Calendar, Briefcase, Rocket, CheckCircle, Zap, Award, Code } from 'lucide-react';

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
  timeline?: string;
  teamSize?: string;
  role?: string;
  features?: string[];
  challenges?: string[];
  outcomes?: string[];
}

interface ProjectDialogProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  if (!project) return null;

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
        <p className="text-gray-600 mb-4">{project.tagline}</p>

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

          {/* Overview */}
          <TabsContent value="overview" className="space-y-6">
            <div className="relative h-64 rounded-xl overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40`}></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-xs text-gray-500">Timeline</span>
                </div>
                <p className="text-sm">{project.timeline}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-gray-500" />
                  <span className="text-xs text-gray-500">Team</span>
                </div>
                <p className="text-sm">{project.teamSize}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-4 h-4 text-gray-500" />
                  <span className="text-xs text-gray-500">Role</span>
                </div>
                <p className="text-sm">{project.role}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 text-gray-500" />
                  <span className="text-xs text-gray-500">Rating</span>
                </div>
                <p className="text-sm">{project.metrics.rating || 'N/A'}</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl mb-3">About the Project</h3>
              <p className="text-gray-600 leading-relaxed">{project.fullDescription || project.description}</p>
            </div>

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

            <div className="flex gap-4 pt-4">
              {project.liveUrl && (
                <Button className={`flex-1 bg-gradient-to-r ${project.color} hover:opacity-90 text-white`} onClick={() => window.open(project.liveUrl, '_blank')}>
                  <ExternalLink className="w-4 h-4 mr-2" /> View Live Project
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" className="flex-1" onClick={() => window.open(project.githubUrl, '_blank')}>
                  <Github className="w-4 h-4 mr-2" /> View Source Code
                </Button>
              )}
            </div>
          </TabsContent>

          {/* Gallery */}
          <TabsContent value="gallery" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.images?.map((img, idx) => (
                <div key={idx} className="relative h-64 rounded-xl overflow-hidden group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 text-center italic">📸 Click to view full-size images</p>
          </TabsContent>

          {/* Technical */}
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

          {/* Impact */}
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

            <div className="bg-white border-2 border-gray-100 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center text-white flex-shrink-0`}>
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-600 italic mb-2">
                    "This project demonstrates excellent technical skills and attention to detail. 
                    The implementation is clean, scalable, and well-documented."
                  </p>
                  <p className="text-sm text-gray-500">— Project Stakeholder</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
