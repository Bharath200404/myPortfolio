import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Database, Brain, Code } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-950">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-glow-500 blur-3xl opacity-20 rounded-full animate-pulse" />
          <div className="relative">
            <Activity className="w-20 h-20 mx-auto text-accent-400" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold gradient-text mb-4"
        >
          Bharath
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-4 text-gray-400"
        >
          <Database className="w-5 h-5 animate-pulse" />
          <Brain className="w-5 h-5 animate-pulse" style={{ animationDelay: '0.2s' }} />
          <Code className="w-5 h-5 animate-pulse" style={{ animationDelay: '0.4s' }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <div className="w-48 h-1 bg-dark-800 rounded-full mx-auto overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-accent-400 to-glow-500"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingScreen;
