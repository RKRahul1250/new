import { keyframes } from 'styled-components';

export const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

export const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(0, 255, 131, 0.2); }
  50% { box-shadow: 0 0 20px rgba(0, 255, 131, 0.6); }
  100% { box-shadow: 0 0 5px rgba(0, 255, 131, 0.2); }
`;

export const slideReveal = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};