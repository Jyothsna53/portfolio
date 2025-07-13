import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaBookOpen, FaTrophy } from 'react-icons/fa';

const certifications = [
  {
    title: 'AWS Certified Cloud Practitioner',
    org: 'Amazon Web Services',
    date: 'July 2025',
    link: 'https://drive.google.com/file/d/19lJdwhAm_t1r24ehyxxOAVSuniO_m6Rd/view?usp=sharing'
  },
  {
    title: 'MERN Full Stack Development',
    org: 'Ethnus',
    date: 'August 2024',
    link: 'https://drive.google.com/file/d/12sBDeHAdt4HTAgCG-NGpESnwD9l0PiCU/view?usp=drive_link'
  },
  {
    title: 'IBM GenAI',
    org: 'IBM',
    date: 'June 2025',
    link: 'https://drive.google.com/file/d/149sgAlC8bENlv_YevNDSPFdNws06KUvI/view?usp=drive_link'
  },
];

const courses = [
  {
    name: ' From Learner to Builder: Become an AI Agent Architect',
    platform: 'IBM',
    date: '2025',
    link: 'https://drive.google.com/file/d/1V3dGB-8jDKxE_mZYX534RqvuyQCWxoo7/view?usp=sharing'
  },
  {
    name: 'AWS Cloud Architecting',
    platform: 'AWS',
    date: '2024',
    link: 'https://drive.google.com/file/d/1F5jf-G7xZbITzuC-FtzzuVmgj7s252Q6/view?usp=sharing'
  },
  {
    name: 'AWS Cloud Foundations',
    platform: 'AWS',
    date: '2024',
    link: 'https://drive.google.com/file/d/1FVRvjZLnxx-B6SLnmrEeROi-EOoZx27_/view?usp=sharing'
  },
  {
    name: 'AWS Educate Introduction to Generative AI',
    platform: 'AWS',
    date: 'May 2025',
    link: 'https://www.credly.com/badges/da78db08-5ed2-48e1-a4d2-ed0875efbd2e/public_url'
  },
  {
    name: 'Prompt Design in Vertex AI Skill Badge',
    platform: 'Google Cloud',
    date: 'October 2024',
    link: 'https://www.credly.com/badges/41df57e4-8d50-4ad2-9d4d-912aac31d879/public_url'
  },
];

const achievements = [
  {
    title: 'Flipkart Grid 6.0 Participation',
    context: 'Completed Level 1',
    link: 'https://drive.google.com/file/d/1Ahjty8lHwXyUf_5v9aKNMInqkJyPQV8v/view?usp=sharing'
  },
  {
    title: 'Hacker-Ramp WeForShe by Myntra',
    context: 'Completed Phase 1 as a Team',
    link: 'https://drive.google.com/file/d/13rujeWrTlZOqV3maYBGwnHTAA521PZzv/view?usp=sharing',
  },
  {
    title: 'Women Innovators Network',
    context: 'Worked as an Event Management Team Lead',
    link: 'https://drive.google.com/file/d/1hkkXP9skCeZP5_VUQY9tad_-1SnAVgwm/view?usp=sharing'
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, type: 'spring', stiffness: 60 }
  })
};



