import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

const Hero = () => {
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
  
  // Create refs for elements we want to animate
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const gradientTextRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonsRef = useRef(null);
  const techStackRef = useRef(null);
  const cardRef = useRef(null);
  const circleOneRef = useRef(null);
  const circleTwoRef = useRef(null);
  const servicesRef = useRef(null);

  const services = [
    {
      title: "Développement de Sites Web",
      icon: "🌐"
    },
    {
      title: "Marketing Digital",
      icon: "📈"
    },
    {
      title: "Automatisation Marketing",
      icon: "🤖"
    },
    {
      title: "Développement sur Mesure",
      icon: "🛠️"
    },
    {
      title: "Hébergement",
      icon: "🖥️"
    },
    {
      title: "Conseil et Accompagnement",
      icon: "🧑‍💼"
    },
    {
      title: "Intégration de Solutions Tierces",
      icon: "🔗"
    }
  ];

  useEffect(() => {
    // Initial animations when component mounts
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    // Animate the heading with text reveal
    tl.from(headingRef.current, { 
      y: 50, 
      opacity: 0, 
      duration: 1 
    });
    
    // Animate the paragraph
    tl.from(paragraphRef.current, { 
      y: 30, 
      opacity: 0, 
      duration: 0.8 
    }, "-=0.6");
    
    // Animate buttons
    tl.from(buttonsRef.current.children, { 
      y: 20, 
      opacity: 0, 
      duration: 0.6, 
      stagger: 0.2 
    }, "-=0.4");
    
    // Animate tech stack
    tl.from(techStackRef.current.children, { 
      y: 10, 
      opacity: 0, 
      duration: 0.4, 
      stagger: 0.1 
    }, "-=0.2");
    
    // Card animation
    tl.from(cardRef.current, { 
      scale: 0.9, 
      opacity: 0, 
      duration: 1 
    }, "-=1.2");
    
    // Circle animations
    tl.from([circleOneRef.current, circleTwoRef.current], { 
      scale: 0, 
      opacity: 0, 
      duration: 1, 
      stagger: 0.3,
      ease: "elastic.out(1, 0.8)" 
    }, "-=0.8");
    
    // Services list staggered animation
    tl.from(servicesRef.current.children, { 
      x: -20, 
      opacity: 0, 
      duration: 0.4, 
      stagger: 0.1 
    }, "-=0.6");
    
    // Continuous animation for the gradient text
    const gradientAnimation = gsap.timeline({
      repeat: -1,
      yoyo: true
    });
    
    // Pulsing effect for the gradient text
    gradientAnimation.to(gradientTextRef.current, {
      scale: 1.05,
      duration: 1.5,
      ease: "power1.inOut"
    });
    
    // Shift the gradient colors
    gradientAnimation.to(gradientTextRef.current, {
      backgroundImage: "linear-gradient(to right, #8a2be2, #4169e1)",
      duration: 3,
      ease: "none"
    }, 0);
    
    // Subtle letter spacing animation
    gradientAnimation.to(gradientTextRef.current, {
      letterSpacing: "0.03em",
      duration: 2,
      ease: "power2.inOut"
    }, 0);
    
    // Return to original gradient
    gradientAnimation.to(gradientTextRef.current, {
      backgroundImage: "linear-gradient(to right, var(--brand-blue), var(--brand-violet))",
      duration: 3,
      ease: "none"
    });
    
    // Scroll-triggered animations
    gsap.fromTo(
      heroRef.current,
      { backgroundColor: "rgba(255, 255, 255, 0)" },
      { 
        backgroundColor: "rgba(249, 250, 251, 1)", 
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom center",
          scrub: true
        }
      }
    );
    
    // Floating animation for the title
    gsap.to(headingRef.current, {
      y: "10px",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
    
    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gradientAnimation.kill();
    };
  }, []);

  return (
    <section ref={heroRef} id="hero" className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 ref={headingRef} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Solutions numériques{" "}
              <span 
                ref={gradientTextRef} 
                className="bg-gradient-to-r from-brand-blue to-brand-violet bg-clip-text text-transparent inline-block"
              >
                innovantes
              </span>
            </h1>
            <p ref={paragraphRef} className="text-xl text-gray-600 max-w-xl">
              Nous créons des applications web et mobiles sur mesure qui transforment votre vision en réalité numérique.
            </p>
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="#contact">
                  Démarrer un projet
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#services">
                  Découvrir nos services
                </a>
              </Button>
            </div>
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-3">Nos technologies préférées</p>
              <div ref={techStackRef} className="flex flex-wrap gap-4">
                <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">React</div>
                <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">React Native</div>
                <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">Node.js</div>
                <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">Flutter</div>
                <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">TypeScript</div>
              </div>
            </div>
          </div>
          <div className="relative lg:pl-10">
            <div ref={cardRef} className="relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-r from-brand-blue to-brand-violet p-1">
                <div className="bg-white p-8 rounded-t-xl flex flex-col items-center text-center">
                  <div className="mb-6 flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                        <Code className="h-6 w-6 text-brand-blue" />
                      </div>
                      <span className="text-sm font-medium">Web</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                        <Smartphone className="h-6 w-6 text-brand-violet" />
                      </div>
                      <span className="text-sm font-medium">Mobile</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">De l'idée au lancement</h3>
                  <p className="text-gray-600 mb-4">Des solutions adaptées à tous vos besoins</p>
                </div>
              </div>
              <div className="px-6 py-6">
                <div ref={servicesRef} className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-green-600 text-xs font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">{service.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Cercles décoratifs */}
              <div ref={circleOneRef} className="absolute -bottom-6 -right-6 w-64 h-64 bg-gray-100 rounded-full -z-10"></div>
              <div ref={circleTwoRef} className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;