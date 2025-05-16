import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaBell, FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import Login from "../pages/auth/Login";
import PasswordReset from "../pages/auth/PasswordReset";
import Signup from "../pages/auth/Signup";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [isLoggedin, setIsLoggedIn] = useState(true);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  return (
    <div className="w-full h-[70px] flex items-center justify-between shadow px-6 md:px-12 bg-white relative z-50">
      <img src={logo} alt="logo" className="w-24" />

      <ul className="hidden md:flex gap-10 mt-3 items-center">
        <li><Link to="/" className="text-black no-underline link">Home</Link></li>
        <li><Link to="/services" className="text-black no-underline link">Services</Link></li>
        <li><Link to="/about" className="text-black no-underline link">About Us</Link></li>
        <li><Link to="/contact" className="text-black no-underline link">Contact Us</Link></li>
        {isLoggedin ? (
          <div className="relative">
            <FaUserCircle className="text-xl cursor-pointer link" onClick={() => setShowUserDropdown(!showUserDropdown)} />
            {showUserDropdown && (
              <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-50">
                <Link to="/userProfile" className="block px-4 py-2 text-black hover:bg-gray-100 no-underline" onClick={() => setShowUserDropdown(false)}>Profile</Link>
                <button className="w-full text-left flex px-4 py-2 text-black hover:bg-gray-100" onClick={() => { setIsLoggedIn(false); setShowUserDropdown(false); }}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <button onClick={() => setShowLogin(true)} className="ml-4 link">Login</button>
        )}
        <FaBell className="text-xl cursor-pointer" />
      </ul>

      <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {menuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white shadow-md flex flex-col items-left gap-3 py-4 md:hidden">
          <Link to="/" className="text-black no-underline ms-4 link" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/services" className="text-black no-underline ms-4 link" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/about" className="text-black no-underline ms-4 link" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/contact" className="text-black no-underline ms-4 link" onClick={() => setMenuOpen(false)}>Contact Us</Link>
          {!isLoggedin && (
            <button onClick={() => setShowLogin(true)} className="text-left ms-4 link">Login</button>
          )}
          <FaBell className="text-xl ms-4" />
        </div>
      )}

      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          onForgot={() => {
            setShowLogin(false);
            setShowForgot(true);
          }}
          onSignup={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
        />
      )}
      {showForgot && <PasswordReset onClose={() => setShowForgot(false)} />}
      {showSignup && <Signup onClose={() => setShowSignup(false)} />}
    </div>
  );
};

export default Header;
