import React from "react";
import { motion } from "framer-motion";
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
          <p className="text-sm text-designColor tracking-[4px]">
            2025 - Present
          </p>
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>

        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">

          <ResumeCard
            title="Backend Developer"
            subTitle="E-Cell, Dr. Ambedkar Institute of Technology for Divyangjan"
            result="Sep 2025 - Jan 2026"
            des="Developed secure and scalable RESTful APIs using Node.js and Express with JWT-based authentication and role-based authorization. Designed and optimized MongoDB and SQL schemas with indexing and query optimization to improve performance. Architected backend deployment across multiple servers with load balancing using round-robin strategy to enhance system reliability and efficiency."
          />

          <ResumeCard
            title="Internshala Student Partner (ISP)"
            subTitle="Internshala | Selected Representative"
            result="Jan 2026 (1 Month)"
            des="Selected for the Internshala Student Partner program to represent and promote internship and training opportunities within the campus. Led outreach initiatives, increased student engagement, and contributed to strengthening the internship ecosystem at the institutional level."
          />


        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
