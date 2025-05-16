
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FileText, ArrowRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Publications = () => {
  const [visibleItems, setVisibleItems] = useState(5);
  
  const journalPublications = [
    "Wuni, I. Y., & Shen, G. Q. (2023). Critical risk factors for modular integrated construction projects: A global perspective. Journal of Cleaner Production, 382, 135301.",
    "Wuni, I. Y., & Shen, G. Q. (2022). Barriers to the adoption of modular integrated construction: Systematic review and meta-analysis. Integrated environmental assessment and management, 18(1), 25-36.",
    "Wuni, I. Y., & Shen, G. Q. (2021). Holistic review of industrialized construction system research. Journal of Architectural Engineering, 27(3), 04021025.",
    "Wuni, I. Y., Shen, G. Q., & Osei-Kyei, R. (2020). Scientometric review of global research trends on green buildings in construction journals from 1992 to 2018. Energy and Buildings, 190, 69-85.",
    "Wuni, I. Y., & Shen, G. Q. (2020). Barriers to the adoption of modular integrated construction: Systematic review and meta-analysis, conceptual framework, and strategies for effective promotion. Journal of Building Engineering, 33, 101711.",
    "Wuni, I. Y., Shen, G. Q., Osei-Kyei, R., & Akhund, M. A. (2020). Critical risk assessment for modular integrated construction projects: Mixed methods study. Construction Innovation, 20(3), 12-20.",
    "Wuni, I. Y., Shen, G. Q., & Mahmud, A. T. (2019). Critical risk factors in the application of modular integrated construction: a systematic review. International Journal of Construction Management, 1-15.",
    "Wuni, I. Y., & Shen, G. Q. (2019). Living transformation of residential communities in the face of modern urbanization: An innovative conceptual framework. Journal of Urban Management, 8(3), 364-376.",
  ];

  const conferencePublications = [
    "Wuni, I. Y., & Shen, G. Q. (2022). Smart Construction Technologies for Modular Integrated Construction Projects. In Proceedings of the International Conference on Smart Construction and Engineering, Hong Kong.",
    "Wuni, I. Y., & Shen, G. Q. (2021). Digital Twin Applications in Modular Building Design. In Proceedings of the 38th International Symposium on Automation and Robotics in Construction (ISARC), Dubai, UAE.",
    "Wuni, I. Y., & Shen, G. Q. (2020). Innovative Approaches to Circular Construction Implementation. In Proceedings of the Construction Research Congress, Tempe, Arizona, USA.",
    "Wuni, I. Y., & Shen, G. Q. (2019). Blockchain Applications in Green Building Supply Chains. In Proceedings of the International Conference on Smart Infrastructure and Construction, Cambridge, UK."
  ];

  const loadMore = () => {
    setVisibleItems(prev => prev + 5);
  };

  return (
    <section id="publications" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-2">Publications</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">
            Over 55 articles in refereed journals and conference proceedings with 1500+ citations
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="journals" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="journals">Journal Publications</TabsTrigger>
              <TabsTrigger value="conferences">Conference Proceedings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="journals" className="border-none p-0">
              <div className="space-y-4">
                {journalPublications.slice(0, visibleItems).map((publication, index) => (
                  <div key={index} className="bg-white p-5 rounded-lg shadow-sm flex">
                    <FileText className="h-5 w-5 text-gold shrink-0 mt-1 mr-3" />
                    <p className="text-gray-800">{publication}</p>
                  </div>
                ))}
              </div>
              
              {visibleItems < journalPublications.length && (
                <div className="mt-6 text-center">
                  <Button 
                    onClick={loadMore} 
                    variant="outline" 
                    className="border-gold text-navy hover:bg-gold/10"
                  >
                    Load More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="conferences" className="border-none p-0">
              <div className="space-y-4">
                {conferencePublications.map((publication, index) => (
                  <div key={index} className="bg-white p-5 rounded-lg shadow-sm flex">
                    <FileText className="h-5 w-5 text-gold shrink-0 mt-1 mr-3" />
                    <p className="text-gray-800">{publication}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-8 text-center">
            <Button 
              className="bg-gold hover:bg-gold-light text-navy"
            >
              View Full Bibliography
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
