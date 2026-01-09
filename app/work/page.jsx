"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "A responsive agency landing page template with sections for services, portfolio highlights, about and contact information, created to help businesses present their offerings and works online.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }],
    image: "/assets/work/Leon.png",
    live: "https://mel34ryy.github.io/Leon/",
    github: "https://github.com/mel34ryy/Leon",
  },
  {
    num: "02",
    category: "frontend",
    title: "project 2",
    description:
      "A stylish personal portfolio template featuring multiple sections for about, skills, services, project showcase, blog, and contact, optimized for responsive use across devices.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/DevFolio.png",
    live: "https://mel34ryy.github.io/DevFolio/",
    github: "https://github.com/mel34ryy/DevFolio",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description:
      "A restaurant landing page showcasing meals, chef profiles, gallery visuals, and contact details — fully responsive and designed to adapt across screen sizes.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/Mealify.png",
    live: "https://mel34ryy.github.io/Mealify/",
    github: "https://github.com/mel34ryy/Mealify",
  },
  {
    num: "04",
    category: "frontend",
    title: "project 4",
    description:
      "A movie exploration platform that displays trending, top-rated, and genre-based films, offering a user-friendly interface and dynamic search experience.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "ReactJS" },
    ],
    image: "/assets/work/PopCorn.png",
    live: "https://popcorn-indol.vercel.app/",
    github: "https://github.com/mel34ryy/Popcorn",
  },
  {
    num: "05",
    category: "frontend",
    title: "project 5",
    description:
      "A React web application featuring interactive maps and city tracking functionality, designed to practice state management, routing, and dynamic UI updates.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "ReactJS" },
    ],
    image: "/assets/work/WorldWise.png",
    live: "",
    github: "https://github.com/mel34ryy/worldwise",
  },
  {
    num: "06",
    category: "frontend",
    title: "project 6",
    description:
      "A frontend-focused e-learning web app featuring structured pages, dynamic layout, and user-friendly navigation built with React and styled for responsiveness.",
    stack: [
      { name: "Html 5" },
      { name: "Bootstrap" },
      { name: "Javascript" },
      { name: "ReactJS" },
    ],
    image: "/assets/work/W3ey.png",
    live: "https://w3ey-seven.vercel.app/",
    github: "https://github.com/mel34ryy/w3ey",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[calc(100vh - 170px)] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-0">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} Project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide className="w-full" key={index}>
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt="project"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:gb-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all cursor-pointer rounded-full"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
