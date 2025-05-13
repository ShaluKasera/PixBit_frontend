import React from "react";
import Layout from "../components/Layout";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const Signup = () => {
  return (
    <Layout>
      <div className="h-screen flex justify-center items-center">
        <div className=" w-[90%] sm:w-2/3 lg:w-4/12  bgblue opacity-75 rounded-2xl  p-10">
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
          <button className="border bg-white text-black py-2 rounded hover:shadow-2xl flex justify-center gap-3">
            <FcGoogle className="text-2xl" />
            Login with Google
          </button>
          <button className="border py-2 bg-white text-black rounded hover:shadow flex justify-center gap-3">
            <FaFacebookSquare className="text-2xl text-blue-700" />
            Login with Facebook
          </button>
          <button className="border py-2  bg-white text-black rounded hover:shadow flex justify-center gap-3">
            <FaLinkedin className="text-2xl text-blue-700" />
            Login with LinkedIn
          </button>
          </form>
          
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
