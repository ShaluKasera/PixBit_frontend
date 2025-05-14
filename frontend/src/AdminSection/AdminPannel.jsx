import React, { useState } from "react";
import Layout from "../components/Layout";
import Orders from "./Orders";
import ManageTeam from "./ManageTeam";
import AddNotifications from "./AddNotifications";
import ViewCustomer from "./ViewCustomer";
import Feedbacks from "./Feedbacks";
import AdminProfile from "./AdminProfile";

const AdminPannel = () => {
  const [selectedSection, setSelectedSection] = useState("AdminProfile");

  const navItems = [
    { label: "Profile", key: "AdminProfile" },
    { label: "Orders", key: "Orders" },
    { label: "Manage Team", key: "Manage Team" },
    { label: "View Customers", key: "View Customer" },
    { label: "Add Notifications", key: "Add Notifications" },
    { label: "Feedbacks", key: "Feedbacks" },
  ];

  const renderSection = () => {
    switch (selectedSection) {
      case "AdminProfile":
        return <AdminProfile />;
      case "Orders":
        return <Orders />;
      case "Manage Team":
        return <ManageTeam />;
      case "Add Notifications":
        return <AddNotifications />;
      case "View Customer":
        return <ViewCustomer />;
      case "Feedbacks":
        return <Feedbacks />;
      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className="flex flex-col md:flex-row w-full">
        {/* Sidebar - Admin Panel */}
        <div className="w-[50%] md:w-[20%] bgblue min-h-[80vh] p-4 border-r border-gray-300">
          <p className="Space_Grotesk mb-0 text-2xl font-semibold text-white">
            Shalu Kumari
          </p>
          <p className="Space_Grotesk text-lg font-medium mt-1 text-white">
            Founder
          </p>

          <hr className="my-4" />

          {/* Navigation Buttons using map */}
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => setSelectedSection(item.key)}
                className={`text-left p-2 mb-2 rounded hover:bg-gray-100 hover:text-black ${
                  selectedSection === item.key
                    ? "bg-gray-100 text-black"
                    : "text-white "
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="w-full md:w-[75%] p-4">{renderSection()}</div>
      </div>
    </Layout>
  );
};

export default AdminPannel;
