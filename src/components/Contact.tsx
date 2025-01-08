import React from 'react';
import { User, Mail, Phone, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#0B1523] mb-16">
          Contact us
        </h2>
        
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form className="space-y-6">
            <div className="relative">
              <input
                type="text"
                placeholder="First Name*"
                className="w-full p-4 bg-gray-50 rounded border border-gray-200 focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] outline-none"
              />
              <User className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Mail Address"
                  className="w-full p-4 bg-gray-50 rounded border border-gray-200 focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] outline-none"
                />
                <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
              
              <div className="relative">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-4 bg-gray-50 rounded border border-gray-200 focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] outline-none"
                />
                <Phone className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
            </div>
            
            <div className="relative">
              <textarea
                placeholder="Enter Message"
                rows={6}
                className="w-full p-4 bg-gray-50 rounded border border-gray-200 focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] outline-none resize-none"
              ></textarea>
              <MessageSquare className="absolute right-4 top-6 text-gray-400" size={20} />
            </div>
            
            <button className="bg-[#f97316] text-white px-8 py-4 rounded hover:bg-[#ea580c] transition-colors flex items-center space-x-2">
              <span>Submit Request</span>
              <span>→</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;