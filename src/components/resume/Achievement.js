import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

// This component displays achievements in two sections: Company Experience and Job Experience.
const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      {/* Company Experience Section */}
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p>
          <h2 className="text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {/* Each ResumeCard represents a specific achievement or project. */}
          <ResumeCard
            title="Digital Transformation Initiative"
            subTitle="Revitalized legacy systems with modern tech."
            result="Success"
            des="Pioneered a digital transformation strategy that modernized the company’s
             IT infrastructure. This initiative streamlined operations and significantly 
             improved system efficiency and reliability."
          />
          <ResumeCard
            title="Data-Driven Decision Making"
            subTitle="Implemented analytics for strategic insights."
            result="Success"
            des="Developed and integrated advanced analytics tools that provided actionable 
            insights, enabling data-driven decision-making across departments and enhancing 
            overall operational efficiency."
          />
          <ResumeCard
            title="Global Partnership Development"
            subTitle="Forged strategic alliances internationally."
            result="Success"
            des="Collaborated with global industry leaders to expand market reach, 
            foster innovation, and elevate the brand's reputation through key strategic
             partnerships."
          />
          <ResumeCard
            title="Innovation in Product Design"
            subTitle="Introduced cutting-edge product features."
            result="Success"
            des="Led the design and launch of innovative product features that 
            redefined user experiences, resulting in increased customer engagement 
            and a competitive edge in the market."
          />
        </div>
      </div>

      {/* Job Experience Section */}
      {/* <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Front-end Developer Role"
            subTitle="Crafted intuitive and responsive UI components."
            result="Success"
            des="Developed robust, responsive interfaces using modern technologies 
            like React. This role enhanced user experience and optimized overall 
            application performance."
          />
          <ResumeCard
            title="Back-end Engineering"
            subTitle="Enhanced server performance and scalability."
            result="Success"
            des="Engineered high-performance API solutions and optimized data management
             practices, ensuring scalable backend operations capable of handling increasing 
             user demands."
          />
          <ResumeCard
            title="Full-stack Development and Leadership"
            subTitle="Managed projects end-to-end with a collaborative approach."
            result="Success"
            des="Combined technical expertise with team leadership to manage full project
             lifecycles. Successfully delivered comprehensive solutions on time while
             consistently exceeding client expectations."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Achievement;
