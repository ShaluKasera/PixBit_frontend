import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = ({ onClose, onForgot, onSignup }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-[90%] max-w-sm relative">
        <button className="absolute top-2 right-2 text-gray-600 text-xl hover:text-black" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-xl Space_Grotesk font-semibold mb-4 text-center">Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-3">
          <input type="email" required placeholder="Email" className="border p-2 rounded" />
          <div className="relative">
            <input type={showPassword ? "text" : "password"} required placeholder="Password" className="border p-2 rounded w-full" />
            <span className="absolute top-2 right-3 text-gray-500 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button type="submit" className="p-2 button">Login</button>
          <p onClick={onForgot} className="text-sm text-center mb-0 cursor-pointer text-blue-600 hover:underline">Forgot Password?</p>
          <div className="flex items-center ">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-500">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <button className="border py-2 rounded hover:shadow flex justify-center gap-3">
            <FcGoogle className="text-2xl" />
            Login with Google
          </button>
          <button className="border py-2 rounded hover:shadow flex justify-center gap-3">
            <FaFacebookSquare className="text-2xl text-blue-700" />
            Login with Facebook
          </button>
          <button className="border py-2 rounded hover:shadow flex justify-center gap-3">
            <FaLinkedin className="text-2xl text-blue-700" />
            Login with LinkedIn
          </button>
        </form>
        <p className="text-sm mt-3 text-center">
          Not registered? <span className="text-blue-600 cursor-pointer hover:underline" onClick={onSignup}>Register now</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
