import React from "react";
import frontSite from "../assets/img2.png";
import backSite from "../assets/img1.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-blue-200 to-slate-700 px-6 md:px-32 py-16 md:py-32">
      {/* Text Section */}
      <div className="text-slate-900 mb-10 md:mb-0 text-center md:text-left max-w-full md:max-w-md">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-4 font-[Space_Grotesk]">
          We Don’t Just Build Sites. We Build Hype
        </h2>
        <p className="text-sm sm:text-base mb-6 font-[Inter]">
          Running a business? A creator? Or just got that next-big-idea energy? We’ll help you launch it with a site that looks and feels like you
        </p>
        <div className="flex justify-center md:justify-start">
          <Link to='/placeOrder' className="button no-underline  px-4 py-2 flex items-center">
            Order Now <MdKeyboardDoubleArrowRight className="text-xl ms-1 " />
          </Link>
        </div>
      </div>

      {/* Overlapping Images */}
      <div className="relative w-[300px] h-[200px] sm:w-[350px] sm:h-[240px] md:w-[550px] md:h-[350px]">
        <img
          src={backSite}
          alt="Back site"
          className="absolute top-0 left-12 sm:left-20 w-[80%] rounded-lg shadow-xl z-10"
        />
        <img
          src={frontSite}
          alt="Front site"
          className="absolute top-8 sm:top-10 left-0 w-[80%] rounded-lg shadow-2xl z-20"
        />
      </div>
    </div>
  );
};

export default Hero;
