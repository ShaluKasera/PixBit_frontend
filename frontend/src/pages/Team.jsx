import React, { useRef } from "react";
import TeamSection from "../components/TeamSection";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Team = () => {
  const scrollRef = useRef(null);

  // Function to handle the scroll on arrow click
  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth / (window.innerWidth < 768 ? 1 : 3); // Adjust scroll behavior based on screen width

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="px-4 md:px-20 py-24 relative">
      <div className="bgteam1 p-3 rounded-2xl">
        <div className="p-6 bgteam2 rounded-2xl">
          <p className="text-center text-4xl font-bold Space_Grotesk mb-8">Our Team</p>

          {/* Arrows */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 px-2 md:px-0 flex justify-between w-full z-10">
            <button
              onClick={() => scroll("left")}
              className="bg-white p-2 rounded-full text-2xl text-gray-700 hover:text-black md:text-3xl shadow-lg"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              className="bg-white p-2 rounded-full text-2xl text-gray-700 hover:text-black md:text-3xl shadow-lg"
            >
              <FaArrowRight />
            </button>
          </div>

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
          >
            <div className="min-w-[280px] sm:min-w-[300px] md:min-w-[250px]">
              <TeamSection />
            </div>
            <div className="min-w-[280px] sm:min-w-[300px] md:min-w-[250px]">
              <TeamSection />
            </div>
            <div className="min-w-[280px] sm:min-w-[300px] md:min-w-[250px]">
              <TeamSection />
            </div>
            <div className="min-w-[280px] sm:min-w-[300px] md:min-w-[250px]">
              <TeamSection />
            </div>
            <div className="min-w-[280px] sm:min-w-[300px] md:min-w-[250px]">
              <TeamSection />
            </div>
            <div className="min-w-[280px] sm:min-w-[300px] md:min-w-[250px]">
              <TeamSection />
            </div>
            <div className="min-w-[280px] sm:min-w-[300px] md:min-w-[250px]">
              <TeamSection />
            </div>
            <div className="min-w-[280px] sm:min-w-[300px] md:min-w-[250px]">
              <TeamSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
