import React from 'react';
import { Construction, HardHat, Building2, Ruler, TestTube, Car } from 'lucide-react';
import RecentProjects from './RecentProjects';
import ClientsFeedback from './ClientsFeedback';
import HowWeWork from './HowWeWork';

const ServiceCard = ({ title, description, icon: Icon }) => (
  <div className="relative group">
    <div className="absolute top-0 right-0 w-12 h-12 bg-[#f97316]/10"></div>
    
    <div className="bg-white p-8 rounded-lg transition-all duration-300 group-hover:bg-[#D27012] group-hover:text-white">
      <Icon className="w-12 h-12 text-[#f97316] mb-6 group-hover:text-white transition-colors" />
      <h3 className="text-xl font-bold mb-4 text-[#0B1523] group-hover:text-white">{title}</h3>
      <p className="mb-6 text-gray-600 group-hover:text-white/90">{description}</p>
      <button className="flex items-center text-[#f97316] font-semibold group-hover:text-white">
        Read More <span className="ml-2">→</span>
      </button>
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Construction,
      title: "Building Materials",
      description: "United Buildpro Pvt Ltd's e-commerce platform offers a hassle-free way to source top-quality building supplies from the comfort of your home."
    },
    {
      icon: HardHat,
      title: "Joint Ventures",
      description: "United Buildpro Pvt Ltd specializes in fostering successful partnerships through joint development ventures."
    },
    {
      icon: Building2,
      title: "RERA Consultants",
      description: "Navigating the complexities of real estate transactions is easier with United Buildpro's expert consultants by your side."
    },
    {
      icon: Ruler,
      title: "2D & 3D Consultant",
      description: "Designing a building starts with a vision, and at United Buildpro, we help you visualize that vision with precision."
    },
    {
      icon: TestTube,
      title: "Construction & Interior",
      description: "Your dream space deserves the best execution, and that's where United Buildpro Pvt Ltd excels."
    },
    {
      icon: Car,
      title: "Land Development",
      description: "At United Buildpro Pvt Ltd, we transform undeveloped land into thriving spaces through our comprehensive land development services."
    }
  ];

  return (
    <>
      <div className="py-24 bg-gray-50 px-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#0B1523] mb-16">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
      <HowWeWork />
      <RecentProjects />
      <ClientsFeedback />
    </>
  );
};

export default Services;