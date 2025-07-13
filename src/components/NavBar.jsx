import React from 'react';
import { motion } from 'framer-motion';

const NavBar = ({ activeSection, scrollToSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-md border-b border-dark-700"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold gradient-text"
          >
            Portfolio
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-3 py-2 text-sm font-medium bg-transparent outline-none border-none"
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.97 }}
                style={{ background: "none" }}
              >
                <motion.span
                  className={`transition-colors duration-300 ${
                    activeSection === item.id
                      ? "text-primary-400 font-bold"
                      : "text-dark-300 hover:text-primary-300"
                  }`}
                  animate={{
                    color: activeSection === item.id ? "#38bdf8" : undefined,
                    fontWeight: activeSection === item.id ? 700 : 500
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {item.label}
                </motion.span>
                {/* Animated Underline */}
                <motion.div
                  layoutId="nav-underline"
                  className="absolute left-0 right-0 mx-auto bottom-0 h-0.5 rounded bg-primary-400"
                  style={{
                    width: activeSection === item.id ? "70%" : "0%",
                    transition: "width 0.3s cubic-bezier(.4,0,.2,1)",
                  }}
                  animate={{
                    width: activeSection === item.id ? "70%" : "0%",
                    opacity: activeSection === item.id ? 1 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
                {/* Glow effect on active */}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="nav-glow"
                    className="absolute inset-0 rounded"
                    style={{
                      boxShadow: "0 2px 16px 0 rgba(14,165,233,0.15)",
                      zIndex: -1,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-dark-300 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar; 