import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const DesignPreference = ({ onComplete, onPrevious }) => {
  const [hasLogo, setHasLogo] = useState(""); // yes or no
  const [wantsLogoDesign, setWantsLogoDesign] = useState(""); // yes or no
  const [logoFile, setLogoFile] = useState(null);
  const [preferredColorScheme, setPreferredColorScheme] = useState("");
  const [designReference, setDesignReference] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare form data object
    const formData = {
      preferredColorScheme,
      designReference,
      hasLogo,
      wantsLogoDesign,
      logoFile,
    };

    if (onComplete) {
      onComplete(formData);
    }
  };

  return (
    <div className="p-4 sm:p-6 border rounded-md text-sm md:text-base max-w-md mx-auto">
      <p className="Space_Grotesk text-lg sm:text-xl font-semibold text-center mb-4">
        Design Preference
      </p>

      <form className="flex flex-col sm:px-5 gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Preferred color scheme"
          className="border-2 border-gray-300 bg-gray-100 px-2 py-1 rounded w-full"
          required
          value={preferredColorScheme}
          onChange={(e) => setPreferredColorScheme(e.target.value)}
        />

        <input
          type="text"
          placeholder="Design Reference (URL)"
          className="border-2 border-gray-300 bg-gray-100 px-2 py-1 rounded w-full"
          required
          value={designReference}
          onChange={(e) => setDesignReference(e.target.value)}
        />

        {/* Do you have a logo? */}
        <select
          className="border-2 border-gray-300 bg-gray-100 px-2 py-1 rounded w-full"
          value={hasLogo}
          onChange={(e) => {
            setHasLogo(e.target.value);
            setWantsLogoDesign(""); // reset wantsLogoDesign if hasLogo changes
            setLogoFile(null);
          }}
          required
        >
          <option value="" disabled>
            Do you have a logo?
          </option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        {/* If user has logo, show upload */}
        {hasLogo === "Yes" && (
          <div className="flex flex-col">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setLogoFile(e.target.files[0])}
              required
              className="border-2 border-gray-300 bg-gray-100 px-2 py-1 rounded w-full"
            />
            {logoFile && (
              <p className="mt-1 text-sm text-gray-700">
                Uploaded logo: {logoFile.name}
              </p>
            )}
          </div>
        )}

        {/* If user doesn't have logo, ask if they want a logo designed */}
        {hasLogo === "No" && (
          <select
            className="border-2 border-gray-300 bg-gray-100 px-2 py-1 rounded w-full"
            value={wantsLogoDesign}
            onChange={(e) => setWantsLogoDesign(e.target.value)}
            required
          >
            <option value="" disabled>
              Do you want us to design a logo?
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={() => onPrevious && onPrevious()}
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

export default DesignPreference;
