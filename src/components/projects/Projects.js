import React from "react";
import Title from "../layout/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  astrology,
  talksy,
  codo,
  rps,
  employee,
  ise,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">

       <ProjectsCard
        title="Cod_Trakr"
        des="Built a scalable competitive coding tracker with OTP-based authentication and secure cookie-based authorization. Implemented backend and frontend caching with TTL-based expiration to optimize performance and prevent OTP abuse. Added request limiting and API-level validation to enhance security against spam and DDoS-style attacks. Integrated load balancing for better scalability, along with performance analytics and personal notes feature within a clean, user-friendly interface."
        src={codo}
        githubLink="https://github.com/Nitishojha00/COD_TRAKR"
        liveLink="https://codtrakr.nitishojha.in/"
      />



        <ProjectsCard
        title="Talksy – Real-Time Chat Application"
        des="Developed a scalable real-time chat application using the MERN stack and Socket.io. Implemented JWT-based authentication and authorization with secure session handling. Upgraded from native WebSockets to Socket.io for automatic fallback to long polling, ensuring reliable cross-browser connectivity. Added ping-pong heartbeat mechanism to maintain active connections and improve reliability. Supports unlimited group members with smooth real-time messaging and a clean, responsive UI."
        src={talksy}
        githubLink="https://github.com/Nitishojha00/Talksy"
        liveLink="https://talksy-chi.vercel.app/signin"
      />


       <ProjectsCard
        title="Leetcode Backend"
        des="Engineered a scalable LeetCode-like backend system with JWT-based authentication and role-based access control (separate Admin and User permissions). Designed secure REST APIs with rate limiting, API-level validation, and structured error handling. Implemented problem CRUD management, submission tracking, and real-time code execution via Judge0 integration. Integrated Gemini API for AI-powered hints and assistance. Optimized performance using caching strategies and performed comprehensive end-to-end backend testing to ensure reliability and security."
        src={projectOne}
      />




        <ProjectsCard
          title="Social Posting Application"
          des="A secure full-stack social platform with authentication, authorization, and image uploads using Multer. Implements complete CRUD functionality with production-ready deployment."
          src={projectTwo}
          githubLink="https://github.com/Nitishojha00/SocialPostingApp"
          liveLink="https://social-post-app-urni.onrender.com/user/login"
        />

        <ProjectsCard
          title="Employee Database Management System"
          des="A web-based employee management system built using HTML, CSS, and JavaScript. Enables efficient record management with dynamic UI updates, structured data handling, and strong front-end fundamentals."
          src={employee}
          githubLink="https://github.com/Nitishojha00/Employee-Database-Management-System"
          liveLink="https://employee-database-management-system-nu.vercel.app/"
        />

        <ProjectsCard
          title="Image Search Engine"
          des="A React-based application integrated with the Unsplash API to fetch high-quality images instantly. Demonstrates efficient API handling, optimized rendering, and clean UI design."
          src={ise}
          githubLink="https://github.com/Nitishojha00/Image-Search-Engine"
          liveLink="https://image-search-engine-sigma-sand.vercel.app/"
        />

      </div>
    </section>
  );
};

export default Projects;
