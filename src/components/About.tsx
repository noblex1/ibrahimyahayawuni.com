
import React from 'react';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-2">About</h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 shadow-lg border-none bg-gradient-to-br from-white to-gray-50">
            <p className="text-lg mb-6 leading-relaxed text-gray-700">
              Dr. Ibrahim Yahaya Wuni is an Assistant Professor at the Department of Construction Engineering and Management of the King Fahd University of Petroleum and Minerals in Saudi Arabia. He is also a Consultant for the World Bank and has consulted on land tenure systems, land governance, sustainable cities, urban resilience, and water security.
            </p>
            <p className="text-lg mb-6 leading-relaxed text-gray-700">
              Dr. Wuni holds a BSc in Land Economy (First Class Honors), MSc in Water and Environmental Management (Distinction), and a Ph.D. in Construction Engineering and Management (Distinction).
            </p>
            <p className="text-lg mb-6 leading-relaxed text-gray-700">
              He specializes in modern methods of construction. His research covers offsite construction, modular integrated construction, circular construction, green building, blockchain, circular economy, integrated digital delivery, digital twin, 3D printing, and artificial Intelligence.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Dr. Wuni has published over 55 articles in refereed Journals and Conference Proceedings, with over 1500 citations in Google Scholar (As of Nov 2023).
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
