"use client";

import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

import Image from "next/image";
import avatarImg from "@/../public/assets/avatarImg.png";
import Blob from "@/components/Blob";
// import Stats from "@/components/Stats"; // Uncomment when you have stats to show
import Socials from "@/components/Socials";
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
          <div className="hidden xl:flex flex-col w-full h-full pt-14 max-w-[430px] relative">
            <Image
              src={avatarImg}
              width={420}
              height={420}
              alt=""
              quality={100}
              className="z-20 relative rounded-full"
            />

            {/* Overlay */}
            <div
              className="w-[420px] h-[60px] absolute left-0 top-[334px]
              right-0 bg-gradient-to-t from-primary via-primary/90 z-30"
              style={{
                position: "absolute",
                bottom: 0,
                left: "0.8rem",
                width: "100%",
                height: "175px",
                background:
                  "linear-gradient(to top, #0d120e 10%, rgba(13, 18, 14, 0.95) 20%, rgba(13, 18, 14, 0.85) 30%, rgba(13, 18, 14, 0.75) 45%, rgba(13, 18, 14, 0.6) 60%, rgba(13, 18, 14, 0.4) 75%, rgba(13, 18, 14, 0.2) 85%, rgba(13, 18, 14, 0.05) 95%, transparent 100%)",
                borderRadius: "58%"
              }}
            ></div>

            {/* Blob */}
            <div className="absolute top-[75px] -left-[30px] z-10">
              <Blob containerStyles="w-[420px] h-[420px]" />
            </div>

            <div className="z-50 flex items-center justify-center w-[85%] pt-5">
              <Socials
                containerStyles="flex items-center justify-center gap-4 w-full transform translate-x-[30px]"
                iconStyles="w-[48px] h-[48px] text-[30px] text-accent-light hover:text-accent-hover 
              transition-all flex items-center justify-center rounded-full cursor-pointer"
              />
            </div>
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
                  repeatType: "loop"
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

            {/* Scroll Down Nudge */}
            {/* TODO: Should disappear upon scroll and at the bottom */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut"
              }}
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-50"
            >
              <div className="flex flex-col items-center text-accent-light">
                <span className="text-sm mb-1">Scroll</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </motion.div>
          </ScrollArea>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
