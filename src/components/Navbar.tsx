import React from "react";

const Navbar = ({ setActivePage, activePage, onNavigate }) => {
  return (
    <nav className="bg-white shadow-md flex justify-between items-center max-w-5xl mx-auto my-3 px-6 h-16">
      <div className="container mx-auto px-2 flex justify-between items-center h-12">
        <div className="flex items-center space-x-2">
          <img
            src="https://res.cloudinary.com/dl4mtiiec/image/upload/v1736319640/0f44fadc0e91371a9ead0677d80eb02f_yjsrpi.png"
            alt="Logo"
            style={{ width: "60px", height: "100px", margin: '0px'}}
            
          />
        </div>
        <div className="flex space-x-8">
          <button
            onClick={() => onNavigate("home-section")}
            className={`${
              activePage === "home" ? "text-[#f97316]" : "text-gray-800"
            } hover:text-[#f97316]`}
          >
            Home
          </button>
          <button
            onClick={() => onNavigate("about-section")}
            className={`${
              activePage === "about" ? "text-[#f97316]" : "text-gray-800"
            } hover:text-[#f97316]`}
          >
            About us
          </button>
          <button
            onClick={() => onNavigate("services-section")}
            className={`${
              activePage === "services" ? "text-[#f97316]" : "text-gray-800"
            } hover:text-[#f97316]`}
          >
            Services
          </button>
          <button
            onClick={() => onNavigate("contact-section")}
            className={`${
              activePage === "contact" ? "text-[#f97316]" : "text-gray-800"
            } hover:text-[#f97316]`}
          >
            Contact us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
