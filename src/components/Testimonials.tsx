import React, { useEffect, useRef, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Smartphone, Globe } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    content: "L'équipe a créé une application mobile qui a dépassé toutes nos attentes. Leur attention aux détails et leur expertise technique ont été impressionnantes.",
    image: "https://img.freepik.com/free-photo/collage-customer-experience-concept_23-2149367139.jpg?ga=GA1.1.1809202442.1705419947&semt=ais_hybrid",
    type: "mobile",
    format: "Application Mobile"
  },
  {
    content: "Notre site web professionnel a transformé notre présence en ligne. Une stratégie numérique qui génère des résultats concrets et attire de nouveaux clients.",
    image: "https://img.freepik.com/premium-photo/customer-satisfaction-survey-concept-users-rate-service-experiences-online-application-customers-can-evaluate-quality-service-leading-business-reputation-rating_1226545-1003.jpg?ga=GA1.1.1809202442.1705419947&semt=ais_hybrid",
    type: "web",
    format: "Site Web Professionnel"
  },
  {
    content: "Une solution digitale complète et innovante qui combine application mobile et présence web, offrant une expérience utilisateur fluide, cohérente et optimisée.",
    image: "https://img.freepik.com/premium-photo/firstclass-service-quality-assurance-warranty-foundation-iso-certification-concept-foundation-satisfaction-service-experience-exhibition-foundation-production_808398-340.jpg?ga=GA1.1.1809202442.1705419947&semt=ais_hybrid",
    type: "multi",
    format: "Solution Digitale Complète"
  }
];

const Testimonials = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);

  const setCardRef = useCallback((el, index) => {
    cardsRef.current[index] = el;
  }, []);

  useEffect(() => {
    const headerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none"
      }
    });

    headerTimeline
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      );

    // Card animations and interactions
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50, scale: 0.95 },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 0.8, 
          ease: "power3.out",
          delay: 0.3 + index * 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none"
          }
        }
      );
      
      // Hover and interaction effects
      const typeIcon = card.querySelector(".type-icon");
      const cardContent = card.querySelector(".card-content");
      const cardImage = card.querySelector(".card-image");
      
      card.addEventListener("mouseenter", () => {
        gsap.to(card, { y: -10, duration: 0.3, ease: "power2.out" });
        gsap.to(typeIcon, { scale: 1.2, rotate: 10, opacity: 0.7, duration: 0.4 });
        gsap.to(cardContent, { y: -5, duration: 0.3 });
        gsap.to(cardImage, { scale: 1.05, duration: 0.4 });
      });
      
      card.addEventListener("mouseleave", () => {
        gsap.to(card, { y: 0, duration: 0.5, ease: "power2.out" });
        gsap.to(typeIcon, { scale: 1, rotate: 0, opacity: 0.5, duration: 0.4 });
        gsap.to(cardContent, { y: 0, duration: 0.3 });
        gsap.to(cardImage, { scale: 1, duration: 0.4 });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Fonction pour sélectionner l'icône en fonction du type
  const getTypeIcon = (type) => {
    switch(type) {
      case 'mobile':
        return <Smartphone className="h-8 w-8 text-blue-500 type-icon" />;
      case 'web':
        return <Globe className="h-8 w-8 text-green-500 type-icon" />;
      case 'multi':
        return (
          <div className="flex items-center gap-2">
            <Smartphone className="h-6 w-6 text-blue-500" />
            <Globe className="h-6 w-6 text-green-500" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section 
      id="testimonials" 
      className="py-12 sm:py-16 md:py-24 bg-gray-50 overflow-hidden"
      ref={sectionRef}
      aria-label="Témoignages de nos clients"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
            ref={titleRef}
          >
            Nos Solutions Digitales en Action
          </h2>
          <p 
            className="text-base sm:text-lg md:text-xl text-gray-600"
            ref={subtitleRef}
          >
            Des solutions personnalisées qui transforment vos défis digitaux en opportunités de croissance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index} 
              className="border border-gray-200 transition-all duration-300 
                         hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              ref={el => setCardRef(el, index)}
            >
              <CardContent className="p-4 sm:p-6 pt-6 sm:pt-8 flex flex-col items-center text-center card-content">
                <div className="mb-3 sm:mb-4 opacity-50">
                  {getTypeIcon(testimonial.type)}
                </div>
                
                <Quote className="h-8 w-8 sm:h-10 sm:w-10 text-blue-500 mb-3 sm:mb-4 opacity-20" aria-hidden="true" />
                
                <p className="text-gray-700 mb-4 sm:mb-6 italic text-sm sm:text-base line-clamp-4">
                  "{testimonial.content}"
                </p>
                
                <div className="flex flex-col items-center w-full">
                  <div className="mb-2 font-semibold text-xs sm:text-sm text-gray-600">
                    {testimonial.format}
                  </div>
                  <div className="w-full h-36 sm:h-48 lg:h-56 overflow-hidden rounded-md">
                    <img
                      src={testimonial.image}
                      alt="Témoignage client"
                      className="w-full h-full object-cover border-2 border-white shadow-sm opacity-90 card-image"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;