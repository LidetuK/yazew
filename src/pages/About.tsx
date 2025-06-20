import { ArrowLeft, CheckCircle, ArrowRight, Activity, Shield, HardHat, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageLayout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }} 
              className="text-4xl font-bold mb-6"
            >
              About Yingor Financial
            </motion.h1>
            
            <div className="prose prose-lg max-w-none">
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }} 
                className="text-xl text-gray-600 mb-12"
              >
                A Royal Vision for Community Prosperity
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                  <p className="text-gray-600">
                  To cultivate a future where tradition and progress go hand in hand, embracing a sustainable development model that prioritizes economic self-sufficiency, inclusive growth, and community-led governance.
                  </p>
                  <p className="text-gray-600">
                  "Central to this vision is the empowerment of youth and women, the preservation of cultural heritage, and the promotion of innovation across all sectors to build resilient communities that thrive in the modern era while honoring their roots."
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                >
                  <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Innovation:</strong> We push boundaries to create solutions that weren't possible before.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Quality:</strong> We're committed to excellence in every sensor, algorithm, and solution we deliver.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Collaboration:</strong> We work closely with our clients to ensure their unique needs are met.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Impact:</strong> We measure success by the tangible differences our technology makes in the real world.</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                  <p className="text-gray-600 mb-4">
                  HRH, Thee Royal Warrior, Osagyefo, Torgbi Kiti'Kata I, is a beacon of hope and strength for the people of the Fifiawoto Meli Tsã'O Kingdom and beyond. His Majesty's leadership is marked by a unique blend of traditional wisdom and forward-thinking strategies aimed at community development and empowerment.
                  </p>
                  <p className="text-gray-600 mb-4">
                  This page offers an in-depth look into his life — from his early years, rise to the throne, to his current role as a visionary leader. Learn about his commitments to economic empowerment, cultural preservation, youth mentorship, and social justice.
                  </p>
                  <p className="text-gray-600">
                  Through his guidance, the Kingdom has embarked on a path of sustainable growth and unity, creating opportunities that honor tradition while embracing innovation for the betterment of all community members.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      icon: <Activity className="w-10 h-10 text-gray-700" />,
                      title: "Competitive Rates",
                      description: "Royal-backed financial services with transparent pricing and fair terms for all community members.",
                    },
                    {
                      icon: <Shield className="w-10 h-10 text-gray-700" />,
                      title: "Economic Growth",
                      description: "Comprehensive support for business development through mentorship, training, and strategic guidance.",
                    },
                    {
                      icon: <HardHat className="w-10 h-10 text-gray-700" />,
                      title: "Community Focused",
                      description: "Built for Ghanaians, by Ghanaians. We understand the unique needs of our local entrepreneurs.",
                    },
                    {
                      icon: <Zap className="w-10 h-10 text-gray-700" />,
                      title: "Royal Guarantee",
                      description: "Backed by traditional authority with transparent processes and cultural respect at the core of our operations.",
                    }
                  ].map((feature, i) => (
                    <div key={i} className="text-center p-6 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="flex justify-center items-center mb-4 bg-white w-20 h-20 rounded-full mx-auto shadow-md">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
