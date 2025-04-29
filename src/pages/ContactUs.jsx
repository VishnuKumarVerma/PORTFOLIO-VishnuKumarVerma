import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";

import "../styles/ContactUs.css";
import { FaMapMarkerAlt, FaUser, FaEnvelope, FaPhone } from "react-icons/fa";

const ContactUs = () => {

  const formRef = useRef();

  useEffect(() => {
    AOS.init();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8xd6ggp",     // Replace with your EmailJS Service ID
        "template_v8zexni",    // Replace with your EmailJS Template ID
        formRef.current,
        "bWYjRnA2kC14MiE50"      // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error("Error:", error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  // const serviceId = "service_8xd6ggp";
  // const templateId = "template_v8zexni";
  // const publicKey = "bWYjRnA2kC14MiE50";

  // const data = {
  //   serviceId: serviceId,
  //   templateId: templateId,
  //   publicKey: publicKey,
  //   templateParams: {
  //     name: name,
  //     email: email,
  //     message: message,
  //   },
  // };

  // try {
  //   const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
  //   console.log(res);
  //   setName("");
  //   setEmail("");
  //   setMessage("");
  // } catch (error) {
  //   console.log(error);
  // }

  return (
    <div id="contact"
      className="contact-container content"
      data-aos="fade-up"
      data-aos-duration="600"
    >
      <div className="contact-background-text">Contact Me</div>
      <h1>CONTACT ME</h1>
      <p className="contact-description">
        LET'S <span>Talk About Ideas</span>
      </p>
      <div className="contact-info-container">
        <div className="contact-info">
          <div className="info-item">
            <div className="contact-icons">
              <FaMapMarkerAlt size={30} />
            </div>
            <div className="info-text">
              <h3>Address</h3>
              <p>Bihar, India</p>
            </div>
          </div>
          <div className="info-item">
            <div className="contact-icons">
              <FaUser size={30} />
            </div>
            <div className="info-text">
              <h3>Freelance</h3>
              <p>Available any time</p>
            </div>
          </div>
          <div className="info-item">
            <div className="contact-icons">
              <FaEnvelope size={30} />
            </div>
            <div className="info-text">
              <h3>Email</h3>
              <p>vishnukumarverma574@gmail.com</p>
            </div>
          </div>
          <div className="info-item">
            <div className="contact-icons">
              <FaPhone size={30} />
            </div>
            <div className="info-text">
              <h3>Phone</h3>
              <p>9113184954</p>
            </div>
          </div>
        </div>
        <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
          <div className="form-group">
            <label>Your Full Name *</label>
            <input type="text" name="user_name" required />
          </div>
          <div className="form-group">
            <label>Your Email Address *</label>
            <input type="email" name="user_email" required />
          </div>
          <div className="form-group">
            <label>Your Subject *</label>
            <input type="text" name="user_subject" required />
          </div>
          <div className="form-group">
            <label>Your Message *</label>
            <textarea name="message" required></textarea>
          </div>
          <div className="terms">
            <input type="checkbox" required />
            <label>Accept the terms and conditions.</label>
          </div>
          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
