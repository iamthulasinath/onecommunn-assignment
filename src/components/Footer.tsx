import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0B1523] text-white pt-16 pb-8 pl-20 pr-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16 mb-12">
  
          <div className="flex flex-col items-center md:items-start space-y-4">
            <img
              src="https://res.cloudinary.com/dl4mtiiec/image/upload/v1736319640/0f44fadc0e91371a9ead0677d80eb02f_yjsrpi.png"
              alt="Logo"
              className="w-24 h-24 object-contain" 
            />
            <p className="text-gray-400 text-center md:text-left">
              Corporate clients and leisure travelers have been relying on
              Groundlink for dependable services.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-[#f97316] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-[#f97316] p-2 rounded-full hover:bg-[#ea580c] transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-[#f97316] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-full hover:bg-[#f97316] transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>


          <div>
            <h3 className="text-xl font-bold mb-6">Useful Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

  
          <div>
            <h3 className="text-xl font-bold mb-6">Products</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Listings
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Details
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Enquiry Form
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="text-gray-400">unitedbuildpro@gmail.com</li>
              <li className="text-gray-400">+91 9731125090, 9731125090</li>
              <li className="text-gray-400">
                #63/A, E Block, 2nd Stage, Dr.Rajkumar Road, Subramanya Nagar
                Bangalore-560010
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <div className="flex justify-between items-center">
            <p>© United build pro 2021 All rights reserved.</p>
            <div className="space-x-4">
              <a href="#" className="hover:text-white">
                Terms of Use
              </a>
              <span>|</span>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
