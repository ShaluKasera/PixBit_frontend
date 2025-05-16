import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const WebstiteType = ({ onComplete, onPrevious }) => {
  const [websiteType, setWebsiteType] = useState("");
  const [websiteGoal, setWebsiteGoal] = useState("");
  const [existingUrl, setExistingUrl] = useState("");
  const [hasDomain, setHasDomain] = useState("");
  const [domainPreference, setDomainPreference] = useState("");
  const [domainName, setDomainName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation example:
    if (!websiteType || !websiteGoal || !hasDomain) {
      alert("Please fill all required fields.");
      return;
    }

    if (websiteGoal === "Redesign" && !existingUrl) {
      alert("Please enter your existing GitHub repo URL.");
      return;
    }

    if (hasDomain === "Yes" && !domainName) {
      alert("Please enter your domain name.");
      return;
    }

    if (hasDomain === "No" && !domainPreference) {
      alert("Please select your domain preference.");
      return;
    }

    // If all good, proceed
    onComplete();
  };

  return (
    <div className="p-4 sm:p-6 border rounded-md text-sm md:text-base">
      <p className="Space_Grotesk text-lg sm:text-xl font-semibold text-center mb-4">
        Website Type
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:px-5 gap-3">
        {/* Website Type */}
        <select
          value={websiteType}
          onChange={(e) => setWebsiteType(e.target.value)}
          className="border-2 border-gray-300 bg-gray-100 px-2 py-1 rounded w-full"
          required
        >
          <option value="" disabled>
            What type of website do you need?
          </option>
          <option value="Business Website">Business Website</option>
          <option value="E-commerce Store">E-commerce Store</option>
          <option value="Portfolio">Portfolio</option>
          <option value="Blog">Blog</option>
          <option value="Educational">Educational</option>
          <option value="Booking/Travel">Booking/Travel</option>
          <option value="Custom / Other">Custom / Other</option>
        </select>

        {/* Website Goal */}
        <select
          value={websiteGoal}
          onChange={(e) => setWebsiteGoal(e.target.value)}
          className="border-2 border-gray-300 bg-gray-100 px-2 py-1 rounded w-full"
          required
        >
          <option value="" disabled>
            Do you want a new website or redesign an existing one?
          </option>
          <option value="New Website">New Website</option>
          <option value="Redesign">Redesign</option>
        </select>

        {websiteGoal === "Redesign" && (
          <input
            type="url"
            placeholder="Enter your existing GitHub repo URL"
            className="border-2 border-gray-300 bg-gray-100 px-2 py-1 rounded w-full"
            value={existingUrl}
            onChange={(e) => setExistingUrl(e.target.value)}
            required
          />
        )}

        {/* Domain Ownership */}
        <select
          value={hasDomain}
          onChange={(e) => {
            setHasDomain(e.target.value);
            setDomainPreference("");
            setDomainName("");
          }}
          className="border-2 border-gray-300 bg-gray-100 px-2 py-1 rounded w-full"
          required
        >
          <option value="" disabled>
            Do you already own a domain name?
          </option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        {hasDomain === "Yes" && (
          <input
            type="text"
            placeholder="Enter your domain name (e.g. www.example.com)"
            className="border-2 border-gray-300 bg-gray-100 px-2 py-1 rounded w-full"
            value={domainName}
            onChange={(e) => setDomainName(e.target.value)}
            required
          />
        )}

        {hasDomain === "No" && (
          <select
            value={domainPreference}
            onChange={(e) => setDomainPreference(e.target.value)}
            className="border-2 border-gray-300 bg-gray-100 px-2 py-1 rounded w-full"
            required
          >
            <option value="" disabled>
              Do you want your own domain or should we provide one?
            </option>
            <option value="Own Domain">I want my own domain</option>
            <option value="Provided Domain">Please provide me a domain</option>
          </select>
        )}

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

export default WebstiteType;
