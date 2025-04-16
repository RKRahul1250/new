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

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 100px 10%;
  background: #0f0f0f;
  color: #ffffff;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(45deg, transparent, rgba(0,255,131,0.03));
    transform: translateX(50%);
  }
`;

const EducationCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 25px;
  margin-bottom: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  h3 {
    color: #00ff83;
    margin-bottom: 10px;
    font-size: 1.4rem;
  }

  p {
    color: #888;
    margin: 5px 0;
  }

  .percentage {
    color: #00a1ff;
    font-weight: bold;
  }
`;

// Remove these unused styled components
// const ObjectiveText = styled(motion.p)`...`;
// const SectionTitle = styled(motion.h2)`...`;
const Content = styled.div`
  display: flex;
  gap: 50px;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Description = styled.div`
  flex: 1;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #888;
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const About = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <AboutSection
      ref={ref}
      as={motion.section}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <Title as={motion.h2} variants={itemVariants}>About Me</Title>
      <Content as={motion.div}>
        <Description as={motion.div} variants={itemVariants}>
          <motion.p variants={textVariants}>
            As a passionate Frontend Developer based in Bengaluru, I specialize in creating 
            exceptional digital experiences. With a strong foundation in modern web technologies 
            and a keen eye for design, I transform ideas into intuitive and responsive web applications.
          </motion.p>
          <motion.p variants={textVariants} style={{ marginTop: '20px' }}>
            My goal is to excel in positions that allow me to maximize my expertise while positively 
            impacting organizational achievements. Currently working at EInfratech Systems Pvt Ltd, 
            I've developed responsive interfaces and led UI/UX redesigns for various projects.
          </motion.p>
        </Description>
        <Stats as={motion.div} variants={itemVariants}>
          <EducationCard 
            variants={itemVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <h3>Education</h3>
            <p>B.E. in Computer Science</p>
            <p>Akshaya Institute of Technology</p>
            <p className="percentage">CGPA: 6.5 (2024)</p>
          </EducationCard>
          <EducationCard 
            variants={itemVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <h3>Experience</h3>
            <p>Frontend Developer</p>
            <p>EInfratech Systems Pvt Ltd</p>
            <p className="percentage">2024 - Present</p>
          </EducationCard>
        </Stats>
      </Content>
    </AboutSection>
  );
};

export default About;