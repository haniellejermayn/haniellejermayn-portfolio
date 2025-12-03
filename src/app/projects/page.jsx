"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
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
    title: "[MOBICOM] Kasama - Household Task Management App",
    description:
      "A Kotlin-based Android app for collaborative household management with multi-user chore tracking, shared notes, and push notifications. Features offline-first architecture with Room, Firebase real-time sync, and WorkManager.",
    image: "/assets/projects/kasama.png",
    link: "",
    github: "https://github.com/haniellejermayn/kasama",
    tech: ["Kotlin", "Android", "Room", "Firebase", "WorkManager", "MVVM"]
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
    tech: ["MySQL", "Python", "Pandas", "Flask", "JavaScript"]
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

// Match Experience page behavior
const MAX_VISIBLE = 5;

const Projects = () => {
  const [swiperKey, setSwiperKey] = useState(0);

  // active slide index per category
  const [activeIndexes, setActiveIndexes] = useState({});
  // hold swiper instances per category
  const swiperRefs = useRef({});

  useEffect(() => {
    const timer = setTimeout(() => setSwiperKey(1), 3000);
    return () => clearTimeout(timer);
  }, []);

  // helper to compute bullet window [start, end]
  const getVisibleRange = (count, active) => {
    if (count <= MAX_VISIBLE) return [0, count - 1];
    let start = active - Math.floor(MAX_VISIBLE / 2);
    if (start < 0) start = 0;
    if (start + MAX_VISIBLE - 1 > count - 1) start = count - MAX_VISIBLE;
    const end = start + MAX_VISIBLE - 1;
    return [start, end];
  };

  // keep parity with Experience: force Swiper pagination re-render if needed
  useEffect(() => {
    Object.keys(activeIndexes).forEach((i) => {
      const swiperInstance = document
        .querySelector(`.swiper-pagination-${i}`)
        ?.closest(".swiper")?.swiper;
      if (swiperInstance) {
        swiperInstance.pagination?.render?.();
        swiperInstance.pagination?.update?.();
      }
    });
  }, [activeIndexes]);

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
        <Tabs
          defaultValue={categories[0]}
          className="w-full flex flex-col gap-0"
        >
          {/* Title and Tabs Side by Side */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
            <h2 className="h2 text-3xl lg:text-4xl font-bold">
              My <span className="text-accent-light">Projects</span>
            </h2>

            <TabsList className="h-auto flex flex-wrap justify-center sm:justify-end items-center gap-3">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="capitalize border border-white/10 data-[state=active]:bg-accent 
                    data-[state=active]:border-accent h-[48px] px-6 rounded-full cursor-pointer
                    hover:bg-white/5 transition-all"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="h-[65vh] scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
            {categories.map((category, index) => {
              const slides = projects.filter((p) => p.category === category);
              const slidesCount = slides.length;
              const active = activeIndexes[index] ?? 0;
              const [start, end] = getVisibleRange(slidesCount, active);

              return (
                <TabsContent key={category} value={category} className="mt-0">
                  {/* Pagination row with prev, bullets, next (match Experience) */}
                  <div className="flex justify-center items-center mb-5 z-500">
                    <div className="flex items-center gap-3">
                      {/* Prev */}
                      <button
                        onClick={() => swiperRefs.current[index]?.slidePrev()}
                        disabled={active === 0}
                        className="text-lg px-3 py-1 rounded-full bg-accent/20 text-white cursor-pointer hover:bg-accent/40 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        &lt;
                      </button>

                      {/* Bullets */}
                      <div className="flex items-center justify-center gap-2">
                        {start > 0 && (
                          <span className="text-white/50 select-none px-1">
                            ...
                          </span>
                        )}
                        {Array.from({ length: end - start + 1 }, (_, i) => {
                          const slideIndex = start + i;
                          return (
                            <motion.button
                              key={slideIndex}
                              onClick={() =>
                                swiperRefs.current[index]?.slideTo(slideIndex)
                              }
                              className={`w-7 h-7 rounded-full flex items-center justify-center text-sm transition-all
                                ${
                                  slideIndex === active
                                    ? "bg-accent-light text-black font-semibold"
                                    : "bg-white/20 text-white cursor-pointer"
                                }`}
                              layout
                            >
                              {slideIndex + 1}
                            </motion.button>
                          );
                        })}
                        {end < slidesCount - 1 && (
                          <span className="text-white/50 select-none px-1">
                            ...
                          </span>
                        )}
                      </div>

                      {/* Next */}
                      <button
                        onClick={() => swiperRefs.current[index]?.slideNext()}
                        disabled={
                          active === slidesCount - 1 || slidesCount === 0
                        }
                        className="text-lg px-3 py-1 rounded-full bg-accent/20 text-white cursor-pointer hover:bg-accent/40 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        &gt;
                      </button>
                    </div>
                  </div>

                  <Swiper
                    key={`swiper-${category}-${swiperKey}`}
                    modules={[Navigation]}
                    navigation={false}
                    spaceBetween={30}
                    slidesPerView={1}
                    className={`pb-4 ${slidesCount > 1 ? "cursor-grab active:cursor-grabbing" : ""}`}
                    onSlideChange={(swiper) => {
                      setActiveIndexes((prev) => ({
                        ...prev,
                        [index]: swiper.activeIndex
                      }));
                    }}
                    onInit={(swiper) => {
                      swiperRefs.current[index] = swiper;
                      setActiveIndexes((prev) => ({ ...prev, [index]: 0 }));
                    }}
                  >
                    {slides.map((project) => (
                      <SwiperSlide key={project.id} className="h-full">
                        {/* ---- CARD LAYOUT UNCHANGED ---- */}
                        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                          {/* Project Info */}
                          <div className="w-full flex flex-col gap-2 order-2 md:order-none">
                            <h3 className="text-2xl font-medium leading-[1.2]">
                              {project.title}
                            </h3>
                            <p className="text-white/80">
                              {project.description}
                            </p>

                            {project.category !== "Research" && (
                              <div className="my-2">
                                <p className="mb-2">Tech Stack / Skills</p>
                                <ul className="flex flex-wrap gap-3">
                                  {project.tech.map((item, idx) => (
                                    <li
                                      key={idx}
                                      className="flex items-center fap-4 bg-[#a8ffcb]/13 h-[28px] px-[14px] rounded-full"
                                    >
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {project.awards && project.awards.length > 0 && (
                              <div className="mb-4">
                                <p className="mb-2">Awards</p>
                                <ul className="list-disc pl-5">
                                  {project.awards.map((award, idx) => (
                                    <li key={idx} className="text-white/80">
                                      {award}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

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
                        {/* ---- END CARD LAYOUT ---- */}
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>

      {/* Custom Styles (match Experience) */}
      <style jsx global>{`
        .swiper-pagination {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          transition: all 0.3s ease-in-out;
        }

        .swiper-pagination-bullet {
          opacity: 0.6;
          transform: scale(0.9);
          transition: all 0.3s ease-in-out;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
          font-weight: 600;
          color: white;
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
          opacity: 1;
        }

        .swiper-pagination-bullet-active {
          background: var(--accent-color-light, #86b97a);
          color: black;
          font-weight: 600;
        }

        /* Hide default Swiper arrows on small screens (parity with Experience) */
        @media (max-width: 640px) {
          .swiper-button-prev,
          .swiper-button-next {
            display: none;
          }
        }

        /* Hide vertical scrollbar on xl- devices */
        @media (max-width: 1279px) {
          .scrollbar {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .scrollbar::-webkit-scrollbar {
            display: none;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default Projects;
