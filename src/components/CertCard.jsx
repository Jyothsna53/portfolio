import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Award } from 'lucide-react';

const CertCard = ({ certification }) => {
  const { name, organization, date, certificateUrl, badge } = certification;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative bg-dark-800 rounded-xl p-6 border border-dark-700 hover:border-primary-500/50 transition-all duration-300 card-hover"
    >
      {/* Badge Icon */}
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
          <Award className="w-6 h-6 text-white" />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xs text-dark-400 bg-dark-700 px-2 py-1 rounded-full"
        >
          {badge}
        </motion.div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <motion.h3 
          className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-200"
        >
          {name}
        </motion.h3>
        
        <p className="text-primary-300 font-medium">
          {organization}
        </p>
        
        <div className="flex items-center gap-2 text-dark-400 text-sm">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>
      </div>

      {/* Certificate Link */}
      {certificateUrl && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6"
        >
          <motion.a
            href={certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-dark-700 hover:bg-primary-500 text-dark-300 hover:text-white text-sm font-medium rounded-lg transition-all duration-200 border border-dark-600 hover:border-primary-500"
          >
            <ExternalLink className="w-4 h-4" />
            View Certificate
          </motion.a>
        </motion.div>
      )}

      {/* Hover Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent rounded-xl pointer-events-none"
      />
    </motion.div>
  );
};

export default CertCard; 