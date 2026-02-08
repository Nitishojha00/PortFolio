import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col gap-10"
    >
      <div className="flex-1">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2023 - Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Education
          </h2>
        </div>

        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of Technology in Computer Science and Engineering"
            subTitle="Dr. Ambedkar Institute of Technology for Divyangjan"
            result="CGPA: 7.10 / 10"
            des="Pursuing B.Tech in Computer Science with a strong foundation in Data Structures, Algorithms, Operating Systems, DBMS, and Computer Networks. Actively applying concepts through full-stack (MERN) projects and competitive programming to build scalable and efficient solutions."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
