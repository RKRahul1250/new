import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const FooterContainer = styled.footer`
  background: #080808;
  color: #ffffff;
  padding: 50px 10%;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #00ff83, #00a1ff, transparent);
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 30px;
`;

const FooterSection = styled(motion.div)`
  h3 {
    color: #00ff83;
    font-size: 1.3rem;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
  }

  a {
    color: #888;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #00ff83;
    }
  }
`;

const Copyright = styled(motion.div)`
  text-align: center;
  color: #888;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
`;

const SocialIcon = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00ff83;
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, #00ff83, #00a1ff);
    color: #fff;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Rahul D</h3>
          <p style={{ color: '#888', marginBottom: '20px' }}>
            Frontend Developer & UI/UX Designer
          </p>
          <SocialLinks>
            <SocialIcon 
              href="https://github.com/rkRahul1250"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              🌐
            </SocialIcon>
            <SocialIcon 
              href="https://linkedin.com/in/rk-rahul-44284427"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              🔗
            </SocialIcon>
          </SocialLinks>
        </FooterSection>

        <FooterSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Contact</h3>
          <ul>
            <li><FaPhoneAlt style={{ marginRight: '10px' }} /> +91-9019132291</li>
            <li><MdEmail style={{ marginRight: '10px' }} /> drahul1250@gmail.com</li>
            <li><FaMapMarkerAlt style={{ marginRight: '10px' }} /> Bangalore, India</li>
          </ul>
        </FooterSection>

        <SocialLinks>
          <SocialIcon 
            href="https://github.com/rkRahul1250"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub size={20} />
          </SocialIcon>
          <SocialIcon 
            href="https://linkedin.com/in/rk-rahul-44284427"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedinIn size={20} />
          </SocialIcon>
          <SocialIcon 
            href="mailto:drahul1250@gmail.com"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <MdEmail size={20} />
          </SocialIcon>
        </SocialLinks>
      </FooterContent>

      <Copyright
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p>© {currentYear} Rahul D. All rights reserved.</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;