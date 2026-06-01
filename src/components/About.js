import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Award, BookOpen, Briefcase } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

const stats = [
    {
      icon: Code,
      value: '4+',
      label: 'Projects Completed',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Award,
      value: '3+',
      label: 'Certifications',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: BookOpen,
      value: '1',
      label: 'Research Publications',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Briefcase,
      value: '2',
      label: 'Internship Experience',
      color: 'from-orange-500 to-red-500',
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
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Passionate about transforming data into insights and building intelligent solutions
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="mb-16">
            <motion.div variants={itemVariants}>
              <div className="glass-card p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Data Scientist, Data Analyst & AI/ML Engineer
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I'm an AIML engineering student passionate about Data Science, Machine Learning, and Applied AI, with hands-on experience in building end-to-end intelligent systems. I enjoy transforming complex datasets into practical, scalable, and user-focused solutions through data analysis, predictive modeling, and deployment.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Skilled in Python, SQL, Machine Learning, EDA, Feature Engineering, and Model Optimization, I have developed projects ranging from churn prediction and fraud detection to real-time computer vision applications. I am also experienced in deploying interactive AI applications using FastAPI and Streamlit to solve real-world business problems.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-bold mb-8 gradient-text text-center">
              Key Achievements
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${stat.color} mb-4`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold mb-2 gradient-text">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
