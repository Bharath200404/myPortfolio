import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, ArrowRight, TrendingUp, BookOpen, Lightbulb } from 'lucide-react';

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const blogPosts = [
    {
      icon: TrendingUp,
      title: 'What I Learned from Customer Churn Analysis',
      excerpt: 'Deep dive into predicting customer behavior and the business impact of churn prediction models.',
      date: '2024-03-15',
      readTime: '8 min read',
      category: 'Case Study',
      color: 'from-blue-500 to-cyan-500',
      link: '#',
    },
    {
      icon: BookOpen,
      title: 'Beginner Roadmap for Machine Learning',
      excerpt: 'A comprehensive guide for beginners starting their journey in machine learning and data science.',
      date: '2024-02-28',
      readTime: '12 min read',
      category: 'Tutorial',
      color: 'from-purple-500 to-pink-500',
      link: '#',
    },
    {
      icon: Lightbulb,
      title: 'Data Science Project Insights',
      excerpt: 'Key learnings and best practices from building end-to-end data science projects.',
      date: '2024-02-10',
      readTime: '10 min read',
      category: 'Insights',
      color: 'from-green-500 to-teal-500',
      link: '#',
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
    <section id="blog" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">Blog & Insights</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Sharing knowledge and experiences from the data science journey
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <motion.a
                key={post.title}
                href={post.link}
                variants={itemVariants}
                className="glass-card p-6 hover:scale-105 transition-transform duration-300 group block"
              >
                {/* Post Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${post.color}`}>
                    <post.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="px-3 py-1 text-xs rounded-full bg-accent-400/10 text-accent-400 border border-accent-400/20">
                    {post.category}
                  </span>
                </div>

                {/* Post Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Post Meta */}
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Read More */}
                <div className="flex items-center gap-2 text-accent-400 group-hover:gap-3 transition-all">
                  <span className="text-sm font-medium">Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <a
              href="https://medium.com/@bharath"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              Read All Articles
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
