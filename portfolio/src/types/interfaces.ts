export interface Project {
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