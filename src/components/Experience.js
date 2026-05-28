import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Trophy, Briefcase, BookOpen, Code, Users } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      icon: Briefcase,
      title: 'Machine Learning Intern',
      organization: 'ERTIA GEN',
      period: 'Oct 2024 - Dec 2024',
      description: 'Developed a Handwritten Digit Classification system using NumPy and Scikit-learn. Optimized preprocessing and normalization pipelines for improved accuracy. Conducted model performance evaluation using classification metrics and confusion matrices.',
      type: 'Internship',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Trophy,
      title: '2nd Prize - INNOVEX 2025',
      organization: 'Innovation Competition',
      period: '2025',
      description: 'Secured 2nd Prize for IoT-Based Smart Farmland: Edge AI Pest Detection and Remote Irrigation Control project.',
      type: 'Achievement',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: BookOpen,
      title: 'Research Publication',
      organization: 'Scopus Indexed',
      period: '2025',
      description: 'Published "Air Quality Monitoring System" paper presented at Second International Conference on Emerging Technologies in Science & Engineering (ETSE 2025), Akshaya Institute of Technology, Tumkur.',
      type: 'Publication',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Award,
      title: 'Joy of Computing using Python',
      organization: 'NPTEL',
      period: 'Certified',
      description: 'Completed comprehensive course on Python programming and computational thinking.',
      type: 'Certification',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Code,
      title: 'Python Fundamentals',
      organization: 'Infosys Springboard',
      period: 'Certified',
      description: 'Completed Python fundamentals course covering core programming concepts and best practices.',
      type: 'Certification',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Award,
      title: 'Python for Data Science',
      organization: 'IBM Skills Network',
      period: 'Certified',
      description: 'Completed Python for Data Science course by IBM Skills Network, covering data analysis, visualization, and applied Python libraries for data-driven problem solving.',
      type: 'Certification',
      color: 'from-cyan-500 to-blue-600',
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
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">Experience & Achievements</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              A journey of continuous learning and professional growth
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-accent-400 to-glow-500 hidden md:block" />

            {/* Experience Items */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  variants={itemVariants}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="w-full md:w-1/2 px-4">
                    <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${exp.color}`}>
                          <exp.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="px-3 py-1 text-xs rounded-full bg-accent-400/10 text-accent-400 border border-accent-400/20">
                          {exp.type}
                        </span>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                      <div className="text-accent-400 font-medium mb-1">{exp.organization}</div>
                      <div className="text-sm text-gray-400 mb-4">{exp.period}</div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-8 h-8 rounded-full bg-accent-400 border-4 border-dark-950 z-10 items-center justify-center">
                    <div className="w-3 h-3 bg-dark-950 rounded-full" />
                  </div>
                  <div className="w-full md:w-1/2 px-4" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 gradient-text">
                Open to Opportunities
              </h3>
              <p className="text-gray-300 mb-6">
                I'm actively seeking internships and full-time opportunities in Data Science, 
                Machine Learning, and Applied AI roles. Let's connect and discuss how I can 
                contribute to your team.
              </p>
              <a
                href="mailto:bharathhs0410@gmail.com"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Users className="w-5 h-5" />
                Get in Touch
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
