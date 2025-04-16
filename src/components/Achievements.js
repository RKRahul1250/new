import React from 'react';
import { motion, useInView } from 'framer-motion';
import styled from 'styled-components';

const AchievementsSection = styled.section`
  min-height: 100vh;
  padding: 100px 10%;
  background: #0a0a0a;
  color: #ffffff;
  position: relative;
  overflow: hidden;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

const Card = styled(motion.div)`
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

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 15px;
    color: #888;
    display: flex;
    align-items: flex-start;
    
    &:before {
      content: '▹';
      color: #00ff83;
      margin-right: 10px;
    }
  }
`;

const achievements = {
  certifications: [
    "AI & ML Internship – Karunadu Technologies",
    "Frontend Development Certification – Ongoing",
    "Software Testing Full Stack – Ongoing"
  ],
  leadership: [
    "Team Leader – Led project using CNN (VGG16) to detect crop leaf diseases",
    "UI/UX Lead – Designed and implemented intuitive UIs for multiple web projects",
    "Event Designer – Created posters for TechVuthsav fest (audience: 15,000+)"
  ],
  courses: [
    "Data Structures & Algorithms",
    "DBMS",
    "Operating Systems",
    "Cloud Computing",
    "Machine Learning",
    "Artificial Intelligence",
    "Computer Vision",
    "Data Analytics",
    "Data Mining"
  ]
};

const Achievements = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
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
    <AchievementsSection
      ref={ref}
      as={motion.section}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.h2 
        variants={cardVariants}
        style={{
          fontSize: '2.5rem',
          marginBottom: '2rem',
          background: 'linear-gradient(45deg, #00ff83, #00a1ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        Achievements & Expertise
      </motion.h2>
      <Grid>
        <Card 
          variants={cardVariants}
          whileHover={{ scale: 1.02 }}
        >
          <h3>Certifications</h3>
          <ul>
            {achievements.certifications.map((cert, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                {cert}
              </motion.li>
            ))}
          </ul>
        </Card>
        <Card 
          variants={cardVariants}
          whileHover={{ scale: 1.02 }}
        >
          <h3>Leadership</h3>
          <ul>
            {achievements.leadership.map((role, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                {role}
              </motion.li>
            ))}
          </ul>
        </Card>
        <Card 
          variants={cardVariants}
          whileHover={{ scale: 1.02 }}
        >
          <h3>Key Courses</h3>
          <ul>
            {achievements.courses.map((course, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {course}
              </motion.li>
            ))}
          </ul>
        </Card>
      </Grid>
    </AchievementsSection>
  );
};

export default Achievements;