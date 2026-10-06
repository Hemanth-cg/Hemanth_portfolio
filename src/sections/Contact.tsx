import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send,
  CheckCircle,
  Loader2
} from 'lucide-react';
import { toast } from 'sonner';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'hemanthcghemu@gmail.com', href: 'mailto:hemanthcghemu@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 7338043749', href: 'tel:+917338043749' },
    { icon: MapPin, label: 'Location', value: 'Bengaluru, India', href: '#' },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Hemanth-cg' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/hemanth-cg-746279259/' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading glitch reveal
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'steps(10)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Form lines draw animation
      const formLines = formRef.current?.querySelectorAll('.form-line');
      if (formLines) {
        gsap.fromTo(formLines,
          { width: '0%' },
          {
            width: '100%',
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: formRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      }

      // Info cards animation
      const infoCards = infoRef.current?.querySelectorAll('.info-card');
      if (infoCards) {
        gsap.fromTo(infoCards,
          { x: 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: infoRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Message sent successfully!');
    
    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section 
      ref={sectionRef} 
      id="contact"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 
            ref={headingRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Let's Connect
          </h2>
          <p className="text-lg text-[#c2c2c2] max-w-2xl mx-auto">
            Have a project in mind? Let's build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            {/* Name field */}
            <div className="relative">
              <label 
                className={`absolute left-0 transition-all duration-300 ${
                  focusedField === 'name' || formData.name 
                    ? '-top-6 text-sm text-[#d0ff59]' 
                    : 'top-3 text-[#c2c2c2]'
                }`}
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                required
                className="w-full bg-transparent border-b-2 border-white/20 py-3 text-white focus:outline-none focus:border-[#d0ff59] transition-colors"
              />
              <div className="form-line absolute bottom-0 left-0 h-0.5 bg-[#d0ff59]" style={{ width: focusedField === 'name' ? '100%' : '0%' }} />
            </div>

            {/* Email field */}
            <div className="relative">
              <label 
                className={`absolute left-0 transition-all duration-300 ${
                  focusedField === 'email' || formData.email 
                    ? '-top-6 text-sm text-[#d0ff59]' 
                    : 'top-3 text-[#c2c2c2]'
                }`}
              >
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                required
                className="w-full bg-transparent border-b-2 border-white/20 py-3 text-white focus:outline-none focus:border-[#d0ff59] transition-colors"
              />
              <div className="form-line absolute bottom-0 left-0 h-0.5 bg-[#d0ff59]" style={{ width: focusedField === 'email' ? '100%' : '0%' }} />
            </div>

            {/* Message field */}
            <div className="relative">
              <label 
                className={`absolute left-0 transition-all duration-300 ${
                  focusedField === 'message' || formData.message 
                    ? '-top-6 text-sm text-[#d0ff59]' 
                    : 'top-3 text-[#c2c2c2]'
                }`}
              >
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                required
                rows={4}
                className="w-full bg-transparent border-b-2 border-white/20 py-3 text-white focus:outline-none focus:border-[#d0ff59] transition-colors resize-none"
              />
              <div className="form-line absolute bottom-0 left-0 h-0.5 bg-[#d0ff59]" style={{ width: focusedField === 'message' ? '100%' : '0%' }} />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`interactive group relative w-full sm:w-auto px-8 py-4 rounded-full font-semibold transition-all duration-500 overflow-hidden ${
                isSubmitted 
                  ? 'bg-green-500 text-white' 
                  : 'bg-[#d0ff59] text-[#0f0f0f] hover:shadow-[0_0_30px_rgba(208,255,89,0.5)]'
              }`}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </span>
            </button>
          </form>

          {/* Contact Info */}
          <div ref={infoRef} className="space-y-6">
            {/* Contact details */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="info-card interactive flex items-center gap-4 p-4 glass rounded-xl hover:border-[#d0ff59]/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#d0ff59]/10 flex items-center justify-center group-hover:bg-[#d0ff59]/20 transition-colors">
                    <item.icon className="w-5 h-5 text-[#d0ff59]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#c2c2c2]">{item.label}</p>
                    <p className="text-white font-medium group-hover:text-[#d0ff59] transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div className="pt-6 border-t border-white/10">
              <p className="text-sm text-[#c2c2c2] mb-4">Connect with me</p>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive w-12 h-12 rounded-xl glass flex items-center justify-center text-white/70 hover:text-[#d0ff59] hover:border-[#d0ff59]/30 transition-all duration-300"
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="info-card glass rounded-xl p-4 flex items-center gap-3">
              <div className="relative">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping" />
              </div>
              <div>
                <p className="text-white font-medium">Available for work</p>
                <p className="text-sm text-[#c2c2c2]">Open to full-time opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
