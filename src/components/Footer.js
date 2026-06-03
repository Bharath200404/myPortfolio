import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: 'About', to: 'about' },
    { name: 'Education', to: 'education' },
    { name: 'Skills', to: 'skills' },
    { name: 'Training', to: 'internships' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Bharath200404',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/bharath-hs-043444327',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:bharathhs0410@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-dark-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="text-2xl font-bold gradient-text cursor-pointer mb-4 block"
            >
              Bharath
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Aspiring Data Scientist & Applied AI Engineer passionate about 
              transforming data into insights and building intelligent solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-accent-400 transition-colors cursor-pointer text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">
                <span className="block">Email:</span>
                <a href="mailto:bharathhs0410@gmail.com" className="text-accent-400 hover:text-accent-300 transition-colors">
                  bharathhs0410@gmail.com
                </a>
              </p>
              <p className="text-gray-400">
                <span className="block">Location:</span>
                Bangalore, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Bharath. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-accent-400 fill-current" /> by Bharath
          </p>
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="flex items-center gap-2 text-gray-400 hover:text-accent-400 transition-colors cursor-pointer text-sm"
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
