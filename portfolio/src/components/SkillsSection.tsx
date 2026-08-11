import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import skillCategories from '../data/skills';

gsap.registerPlugin(ScrollTrigger);

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      '.skill-card',
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 70%',
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-40 h-40 bg-purple-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-pink-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <h2 className="text-5xl text-center mb-4 animate-in bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 animate-in">
          A comprehensive toolkit for building exceptional digital experiences 🛠️
        </p>

        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="skill-card bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center text-white shadow-md`}>
                  {category.icon}
                </div>
                <h3 className="text-xl">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-sm bg-gray-100 text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
