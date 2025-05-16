
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-2">Contact</h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-serif font-bold text-navy-dark mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-navy rounded-full p-2 mr-4">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-light">Email</h4>
                  <p>ibrahim.wuni@kfupm.edu.sa</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-navy rounded-full p-2 mr-4">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-light">Phone</h4>
                  <p>+966 55 784 0160</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-navy rounded-full p-2 mr-4">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-light">Office</h4>
                  <p>Department of Construction Engineering and Management</p>
                  <p>King Fahd University of Petroleum and Minerals</p>
                  <p>Dhahran, Saudi Arabia</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-navy rounded-full p-2 mr-4">
                  <ExternalLink className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-light">Academic Profiles</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <a href="#" className="text-navy hover:underline">Google Scholar</a>
                    <a href="#" className="text-navy hover:underline">ResearchGate</a>
                    <a href="#" className="text-navy hover:underline">ORCID</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-serif font-bold text-navy-dark mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input 
                  placeholder="Your Name" 
                  className="border-gray-300 focus:border-navy focus:ring-navy" 
                  required 
                />
              </div>
              
              <div>
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="border-gray-300 focus:border-navy focus:ring-navy" 
                  required 
                />
              </div>
              
              <div>
                <Input 
                  placeholder="Subject" 
                  className="border-gray-300 focus:border-navy focus:ring-navy" 
                  required 
                />
              </div>
              
              <div>
                <Textarea 
                  placeholder="Your Message" 
                  className="border-gray-300 focus:border-navy focus:ring-navy min-h-[150px]" 
                  required 
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-navy hover:bg-navy-light text-white w-full"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
