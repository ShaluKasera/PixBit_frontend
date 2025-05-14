import React, { useState } from "react";
import Select from "react-select";
import Layout from "../components/Layout";
import bg from "../assets/order_bg.png";
import { Link } from "react-router-dom";

const PlacedOrder = () => {
  const [selectedPages, setSelectedPages] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const pageOptions = [
    { value: "Home", label: "Home" },
    { value: "About Us", label: "About Us" },
    { value: "Services", label: "Services" },
    { value: "Products", label: "Products" },
    { value: "Portfolio", label: "Portfolio" },
    { value: "Testimonials", label: "Testimonials" },
    { value: "FAQs", label: "FAQs" },
    { value: "Contact Us", label: "Contact Us" },
    { value: "Careers", label: "Careers" },
    { value: "Custom Pages", label: "Custom Pages" },
  ];

  const featureOptions = [
    {
      value: "User Registration/Login System",
      label: "User Registration/Login System",
    },
    { value: "Admin Panel", label: "Admin Panel" },
    {
      value: "Payment Gateway Integration",
      label: "Payment Gateway Integration",
    },
    { value: "E-commerce Features", label: "E-commerce Features" },
    { value: "Contact Form", label: "Contact Form" },
    { value: "Booking System", label: "Booking System" },
    { value: "Blog Management", label: "Blog Management" },
    { value: "Newsletter Signup", label: "Newsletter Signup" },
    { value: "SEO Optimization", label: "SEO Optimization" },
    { value: "Live Chat", label: "Live Chat" },
    { value: "File Upload Option", label: "File Upload Option" },
    { value: "Multilingual Support", label: "Multilingual Support" },
    { value: "Push Notifications", label: "Push Notifications" },
    { value: "API Integrations", label: "API Integrations" },
    {
      value: "Other Custom Functionality",
      label: "Other Custom Functionality",
    },
  ];

  const handleFileChange = (e) => {
    setUploadedFiles(Array.from(e.target.files));
  };

  return (
    <Layout>
      <div
        className="py-6 px-4 md:px-10 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <p className="text-2xl md:text-3xl Space_Grotesk font-semibold text-center mb-6">
          Place your Order
        </p>

        <div className="rounded-xl px-2 sm:px-4 md:px-10">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl mx-auto">
            <input
              type="text"
              placeholder="Brand Name"
              className="p-3 rounded border bg-white text-sm sm:text-base"
            />
            <input
              type="text"
              placeholder="Color Preference"
              className="p-3 rounded border bg-white text-sm sm:text-base"
            />

            <select className="p-3 rounded border bg-white text-sm sm:text-base">
              <option disabled selected>
                Select Project Type
              </option>
              <option>Business Website</option>
              <option>Ecommerce Site</option>
              <option>Portfolio</option>
              <option>Blog</option>
              <option>Educational</option>
              <option>Booking/Travel</option>
              <option>Custom</option>
            </select>

            {/* Pages Needed - Responsive Multi Select */}
            <div className="bg-white rounded border p-1 w-full text-sm sm:text-base">
              <Select
                options={pageOptions}
                isMulti
                value={selectedPages}
                onChange={setSelectedPages}
                placeholder="Pages Needed"
                className="text-black"
                styles={{
                  control: (base) => ({
                    ...base,
                    minHeight: 44,
                  }),
                  menu: (base) => ({
                    ...base,
                    zIndex: 9999,
                  }),
                }}
              />
            </div>

            <input
              type="text"
              placeholder="Reference Site URL"
              className="p-3 rounded border bg-white text-sm sm:text-base"
            />
            <input
              type="text"
              placeholder="Typography Reference"
              className="p-3 rounded border bg-white text-sm sm:text-base"
            />

            <select className="p-3 rounded border bg-white text-sm sm:text-base">
              <option disabled selected>
                Admin Panel
              </option>
              <option>Yes</option>
              <option>No</option>
            </select>

            <select className="p-3 rounded border bg-white text-sm sm:text-base">
              <option disabled selected>
                Do you have a domain?
              </option>
              <option>Yes</option>
              <option>No</option>
            </select>

            <input
              type="text"
              placeholder="Budget"
              className="p-3 rounded border bg-white text-sm sm:text-base"
            />
            <input
              type="text"
              placeholder="Contact Number"
              className="p-3 rounded border bg-white text-sm sm:text-base"
            />
            <input
              type="text"
              placeholder="Previous Website (if any)"
              className="p-3 rounded border bg-white text-sm sm:text-base"
            />

            {/* Functional Requirements - Responsive Multi Select */}
            <div className="bg-white rounded border p-1 w-full text-sm sm:text-base">
              <Select
                options={featureOptions}
                isMulti
                value={selectedFeatures}
                onChange={setSelectedFeatures}
                placeholder="Functional Requirements"
                className="text-black"
                styles={{
                  control: (base) => ({
                    ...base,
                    minHeight: 44,
                  }),
                  menu: (base) => ({
                    ...base,
                    zIndex: 9999,
                  }),
                }}
              />
            </div>

            <input
              type="text"
              placeholder="If Other, specify here..."
              className="p-3 rounded border bg-white text-sm sm:text-base"
            />

            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="p-3 rounded border bg-white text-sm sm:text-base"
            />

            <textarea
              placeholder="Project Description"
              className="p-3 rounded border bg-white text-sm sm:text-base md:col-span-2"
              rows={4}
            />

            <select className="p-3 rounded border bg-white text-sm sm:text-base">
              <option disabled selected>
                Preferred Payment Option
              </option>
              <option>50% payment</option>
              <option>Full payment</option>
              <option>Pay after completion</option>
            </select>

            <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <Link to="/" className="text-blue-600 no-underline text-sm sm:text-base">
                Terms and Conditions
              </Link>
              <Link to='/payment'
                type="submit"
                className="button no-underline px-6 py-2 rounded hover:bg-blue-700 transition w-full sm:w-auto"
              >
                Place Order
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default PlacedOrder;
