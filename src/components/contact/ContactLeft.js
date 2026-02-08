import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] bg-gradient-to-r from-[#1e2024] to-[#23272b] p-6 rounded-lg shadow-shadowOne flex flex-col gap-6">
      
      <img
        className="w-full h-64 object-cover rounded-lg"
        src={contactImg}
        alt="contact"
      />

      <div>
        <h3 className="text-2xl font-bold text-white">Nitish Ojha</h3>
        <p className="text-gray-400">MERN Stack Developer</p>
        <p className="text-gray-400 mt-3">
          Building scalable web applications with clean architecture and strong backend integration.
        </p>
        <p className="text-gray-400 mt-3">
          Email: <span className="text-white">nitishojha00@gmail.com</span>
        </p>
      </div>

      <div className="flex gap-4">
        <a href="https://www.linkedin.com/in/nitishojha00" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
        <a href="https://github.com/nitishojha00" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://x.com/nitishojha00" target="_blank" rel="noreferrer"><FaTwitter /></a>
        <a href="https://www.instagram.com/nitishojha00/" target="_blank" rel="noreferrer"><FaInstagram /></a>
      </div>

    </div>
  );
};

export default ContactLeft;
