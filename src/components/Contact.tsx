import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tel:'',
    societe: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  
  // Refs for animations
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const formCardRef = useRef(null);
  const formElementsRef = useRef([]);
  const contactCardsRef = useRef([]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Animate button while loading
    gsap.to(e.currentTarget.querySelector('button'), {
      scale: 0.95,
      duration: 0.2,
      yoyo: true,
      repeat: 3
    });
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
        duration: 5000,
      });
      setFormData({
        name: '',
        email: '',
        tel:'',
        societe: '',
        message: ''
      });
      
      // Success animation
      gsap.fromTo(
        formCardRef.current,
        { boxShadow: "0 0 0 rgba(74, 222, 128, 0)" },
        { 
          boxShadow: "0 0 20px rgba(74, 222, 128, 0.6), 0 0 0 rgba(74, 222, 128, 0)",
          duration: 1,
          ease: "power2.out"
        }
      );
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      details: "Parking lot, technopark Bd Dammam, Casablanca 20150"
    },
    {
      icon: Mail,
      title: "Email",
      details: "contact@yansoft.ma"
    },
    {
      icon: Phone,
      title: "Téléphone",
      details: "+212 703 116 111"
    }
  ];
  
  useEffect(() => {
    // Initial animations
    const tl = gsap.timeline();
    
    // Header animations
    tl.fromTo(
      titleRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
    
    tl.fromTo(
      subtitleRef.current,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    );
    
    // Form card animation
    tl.fromTo(
      formCardRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.4"
    );
    
    // Form elements staggered animation
    tl.fromTo(
      formElementsRef.current,
      { x: -20, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        stagger: 0.1, 
        duration: 0.5, 
        ease: "power2.out" 
      },
      "-=0.3"
    );
    
    // Contact cards animation with scroll trigger
    contactCardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { x: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse"
          },
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power2.out"
        }
      );
    });
    
    // Hover effects for form fields
    formElementsRef.current.forEach(el => {
      el.addEventListener('focus', () => {
        gsap.to(el, {
          boxShadow: "0 0 0 2px rgba(99, 102, 241, 0.4)",
          duration: 0.3
        });
      });
      
      el.addEventListener('blur', () => {
        gsap.to(el, {
          boxShadow: "none",
          duration: 0.3
        });
      });
    });
    
    // Clean up
    return () => {
      formElementsRef.current.forEach(el => {
        el.removeEventListener('focus', () => {});
        el.removeEventListener('blur', () => {});
      });
      
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <section ref={sectionRef} id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-4">Contactez-nous</h2>
          <p ref={subtitleRef} className="text-xl text-gray-600">
            Prêt à transformer votre idée en réalité ? Parlons de votre projet.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card ref={formCardRef} className="border border-gray-200 overflow-hidden">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Nom</label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="Votre nom" 
                        value={formData.name}
                        onChange={handleInputChange}
                        required 
                        ref={el => formElementsRef.current[0] = el}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="votre@email.com" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required 
                        ref={el => formElementsRef.current[1] = el}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className='space-y-2' >
                    <label htmlFor="societe" className="text-sm font-medium">Société</label>
                    <Input 
                      id="societe" 
                      name="societe" 
                      placeholder="Votre société" 
                      value={formData.societe}
                      onChange={handleInputChange}
                      required 
                      ref={el => formElementsRef.current[2] = el}
                    />
                    </div>
                    <div className='space-y-2' >
                      <label htmlFor="tel" className="text-sm font-medium">Téléphone</label>
                      <Input 
                        id="tel" 
                        name="tel" 
                        type="tel" 
                        placeholder="Votre téléphone" 
                        value={formData.tel}
                        onChange={handleInputChange}
                        required 
                        ref={el => formElementsRef.current[3] = el}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Votre message" 
                      rows={6} 
                      value={formData.message}
                      onChange={handleInputChange}
                      required 
                      ref={el => formElementsRef.current[4] = el}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full md:w-auto" 
                    disabled={isLoading}
                    ref={el => formElementsRef.current[5] = el}
                  >
                    {isLoading ? 'Envoi en cours...' : 'Envoyer le message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                ref={el => contactCardsRef.current[index] = el}
              >
                <CardContent className="p-6 flex items-start">
                  <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <info.icon className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">{info.title}</h3>
                    <p className="text-gray-600">{info.details}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;