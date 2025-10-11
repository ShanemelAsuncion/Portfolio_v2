import type { FC } from 'react';
import { Heart, Code2, Server, Database, Trophy, Briefcase } from 'lucide-react';

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  Icon: FC<React.SVGProps<SVGSVGElement>>;
  color: string;
  facts: string[];
}

const timelineData: TimelineItem[] = [
    {
      year: '2020',
      title: 'Started the Journey',
      description: 'Fell in love with coding during my first CS course',
      Icon: Heart,
      color: 'bg-red-500',
      facts: [
        'Built my first "Hello World" in Python',
        'Stayed up until 3 AM debugging loops',
        'Discovered Stack Overflow (my new best friend)',
      ],
    },
    {
      year: '2021',
      title: 'Frontend Adventures',
      description: 'Brought ideas to life through collaboration, code, and creativity',
      Icon: Code2,
      color: 'bg-blue-500',
      facts: [
        'Collaborated with a team of 8 at Google Developer Student Clubs to build a React–Firebase package simplifying integration between the two',
        'Designed and built core UI features for Habitize, a habit-tracking app, improving user experience and interface flow',
        'Helped prototype a brain-controlled prosthetic arm with NeuroAlbertaTech as part of a 10-member team',
        'Tutored peers in core computing courses (CMPUT 174/175/201) through Ada’s Team, building confidence and community',
      ],
    },
    {
      year: '2022',
      title: 'Team Builder & AI Explorer',
      description: 'Led, built, and explored new horizons in AI and community-driven tech',
      Icon: Server,
      color: 'bg-green-500',
      facts: [
        'Directed entrepreneurship and future development at natHACKS, connecting 200+ hackathon participants with mentors and sponsors',
        'Organized AI4Medicine symposiums as VP Operations, hosting speakers from across North America',
        'Developed an Android app for COUHR with Firebase and Kotlin, enhancing data collection for research',
        'Built an AI-powered email scam detector prototype with explainable AI at AI4Good Lab',
      ],
    },
    {
      year: '2023',
      title: 'Full-Stack Innovator',
      description: 'Bridged front-end and back-end technologies to create real-world solutions',
      Icon: Database,
      color: 'bg-purple-500',
      facts: [
        'Developed a student-matching app called Unione using React Native, Django, and PostgreSQL',
        'Improved user experience and functionality in cross-platform mobile projects',
        'Collaborated in agile teams to deliver polished products from concept to launch',
        'Expanded skills in databases, backend logic, and UI/UX integration',
      ],
    },
    {
      year: '2024',
      title: 'From Capstone to Career',
      description: 'Capped off my academic journey and leveled up my craft as a professional developer',
      Icon: Trophy,
      color: 'bg-yellow-500',
      facts: [
        'Graduated with a BSc in Computing Science from the University of Alberta (November 2024)',
        'Contributed to the Blueprint project for Alzheimer Society Calgary, focusing on front-end development using React and Firebase',
        'Joined BrainStation’s Software Engineering diploma track to deepen full-stack expertise',
        'Focused on building scalable applications and mentoring peers in project-based learning environments',
      ],
    },
    {
      year: '2025',
      title: 'Full-Stack Developer',
      description: 'Building intelligent systems and powering the future of tech hiring',
      Icon:Briefcase,
      color: 'bg-indigo-500',
      facts: [
        'Joined SkillSoniq as a Full-Stack Developer, contributing to both frontend and backend systems',
        'Develop and maintain core platform features in Ruby on Rails, focusing on candidate, project, and employer workflows',
        'Implement and refine NLP-driven algorithms to enhance candidate–job matching accuracy',
        'Leverage AWS services for deployment, storage, and scalability across production environments',
        'Take on freelance projects for small businesses, delivering modern, responsive web applications',
      ],
    },
  ];

export default timelineData;
