import React, { useEffect } from "react";
import "../styles/Home.css";
import AOS from "aos";
import "aos/dist/aos.css";

import profile_image from "../assets/images/profile_images.png";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="home_container h-screen w-full">
      <div class="background-text">Web Developer</div>
      <div className="left content" data-aos="fade-right">
        <div>
          <p className="greet ">
            Hello, <span>I'm</span>{" "}
          </p>
          <p className="name font-bold">
            <span>VISHNU</span> KUMAR VERMA
          </p>
          <div className="para">
            <p className="">
              I'm a <span className="role">Full stack Web Developer</span>
            </p>
            <p className="">
              From Bihar, India, I am an experienced Full Stack Developer and
              Designer too. I love to talk to you
            </p>
          </div>

          <div className="home_links p-12 flex items-center">
            <a
              href="https://www.linkedin.com/in/vishnu-kumar-verma-217814220/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin className="linkedin mr-2" />
            </a>
            <a
              href="https://github.com/VishnuKumarVerma"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare className="github mr-5" size={28} />
            </a>
            <a
              href="http://discord.com/users/1359705135898693674/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord className="discord mr-1" size={31} />
            </a>
          </div>
          <div className="relative">
            <button className="cv_btn">
              <a
                href="https://drive.google.com/uc?export=download&id=1D68t21jR3W6GhjCxNCcQuLitwiZfoxkw"
                className="cv_btn"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                DOWNLOAD CV
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="right content" data-aos="zoom-in">
        <img src={profile_image} alt="Random Image" />
      </div>
    </div>
  );
};

export default Home;
