import { useState } from 'react';

const steps = [
  {
    number: "01",
    title: "Collaborative Design Process",
    description: "We begin by understanding your vision, crafting tailored concepts with 2D/3D visuals and clear planning."
  },
  {
    number: "02",
    title: "Seamless Execution", 
    description: "From construction to interiors, we deliver quality, precision, and timely results to bring your dream to life."
  },
  {
    number: "03",
    title: "Comprehensive Support",
    description: "We ensure a smooth handover with regular updates, valued feedback, and meticulous final touches."
  }
];

const WorkCard = ({ number, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`bg-white p-6 rounded transition-all duration-300 ${
        isHovered ? 'border-2 border-[#f97316]' : 'border border-gray-200'
      } text-center`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-8xl font-bold text-gray-100 mb-4">
        {number}
      </div>
      <h3 className="text-lg font-bold text-[#0B1523] mb-3">
        {title}
      </h3>
      <p className="text-gray-600 text-sm">
        {description}
      </p>
    </div>
  );
};

const HowWeWork = () => {
  return (
    <div className="relative h-[600px] overflow-hidden">

      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
        <div className="bg-white mx-4 md:mx-auto max-w-6xl py-16 px-8 rounded-lg shadow-xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0B1523]">
              How We Work
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
    </div>
  );
};

export default HowWeWork;