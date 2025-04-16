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

const projects = [
  {
    title: "TechSphere",
    description: "Corporate website with chatbot integration, optimized for speed and performance.",
    tech: ["React", "Node.js", "ChatBot API"],
    link: "#"
  },
  {
    title: "Skype-like MVP",
    description: "One-on-one video/audio call application with real-time communication.",
    tech: ["Next.js", "Firebase", "Tailwind CSS"],
    link: "#"
  },
  {
    title: "Chat App",
    description: "Real-time dashboard with authentication and interactive chat interface.",
    tech: ["React", "Firebase", "Styled Components"],
    link: "#"
  },
  {
    title: "TI4U Platform",
    description: "Training institute listing platform with intuitive search and filtering.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    title: "Stopwatch Web App",
    description: "Feature-rich stopwatch application with local storage functionality.",
    tech: ["JavaScript", "HTML5", "CSS3"],
    link: "#"
  },
  {
    title: "Password Generator",
    description: "Secure password generation tool with customization options.",
    tech: ["JavaScript", "CSS3"],
    link: "https://rkrahul1250.github.io"
  },
  {
    title: "Blood Bank Management",
    description: "Complete blood bank record management and search system.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    link: "#"
  },
  {
    title: "Weather Forecast App",
    description: "Real-time weather data application with clean interface.",
    tech: ["Android", "Java", "Weather API"],
    link: "#"
  },
  {
    title: "Heart Disease Prediction",
    description: "ML-based system using multiple classifiers for disease prediction.",
    tech: ["Python", "TensorFlow", "Scikit-learn"],
    link: "#"
  },
  {
    title: "Crop Health Monitor",
    description: "CNN-based plant disease detection system using VGG16.",
    tech: ["Python", "OpenCV", "TensorFlow"],
    link: "#"
  }
];

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 100px 10%;
  background: #0a0a0a;
  color: #ffffff;
  position: relative;
  overflow: hidden;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 30px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  h3 {
    color: #00ff83;
    margin-bottom: 15px;
    font-size: 1.4rem;
  }

  p {
    color: #888;
    margin-bottom: 20px;
    line-height: 1.6;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
`;

const TechTag = styled(motion.span)`
  background: rgba(0, 255, 131, 0.1);
  color: #00ff83;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.9rem;
`;

const Projects = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <ProjectsSection
      ref={ref}
      as={motion.section}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <Title as={motion.h2} variants={cardVariants}>Featured Projects</Title>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 10px 30px rgba(0,255,131,0.2)"
            }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <TechStack>
              {project.tech.map((tech, i) => (
                <TechTag
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {tech}
                </TechTag>
              ))}
            </TechStack>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;