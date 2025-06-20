
import { ArrowRight, Linkedin, Crown, Shield, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const EMAILJS_SERVICE_ID = "service_i3h66xg";
      const EMAILJS_TEMPLATE_ID = "template_fgq53nh";
      const EMAILJS_PUBLIC_KEY = "wQmcZvoOqTAhGnRZ3";
      
      const templateParams = {
        from_name: "Website Subscriber",
        from_email: email,
        message: `New subscription request from the Yingor Financial website footer.`,
        to_name: 'Yingor Financial Team',
        reply_to: email
      };
      
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our royal financial updates.",
        variant: "default"
      });
      
      setEmail("");
    } catch (error) {
      console.error("Error sending subscription:", error);
      
      toast({
        title: "Error",
        description: "There was a problem subscribing. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="bg-yingor-primary text-white pt-16 pb-8 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-700">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Crown className="h-8 w-8 text-yingor-gold mr-3" />
              <h2 className="text-2xl font-bold text-white">Yingor Financial</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Royal Financial Services for Ghana - Empowering communities through innovative financial solutions rooted in traditional wisdom and modern excellence. Official platform of HRH Torgbi Kiti'Kata I of the Fifiawoto Meli Tsã'O Kingdom.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-yingor-gold" />
                <span>2,500+ Community Members</span>
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 mr-2 text-yingor-gold" />
                <span>50+ Active Projects</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2 text-yingor-gold" />
                <span>GHS 75M+ Economic Impact</span>
              </div>
              <div className="flex items-center">
                <Crown className="h-4 w-4 mr-2 text-yingor-gold" />
                <span>15 Regions Covered</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Kingdom Address:<br />
              Fifiawoto Meli Tsã'O Kingdom<br />
              Ghana
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/yingorfinancial/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-yingor-secondary flex items-center justify-center text-gray-300 transition-colors hover:bg-yingor-gold hover:text-yingor-primary"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Royal Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services/ekekevor" className="text-gray-300 hover:text-yingor-gold transition-colors">EKEKEVOR Initiative</Link></li>
              <li><Link to="/services/youth-enterprise" className="text-gray-300 hover:text-yingor-gold transition-colors">Youth Enterprise Fund</Link></li>
              <li><Link to="/services/community-banking" className="text-gray-300 hover:text-yingor-gold transition-colors">Community Banking</Link></li>
              <li><Link to="/services/royal-investment" className="text-gray-300 hover:text-yingor-gold transition-colors">Royal Investment Programs</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Join the Royal Vision</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Stay informed about our kingdom's prosperity initiatives and upcoming events.
            </p>
            <form className="space-y-4" onSubmit={handleSubscribe}>
              <div>
                <input 
                  type="email" 
                  placeholder="Your email for royal updates" 
                  className="w-full px-4 py-2 bg-yingor-secondary border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yingor-gold text-white placeholder-gray-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-yingor-gold text-yingor-primary font-semibold rounded-md hover:bg-yellow-500 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : (
                  <>
                    Subscribe to Royal Updates
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Yingor Financial - Royal Financial Services for Ghana. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-yingor-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-yingor-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
