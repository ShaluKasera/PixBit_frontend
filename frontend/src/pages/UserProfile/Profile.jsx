import React, { useState } from "react";
import Layout from "../../components/Layout";
import { CiEdit } from "react-icons/ci";
import OrdersComponents from "./OrderComponents";
import DeliveredComponents from "./DeliveredComponents";
import OrderedCancelledComponents from "./CancelledComponents";

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("Shalu Kumari");
  const [email, setEmail] = useState("shalukumari93129@gmail.com");
  const [profilePic, setProfilePic] = useState(null);

  const handleProfilePicChange = (e) => {
    setProfilePic(e.target.files[0]);
  };

  const handleUpdate = () => {
    // Add update logic here (e.g., API call)
    console.log("Updated:", { name, email, profilePic });
    setIsModalOpen(false);
  };

  return (
    <Layout>
      <div className="py-3 px-6 md:px-14">
        <p className="Space_Grotesk text-2xl md:text-3xl font-semibold text-center">
          My Order
        </p>

        {/* profile */}
        <div className="flex flex-col-reverse sm:flex-row justify-end gap-3">
          <div className="mt-6">
            <p className="Space_Grotesk mb-0 text-xl md:text-2xl font-semibold flex items-center">
              {name}
              <button onClick={() => setIsModalOpen(true)}>
                <CiEdit className="text-blue-500 hover:text-blue-800 ms-2 mt-[2px]" />
              </button>
            </p>
            <p className="inter text-sm md:text-base">{email}</p>
          </div>
          <div className="border-2 h-[100px] w-[100px] rounded-full overflow-hidden bg-gray-200">
            {profilePic ? (
              <img
                src={URL.createObjectURL(profilePic)}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : null}
          </div>
        </div>

        {/* Orders */}
        <div>
          <hr />
          <p className="border shadow py-1 rounded-3xl w-24 text-center my-2">
            Orders
          </p>
          <div className="overflow-x-auto">
            <div className="flex gap-4 px-2 md:px-11 w-max md:w-full">
              <OrdersComponents />
              <OrdersComponents />
              <OrdersComponents />
              <OrdersComponents />
              <OrdersComponents />
              <OrdersComponents />
              <OrdersComponents />
              <OrdersComponents />
              {/* Add more OrdersComponents as needed */}
            </div>
          </div>
          <hr />
        </div>

        {/* Delivered */}
        <div>
          <hr />
          <p className="border shadow py-1 rounded-3xl w-24 text-center my-2">
            Delivered
          </p>
          <div className="overflow-x-auto">
            <div className="flex gap-4 px-2 md:px-11 w-max md:w-full">
              <DeliveredComponents />
              <DeliveredComponents />
              {/* Add more OrdersComponents as needed */}
            </div>
          </div>
          <hr />
        </div>

        {/* Cancelled */}

        <div>
          <hr />
          <p className="border shadow py-1 rounded-3xl w-24 text-center my-2">
            Cancelled
          </p>
          <div className="overflow-x-auto">
            <div className="flex gap-4 px-2 md:px-11 w-max md:w-full">
              <OrderedCancelledComponents />
              <OrderedCancelledComponents />
              {/* Add more OrdersComponents as needed */}
            </div>
          </div>
          <hr />
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[90%] max-w-md">
            <h2 className="text-lg Space_Grotesk  text-center font-bold mb-4">
              Edit Profile
            </h2>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Edit Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 border rounded"
              />
              <input
                type="email"
                placeholder="Edit Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 border rounded"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleProfilePicChange}
                className="p-2 border rounded"
              />
              <div className="flex justify-end gap-3 mt-3">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-1 bg-gray-300 rounded transition-all duration-500 hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdate}
                  className="px-4 py-1 button rounded "
                >
                  Change
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Profile;
