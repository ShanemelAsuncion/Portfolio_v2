import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy, Heart, Code2, Database, Server, Briefcase } from 'lucide-react';
import FloatingCodeSnippets from '../assets/floatingcodesnippets';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Timeline animation
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: timelineRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1
      }
    });

    timeline
      .fromTo('.timeline-item', 
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.3, duration: 1 }
      )
      .fromTo('.timeline-line',
        { scaleY: 0 },
        { scaleY: 1, duration: 2 },
        0
      );

    // Flow diagram animation
    gsap.fromTo('.flow-item',
      { scale: 0, rotation: 180 },
      {
        scale: 1,
        rotation: 0,
        duration: 1,
        ease: 'back.out(1.7)',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.tech-flow',
          start: 'top 80%'
        }
      }
    );

    // Connecting arrows animation
    gsap.fromTo('.flow-arrow',
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 0.8,
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.tech-flow',
          start: 'top 70%'
        }
      }
    );

  }, []);

  const timelineData = [
    {
      year: '2020',
      title: 'Started the Journey',
      description: 'Fell in love with coding during my first CS course',
      icon: <Heart className="w-6 h-6" />,
      color: 'bg-red-500',
      facts: ['Built my first "Hello World" in Python', 'Stayed up until 3 AM debugging loops', 'Discovered Stack Overflow (my new best friend)']
    },
    {
        year: '2021',
        title: 'Frontend Adventures',
        description: 'Brought ideas to life through collaboration, code, and creativity',
        icon: <Code2 className="w-6 h-6" />,
        color: 'bg-blue-500',
        facts: [
            'Collaborated with a team of 8 at Google Developer Student Clubs to build a React–Firebase package simplifying integration between the two',
            'Designed and built core UI features for Habitize, a habit-tracking app, improving user experience and interface flow',
            'Helped prototype a brain-controlled prosthetic arm with NeuroAlbertaTech as part of a 10-member team',
            'Tutored peers in core computing courses (CMPUT 174/175/201) through Ada’s Team, building confidence and community'
        ]
        },
    {
        year: '2022',
        title: 'Team Builder & AI Explorer',
        description: 'Led, built, and explored new horizons in AI and community-driven tech',
        icon: <Server className="w-6 h-6" />,
        color: 'bg-green-500',
        facts: [
            'Directed entrepreneurship and future development at natHACKS, connecting 200+ hackathon participants with mentors and sponsors',
            'Organized AI4Medicine symposiums as VP Operations, hosting speakers from across North America',
            'Developed an Android app for COUHR with Firebase and Kotlin, enhancing data collection for research',
            'Built an AI-powered email scam detector prototype with explainable AI at AI4Good Lab'
        ]
    },
        {
        year: '2023',
        title: 'Full-Stack Innovator',
        description: 'Bridged front-end and back-end technologies to create real-world solutions',
        icon: <Database className="w-6 h-6" />,
        color: 'bg-purple-500',
        facts: [
            'Developed a student-matching app called Unione using React Native, Django, and PostgreSQL',
            'Improved user experience and functionality in cross-platform mobile projects',
            'Collaborated in agile teams to deliver polished products from concept to launch',
            'Expanded skills in databases, backend logic, and UI/UX integration'
        ]
    },
    {
        year: '2024',
        title: 'From Capstone to Career',
        description: 'Capped off my academic journey and leveled up my craft as a professional developer',
        icon: <Trophy className="w-6 h-6" />,
        color: 'bg-yellow-500',
        facts: [
            'Graduated with a BSc in Computing Science from the University of Alberta (November 2024)',
            'Contributed to the Blueprint project for Alzheimer Society Calgary, focusing on front-end development using React and Firebase',
            'Joined BrainStation’s Software Engineering diploma track to deepen full-stack expertise',
            'Focused on building scalable applications and mentoring peers in project-based learning environments'
        ]
    },
    {
        year: '2025',
        title: 'Full-Stack Developer',
        description: 'Building intelligent systems and powering the future of tech hiring',
        icon: <Briefcase className="w-6 h-6" />,
        color: 'bg-indigo-500',
        facts: [
          'Joined SkillSoniq as a Full-Stack Developer, contributing to both frontend and backend systems',
          'Develop and maintain core platform features in Ruby on Rails, focusing on candidate, project, and employer workflows',
          'Implement and refine NLP-driven algorithms to enhance candidate–job matching accuracy',
          'Leverage AWS services for deployment, storage, and scalability across production environments',
          'Take on freelance projects for small businesses, delivering modern, responsive web applications'
        ]
    } 
  ];

  return (
    <section ref={sectionRef} className="relative py-20 bg-white">
      <FloatingCodeSnippets />
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl text-center mb-4 animate-in bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          My Developer Story
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 animate-in">
          From curious beginner to passionate full-stack developer 🚀
        </p>

        <p className="text-lg text-center mb-16 animate-in text-gray-500 italic tracking-wide hover:text-gray-700 transition-colors duration-300">
        Hover over the timeline items to learn more ✨
        </p>

      {/* Timeline */}
        <div ref={timelineRef} className="relative mb-20">
        {/* Timeline line */}
        <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-400 to-pink-400 origin-top"></div>

        {timelineData.map((item, index) => (
            <div
            key={index}
            className={`timeline-item relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
            >
            {/* Content */}
            <div
                className={`w-5/12 ${
                index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
                }`}
            >
                <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-100 hover:border-purple-300 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                    <span className={`${item.color} text-white p-2 rounded-full`}>
                    {item.icon}
                    </span>
                    <span className="text-2xl">{item.year}</span>
                </div>
                <h3 className="text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>

                {/* Fun facts on hover — always left-aligned */}
                <div className="hidden group-hover:block text-left">
                    <h4 className="text-sm text-purple-600 mb-2">Fun Facts:</h4>
                    <ul className="text-sm text-gray-500 space-y-1">
                    {item.facts.map((fact, i) => (
                        <li key={i} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                        {fact}
                        </li>
                    ))}
                    </ul>
                </div>
                </div>
            </div>

            {/* Timeline marker */}
            <div className="w-2/12 flex justify-center">
                <div
                className={`w-4 h-4 ${item.color} rounded-full border-4 border-white shadow-lg z-10`}
                ></div>
            </div>

            {/* Spacer */}
            <div className="w-5/12"></div>
            </div>
        ))}
        </div>


        {/* Personal touch */}
        <div className="mt-16 text-center animate-in">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl mb-4">Beyond the Code</h3>
            <p className="text-gray-700 mb-4">
            When I'm not coding, you'll probably find me bingeing on my favorite shows, hunting down the best cafes in town,
            or serenading my neighbors with my “unique” singing voice (don’t worry, they’re used to it!). I believe the best developers are curious, well-rounded humans who bring a little extra spark to everything they do.
            </p>
            <div className="flex justify-center space-x-4 text-2xl">
                <span>📺</span>   {/* binge-watching shows */}
                <span>☕</span>   {/* exploring cafes */}
                <span>🎤</span>   {/* singing to neighbors */}
                <span>✨</span>   {/* curiosity & spark */}
                </div>
          </div>
        </div>
      </div>
    </section>
  );
}