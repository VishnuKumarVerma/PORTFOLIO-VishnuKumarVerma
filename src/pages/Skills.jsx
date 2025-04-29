import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiC,
  SiReact,
  SiNodedotjs,
  SiWordpress,
  SiSpring,
  SiHibernate,
  SiJunit5,
  SiApachemaven,
  SiGradle,
  SiMongodb,
  SiMysql,
  SiOracle,
  SiTailwindcss,
  SiMui,
  SiReactrouter,
  SiRedux,
  SiD3Dotjs,
  SiFramer,
  SiEslint,
  SiGit,
  SiIntellijidea,
  SiAdobephotoshop,
  SiFigma,
  SiCanva,
} from "react-icons/si";

import { FaJava } from "react-icons/fa6";
import { BiLogoVisualStudio } from "react-icons/bi";

import "../styles/Skills.css";

const skillsData = [
  {
    skill: "JavaScript",
    level: 85,
    description:
      "A versatile scripting language used to create dynamic web content and applications.",
    icon: <SiJavascript />,
  },
  {
    skill: "HTML/CSS",
    level: 90,
    description:
      "The foundational technologies for web development, responsible for structuring and styling web pages.",
    icon: <SiHtml5 />,
  },
  {
    skill: "Java",
    level: 75,
    description:
      "A robust, object-oriented programming language commonly used for enterprise applications.",
    icon: <FaJava />,
  },
  {
    skill: "C",
    level: 70,
    description:
      "A foundational programming language that has influenced many modern languages and systems programming.",
    icon: <SiC />,
  },
  {
    skill: "React",
    level: 80,
    description:
      "A popular JavaScript library for building user interfaces, especially single-page applications.",
    icon: <SiReact />,
  },
  {
    skill: "Node.js",
    level: 75,
    description:
      "A runtime environment that allows JavaScript to be executed server-side for building scalable network applications.",
    icon: <SiNodedotjs />,
  },
  {
    skill: "WordPress",
    level: 90,
    description:
      "A widely-used content management system (CMS) for building dynamic websites and blogs.",
    icon: <SiWordpress />,
  },
  {
    skill: "REST API",
    level: 80,
    description:
      "An architectural style for designing networked applications, ensuring stateless communication protocols.",
    icon: <SiReactrouter />,
  },
  {
    skill: "Spring",
    level: 70,
    description:
      "A comprehensive framework for Java that simplifies the development of enterprise applications.",
    icon: <SiSpring />,
  },
  {
    skill: "Hibernate",
    level: 75,
    description:
      "A framework that simplifies database interactions and object-relational mapping in Java applications.",
    icon: <SiHibernate />,
  },
  {
    skill: "JUnit",
    level: 70,
    description:
      "A testing framework for Java that helps developers write and run repeatable tests.",
    icon: <SiJunit5 />,
  },
  {
    skill: "Maven",
    level: 65,
    description:
      "A build automation tool primarily used for Java projects, managing dependencies and project lifecycles.",
    icon: <SiApachemaven />,
  },
  {
    skill: "Gradle",
    level: 60,
    description:
      "A build automation tool that supports multiple languages, providing flexibility with build configurations.",
    icon: <SiGradle />,
  },
  {
    skill: "MongoDB",
    level: 75,
    description:
      "A NoSQL database that provides high performance, high availability, and easy scalability.",
    icon: <SiMongodb />,
  },
  {
    skill: "MySQL",
    level: 85,
    description:
      "An open-source relational database management system known for its reliability and ease of use.",
    icon: <SiMysql />,
  },
  {
    skill: "Oracle",
    level: 70,
    description:
      "A widely-used database known for its robust features and enterprise-level capabilities.",
    icon: <SiOracle />,
  },
  {
    skill: "Tailwind CSS",
    level: 70,
    description:
      "A utility-first CSS framework that allows for rapid UI development through pre-defined classes.",
    icon: <SiTailwindcss />,
  },
  {
    skill: "MUI",
    level: 75,
    description:
      "A popular React UI framework that implements the Material Design guidelines.",
    icon: <SiMui />,
  },
  {
    skill: "React Router",
    level: 80,
    description:
      "A standard library for routing in React applications, enabling navigation among views.",
    icon: <SiReactrouter />,
  },
  {
    skill: "Redux",
    level: 75,
    description:
      "A predictable state container for JavaScript apps, helping manage the state of applications.",
    icon: <SiRedux />,
  },
  {
    skill: "D3.js",
    level: 65,
    description:
      "A JavaScript library for producing dynamic and interactive data visualizations in web browsers.",
    icon: <SiD3Dotjs />,
  },
  {
    skill: "Framer Motion",
    level: 70,
    description:
      "A library for creating animations and transitions in React applications.",
    icon: <SiFramer />,
  },
  {
    skill: "ESLint",
    level: 75,
    description:
      "A static code analysis tool for identifying problematic patterns in JavaScript code.",
    icon: <SiEslint />,
  },
  {
    skill: "Git",
    level: 85,
    description:
      "A version control system that tracks changes in source code during software development.",
    icon: <SiGit />,
  },
  {
    skill: "Visual Studio",
    level: 80,
    description:
      "An integrated development environment (IDE) from Microsoft for developing applications on various platforms.",
    icon: <BiLogoVisualStudio />,
  },
  {
    skill: "IntelliJ",
    level: 75,
    description:
      "A powerful IDE for Java development, known for its smart code completion and analysis features.",
    icon: <SiIntellijidea />,
  },
  {
    skill: "Adobe Photoshop",
    level: 80,
    description:
      "A widely-used graphics editing software for creating and manipulating images.",
    icon: <SiAdobephotoshop />,
  },
  {
    skill: "Figma",
    level: 85,
    description:
      "A collaborative interface design tool allowing teams to create, test, and ship designs efficiently.",
    icon: <SiFigma />,
  },
  {
    skill: "Canva",
    level: 75,
    description:
      "An online design tool that simplifies the creation of graphics and presentations.",
    icon: <SiCanva />,
  },
];

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [showAll, setShowAll] = useState(false);
  const displayedSkills = showAll ? skillsData : skillsData.slice(0, 9);

  return (
    <div>
      <div id="skills" className="skills-background-text">Skills</div>
      <div className="skills-container">
        <h1 className="title" data-aos="fade-left" data-aos-delay="300">
          PROFESSIONAL SKILLS
        </h1>
        <h3 className="para" data-aos="fade-right" data-aos-delay="300">
          My <span>Talent</span>
        </h3>
        <div className="skills-grid">
          {displayedSkills.map(({ skill, level, description, icon }) => (
            <div
              className="skill-card"
              key={skill}
              data-aos="zoom-in"
              data-aos-duration="700"
            >
              <div className="skill-header">
                <div className="skill-title">
                  {icon} {skill}
                </div>
                <div className="skill-level">
                  {level}
                  <span>%</span>
                </div>
              </div>
              <p className="skill-description">{description}</p>
              <div className="skill-progress">
                <div className="progress-bar" style={{ width: `${level}%` }} />
              </div>
            </div>
          ))}
        </div>

        {skillsData.length > 9 && (
          <button
            className="show-more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Skills;
