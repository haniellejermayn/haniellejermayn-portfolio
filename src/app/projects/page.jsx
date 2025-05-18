"use client";

import { motion } from "framer-motion";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    category: "Personal",
    title: "Portfolio",
    description: "My responsive personal portfolio website built with Next.js.",
    image: "/assets/projects/portfolio.png",
    link: "",
    github: "https://github.com/haniellejermayn/haniellejermayn-portfolio",
    tech: ["React", "Next.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"]
  },
  {
    id: 2,
    category: "Coursework",
    title: "[CCAPDEV] Connectify - Forum Web Application",
    description: "A forum web application built with Express.js and MongoDB.",
    image: "/assets/projects/connectify.png",
    link: "https://connectify-y0tq.onrender.com",
    github: "https://github.com/strangeshands/APDEV-MCO",
    tech: ["Node.js", "Express.js", "MongoDB", "JavaScript", "HTML", "CSS"]
  },
  {
    id: 3,
    category: "Coursework",
    title: "[CCPROG3] Noir - Hotel Reservation System",
    description: "A hotel reservation system built with Java.",
    image: "/assets/projects/noir.png",
    link: "",
    github: "https://github.com/haniellejermayn/HotelReservationSystem",
    tech: ["Java", "Java Swing"]
  },
  {
    id: 4,
    category: "Coursework",
    title: "[CCINFOM] Volt Vault - Electric Meter Management",
    description: "A database application built with Python and MySQL.",
    image: "/assets/projects/voltvault.png",
    link: "",
    github: "https://github.com/strangeshands/INFOM-DBAPP",
    tech: ["MySQL", "SQL", "Python", "Flask"]
  },
  {
    id: 5,
    category: "Research",
    title:
      "Reduction of Traffic Congestion in España Boulevard using Graph Theory",
    description: "My senior high school STEM research project.",
    image: "/assets/projects/res.png",
    link: "",
    github: "",
    tech: ["Python"],
    awards: [
      "Gold Award - World Youth International Innovation Award 2022",
      "Third Award - Taiwan International Science Fair 2023",
      "Finalist - Closed-Door Defense of UP ALCHEMES 2023"
    ]
  }
];

const categories = ["Personal", "Coursework", "Research"];

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="min-h-[80vh] flex items-center py-0"
    >
      <div className="container mx-auto w-full h-[80vh] flex flex-col mt-6">
        {/* Header */}
        <h2 className="h2 mb-6 max-w-[600px]">
          My <span className="text-accent-light">Projects</span>
        </h2>
        {/* Tabs */}
        <Tabs
          defaultValue="Personal"
          className="w-full flex flex-col gap-6 md:gap-8 2xl:gap-12"
        >
          {/* Tabs List */}
          <TabsList className="flex flex-wrap justify-center items-center gap-4 h-full mb-4 md:mb-0">
            {categories.map((category) => {
              return (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="capitalize border border-white/10 data-[state=active]:bg-accent 
                  data-[state=active]:border-accent h-[48px] px-6 rounded-full cursor-pointer"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* Tabs Content */}
          <div>
            {categories.map((category) => {
              return (
                <TabsContent key={category} value={category}>
                  <Swiper>
                    {projects
                      .filter((project) => project.category === category)
                      .map((project) => {
                        return (
                          <SwiperSlide key={project.id} className="h-full">
                            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                              {/* Project Info */}
                              <div className="w-full flex flex-col gap-2 order-2 md:order-none">
                                {/* Title */}
                                <h3 className="text-2xl font-medium leading-[1.2]">
                                  {project.title}
                                </h3>
                                {/* Description */}
                                <p className="text-white/80">
                                  {project.description}
                                </p>
                                {/* Tech */}
                                <div className=" my-2">
                                  <p className="mb-2">Technologies Used</p>
                                  <ul className="flex flex-wrap gap-3">
                                    {project.tech.map((item, index) => {
                                      return (
                                        <li
                                          key={index}
                                          className="flex items-center fap-4 bg-[#a8ffcb]/13 h-[28px] px-[14px] rounded-full"
                                        >
                                          {item}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                                {/* Awards */}
                                {project.awards &&
                                  project.awards.length > 0 && (
                                    <div className="mb-4">
                                      <p className="mb-2">Awards</p>
                                      <ul className="list-disc pl-5">
                                        {project.awards.map((award, index) => (
                                          <li
                                            key={index}
                                            className="text-white/80"
                                          >
                                            {award}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}
                                {/* Buttons */}
                                <div className="mt-2 flex flex-row gap-4">
                                  {project.link && (
                                    <Link href={project.link}>
                                      <button className="btn btn-sm btn-accent flex gap-2">
                                        <MdArrowOutward className="text-xl" />
                                        <span>Go to Project</span>
                                      </button>
                                    </Link>
                                  )}
                                  {project.github && (
                                    <Link href={project.github}>
                                      <button className="btn btn-sm btn-white flex gap-2">
                                        <FaGithub className="text-xl" />
                                        <span>GitHub Repo</span>
                                      </button>
                                    </Link>
                                  )}
                                </div>
                              </div>
                              {/* Project Image */}
                              <div className="w-full h-[25vh] md:h-[50vh] relative bg-pink-50/10 order-1 md:order-none rounded-lg overflow-hidden">
                                <Image
                                  src={project.image}
                                  alt={project.title}
                                  fill
                                  sizes="(max-width: 768px) 100vw, 50vw"
                                  className="object-contain" // Changed from object-cover to object-contain
                                  priority
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Projects;
