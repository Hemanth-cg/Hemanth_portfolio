import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      role: 'Full Stack Intern',
      company: 'Pentagon Space',
      location: 'Bengaluru, India',
      date: 'June 2024',
      points: [
        'Worked on Java Full Stack development projects focusing on Spring Boot, React.js',
        'Integrated MySQL database operations with Hibernate ORM for optimized data handling',
        'Developed and implemented backend logic using Spring Boot for scalable web applications',
      ],
    },
    {
      role: 'Data Science Intern',
      company: 'Ekathva Innovations Pvt Ltd',
      location: 'Shimoga, India',
      date: 'Sept 2023',
      points: [
        'Developed data processing scripts for efficient transformation and cleaning of large datasets using Python',
        'Implemented machine learning algorithms and visualization tools, improving insight discovery by 40%',
        'Collaborated with the team to design UI components for improved user experience',
      ],
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

      // Timeline line draw animation
      gsap.fromTo(lineRef.current,
        { scaleY: 0, transformOrigin: 'top' },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Experience cards animation
      const cards = timelineRef.current?.querySelectorAll('.experience-card');
      if (cards) {
        cards.forEach((card, i) => {
          gsap.fromTo(card,
            { x: i % 2 === 0 ? -50 : 50, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
              delay: i * 0.2,
              ease: 'expo.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              }
            }
          );
        });
      }

      // Timeline dots animation
      const dots = timelineRef.current?.querySelectorAll('.timeline-dot');
      if (dots) {
        dots.forEach((dot, i) => {
          gsap.fromTo(dot,
            { scale: 0 },
            {
              scale: 1,
              duration: 0.5,
              delay: i * 0.2 + 0.5,
              ease: 'back.out(2)',
              scrollTrigger: {
                trigger: timelineRef.current,
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

  return (
    <section 
      ref={sectionRef} 
      id="experience"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d0ff59]/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 
            ref={headingRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Experience
          </h2>
          <p className="text-lg text-[#c2c2c2] max-w-2xl mx-auto">
            My professional journey and the valuable experience I've gained along the way.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Vertical line */}
          <div 
            ref={lineRef}
            className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#d0ff59] via-[#d0ff59]/50 to-transparent"
          />

          {/* Experience items */}
          <div className="space-y-12 lg:space-y-0">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-8 ${
                  index > 0 ? 'lg:mt-12' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="timeline-dot absolute left-4 lg:left-1/2 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-[#d0ff59] glow-accent z-10" />

                {/* Content */}
                <div 
                  className={`experience-card ml-12 lg:ml-0 ${
                    index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:col-start-2 lg:pl-12'
                  }`}
                >
                  <div className="glass rounded-2xl p-6 lg:p-8 hover:border-[#d0ff59]/30 transition-all duration-300 group">
                    {/* Date badge */}
                    <div className={`inline-flex items-center gap-2 px-4 py-2 bg-[#d0ff59]/10 rounded-full mb-4 ${
                      index % 2 === 0 ? 'lg:ml-auto' : ''
                    }`}>
                      <Calendar className="w-4 h-4 text-[#d0ff59]" />
                      <span className="text-sm text-[#d0ff59] font-medium">{exp.date}</span>
                    </div>

                    {/* Role & Company */}
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#d0ff59] transition-colors">
                      {exp.role}
                    </h3>
                    <div className={`flex items-center gap-2 text-[#c2c2c2] mb-4 ${
                      index % 2 === 0 ? 'lg:justify-end' : ''
                    }`}>
                      <span className="font-medium">{exp.company}</span>
                      <span className="text-white/30">•</span>
                      <span className="flex items-center gap-1 text-sm">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Points */}
                    <ul className="space-y-3">
                      {exp.points.map((point, i) => (
                        <li 
                          key={i}
                          className={`flex items-start gap-3 text-[#c2c2c2] ${
                            index % 2 === 0 ? 'lg:flex-row-reverse lg:text-right' : ''
                          }`}
                        >
                          <ChevronRight className="w-5 h-5 text-[#d0ff59] flex-shrink-0 mt-0.5" />
                          <span className="text-sm leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty column for alternating layout */}
                {index % 2 === 0 && <div className="hidden lg:block" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