const Certifications = () => {
  const [tab, setTab] = useState('certifications');

  return (
    <section id="certifications" className="min-h-screen section-padding pt-20 bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Certifications & Achievements
          </h1>
          <p className="text-lg text-dark-300 max-w-2xl mx-auto">
            A showcase of my professional certifications, achievements, and completed courses from top platforms.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setTab('certifications')}
            className={`flex items-center gap-2 px-6 py-2 rounded-t-lg font-semibold text-base transition-all duration-200 focus:outline-none
              ${tab === 'certifications' ? 'bg-dark-800 text-primary-400 shadow-lg' : 'bg-dark-700 text-dark-300 hover:text-primary-400'}`}
          >
            <FaGraduationCap className="text-xl" /> Certifications
          </button>
          <button
            onClick={() => setTab('courses')}
            className={`flex items-center gap-2 px-6 py-2 rounded-t-lg font-semibold text-base transition-all duration-200 focus:outline-none
              ${tab === 'courses' ? 'bg-dark-800 text-blue-400 shadow-lg' : 'bg-dark-700 text-dark-300 hover:text-blue-400'}`}
          >
            <FaBookOpen className="text-xl" /> Courses
          </button>
          <button
            onClick={() => setTab('achievements')}
            className={`flex items-center gap-2 px-6 py-2 rounded-t-lg font-semibold text-base transition-all duration-200 focus:outline-none
              ${tab === 'achievements' ? 'bg-dark-800 text-yellow-400 shadow-lg' : 'bg-dark-700 text-dark-300 hover:text-yellow-400'}`}
          >
            <FaTrophy className="text-xl" /> Achievements
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-dark-800 rounded-b-2xl rounded-tr-2xl shadow-lg p-6">
          <AnimatePresence mode="wait">
            {tab === 'certifications' && (
              <motion.div
                key="certifications"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
              >
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {certifications.map((cert, i) => (
                    <motion.div
                      key={cert.title}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={cardVariants}
                      whileHover={{ scale: 1.045, y: -8, boxShadow: '0 8px 32px 0 rgba(56,189,248,0.15)' }}
                      className="group bg-gradient-to-br from-dark-800 via-dark-700 to-dark-900 rounded-2xl p-6 shadow-lg border border-dark-700 hover:border-primary-400 transition-all duration-300 cursor-pointer relative overflow-hidden"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <FaGraduationCap className="text-primary-400 text-xl" />
                        <span className="text-base font-semibold text-white group-hover:text-primary-400 transition-colors duration-200">
                          {cert.title}
                        </span>
                      </div>
                      <div className="text-dark-300 text-sm mb-2">{cert.org}</div>
                      <div className="text-dark-400 text-xs mb-4">Issued: {cert.date}</div>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-xs font-semibold rounded-lg shadow transition-colors duration-200"
                      >
                        View Certificate
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
            {tab === 'courses' && (
              <motion.div
                key="courses"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.4 }}
              >
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {courses.map((course, i) => (
                    <motion.div
                      key={course.name}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={cardVariants}
                      whileHover={{ scale: 1.045, y: -8, boxShadow: '0 8px 32px 0 rgba(59,130,246,0.13)' }}
                      className="group bg-gradient-to-br from-dark-700 via-dark-800 to-dark-900 rounded-2xl p-6 shadow-lg border border-dark-700 hover:border-blue-400 transition-all duration-300 cursor-pointer relative overflow-hidden"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <FaBookOpen className="text-blue-400 text-xl" />
                        <span className="text-base font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">
                          {course.name}
                        </span>
                      </div>
                      <div className="text-dark-300 text-sm mb-2">{course.platform}</div>
                      <div className="text-dark-400 text-xs mb-4">Completed: {course.date}</div>
                      <a
                        href={course.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold rounded-lg shadow transition-colors duration-200"
                      >
                        View Details
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
            {tab === 'achievements' && (
              <motion.div
                key="achievements"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.4 }}
              >
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {achievements.map((ach, i) => (
                    <motion.div
                      key={ach.title}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={cardVariants}
                      whileHover={{ scale: 1.045, y: -8, boxShadow: '0 8px 32px 0 rgba(250,204,21,0.13)' }}
                      className="group bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 rounded-2xl p-6 shadow-lg border border-dark-700 hover:border-yellow-400 transition-all duration-300 cursor-pointer relative overflow-hidden"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        {ach.icon}
                        <span className="text-base font-semibold text-white group-hover:text-yellow-400 transition-colors duration-200">
                          {ach.title}
                        </span>
                      </div>
                      <div className="text-dark-300 text-sm mb-2">{ach.context}</div>
                      <div className="text-dark-400 text-xs mb-1">{ach.date}</div>
                      {ach.link && (
                        <a
                          href={ach.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 mt-2 bg-yellow-400 hover:bg-yellow-500 text-dark-900 text-xs font-semibold rounded-lg shadow transition-colors duration-200"
                        >
                          View Details
                        </a>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Certifications; 