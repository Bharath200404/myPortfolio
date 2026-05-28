import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, TrendingUp, Sprout, Wind, ShieldAlert } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      icon: ShieldAlert,
      title: 'E-Commerce Fraud Detection & Risk Analytics',
      subtitle: 'ML Platform for Transaction Risk Scoring',
      points: [
        'Developed an end-to-end machine learning platform to detect suspicious e-commerce transactions using behavioral analytics and fraud risk prediction.',
        'Engineered fraud-risk features including late-night transactions, account-age analysis, high-value purchases, and address mismatch detection.',
        'Built an interactive Streamlit web application with real-time fraud probability scoring and analytics dashboard.',
        'Generated actionable business insights to support fraud prevention and transaction risk monitoring.',
      ],
      techStack: ['Python', 'XGBoost', 'Streamlit', 'Plotly', 'Scikit-learn'],
      github: 'https://github.com/Bharath200404/Financial-Fraud-Detection',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: TrendingUp,
      title: 'Retention Analytics & Churn Prediction',
      subtitle: 'End-to-End Machine Learning Pipeline',
      points: [
        'Built an end-to-end machine learning system to predict customer churn using Logistic Regression, Random Forest, and XGBoost.',
        'Improved churn detection by optimizing recall to 79% using class imbalance handling techniques.',
        'Performed exploratory data analysis to identify key drivers such as tenure, contract type, and payment method.',
        'Developed a Streamlit web application to provide real-time churn predictions with probability scores.',
      ],
      techStack: ['Python', 'Scikit-learn', 'Streamlit', 'XGBoost'],
      github: 'https://github.com/Bharath200404/churn-prediction',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Wind,
      title: 'Kannada Digit Recognizer',
      subtitle: 'Computer Vision & Deep Learning',
      points: [
        'Designed a CNN-based deep learning architecture using TensorFlow and OpenCV.',
        'Achieved 88% accuracy through custom data augmentation (Albumentations) and regularization.',
        'Developed a live inference pipeline for real-time recognition via webcam.',
      ],
      techStack: ['Python', 'TensorFlow', 'CNN', 'OpenCV', 'Albumentations'],
      github: 'https://github.com/Bharath200404/kannada-handwritten-digits-recognition',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Sprout,
      title: 'IoT-Based Smart Farmland',
      subtitle: 'Edge AI Pest Detection and Remote Irrigation Control',
      points: [
        'Developed as a Final Year Major Team Project, an IoT-based smart agriculture solution using Edge AI for real-time pest detection and automated irrigation control.',
        'Implemented soil-moisture-based irrigation and remote monitoring to improve water management and preventing crop damage from animal intrusion.',
      ],
      techStack: ['IoT', 'Edge AI', 'Sensors'],
      color: 'from-green-500 to-teal-500',
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
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Showcasing innovative solutions that solve real-world problems
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="glass-card p-6 hover:scale-105 transition-transform duration-300 group"
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color}`}>
                    <project.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-dark-800 hover:bg-dark-700 transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-5 h-5 text-gray-400 hover:text-white" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent-400 transition-colors">
                  {project.title}
                </h3>

                {project.points ? (
                  <ul className="space-y-1 mb-4">
                    {project.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400 text-sm leading-relaxed">
                        <span className="text-accent-400 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.problem}</p>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-dark-800 text-gray-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Insights */}
                {project.insights && (
                  <div className="p-3 rounded-lg bg-accent-400/5 border border-accent-400/10">
                    <p className="text-sm text-accent-400">
                      <span className="font-semibold">Key Result:</span> {project.insights}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <a
              href="https://github.com/Bharath200404"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
