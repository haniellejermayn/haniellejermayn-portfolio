"use client";

import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState, useEffect, useRef } from "react";

import Image from "next/image";
import avatarImg from "@/../public/assets/avatarImg.png";
import Blob from "@/components/Blob";
// import Stats from "@/components/Stats"; // Uncomment when you have stats to show
import Socials from "@/components/Socials";
import Info from "@/components/Info";
import Education from "@/components/Education";
import Skills from "@/components/Skills";

const About = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const scrollAreaRef = useRef(null);

  // Function to check if user has scrolled to the bottom
  const checkScrollPosition = () => {
    if (!scrollAreaRef.current) return;

    const scrollContainer = scrollAreaRef.current.querySelector(
      "[data-radix-scroll-area-viewport]"
    );

    if (scrollContainer) {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainer;

      // Consider "at bottom" when within 20px of the bottom
      const isBottom = scrollHeight - scrollTop - clientHeight < 20;
      setIsAtBottom(isBottom);
    }
  };

  useEffect(() => {
    // Get the scroll viewport element after component mounts
    const scrollViewport = scrollAreaRef.current?.querySelector(
      "[data-radix-scroll-area-viewport]"
    );

    if (scrollViewport) {
      // Initial check
      checkScrollPosition();

      // Add scroll event listener
      scrollViewport.addEventListener("scroll", checkScrollPosition);

      // Clean up
      return () => {
        scrollViewport.removeEventListener("scroll", checkScrollPosition);
      };
    }
  }, []);

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
              className="z-20 relative rounded-full -scale-x-100"
            />

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
          <ScrollArea
            className="w-full h-[80vh] xl:h-[550px]"
            ref={scrollAreaRef}
          >
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
              Computer Science student passionate about building software. I
              have experience with full-stack development and am now expanding
              into DevOps, QA, and software engineering best practices to
              understand the complete software development lifecycle. I'm a fast
              learner and problem solver who enjoys tackling new challenges and
              continuously improving my skillset.
            </p>
            <div className="flex flex-col items-start gap-16">
              {/* NOTE: add Stats Component when impressive */}
              <Info />
              <Education />
              <Skills />
            </div>

            {/* Scroll Down Nudge - Only shows when not at bottom */}
            {!isAtBottom && (
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
            )}
          </ScrollArea>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
