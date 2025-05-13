import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBell,
  FaBars,
  FaTimes,
  FaFacebookSquare,
  FaLinkedin,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setShowLogin(false);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setShowForgot(true);
    setShowLogin(false);
  };

  const handleSendOtp = () => {
    // Assume backend sends OTP here
    setOtpSent(true);
    setCountdown(30);
  };

  const handleVerifyOtp = () => {
    // Verify OTP with backend
    // For now, assume it's always valid
    setIsOtpVerified(true);
  };

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  return (
    <div className="w-full h-[70px] flex items-center justify-between shadow px-6 md:px-12 bg-white relative z-50">
      <img src={logo} alt="logo" className="w-24" />

      <ul className="hidden md:flex gap-10 mt-3 items-center">
        <li>
          <Link to="/" className="text-black no-underline link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/services" className="text-black no-underline link">
            Services
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-black no-underline link">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-black no-underline link">
            Contact Us
          </Link>
        </li>
        <button onClick={() => setShowLogin(true)} className="ml-4 link">
          Login
        </button>
        <FaBell className="text-xl cursor-pointer" />
      </ul>

      <div
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {menuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white shadow-md flex flex-col items-left gap-3 py-4 md:hidden">
          <Link
            to="/"
            className="text-black no-underline ms-4 link"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-black no-underline ms-4 link"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/about"
            className="text-black no-underline ms-4 link"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-black no-underline ms-4 link"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>

          <button
            onClick={() => setShowLogin(true)}
            className="text-left ms-4 link"
          >
            Login
          </button>
          <FaBell className="text-xl ms-4" />
        </div>
      )}

      {(showLogin || showForgot) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-sm relative">
            <button
              className="absolute top-2 right-2 text-gray-600 text-xl hover:text-black"
              onClick={() => {
                setShowLogin(false);
                setShowForgot(false);
              }}
            >
              &times;
            </button>

            {!showForgot ? (
              <>
                <h2 className="text-xl Space_Grotesk font-semibold mb-4 text-center">
                  Login
                </h2>
                <form onSubmit={handleLogin} className="flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    className="border p-2 rounded"
                  />
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="Password"
                      className="border p-2 rounded w-full"
                    />
                    <span
                      className="absolute top-2 right-3 text-gray-500 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                  <button type="submit" className="p-2 button">
                    Login
                  </button>
                  <Link
                    className="no-underline text-sm text-center cursor-pointer"
                    onClick={handleForgotPassword}
                  >
                    Forgot Password?
                  </Link>
                  <hr />
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
                  Not registered?{" "}
                  <span
                    onClick={() => {
                      setShowLogin(false);
                      navigate("/signup");
                    }}
                    className="text-blue-600 cursor-pointer hover:underline"
                  >
                    <Link to='/signup'>Register now
                    </Link>
                    
                  </span>
                </p>
              </>
            ) : (
              <>
                <h2 className="text-xl Space_Grotesk font-semibold mb-4 text-center">
                  Reset Password
                </h2>
                <form className="flex flex-col gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Registered Email"
                    required
                    className="border p-2 rounded"
                  />
                  {!otpSent && (
                    <button
                      type="button"
                      onClick={handleSendOtp}
                      className="p-2 button"
                    >
                      Send OTP
                    </button>
                  )}
                  {otpSent && (
                    <>
                      <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="Enter OTP"
                        required
                        className="border p-2 rounded"
                      />
                      <button
                        type="button"
                        onClick={handleVerifyOtp}
                        className="p-2 button"
                      >
                        Verify OTP
                      </button>
                      <p className="text-sm text-gray-500 text-center">
                        {countdown > 0 ? (
                          `Resend OTP in ${countdown}s`
                        ) : (
                          <span
                            className="text-blue-600 cursor-pointer"
                            onClick={handleSendOtp}
                          >
                            Resend OTP
                          </span>
                        )}
                      </p>
                    </>
                  )}
                  {isOtpVerified && (
                    <>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          placeholder="New Password"
                          required
                          className="border p-2 rounded w-full"
                        />
                        <span
                          className="absolute top-2 right-3 text-gray-500 cursor-pointer"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                      </div>
                      <button className="p-2 button">Update Password</button>
                    </>
                  )}
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
