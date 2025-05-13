import React from "react";
import Layout from "../components/Layout";
import { CiEdit } from "react-icons/ci";
import { FaCamera } from "react-icons/fa";
import OrdersComponents from "../components/OrdersComponents";
import DeliveredComponents from "../components/DeliveredComponents";
import OrderedCancelledComponents from "../components/OrderedCancelledComponents";

const Order = () => {
  return (
    <Layout>
      <div className="py-3 px-14">
        <p className="Space_Grotesk text-3xl font-semibold text-center">
          My Order
        </p>

        {/* profile */}
        <div className="flex justify-end  gap-3">
          <div className="mt-6">
            <p className="Space_Grotesk mb-0 text-2xl font-semibold flex items-center">
              Shalu Kumari{" "}
              <button>
                <CiEdit className="text-blue-500 hover:text-blue-800 ms-2 mt-[2px]" />
              </button>
            </p>
            <p className="inter">shalukumari93129@gmail.com</p>
          </div>
          <div className="relative border-2 h-[100px] w-[100px] rounded-full">
            <button>
              <FaCamera className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-[-6px] text-blue-500 " />
            </button>
          </div>
        </div>

        {/* orders */}
        <div>
        <hr />
          <p className="border shadow py-1 rounded-3xl w-24 text-center">
            Orders
          </p>
          
          <div className="flex gap-10 px-11">
            <OrdersComponents />
            <OrdersComponents />
          </div>
          <hr />
        </div>




        {/* Delivered */}
        <div>
        <hr />
          <p className="border shadow py-1 rounded-3xl w-24 text-center">
          Delivered
          </p>
          
          <div className="flex gap-10 px-11">
            <DeliveredComponents />
            <DeliveredComponents />
           
          </div>
          <hr />
        </div>



        {/* Cancelled */}
        <div>
        <hr />
          <p className="border shadow py-1 rounded-3xl w-24 text-center">
          Cancelled
          </p>
          
          <div className="flex gap-10 px-11">
            <OrderedCancelledComponents />
            <OrderedCancelledComponents />
           
          </div>
          <hr />
        </div>
      </div>
    </Layout>
  );
};

export default Order;
