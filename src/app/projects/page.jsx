"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    category: "Projects",
    title: "[MOBICOM] Kasama - Household Task Management App (WIP)",
    description:
      "A Kotlin-based Android application for managing shared chores and notes within households, featuring offline-first architecture with SQLite and Firebase real-time synchronization.",
    image: "/assets/projects/kasama.png",
    link: "",
    github: "https://github.com/haniellejermayn/kasama",
    tech: ["Kotlin", "Android", "SQLite", "Firebase"]
  },
  {
    id: 2,
    category: "Projects",
    title: "[STADVDB] IMDb OLAP Data Warehouse",
    description:
      "A dimensional data warehouse implementing a star schema for IMDb dataset analysis. Built ETL pipelines with Python and Pandas to process 12GB of data. Used a Flask backend with HTML and JavaScript to serve the frontend and implemented OLAP operations for efficient analysis.",
    image: "/assets/projects/imdb.png",
    link: "",
    github: "https://github.com/haniellejermayn/IMDb-OLAPApplication",
    tech: ["MySQL", "Python", "Pandas", "Flask", "HTML", "JavaScript"]
  },
  {
    id: 3,
    category: "Projects",
    title: "Portfolio",
    description:
      "My responsive personal portfolio website built with Next.js, featuring smooth page transitions with Framer Motion and user-friendly UI components with shadcn/ui.",
    image: "/assets/projects/portfolio.png",
    link: "https://haniellejermayn-portfolio.vercel.app",
    github: "https://github.com/haniellejermayn/haniellejermayn-portfolio",
    tech: ["React", "Next.js", "Tailwind CSS", "JavaScript"]
  },
  {
    id: 4,
    category: "Projects",
    title: "[CCAPDEV] Connectify - Forum Web Application",
    description:
      "A forum web application for user interactions and content management, built with Express.js backend and MongoDB database.",
    image: "/assets/projects/connectify.png",
    link: "https://connectify-y0tq.onrender.com",
    github: "https://github.com/strangeshands/APDEV-MCO",
    tech: ["Node.js", "Express.js", "MongoDB", "JavaScript", "HTML", "CSS"]
  },
  {
    id: 5,
    category: "Projects",
    title: "[CCPROG3] Noir - Hotel Reservation System",
    description:
      "A hotel reservation system with graphical user interface (GUI) built using Java and Java Swing.",
    image: "/assets/projects/noir.png",
    link: "",
    github: "https://github.com/haniellejermayn/HotelReservationSystem",
    tech: ["Java", "Java Swing"]
  },
  {
    id: 6,
    category: "Projects",
    title: "[CCINFOM] Volt Vault - Electric Meter Management",
    description:
      "A database application for electric meter management built with Python Flask backend and MySQL database.",
    image: "/assets/projects/voltvault.png",
    link: "",
    github: "https://github.com/strangeshands/INFOM-DBAPP",
    tech: ["MySQL", "SQL", "Python", "Flask"]
  },
  {
    id: 7,
    category: "Research",
    title:
      "Reduction of Traffic Congestion in España Boulevard using Graph Theory",
    description:
      "My senior high school STEM research project applying graph theory algorithms to analyze and propose solutions for traffic congestion.",
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

const categories = ["Projects", "Research"];

const Projects = () => {
  const [swiperKey, setSwiperKey] = useState(0);

  useEffect(() => {
    // Wait for Framer Motion animation to complete (2.4s + 0.4s = 2.8s)
    const timer = setTimeout(() => {
      setSwiperKey(1); // Force Swiper to re-initialize
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="min-h-screen flex items-start py-0"
    >
      <div className="container mx-auto w-full h-screen flex flex-col mt-2 2xl:justify-center">
        {/* Header */}
        <h2 className="h2 mb-2 max-w-[600px]">
          My <span className="text-accent-light">Projects</span>
        </h2>
        {/* Tabs */}
        <Tabs defaultValue="Projects" className="w-full flex flex-col gap-2">
          {/* Tabs List */}
          <TabsList className="max-h-[80px] flex flex-wrap justify-center items-center gap-4 h-full mb-0">
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
          <div className="h-[65vh] scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
            {categories.map((category, index) => {
              return (
                <TabsContent key={category} value={category}>
                  {/* Unique pagination per category */}
                  <div
                    className={`swiper-pagination-${index} flex justify-center items-center gap-4 mb-6`}
                  ></div>

                  <Swiper
                    key={`swiper-${category}-${swiperKey}`}
                    modules={[Pagination, Navigation]}
                    pagination={{
                      clickable: true,
                      el: `.swiper-pagination-${index}`,
                      renderBullet: function (index, className) {
                        return (
                          '<span class="' +
                          className +
                          '">' +
                          (index + 1) +
                          "</span>"
                        );
                      }
                    }}
                    navigation={{
                      prevEl: ".swiper-button-prev-custom",
                      nextEl: ".swiper-button-next-custom"
                    }}
                    className={`pb-4 ${
                      projects.filter(
                        (project) => project.category === category
                      ).length > 1
                        ? "cursor-grab active:cursor-grabbing"
                        : ""
                    }`}
                  >
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
                                <div className="my-2">
                                  <p className="mb-2">Tech Stack / Skills</p>
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
                                <div className="mt-2 flex flex-row gap-2">
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
                              <div className="w-full h-[20vh] md:h-[50vh] relative bg-[#1c1c22] shadow-lg border border-white/5 order-1 md:order-none rounded-lg overflow-hidden">
                                <Image
                                  src={project.image}
                                  alt={project.title}
                                  fill
                                  sizes="(max-width: 768px) 100vw, 50vw"
                                  className="object-contain"
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

      {/* Add global styles for pagination bullets */}
      <style jsx global>{`
        [class*="swiper-pagination-"] {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 0 0;
          z-index: 10;
        }

        .swiper-pagination-bullet {
          width: 28px;
          height: 28px;
          background: rgba(255, 255, 255, 0.2);
          margin: 0 5px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: white;
        }

        .swiper-pagination-bullet-active {
          background: var(--accent-color-light, #86b97a);
          color: black;
          font-weight: 600;
        }

        /* Hide default Swiper arrows */
        .swiper-button-prev,
        .swiper-button-next {
          display: none;
        }

        /* Hide scrollbar on mobile devices */
        @media (max-width: 1279px) {
          .scrollbar {
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE and Edge */
          }

          .scrollbar::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
          }
        }
      `}</style>
    </motion.section>
  );
};

export default Projects;
