"use client";

import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

import Image from "next/image";
import Stats from "@/components/Stats";
import Info from "@/components/Info";
import Education from "@/components/Education";
import Skills from "@/components/Skills";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="lg:h-[80vh] flex items-center justify-center"
    >
      <div className="container mx-auto px-0 lg:mx-auto">
        <div className="flex flex-col xl:flex-row items-center gap-24 w-full h-[550px] 2xl:m-auto">
          {/* Image & Social Icons */}
          <div className="hidden xl:flex w-full h-full pt-14 max-w-[430px] relative bg-pink-50/10">
            1
          </div>
          {/* Scroll Area */}
          <ScrollArea className="w-full h-[80vh] xl:h-[550px]">
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                initial={{ opacity: 1 }}
                animate={{
                  opacity: [1, 0, 1] // cycles from visible to invisible and back
                }}
                transition={{
                  delay: 1,
                  duration: 2, // duration of one full cycle
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop" // or "reverse" for smoother back and forth
                }}
                className="w-2 h-2 bg-accent rounded-full"
              />
              <p>About me</p>
            </div>
            <h2 className="h2 mb-6">
              <span className="text-accent-light">Hanielle</span> Jermayn E.
              Chua
            </h2>
            <p className="max-w-[540px] mb-12">
              Full-stack developer with experience building user-friendly
              frontend interfaces and reliable backend systems. I'm also looking
              into data science and cloud computing to broaden my skillset. I'm
              a fast learner and problem solver who enjoys tackling new
              challenges.
            </p>
            <div className="flex flex-col items-start gap-16">
              {/* NOTE: add Stats Component when impressive */}
              <Info />
              <Education />
              <Skills />
            </div>
          </ScrollArea>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
