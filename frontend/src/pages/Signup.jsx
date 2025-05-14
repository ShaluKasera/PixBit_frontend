import React, { useState } from "react";

import Layout from "../components/Layout";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import bg from "../assets/signup.png";
const Signup = () => {
  const [hoverGoogle, setHoverGoogle] = useState(false);
  const [hoverFacebook, setHoverFacebook] = useState(false);
  const [hoverLinkedIn, setHoverLinkedIn] = useState(false);
  return (
    <Layout>
      <div
        className="h-screen flex justify-center items-center "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className=" w-[90%] sm:w-2/3 lg:w-4/12  bgblue opacity-95 rounded-2xl  p-10">
          <p className="text-center Space_Grotesk text-white text-4xl font-bold ">
            Signup
          </p>
          <form className=" flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="bg-blue-200 rounded px-4 py-2  text-gray-600"
            />
            <input
              type="email    "
              placeholder="Email"
              className="bg-blue-200 rounded px-4 py-2  text-gray-600"
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-blue-200 rounded px-4 py-2  text-gray-600"
            />
            <button
              type="submit"
              className="py-2 bg-gray-900 rounded hover:bg-white hover:text-black transition-all duration-500"
            >
              Signup
            </button>
            <hr />
            <button
              className="border bg-white text-black py-2 rounded flex justify-center gap-3 transition-all duration-300 w-full"
              style={{
                boxShadow: hoverGoogle
                  ? "0 0 25px rgba(255, 255, 255, 0.3)"
                  : "none",
              }}
              onMouseEnter={() => setHoverGoogle(true)}
              onMouseLeave={() => setHoverGoogle(false)}
            >
              <FcGoogle className="text-2xl" />
              Signup with Google
            </button>

            <button
              className="border py-2 bg-white text-black rounded flex justify-center gap-3 transition-all duration-300 w-full"
              style={{
                boxShadow: hoverFacebook
                  ? "0 0 25px rgba(255, 255, 255, 0.3)"
                  : "none",
              }}
              onMouseEnter={() => setHoverFacebook(true)}
              onMouseLeave={() => setHoverFacebook(false)}
            >
              <FaFacebookSquare className="text-2xl text-blue-700" />
              Signup with Facebook
            </button>

            <button
              className="border py-2 bg-white text-black rounded flex justify-center gap-3 transition-all duration-300 w-full"
              style={{
                boxShadow: hoverLinkedIn
                  ? "0 0 25px rgba(255, 255, 255, 0.3)"
                  : "none",
              }}
              onMouseEnter={() => setHoverLinkedIn(true)}
              onMouseLeave={() => setHoverLinkedIn(false)}
            >
              <FaLinkedin className="text-2xl text-blue-700" />
              Signup with LinkedIn
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
