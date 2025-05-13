import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaMailBulk,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
  FaRegCopyright,
} from "react-icons/fa";

const Team = () => {
  return (
    <div className="bg-white rounded p-2 sm:p-4 md:p-6">
      {/* Image section */}
      <div className="bg-gray-400 w-full h-[150px] sm:h-[200px] mb-3"></div>

      {/* Name section */}
      <p className="text-center mt-3 text-xl sm:text-2xl md:text-3xl Space_Grotesk font-bold">
        Shalu Kumari
      </p>

      {/* Role section */}
      <p className="inter text-center px-4 sm:px-6 text-sm sm:text-base md:text-lg">
        Co-founder and frontend lead
      </p>

      {/* Social icons */}
      <div className="flex justify-center gap-3 text-lg sm:text-xl md:text-2xl">
        <FaLinkedin className="text-blue-600 hover:text-blue-400 cursor-pointer" />
        <FaInstagram className="text-pink-600 hover:text-pink-400 cursor-pointer" />
        <FaTwitter className="text-blue-400 hover:text-sky-400 cursor-pointer" />
        <FaFacebookSquare className="text-blue-600 hover:text-blue-500 cursor-pointer" />
      </div>

      {/* Know more button */}
      <div className="flex justify-center mt-4">
        <Link to="/" className="no-underline button px-3 py-2 sm:px-4 sm:py-3 mb-3 text-sm sm:text-base md:text-lg">
          Know more
        </Link>
      </div>
    </div>
  );
};

export default Team;
