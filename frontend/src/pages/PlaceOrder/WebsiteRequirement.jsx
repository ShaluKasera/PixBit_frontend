import React, { useState, useRef, useEffect } from "react";
import {
  FaArrowRight,
  FaArrowLeft,
  FaChevronDown,
  FaTimes,
} from "react-icons/fa";

const allPages = [
  "Home",
  "About Us",
  "Service",
  "Product",
  "Portfolio",
  "Blog",
  "Testimonials",
  "FAQs",
  "Contact Us",
  "Career",
  "Custom Page",
];

const functionalRequirements = [
  "User Registration/Login System",
  "Admin Panel",
  "Payment Gateway Integration",
  "E-commerce (Product Management, Cart, Checkout)",
  "Contact Form",
  "Booking System",
  "Blog Management System",
  "Newsletter Signup (Email Subscription)",
  "SEO Optimization",
  "Chatbot/Live Chat",
  "File Upload Option (for users)",
  "Multilingual Website (multiple languages)",
  "Push Notifications",
  "API Integrations (like Google Maps, WhatsApp)",
  "Other Custom Functionality (text input)",
];

const WebsiteRequirements = ({ onComplete, onPrevious }) => {
  // Pages Needed state
  const [selectedPages, setSelectedPages] = useState([]);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const [showCustomPageInput, setShowCustomPageInput] = useState(false);
  const [customPageInput, setCustomPageInput] = useState("");
  const pagesDropdownRef = useRef(null);

  // Functional Requirements state
  const [selectedFunctions, setSelectedFunctions] = useState([]);
  const [isFuncDropdownOpen, setIsFuncDropdownOpen] = useState(false);
  const [showCustomFuncInput, setShowCustomFuncInput] = useState(false);
  const [customFuncInput, setCustomFuncInput] = useState("");
  const funcDropdownRef = useRef(null);

  // Other Details state
  const [otherDetails, setOtherDetails] = useState("");

  // Toggle Pages dropdown
  const togglePagesDropdown = () => {
    setIsPagesDropdownOpen((prev) => !prev);
  };

  // Toggle Functional Requirements dropdown
  const toggleFuncDropdown = () => {
    setIsFuncDropdownOpen((prev) => !prev);
  };

  // Pages toggle
  const togglePage = (page) => {
    if (page === "Custom Page") {
      setIsPagesDropdownOpen(false);
      setShowCustomPageInput(true);
      return;
    }

    setSelectedPages((prev) =>
      prev.includes(page) ? prev.filter((p) => p !== page) : [...prev, page]
    );
  };

  // Add custom page
  const addCustomPage = () => {
    const trimmed = customPageInput.trim();
    if (trimmed && !selectedPages.includes(trimmed)) {
      setSelectedPages((prev) => [...prev, trimmed]);
    }
    setCustomPageInput("");
    setShowCustomPageInput(false);
  };

  // Remove page tag
  const removePage = (page) => {
    setSelectedPages((prev) => prev.filter((p) => p !== page));
  };

  // Functional Requirements toggle
  const toggleFunction = (func) => {
    if (func === "Other Custom Functionality (text input)") {
      setIsFuncDropdownOpen(false);
      setShowCustomFuncInput(true);
      return;
    }

    setSelectedFunctions((prev) =>
      prev.includes(func) ? prev.filter((f) => f !== func) : [...prev, func]
    );
  };

  // Add custom functional requirement
  const addCustomFunc = () => {
    const trimmed = customFuncInput.trim();
    if (trimmed && !selectedFunctions.includes(trimmed)) {
      setSelectedFunctions((prev) => [...prev, trimmed]);
    }
    setCustomFuncInput("");
    setShowCustomFuncInput(false);
  };

  // Remove functional requirement tag
  const removeFunction = (func) => {
    setSelectedFunctions((prev) => prev.filter((f) => f !== func));
  };

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        pagesDropdownRef.current &&
        !pagesDropdownRef.current.contains(event.target)
      ) {
        setIsPagesDropdownOpen(false);
      }
      if (
        funcDropdownRef.current &&
        !funcDropdownRef.current.contains(event.target)
      ) {
        setIsFuncDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle form submit - call onComplete
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onComplete) {
      onComplete({
        selectedPages,
        selectedFunctions,
        otherDetails,
      });
    }
  };

  return (
    <div className="p-4 sm:p-6 border rounded-md text-sm md:text-base max-w-2xl mx-auto">
      <p className="Space_Grotesk text-lg sm:text-xl font-semibold text-center mb-4">
        Website Requirements
      </p>

      <form className="flex flex-col sm:px-5 gap-6" onSubmit={handleSubmit}>

        {/* Selected Pages Display */}
        <div>
          <label className="font-semibold block mb-1">Pages Needed</label>
          <div className="flex flex-wrap gap-2">
            {selectedPages.map((page) => (
              <div
                key={page}
                className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full flex items-center"
              >
                {page}
                <FaTimes
                  className="ml-2 cursor-pointer"
                  onClick={() => removePage(page)}
                />
              </div>
            ))}
          </div>
          {/* Custom Page Input */}
          {showCustomPageInput && (
            <div className="flex gap-2 mt-2">
              <input
                type="text"
                placeholder="Enter custom page name"
                className="border-2 border-gray-300 bg-gray-100 px-2 py-1 rounded w-full"
                value={customPageInput}
                onChange={(e) => setCustomPageInput(e.target.value)}
              />
              <button
                type="button"
                className="button px-3 py-1 rounded"
                onClick={addCustomPage}
                disabled={!customPageInput.trim()}
              >
                Add
              </button>
            </div>
          )}

          {/* Pages Dropdown */}
          <div className="relative mt-2" ref={pagesDropdownRef}>
            <div
              className="border-2 border-gray-300 bg-gray-100 px-2 py-2 rounded w-full cursor-pointer flex justify-between items-center"
              onClick={togglePagesDropdown}
              tabIndex={0}
            >
              <span className="text-gray-500">
                {selectedPages.length > 0
                  ? `${selectedPages.length} Page(s) Selected`
                  : "Select Pages Needed"}
              </span>
              <FaChevronDown className="text-gray-500" />
            </div>

            {isPagesDropdownOpen && (
              <div className="absolute z-10 w-full bg-white border mt-1 rounded shadow-lg max-h-60 overflow-y-auto">
                {allPages.map((page) => (
                  <div
                    key={page}
                    className={`px-3 py-2 hover:bg-gray-100 cursor-pointer ${
                      selectedPages.includes(page)
                        ? "bg-blue-100 font-semibold"
                        : ""
                    }`}
                    onClick={() => togglePage(page)}
                  >
                    {page}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Functional Requirements Section */}
        <div>
          <label className="font-semibold block mb-1">Functional Requirements</label>

          <div className="flex flex-wrap gap-2">
            {selectedFunctions.map((func) => (
              <div
                key={func}
                className="bg-green-100 text-green-800 px-2 py-1 rounded-full flex items-center"
              >
                {func}
                <FaTimes
                  className="ml-2 cursor-pointer"
                  onClick={() => removeFunction(func)}
                />
              </div>
            ))}
          </div>

          {/* Custom Functional Requirement Input */}
          {showCustomFuncInput && (
            <div className="flex gap-2 mt-2">
              <input
                type="text"
                placeholder="Enter custom functionality"
                className="border-2 border-gray-300 bg-gray-100 px-2 py-1 rounded w-full"
                value={customFuncInput}
                onChange={(e) => setCustomFuncInput(e.target.value)}
              />
              <button
                type="button"
                className="button px-3 py-1 rounded"
                onClick={addCustomFunc}
                disabled={!customFuncInput.trim()}
              >
                Add
              </button>
            </div>
          )}

          {/* Functional Requirements Dropdown */}
          <div className="relative mt-2" ref={funcDropdownRef}>
            <div
              className="border-2 border-gray-300 bg-gray-100 px-2 py-2 rounded w-full cursor-pointer flex justify-between items-center"
              onClick={toggleFuncDropdown}
              tabIndex={0}
            >
              <span className="text-gray-500">
                {selectedFunctions.length > 0
                  ? `${selectedFunctions.length} Functional Requirement(s) Selected`
                  : "Select Functional Requirements"}
              </span>
              <FaChevronDown className="text-gray-500" />
            </div>

            {isFuncDropdownOpen && (
              <div className="absolute z-10 w-full bg-white border mt-1 rounded shadow-lg max-h-60 overflow-y-auto">
                {functionalRequirements.map((func) => (
                  <div
                    key={func}
                    className={`px-3 py-2 hover:bg-gray-100 cursor-pointer ${
                      selectedFunctions.includes(func)
                        ? "bg-green-100 font-semibold"
                        : ""
                    }`}
                    onClick={() => toggleFunction(func)}
                  >
                    {func}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <textarea
          value={otherDetails}
          onChange={(e) => setOtherDetails(e.target.value)}
          placeholder="Other Details"
          className="border-2 border-gray-300 bg-gray-100 px-2 py-1 rounded w-full"
          required
        />

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={onPrevious}
            className="flex items-center button px-3 py-2 text-sm sm:text-base"
          >
            <FaArrowLeft className="me-2 mt-[2px]" />
            Previous
          </button>
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

export default WebsiteRequirements;
