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
          <p className="text-sm text-designColor tracking-[4px]">2023 - current</p>
          <h2 className="text-4xl font-bold">Self Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Developer"
            subTitle="Rohit Negi Nexus"
            result="Successfully Completed"
            des="Completed all web development lectures and hands-on projects, gaining solid practical experience. Currently expanding skills into blockchain development."
          />

          <ResumeCard
          title="Competitive Programmer"
          subTitle="Self"
          result="Intermediate Level"
          des="Experienced in C++, STL, and OOP concepts with in-depth understanding. Able to solve 2–3 problems per contest on LeetCode and other competitive programming platforms."
        />

        </div>
      </div>
     
    </motion.div>
  );
};

export default Experience;

