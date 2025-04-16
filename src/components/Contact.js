import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import styled from 'styled-components';
import { FaGithub, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';

// Remove unused imports
// import { useScroll, useTransform } from 'framer-motion';
// import gsap from 'gsap';

const ContactSection = styled.section`
  min-height: 100vh;
  padding: 100px 10%;
  background: #0a0a0a;
  color: #ffffff;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 60%;
    height: 60%;
    background: radial-gradient(circle at bottom right, rgba(0,255,131,0.1) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-top: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled(motion.div)`
  h3 {
    color: #00ff83;
    font-size: 1.8rem;
    margin-bottom: 30px;
  }
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  .icon {
    font-size: 1.5rem;
    margin-right: 15px;
    color: #00ff83;
  }

  .content {
    a {
      color: #fff;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #00ff83;
      }
    }
  }
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled(motion.input)`
  padding: 15px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #00ff83;
    background: rgba(255, 255, 255, 0.1);
  }
`;

const TextArea = styled(motion.textarea)`
  padding: 15px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: #fff;
  font-size: 1rem;
  min-height: 150px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #00ff83;
    background: rgba(255, 255, 255, 0.1);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 15px 30px;
  background: linear-gradient(45deg, #00ff83, #00a1ff);
  border: none;
  border-radius: 25px;
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #00ff83, #00a1ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const contactInfo = [
  { 
    icon: <FaPhoneAlt />,
    content: "+91-9019132291",
    link: "tel:+919019132291",
    animation: { rotate: [0, 20, 0], transition: { repeat: Infinity, duration: 1.5 } }
  },
  { 
    icon: <MdEmail />,
    content: "drahul1250@gmail.com",
    link: "mailto:drahul1250@gmail.com",
    animation: { y: [-2, 2, -2], transition: { repeat: Infinity, duration: 1.5 } }
  },
  { 
    icon: <FaGithub />,
    content: "GitHub",
    link: "https://github.com/rkRahul1250",
    animation: { scale: [1, 1.1, 1], transition: { repeat: Infinity, duration: 1.5 } }
  },
  { 
    icon: <FaLinkedinIn />,
    content: "LinkedIn",
    link: "https://linkedin.com/in/rk-rahul-44284427",
    animation: { scale: [1, 1.1, 1], transition: { repeat: Infinity, duration: 1.5 } }
  }
];

const Contact = () => {
  useEffect(() => {
    emailjs.init('m-XcZD2dG7pDiv8nN');
  }, []);
  
  const [formStatus, setFormStatus] = useState('');
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    
    try {
      setFormStatus('Sending message...');
      
      const result = await emailjs.send(
        'service_2puudrk',
        'template_o4t9a3d',
        {
          from_name: form.user_name.value,
          from_email: form.user_email.value,
          subject: form.subject.value,
          message: form.message.value,
          to_name: 'Rahul',
          reply_to: form.user_email.value,
        },
        'm-XcZD2dG7pDiv8nN'  // Updated public key
      );

      if (result.status === 200) {
        setFormStatus('Message sent successfully!');
        form.reset();
      } else {
        setFormStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setFormStatus('Failed to send message. Please try again.');
    }

    setTimeout(() => setFormStatus(''), 3000);
  };

  return (
    <ContactSection
      ref={ref}
      as={motion.section}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <Title as={motion.h2} variants={itemVariants}>Get In Touch</Title>
      <ContactGrid>
        <ContactInfo variants={itemVariants}>
          <h3>Contact Information</h3>
          {contactInfo.map((info, index) => (
            <ContactItem 
              key={index}
              whileHover={{ scale: 1.05, x: 10 }}
              variants={itemVariants}
            >
              <motion.span 
                className="icon"
                animate={info.animation}
              >
                {info.icon}
              </motion.span>
              <div className="content">
                <motion.a 
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ color: '#00ff83' }}
                >
                  {info.content}
                </motion.a>
              </div>
            </ContactItem>
          ))}
        </ContactInfo>
        <ContactForm
          variants={itemVariants}
          onSubmit={handleSubmit}
        >
          <Input
            name="user_name" // Add name attribute
            type="text"
            placeholder="Your Name"
            required
            variants={itemVariants}
            whileFocus={{ scale: 1.02 }}
          />
          <Input
            name="user_email" // Add name attribute
            type="email"
            placeholder="Your Email"
            required
            variants={itemVariants}
            whileFocus={{ scale: 1.02 }}
          />
          <Input
            name="subject" // Add name attribute
            type="text"
            placeholder="Subject"
            required
            variants={itemVariants}
            whileFocus={{ scale: 1.02 }}
          />
          <TextArea
            name="message" // Add name attribute
            placeholder="Your Message"
            required
            variants={itemVariants}
            whileFocus={{ scale: 1.02 }}
          />
          <SubmitButton
            type="submit"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </SubmitButton>
          {formStatus && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ color: '#00ff83', textAlign: 'center', marginTop: '10px' }}
            >
              {formStatus}
            </motion.p>
          )}
        </ContactForm>
      </ContactGrid>
    </ContactSection>
  );
};

export default Contact;