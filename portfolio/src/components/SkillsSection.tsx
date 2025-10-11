import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import skillCategories from '../data/skills';
import { 
  Star,
  Sparkles,
  TrendingUp,
  Zap
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  useEffect(() => {
    // Smooth cards entrance animation
    gsap.fromTo(
      '.skill-card',
      { y: 60, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: 'power2.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 60%',
        },
      }
    );

    // Subtle continuous floating animation
    gsap.to('.skill-card', {
      y: -0.5,
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.3,
    });

    // Progress bar animations
    gsap.utils.toArray('.skill-progress-bar').forEach((bar: any) => {
      gsap.fromTo(
        bar,
        { width: '0%' },
        {
          width: bar.getAttribute('data-progress') + '%',
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 85%',
          },
        }
      );
    });

    // Icon pulse
    gsap.to('.skill-icon', {
      scale: 1.1,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.2,
    });
  }, []);

  const getSkillLevelText = (level: number) => {
    if (level >= 90) return { text: 'Expert', color: 'text-green-600', badge: '🏆' };
    if (level >= 80) return { text: 'Advanced', color: 'text-blue-600', badge: '⭐' };
    if (level >= 70) return { text: 'Proficient', color: 'text-purple-600', badge: '✨' };
    return null; // below threshold, don't show
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-40 h-40 bg-purple-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-pink-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <h2 className="text-5xl text-center mb-4 animate-in bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 animate-in">
          A comprehensive toolkit for building exceptional digital experiences 🛠️
        </p>

        {/* Skills Grid */}
        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="skill-card bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border-2 border-gray-100"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`skill-icon w-14 h-14 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center text-white shadow-md`}>
                  {category.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl">{category.title}</h3>
                  <p className="text-xs text-gray-500">{category.skills.length} technologies</p>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill) => {
                  const levelInfo = getSkillLevelText(skill.level);
                  return (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-1.5">
                        <div className="flex items-center gap-2">
                          <span className="text-sm">{skill.name}</span>
                          {levelInfo && <span className="text-xs">{levelInfo.badge}</span>}
                        </div>
                        <div className="flex items-center gap-2">
                          {levelInfo && (
                            <span className={`text-xs ${levelInfo.color}`}>
                              {levelInfo.text}
                            </span>
                          )}
                          <span className="text-xs text-gray-500">{skill.level}%</span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                          className={`skill-progress-bar h-2 bg-gradient-to-r ${category.color} rounded-full`}
                          data-progress={skill.level}
                          style={{ width: '0%' }}
                        ></div>
                      </div>

                      {/* Description on hover */}
                      {hoveredCategory === category.id && (
                        <p className="text-xs text-gray-600 mt-1 animate-in">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Fun Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '25+', label: 'Technologies', icon: <Zap className="w-6 h-6" />, color: 'from-blue-400 to-blue-600' },
            { number: '20+', label: 'Projects Built', icon: <Star className="w-6 h-6" />, color: 'from-green-400 to-green-600' },
            { number: '5+', label: 'Years Learning', icon: <TrendingUp className="w-6 h-6" />, color: 'from-purple-400 to-purple-600' },
            { number: '∞', label: 'Passion', icon: <Sparkles className="w-6 h-6" />, color: 'from-pink-400 to-pink-600' }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all transform hover:scale-105"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center text-white mb-3 mx-auto`}>
                {stat.icon}
              </div>
              <div className="text-3xl text-center mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600 text-center">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
