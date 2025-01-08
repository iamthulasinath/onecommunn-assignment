import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dl4mtiiec/image/upload/v1736342067/85d52850bc68d354d1e241ab0bded71b_bfuzyr.jpg",
    category: "Construction",
    title: "Contemporary Vilas",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dl4mtiiec/image/upload/v1736342066/87757e6c1801a12c60ebf01c155ac975_r5csph.jpg",
    category: "Construction",
    title: "Empire State Building",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dl4mtiiec/image/upload/v1736342067/cec1e3289d4302b9b147cf687b574b6d_b0xf4y.jpg",
    category: "Construction",
    title: "Central park Tower",
  },
];

const RecentProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#0B1523] mb-16">
          Our Recent Projects
        </h2>


        <div className="hidden lg:block relative">
          <div className="flex gap-8 justify-center">
            {projects.map((project) => (
              <div key={project.id} className="w-[320px]">
                <div className="relative shadow-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-[320px] h-[400px] object-cover"
                  />

                  <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
                    <p className="text-gray-500 text-sm">{project.category}</p>
                    <h3 className="text-lg font-bold text-[#0B1523] mb-2">
                      {project.title}
                    </h3>
                    <a
                      href="#"
                      className="text-[#f97316] hover:text-[#ea580c] font-medium"
                    >
                      View Projects →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-[#f97316]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-[#f97316]" />
          </button>
        </div>


        <div className="lg:hidden relative">
          <div className="relative flex justify-center items-center">
            <div className="w-full">
              <div className="relative shadow-lg overflow-hidden">
                <img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  className="w-full h-auto object-cover"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
                  <p className="text-gray-500 text-sm">
                    {projects[currentIndex].category}
                  </p>
                  <h3 className="text-lg font-bold text-[#0B1523] mb-2">
                    {projects[currentIndex].title}
                  </h3>
                  <a
                    href="#"
                    className="text-[#f97316] hover:text-[#ea580c] font-medium"
                  >
                    View Projects →
                  </a>
                </div>
              </div>
            </div>

         
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-[#f97316]" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-[#f97316]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
