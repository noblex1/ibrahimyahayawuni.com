
import React from 'react';
import { Building2, Recycle, Lightbulb, DraftingCompass, Blocks, Braces, Database, Cpu } from 'lucide-react';

const ResearchInterests = () => {
  const researchAreas = [
    { 
      icon: <Building2 className="h-8 w-8 mb-4 text-gold" />, 
      title: "Offsite Construction", 
      description: "Industrialized construction methods including modular and prefabricated systems." 
    },
    { 
      icon: <DraftingCompass className="h-8 w-8 mb-4 text-gold" />, 
      title: "Modular Integrated Construction", 
      description: "Design and implementation of fully integrated modular building systems." 
    },
    { 
      icon: <Recycle className="h-8 w-8 mb-4 text-gold" />, 
      title: "Circular Construction", 
      description: "Sustainable building practices that minimize waste and maximize resource reuse." 
    },
    { 
      icon: <Lightbulb className="h-8 w-8 mb-4 text-gold" />, 
      title: "Green Building", 
      description: "Development of environmentally responsible construction practices." 
    },
    { 
      icon: <Blocks className="h-8 w-8 mb-4 text-gold" />, 
      title: "Blockchain in Construction", 
      description: "Applications of blockchain technology in construction management and supply chains." 
    },
    { 
      icon: <Braces className="h-8 w-8 mb-4 text-gold" />, 
      title: "Integrated Digital Delivery", 
      description: "Digital technologies for streamlined project delivery and collaboration." 
    },
    { 
      icon: <Database className="h-8 w-8 mb-4 text-gold" />, 
      title: "Digital Twin", 
      description: "Virtual replicas of physical assets for monitoring, simulation, and optimization." 
    },
    { 
      icon: <Cpu className="h-8 w-8 mb-4 text-gold" />, 
      title: "AI in Construction", 
      description: "Applications of artificial intelligence in construction processes and management." 
    },
  ];

  return (
    <section id="research" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-2">Research Interests</h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {researchAreas.map((area, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center">
                {area.icon}
              </div>
              <h3 className="font-bold text-navy text-lg mb-2">{area.title}</h3>
              <p className="text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchInterests;
