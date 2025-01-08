import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Navbar from "./Navbar";

const Hero = () => {
  const [activePage, setActivePage] = useState("home");

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setActivePage(sectionId.split("-")[0]);
  };

  return (
    <>
      <div className="relative min-h-[calc(100vh-160px)] bg-gray-100 flex items-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full">
          <Navbar
            setActivePage={setActivePage}
            activePage={activePage}
            onNavigate={scrollToSection}
          />
        </div>

      
        <div className="w-full max-w-7xl mx-auto px-4 py-20 md:px-6 lg:px-8 lg:py-2 flex flex-wrap items-center justify-between mt-10">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 pr-0 lg:pr-8 text-center lg:text-left">
            <div className="text-[#f97316] font-semibold mb-4 uppercase tracking-wide">
              ■ Great Experience in Building
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1523] mb-6">
              You Dream,
              <br />
              We'll Make It Real
            </h1>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              All types of work – from designing and laying the foundation to
              finishing and commissioning. Tight deadlines, reasonable costs.
            </p>
            <button className="bg-[#0B1523] text-white px-8 py-3 rounded hover:bg-[#1a2b3c] transition-colors">
              Contact Us
            </button>
          </div>


          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <img
              src="https://res.cloudinary.com/dl4mtiiec/image/upload/v1736319548/a3379495628d8928a76b32ae47d02734_ir4na9.png"
              alt="Construction Worker"
              className="w-full h-auto"
            />
          </div>
        </div>


        <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 shadow-lg hover:bg-gray-100 transition-all rounded-full">
          <ChevronLeft size={24} className="text-gray-800" />
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#CF6F11] p-3 hover:bg-[#b25d0e] transition-all rounded-full">
          <ChevronRight size={24} className="text-white" />
        </button>
      </div>
    </>
  );
};

export default Hero;
