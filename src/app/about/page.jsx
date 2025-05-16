"use client";

import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

import Image from "next/image";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="h-screen flex item-center"
    >
      <div className="container mx-auto mt-[120px] px-0 xl:m-auto">
        <div className="flex flex-col xl:flex-row items-center gap-24 w-full h-[680px] 2xl:m-auto">
          {/* Image & Social Icons */}
          <div className="hidden xl:flex w-full h-full pt-14 max-w-[430px] relative bg-pink-50/10">
            1
          </div>
          {/* Scroll Area */}
          <ScrollArea className="w-full h-[680px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <p>About me</p>
            </div>
            <h2 className="h2 mb-6">
              <span className="text-accent">Hanielle</span> Jermayn E. Chua
            </h2>
            <p className="max-w-[540px] mb-12">
              Full-stack developer with experience building user-friendly
              frontend interfaces and reliable backend systems. I'm also looking
              into data science and cloud computing to broaden my skillset. I'm
              a fast learner and problem solver who enjoys tackling new
              challenges.
            </p>
            <div className="flex flex-col items-start gap-16">
              <div>stats</div>
              <div>testimonial</div>
              <div>info</div>
              <div>journey</div>
              <div>skills</div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
