import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

const Internships = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const internships = [
    {
      title: 'Machine Learning Intern',
      organization: 'ERTIA GEN',
      period: 'Oct 2024 - Dec 2024',
      points: [
        'Developed a Handwritten Digit Classification system using NumPy and Scikit-learn.',
        'Optimized preprocessing and normalization pipelines for improved accuracy.',
        'Conducted model performance evaluation using classification metrics and confusion matrices.',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Data Science Intern',
      organization: 'KodNest',
      period: 'February 2026 -May 2026',
      points: [
        'Developed a Restaurant Data Analysis using Zomato Dataset project using Python, Pandas, NumPy, Matplotlib, Seaborn, and SQLite.',
        'Performed data cleaning, preprocessing, Exploratory Data Analysis (EDA), and visualization to identify restaurant trends and customer preferences.',
        'Conducted correlation analysis and SQL-based querying to generate insights on ratings, votes, pricing, and location-wise restaurant performance.',
      ],
      color: 'from-purple-500 to-indigo-500',
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
    <section id="internships" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={containerVariants}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">Internships</h2>
            <p className="section-subtitle max-w-2xl mx-auto">Hands-on industry experience in Data Science, Machine Learning and AI</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {internships.map((item) => (
              <motion.div key={item.title} variants={itemVariants} className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${item.color}`}>
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <span className="px-3 py-1 text-xs rounded-full bg-accent-400/10 text-accent-400 border border-accent-400/20">Internship</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <div className="text-accent-400 font-medium mb-1">{item.organization}</div>
                <div className="text-sm text-gray-400 mb-4">{item.period}</div>
                {item.points ? (
                  <ul className="space-y-2">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 text-sm leading-relaxed">
                        <span className="text-accent-400 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Internships;
