import React from "react";
import { FaArrowRight } from "react-icons/fa";

const BasicDetails = ({ onComplete }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Optional: Add validation or form state here
    onComplete(); // Move to next step
  };

  return (
    <div className="p-4 sm:p-6 border rounded-md text-sm md:text-base">
      <p className="Space_Grotesk text-lg sm:text-xl font-semibold text-center mb-4">
        Basic Details
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:px-5 gap-3">
        <input
          type="text"
          placeholder="Full Name"
          className="border-2 border-gray-300 bg-gray-100 px-2 py-1 rounded w-full"
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="border-2 border-gray-300 bg-gray-100 px-2 py-1  rounded w-full"
          required
        />

        <input
          type="text"
          placeholder="Contact Number"
          className="border-2 border-gray-300 bg-gray-100 px-2 py-1  rounded w-full"
          required
        />

        <input
          type="text"
          placeholder="Brand/Company Name"
          className="border-2 border-gray-300 bg-gray-100 px-2 py-1  rounded w-full"
          required
        />

        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center button px-3 py-2 text-sm sm:text-base"
          >
            Next
            <FaArrowRight className="ms-2 mt-[1px]" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default BasicDetails;
