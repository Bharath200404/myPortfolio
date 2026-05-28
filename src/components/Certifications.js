import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Code } from 'lucide-react';

const Certifications = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const certifications = [
    {
      icon: Award,
      title: 'Joy of Computing using Python',
      organization: 'NPTEL',
      period: 'Certified',
      description: 'Completed comprehensive course on Python programming and computational thinking.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Code,
      title: 'Python Fundamentals',
      organization: 'Infosys Springboard',
      period: 'Certified',
      description: 'Completed Python fundamentals course covering core programming concepts and best practices.',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Award,
      title: 'Python for Data Science',
      organization: 'IBM Skills Network',
      period: 'Certified',
      description: 'Completed Python for Data Science course by IBM Skills Network, covering data analysis, visualization, and applied Python libraries for data-driven problem solving.',
      color: 'from-cyan-500 to-blue-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, translateY: 20 },
    visible: { opacity: 1, translateY: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={containerVariants}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">Certifications</h2>
            <p className="section-subtitle max-w-2xl mx-auto">Verified credentials from leading platforms and institutions</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <motion.div key={cert.title} variants={itemVariants} className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${cert.color}`}>
                    <cert.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="px-3 py-1 text-xs rounded-full bg-accent-400/10 text-accent-400 border border-accent-400/20">Certification</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                <div className="text-accent-400 font-medium mb-1">{cert.organization}</div>
                <div className="text-sm text-gray-400 mb-4">{cert.period}</div>
                <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
