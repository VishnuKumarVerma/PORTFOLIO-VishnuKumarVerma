import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "../styles/Portfolio.css";

import carrental from "../assets/images/portfolio_images/carrental.png";
import cybervision from "../assets/images/portfolio_images/cybervision.png";
import ditech from "../assets/images/portfolio_images/ditech.png";
// import ecom from "../assets/images/portfolio_images/ecom.png";
import healthynow from "../assets/images/portfolio_images/healthynow.png";
import ihub from "../assets/images/portfolio_images/ihub.png";
// import pam from "../assets/images/portfolio_images/pam.png";
// import portanime from "../assets/images/portfolio_images/portanime.png";
import propertyseller from "../assets/images/portfolio_images/propertyseller.png";
import sugar from "../assets/images/portfolio_images/sugar.png";

import { FaArrowRight } from "react-icons/fa6";

const Portfolio = () => {
  const allProjects = [
    {
      title: "Car Rental",
      category: "Development, UI UX Design",
      description:
        "This is the project to showcase the various cars and its rentals",
      imgSrc: carrental,
      srcLink:
        "https://github.com/VishnuKumarVerma/Internship-Project/tree/main/First-internship-project",
    },
    {
      title: "Cyber Vision",
      category: " Development, UI UX Design",
      description:
        "Innovative platform to enhance the public security and its ethics",
      imgSrc: cybervision,
      srcLink: "https://example.com/cybervision",
    },
    // ... repeat for other projects, updating srcLink accordingly
    {
      title: "Ditech",
      category: "Development, UI UX Design",
      description: "The sleek and modern, multilayered and interactive website",
      imgSrc: ditech,
      srcLink: "https://di-tech.vercel.app/",
    },
    {
      title: "HealthNow",
      category: "Branding, UI UX Development",
      description:
        "The site to connect with professional doctors and hospitality",
      imgSrc: healthynow,
      srcLink: "https://healthy-now.vercel.app/",
    },
    // Add srcLink for each project
    {
      title: "iHub",
      category: "Development, UI UX Design",
      description: "A animated and unique site showcasing Apple products",
      imgSrc: ihub,
      srcLink: "https://my-apple-khaki.vercel.app/",
    },
    {
      title: "Property Seller",
      category: "Development, UI UX Design",
      description: "A platform to sell and buy properties",
      imgSrc: propertyseller,
      srcLink:
        "https://github.com/VishnuKumarVerma/Internship-Project/tree/main/Second-internship-project",
    },
    {
      title: "Sugar",
      category: "Development, UI UX Design",
      description: "A platform to sell and buy products",
      imgSrc: sugar,
      srcLink: "https://my-apple-khaki.vercel.app/",
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  const [visibleProjects, setVisibleProjects] = useState(6);
  const [isLoadMore, setIsLoadMore] = useState(true); // Track if "Load More" or "Show Less" is active

  // Handle the "Load More" or "Show Less" button click
  const toggleProjects = () => {
    if (isLoadMore) {
      setVisibleProjects(visibleProjects + 6);
    } else {
      setVisibleProjects(6);
    }
    setIsLoadMore(!isLoadMore);
  };

  return (
    <div>
      <div id="portfolio" className="portfolio-container content">
        <div className="portfolio-background-text">Portfolio</div>
        <h1 data-aos="fade-up">PORTFOLIO</h1>
        <p className="portfolio-description" data-aos="fade-down">
          My <span>Cases</span>
        </p>

        <nav className="navigation">
          <ul>
            <li data-aos="fade-up">
              <a href="#all">All</a>
            </li>
            <li data-aos="fade-up">
              <a href="#ui-ux-design">UI UX Design</a>
            </li>
            <li data-aos="fade-up">
              <a href="#photography">Photography</a>
            </li>
            <li data-aos="fade-up">
              <a href="#development">Development</a>
            </li>
            <li data-aos="fade-up">
              <a href="#branding">Branding</a>
            </li>
          </ul>
        </nav>

        <div className="projects-container">
          {allProjects.slice(0, visibleProjects).map((project, index) => (
            <div
              className="project-card"
              key={index}
              data-aos="zoom-in"
              data-aos-duration="700"
            >
              <img src={project.imgSrc} alt={project.title} />
              <h2>{project.title}</h2>
              <p className="category">{project.category}</p>
              <p>{project.description}</p>
              <a
                href={project.srcLink}
                target="_blank"
                rel="noopener noreferrer"
                className="see-project"
              >
                <div>See project</div>
                <div style={{ marginTop: 4 }}>
                  <FaArrowRight />
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="load-more-container">
          <button className="load-more-button" onClick={toggleProjects}>
            {isLoadMore ? "Load More" : "Show Less"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
