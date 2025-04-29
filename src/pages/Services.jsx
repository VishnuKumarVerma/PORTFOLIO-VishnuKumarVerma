import React, { useEffect } from "react";
import "../styles/Services.css";
import AOS from "aos";
import "aos/dist/aos.css";

const servicesData = [
  {
    id: 1,
    topic: "Web Development",
    mainTopic: "Frontend & Backend",
    description:
      "We build dynamic websites with modern technologies like React, spring boot, and more.",
    buttonText: "Learn More 🔗  ",
  },
  {
    id: 2,
    topic: "3D Modelling",
    mainTopic: "Virtual Reality",
    description:
      "I create 3D models for virtual reality and interactive experiences.",
    buttonText: "Discover 🔗  ",
  },
  {
    id: 3,
    topic: "UI/UX Design",
    mainTopic: "User Interface Design",
    description:
      "We design intuitive and engaging user interfaces for a great user experience.",
    buttonText: "See Portfolio 🔗 ",
  },
  {
    id: 4,
    topic: "SEO Optimization",
    mainTopic: "SEO",
    description:
      "Optimizing websites to rank better on search engines and drive more traffic.",
    buttonText: "Get Started 🔗 ",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="services" className="services-container content">
      <div className="services-background-text">Services</div>
      <h1 className="main-heading">WHAT I DO</h1>
      <p className="services-description">
        My <span>Services</span>
      </p>
      <div className="cards-container">
        {servicesData.map((service) => (
          <div
            className="service-card"
            key={service.id}
            data-aos="zoom-in"
            data-aos-duration="700"
          >
            <div className="card-topic">{service.topic}</div>
            <div className="card-main">
              <h3>{service.mainTopic}</h3>
              <p>{service.description}</p>
            </div>
            <button className="card-button">{service.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
