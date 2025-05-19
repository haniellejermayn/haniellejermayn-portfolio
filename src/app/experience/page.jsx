"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { IoCalendarOutline } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { BsTools } from "react-icons/bs";

const experience = [
  {
    id: 1,
    category: "Work/Internship",
    title: "Junior Blockchain Developer",
    company: "Bids n Buys",
    duration: "May 2025 - Present",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    logo: "/assets/experience/bidsnbuys.jpg",
    tech: [
      "Cardano",
      "Linux",
      "Haskell",
      "Docker",
      "TypeScript",
      "MongoDB",
      "AngularJS",
      "Jest"
    ]
  },
  {
    id: 2,
    category: "Work/Internship",
    title: "Blockchain Developer Intern",
    company: "Bids n Buys",
    duration: "May 2025 - Present",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    logo: "/assets/experience/bidsnbuys.jpg",
    tech: [
      "Cardano",
      "Linux",
      "Haskell",
      "Docker",
      "TypeScript",
      "MongoDB",
      "AngularJS",
      "Jest"
    ]
  },
  {
    id: 3,
    category: "Work/Internship",
    title: "Intelligent Transportation Systems Lab Intern",
    company: "University of the Philippines - Diliman",
    duration: "June 13 - July 01, 2022",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    logo: "/assets/experience/upd.jpg",
    tech: ["LocalSim"]
  },
  {
    id: 4,
    category: "Work/Internship",
    title: "Summer Intern",
    company: "Center for Applied Microelectronics and Programming, Inc.",
    duration: "June 07 - June 18, 2021",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    logo: "/assets/experience/camp.jpg",
    tech: ["NodeJS", "SQL", "HTML", "CSS", "JavaScript"]
  },
  {
    id: 5,
    category: "Org Work",
    title: "Junior Officer",
    company: "La Salle Computer Society",
    duration: "October 2024 - Present",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    logo: "/assets/experience/lscs.jpg",
    tech: []
  },
  {
    id: 6,
    category: "Org Work",
    title: "Events & Activities Officer",
    company: "DLSU - Microsoft Student Community",
    duration: "October 2023 - July 2024",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    logo: "/assets/experience/msc.jpg",
    tech: []
  },
  {
    id: 7,
    category: "Org Work",
    title: "Junior Officer - Documentations & Logistics",
    company: "Lasallian Scholars Society",
    duration: "October 2023 - July 2024",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    logo: "/assets/experience/lss.jpg",
    tech: []
  }
];

const categories = ["Work/Internship", "Org Work"];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="min-h-screen flex items-start 2xl:items-center"
    >
      <div className="container mx-auto flex flex-col">
        {/* Header */}
        <h2 className="h2 mb-2 text-4xl font-bold">
          My <span className="text-accent-light">Experience</span>
        </h2>

        {/* Tabs */}
        <Tabs
          defaultValue={categories[0]}
          className="w-full"
          onValueChange={setActiveTab}
        >
          {/* Tabs List */}
          <TabsList className="flex justify-center items-center gap-4 mb-8 flex-wrap">
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

          {/* Tabs Content */}
          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="w-full">
                <Swiper
                  modules={[Pagination, Navigation]}
                  pagination={{
                    clickable: true,
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active"
                  }}
                  navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next"
                  }}
                  spaceBetween={30}
                  slidesPerView={1}
                  className="relative pb-16"
                >
                  {experience
                    .filter((item) => item.category === category)
                    .map((item) => (
                      <SwiperSlide key={item.id}>
                        <div className="flex items-center justify-center bg-[#1c1c22] rounded-xl p-8 shadow-lg border border-white/5 overflow-hidden min-h-95">
                          <div className="flex flex-col lg:flex-row gap-8">
                            {/* Left Column - Logo */}
                            <div className="lg:w-1/4 lg:flex-col lg:items-center flex justify-center items-start">
                              <div className="w-32 h-32 relative rounded-xl overflow-hidden bg-white/5 p-4">
                                <Image
                                  src={item.logo}
                                  alt={item.company}
                                  fill
                                  className="object-contain p-2 rounded-xl"
                                />
                              </div>
                            </div>

                            {/* Right Column - Details */}
                            <div className="lg:w-3/4">
                              <h3 className="text-2xl font-bold text-white mb-2">
                                {item.title}
                              </h3>

                              <div className="flex flex-col sm:flex-row gap-4 mb-4 text-white/70">
                                <div className="flex items-center gap-2">
                                  <FaBuilding className="text-accent-light" />
                                  <span className="leading-[1.2]">
                                    {item.company}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <IoCalendarOutline className="text-accent-light" />
                                  <span className="leading-[1.2]">
                                    {item.duration}
                                  </span>
                                </div>
                              </div>

                              <div className="mb-6">
                                <p className="text-white/80 leading-relaxed">
                                  {item.description}
                                </p>
                              </div>

                              {item.tech && item.tech.length > 0 && (
                                <div>
                                  <div className="flex items-center gap-2 mb-3">
                                    <BsTools className="text-accent-light" />
                                    <h4 className="font-medium">
                                      Technologies
                                    </h4>
                                  </div>

                                  <div className="flex flex-wrap gap-2">
                                    {item.tech.map((tech, index) => (
                                      <span
                                        key={index}
                                        className="bg-accent/10 text-accent-light px-3 py-1 rounded-full text-sm"
                                      >
                                        {tech}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}

                  {/* Custom Navigation */}
                  <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full z-10 px-4">
                    <button className="swiper-button-prev w-10 h-10 rounded-full bg-accent/20 hover:bg-accent/40 flex items-center justify-center text-white transition-all">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m15 18-6-6 6-6" />
                      </svg>
                    </button>
                    <button className="swiper-button-next w-10 h-10 rounded-full bg-accent/20 hover:bg-accent/40 flex items-center justify-center text-white transition-all">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                  </div>
                </Swiper>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.2);
          opacity: 1;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background: var(--accent-color-light, #86b97a);
          width: 16px;
          height: 16px;
        }

        .swiper-button-prev,
        .swiper-button-next {
          background: none;
          color: white;
        }

        .swiper-button-prev:after,
        .swiper-button-next:after {
          display: none;
        }

        @media (max-width: 640px) {
          .swiper-button-prev,
          .swiper-button-next {
            display: none;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default Experience;
