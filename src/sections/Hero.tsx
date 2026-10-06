import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const fluidRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fluid background animation
      gsap.fromTo(fluidRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: 'power2.out' }
      );

      // Name character animation
      if (nameRef.current) {
        const chars = nameRef.current.querySelectorAll('.char');
        gsap.fromTo(chars,
          { y: '100%', rotateX: 90, opacity: 0 },
          { 
            y: '0%', 
            rotateX: 0, 
            opacity: 1, 
            duration: 1, 
            stagger: 0.05, 
            ease: 'expo.out',
            delay: 0.2 
          }
        );
      }

      // Role typewriter effect
      gsap.fromTo(roleRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, delay: 0.8 }
      );

      // Description fade in
      gsap.fromTo(descRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 1, ease: 'power2.out' }
      );

      // CTA buttons pop in
      gsap.fromTo(ctaRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, delay: 1.2, ease: 'back.out(1.7)' }
      );

      // Parallax on scroll
      gsap.to(nameRef.current, {
        y: -100,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Split name into characters
  const name = 'Hemanth C G';
  const nameChars = name.split('').map((char, i) => (
    <span key={i} className="char inline-block" style={{ display: char === ' ' ? 'inline' : 'inline-block' }}>
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));

  return (
    <section 
      ref={heroRef} 
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Fluid background blobs */}
      <div ref={fluidRef} className="absolute inset-0 overflow-hidden">
        <div className="fluid-blob absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-radial from-[#d0ff59]/20 via-[#d0ff59]/5 to-transparent blur-3xl" />
        <div className="fluid-blob absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-radial from-[#d0ff59]/15 via-[#d0ff59]/3 to-transparent blur-3xl" style={{ animationDelay: '-5s' }} />
        <div className="fluid-blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-[#1a1a1a]/50 to-transparent blur-3xl" style={{ animationDelay: '-10s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-8 py-20 text-center">
        <p className="text-[#d0ff59] text-lg mb-4 font-medium tracking-wide">
          Hello, I'm
        </p>
        
        <h1 
          ref={nameRef}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight"
          style={{ perspective: '1000px' }}
        >
          {nameChars}
        </h1>
        
        <p 
          ref={roleRef}
          className="text-2xl sm:text-3xl lg:text-4xl text-white/90 mb-6 font-light typewriter-cursor"
        >
          Java Full Stack Developer
        </p>
        
        <p 
          ref={descRef}
          className="text-lg text-[#c2c2c2] max-w-xl mx-auto mb-10 leading-relaxed"
        >
          I build robust, secure, and scalable applications that bridge the gap between 
          complex backend logic and seamless user experiences.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/HemanthCG"
            className="interactive magnetic-btn group relative px-8 py-4 bg-[#d0ff59] text-[#0f0f0f] font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(208,255,89,0.5)]"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Hemanth C G
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </span>
          </a>
          
          <a 
            href="/HemanthCG"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState({}, '', '/HemanthCG');
              }
            }}
            className="interactive magnetic-btn px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Social links */}
        <div className="flex gap-4 mt-10 justify-center">
          <a 
            href="https://github.com/hemanthcg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="interactive w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-[#d0ff59] hover:border-[#d0ff59] transition-all duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com/in/hemanthcg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="interactive w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-[#d0ff59] hover:border-[#d0ff59] transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="mailto:hemanthcghemu@gmail.com"
            className="interactive w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-[#d0ff59] hover:border-[#d0ff59] transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f0f0f] to-transparent" />
    </section>
  );
};

export default Hero;
