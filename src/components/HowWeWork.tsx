import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Collaborative Design Process",
    description:
      "We begin by understanding your vision, crafting tailored concepts with 2D/3D visuals and clear planning.",
  },
  {
    number: "02",
    title: "Seamless Execution",
    description:
      "From construction to interiors, we deliver quality, precision, and timely results to bring your dream to life.",
  },
  {
    number: "03",
    title: "Comprehensive Support",
    description:
      "We ensure a smooth handover with regular updates, valued feedback, and meticulous final touches.",
  },
];

const WorkCard = ({ number, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ${
        isHovered ? "border-2 border-[#f97316]" : "border border-gray-200"
      } text-center`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-6xl sm:text-8xl font-bold text-gray-100 mb-4">
        {number}
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-[#0B1523] mb-2">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const HowWeWork = () => {
  return (
    <div className="relative bg-gray-50 pt-12 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#0B1523] mb-12">
          How We Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <WorkCard
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
