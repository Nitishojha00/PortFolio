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
          <p className="text-sm text-designColor tracking-[4px]">2022 - Current</p>
          <h2 className="text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {/* Each ResumeCard represents a specific achievement or project. */}
          <ResumeCard
          title="JEE Mains AIR 80437"
          subTitle="Demonstrated strong aptitude and problem-solving skills"
          result="Success"
          des="Secured an All India Rank of 80437 in JEE Mains, reflecting consistent preparation,
           strong analytical ability, and proficiency in physics, chemistry, and mathematics. 
           This achievement showcases dedication, focus, and a solid foundation in core engineering concepts."
        />

          <ResumeCard
            title="94.33 Percentile in Naukri Campus Young Turks"
            subTitle="Excelling in Analytical Skills"
            result="Success"
            des="Secured 94.33 percentile in the Naukri Campus Young Turks analytical test, 
            demonstrating strong problem-solving, logical reasoning, and quick decision-making skills.
             Achieved this without any prior preparation, reflecting natural aptitude and analytical ability."

          />
          <ResumeCard
            title="LeetCode 1719+"
            subTitle="40+ Contests | 600+ Problems Solved"
            result="Success"
            des="Actively participated in over 40 competitive coding contests on LeetCode, 
            consistently challenging myself with diverse algorithmic and data structure problems.
             Solved around 600 problems ranging from easy to advanced difficulty, achieving a maximum 
             rating of 11719. This rigorous practice has significantly enhanced my problem-solving, optimization, 
             and analytical skills, while improving coding efficiency, logical reasoning, and performance under 
             time constraints, demonstrating strong competitive programming expertise."

          />
          <ResumeCard
            title="CodeChef 1540+"
            subTitle="10+ Contests | 200+ Problems Solved"
            result="Success"
            des="Actively participated in over 10 competitive coding contests on CodeChef,
             tackling a wide range of algorithmic and data structure challenges.
              Solved more than 200 problems, ranging from easy to advanced difficulty,
               which strengthened my problem-solving, optimization, and analytical skills.
                This consistent practice has enhanced my coding efficiency, logical thinking,
                 and ability to perform under time constraints, reflecting strong competitive programming expertise."

            

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
