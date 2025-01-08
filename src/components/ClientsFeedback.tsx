import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud Precious ips um dolor sit amet, consecte",
    author: "Lee Barners",
    position: "SELLING AGENTING"
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud Precious ips um dolor sit amet, consecte",
    author: "Lee Barners",
    position: "SELLING AGENTING"
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud Precious ips um dolor sit amet, consecte",
    author: "Lee Barners",
    position: "SELLING AGENTING"
  }
];

const TestimonialCard = ({ testimonial, isActive, onClick }) => (
  <div 
    onClick={onClick}
    className={`w-full max-w-md mx-auto cursor-pointer transition-all duration-300 ${
      isActive ? 'border-b-2 border-[#f97316]' : ''
    }`}
  >
    <div className="bg-white p-8 rounded-lg">
      <div className="text-[#f97316] text-6xl font-serif mb-6">"</div>
      <p className="text-gray-600 mb-8">{testimonial.text}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
        <div>
          <h4 className="font-bold text-[#0B1523]">{testimonial.author}</h4>
          <p className="text-sm text-gray-500">{testimonial.position}</p>
        </div>
      </div>
    </div>
  </div>
);

const ClientsFeedback = () => {
  const [activeCard, setActiveCard] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#0B1523] mb-16">
          Clients Feedback
        </h2>
        
        <div className="relative">
          <div className="flex gap-8">
            {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id}
                testimonial={testimonial}
                isActive={activeCard === testimonial.id}
                onClick={() => setActiveCard(testimonial.id)}
              />
            ))}
          </div>
          
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-100"
          >
            <ChevronLeft className="w-6 h-6 text-[#f97316]" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-100"
          >
            <ChevronRight className="w-6 h-6 text-[#f97316]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientsFeedback;