import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Budget_Timeline = ({ OnComplete, onPrevious }) => {
  const [timeline, setTimeline] = useState("");
  const [budget, setBudget] = useState("");
  const [paymentOption, setPaymentOption] = useState("");
  const [paymentVia, setPaymentVia] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Optional: Validate data or pass it to parent component here

    OnComplete(); // Go to next step
  };

  return (
    <div className="p-4 sm:p-6 border rounded-md text-sm md:text-base">
      <p className="Space_Grotesk text-lg sm:text-xl font-semibold text-center mb-4">
        Budget & Time Line
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:px-5 gap-3">
        {/* Estimated timeline */}
        <select
          value={timeline}
          onChange={(e) => setTimeline(e.target.value)}
          className="border-2 border-gray-300 bg-gray-100 px-2 py-1 rounded w-full"
          required
        >
          <option value="" disabled>
            Estimated timeline
          </option>
          <option value="ASAP">ASAP</option>
          <option value="2-4 Weeks">2–4 Weeks</option>
          <option value="Flexible">Flexible</option>
        </select>

        {/* Budget */}
        <select
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="border-2 border-gray-300 bg-gray-100 px-2 py-1 rounded w-full"
          required
        >
          <option value="" disabled>
            Budget
          </option>
          <option value="$200">$200</option>
          <option value="$200-$500">$200-$500</option>
          <option value="$500-$1000">$500-$1000</option>
          <option value="$1000+">$1000+</option>
        </select>

        {/* Payment Option */}
        <select
          value={paymentOption}
          onChange={(e) => setPaymentOption(e.target.value)}
          className="border-2 border-gray-300 bg-gray-100 px-2 py-1 rounded w-full"
          required
        >
          <option value="" disabled>
            Payment Option
          </option>
          <option value="50%_Down_payment">50% Down payment</option>
          <option value="75%_Down_payment">75% Down payment</option>
          <option value="Full_Payment">Full Payment</option>
        </select>

        {/* Payment Via */}
        <select
          value={paymentVia}
          onChange={(e) => setPaymentVia(e.target.value)}
          className="border-2 border-gray-300 bg-gray-100 px-2 py-1 rounded w-full"
          required
        >
          <option value="" disabled>
            Payment Via
          </option>
          <option value="Card">Card</option>
          <option value="UPI">UPI</option>
        </select>

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

export default Budget_Timeline;
