import React from "react";

const CancelledComponents = () => {
  return (
    <div className="border shadow rounded-2xl p-4">
      <p className="Space_Grotesk text-2xl font-bold w-[170px] text-center">
        Ecommerce Website (Shopsy)
      </p>
      <p className="inter text-gray-400 text-center">25th June 2025</p>
      <div className="flex flex-col">
        <button className="px-4 py-1 orderBUtton rounded transition-all duration-500  mb-2">
          Order Again
        </button>
      </div>
    </div>
  );
};

export default CancelledComponents;
