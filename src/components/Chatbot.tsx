import React, { useEffect, useRef } from 'react';
import QuoteForm from '@/components/QuoteForm';
import { cn } from '@/lib/utils';
import { FileText, Clock, Users, MessageSquare, PenTool, CheckCircle, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Enregistrer le plugin ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    icon: <FileText className="h-5 w-5 text-white" />,
    title: "1. Remplissez le formulaire",
    description: "Remplissez le formulaire de demande de devis ci-dessus."
  },
  {
    icon: <MessageSquare className="h-5 w-5 text-white" />,
    title: "2. Discussion préliminaire",
    description: "Notre équipe vous contacte pour discuter de vos besoins et clarifier les détails de votre projet."
  },
  {
    icon: <PenTool className="h-5 w-5 text-white" />,
    title: "3. Élaboration du devis",
    description: "Nous préparons un devis détaillé et personnalisé en fonction de vos exigences spécifiques."
  },
  {
    icon: <CheckCircle className="h-5 w-5 text-white" />,
    title: "4. Support et ajustements",
    description: "Nous sommes là pour répondre à vos questions et ajuster le devis si nécessaire."
  },
  {
    icon: <Rocket className="h-5 w-5 text-white" />,
    title: "5. Démarrage du projet",
    description: "Une fois le devis approuvé, nous commençons immédiatement à travailler sur votre projet."
  },
];

