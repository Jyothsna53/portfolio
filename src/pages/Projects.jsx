import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "BrainTumor_Classification_Detection_RESNET50",
      description: "This project focuses on classifying brain tumors from MRI images using deep learning. It uses the ResNet-50 convolutional neural network with transfer learning to accurately detect the presence of tumors. The model was trained on medical imaging datasets and helps support early diagnosis through automated image analysis.",
      tech: ["Resnet50", "Pyhton","Flask", "HTML", "CSS", "JavaScript"],
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/Jyothsna53/BrainTumor_Classification_Detection_RESNET50"
    },
    {
      title: "BrainTumor_Classification_Detection_VGG16_Yolo ",
      description: "This project combines VGG16 and YOLO deep learning architectures to detect and classify brain tumors from MRI images. VGG16 is used for image classification, while YOLO (You Only Look Once) enables real-time object detection of tumor regions. The model supports accurate localization and categorization of brain tumors, aiding in faster and more reliable medical diagnosis.",
      tech: ["VGG16", "YOLO", "Python", "HTML", "CSS", "JavaScript", "Flask"],
      liveUrl: "https://task-app-demo.com",
      githubUrl: "https://github.com/Jyothsna53/BrainTumor_Classification_Detection_VGG16_Yolo"
    },
    {
        title: "YoutubeVideoAnalyzer",
        description: "This project analyzes YouTube video data to extract insights like views, likes, comments, and trends using the YouTube Data API. It helps track video performance, keyword patterns, and audience engagement metrics for content optimization.",
        tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "YouTube Data API", "Matplotlib", "Seaborn"],
        liveUrl: "https://task-app-demo.com",
        githubUrl: "https://github.com/Jyothsna53/YoutubeVideoAnalyzer"
      },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="projects" className="section-padding bg-dark-800/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge 
            and showcases different aspects of my development skills.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/Jyothsna53"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 