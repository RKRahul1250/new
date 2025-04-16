import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px 10%;
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-size: 1.8rem;
  font-weight: bold;
  background: linear-gradient(45deg, #00ff83, #00a1ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  cursor: pointer;

  &:hover {
    color: #00ff83;
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100 },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const linkVariants = {
    hover: {
      scale: 1.1,
      color: "#00ff83",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <>
      <Nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        style={{
          boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.1)' : 'none'
        }}
      >
        <Logo
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo(0, 0)}
        >
          RD
        </Logo>
        <NavLinks>
          {['About', 'Skills', 'Projects', 'Achievements', 'Contact'].map((item) => (
            <NavLink
              key={item}
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
            >
              {item}
            </NavLink>
          ))}
        </NavLinks>
        <MobileMenuButton
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
      </Nav>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {['About', 'Skills', 'Projects', 'Achievements', 'Contact'].map((item) => (
              <NavLink
                key={item}
                variants={linkVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => {
                  document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
              >
                {item}
              </NavLink>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;