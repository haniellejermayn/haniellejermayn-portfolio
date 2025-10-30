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
    title: "Product Owner & Technical Lead",
    company: "JJ Apartments (Independent Client Project)",
    duration: "September 2025 - Present",
    description:
      "Led a 7-member Agile team, managing sprints and feature development for a property management application. Built a CI/CD pipeline and deployed Next.js, Spring Boot, and MySQL services across Vercel and Render. Delivered multiple new app features, strengthened authorization, and improved system reliability.",
    logo: "/assets/experience/jjapartments.jpg",
    tech: [
      "Next.js",
      "Spring Boot",
      "MySQL",
      "Vercel",
      "Render",
      "GitHub Actions (CI/CD)",
      "GitHub Projects",
      "Agile"
    ]
  },
  {
    id: 2,
    category: "Work/Internship",
    title: "Impact Jobs Intern",
    company: "Aboitiz Foundation Inc.",
    duration: "August 2025 - October 2025",
    description:
      "Coordinated beneficiary monitoring and labor market research for 275+ program graduates. Produced impact analysis and evaluator recommendations supporting workforce development initiatives. Designed brochures and handbooks used for program communication and outreach.",
    logo: "/assets/experience/aboitiz.jpg",
    tech: ["Research", "Data Analysis", "Program Evaluation", "Design"]
  },
  {
    id: 3,
    category: "Work/Internship",
    title: "Quality Assurance (QA) & Developer",
    company: "Sharelife Consumers Cooperative",
    duration: "May 2025 - August 2025",
    description:
      "Developed 100+ test cases and end-to-end tests using Cypress for DBMS admin application reliability. Fixed critical frontend bugs and implemented features using Next.js, TypeScript, and Supabase. Worked on client project via DLSU collaboration.",
    logo: "/assets/experience/sharelife.jpg",
    tech: ["Next.js", "TypeScript", "Supabase", "Cypress", "QA Testing"]
  },
  {
    id: 4,
    category: "Work/Internship",
    title: "Junior Blockchain Developer",
    company: "Bids n Buys",
    duration: "February 2025 - July 2025",
    description:
      "Promoted from intern to junior developer. Built serverless TypeScript APIs on AWS Lambda integrated with MongoDB and Akaunting for e-commerce invoicing. Managed Cardano node infrastructure via Docker Swarm and developed a Merkle-proof verification system to record audit data on-chain. Created a crypto wallet prototype in Angular with comprehensive Jest and Cypress testing.",
    logo: "/assets/experience/bidsnbuys.jpg",
    tech: [
      "Angular",
      "TypeScript",
      "AWS Lambda",
      "MongoDB",
      "Cardano",
      "Docker",
      "Haskell",
      "Jest",
      "Cypress",
      "Linux"
    ]
  },
  {
    id: 5,
    category: "Org Work",
    title: "Junior Officer",
    company: "La Salle Computer Society",
    duration: "October 2024 - Present",
    description:
      "Served on both the Finance Committee and Publicity Team. Responsible for handling financial documentation and submitting organizational requirements. Also contributed to the planning and creation of promotional materials to support various org events.",
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
      "Head organizer for 'Build Your Professional Profile,' the org's largest flagship event. Responsible for end-to-end event planning, including scheduling, team delegation, speaker coordination, and logistics, while ensuring professional delivery aligned with Microsoft's branding.",
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
      "Managed event documentation and logistical needs for org-wide activities. Authored detailed articles summarizing organizational events for the group's official newsletter ChronicLSS, showcasing both technical writing and organizational support capabilities.",
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
      className="min-h-screen flex items-start py-0"
    >
      <div className="container mx-auto w-full h-screen flex flex-col mt-2 2xl:justify-center">
        {/* Header */}
        <h2 className="h2 mb-2 text-3xl lg:text-4xl font-bold">
          My <span className="text-accent-light">Experience</span>
        </h2>

        {/* Tabs */}
        <Tabs
          defaultValue={categories[0]}
          className="w-full flex flex-col gap-2"
          onValueChange={setActiveTab}
        >
          {/* Tabs List */}
          <TabsList className="max-h-[80px] flex flex-wrap justify-center items-center gap-4 h-full mb-0">
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

          {/* Tabs Content with Scrollable Container */}
          <div className="h-[60vh] scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                {/* Custom pagination container */}
                <div className="swiper-custom-pagination flex justify-center items-center gap-4 mb-6"></div>

                <Swiper
                  modules={[Pagination, Navigation]}
                  pagination={{
                    clickable: true,
                    el: ".swiper-custom-pagination",
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
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next"
                  }}
                  spaceBetween={30}
                  slidesPerView={1}
                  className={`pb-4 ${
                    experience.filter((item) => item.category === category)
                      .length > 1
                      ? "cursor-grab active:cursor-grabbing"
                      : ""
                  }`}
                >
                  {experience
                    .filter((item) => item.category === category)
                    .map((item) => (
                      <SwiperSlide key={item.id}>
                        <div className="flex items-center justify-center bg-[#1c1c22] rounded-xl p-6 lg:p-7 shadow-lg border border-white/5 overflow-hidden">
                          <div className="flex flex-col lg:flex-row gap-6">
                            {/* Left Column - Logo */}
                            <div className="lg:w-1/4 lg:flex-col lg:items-center flex justify-center items-start">
                              <div className="w-28 h-28 lg:w-32 lg:h-32 relative rounded-xl overflow-hidden bg-white/5 p-3">
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
                              <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                                {item.title}
                              </h3>

                              <div className="flex flex-col sm:flex-row gap-3 mb-3 text-white/70 text-sm">
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

                              <div className="mb-4">
                                <p className="text-white/80 leading-relaxed text-sm lg:text-base">
                                  {item.description}
                                </p>
                              </div>

                              {item.tech && item.tech.length > 0 && (
                                <div>
                                  <div className="flex items-center gap-2 mb-2">
                                    <BsTools className="text-accent-light text-sm" />
                                    <h4 className="font-medium text-sm">
                                      Tech Stack / Skills
                                    </h4>
                                  </div>

                                  <div className="flex flex-wrap gap-2">
                                    {item.tech.map((tech, index) => (
                                      <span
                                        key={index}
                                        className="bg-accent/10 text-accent-light px-2.5 py-1 rounded-full text-xs lg:text-sm"
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
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .swiper-custom-pagination {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 0;
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
          opacity: 1;
        }

        .swiper-pagination-bullet-active {
          background: var(--accent-color-light, #86b97a);
          color: black;
          font-weight: 600;
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
