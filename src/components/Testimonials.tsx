import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    content: "L'équipe a créé une application qui a dépassé toutes nos attentes. Leur attention aux détails et leur expertise technique ont été impressionnantes.",
    image: "https://img.freepik.com/free-photo/collage-customer-experience-concept_23-2149367139.jpg?ga=GA1.1.1809202442.1705419947&semt=ais_hybrid"
  },
  {
    content: "Professionnalisme, réactivité et qualité caractérisent cette agence, qui a transformé notre idée en une application mobile performante.",
    image: "https://img.freepik.com/premium-photo/customer-satisfaction-survey-concept-users-rate-service-experiences-online-application-customers-can-evaluate-quality-service-leading-business-reputation-rating_1226545-1003.jpg?ga=GA1.1.1809202442.1705419947&semt=ais_hybrid"
  },
  {
    content: "Leur approche méthodique et leur communication claire ont rendu le processus de développement sans stress. Le résultat final est un site web qui génère des résultats concrets",
    image: "https://img.freepik.com/premium-photo/firstclass-service-quality-assurance-warranty-foundation-iso-certification-concept-foundation-satisfaction-service-experience-exhibition-foundation-production_808398-340.jpg?ga=GA1.1.1809202442.1705419947&semt=ais_hybrid"
  }
];

const Testimonials = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Animation for the section title and subtitle
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

    // Animation for the testimonial cards
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { 
          opacity: 0, 
          y: 50,
          scale: 0.95
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 0.8, 
          ease: "power3.out",
          delay: 0.3 + index * 0.2, // Staggered delay
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none"
          }
        }
      );
      
      // Hover animations
      gsap.set(card, { clearProps: "all" }); // Clear all props after initial animation
      
      // Quote icon animation
      const quoteIcon = card.querySelector(".quote-icon");
      const cardContent = card.querySelector(".card-content");
      const cardImage = card.querySelector(".card-image");
      
      card.addEventListener("mouseenter", () => {
        gsap.to(card, { y: -10, duration: 0.3, ease: "power2.out" });
        gsap.to(quoteIcon, { scale: 1.2, rotate: 10, opacity: 0.4, duration: 0.4 });
        gsap.to(cardContent, { y: -5, duration: 0.3 });
        gsap.to(cardImage, { scale: 1.05, duration: 0.4 });
      });
      
      card.addEventListener("mouseleave", () => {
        gsap.to(card, { y: 0, duration: 0.5, ease: "power2.out" });
        gsap.to(quoteIcon, { scale: 1, rotate: 0, opacity: 0.2, duration: 0.4 });
        gsap.to(cardContent, { y: 0, duration: 0.3 });
        gsap.to(cardImage, { scale: 1, duration: 0.4 });
      });
    });

    return () => {
      // Clean up ScrollTrigger
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      id="testimonials" 
      className="py-16 md:py-24 bg-gray-50 overflow-hidden"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            ref={titleRef}
          >
            Ce que disent nos clients
          </h2>
          <p 
            className="text-xl text-gray-600"
            ref={subtitleRef}
          >
            Nous sommes fiers d'aider nos clients à réussir dans leur transformation numérique.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 w-full max-w-9xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border border-gray-200 transition-shadow cursor-pointer"
              ref={el => cardsRef.current[index] = el}
            >
              <CardContent className="p-6 pt-8 flex flex-col items-center text-center card-content">
                <Quote className="h-10 w-10 text-blue-500 mb-6 opacity-20 quote-icon" />
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex flex-col items-center overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    className="w-full h-48 object-cover border-2 border-white shadow-sm opacity-95 card-image" 
                    alt="Témoignage client"
                  />
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