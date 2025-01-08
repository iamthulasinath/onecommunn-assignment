import { useState } from "react";

const Navbar = ({ setActivePage, activePage, onNavigate }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavigation = (sectionId) => {
    onNavigate(sectionId);
    setIsSidebarOpen(false); 
  };

  return (
    <>
      <nav className="bg-white shadow-md flex justify-between items-center max-w-5xl mx-auto my-3 px-4 md:px-6 h-16">
        <div className="container mx-auto flex justify-between items-center h-full">
      
          <div className="flex items-center">
            <img
              src="https://res.cloudinary.com/dl4mtiiec/image/upload/v1736319640/0f44fadc0e91371a9ead0677d80eb02f_yjsrpi.png"
              alt="Logo"
              className="w-12 h-12 md:w-16 md:h-16"
            />
          </div>

          <div className="hidden md:flex space-x-4 lg:space-x-8 text-sm sm:text-base lg:text-lg">
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

      
          <div className="md:hidden">
            <button
              onClick={toggleSidebar}
              className="text-gray-800 focus:outline-none text-2xl"
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50">
            <div className="flex justify-between items-center px-4 py-4 border-b">
              <h2 className="text-xl font-bold">Menu</h2>
              <button
                onClick={toggleSidebar}
                className="text-gray-800 text-2xl focus:outline-none"
              >
                ✕
              </button>
            </div>
            <div className="flex flex-col space-y-4 px-4 py-6">
              <button
                onClick={() => handleNavigation("home-section")}
                className={`${
                  activePage === "home" ? "text-[#f97316]" : "text-gray-800"
                } hover:text-[#f97316]`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation("about-section")}
                className={`${
                  activePage === "about" ? "text-[#f97316]" : "text-gray-800"
                } hover:text-[#f97316]`}
              >
                About us
              </button>
              <button
                onClick={() => handleNavigation("services-section")}
                className={`${
                  activePage === "services" ? "text-[#f97316]" : "text-gray-800"
                } hover:text-[#f97316]`}
              >
                Services
              </button>
              <button
                onClick={() => handleNavigation("contact-section")}
                className={`${
                  activePage === "contact" ? "text-[#f97316]" : "text-gray-800"
                } hover:text-[#f97316]`}
              >
                Contact us
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
