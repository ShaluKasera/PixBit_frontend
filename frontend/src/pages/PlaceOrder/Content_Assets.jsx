import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Content_Assets = ({ onComplete, onPrevious }) => {
  const [provideContent, setProvideContent] = useState(""); // yes or no
  const [contentText, setContentText] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileChange = (e) => {
    setUploadedFiles(Array.from(e.target.files));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      provideContent,
      contentText,
      uploadedFiles,
    };

    if (onComplete) {
      onComplete(formData);
    }
  };

  return (
    <div className="p-4 sm:p-6 border rounded-md text-sm md:text-base max-w-md mx-auto">
      <p className="Space_Grotesk text-lg sm:text-xl font-semibold text-center mb-4">
        Content & Assets
      </p>

      <form className="flex flex-col sm:px-5 gap-4" onSubmit={handleSubmit}>
        {/* Will You Provide Content? */}
        <div>
          <select
            className="border-2 border-gray-300 bg-gray-100 px-2 py-1 rounded w-full"
            value={provideContent}
            onChange={(e) => setProvideContent(e.target.value)}
            required
          >
            <option value="" disabled>
              Will you provide content?
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Content Textarea */}
        {provideContent === "Yes" && (
          <div>
            <label className="font-medium block mb-1">Enter your content</label>
            <textarea
              value={contentText}
              onChange={(e) => setContentText(e.target.value)}
              className="border-2 border-gray-300 bg-gray-100 px-2 py-1 rounded w-full"
              rows={4}
              placeholder="Paste or write your content here..."
              required
            />
          </div>
        )}

        {/* Upload Multiple Files */}
        <div>
          <label className="font-medium block mb-1">Upload Images and files</label>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="border-2 border-gray-300 bg-gray-100 px-2 py-1 rounded w-full"
          />
          {uploadedFiles.length > 0 && (
            <ul className="mt-2 list-disc list-inside text-sm text-gray-700">
              {uploadedFiles.map((file, idx) => (
                <li key={idx}>{file.name}</li>
              ))}
            </ul>
          )}
        </div>

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

export default Content_Assets;
