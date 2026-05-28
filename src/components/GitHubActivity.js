import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Star, GitFork, Activity, Calendar } from 'lucide-react';

const GitHubActivity = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Sample contribution data for heatmap
  const generateContributionData = () => {
    const data = [];
    const weeks = 52;
    const days = 7;

    for (let week = 0; week < weeks; week++) {
      for (let day = 0; day < days; day++) {
        const contributions = Math.floor(Math.random() * 10);
        data.push({
          week,
          day,
          contributions,
        });
      }
    }
    return data;
  };

  const contributionData = generateContributionData();

  const getContributionColor = (count) => {
    if (count === 0) return 'bg-dark-800';
    if (count <= 2) return 'bg-accent-400/20';
    if (count <= 4) return 'bg-accent-400/40';
    if (count <= 6) return 'bg-accent-400/60';
    return 'bg-accent-400/80';
  };

  const topRepositories = [
    {
      name: 'churn-prediction',
      description: 'Customer churn prediction using machine learning',
      language: 'Python',
      stars: 45,
      forks: 12,
      updated: '2 days ago',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'smart-farming',
      description: 'AI-powered smart farming system',
      language: 'Python',
      stars: 38,
      forks: 8,
      updated: '5 days ago',
      color: 'from-green-500 to-teal-500',
    },
    {
      name: 'healthcare-analytics',
      description: 'Healthcare data analytics platform',
      language: 'Python',
      stars: 32,
      forks: 6,
      updated: '1 week ago',
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'portfolio-website',
      description: 'Personal portfolio website with React',
      language: 'JavaScript',
      stars: 28,
      forks: 4,
      updated: '2 weeks ago',
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
    <section id="github" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">GitHub Activity</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Consistent contributions and open source engagement
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contribution Heatmap */}
            <motion.div variants={itemVariants} className="glass-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold gradient-text">Contribution Activity</h3>
                <Activity className="w-5 h-5 text-accent-400" />
              </div>

              {/* Heatmap Grid */}
              <div className="space-y-1">
                {Array.from({ length: 7 }).map((_, weekIndex) => (
                  <div key={weekIndex} className="flex gap-1">
                    {Array.from({ length: 52 }).map((_, dayIndex) => {
                      const contribution = contributionData[weekIndex * 52 + dayIndex];
                      return (
                        <div
                          key={dayIndex}
                          className={`w-3 h-3 rounded-sm ${getContributionColor(contribution.contributions)} hover:ring-2 hover:ring-accent-400 transition-all`}
                          title={`${contribution.contributions} contributions`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex items-center justify-end gap-2 mt-4 text-xs text-gray-400">
                <span>Less</span>
                {['bg-dark-800', 'bg-accent-400/20', 'bg-accent-400/40', 'bg-accent-400/60', 'bg-accent-400/80'].map((color) => (
                  <div key={color} className={`w-3 h-3 rounded-sm ${color}`} />
                ))}
                <span>More</span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                {[
                  { label: 'Total Contributions', value: '1,234', icon: Activity },
                  { label: 'Current Streak', value: '45 days', icon: Calendar },
                  { label: 'Longest Streak', value: '90 days', icon: Star },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <stat.icon className="w-5 h-5 mx-auto mb-2 text-accent-400" />
                    <div className="text-lg font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Top Repositories */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold gradient-text">Top Repositories</h3>
                <a
                  href="https://github.com/Bharath200404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-accent-400 hover:text-accent-300 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View All
                </a>
              </div>

              <div className="space-y-4">
                {topRepositories.map((repo) => (
                  <a
                    key={repo.name}
                    href={`https://github.com/Bharath200404/${repo.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-4 hover:scale-105 transition-transform duration-300 block"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-white hover:text-accent-400 transition-colors">
                        {repo.name}
                      </h4>
                      <span className={`px-2 py-1 text-xs rounded-full bg-gradient-to-r ${repo.color} text-white`}>
                        {repo.language}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">{repo.description}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        <span>{repo.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-3 h-3" />
                        <span>{repo.forks}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>Updated {repo.updated}</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
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
              Follow on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubActivity;
