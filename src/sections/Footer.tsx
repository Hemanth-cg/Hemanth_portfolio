import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/hemanthcg', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/hemanthcg', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hemanthcghemu@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative py-16 border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#d0ff59]/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#hero" className="inline-block text-3xl font-bold text-white mb-4">
              Hemanth C G<span className="text-[#d0ff59]"></span>
            </a>
            <p className="text-[#c2c2c2] mb-6 max-w-sm">
              Java Full Stack Developer passionate about building robust, scalable, and user-friendly applications.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/70 hover:text-[#d0ff59] hover:bg-[#d0ff59]/10 transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="interactive text-[#c2c2c2] hover:text-[#d0ff59] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <a 
                href="mailto:hemanthcghemu@gmail.com"
                className="interactive flex items-center gap-3 text-[#c2c2c2] hover:text-[#d0ff59] transition-colors"
              >
                <Mail className="w-5 h-5" />
                hemanthcghemu@gmail.com
              </a>
              <a 
                href="tel:+917338043749"
                className="interactive flex items-center gap-3 text-[#c2c2c2] hover:text-[#d0ff59] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 7338043749
              </a>
              <p className="flex items-center gap-3 text-[#c2c2c2]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Bengaluru, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#c2c2c2] text-sm flex items-center gap-1">
            © {currentYear} Hemanth C G.
          </p>
          
          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="interactive group flex items-center gap-2 text-[#c2c2c2] hover:text-[#d0ff59] transition-colors"
          >
            <span className="text-sm">Back to top</span>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#d0ff59]/10 transition-colors">
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
