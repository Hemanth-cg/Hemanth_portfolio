import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Code2,
  Database,
  Cpu,
  Layers,
  Terminal,
  Monitor,
  GitBranch,
  Box,
} from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.165, 0.84, 0.44, 1] as const,
      },
    },
  };

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: ['C', 'C++', 'Java', 'Python', 'HTML', 'CSS'],
      color: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['Oracle SQL', 'MySQL'],
      color: 'from-green-500/20 to-emerald-500/20',
    },
    {
      title: 'ML/AI Frameworks',
      icon: Cpu,
      skills: ['TensorFlow', 'scikit-learn'],
      color: 'from-purple-500/20 to-pink-500/20',
    },
    {
      title: 'Web Technologies',
      icon: Layers,
      skills: ['Express.js', 'Node.js', 'REST APIs'],
      color: 'from-orange-500/20 to-yellow-500/20',
    },
    {
      title: 'Tools & IDEs',
      icon: Terminal,
      skills: ['Turbo C', 'Visual Studio', 'NetBeans'],
      color: 'from-red-500/20 to-rose-500/20',
    },
    {
      title: 'Operating Systems',
      icon: Monitor,
      skills: ['Windows'],
      color: 'from-indigo-500/20 to-blue-500/20',
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 bg-dark-light overflow-hidden"
    >
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #bbf340 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-lime text-sm font-medium uppercase tracking-widest mb-4 block">
              My Skills
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6">
              Technologies I <span className="text-gradient">work with</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A diverse toolkit enabling me to build robust applications, 
              from backend systems to machine learning models.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative bg-dark border border-dark-border rounded-2xl p-6 hover:border-lime/50 transition-all duration-300 hover:shadow-glow overflow-hidden">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-lime/10 flex items-center justify-center mb-4 group-hover:bg-lime/20 transition-colors duration-300">
                      <category.icon className="w-6 h-6 text-lime" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-white mb-4">
                      {category.title}
                    </h3>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1.5 rounded-full bg-dark-light border border-dark-border text-sm text-muted-foreground group-hover:text-white group-hover:border-lime/30 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-lime/10 border border-lime/20">
              <GitBranch className="w-5 h-5 text-lime" />
              <span className="text-muted-foreground">
                Always learning and exploring <span className="text-white font-medium">new technologies</span>
              </span>
              <Box className="w-5 h-5 text-lime" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
