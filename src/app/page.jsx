"use client";
import { motion } from "framer-motion";

import Blob from "@/components/Blob";
import Image from "next/image";
import avatarImg from "@/../public/assets/avatarImg.png";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="h-screen flex items-center"
    >
      <div className="flex flex-col xl:flex-row items-center justify-between w-full">
        {/* Text */}
        <div className="w-full xl:w-[550px]">text</div>

        {/* Blob & Image */}
        <div className="hidden xl:block flex-1 relative z-20">
          {/* Blob */}
          <Blob containerStyles="w-[560px] h-[560px]" />
          {/* Avatar Image */}
          <Image
            src={avatarImg}
            alt=""
            width={550}
            height={550}
            quality={100}
            className="absolute top-[-30px] left-[30px] rounded-full"
          />
          {/* Overlay Gradient */}
          {/* Smooth Overlay Gradient */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: "2.5rem",
              width: "100%",
              height: "200px",
              background:
                "linear-gradient(to top, #0d120e 5%, rgba(13, 18, 14, 0.95) 15%, rgba(13, 18, 14, 0.85) 30%, rgba(13, 18, 14, 0.75) 45%, rgba(13, 18, 14, 0.6) 60%, rgba(13, 18, 14, 0.4) 75%, rgba(13, 18, 14, 0.2) 85%, rgba(13, 18, 14, 0.05) 95%, transparent 100%)",
              borderRadius: "50%"
            }}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
