import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

import image1 from "../assets/project1.jpeg";
import image2 from "../assets/project2.jpeg";
import image3 from "../assets/project3.jpeg";
// import image4 from "../assets/project4.jpeg";
// import image5 from "../assets/project5.jpeg";
// import image6 from "../assets/project6.jpeg";
// import image7 from "../assets/project7.jpeg";
// import image8 from "../assets/project8.jpeg";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Award", href: "#award" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Om Pawar",
  info: "\"Full-stack developer and entrepreneur building impactful digital solutions\".",
};

export const ABOUT = {
  text1:
    "I create dynamic, responsive websites that blend creativity with efficiency",
  text2:
    "I'm Om Pawar, a Computer Science student, software engineer, and full-stack developer driven by a passion for building impactful technology solutions. With a strong foundation in Data Structures & Algorithms, Object-Oriented Programming, and modern web development, I enjoy transforming ideas into scalable, efficient, and user-centric applications. Constantly learning and exploring new technologies, I strive to combine problem-solving, innovation, and engineering excellence to create solutions that deliver real-world value.",
  text3:
    "I am the founder of Vyraine, a growing fragrance brand that has strengthened my skills in leadership, strategic thinking, and execution. From managing teams and leading events to building products from the ground up, I thrive on challenges that push me to grow. My goal is not just to develop software, but to create meaningful solutions, lead with purpose, and leave a lasting impact."
};

export const PROJECTS = [
  {
    title: "Hospital Management System",
    subtitle:
      "A full-stack management platform built with React, Node.js, MongoDB, Java, MySQL, PHP,JavaScript  .",
    image: image1,
  },
  {
    title: "Full-Stack Weather Application ",
    subtitle:
      "Developed responsive weather application with OpenWeatherMap API integration, geolocation services, and 7-day forecasts covering 50,000+ global locations.",
    image: image2,
  },
  {
    title: "Tomato- A food delivering website",
    subtitle: "A project management tool built with MongoDB, Express.js, React.Node.js.",
    image: image3,
  },
  // {
  //   title: "Personal Portfolio",
  //   subtitle:
  //     "A personal portfolio website designed with HTML, CSS, and JavaScript.",
  //   image: image4,
  // },
  // {
  //   title: "Weather Dashboard",
  //   subtitle:
  //     "A weather dashboard application built with Vue.js and Express.js.",
  //   image: image5,
  // },
  // {
  //   title: "Blog Platform",
  //   subtitle:
  //     "A blogging platform developed with Ruby on Rails and PostgreSQL.",
  //   image: image6,
  // },
  // {
  //   title: "Fitness Tracker",
  //   subtitle: "A fitness tracking app created using Flutter and Firebase.",
  //   image: image7,
  // },
  // {
  //   title: "Recipe Finder",
  //   subtitle: "A recipe finder application developed with Angular and Node.js.",
  //   image: image8,
  // },
];

export const SKILLS = [
  {
    icon: <TbBrandNextjs className="text-4xl lg:text-6xl text-white" />,
    name: "C++",
    experience: "1+ year",
  },
  {
    icon: <DiRedis className="text-4xl lg:text-6xl text-red-600" />,
    name: "OOPs",
    experience: "1+ year",
  },
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React",
    experience: "1+ years",
  },

  {
    icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
    name: "MongoDB",
    experience: "1+ years",
  },

  {
    icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
    name: "Node.js",
    experience: "1+ years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl lg:text-6xl text-sky-700" />,
    name: "SQL",
    experience: "1+ year",
  },
    {
    icon: <BiLogoPostgresql className="text-4xl lg:text-6xl text-sky-700" />,
    name: "JavaScript",
    experience: "1+ year",
  },
];

export const ACHIEVEMENT = {
  title: "International Hackaton - Tokyo",
  award: "Gold Medalist - 2024",
  description:
    "Winner of the 2024 Algo coding representing the University of Oxford. This achievement showcases exceptional problem-solving skills and dedication. The event provided a platform to innovate and collaborate with the brightest minds, resulting in a prestigious accolade.",
};

export const TESTIMONIALS = [
 {
    name: "Chakrapani G ", 
    title: "Founder, Wealth Generator", 
    quote:
      "Working with om has been an incredible experience. His design sensibilities and technical expertise are top-notch, making him a valuable asset to any project.", 
    image: user1,
  },
  // {
  //   name: "Michael Lee",
  //   title: "CTO, Creative Minds",
  //   quote:
  //     "Robert consistently delivers high-quality work, combining creativity and technical prowess. His ability to solve complex problems with elegant solutions is truly impressive.",
  //   image: user2,
  // },
  // {
  //   name: "Sophia Martinez",
  //   title: "Lead Developer, Digital Solutions",
  //   quote:
  //     "Robert's dedication to his craft is evident in every project he undertakes. His innovative approach and attention to detail set him apart as a leading designer and developer.",
  //   image: user3,
  // },
  // {
  //   name: "Daniel Thompson",
  //   title: "Project Manager, InnovateX",
  //   quote:
  //     "Robert's ability to understand client needs and translate them into beautiful, functional designs is remarkable. He is a true professional who always exceeds expectations.",
  //   image: user4,
  // },
];

export const SOCIAL_MEDIA_LINKS = [
  // {
  //   href: "https://x.com/",
  //   icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  // },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/craftedkid",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/omspawar2n707",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
