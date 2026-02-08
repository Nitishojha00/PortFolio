import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2022 - Present
          </p>
          <h2 className="text-4xl font-bold">Achievements</h2>
        </div>

        <div className="mt-14 w-full max-h-[600px] sm:max-h-[800px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 overflow-y-auto">

          <ResumeCard
            title="JEE Mains AIR 80437"
            subTitle="National Level Engineering Entrance Examination"
            result="Qualified"
            des="Secured All India Rank 80437, demonstrating strong analytical ability and a solid foundation in Physics, Chemistry, and Mathematics."
          />

          <ResumeCard
            title="LeetCode Rating 1719+"
            subTitle="40+ Contests | 600+ Problems Solved"
            result="Active"
            des="Solved 600+ problems across various difficulty levels and participated in 40+ contests, strengthening expertise in Data Structures and Algorithms."
          />

          <ResumeCard
            title="CodeChef Rating 1540+"
            subTitle="10+ Contests | 200+ Problems Solved"
            result="Active"
            des="Participated in 10+ rated contests and solved 200+ algorithmic problems, improving optimization and competitive programming skills."
          />

        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
