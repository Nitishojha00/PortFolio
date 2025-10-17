import React from 'react'
import Title from '../layout/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

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
          title="SCHOOL MANAGEMENT SYSTEM"
          des="An all-inclusive system designed for academic institutions.
          This platform streamlines student enrollment, attendance tracking,
          grade management, and communication between staff, teachers, and students."
          src={projectOne}
          githubLink="https://github.com/daniel-ndeto/school-management-system.git" // Replace with actual link
          liveLink="https://school-management-system-hazel-eta.vercel.app" // Replace with actual link or remove if no live site
        />
        <ProjectsCard
          title="E-commerce Website"
          des="A fully responsive online store offering secure payment integration,
          efficient inventory management, and an intuitive user interface that delivers
           a seamless shopping experience for customers."
          src={projectTwo}
          githubLink="https://github.com/daniel-ndeto/tech-lab97-ecommerce-app.git" // Replace with actual link
          liveLink="https://your-ecommerce-live-url.com" // Replace with actual link
        />
        <ProjectsCard
          title="Chatting App"
          des="A real-time messaging application that supports one-to-one and group chats,
          media sharing, and push notifications. Built with modern web technologies to enable
          instantaneous communication."
          src={projectThree}
          githubLink="https://github.com/daniel-ndeto/AmigoChat-Realtime-Chat-Application.git" // Replace with actual link
          liveLink="https://amigochat.netlify.app/" // Replace with actual link or remove if no live site
        />
        <ProjectsCard
          title="TRAVEL BOOKING APP"
          des="An intuitive travel platform that simplifies the search and booking of flights,
          hotels, and tours. Emphasizing personalization, it offers users tailored travel
          recommendations and streamlined booking processes."
          src={projectThree} // Consider using a different image if available
          githubLink="https://github.com/yourusername/travel-booking-app" // Replace with actual link
          liveLink="https://your-travel-app-live-url.com" // Replace with actual link
        />
        <ProjectsCard
          title="COLLEGE MANAGEMENT SYSTEM"
          des="A robust portal tailored for higher education institutions.
          It facilitates course scheduling, faculty coordination, student information
          management, and streamlines day-to-day administrative tasks."
          src={projectOne} // Consider using a different image if available
          githubLink="https://github.com/yourusername/college-management-system" // Replace with actual link
          liveLink="#" // Replace with actual link or remove if no live site
        />
        <ProjectsCard
          title="LMS SYSTEM"
          des="A feature-rich Learning Management System (LMS) designed to enhance
           online education. It offers interactive course
           materials, real-time progress tracking, assessments, and comprehensive reporting
           for educators."
          src={projectTwo} // Consider using a different image if available
          githubLink="https://github.com/yourusername/lms-system" // Replace with actual link
          liveLink="https://your-lms-live-url.com" // Replace with actual link
        />
      </div>
    </section>
  );
}

export default Projects
