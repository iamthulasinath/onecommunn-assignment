import React from "react";

const About = () => {
  return (
    <div className="py-16 bg-white px-6 sm:px-8 md:px-12 lg:px-24">
      <div className="container mx-auto flex flex-wrap lg:flex-nowrap items-center">
       
        <div className="w-full lg:w-1/2 relative max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0 order-2 lg:order-1 mt-10 lg:mt-0">
          <div className="bg-[#f97316] w-24 h-24 sm:w-32 sm:h-32 absolute -left-4 -top-4 opacity-5"></div>
          <img
            src="https://res.cloudinary.com/dl4mtiiec/image/upload/v1736319720/db9d2afe32abb6d673a90213247ade67_zdxasn.png"
            alt="Construction Professional"
            className="shadow-xl relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full h-auto object-cover"
          />
        </div>

    
        <div className="w-full lg:w-1/2 lg:pl-5 order-1 lg:order-2 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1523] mb-6 sm:mb-8">
            About us
          </h2>
          <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
            Everyone has a vision of their dream home or workspace — a space filled with
            special features and lasting impressions. At United Buildpro Pvt Ltd, we bring
            those dreams to life. Even if you're unsure of what you want, our team of experts
            knows the right questions to ask to uncover your desires and create a space that's
            uniquely yours.
          </p>
          <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
            Every project we undertake is a harmonious blend of our client's vision and our
            design expertise. We focus on creating spaces that not only meet expectations but
            exceed them, offering a seamless integration of style and functionality.
          </p>
          <button className="bg-[#0B1523] text-white px-6 sm:px-8 py-2 sm:py-3 rounded hover:bg-[#1a2b3c] transition-colors">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
