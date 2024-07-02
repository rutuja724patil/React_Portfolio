import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.instagram.com/_rutupatil___/?utm_source=qr&igsh=MWtsYmxuMG9kcWdvNg%3D%3D" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/rutuja-patil711/" target="_blank" className="items">
            <FaLinkedin className="icons" />
          </a>
          <a href="https://github.com/rutuja724patil" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:patilrutujarajesh@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
