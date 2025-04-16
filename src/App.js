// Remove the Footer import and component
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const NavBar = styled.nav`
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

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  background: linear-gradient(45deg, #00ff83, #00a1ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.1rem;
    transition: color 0.3s ease;

    &:hover {
      color: #00ff83;
    }
  }
`;

const ScrollToTop = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: linear-gradient(45deg, #00ff83, #00a1ff);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  opacity: ${props => props.visible ? '1' : '0'};
  transition: opacity 0.3s ease;
  z-index: 1000;
`;

function App() {
  const [showScroll, setShowScroll] = useState(false);

  // Add eslint-disable comment to suppress the warning
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const checkScrollTop = React.useCallback(() => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  }, [showScroll]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [checkScrollTop]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="App">
        <NavBar>
          <Logo>Portfolio</Logo>
          <NavLinks>
            <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
            <a href="#about" onClick={() => scrollToSection('about')}>About</a>
            <a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a>
            <a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
            <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
          </NavLinks>
        </NavBar>

        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>

        <Footer />

        <ScrollToTop 
          visible={showScroll} 
          onClick={scrollTop}
        >
          ↑
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
