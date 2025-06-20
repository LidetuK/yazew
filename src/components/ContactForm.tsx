import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Crown, Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleServiceChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message || !formData.service) {
      toast({
        title: "Incomplete Form",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
        const EMAILJS_SERVICE_ID = "service_i3h66xg";
        const EMAILJS_TEMPLATE_ID = "template_fgq53nh";
        const EMAILJS_PUBLIC_KEY = "wQmcZvoOqTAhGnRZ3";
        
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          service: formData.service,
          message: formData.message,
          to_name: 'Yingor Financial Team',
          reply_to: formData.email
        };
        
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY
        );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. A member of our Royal Council will respond shortly.",
        variant: "default",
      });
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <Card className="max-w-3xl mx-auto bg-yingor-primary text-white shadow-2xl rounded-2xl border-none">
          <CardHeader className="text-center">
            <div className="mx-auto bg-yingor-gold rounded-full p-3 w-fit mb-4">
              <Crown className="h-8 w-8 text-yingor-primary" />
            </div>
            <CardTitle className="text-3xl md:text-4xl font-bold text-white">Contact the Royal Council</CardTitle>
            <CardDescription className="text-gray-300 text-base md:text-lg pt-2">
              We are here to assist with your financial needs. Please complete the form below to get in touch.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required 
                  className="bg-yingor-secondary border-gray-600 placeholder-gray-400 text-white focus:ring-yingor-gold" />
                <Input name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required 
                  className="bg-yingor-secondary border-gray-600 placeholder-gray-400 text-white focus:ring-yingor-gold" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="phone" placeholder="Phone Number (Optional)" value={formData.phone} onChange={handleChange} 
                  className="bg-yingor-secondary border-gray-600 placeholder-gray-400 text-white focus:ring-yingor-gold" />
                <Select onValueChange={handleServiceChange} value={formData.service}>
                  <SelectTrigger className="bg-yingor-secondary border-gray-600 placeholder-gray-400 text-white focus:ring-yingor-gold">
                    <SelectValue placeholder="Select a Royal Service" />
                  </SelectTrigger>
                  <SelectContent className="bg-yingor-primary border-gray-600 text-white">
                    <SelectItem value="EKEKEVOR Initiative">EKEKEVOR Initiative</SelectItem>
                    <SelectItem value="Youth Enterprise Fund">Youth Enterprise Fund</SelectItem>
                    <SelectItem value="Community Banking">Community Banking</SelectItem>
                    <SelectItem value="Royal Investment Programs">Royal Investment Programs</SelectItem>
                    <SelectItem value="Other Inquiry">Other Inquiry</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required rows={5}
                className="bg-yingor-secondary border-gray-600 placeholder-gray-400 text-white focus:ring-yingor-gold" />
              <Button type="submit" disabled={isSubmitting} className="w-full bg-yingor-gold text-yingor-primary font-bold text-lg py-3 hover:bg-yellow-500 transition-all duration-300 ease-in-out transform hover:scale-105 rounded-lg flex items-center justify-center gap-2">
                {isSubmitting ? 'Sending...' : 'Send Message to the Kingdom'}
                {!isSubmitting && <Send className="h-5 w-5" />}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;
