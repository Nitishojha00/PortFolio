// imports of media icons
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiFigma,
  SiNextdotjs,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiLeetcode,
} from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      
      {/* ===== SOCIAL MEDIA ===== */}
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>

        <div className="flex gap-4">
          {/* Facebook */}
          <span className="bannerIcon">
            <a
              href="https://www.facebook.com/profile.php?id=100089983091610"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
          </span>

          {/* Twitter / X */}
          <span className="bannerIcon">
            <a
              href="https://x.com/nitishojha00"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </span>

          {/* LinkedIn */}
          <span className="bannerIcon">
            <a
              href="https://www.linkedin.com/in/nitishojha00/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </span>

          {/* GitHub */}
          <span className="bannerIcon">
            <a
              href="https://github.com/nitishojha00"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </span>

          {/* LeetCode ✅ */}
          <span className="bannerIcon">
            <a
              href="https://leetcode.com/__Nitish___Ojha/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLeetcode className="hover:text-yellow-400 transition-all duration-300" />
            </a>
          </span>
        </div>
      </div>

      {/* ===== BEST SKILLS ===== */}
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>

        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>

          <span className="bannerIcon">
            <SiNextdotjs />
          </span>

          <span className="bannerIcon">
            <SiTailwindcss />
          </span>

          <span className="bannerIcon">
            <SiFigma />
          </span>

          <span className="bannerIcon">
            <SiJavascript />
          </span>

          <span className="bannerIcon">
            <SiMongodb />
          </span>

          <span className="bannerIcon">
            <SiNodedotjs />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;