import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Brain,
  Settings,
  Database,
  Wand2,
  BarChart2,
} from "lucide-react";

const categories = [
  {
    title: "Programming Languages",
    icon: Code,
    color: "text-primary-400",
    skills: [
      { name: "Java", percent: 90 },
      { name: "Python", percent: 80 },
      { name: "C", percent: 70 },
      { name: "JavaScript", percent: 55 },
      { name: "SQL", percent: 60},
      { name: "HTML", percent: 75},
      { name: "CSS", percent: 75},
      { name: "R", percent: 50},
    ],
  },
  {
    title: "AI/ML",
    icon: Brain,
    color: "text-pink-400",
    skills: [
      { name: "Pandas", percent: 60 },
      { name: "Scikit-learn", percent: 75 },
      { name: "TensorFlow", percent: 55 },
      { name: "NLP", percent: 70 },
      { name: "YOLO", percent: 70},
    ],
  },
  {
    title: "Data Analytics",
    icon: BarChart2,
    color: "text-purple-400",
    skills: [
      { name: "NumPy", percent: 60 },
      { name: "Excel", percent: 75 },
      { name: "Statistics", percent: 65 },
      { name: "PowerBI", percent: 50 },
    ],
  },
  {
    title: "Frameworks",
    icon: Wand2,
    color: "text-orange-400",
    skills: [
      { name: "Reactjs", percent: 75 },
      { name: "Node.js", percent: 70 },
      { name: "Express.js", percent: 65 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Settings,
    color: "text-yellow-400",
    skills: [
      { name: "Git", percent: 70 },
      { name: "VS Code", percent: 90 },
      { name: "GitHub", percent: 75 },
      { name: "Google Colab", percent: 75 },
      { name: "AWS", percent: 60 },
      { name: "IBM Cloud", percent: 70 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    color: "text-green-400",
    skills: [
      { name: "MySQL", percent: 70 },
      { name: "MongoDB", percent: 65 },
    ],
  },
];

const tagVariants = {
  rest: { scale: 1, boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)" },
  hover: { scale: 1.08, boxShadow: "0 6px 24px 0 rgba(56,189,248,0.15)" },
};

const percentVariants = {
  rest: { opacity: 0, y: 10, scale: 0.95 },
  hover: { opacity: 1, y: -30, scale: 1 },
};

const Skills = () => (
  <section
    id="skills"
    className="min-h-screen section-padding pt-20 bg-dark-900"
  >
    <div className="container-custom space-y-16">
      <div className="text-center mb-10">
        <h1 className="text-5xl lg:text-6xl font-bold mb-6">
          My <span className="gradient-text">Skills</span>
        </h1>
        <p className="text-xl text-dark-300 max-w-3xl mx-auto">
          Hover over each skill to see my proficiency!
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        {categories.map((cat) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 8px 32px 0 rgba(56,189,248,0.18)",
              y: -8,
              borderColor: cat.color === 'text-primary-400' ? '#38bdf8' : cat.color === 'text-pink-400' ? '#ec4899' : cat.color === 'text-purple-400' ? '#a78bfa' : cat.color === 'text-blue-400' ? '#60a5fa' : cat.color === 'text-yellow-400' ? '#facc15' : cat.color === 'text-orange-400' ? '#f87171' : cat.color === 'text-green-400' ? '#34d399' : cat.color === 'text-cyan-400' ? '#22d3ee' : '#38bdf8',
              background:
                cat.color === 'text-primary-400'
                  ? "linear-gradient(90deg, rgba(14,165,233,0.08) 0%, rgba(14,165,233,0.03) 100%)"
                  : cat.color === 'text-pink-400'
                  ? "linear-gradient(90deg, rgba(236,72,153,0.08) 0%, rgba(236,72,153,0.03) 100%)"
                  : cat.color === 'text-purple-400'
                  ? "linear-gradient(90deg, rgba(168,139,250,0.08) 0%, rgba(168,139,250,0.03) 100%)"
                  : cat.color === 'text-blue-400'
                  ? "linear-gradient(90deg, rgba(96,165,250,0.08) 0%, rgba(96,165,250,0.03) 100%)"
                  : cat.color === 'text-yellow-400'
                  ? "linear-gradient(90deg, rgba(250,204,21,0.08) 0%, rgba(250,204,21,0.03) 100%)"
                  : cat.color === 'text-red-400'
                  ? "linear-gradient(90deg, rgba(248,113,113,0.08) 0%, rgba(248,113,113,0.03) 100%)"
                  : cat.color === 'text-green-400'
                  ? "linear-gradient(90deg, rgba(52,211,153,0.08) 0%, rgba(52,211,153,0.03) 100%)"
                  : cat.color === 'text-cyan-400'
                  ? "linear-gradient(90deg, rgba(34,211,238,0.08) 0%, rgba(34,211,238,0.03) 100%)"
                  : "linear-gradient(90deg, rgba(14,165,233,0.08) 0%, rgba(14,165,233,0.03) 100%)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="bg-dark-800 rounded-2xl p-6 shadow-lg border border-dark-700"
          >
            <div className="flex items-center gap-3 mb-6">
              <cat.icon className={`w-7 h-7 ${cat.color}`} />
              <h2 className="text-xl font-bold text-white">{cat.title}</h2>
            </div>
            <div className="flex flex-wrap gap-4">
              {cat.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="relative group px-5 py-2 rounded-full bg-dark-700 border border-dark-600 text-primary-300 font-medium text-sm cursor-pointer transition-all duration-200 shadow-sm hover:shadow-lg"
                  variants={tagVariants}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  {skill.name}
                  <motion.div
                    variants={percentVariants}
                    className="absolute left-1/2 -translate-x-1/2 -top-6 z-10"
                    style={{ pointerEvents: "none" }}
                  >
                    <div className="flex flex-col items-center">
                      <span className="bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded shadow-lg">
                        {skill.percent}%
                      </span>
                      <div className="w-16 h-2 bg-primary-400/30 rounded mt-1 overflow-hidden">
                        <motion.div
                          className="h-2 bg-primary-400 rounded"
                          style={{ width: `${skill.percent}%` }}
                          layout
                        />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills; 