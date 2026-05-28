import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'bharathhs0410@gmail.com',
      href: 'mailto:bharathhs0410@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9972148924',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bangalore, India',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Bharath200404',
      color: 'from-gray-700 to-gray-900',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/bharath-hs-043444327',
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:bharathhs0410@gmail.com',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Let's connect and discuss opportunities in Data Science and AI
            </p>
          </motion.div>

          <div className="flex justify-center">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6 w-full max-w-lg">
              {/* Contact Details */}
              <div className="glass-card p-8">
                <h3 className="text-2xl font-semibold mb-6 gradient-text">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center gap-4 p-4 rounded-lg bg-dark-800/50 hover:bg-dark-800 transition-colors group"
                    >
                      <div className="p-3 rounded-lg bg-accent-400/10 group-hover:bg-accent-400/20 transition-colors">
                        <info.icon className="w-5 h-5 text-accent-400" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">{info.label}</div>
                        <div className="text-white group-hover:text-accent-400 transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card p-8">
                <h3 className="text-2xl font-semibold mb-6 gradient-text">Connect With Me</h3>
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-lg bg-gradient-to-r ${social.color} hover:scale-105 transition-transform duration-300 flex flex-col items-center gap-2`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6 text-white" />
                      <span className="text-xs text-white">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
