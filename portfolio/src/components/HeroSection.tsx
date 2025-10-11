import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Code, Heart, Zap, Star, Coffee, Github, Linkedin, MessageSquare, Mail } from 'lucide-react';


export default function HeroSection() {
    const heroRef = useRef<HTMLDivElement>(null);
    const avatarRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [apiData, setApiData] = useState<string>('');
    const profilePic = `${import.meta.env.BASE_URL}pic.JPG`;
    const socialLinks = [
      { icon: Github, url: 'https://github.com/ShanemelAsuncion', label: 'GitHub' },
      { icon: Linkedin, url: 'https://linkedin.com/in/shanemel', label: 'LinkedIn' },
      { icon: MessageSquare, url: 'https://huggingface.co/shanemel', label: 'Hugging Face' },
      { icon: Mail, url: 'mailto:shanemelasuncion@gmail.com', label: 'Email'},
    ];


    useEffect(() => {
        // Animated greeting
        const letters = gsap.utils.toArray('.hero-letter');
        gsap.fromTo(
          letters,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "elastic.out(1, 0.5)",
            stagger: 0.05,
          }
        );
    
        // Bouncing animation for letters
        gsap.to(letters, {
          y: -10,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'power2.inOut',
          stagger: 0.2
        });
    
        // Floating code snippets
        gsap.to('.code-snippet', {
          y: -20,
          rotation: 5,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'power2.inOut',
          stagger: 0.5
        });
    
        // Mock API animation
        const interval = setInterval(() => {
          const responses = [
            'GET /api/users → 200 OK',
            'POST /api/data → 201 Created',
            'PUT /api/update → 200 OK',
            'GET /api/projects → 200 OK'
          ];
          setApiData(responses[Math.floor(Math.random() * responses.length)]);
        }, 2000);
    
        return () => clearInterval(interval);
      }, []);
    
      // Mouse tracking for avatar
      useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
          if (avatarRef.current) {
            const rect = avatarRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            setMousePos({
              x: (e.clientX - centerX) * 0.1,
              y: (e.clientY - centerY) * 0.1
            });
          }
        };
    
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
      }, []);
    
      const greeting = "Hi! I am ";
      const name = "Shanemel Asuncion";
    
      return (
        <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100">
          <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-purple-500 to-pink-500"></div>

        {/* Decorative stuff */}
          <div className="absolute inset-0 pointer-events-none opacity-30">
            <div className="absolute top-20 left-10 w-40 h-40 bg-purple-300 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-60 h-60 bg-pink-300 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-blue-300 rounded-full blur-3xl"></div>
          </div>
          <div className="absolute inset-0 pointer-events-none">
            <div className="code-snippet absolute top-20 left-10 bg-purple-100 rounded-lg p-3 shadow-lg transform rotate-12">
              <code className="text-purple-800">const developer = "awesome";</code>
            </div>
            <div className="code-snippet absolute top-40 right-20 bg-pink-100 rounded-lg p-3 shadow-lg transform -rotate-6">
              <code className="text-pink-800">{"{ fullStack: true }"}</code>
            </div>
            <div className="code-snippet absolute bottom-40 left-20 bg-blue-100 rounded-lg p-3 shadow-lg transform rotate-6">
              <code className="text-blue-800">npm install creativity</code>
            </div>
            <div className="code-snippet absolute bottom-20 right-10 bg-green-100 rounded-lg p-3 shadow-lg transform -rotate-12">
              <code className="text-green-800">git commit -m "magic"</code>
            </div>
          </div>
    
          {/* Main content */}
          <div className="text-center z-10 max-w-4xl mx-auto px-6">
            {/* Animated greeting */}
            <h1 className="text-6xl md:text-7xl mb-4 leading-tight">
              {greeting}
              {name.split('').map((char, index) => (
                <span
                  key={index}
                  className={`hero-letter inline-block ${
                    char === ' ' ? 'w-3' : ''
                  } bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent`}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </h1>


            {/* Interactive avatar */}
            <div 
              ref={avatarRef}
              className="relative w-32 h-32 mx-auto mb-8 cursor-pointer"
              style={{ 
                transform: `translate(${mousePos.x}px, ${mousePos.y}px)` 
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300">
              <img 
                src={profilePic} 
                alt="Shanemel Asuncion" 
                className="w-24 h-24 rounded-full object-cover"
                />
              </div>
              
              {/* Floating icons around avatar */}
              <Code className="absolute -top-2 -right-2 w-6 h-6 text-blue-500 animate-bounce" style={{ animationDelay: '0s' }} />
              <Heart className="absolute -bottom-2 -left-2 w-6 h-6 text-red-500 animate-bounce" style={{ animationDelay: '0.5s' }} />
              <Zap className="absolute top-1/2 -left-8 w-6 h-6 text-yellow-500 animate-bounce" style={{ animationDelay: '1s' }} />
              <Star className="absolute top-1/2 -right-8 w-6 h-6 text-purple-500 animate-bounce" style={{ animationDelay: '1.5s' }} />
            </div>
    
            {/* Subtitle */}
            <p className="text-2xl text-gray-600 mb-8 animate-in">
              Creating delightful digital experiences with passion & precision ✨
            </p>

            {/* Social links */}
            <div className="flex justify-center gap-4 mb-8 animate-in">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full !bg-black border-2 border-black flex items-center justify-center !ext-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
    
            {/* Live API demonstration */}
            <div className="bg-gray-900 text-green-400 rounded-lg p-4 max-w-md mx-auto mb-8 animate-in">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                <span className="text-gray-400">terminal</span>
              </div>
              <div className="font-mono text-sm">
                <span className="text-gray-400">$</span> {apiData || 'Connecting to API...'}
                <span className="animate-pulse">|</span>
              </div>
            </div>
    
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open(`${import.meta.env.BASE_URL}/resume.pdf`, "_blank")}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-2xl">
                  fetch Resume() <Star className="inline w-5 h-5 ml-2" />
              </button>
              <button 
                onClick={() => {
                  const contactSection = document.querySelector("#contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  } else {
                    console.warn("Contact section not found");
                  }
                }}
                className="bg-white text-gray-800 px-8 py-4 rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-2xl border-2 border-gray-200">
                  hire --dev <Coffee className="inline w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
    
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>
      );
    }
