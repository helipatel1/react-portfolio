import React from "react";
// import { HiArrowNarrowRight } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs"
import Profile from "../assets/Subject.png";
// import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          Experienced web developer skilled in building responsive and dynamic websites, dedicated to delivering user-centric digital solutions
          </p>
          <div>
            <a
              href="/resume.pdf"
              download={true}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-200"
            >
              Resume
              {/* <span className="group-hover:rotate-90 duration-300"> */}
                <BsFillPersonLinesFill className="ml-1" />
              {/* </span> */}
            </a>
          </div>
        </div>
        <div>
          <img
            src={Profile}
            alt="my profile"
            className="rounded-2xl mx-auto w-48 md:w-80"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;