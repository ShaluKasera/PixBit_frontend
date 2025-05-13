import React from 'react';
import {
  FaPhoneAlt,
  FaMailBulk,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
  FaRegCopyright,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bgblue text-white py-2  px-4">
      <div className="max-w-4xl mx-auto py-2 flex flex-col md:flex-row justify-between">

        {/* Contact Us */}
        <div className="flex-1 mt-5 mx-auto">
          <p className="text-2xl font-bold  mb-4">Contact Us</p>
          <div className="flex items-start gap-2 mb-2">
            <FaPhoneAlt className="mt-2 text-xl  " />
            <div>
              <p className='text-xs'>+91 4334525453</p>
              <p className='text-xs'>+91 6200457091</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <FaMailBulk className="mt-1" />
            <p className='text-xs'>shalukumari93129@gmail.com</p>
          </div>
        </div>

        {/* Follow Us */}
        <div className="flex-1 mt-5 mb-24 mx-auto">
          <p className="text-2xl font-bold  mb-4">Follow Us</p>
          <div className="flex gap-4 text-xl">
            <FaLinkedin className="hover:text-blue-400 cursor-pointer" />
            <FaInstagram className="hover:text-pink-400 cursor-pointer" />
            <FaTwitter className="hover:text-sky-400 cursor-pointer" />
            <FaFacebookSquare className="hover:text-blue-500 cursor-pointer" />
          </div>
        </div>

        {/* Feedback Form */}
        <div className="flex-1 bg-white rounded-2xl mx-auto">
          <p className="text-2xl font-bold mb-3 text-center mt-3 text-black">Feedback</p>
          <form className="flex flex-col gap-3 px-4">
            <input
              type="text"
              placeholder="Name"
              className="p-1 rounded border  text-black"
            />
            <textarea
              placeholder="Message"
              rows={3}
              className="p-1 rounded border text-black"
            />
            <button
              type="submit"
              className="button mb-4 py-1"
            >
              Submit
            </button>
          </form>
        </div>
        
      </div>
      <hr/>
      <div >
        <p className='flex justify-center'> <FaRegCopyright className='mt-0.5 me-1'/>2025 PixBit-All rights are reserved</p>
      

      </div>
    </div>
  );
};

export default Footer;
