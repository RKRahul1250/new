import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';

const ExperienceSection = styled.section`
  min-height: 100vh;
  padding: 100px 10%;
  background: #0a0a0a;
  color: #ffffff;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 80% 20%, rgba(0,255,131,0.1) 0%, transparent 60%);
    pointer-events: none;
  }
`;

const TimelineContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 50px auto;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, #00ff83, #00a1ff);
    transform: translateX(-50%);
  }
`;

const ExperienceCard = styled(motion.div)`
  position: relative;
  width: calc(50% - 40px);
  margin: ${props => props.align === 'right' ? '0 0 50px auto' : '0 auto 50px 0'};
  padding: 30px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 30px;
    ${props => props.align === 'right' ? 'left: -15px' : 'right: -15px'};
    width: 30px;
    height: 2px;
    background: linear-gradient(${props => props.align === 'right' ? 'to left' : 'to right'}, #00ff83, #00a1ff);
  }

  h3 {
    color: #00ff83;
    font-size: 1.5rem;
    margin-bottom: 15px;
  }

  .company {
    color: #00a1ff;
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  .date {
    color: #888;
    font-size: 0.9rem;
    margin-bottom: 15px;
  }

  ul {
    color: #888;
    list-style-type: none;
    padding: 0;

    li {
      margin-bottom: 10px;
      padding-left: 20px;
      position: relative;

      &::before {
        content: '→';
        position: absolute;
        left: 0;
        color: #00ff83;
      }
    }
  }
`;

const Experience = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".experience-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: index => index % 2 === 0 ? -100 : 100,
        duration: 1,
        stagger: 0.3
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const experiences = [
    {
      title: "Frontend Developer",
      company: "EInfratech Systems Pvt Ltd",
      location: "Bangalore",
      date: "2024 - Present",
      responsibilities: [
        "Developed responsive user interfaces using HTML, CSS, JavaScript, and Bootstrap",
        "Redesigned UI/UX of company sites and collaborated on chatbot 'Infra'",
        "Worked on performance optimization and debugging",
        "Managed WordPress-based website projects and GitHub Pages deployment"
      ]
    },
    {
      title: "AI & ML Intern",
      company: "Karunadu Technologies",
      location: "Remote",
      date: "2023",
      responsibilities: [
        "Worked on machine learning models and data analysis",
        "Implemented CNN models for image classification",
        "Developed data preprocessing pipelines",
        "Collaborated with team on various ML projects"
      ]
    }
  ];

  return (
    <ExperienceSection ref={sectionRef}>
      <motion.h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "2rem",
          background: "linear-gradient(45deg, #00ff83, #00a1ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Professional Experience
      </motion.h2>

      <TimelineContainer>
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            className="experience-card"
            align={index % 2 === 0 ? 'left' : 'right'}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3>{exp.title}</h3>
            <div className="company">{exp.company}</div>
            <div className="date">{exp.date}</div>
            <ul>
              {exp.responsibilities.map((resp, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {resp}
                </motion.li>
              ))}
            </ul>
          </ExperienceCard>
        ))}
      </TimelineContainer>
    </ExperienceSection>
  );
};

export default Experience;