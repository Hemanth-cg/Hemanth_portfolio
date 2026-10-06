import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Code, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const stats = [
    { icon: Briefcase, value: '0.6+', label: 'Years Experience', delay: 0 },
    { icon: Code, value: '5+', label: 'Projects Completed', delay: 0.1 },
    { icon: Award, value: '10+', label: 'Technologies Mastered', delay: 0.2 },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading slide and mask reveal
      gsap.fromTo(headingRef.current,
        { x: -50, opacity: 0, clipPath: 'inset(0 100% 0 0)' },
        {
          x: 0,
          opacity: 1,
          clipPath: 'inset(0 0% 0 0)',
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Body text line stagger
      const textLines = textRef.current?.querySelectorAll('.text-line');
      if (textLines) {
        gsap.fromTo(textLines,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      }

      // Stats cards 3D flip
      const statCards = statsRef.current?.querySelectorAll('.stat-card');
      if (statCards) {
        gsap.fromTo(statCards,
          { rotateX: 90, opacity: 0 },
          {
            rotateX: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      }

      // Stats levitation on scroll
      if (statCards) {
        statCards.forEach((card, i) => {
          gsap.to(card, {
            y: -30 * (i % 2 === 0 ? 1 : -1),
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            }
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 3D tilt effect for stat cards
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
  };

  return (
    <section 
      ref={sectionRef} 
      id="about"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Content */}
        <div className="text-center">
          <h2 
            ref={headingRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8"
          >
            About Me
          </h2>

          <div ref={textRef} className="space-y-4 mb-10 max-w-2xl mx-auto">
            <p className="text-line text-lg text-[#c2c2c2] leading-relaxed">
              I’m a Java Full Stack Developer focused on creating clean, scalable, and high-performance web applications
              using React.js, Java, Spring Boot, Flask, and MySQL.
            </p>
            <p className="text-line text-lg text-[#c2c2c2] leading-relaxed">
              I enjoy turning business requirements into practical solutions by building responsive interfaces,
              designing efficient backend services, and integrating secure APIs with reliable data models.
            </p>
            <p className="text-line text-lg text-[#c2c2c2] leading-relaxed">
              Through internships and project work, I’ve developed a strong foundation in full-stack development,
              database design, and problem-solving for real-world application needs.
            </p>

            <div className="pt-4">
              <p className="text-sm uppercase tracking-[0.2em] text-[#d0ff59] mb-3">Let’s Connect</p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com/Hemanth-cg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition hover:border-[#d0ff59] hover:text-[#d0ff59]"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/hemanth-cg-746279259/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition hover:border-[#d0ff59] hover:text-[#d0ff59]"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Stats cards */}
          <div ref={statsRef} className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card glass rounded-xl p-4 lg:p-6 text-center cursor-pointer transition-all duration-300 hover:glow-accent"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <stat.icon className="w-6 h-6 text-[#d0ff59] mx-auto mb-3" />
                <p className="text-2xl lg:text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-xs lg:text-sm text-[#c2c2c2]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
