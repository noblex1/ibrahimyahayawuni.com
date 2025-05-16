
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-navy text-white min-h-[70vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-navy to-navy-light opacity-90"></div>
      <div className="container mx-auto px-4 py-24 z-10 relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-4">
              Dr. Ibrahim Yahaya Wuni
            </h1>
            <h2 className="text-xl md:text-2xl font-light mb-6 text-gold">
              Assistant Professor | Construction Engineering and Management
            </h2>
            <p className="text-lg mb-8 max-w-xl">
              King Fahd University of Petroleum and Minerals, Saudi Arabia
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={scrollToAbout}
                className="bg-gold hover:bg-gold-light text-navy font-medium flex items-center gap-2"
              >
                Learn More <ArrowDown className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-gold hover:bg-white/10 font-medium"
              >
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gold bg-navy-dark flex items-center justify-center">
              <span className="text-5xl font-serif">IYW</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
