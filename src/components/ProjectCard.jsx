import React from 'react';
import { motion } from 'framer-motion';
import { Github, Eye } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const { title, description, tech, liveUrl, githubUrl } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="group relative bg-dark-800 rounded-xl overflow-hidden border border-dark-700 hover:border-primary-500/50 transition-all duration-300 card-hover"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-primary-400/20 to-primary-600/20 flex items-center justify-center">
          <div className="text-6xl text-primary-400/50">🚀</div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <motion.h3 
          className="text-xl font-bold mb-3 text-white group-hover:text-primary-400 transition-colors duration-200"
        >
          {title}
        </motion.h3>
        
        <p className="text-dark-300 mb-4 line-clamp-3">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((techItem, index) => (
            <motion.span
              key={techItem}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="px-2 py-1 bg-dark-700 text-primary-300 text-xs rounded-md border border-dark-600"
            >
              {techItem}
            </motion.span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium rounded-lg transition-colors duration-200"
            >
              <Eye className="w-4 h-4" />
              Live Demo
            </motion.a>
          )}
          
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 border border-dark-600 hover:border-primary-500 text-dark-300 hover:text-primary-400 text-sm font-medium rounded-lg transition-all duration-200"
            >
              <Github className="w-4 h-4" />
              Code
            </motion.a>
          )}
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent pointer-events-none"
      />
    </motion.div>
  );
};

export default ProjectCard; 