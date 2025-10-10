import  { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from './components/HeroSection.tsx';
import AboutSection from './components/AboutSection.tsx';
import ProjectsSection from './components/ProjectsSection.tsx';
import SkillsSection from './components/SkillsSection.tsx';
import OrganizationsSection from './components/OrganizationsSection.tsx';
import ContactSection from './components/ContactSection.tsx';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.set('.animate-in', { y: 100, opacity: 0 });

    gsap.utils.toArray('.animate-in').forEach((element: any) => {
      gsap.to(element, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    gsap.to('.float', {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
      stagger: 0.3
    });

  }, []);

  return (
    <div ref={appRef} className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 overflow-x-hidden">
      {/* Floating background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="float absolute top-20 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20"></div>
        <div className="float absolute top-40 right-20 w-16 h-16 bg-pink-300 rounded-lg opacity-20 rotate-45"></div>
        <div className="float absolute top-60 left-1/3 w-12 h-12 bg-blue-300 rounded-full opacity-20"></div>
        <div className="float absolute bottom-40 right-10 w-24 h-24 bg-green-300 rounded-lg opacity-20"></div>
        <div className="float absolute bottom-60 left-20 w-18 h-18 bg-purple-300 rounded-full opacity-20"></div>
      </div>

      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <OrganizationsSection />
        <ContactSection />
      </div>

      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20">
        <div className="flex flex-col space-y-2">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="w-2 h-2 bg-gray-300 rounded-full transition-all duration-300 scroll-dot"
              data-section={i}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}