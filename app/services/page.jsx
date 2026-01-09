"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Building fast, responsive, and scalable websites using modern frontend technologies with clean and maintainable code.",
  },
  {
    num: "02",
    title: "UI / UX Design",
    description:
      "Designing intuitive user interfaces and experiences focused on usability, accessibility, and visual consistency.",
  },
  {
    num: "03",
    title: "Optimization",
    description:
      "Optimizing user interfaces for speed, performance, and smooth interactions using modern frontend best practices.",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Improving on-page SEO through semantic HTML, performance optimization, and accessibility best practices.",
  },
];

const Services = () => {
  return (
    <section className="min-h-[calc(100vh - 170px)] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent transition-all duration-500">
                    {service.num}
                  </div>
                  <div className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </div>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
