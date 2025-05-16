
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GalleryHorizontal } from 'lucide-react';

const Gallery = () => {
  const projects = [
    {
      id: 1,
      title: 'Modular Construction Project',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Offsite Construction'
    },
    {
      id: 2,
      title: 'Green Building Research',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Green Building'
    },
    {
      id: 3,
      title: 'Digital Twin Implementation',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Digital Twin'
    },
    {
      id: 4,
      title: 'Circular Economy Workshop',
      image: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Circular Economy'
    },
    {
      id: 5,
      title: 'Blockchain in Construction',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Blockchain'
    },
    {
      id: 6,
      title: 'World Bank Consultation',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Consulting'
    }
  ];

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-2">Project Gallery</h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A visual showcase of Dr. Wuni's research projects, consultancy work, and academic contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden transform transition-transform hover:scale-[1.02] hover:shadow-lg">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy to-transparent p-4">
                  <span className="text-xs text-gold font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg text-navy">{project.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 flex items-center justify-center gap-2">
            <GalleryHorizontal className="h-5 w-5 text-gold" />
            Additional projects available upon request
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
