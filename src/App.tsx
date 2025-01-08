import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaTwitter, FaVimeoV } from "react-icons/fa";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#0B1523] text-white py-4 px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center text-sm">
          <div className="flex flex-wrap justify-center md:justify-start items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>9731125090, 9731125090</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <span>Unitedbuildpro@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={16} />
              <span>
                #63/A, E Block, 2nd Stage, Dr.Rajkumar Road, Subramanya Nagar
                Bangalore-560010
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <FaFacebookF />
            <FaTwitter />
            <FaVimeoV />
            <span>|</span>
            <img
              src="https://res.cloudinary.com/dl4mtiiec/image/upload/v1736349859/46aa41db4ef687fc0b048e40e83e3b14_g7zsv4.png"
              className="w-6 h-6 object-cover rounded-full border-0"
              alt="India Logo"
            />
            <span>IN</span>
          </div>
        </div>
      </div>

      <div id="home-section">
        <Hero />
      </div>
      <div id="about-section">
        <About />
      </div>
      <div id="services-section">
        <Services />
      </div>
      <div id="contact-section">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
