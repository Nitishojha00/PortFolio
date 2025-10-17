import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { contactImg } from "../../assets/index";

// This component is used to display the left side of the contact form
// It contains the contact image, name, designation, description, phone number,
const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />

      {/* This section contains the contact details */}
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Nitish Ojha</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          I am a dedicated MERN Stack Developer with a passion for crafting
          modern, user-centric web applications. By combining robust backend
          solutions with dynamic frontend designs, I strive to create digital
          experiences that are both innovative and reliable.
        </p>
        {/* <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+254 113 877 422</span>
        </p>*/}
        <p className="text-base text-gray-400 flex items-center gap-2"> 
          Email:{" "}
          <span className="text-lightText">nitishojha00@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a
              href="https://www.facebook.com/profile.php?id=100089983091610"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://x.com/nitishojha00"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://www.linkedin.com/in/nitishojha00"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://github.com/nitishojha00"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://www.instagram.com/nitishojha00/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft;

