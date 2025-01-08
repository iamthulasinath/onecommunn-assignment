import React from 'react';

const About = () => {
  return (
    <div className="py-24 bg-white px-24">
      <div className="container mx-auto px-6 flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 relative max-w-lg mx-auto lg:mx-0">
          <div className="bg-[#f97316] w-32 h-32 absolute -left-4 -top-4 opacity-5"></div>
          <img
            src="https://res.cloudinary.com/dl4mtiiec/image/upload/v1736319720/db9d2afe32abb6d673a90213247ade67_zdxasn.png"
            alt="Construction Professional"
            className="shadow-xl relative z-10 w-[380px] h-[400px] object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 lg:pl-5 mt-16 lg:mt-0">
          <h2 className="text-4xl font-bold text-[#0B1523] mb-8">About us</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Everyone has a vision of their dream home or workspace — a space filled with 
            special features and lasting impressions. At United Buildpro Pvt Ltd, we bring 
            those dreams to life. Even if you're unsure of what you want, our team of experts 
            knows the right questions to ask to uncover your desires and create a space that's 
            uniquely yours.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Every project we undertake is a harmonious blend of our client's vision and our 
            design expertise. We focus on creating spaces that not only meet expectations but 
            exceed them, offering a seamless integration of style and functionality.
          </p>
          <button className="bg-[#0B1523] text-white px-8 py-3 rounded hover:bg-[#1a2b3c] transition-colors">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
