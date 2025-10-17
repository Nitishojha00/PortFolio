import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2025</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Intern Software Engineer"
            subTitle="Makueni County Government - (2025 - Present)"
            result="KENYA"
            des="The Makueni County Government is a devolved unit of government in Kenya, established under the Constitution of Kenya 2010."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="St. Martins Maikuu Secondary School - (2024)"
            result="KENYA"
            des="Interned at St. Martins Maikuu, gaining experience in classroom management, lesson planning,
            teaching strategies, and student engagement. Developed teaching strategies and contributed to curriculum development."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="KENYA"
            des="Worked on various front-end projects, enhancing user experience and interface design."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2024 - PRESENT{" "}
          </p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Secondary School Teacher"
            subTitle="St. Martins Maikuu Secondary School (2024 - Present)"
            result="KENYA"
            des="Interned at St. Martins Maikuu, gaining experience in classroom management, lesson planning,
            teaching strategies, and student engagement. Developed teaching strategies and contributed to curriculum development."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="FastNet Cyber Solutions (2023 - 2025)"
            result="NAIROBI"
            des="As a Web Developer and Instructor at FastNet Cyber Solutions, I contributed to the design and development of user-friendly web applications."
          />
          <ResumeCard
            title="Software Developer and Trainer"
            subTitle="Kingstar Secondary School (2025 - Present)"
            result="THIKA"
            des="As a Software Developer and Trainer at Kingstar Secondary School, I designed and developed software applications."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
