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
    { icon: Briefcase, value: '2+', label: 'Years Experience', delay: 0 },
    { icon: Code, value: '10+', label: 'Projects Completed', delay: 0.1 },
    { icon: Award, value: '5+', label: 'Technologies Mastered', delay: 0.2 },
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
              Results-driven software engineer with experience in developing robust, 
              secure, and scalable applications using Java, Spring Boot, Hibernate, and MySQL.
            </p>
            <p className="text-line text-lg text-[#c2c2c2] leading-relaxed">
              I specialize in building efficient backend logic while ensuring system 
              reliability and delivering solutions that enhance performance and user satisfaction.
            </p>
            <p className="text-line text-lg text-[#c2c2c2] leading-relaxed">
              My journey in tech started during my Computer Science degree, and I've since 
              honed my skills through internships and personal projects that solve real-world problems.
            </p>
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
