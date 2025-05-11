"use client";

import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.section 
      initial={{opacity: 0}} 
      animate={{
        opacity: 1, 
        transition: {delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
    >
      Experience
    </motion.section>
  );
};

export default Experience;