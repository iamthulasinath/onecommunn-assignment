import {useState} from "react";
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
      <div className="relative min-h-[calc(100vh-160px)] bg-gray-100 flex items-center">
        <div className="absolute top-0 left-0 w-full">
          <Navbar
            setActivePage={setActivePage}
            activePage={activePage}
            onNavigate={scrollToSection}
          />
        </div>

        <div className="w-full max-w-7xl mx-auto px-6 flex flex-wrap items-center mt-10">
          <div className="w-full lg:w-1/2 pr-8">
            <div className="text-[#f97316] font-semibold mb-4">
              ■ GREAT EXPERIENCE IN BUILDING
            </div>
            <h1 className="text-5xl font-bold text-[#0B1523] mb-6">
              You Dream,
              <br />
              We'll Make It Real
            </h1>
            <p className="text-gray-600 mb-8 max-w-lg">
              All types of work – from designing and laying the foundation to
              finishing and commissioning. Tight deadlines, reasonable costs.
            </p>
            <button className="bg-[#0B1523] text-white px-8 py-3 square hover:bg-[#1a2b3c] transition-colors">
              Contact us
            </button>
          </div>

          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <img
              src="https://res.cloudinary.com/dl4mtiiec/image/upload/v1736319548/a3379495628d8928a76b32ae47d02734_ir4na9.png"
              alt="Construction Worker"
            />
          </div>
        </div>

        <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 shadow-lg hover:bg-gray-100">
          <ChevronLeft size={24} className="text-gray-800" />
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#CF6F11] p-3 hover:bg-[#b25d0e]">
          <ChevronRight size={24} className="text-white" />
        </button>
      </div>
    </>
  );
};

export default Hero;
