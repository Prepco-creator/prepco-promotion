import React from 'react';
import { Star, Medal, Building, Shield } from 'lucide-react';

const TrustSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="w-full md:w-2/3 pr-0 md:pr-8 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gray-800">About </span>
              <span className="text-[#018380]">TRUSTED WELLNESS PARTNERS</span>
            </h2>
            
            <p className="text-gray-700 text-lg mb-8">
              We&apos;ve partnered with leading healthcare providers and wellness experts to bring you the best services. 
              Our platform is trusted by medical professionals, corporate wellness programs, and thousands of users 
              who have transformed their health journey. Join our community and experience the difference of 
              having expert-backed wellness at your fingertips.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {/* Stats Cards */}
              <div className="bg-gray-50 border border-gray-100 shadow-sm p-4 rounded-lg text-center">
                <div className="flex justify-center mb-2">
                  <Star className="w-12 h-12 text-[#018380]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">4.9/5</h3>
                <p className="text-[#018380] font-medium">Average User Rating</p>
              </div>
              
              <div className="bg-gray-50 border border-gray-100 shadow-sm p-4 rounded-lg text-center">
                <div className="flex justify-center mb-2">
                  <Medal className="w-12 h-12 text-[#018380]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">100+</h3>
                <p className="text-[#018380] font-medium">Trusted Experts</p>
              </div>
              
              <div className="bg-gray-50 border border-gray-100 shadow-sm p-4 rounded-lg text-center">
                <div className="flex justify-center mb-2">
                  <Building className="w-12 h-12 text-[#018380]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">50+</h3>
                <p className="text-[#018380] font-medium">Corporate Partners</p>
              </div>
              
              <div className="bg-gray-50 border border-gray-100 shadow-sm p-4 rounded-lg text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="w-12 h-12 text-[#018380]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">25+</h3>
                <p className="text-[#018380] font-medium">Medical Brands</p>
              </div>
            </div>
            
            <button className="mt-8 bg-[#018380] hover:bg-[#016360] text-white font-bold py-4 px-8 rounded-lg transition-all text-lg">
              Join Thousands Getting Healthier
            </button>
          </div>
          
          {/* Right Image/Content */}
          <div className="w-full md:w-1/3">
            <div className="bg-gray-50 border border-gray-100 shadow-md p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#018380]">Our Trusted Partners</h3>
              
              <div className="space-y-4">
                <div className="bg-white border border-gray-100 shadow-sm p-4 rounded-lg flex items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                    <div className="w-8 h-8 bg-[#018380] rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Healthcare Experts</p>
                    <p className="text-gray-600 text-sm">Certified professionals</p>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-100 shadow-sm p-4 rounded-lg flex items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                    <div className="w-8 h-8 bg-[#018380] rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Corporate Wellness</p>
                    <p className="text-gray-600 text-sm">Trusted by top companies</p>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-100 shadow-sm p-4 rounded-lg flex items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                    <div className="w-8 h-8 bg-[#018380] rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Medical Brands</p>
                    <p className="text-gray-600 text-sm">Industry-leading partners</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-gray-600">Become a partner</p>
                <p className="text-[#018380] font-medium">Contact us today</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;