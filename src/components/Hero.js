import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const HeroSection = styled.section`
  min-height: 100vh;
  padding: 0 10%;
  display: flex;
  align-items: center;
  background: #0a0a0a;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 70%;
    height: 100%;
    background: radial-gradient(circle at top right, rgba(0,255,131,0.1), transparent 70%);
    pointer-events: none;
  }
`;

const Content = styled.div`
  max-width: 800px;
`;

const Greeting = styled(motion.h2)`
  color: #00ff83;
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const Name = styled(motion.h1)`
  font-size: 4.5rem;
  margin-bottom: 20px;
  background: linear-gradient(45deg, #00ff83, #00a1ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Title = styled(motion.h3)`
  font-size: 2rem;
  color: #888;
  margin-bottom: 30px;
`;

const Description = styled(motion.p)`
  color: #888;
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 40px;
  max-width: 600px;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`;

const SocialLink = styled(motion.a)`
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  padding: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 131, 0.1);
    border-color: #00ff83;
    color: #00ff83;
  }
`;

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;

  @media (max-width: 968px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const ImageContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: flex-end; // Changed from center to flex-end
  align-items: center;
  margin-right: -13%; // Added negative margin to push it more to the right

  img {
    max-width: 400px;
    width: 100%;
    height: auto;
    border-radius: 20px;
    filter: drop-shadow(0 0 20px rgba(0,255,131,0.2));
  }

  @media (max-width: 968px) {
    justify-content: center; // Keep it centered on mobile
    margin-right: 0; // Remove negative margin on mobile
    img {
      max-width: 300px;
    }
  }
`;

const Hero = () => {
  // Add these animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
    <HeroSection>
      <HeroContainer>
        <Content as={motion.div} variants={containerVariants} initial="hidden" animate="visible">
          <Greeting variants={itemVariants}>Hello, I'm</Greeting>
          <Name variants={itemVariants}>Rahul D</Name>
        <Title variants={itemVariants}>Frontend Developer | Bengaluru</Title>
        <Description variants={itemVariants}>
          A passionate developer specializing in creating exceptional digital experiences. 
          Currently working at EInfratech Systems, focusing on building responsive and 
          intuitive web applications.
        </Description>
        <SocialLinks variants={itemVariants}>
          <SocialLink 
            href="https://github.com/rkRahul1250" 
            target="_blank"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub size={24} />
          </SocialLink>
          <SocialLink 
            href="https://linkedin.com/in/rk-rahul-44284427" 
            target="_blank"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedinIn size={24} />
          </SocialLink>
          <SocialLink 
            href="mailto:drahul1250@gmail.com"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <MdEmail size={24} />
          </SocialLink>
        </SocialLinks>
      </Content>
        <ImageContainer
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.img
            src={process.env.PUBLIC_URL + '/assets/images/profile.png'}
            alt="Rahul D"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </ImageContainer>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;