const Chatbot = () => {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const processRef = useRef(null);
  const timelineRef = useRef(null);
  const circlesRef = useRef([]);
  const stepContainersRef = useRef([]);

  // Effet pour les animations au chargement
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    // Configuration de GSAP pour le processus
    timelineRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: processRef.current,
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Animation pour la ligne verticale
    const verticalLine = document.querySelector('.vertical-line');
    if (verticalLine) {
      timelineRef.current.fromTo(
        verticalLine,
        { scaleY: 0, transformOrigin: "top" },
        { scaleY: 1, duration: 1.5, ease: "power2.out" }
      );
    }

    // Animation pour chaque étape
    stepContainersRef.current.forEach((container, index) => {
      if (container) {
        timelineRef.current.fromTo(
          container,
          { opacity: 0, x: index % 2 === 0 ? -30 : 30 },
          { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
          "-=0.6"
        );
      }
    });

    // Animation pour les cercles
    circlesRef.current.forEach((circle, index) => {
      if (circle) {
        const circleElements = circle.querySelectorAll('.circle');
        timelineRef.current.fromTo(
          circleElements,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" },
          "-=0.4"
        );
      }
    });
    
    return () => {
      observer.disconnect();
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      let triggers = ScrollTrigger.getAll();
      triggers.forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section  
        id="chatbot"
        ref={heroRef}
        className="pt-16 md:pt-32 pb-8 md:pb-16 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-100 -z-10"></div>
        <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-blue-100/50 blur-3xl -top-32 md:-top-64 -right-32 md:-right-64 -z-10 animate-pulse-soft"></div>
        <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-blue-100/50 blur-3xl -bottom-32 md:-bottom-64 -left-32 md:-left-64 -z-10 animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto animate-fade-up">
            <div className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 animate-blur-in">
              Obtenez un devis personnalisé
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6 text-slate-900">
              Demandez un <span className="text-blue-500">devis</span> pour votre <span className="text-slate-900">projet</span>
            </h1>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-2 md:mt-4 mb-8 md:mb-12 animate-fade-in" style={{ animationDelay: '300ms' }}>
              {[
                { icon: <FileText className="h-4 md:h-5 w-4 md:w-5" />, text: "Devis détaillé" },
                { icon: <Clock className="h-4 md:h-5 w-4 md:w-5" />, text: "Réponse rapide" },
                { icon: <Users className="h-4 md:h-5 w-4 md:w-5" />, text: "Expertise technique" },
                { icon: <MessageSquare className="h-4 md:h-5 w-4 md:w-5" />, text: "Conseil personnalisé" },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground bg-white/80 backdrop-blur-sm rounded-full px-3 md:px-4 py-1.5 md:py-2 shadow-sm"
                >
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })} 
              className={cn(
                "flex items-center gap-2 text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors",
                "animate-bounce"
              )}
              style={{ animationDelay: '1s', animationIterationCount: 3 }}
            >
              <span>Remplir le formulaire</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="w-4 h-4 md:w-5 md:h-5"
              >
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Section combinée Form + Process */}
      <section 
        ref={formRef} 
        id="form-process-section" 
        className="py-8 md:py-16 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white -z-10"></div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Étapes du processus - Passe en mode empilé sur mobile */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1 mt-8 lg:mt-0">
              <div 
                id="processus" 
                ref={processRef}
                className="py-6 md:py-8 px-4 md:px-8 relative bg-image-overlay overflow-hidden rounded-xl md:rounded-2xl h-full"
                style={{
                  backgroundImage: 'url("https://img.freepik.com/premium-photo/businessman-holds-hologram-stacking-as-step-by-step-ladder-business-growth-personnel-progress-following-steps-correctly-traveling-stable-destination-success-finance-investment_661047-7853.jpg?ga=GA1.1.1809202442.1705419947&semt=ais_hybrid")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative'
                }}
              >
                {/* Overlay pour réduire l'opacité de l'image d'arrière-plan */}
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl md:rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-6 md:mb-8">
                    <span className="inline-block text-xs font-medium bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full mb-2 md:mb-3">
                      Notre processus
                    </span>
                    <h2 className="text-xl md:text-3xl font-semibold mb-2 md:mb-4 text-white">
                      <span className="text-blue-400">Comment</span> nous travaillons
                    </h2>
                    <p className="text-white text-xs md:text-sm max-w-xl mx-auto">
                      Un processus simple et transparent pour transformer votre idée en réalité, étape par étape.
                    </p>
                  </div>

                  <div className="py-4 relative">
                    {/* Ligne verticale avec animation GSAP - Masquée sur mobile, visible sur desktop */}
                    <div className="vertical-line absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-blue-400 hidden md:block"></div>

                    <div className="space-y-6 md:space-y-8 relative">
                      {steps.map((step, index) => (
                        <div
                          key={index}
                          ref={el => stepContainersRef.current[index] = el}
                          className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-3 items-center`}
                        >
                          {/* Version mobile: toujours la même structure */}
                          <div className="flex md:hidden items-center gap-3 w-full">
                            <div 
                              ref={el => circlesRef.current[index] = el}
                              className="relative flex items-center justify-center flex-shrink-0"
                            >
                              {/* Cercle principal avec icon */}
                              <div className="circle w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center z-10 shadow-md">
                                {step.icon}
                              </div>
                              {/* Cercles animés */}
                              <div className="circle absolute w-10 h-10 rounded-full bg-blue-400/70"></div>
                              <div className="circle absolute w-12 h-12 rounded-full bg-blue-300/50"></div>
                              <div className="circle absolute w-14 h-14 rounded-full bg-blue-200/30"></div>
                            </div>
                            
                            <div className="bg-white bg-opacity-80 rounded-lg p-2.5 shadow-md w-full">
                              <h3 className="text-sm font-semibold mb-1">{step.title}</h3>
                              <p className="text-gray-700 text-xs">{step.description}</p>
                            </div>
                          </div>
                          
                          {/* Version desktop: alternance gauche/droite */}
                          <div className={`hidden md:block w-full md:w-2/5 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} bg-white bg-opacity-80 rounded-xl p-3 shadow-md`}>
                            <h3 className="text-sm font-semibold mb-1">{step.title}</h3>
                            <p className="text-gray-700 text-xs">{step.description}</p>
                          </div>

                          <div 
                            className="hidden md:flex relative items-center justify-center"
                            ref={el => circlesRef.current[index] = el}
                          >
                            {/* Cercle principal avec icon */}
                            <div className="circle w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center z-10 shadow-md">
                              {step.icon}
                            </div>
                            {/* Cercles animés */}
                            <div className="circle absolute w-12 h-12 rounded-full bg-blue-400/70"></div>
                            <div className="circle absolute w-14 h-14 rounded-full bg-blue-300/50"></div>
                            <div className="circle absolute w-16 h-16 rounded-full bg-blue-200/30"></div>
                          </div>

                          <div className={`hidden md:block w-full md:w-2/5 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                            {/* Espace réservé pour garder la symétrie */}
                            &nbsp;
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire - Affichée en premier sur mobile */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="glass-card rounded-xl md:rounded-2xl p-5 md:p-8 shadow-lg h-full">
                <div className="text-center mb-6 md:mb-10 animate-fade-up">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">Remplissez le <span className="text-blue-500">formulaire</span></h2>
                  <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
                    Partagez les détails de votre projet avec nous et recevez un devis adapté à vos besoins.
                  </p>
                </div>
                
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chatbot;