import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Sparkles, Zap, Mail } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Aspiring Data Science | Machine Learning  | Applied AI  Enthusiast';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

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
    hidden: { opacity: 0, translateY: 20 },
    visible: {
      opacity: 1,
      translateY: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-glow-500/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Name */}
          <motion.div variants={itemVariants} className="mb-6 mt-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-400/10 border border-accent-400/20 mb-6">
              <Sparkles className="w-4 h-4 text-accent-400" />
              <span className="text-sm text-accent-400 font-medium">Welcome to my portfolio</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-white">Bharath HS</span>
            </h1>
          </motion.div>

          {/* Title with Typing Effect */}
          <motion.div variants={itemVariants} className="mb-8">
            <p className="text-xl md:text-2xl text-gray-300 font-mono">
              <span className="text-accent-400">&gt;</span> {text}
              <span className="animate-pulse">|</span>
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Focused on creating data-driven AI applications, predictive analytics solutions, and intelligent systems with real-world impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="btn-primary inline-flex items-center justify-center gap-2 group"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="https://drive.google.com/file/d/1luWeYG83KrmcRIAJqXmonTcpfTaMvhu4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </Link>
          </motion.div>

{/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { icon: Zap, label: 'Projects', value: '4+' },
              { icon: Sparkles, label: 'Repositories', value: '15+' },
              { icon: Sparkles, label: 'Skills', value: '10+' },
              { icon: Mail, label: 'Connect', value: 'Open' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-accent-400" />
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Link to="about" smooth={true} duration={500} className="cursor-pointer">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-accent-400 rounded-full mt-2"
            />
          </div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
