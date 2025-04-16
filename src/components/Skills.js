import React from 'react';
import { motion, useInView } from 'framer-motion';
import styled from 'styled-components';

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #00ff83, #00a1ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SkillsSection = styled.section`
  min-height: 100vh;
  padding: 100px 10%;
  background: #0a0a0a;
  color: #ffffff;
  position: relative;
  overflow: hidden;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

const SkillCategory = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 30px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    color: #00ff83;
    margin-bottom: 20px;
    font-size: 1.8rem;
  }
`;

const SkillItem = styled(motion.div)`
  margin-bottom: 20px;

  .skill-name {
    color: #fff;
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
  }

  .skill-bar {
    height: 6px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    overflow: hidden;
    position: relative;

    .fill {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      background: linear-gradient(45deg, #00ff83, #00a1ff);
      border-radius: 3px;
    }
  }
`;

// Remove these unused declarations
// const skills = { ... }
// const SkillCard = styled(motion.div)`...`;

// Keep using skillCategories and other components as they are
const skillCategories = {
  "Technical Skills": {
    Languages: [
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 85 },
      { name: "Java", level: 80 },
      { name: "HTML/CSS", level: 95 },
      { name: "MySQL", level: 85 }
    ],
    "Frameworks & Libraries": [
      { name: "React.js", level: 88 },
      { name: "Bootstrap", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "TensorFlow", level: 75 },
      { name: "Keras", level: 70 },
      { name: "OpenCV", level: 75 }
    ],
    "Tools & Platforms": [
      { name: "Firebase", level: 80 },
      { name: "Git/GitHub", level: 85 },
      { name: "WordPress", level: 75 },
      { name: "Vercel", level: 80 },
      { name: "Android Studio", level: 70 }
    ]
  }
};

const Skills = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    }
  };

  const barVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: (custom) => ({
      width: `${custom}%`,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.3
      }
    })
  };

  return (
    <SkillsSection
      ref={ref}
      as={motion.section}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <Title as={motion.h2} variants={categoryVariants}>Technical Expertise</Title>
      <SkillsGrid>
        {Object.entries(skillCategories["Technical Skills"]).map(([category, skills]) => (
          <SkillCategory
            key={category}
            variants={categoryVariants}
            whileHover={{ scale: 1.02 }}
          >
            <h3>{category}</h3>
            {skills.map((skill, index) => (
              <SkillItem
                key={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <div className="skill-name">
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {skill.name}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="fill"
                    custom={skill.level}
                    variants={barVariants}
                  />
                </div>
              </SkillItem>
            ))}
          </SkillCategory>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
};

export default Skills;