import React from "react";
import "../styles/Footer.css";

import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer-container">
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
          <FaDiscord className="discord mr-1" size={31}/>
        </a>
      </div>
      <div>
        <h2>
          ©2025 <span>PORTFOLIO</span>, ALL RIGHTS RESERVED
        </h2>
      </div>
      <div>
        <h2>
          DEVELOPED BY <span>VISHNU KUMAR VERMA</span>
        </h2>
      </div>
    </div>
  );
};

export default Footer;
