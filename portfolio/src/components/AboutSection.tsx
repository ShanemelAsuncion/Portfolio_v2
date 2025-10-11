import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FloatingCodeSnippets from '../assets/floatingcodesnippets';
import timelineData from '../data/timelineData';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    if (!sectionRef.current || !timelineRef.current) return;
  
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: timelineRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1,
      },
    });
  
    const items = timelineRef.current.querySelectorAll('.timeline-item');
      if (items.length) {
        timeline.fromTo(items, { x: -100, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.3, duration: 1 });
      }
    
    const line = timelineRef.current.querySelector('.timeline-line');
      if (line) {
        timeline.fromTo(line, { scaleY: 0 }, { scaleY: 1, duration: 2 }, 0);
      }
  
    const flowItems = sectionRef.current.querySelectorAll('.flow-item');
      if (flowItems.length) {
        gsap.fromTo(flowItems, { scale: 0, rotation: 180 }, {
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: 'back.out(1.7)',
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current.querySelector('.tech-flow'),
            start: 'top 80%',
          },
        });
      }
  
    const arrows = sectionRef.current.querySelectorAll('.flow-arrow');
      if (arrows.length) {
        gsap.fromTo(arrows, { scaleX: 0 }, {
          scaleX: 1,
          duration: 0.8,
          stagger: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current.querySelector('.tech-flow'),
            start: 'top 70%',
          },
        });
      }
    }, []);
  

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
          <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-400 to-pink-400 origin-top"></div>

          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`timeline-item relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-100 hover:border-purple-300 transition-all duration-300 group cursor-pointer">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`${item.color} text-white p-2 rounded-full`}>
                      <item.Icon className="w-6 h-6" />  
                    </span>
                    <span className="text-2xl">{item.year}</span>
                  </div>
                  <h3 className="text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>

                  {/* Fun facts on hover */}
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
                <div className={`w-4 h-4 ${item.color} rounded-full border-4 border-white shadow-lg z-10`}></div>
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
              <span>📺</span>
              <span>☕</span>
              <span>🎤</span>
              <span>✨</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
