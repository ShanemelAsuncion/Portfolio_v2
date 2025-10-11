import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Button } from '../assets/button';
import { Input } from '../assets/input';
import { Textarea } from '../assets/textarea';
import { Label } from '../assets/label';
import { Badge } from '../assets/badge';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Github, 
  Linkedin, 
  MessageSquare, 
  Send, 
  Zap, 
  Heart,
  Coffee,
  MessageCircle,
  CheckCircle,
  Sparkles
} from 'lucide-react';

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const inputs = gsap.utils.toArray('.form-input');
    
    inputs.forEach((input: any) => {
      const label = input.previousElementSibling;
      
      input.addEventListener('focus', () => {
        gsap.to(label, { y: -5, scale: 0.9, duration: 0.3, ease: 'back.out(1.7)' });
        gsap.to(input, { scale: 1.02, duration: 0.3 });
      });
      
      input.addEventListener('blur', () => {
        if (!input.value) {
          gsap.to(label, { y: 0, scale: 1, duration: 0.3 });
        }
        gsap.to(input, { scale: 1, duration: 0.3 });
      });
    });

    gsap.fromTo('.social-icon',
      { scale: 0, rotation: 180 },
      {
        scale: 1,
        rotation: 0,
        duration: 1,
        ease: 'back.out(1.7)',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.social-links',
          start: 'top 80%'
        }
      }
    );

    gsap.to('.contact-float', {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
      stagger: 0.5
    });

  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    gsap.to(formRef.current, { scale: 0.98, duration: 0.2 });

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      };
      await emailjs.send(
        'service_n9bq6bw',    
        'template_u7femyk',   
        templateParams,
        '5s7wb0VOGgNYyG9MF'     
      );

      setShowSuccess(true);
      gsap.to('.success-animation', {
        scale: 1.1,
        rotation: 360,
        duration: 1,
        ease: 'back.out(1.7)'
      });
      
      toast.success("Message sent successfully! I'll get back to you soon 🚀");

      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setShowSuccess(false), 3000);

    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Please try again!');
    } finally {
      setIsSubmitting(false);
      gsap.to(formRef.current, { scale: 1, duration: 0.2 });
    }
  };

  const socialLinks = [
    { name: 'GitHub', icon: <Github className="w-6 h-6" />, url: 'https://github.com/ShanemelAsuncion', color: 'hover:bg-gray-800', description: 'Check out my code' },
    { name: 'LinkedIn', icon: <Linkedin className="w-6 h-6" />, url: 'https://linkedin.com/in/shanemel', color: 'hover:bg-blue-600', description: 'Let\'s connect professionally' },
    { name: 'Message', icon: <MessageSquare className="w-6 h-6" />, url: 'https://huggingface.co/shanemel', color: 'hover:bg-blue-400', description: 'Follow my dev journey' },
    { name: 'Email', icon: <Mail className="w-6 h-6" />, url: 'mailto:shanemelasuncion@gmail.com', color: 'hover:bg-red-500', description: 'Send me an email' }
  ];

  const quickTopics = [
    'Freelance Project',
    'Full-time Opportunity',
    'Collaboration',
    'Mentorship',
    'Coffee Chat',
    'Code Review'
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="contact-float absolute top-20 left-10 w-24 h-24 bg-yellow-300 rounded-full"></div>
        <div className="contact-float absolute top-40 right-20 w-32 h-32 bg-pink-300 rounded-lg rotate-45"></div>
        <div className="contact-float absolute bottom-40 left-1/4 w-20 h-20 bg-green-300 rounded-full"></div>
        <div className="contact-float absolute bottom-20 right-10 w-28 h-28 bg-blue-300 rounded-lg"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-5xl text-center mb-4 animate-in bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
          Let's Create Something Amazing
        </h2>
        <p className="text-xl text-gray-300 text-center mb-16 animate-in">
          Ready to turn your ideas into reality? Let's chat! ✨
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl mb-6 flex items-center gap-3">
              <MessageCircle className="w-8 h-8 text-yellow-400" />
              Send Me a Message
            </h3>

            <div className="mb-6">
              <p className="text-sm text-gray-300 mb-3">What would you like to discuss?</p>
              <div className="flex flex-wrap gap-2">
                {quickTopics.map((topic) => (
                  <Badge
                    key={topic}
                    variant="outline"
                    className="cursor-pointer hover:bg-white/20 transition-colors border-white/30 text-white hover:text-white"
                    onClick={() => setFormData(prev => ({ ...prev, subject: topic }))}
                  >
                    {topic}
                  </Badge>
                ))}
              </div>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-white mb-2 block">Name *</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleInputChange}
                    className="form-input bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                    placeholder="Your awesome name" required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white mb-2 block">Email *</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange}
                    className="form-input bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                    placeholder="your.email@example.com" required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="subject" className="text-white mb-2 block">Subject</Label>
                <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange}
                  className="form-input bg-white/10 border-white/30 text-white placeholder:text-gray-300"
                  placeholder="What's on your mind?"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-white mb-2 block">Message *</Label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange}
                  className="form-input bg-white/10 border-white/30 text-white placeholder:text-gray-300 min-h-32"
                  placeholder="Tell me about your project, idea, or just say hi! 👋" required
                />
              </div>

              <Button type="submit" disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 text-black hover:text-black disabled:opacity-50 transform hover:scale-105 transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <Zap className="w-5 h-5 mr-2 animate-spin" />
                    Sending Magic...
                  </>
                ) : showSuccess ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2 success-animation" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>

            {/* Live Server Response Demo */}
            <div className="mt-6 p-4 bg-gray-900 rounded-lg border border-gray-700">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-xs text-gray-400">Live Server Response</span>
              </div>
              <div className="font-mono text-xs text-green-400">
                POST /api/contact → {isSubmitting ? 'Processing...' : showSuccess ? '200 OK' : 'Ready'}
              </div>
            </div>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            <div className="social-links">
              <h3 className="text-2xl mb-6 flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-pink-400" />
                Let's Connect
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer"
                    className={`social-icon group p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 transition-all duration-300 hover:scale-105 ${social.color} hover:border-transparent`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
                        {social.icon}
                      </div>
                      <div>
                        <div className="text-sm">{social.name}</div>
                        <div className="text-xs text-gray-300">{social.description}</div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Coffee and Code */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h4 className="text-xl mb-4 flex items-center gap-3">
                    <Coffee className="w-6 h-6 text-yellow-400" />
                    Coffee & Code
                </h4>
                <p className="text-gray-300 mb-4">
                    I love connecting over coffee (virtual or in-person) to discuss exciting projects, collaborations, or new opportunities. 
                    Whether you're looking for a developer for your startup, a freelance project, or a full-time role, I'd be happy to chat and see how we can create something amazing together.
                </p>
                
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm">Typically responds within 24 hours</span>
                    </div>
                    <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-sm">Open to freelance and full-time opportunities</span>
                    </div>
                    <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    <span className="text-sm">Always excited for collaboration and mentorship</span>
                    </div>
                </div>
            </div>


            {/* Fun Fact */}
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="flex items-start gap-4">
                    <Heart className="w-8 h-8 text-red-400 animate-pulse flex-shrink-0 mt-1" />
                    <div>
                    <h4 className="text-lg mb-2">Fun Fact</h4>
                    <p className="text-sm text-gray-300">
                        My first hackathon was a wild ride! I joined Hack the North virtually with three other teammates: one in Germany, one who fell asleep for 10+ hours, and one whose MacBook broke mid-event. With less than 48 hours to deliver a working MVP, we somehow managed to pull together a basic prototype and demo it. It was chaotic, challenging, and an unforgettable introduction to collaborative coding under pressure!
                    </p>
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center">
          <p className="text-gray-400 mb-4">
            Built with TypeScript, Tailwind, GSAP, and lots of ☕ by Shanemel Asuncion
          </p>
          <div className="flex justify-center gap-4 text-sm text-gray-500">
            <span>© 2025</span>
            <span>•</span>
            <span>Made with ❤️ and coffee</span>
            <span>•</span>
            <span>Always learning, always growing</span>
          </div>
        </div>
      </div>
    </section>
  );
}