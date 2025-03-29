import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { toast } from "sonner";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Team = () => {
  const headerRef = useRef(null);
  const benefitsRef = useRef(null);
  const teamMembersRef = useRef(null);
  const contactRef = useRef(null);
  
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Page intro animation
    const tl = gsap.timeline();
    
    tl.fromTo(
      ".page-title",
      { x: -50, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 0.8,
        ease: "power3.out",
      }
    );
    
    tl.fromTo(
      ".page-description p",
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.7,
        stagger: 0.2,
        ease: "power2.out",
      },
      "-=0.4"
    );
    
    tl.fromTo(
      ".method-card",
      { y: 40, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        ease: "back.out(1.4)",
      },
      "-=0.3"
    );
    
    // Method steps animation
    tl.fromTo(
      ".method-step",
      { x: -20, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 0.5,
        stagger: 0.1,
        ease: "power1.out",
      },
      "-=0.5"
    );
    
    // Benefits section animation
    gsap.fromTo(
      ".benefit-title",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top 80%",
        }
      }
    );
    
    gsap.fromTo(
      ".benefit-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top 70%",
        }
      }
    );
    
    // Team members animation
    gsap.fromTo(
      ".team-member",
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: teamMembersRef.current,
          start: "top 80%",
        }
      }
    );
    
    // Contact form animation
    gsap.fromTo(
      ".contact-element",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
        }
      }
    );
    
    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Votre message a été envoyé avec succès!");
    
    // Add some animation to the form submission
    gsap.fromTo(
      ".form-container",
      { y: 0 },
      { 
        y: 10, 
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut"
      }
    );
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Header Section */}
        <section ref={headerRef} className="container mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            <div className="w-full lg:w-2/3 page-description">
              <h1 className="page-title text-4xl font-bold mb-6 text-gray-900 flex items-center">
                <span className="inline-block w-8 h-[2px] bg-primary mr-4"></span>
                Notre équipe
              </h1>
              
              <p className="text-lg text-gray-700 mb-6">
              Chez YANSOFT group, notre équipe se distingue par son expertise et son
engagement envers l'excellence. Composée de professionnels talentueux et
expérimentés dans divers domaines du développement logiciel, de l’ingénierie
informatique et du digital, chaque membre contribue de manière significative à la
réussite de nos projets. Grâce à cette diversité de compétences, nous sommes en
mesure de relever des défis techniques complexes et de proposer des solutions
innovantes, adaptées aux besoins spécifiques de nos clients
              </p>
              
              <p className="text-lg text-gray-700 mb-6">
              Notre approche collaborative et notre culture de l'innovation permettent à chaque
membre de l’équipe d’exprimer sa créativité et de participer activement à la
conception de solutions sur-mesure. Nous plaçons la satisfaction de nos clients au
cœur de notre démarche et nous nous engageons à les accompagner avec
professionnalisme et rigueur à chaque étape de leur projet, pour garantir la
réussite et la pérennité de leurs initiatives numériques.
              </p>
              
              <p className="text-lg text-gray-700">
                Grâce à notre approche centrée sur l'humain et notre engagement envers l'excellence technique, 
                nous transformons les idées en solutions concrètes qui répondent parfaitement aux besoins de nos clients.
              </p>
            </div>
            
            <Card className="method-card w-full lg:w-1/3 bg-primary text-white p-8 rounded-2xl shadow-xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600 rounded-full opacity-20 -mr-10 -mt-10"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-800 rounded-full opacity-10 -ml-10 -mb-10"></div>
              
              <h2 className="text-2xl font-bold mb-6 relative z-10">Notre méthode de travail</h2>
              <div className="space-y-5 relative z-10">
                <div className="method-step flex items-start gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <span className="font-bold text-white">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Analyse des besoins</h3>
                    <p className="text-white/80 text-sm">Nous étudions attentivement chaque demande pour comprendre vos objectifs</p>
                  </div>
                </div>
                
                <div className="method-step flex items-start gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <span className="font-bold text-white">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Conception sur mesure</h3>
                    <p className="text-white/80 text-sm">Nos experts élaborent des solutions adaptées à vos exigences spécifiques</p>
                  </div>
                </div>
                
                <div className="method-step flex items-start gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <span className="font-bold text-white">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Développement agile</h3>
                    <p className="text-white/80 text-sm">Nous travaillons par itérations avec des points réguliers</p>
                  </div>
                </div>
                
                <div className="method-step flex items-start gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <span className="font-bold text-white">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Support continu</h3>
                    <p className="text-white/80 text-sm">Nous restons à vos côtés après la livraison pour garantir votre satisfaction</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section ref={benefitsRef} className="py-20 px-6 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="benefit-title text-3xl font-bold mb-12 text-center text-gray-900">
              Pourquoi travailler avec nous ?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="benefit-card bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M7.5 12L10.5 15L16.5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Expertise technique</h3>
                <p className="text-gray-700">Notre équipe possède une expertise technique approfondie dans divers domaines du développement informatique.</p>
              </div>
              
              <div className="benefit-card bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                    <path d="M4 12H20M12 4V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Innovation constante</h3>
                <p className="text-gray-700">Nous restons à la pointe des dernières technologies et méthodologies pour offrir des solutions innovantes.</p>
              </div>
              
              <div className="benefit-card bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                    <path d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M3 21C3.95728 17.9237 6.41998 17 12 17C17.58 17 20.0427 17.9237 21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Approche collaborative</h3>
                <p className="text-gray-700">Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins et y répondre efficacement.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Team;