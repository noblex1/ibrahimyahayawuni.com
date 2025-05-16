
import React from 'react';
import { BadgeCheck } from 'lucide-react';

const Education = () => {
  const educationItems = [
    {
      degree: "Ph.D. in Construction Engineering and Management",
      distinction: "Distinction",
      institution: "Hong Kong Polytechnic University",
      year: "2018 - 2022",
    },
    {
      degree: "MSc in Water and Environmental Management",
      distinction: "Distinction",
      institution: "Loughborough University, UK",
      year: "2016 - 2017",
    },
    {
      degree: "BSc in Land Economy",
      distinction: "First Class Honors",
      institution: "Kwame Nkrumah University of Science and Technology, Ghana",
      year: "2011 - 2015",
    },
  ];

  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-2">Education</h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {educationItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-gold">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <BadgeCheck className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-dark">{item.degree}</h3>
                    <p className="text-gold font-medium mb-1">{item.distinction}</p>
                    <p className="text-gray-700">{item.institution}</p>
                    <p className="text-gray-500 text-sm">{item.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
