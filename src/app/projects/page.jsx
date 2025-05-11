"use client";

import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.section 
      initial={{opacity: 0}} 
      animate={{
        opacity: 1, 
        transition: {delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
    >
      Projects
    </motion.section>
  );
};

export default Projects;