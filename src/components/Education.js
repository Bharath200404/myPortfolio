import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const education = [
    {
      degree: 'B.E in Artificial Intelligence & Machine Learning (AIML)',
      institution: 'RAJARAJESHWARI COLLEGE OF ENGINEERING',
      affiliation: 'Affiliated to VTU',
      period: '2022 - 2026',
      cgpa: '8.9/10.0',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">Education</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Academic journey and qualifications
            </p>
          </motion.div>

          {/* Education Cards */}
          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-8 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-r ${edu.color} flex items-center justify-center`}>
                    <edu.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-2 text-white">
                      {edu.degree}
                    </h3>
                    <div className="space-y-2 text-gray-300">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-accent-400" />
                        <span className="font-semibold">{edu.institution}</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        {edu.affiliation}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-accent-400" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-4">
                        <Award className="w-4 h-4 text-accent-400" />
                        <span className="font-semibold text-accent-400">
                          CGPA: {edu.cgpa}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
