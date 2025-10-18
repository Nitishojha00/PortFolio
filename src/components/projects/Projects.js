import React from 'react'
import Title from '../layout/Title'
import { projectOne, projectTwo, projectThree, astrology , rps , employee, ise } from "../../assets/index";
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
          title="Portfolio"
          des="A modern, responsive portfolio built with React and Tailwind CSS, showcasing projects, skills, and achievements.
           It features smooth navigation, interactive UI, and a clean professional design.."
          src={projectOne}
          githubLink="https://github.com/Nitishojha00/PortFolio" // Replace with actual link
          liveLink="#Home" // Replace with actual link or remove if no live site
        />
        <ProjectsCard
          title="Social Posting App"
          des="A full-featured social posting app with authentication and authorization, using cookies for secure login.
           It supports CRUD operations and
           lets users upload post images using Multer, ensuring secure and seamless content sharing."
          src={projectTwo} // Consider using a different image if available
          githubLink="https://github.com/Nitishojha00/SocialPostingApp" // Replace with actual link
          liveLink="https://social-post-app-urni.onrender.com/user/login" // Replace with actual link
        />
        <ProjectsCard
          title="Image Search Engine"
          des="A React-based image search engine using the Unsplash API to deliver high-quality, copyright-free images instantly.
           It highlights smooth UI, efficient API integration, and a seamless user experience."
          src={ise}
          githubLink="https://github.com/Nitishojha00/Image-Search-Engine" // Replace with actual link
          liveLink="https://image-search-engine-sigma-sand.vercel.app/" // Replace with actual link
        />
        <ProjectsCard
          title="EMPLOYEE DATABASE MANAGEMENT SYSTEM"
          des="A web-based project built with HTML, CSS, and JavaScript to strengthen my web development fundamentals.
           It enables users to add and manage employee records with a clean UI and dynamic, 
           interactive experience showcasing strong front-end skills."
          src={employee} // Consider using a different image if available
          githubLink="https://github.com/Nitishojha00/Employee-Database-Management-System" // Replace with actual link
          liveLink="https://employee-database-management-system-nu.vercel.app/" // Replace with actual link or remove if no live site
        />
        <ProjectsCard
          title="Astrology App"
          des="A web project that provides daily horoscopes and astrological insights, built with HTML, CSS, and JavaScript.
              It features a clean design and interactive user experience for easy navigation.."
          src={astrology}
          githubLink="https://github.com/Nitishojha00/Astrology_App" // Replace with actual link
          liveLink="https://astrologyapp-five.vercel.app/" // Replace with actual link or remove if no live site
        />
        <ProjectsCard
          title="Tic Tac Toe"
          des="A web project that expertly manages player turns and coordination,
           a task deceptively complex to handle. Despite its simple appearance, 
          it demonstrates strong logic implementation, problem-solving, and front-end development skills."
          src={rps} // Consider using a different image if available
          githubLink="https://github.com/Nitishojha00/Tic_Tac_Toe_Game" // Replace with actual link
          liveLink="https://tictactoegame-tan-two.vercel.app/" // Replace with actual link
        />
        
        
      </div>
    </section>
  );
}

export default Projects
