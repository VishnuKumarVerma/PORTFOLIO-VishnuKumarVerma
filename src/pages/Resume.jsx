import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import "../styles/Resume.css";

const Resume = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="resume" className="resume-container content" data-aos="fade-up" data-aos-duration="600">
      <div className="resume-background-text">Story</div>
      <h1>RESUME</h1>
      <p className="portfolio-description">
        My <span>Story</span>
      </p>

      <div className="resume-content">
        <div className="education-section">
          <h3>Education</h3>
          <div className="education-item">
            <h4>KIET Group Of Institutions (Ghaziabad)</h4>
            <div className="domain-time">
              <p className="sub-title">
                BTech in Computer Science and Engineering
              </p>
              <span className="dates">2022 - 2026</span>
            </div>
          </div>
        </div>

        <div className="experience-section">
          <h3>Experience</h3>
          <div className="experience-item">
            <div className="experience-list">
              {" "}
              <p>Ambuvians HealthCare Pvt. Ltd</p>
              <div className="domain-time">
                <p className="sub-title">Full-stack Web Developer</p>
                <span className="dates">March 2023 - Jan 2024</span>
              </div>
              <p>
                • Led cross-functional teams in developing functional web
                applications, enhancing healthcare service quality by 65%
                through improved user experience.
              </p>
            </div>
            <hr />
            <div className="experience-list">
              {" "}
              <p>Ambuvians HealthCare Pvt. Ltd</p>
              <div className="domain-time">
                <p className="sub-title">Coordinator & Tech Team Leader</p>
                <span className="dates">April 2023 - June 2023</span>
              </div>
              <p>
                • Led collaborative initiatives, ensuring seamless communication
                and project alignment, resulting in a 50% increase in project
                efficiency.
                <br />
                <br />• 10+ workshops and events, engaging over 500+
                participants, fostering learning at the intersection of
                technology and social impact.
              </p>
            </div>
            <hr />
            <div className="experience-list">
              {" "}
              <p>Stazi Technology Pvt. Ltd</p>
              <div className="domain-time">
                <p className="sub-title">React Developer</p>
                <span className="dates">Feb 2024 - April 2024</span>
              </div>
              <p>
                • Spearheaded the design and implementation of high-performance
                web applications, improving user interaction and workflow
                efficiency. <br />
                <br />• Optimized application performance using Redux and React
                Router, reducing load times by 40% and enhancing user
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
