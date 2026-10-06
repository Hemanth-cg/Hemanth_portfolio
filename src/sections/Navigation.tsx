import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { label: 'Home', href: '/HemanthCG', sectionId: 'hero' },
    { label: 'About', href: '/HemanthCG', sectionId: 'about' },
    { label: 'Experience', href: '/HemanthCG', sectionId: 'experience' },
    { label: 'Projects', href: '/HemanthCG', sectionId: 'projects' },
    { label: 'Skills', href: '/HemanthCG', sectionId: 'skills' },
    { label: 'Contact', href: '/HemanthCG', sectionId: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();

    if (window.location.pathname !== '/HemanthCG') {
      window.history.pushState({}, '', '/HemanthCG');
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#0f0f0f]/80 backdrop-blur-xl border-b border-white/5' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a 
              href="/HemanthCG"
              onClick={(e) => handleNavClick(e, 'hero')}
              className="interactive text-2xl font-bold text-white hover:text-[#d0ff59] transition-colors"
            >
              Hemanth C G<span className="text-[#d0ff59]"></span>
            </a>

            {/* Desktop menu */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.sectionId)}
                  className={`interactive relative px-4 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.sectionId
                      ? 'text-[#d0ff59]'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.sectionId && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#d0ff59] rounded-full" />
                  )}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="/HemanthCG"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="interactive hidden lg:block px-6 py-2.5 bg-[#d0ff59] text-[#0f0f0f] text-sm font-semibold rounded-full hover:shadow-[0_0_20px_rgba(208,255,89,0.4)] transition-all duration-300"
            >
              Hire Me
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="interactive lg:hidden w-10 h-10 flex items-center justify-center text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-[#0f0f0f]/95 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu content */}
        <div className="relative h-full flex flex-col items-center justify-center gap-6">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.sectionId)}
              className={`text-3xl font-bold transition-all duration-300 ${
                activeSection === item.sectionId
                  ? 'text-[#d0ff59]'
                  : 'text-white/70 hover:text-white'
              }`}
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: isMobileMenuOpen ? 1 : 0,
              }}
            >
              {item.label}
            </a>
          ))}
          
          <a
            href="/HemanthCG"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="mt-8 px-8 py-3 bg-[#d0ff59] text-[#0f0f0f] font-semibold rounded-full"
            style={{
              transitionDelay: isMobileMenuOpen ? `${navItems.length * 50}ms` : '0ms',
              transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: isMobileMenuOpen ? 1 : 0,
            }}
          >
            Hire Me
          </a>
        </div>
      </div>
    </>
  );
};

export default Navigation;
