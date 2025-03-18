
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../HOC";

const TechStack = () =>{
return (
     <div className="mt-20">
  {/* Heading Section */}
  <motion.div variants={textVariant()} className="w-full mb-6">
    <h3 className="text-3xl font-bold text-center md:text-left">
      Tech Stack & Tools
    </h3>
  </motion.div>

  {/* Tech Stack List */}
  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
    {[
      "React.js",
      "Java",
      "Spring Boot",
      "C++",
      "Python",
      "DBMS",
      "MySQL",
      "MongoDB",
      "Git",
      "GitHub",
      "Kafka",
      "Docker",
    ].map((tech) => (
      <span key={tech} className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md">
        {tech}
      </span>
    ))}
  </div>
</div>
)

}

export default SectionWrapper(TechStack, "techStack"); //TechStack;