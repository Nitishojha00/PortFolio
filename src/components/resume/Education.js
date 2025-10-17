import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

// renamed the component to Education
// This component displays education and job experience in two sections: Education Quality and Job Experience.
const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - Current</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of Technology in Computer Science and Engineering"
            subTitle="Dr. Ambedkar Institute Of Technology For Divyangjan (2023 - Current)"
            result="7.40/10"
            des="I’m a third-year B.Tech student in Computer Science and Engineering who has been 
            consistently growing from my first year till now by strengthening my CS fundamentals 
            and expanding my technical skills. Starting with competitive programming, 
            I developed strong problem-solving and analytical abilities. Over time,
             I explored full-stack web development using the MERN stack, building interactive 
             and scalable web projects. Alongside development, I’m also learning AI and ML 
             concepts to stay updated with the latest technological trends. I aim to combine 
             a solid foundation in computer science with practical development and emerging technologies 
             to create efficient, intelligent, and future-ready solutions."
          />
          <ResumeCard
            title="Senior Secondary Education"
            subTitle="Saraswati Shishu Mandir , Pakkibag  (2020 - 2022)"
            result="7.62/10"
            des="At Saraswati Shishu Mandir, my senior -secondary education was not just about academics;
             it was about shaping character. The school’s strict discipline, daily prayers, 
             and value-based education taught me responsibility, focus, and perseverance. 
             Coupled with a strong academic curriculum and participation in extracurricular activities, 
             this environment helped me develop critical thinking, teamwork, and leadership skills. 
             The support of passionate teachers and a structured, 
            principled atmosphere prepared me to approach challenges with confidence and integrity"
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Saraswati Shishu Mandir , Pakkibag (2018 - 2020)"
            result="7.53/10"
            des="My secondary school education at Saraswati Shishu Mandir provided me with a solid foundation in various subjects,
            fostering critical thinking and analytical skills. The curriculum emphasized a well-rounded approach to learning,
            encouraging participation in extracurricular activities and community service. This holistic education experience not only prepared me for academic pursuits,
            but also instilled values of discipline, teamwork, and leadership. The supportive environment and dedicated faculty played a crucial role in shaping my character and aspirations."
          />
        </div>
      </div>
      {/* part Two */}

      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Intern secondary teacher"
            subTitle="St. Martins Maikuu"
            result="KENYA"
            des="Interned at St. Martins Maikuu, gaining experience in classroom management and lesson planning."
          />
           <ResumeCard
            title="Web Developer & Trainer"
            subTitle="PLP Academy (2024 - 2025)"
            result="KENYA"
            des="As a Web Developer & Trainer at PLP Academy, I honed my skills in web development and training methodologies."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="KENYA"
            des="As a Front-end Developer at Nike, I contributed to the design and development of user-friendly interfaces for their e-commerce platform."
          />
        </div> */}
      {/* </div> */}
    </motion.div>
  );
}

export default Education
