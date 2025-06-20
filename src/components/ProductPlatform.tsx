
import { motion } from "framer-motion";
import { CreditCard, TrendingUp, Users, Shield, HandHeart, Crown, ArrowRight, Smartphone, Globe, Building, Award, Target } from 'lucide-react';

const ProductPlatform = () => {
  return (
    <div className="w-full relative">
      {/* Product Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Royal-Backed Financial Services</h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-4xl">
          Empowering communities through innovative financial solutions rooted in traditional wisdom and modern excellence. 
          Our comprehensive platform combines royal heritage with cutting-edge financial technology to serve Ghana's communities.
        </p>
      </motion.div>

      {/* Platform Architecture - Three Column Layout for desktop, Vertical for mobile */}
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        {/* Community Needs Column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <div className="bg-gray-200 rounded-xl p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-center mb-1">Community Needs</h3>
            <p className="text-xs sm:text-sm text-center mb-4">Financial inclusion</p>
            
            <div className="space-y-3">
              {[
                { icon: <CreditCard className="text-yingor-primary w-4 h-4 sm:w-5 sm:h-5" />, text: "Micro-loans" },
                { icon: <Users className="text-yingor-primary w-4 h-4 sm:w-5 sm:h-5" />, text: "Business Training" },
                { icon: <TrendingUp className="text-yingor-primary w-4 h-4 sm:w-5 sm:h-5" />, text: "Financial Literacy" },
                { icon: <Building className="text-yingor-primary w-4 h-4 sm:w-5 sm:h-5" />, text: "Savings Accounts" },
                { icon: <Smartphone className="text-yingor-primary w-4 h-4 sm:w-5 sm:h-5" />, text: "Mobile Banking" },
                { icon: <HandHeart className="text-yingor-primary w-4 h-4 sm:w-5 sm:h-5" />, text: "Group Financing" }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-3 sm:p-4 flex items-center">
                  <div className="mr-3 sm:mr-4 flex-shrink-0">{item.icon}</div>
                  <span className="text-gray-800 font-medium text-xs sm:text-sm">{item.text}</span>
                </div>
              ))}
            </div>
            
            <p className="text-xs sm:text-sm text-center mt-4 sm:mt-6">
              Understanding what our<br />communities truly need
            </p>
          </div>
        </motion.div>

        {/* Flow Arrows - Mobile and Desktop have different appearance */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:flex items-center justify-center"
        >
          <ArrowRight className="text-yingor-primary w-8 h-8" />
        </motion.div>
        
        {/* Mobile Flow Indicator - Only visible on mobile/tablet */}
        <div className="flex lg:hidden items-center justify-center my-2">
          <ArrowRight className="text-yingor-primary w-6 h-6 rotate-90" />
        </div>

        {/* Yingor Platform Column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex-[1.5]"
        >
          <div className="bg-gray-200 rounded-xl p-4 sm:p-6">
            <div className="flex flex-col items-center mb-3 sm:mb-4">
              <div className="flex items-center mb-2">
                <Crown className="text-yingor-gold w-6 h-6 mr-2" />
                <h3 className="text-xl sm:text-2xl font-bold text-center mb-0">Yingor Financial</h3>
              </div>
              <p className="text-lg sm:text-xl font-medium text-center">Royal Platform</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
              {[
                { icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />, name: "EKEKEVOR Initiative" },
                { icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Youth Enterprise Fund" },
                { icon: <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Royal Investment" },
                { icon: <Building className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Community Banking" },
                { icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Portfolio Mgmt" },
                { icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Risk Assessment" },
                { icon: <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Mobile Services" },
                { icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Digital Literacy" },
                { icon: <Target className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Mentorship" },
                { icon: <HandHeart className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Skills Development" },
                { icon: <Crown className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Royal Guarantee" },
                { icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Growth Planning" }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-2 sm:p-3 text-center flex flex-col items-center justify-center">
                  <div className="mb-1 sm:mb-2 text-yingor-primary">{item.icon}</div>
                  <div className="text-[10px] sm:text-xs">{item.name}</div>
                </div>
              ))}
            </div>
            
            <p className="text-xs sm:text-sm text-center mt-4 sm:mt-6">
              Comprehensive financial platform backed<br />by traditional authority and modern innovation
            </p>
          </div>
        </motion.div>

        {/* Flow Arrows - Desktop Only */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="hidden lg:flex items-center justify-center"
        >
          <ArrowRight className="text-yingor-primary w-8 h-8" />
        </motion.div>
        
        {/* Mobile Flow Indicator - Only visible on mobile/tablet */}
        <div className="flex lg:hidden items-center justify-center my-2">
          <ArrowRight className="text-yingor-primary w-6 h-6 rotate-90" />
        </div>

        {/* Community Impact Column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex-1"
        >
          <div className="bg-gray-200 rounded-xl p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-center mb-1">Community Impact</h3>
            <p className="text-xs sm:text-sm text-center mb-4">Prosperity & Growth</p>
            
            <div className="space-y-3">
              {[
                { icon: <Users className="text-yingor-primary w-4 h-4 sm:w-5 sm:h-5" />, text: "Economic Empowerment" },
                { icon: <Building className="text-yingor-primary w-4 h-4 sm:w-5 sm:h-5" />, text: "Business Growth" },
                { icon: <TrendingUp className="text-yingor-primary w-4 h-4 sm:w-5 sm:h-5" />, text: "Community Development" },
                { icon: <Award className="text-yingor-primary w-4 h-4 sm:w-5 sm:h-5" />, text: "Skills Recognition" }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-3 sm:p-4 flex items-center">
                  <div className="mr-3 sm:mr-4 flex-shrink-0">{item.icon}</div>
                  <span className="text-gray-800 font-medium text-xs sm:text-sm">{item.text}</span>
                </div>
              ))}
            </div>
            
            <p className="text-xs sm:text-sm text-center mt-4 sm:mt-6">
              Transforming lives and building<br />stronger communities across Ghana
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductPlatform;
