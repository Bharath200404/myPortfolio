import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Analytics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Sample data for charts
  const skillGrowthData = [
    { month: 'Jan', python: 70, ml: 60, data: 65, frontend: 50 },
    { month: 'Feb', python: 75, ml: 65, data: 70, frontend: 55 },
    { month: 'Mar', python: 80, ml: 70, data: 75, frontend: 60 },
    { month: 'Apr', python: 82, ml: 75, data: 78, frontend: 65 },
    { month: 'May', python: 85, ml: 80, data: 80, frontend: 70 },
    { month: 'Jun', python: 88, ml: 82, data: 82, frontend: 75 },
    { month: 'Jul', python: 90, ml: 85, data: 85, frontend: 78 },
  ];

  const projectDomainsData = [
    { domain: 'ML Models', projects: 4, color: '#22d3ee' },
    { domain: 'Data Viz', projects: 3, color: '#a855f7' },
    { domain: 'NLP', projects: 2, color: '#06b6d4' },
    { domain: 'IoT', projects: 2, color: '#7e22ce' },
    { domain: 'Web Apps', projects: 3, color: '#0891b2' },
  ];

  const learningProgressData = [
    { category: 'completed', value: 75, label: 'Completed Courses' },
    { category: 'inProgress', value: 20, label: 'In Progress' },
    { category: 'planned', value: 15, label: 'Planned' },
  ];

  const roadmapData = [
    { subject: 'Python', A: 90, B: 85, fullMark: 100 },
    { subject: 'ML', A: 85, B: 80, fullMark: 100 },
    { subject: 'DL', A: 75, B: 70, fullMark: 100 },
    { subject: 'NLP', A: 70, B: 65, fullMark: 100 },
    { subject: 'Data', A: 85, B: 80, fullMark: 100 },
    { subject: 'Viz', A: 80, B: 75, fullMark: 100 },
    { subject: 'Web', A: 75, B: 70, fullMark: 100 },
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
    <section id="analytics" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">Analytics & Growth</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Tracking progress and visualizing the journey in data science and AI
            </p>
          </motion.div>

          {/* Charts Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Skill Growth Chart */}
            <motion.div variants={itemVariants} className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-6 gradient-text">Skill Growth Trajectory</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={skillGrowthData}>
                  <defs>
                    <linearGradient id="colorPython" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorML" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="month" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#0f172a', 
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Area type="monotone" dataKey="python" stroke="#22d3ee" fillOpacity={1} fill="url(#colorPython)" />
                  <Area type="monotone" dataKey="ml" stroke="#a855f7" fillOpacity={1} fill="url(#colorML)" />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Project Domains Chart */}
            <motion.div variants={itemVariants} className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-6 gradient-text">Projects by Domain</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={projectDomainsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="domain" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#0f172a', 
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="projects" fill="#22d3ee" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Learning Progress Chart */}
            <motion.div variants={itemVariants} className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-6 gradient-text">Learning Progress</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={learningProgressData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="category" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#0f172a', 
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="value" stroke="#a855f7" strokeWidth={3} dot={{ fill: '#a855f7', r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Data Science Roadmap Chart */}
            <motion.div variants={itemVariants} className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-6 gradient-text">Data Science Roadmap</h3>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={roadmapData}>
                  <PolarGrid stroke="#1e293b" />
                  <PolarAngleAxis dataKey="subject" stroke="#94a3b8" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#94a3b8" />
                  <Radar name="Current" dataKey="A" stroke="#22d3ee" fill="#22d3ee" fillOpacity={0.3} />
                  <Radar name="Target" dataKey="B" stroke="#a855f7" fill="#a855f7" fillOpacity={0.3} />
                  <Legend />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#0f172a', 
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px'
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </motion.div>
          </div>

          {/* Summary Stats */}
          <motion.div variants={itemVariants} className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Total Projects', value: '14', color: 'from-blue-500 to-cyan-500' },
              { label: 'Skills Mastered', value: '15+', color: 'from-purple-500 to-pink-500' },
              { label: 'Courses Completed', value: '12', color: 'from-green-500 to-teal-500' },
              { label: 'GitHub Contributions', value: '500+', color: 'from-orange-500 to-red-500' },
            ].map((stat) => (
              <div key={stat.label} className="glass-card p-6 text-center">
                <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Analytics;
