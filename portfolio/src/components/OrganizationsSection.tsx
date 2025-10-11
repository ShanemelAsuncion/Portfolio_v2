import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Badge } from '../assets/badge';
import { Award, Users, Sparkles } from 'lucide-react';
import organizations from '../data/organizations';

gsap.registerPlugin(ScrollTrigger);

export default function OrganizationsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {

    // Subtle floating
    gsap.to('.org-logo-card', {
      y: '+=5',
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.1,
    });
  
    // Icon rotation on hover
    const cardsEls = document.querySelectorAll('.org-logo-card');
    cardsEls.forEach((card) => {
      const logo = card.querySelector('.org-logo');
      card.addEventListener('mouseenter', () => {
        gsap.to(logo, {
          rotation: 360,
          duration: 0.6,
          ease: 'power2.out',
        });
      });
    });
  }, []);
  

  return (
    <section ref={sectionRef} className="py-20  relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <h2 className="text-5xl text-center mb-4 animate-in bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Organizations & Affiliations
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 animate-in">
          Communities and clubs I'm proud to be part of 🌟
        </p>


        <div className="org-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
          {organizations.map((org, index) => (
            <div
              key={index}
              className="org-logo-card group bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-purple-300 cursor-pointer"
            >
              <div className="flex justify-center mb-4">
                <div
                  className={`org-logo w-20 h-20 bg-gradient-to-br ${org.color} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow overflow-hidden`}
                >
                  {org.logo ? (
                    <img
                      src={org.logo}
                      alt={org.name}
                      className="max-w-3/4 max-h-3/4 object-contain rounded-full"
                    />
                  ) : (
                    <span className="text-white text-xl font-bold">{org.initials}</span>
                  )}
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-sm mb-2 line-clamp-2 min-h-[2.5rem]">{org.name}</h3>
                <Badge
                  variant="secondary"
                  className={`mb-2 text-xs bg-gradient-to-r ${org.color} text-white border-0`}
                >
                  {org.role}
                </Badge>
                <p className="text-xs text-gray-500 line-clamp-2">{org.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Users className="w-8 h-8" />,
              number: '5+',
              label: 'Organizations',
              color: 'from-blue-500 to-purple-500',
            },
            {
              icon: <Award className="w-8 h-8" />,
              number: '15+',
              label: 'Events Organized',
              color: 'from-purple-500 to-pink-500',
            },
            {
              icon: <Sparkles className="w-8 h-8" />,
              number: '200+',
              label: 'Community Members',
              color: 'from-pink-500 to-red-500',
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all hover:scale-105"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg`}
              >
                {stat.icon}
              </div>
              <div className={`text-3xl mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.number}
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
