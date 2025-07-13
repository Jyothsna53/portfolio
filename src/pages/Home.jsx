import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github } from 'lucide-react';
import profilePhoto from '../assets/profile.jpg';
import resume from '../assets/Jyothsna_Yettapu_Resume.pdf';

const Home = () => {
  // Remove skillCategories and all related animation variants

  const handleResumeDownload = () => {
    try {
      // Method 1: Try to open in new tab first (most reliable)
      window.open(resume, '_blank');
    } catch (error) {
      console.error('Error opening resume:', error);
      // Method 2: Fallback to download link
      try {
        const link = document.createElement('a');
        link.href = resume;
        link.download = 'Jyothsna_Yettapu_Resume.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (downloadError) {
        console.error('Error downloading resume:', downloadError);
        // Method 3: Final fallback - just open the URL
        window.open(resume, '_blank', 'noopener,noreferrer');
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Side - Profile Image */}
          <motion.div
            initial={{ x: -120, opacity: 0, scale: 0.92 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 80, damping: 18 }}
            className="flex justify-center lg:justify-start items-center h-full lg:pl-8"
            style={{ zIndex: 2 }}
          >
            <div className="relative flex items-center justify-center h-full">
              <motion.div
                whileHover={{ scale: 1.07, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-500/20 shadow-2xl shadow-primary-500/20 bg-dark-800"
              >
                {/* Your profile photo */}
                <img 
                  src={profilePhoto} 
                  alt="Yettapu Jyothsna - Profile Photo" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary-400 rounded-full"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-300 rounded-full"
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left h-full"
          >
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">Yettapu Jyothsna</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl lg:text-2xl text-dark-300 mb-6">
            Aspiring Data Analyst | AI/ML & Generative AI Enthusiast  
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-lg text-dark-400 mb-8 max-w-lg">
            I'm passionate about data and intelligent systems — learning to extract insights, build predictive models, and explore generative AI. I enjoy solving real-world problems and continuously growing my skills in analytics and AI.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.button
                onClick={handleResumeDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <Download className="w-5 h-5" />
                View Resume
              </motion.button>
              <motion.a
                href="https://github.com/Jyothsna53" // <-- Replace with your actual GitHub URL
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white font-semibold rounded-lg transition-all duration-200"
              >
                <Github className="w-5 h-5" />
                View GitHub
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home; 