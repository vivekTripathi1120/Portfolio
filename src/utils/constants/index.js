import {
  backend,
  creator,
  web,
  javascript,
  github,
  html,
  css,
  reactjs,
  mysql,
  psql,
  nodejs,
  mongodb,
  git,
  docker,
  starbucks,
  carrent,
  jobit,
  tripguide,
  java,
  springboot,
  kafka,
} from "../../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "techStack",
    title: "Tech Stack"
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "Contact_id",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "SpringBoot",
    icon: springboot,
    // icon: '/src/assets/tech/springboot.png',
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "PostgreSQL",
    icon: psql,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "Kafka",
    icon: kafka,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Java Backend Developer",
    company_name: "MINDSPRINT",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2020 - Present",
    points: [
      "Developed and deployed RESTful APIs, ensuring efficient database interactions and optimized performance.",
      "Worked on 4 + tracks from development to production, integrating Azure Blob Storage, Kafka, and digital signatures.",
      "Created and scheduled automated jobs to run at predefined times, improving system efficiency.",
      "Optimized data fetching mechanisms, reducing latency and enhancing response times.",
      "Successfully contributed to production deployments, ensuring seamless functionality and system stability.",
    ],
  },
  {
    title: "Data Analyst | Training",
    company_name: "MedTourEasy",
    icon: starbucks,
    iconBg: "#383E56",
    date: "August 2023 - September 2023",
    points: [
      "Developed and deployed RESTful APIs, ensuring efficient database interactions and optimized performance.",
      "Worked on 4 + tracks from development to production, integrating Azure Blob Storage, Kafka, and digital signatures.",
      "Created and scheduled automated jobs to run at predefined times, improving system efficiency.",
      "Optimized data fetching mechanisms, reducing latency and enhancing response times.",
      "Successfully contributed to production deployments, ensuring seamless functionality and system stability.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Petopia",
    description:
      "An advanced pet owner application with a Java Spring Boot backend and React Native frontend, integrating Snowflake, containers, and DevOps for seamless pet care management. ",
    tags: [
      {
        name: "reactJs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "springboot",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "red-text-gradient",
      },
      {
        name: "JWT",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/vivekTripathi1120/PetOpia",
  },
  {
    name: "EduSphere ",
    description:
      "A modern educational platform offering interactive courses, student progress tracking, and online collaboration tools, enhancing the digital learning experience.",
    tags: [
      {
        name: "reactJs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "springboot",
        color: "pink-text-gradient",
      },
      {
        name: "MySql",
        color: "yellow-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/vivekTripathi1120/EduSphere",
  },
  {
    name: "Tinder Clone",
    description:
      "A dynamic full-stack matchmaking platform, enabling seamless user interactions, real-time swiping, and profile management for an engaging dating experience",
    tags: [
      {
        name: "reactJs",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "nodeJs",
        color: "pink-text-gradient",
      },
    ],
    image: '/src/assets/tinderClone.webp',
    source_code_link: "https://github.com/vivekTripathi1120/Tinder-Clone",
  },
   {
    name: "Songify",
    description:
      "Performed SQL-based data analysis and cleaning for a music streaming service, leveraging six relational tables to extract insights and understand user behavior.",
    tags: [
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/vivekTripathi1120/SQL_songify",
  },
];

export { services, technologies, experiences, testimonials, projects };