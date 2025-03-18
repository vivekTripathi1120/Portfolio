import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../utils/styles";
import { services } from "../utils/constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../HOC";
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-[#BFC5B7] text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const vivekPng = "/src/assets/vivekPNG.png";
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About Me</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-6 ">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-[#BFC5B7] text-[17px] max-w-3xl leading-[30px]  "
        >
          I am a Java Backend Developer with expertise in Spring Boot and a
          strong foundation in C++ from my college days. Alongside backend
          development, I have experience in frontend development with React,
          allowing me to build seamless full-stack applications. I leverage my
          analytical skills for effective requirement gathering and optimizing
          system performance. Passionate about data analysis and scalable
          architecture, I continuously explore new technologies to enhance
          development efficiency.
        </motion.p>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-[#BFC5B7] text-[17px] max-w-3xl leading-[30px]  "
        >
          <img
            src={vivekPng}
            alt="Vivek Tripathi"
            // className="w-1/10 h-1/10 object-contain"
            className="object-contain bg-transparent "
          />
        </motion.p>
      </div>

      <div className="mt-20">
        {/* Heading Section (Full Width) */}
        <motion.div variants={textVariant()} className="w-full mb-6">
          <h5
            className={`${styles.sectionSubHeadText} block text-center md:text-left`}
          >
            My Expertise.
          </h5>
        </motion.div>

        {/* Services Section (Flex Wrap) */}
        <div className="flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about"); // About
