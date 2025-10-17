import React,{useState} from 'react'
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from '../layout/Title'
import { testimonialOne,testimonialTwo,testimonialThree, quote } from "../../assets";


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
      const [dotActive, setDocActive] = useState(0);
     const settings = {
       dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1,
       nextArrow:<SampleNextArrow />,
       prevArrow:<SamplePrevArrow />,
       beforeChange: (prev, next) => {
         setDocActive(next);
       },
       appendDots: (dots) => (
         <div
           style={{
             borderRadius: "10px",
             padding: "10px",
           }}
         >
           <ul
             style={{
               display: "flex",
               gap: "15px",
               justifyContent: "center",
               marginTop: "20px",
             }}
           >
             {" "}
             {dots}{" "}
           </ul>
         </div>
       ),
       customPaging: (i) => (
         <div
           style={
             i === dotActive
               ? {
                   width: "12px",
                   height: "12px",
                   color: "blue",
                   background: "#ff014f",
                   borderRadius: "50%",
                   cursor: "pointer",
                 }
               : {
                   width: "12px",
                   height: "12px",
                   color: "blue",
                   background: "gray",
                   borderRadius: "50%",
                   cursor: "pointer",
                 }
           }
         ></div>
       ),
     };
  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="WHAT CLIENTS SAY" des="Services" />
      </div>
      <div className="max-w-6xl mx-auto">
        {/* ================ Slider One ================== */}
        <Slider {...settings}>
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={testimonialTwo}
                  alt="testimonialOne"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    B.tech CSE
                  </p>
                  <h3 className="text-2xl font-bold">Sandeep Singh</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Web Devloper
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                {/* <img className="w-20 lgl:w-32" src={quote} alt="quote" /> */}
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Competetive Coding Guidance
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                   Working with Nitish has been an incredible experience. His guidance in competitive programming 
                   has not only improved my problem-solving skills but also boosted my confidence in tackling complex
                    challenges. What sets him apart is his ability to break down difficult concepts into simple, 
                    understandable steps. Beyond coding, he helped me navigate the overwhelming amount of content online
                     and recommended the best tutorials and resources from YouTube, saving me countless hours of confusion.
                      His patience, encouragement, and structured approach make learning both effective and enjoyable.
                    I highly recommend Nitish to anyone serious about improving their programming skills."
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ================ Slider Two ================== */}

          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={testimonialThree}
                  alt="testimonialTwo"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    B.tech  CSE
                  </p>
                  <h3 className="text-2xl font-bold">Amit Singh</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Frontend Devloper
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                {/* <img className="w-20 lgl:w-32" src={quote} alt="quote" /> */}
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        MERN Stack Development.
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        {/* via PLP Academy - Jan 4, 2024 - Dec 30, 2024 */}
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    "Nitish is a very skilled MERN stack developer who has consistently contributed to our projects 
                    with dedication and care. He has a strong understanding of JavaScript and has shown good expertise in
                     MongoDB, Express, React, and Node.js. The applications he has worked on are solid, user-friendly, and 
                     reliable. Beyond technical skills, Nitish is approachable, easy to work with, and always willing to help
                      the team solve problems. He also guides others and shares useful resources, which makes learning from him easier. 
                      I would definitely recommend 
                    Nitish for anyone looking for a dependable MERN stack developer who delivers quality work."
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ================ Slider Three ================== */}

          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={testimonialOne}
                  alt="testimonialTwo"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    B.tech Cyber Security
                  </p>
                  <h3 className="text-2xl font-bold"> Ambuj Shukla </h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Aspiring SDE 
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                {/* <img className="w-20 lgl:w-32" src={quote} alt="quote" /> */}
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        JEE Mains Preparation.
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        {/* via Linkedin - Aug 25, 2023 - Present */}
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    "As a brother, Nitish has guided me throughout my life and has been a constant source of support. 
                    His guidance was especially invaluable while preparing for JEE Mains, where he helped me understand 
                    difficult concepts with ease and clarity. He has a natural talent for breaking down complex topics 
                    into simple, understandable steps, which made learning enjoyable and effective. Thanks to his encouragement
                     and consistent support, I was able to stay focused, confident, and ultimately succeed in my preparation.
                     I’m truly grateful for his guidance and mentorship."
                  </p>
                </div>
              </div>
            </div>
          </div>

          
        </Slider>
        <div className="flex flex-col justify-center items-center text-center space-y-6">
        <Title title="" />
        <p>“Providing expert guidance and consultancy for Engineering, JEE preparation, and career counselling to help students succeed.”</p>
      </div>

      </div>
    </section>
  );
}

export default Testimonial
