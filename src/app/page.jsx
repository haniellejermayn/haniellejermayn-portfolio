"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { MdFileDownload } from "react-icons/md";
import { HiOutlinePhone, HiOutlineMailm, HiOutlineMail } from "react-icons/hi";

import Blob from "@/components/Blob";
import Image from "next/image";
import avatarImg from "@/../public/assets/avatarImg.png";
import Socials from "@/components/Socials";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="h-[80vh] flex items-center justify-center"
    >
      {/* Background Gradient */}
      <div className="flex flex-col xl:flex-row items-center justify-between w-full">
        {/* Text */}
        <div className="w-full xl:w-[550px] flex flex-col items-center xl:items-start text-center xl:text-left">
          <h1 className="h1 flex-1 mb-[24px]">
            Hello! I'm Hanielle, <br />
            <span className="inline-block">
              {/* This wrapper ensures that the animation respects line breaks */}
              <TypeAnimation
                sequence={[
                  "Full-Stack Developer",
                  2000,
                  "Frontend Developer",
                  2000,
                  "Backend Developer",
                  2000,
                  "Blockchain Developer",
                  2000
                ]}
                wrapper="span"
                speed={40}
                className="text-accent-light"
                repeat={Infinity}
                cursor={false}
              />
            </span>
          </h1>
          <p className="max-w-[500px] mb-[32px]">
            I'm a Computer Science student at DLSU, exploring technology from
            web development to apps and more. <br />
            I'm always eager to learn and take on new challenges!
          </p>
          {/* DOESNT WORK
          <a
            href="mailto:chua.haniellejermayn@example.com"
            className="btn btn-lg btn-accent mb-10"
          >
            <div className="flex items-center gap-3">
              <span>Let's talk.</span>
              <MdArrowOutward className="text-xl"></MdArrowOutward>
            </div>
          </a>
           */}
          <a
            href="/assets/Chua Resume.pdf"
            download
            className="btn btn-lg btn-tertiary mb-10"
          >
            <div className="flex items-center gap-3">
              <span>Download CV</span>
              <MdFileDownload className="text-xl"></MdFileDownload>
            </div>
          </a>
          {/* Contact Info */}
          <div className="flex flex-col items-center xl:items-start gap-4 xl:gap-2 mb-8">
            {/* Mail */}
            <div className="flex items-center gap-2 text-md">
              <span className="text-accent-light">
                <HiOutlineMail className="text-xl"></HiOutlineMail>
              </span>
              <span>chua.haniellejermayn@gmail.com</span>
            </div>
            {/* Phone */}
            <div className="flex items-center gap-2 text-md">
              <span className="text-accent-light">
                <HiOutlinePhone className="text-xl"></HiOutlinePhone>
              </span>
              <span>+63 993 935 5665</span>
            </div>
          </div>
          {/* Socials */}
          <Socials
            containerStyles="flex 2xl:flex-col gap-6 2xl:flex 2xl:absolute 
            2xl:top-1/2 2xl:right-2 2xl:transform 2xl:-translate-x-1/2 2xl:-translate-y-1/2"
            iconStyles="bg-accent text-white hover:bg-accent-hover transition w-[48px] h-[48px]
            text-[22px] flex items-center justify-center rounded-full cursor-pointer"
          />
        </div>

        {/* Blob & Image */}
        <div className="hidden xl:block flex-1 relative z-20">
          {/* Blob */}
          <Blob containerStyles="w-[510px] h-[510px]" />
          {/* Avatar Image */}
          <Image
            src={avatarImg}
            alt=""
            width={480}
            height={480}
            quality={100}
            className="absolute top-[-10px] left-[30px] rounded-full opacity-100"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
