import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

// LeftBanner component with typewriter effect and media integration
const LeftBanner = () => {
    const [text] = useTypewriter({
      words: [
        "Professional Coder.",
        "Full Stack Developer.",
        "UI Designer.",
        "Web Developer.",
        "Software Engineer.",
        "React Developer.",
        "Frontend Developer.",
        "Backend Developer.",
        "Tech Enthusiast.",
        "Creative Coder.",
        "Digital Thinker.",
      ],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 50,
      delaySpeed: 2000,
    });

    // Render the component
    // This component displays a welcome message, a typewriter effect for the title,
    // a brief introduction, and a media component.
    return (
      <div className="w-full lgl:w-1/2 flex flex-col gap-20">
        <div className="flex flex-col gap-5">
          <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
          <h1 className="text-6xl font-bold text-white">
            Hi, I'm{" "}
            <span className="text-designColor capitalize">Nitish Ojha</span>
          </h1>
          <h2 className="text-4xl font-bold text-pink">
            a <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|*"
              cursorColor="#ff014f"
            />
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide">
  I believe in transforming ideas into experiences that resonate. By seamlessly integrating subtle animations and intuitive design,
  I create interfaces that captivate and guide users effortlessly. Every project is an opportunity to
  blend creativity with robust code,ensuring that digital experiences are as delightful as they are functional.
          </p>
        </div>
        <Media />
      </div>
    );
}

export default LeftBanner