import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: 'Event Management System',
      description: 'A responsive event management platform to streamline event planning and tracking. Features include user authentication, event creation, registration management, and analytics dashboard.',
      image: '/project-event.jpg',
      tech: ['Spring Boot', 'Hibernate', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/hemanthcg',
      demo: '#',
    },
    {
      title: 'Medical Report Security',
      description: 'A secure backend system for medical report management using Flask and Blockchain. Integrated smart contracts to ensure data confidentiality and integrity in healthcare records.',
      image: '/project-medical.jpg',
      tech: ['Python Flask', 'MySQL', 'Blockchain', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/hemanthcg',
      demo: '#',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Project cards 3D deal animation
      const cards = gridRef.current?.querySelectorAll('.project-card');
      if (cards) {
        cards.forEach((card, i) => {
          gsap.fromTo(card,
            { rotateY: 45, x: 100, opacity: 0 },
            {
              rotateY: 0,
              x: 0,
              opacity: 1,
              duration: 0.8,
              delay: i * 0.2,
              ease: 'expo.out',
              scrollTrigger: {
                trigger: gridRef.current,
                start: 'top 70%',
                toggleActions: 'play none none reverse',
              }
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Image distortion effect on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, _index: number) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    const image = card.querySelector('.project-image') as HTMLElement;
    if (image) {
      image.style.transform = `scale(1.1) translate(${(x - 0.5) * 10}px, ${(y - 0.5) * 10}px)`;
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const image = e.currentTarget.querySelector('.project-image') as HTMLElement;
    if (image) {
      image.style.transform = 'scale(1) translate(0, 0)';
    }
  };

  return (
    <section 
      ref={sectionRef} 
      id="projects"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d0ff59]/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 
            ref={headingRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Featured Projects
          </h2>
          <p className="text-lg text-[#c2c2c2] max-w-2xl mx-auto">
            A showcase of my best work, demonstrating my skills in full-stack development.
          </p>
        </div>

        {/* Projects grid */}
        <div 
          ref={gridRef}
          className="grid md:grid-cols-2 gap-8"
          style={{ perspective: '1000px' }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group relative rounded-2xl overflow-hidden bg-[#1a1a1a] border border-white/10 hover:border-[#d0ff59]/30 transition-all duration-500"
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={() => setHoveredIndex(index)}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Image container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="project-image w-full h-full object-cover transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent" />
                
                {/* Scanline effect on hover */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute w-full h-1 bg-gradient-to-b from-transparent via-[#d0ff59]/50 to-transparent animate-scanline" />
                  </div>
                )}

                {/* RGB split effect on hover */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    background: 'linear-gradient(45deg, rgba(255,0,0,0.1) 0%, transparent 50%, rgba(0,255,255,0.1) 100%)',
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative p-6 lg:p-8">
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#d0ff59] transition-colors rgb-split">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[#c2c2c2] text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-[#d0ff59]/10 text-[#d0ff59] rounded-full border border-[#d0ff59]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive flex items-center gap-2 text-white/70 hover:text-[#d0ff59] transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a 
                    href={project.demo}
                    className="interactive flex items-center gap-2 text-white/70 hover:text-[#d0ff59] transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#d0ff59]/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#d0ff59]/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* View all projects link */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/hemanthcg"
            target="_blank"
            rel="noopener noreferrer"
            className="interactive inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full text-white hover:bg-white/5 hover:border-[#d0ff59]/50 transition-all duration-300"
          >
            <Layers className="w-5 h-5" />
            <span>View All Projects</span>
          </a>
        </div>
      </div>

      {/* Scanline keyframe */}
      <style>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
        .animate-scanline {
          animation: scanline 2s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Projects;
