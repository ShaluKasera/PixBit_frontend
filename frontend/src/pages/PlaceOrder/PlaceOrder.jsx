import React, { useState } from "react";
import Layout from "../../components/Layout";
import BasicDetails from "./BasicDetails";
import WebstiteType from "./WebstiteType";
import WebstiteRequirements from "./WebsiteRequirement";
import DesignPreference from "./DesignPreference";
import Content_Assets from "./Content_Assets";
import Budget_Timeline from "./Budget_Timeline";

const steps = [
  "Basic Details",
  "Website Type",
  "Website Requirement",
  "Design Preference",
  "Content and Assets",
  "Budget & Time Line",
  "Payment",
];

const PlacedOrder = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);

  const handleStepCompletion = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handleStepPrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const renderStepComponent = () => {
    const commonProps = {
      onComplete: handleStepCompletion,
      onPrevious: handleStepPrevious,
    };

    switch (currentStep) {
      case 0:
        return <BasicDetails {...commonProps} />;
      case 1:
        return <WebstiteType {...commonProps} />;
      case 2:
        return <WebstiteRequirements {...commonProps} />;
      case 3:
        return <DesignPreference {...commonProps} />;
      case 4:
        return <Content_Assets {...commonProps} />;
      case 5:
        return <Budget_Timeline {...commonProps} />;
      case 6:
        return <p className="text-center">Payment Page Coming Soon</p>;
      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className="py-3 px-4 sm:px-6 md:px-14">
        <p className="Space_Grotesk text-xl sm:text-2xl md:text-3xl font-semibold text-center">
          Place Order
        </p>

        {/* Stepper */}
        <div className="flex justify-center items-center mt-8 relative">
          <div className="absolute top-2 w-full h-[2px] bg-gray-300 z-0" />

          <div className="flex justify-between w-full max-w-5xl z-10 px-1 sm:px-6">
            {steps.map((label, index) => (
              <div
                className="flex flex-col items-center text-center w-full"
                key={index}
              >
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mb-1 text-xs font-semibold
                    ${
                      index === currentStep
                        ? "bg-blue-500 border-blue-500 text-white"
                        : completedSteps.includes(index)
                        ? "bg-blue-500 border-blue-500 text-white"
                        : "bg-white border-gray-400 text-gray-400"
                    }`}
                >
                  {completedSteps.includes(index) ? "✔" : index + 1}
                </div>
                <p className="text-[9px] sm:text-xs leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Current Step Form */}
        <div className="mt-8 lg:px-[450px] md:px-56">{renderStepComponent()}</div>
      </div>
    </Layout>
  );
};

export default PlacedOrder;
