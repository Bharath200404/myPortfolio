import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, BarChart, Brain, Layout, Wrench } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      icon: Code,
      title: 'Core Languages',
      color: 'from-blue-500 to-cyan-500',
      skills: ['Python', 'SQL (MySQL)'],
    },
    {
      icon: BarChart,
      title: 'Data Science & Analysis',
      color: 'from-purple-500 to-pink-500',
      skills: ['Pandas', 'NumPy', 'Exploratory Data Analysis (EDA)', 'Feature Engineering', 'Data Visualization (Matplotlib, Seaborn)'],
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      color: 'from-orange-500 to-red-500',
      skills: ['Scikit-Learn', 'Ensemble Methods', 'Model Evaluation'],
    },
    {
      icon: Layout,
      title: 'Web & Deployment',
      color: 'from-indigo-500 to-purple-500',
      skills: ['FastAPI', 'Streamlit'],
    },
    {
      icon: Wrench,
      title: 'Tools & Environments',
      color: 'from-pink-500 to-rose-500',
      skills: ['GitHub', 'VS Code', 'Jupyter Notebook'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">TECHNICAL Skills</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              A comprehensive toolkit for data science, machine learning, and AI development
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.slice(0, 3).map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass-card p-6 hover:scale-105 transition-transform duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-full bg-dark-800 text-gray-300 border border-white/10 hover:border-accent-400/40 hover:text-accent-400 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mt-8">
            {skillCategories.slice(3).map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass-card p-6 hover:scale-105 transition-transform duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-full bg-dark-800 text-gray-300 border border-white/10 hover:border-accent-400/40 hover:text-accent-400 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
