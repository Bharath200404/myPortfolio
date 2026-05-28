import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, BookOpen } from 'lucide-react';

const Achievements = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const achievements = [
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
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={containerVariants}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">Achievements</h2>
            <p className="section-subtitle max-w-2xl mx-auto">Recognition and milestones from competitions and research</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {achievements.map((item) => (
              <motion.div key={item.title} variants={itemVariants} className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${item.color}`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="px-3 py-1 text-xs rounded-full bg-accent-400/10 text-accent-400 border border-accent-400/20">{item.type}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <div className="text-accent-400 font-medium mb-1">{item.organization}</div>
                <div className="text-sm text-gray-400 mb-4">{item.period}</div>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
