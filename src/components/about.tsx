import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Server, Users, Briefcase, Star, Globe, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  // GSAP animations
  useLayoutEffect(() => {
    // Reduced animation intensity and duration
    const heroTimeline = gsap.timeline();
    heroTimeline.from(heroRef.current?.querySelector("h1"), {
      opacity: 0,
      y: 20, // Reduced movement
      duration: 0.7, // Shortened duration
      ease: "power2.out"
    });
    heroTimeline.from(heroRef.current?.querySelector("p"), {
      opacity: 0,
      y: 15, // Reduced movement
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4");
    heroTimeline.from(heroRef.current?.querySelectorAll("a"), {
      opacity: 0,
      y: 10, // Reduced movement
      stagger: 0.1, // Reduced stagger
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.3");

    // History section animation with reduced intensity
    gsap.from(historyRef.current?.querySelector("h2"), {
      scrollTrigger: {
        trigger: historyRef.current?.querySelector("h2"),
        start: "top 85%", // Slightly adjusted trigger
      },
      opacity: 0,
      y: 20, // Reduced movement
      duration: 0.6,
      ease: "power2.out"
    });
    
    gsap.from(historyRef.current?.querySelector(".bg-white"), {
      scrollTrigger: {
        trigger: historyRef.current?.querySelector(".bg-white"),
        start: "top 80%", // Adjusted trigger
      },
      opacity: 0,
      x: 50, // Reduced movement
      duration: 0.8,
      ease: "power2.out"
    });
    
    gsap.from(historyRef.current?.querySelector(".grid > div:first-child"), {
      scrollTrigger: {
        trigger: historyRef.current?.querySelector(".grid > div:first-child"),
        start: "top 80%", // Adjusted trigger
      },
      opacity: 0,
      x: -50, // Reduced movement
      duration: 0.8,
      ease: "power2.out"
    });

    // Values section animation
    gsap.from(valuesRef.current?.querySelector("h2"), {
      scrollTrigger: {
        trigger: valuesRef.current?.querySelector("h2"),
        start: "top 85%", // Adjusted trigger
      },
      opacity: 0,
      y: 20, // Reduced movement
      duration: 0.6,
      ease: "power2.out"
    });
    
    // Value cards staggered animation with reduced intensity
    cardRefs.current.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 90%", // More lenient trigger
        },
        opacity: 0,
        y: 30, // Reduced movement
        duration: 0.5,
        delay: index * 0.1, // Reduced delay
        ease: "power2.out"
      });
    });
    
    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Function to add cards to refs
  const addToCardRefs = (el: HTMLDivElement) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section - Responsive and Mobile-Friendly */}

      <div ref={heroRef} className="bg-gradient-to-b from-blue-400 to-indigo-700 text-white py-20 opacity-55 min-h-[300px] sm:min-h-[400px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">À propos de YANSOFT group</h1>
            <p className="text-base sm:text-xl opacity-90 mb-6 sm:mb-8">
            Nous concevons des solutions digitales intelligentes pour propulser votre
            entreprise.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/services" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-300 text-center">
                Découvrir nos services
              </Link>
              <Link to="/contact" className="border border-white hover:bg-white/10 font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-300 text-center">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Notre Histoire - Responsive Layout */}
      <section ref={historyRef} className="py-12 sm:py-16" id="about">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Notre Histoire</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-gray-600">
            Explorez le voyage de YANSOFT GROUP, une entreprise passionnée qui a su allier expertise et innovation pour se positionner comme un leader dans le développement logiciel au Maroc.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Présentation de l'agence</h3>
              <div className="space-y-4 text-sm sm:text-base">
                <p className="text-gray-700">
                  <span className="font-semibold">YANSOFT group est une agence de développement de logiciels et d'hébergement
                  web basée à Casablanca, au cœur de l'innovation technologique.</span> . Forte d'une
équipe de professionnels passionnés et hautement qualifiés, notre mission est de
transformer vos défis numériques en opportunités grâce à des solutions surmesure et performantes.
                </p>
                <p className="text-gray-700">
                Nous comprenons que chaque projet est unique. C’est pourquoi nous mettons un
                point d’honneur à travailler en étroite collaboration avec nos clients pour saisir
                leurs besoins spécifiques et leur proposer des solutions parfaitement adaptées.
                Notre expertise couvre un large éventail de services, incluant le développement de
                logiciels personnalisés, la création de sites web intuitifs, l’intégration de solutions
                tierces, l’hébergement sécurisé et la gestion des noms de domaine.
                </p>
                <p className="text-gray-700">
                En tant que partenaires stratégiques de nos clients, nous allons au-delà de la
simple prestation technique. Nous offrons également des services de conseil afin
d’optimiser vos investissements technologiques et maximiser la rentabilité de vos
projets. Notre objectif est simple : vous accompagner à chaque étape pour
garantir le succès de vos initiatives digitales.
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Chez YANSOFT group</span> nous allions innovation, excellence et réactivité. Nous nous
engageons à offrir des solutions de haute qualité, au service de vos ambitions, à
des prix compétitifs. Ensemble, donnons vie à vos idées et propulsons votre
entreprise vers l'avenir numérique.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg relative order-1 md:order-2">
              <div className="absolute -top-6 sm:-top-10 -left-6 sm:-left-10 w-12 sm:w-20 h-12 sm:h-20 bg-blue-600 rounded-full flex items-center justify-center text-white">
                <Star className="w-6 sm:w-10 h-6 sm:h-10" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Notre mission</h4>
              <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
              Notre mission est de permettre aux entreprises de tirer parti de la technologie
              pour atteindre leurs objectifs stratégiques. En tant que partenaire technologique
              de confiance, nous nous engageons à fournir des solutions logicielles et
              numériques de haute qualité, tout en assurant un accompagnement constant
              pour garantir la réussite des projets de nos clients, quels que soient leur secteur
              d'activité ou leurs défis spécifiques.
              </p>
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Notre vision</h4>
              <p className="text-gray-700 text-sm sm:text-base">
              Être le leader du développement de solutions numériques sur-mesure et de
              services d'hébergement au Maroc et à l'international. Nous aspirons à transformer
              le paysage technologique des entreprises en offrant des solutions innovantes,
              fiables et parfaitement adaptées aux besoins de chaque client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs - Responsive Grid */}
      <section ref={valuesRef} className="py-12 sm:py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Nos Valeurs</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-gray-600">
              Les principes qui guident notre travail au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: Users, title: "Collaboration", description: "Nous travaillons main dans la main avec nos clients pour atteindre des objectifs communs" },
              { icon: Star, title: "Excellence", description: "Nous visons l'excellence dans chaque ligne de code et chaque interaction avec le client" },
              { icon: Globe, title: "Innovation", description: "Nous explorons constamment de nouvelles technologies pour offrir des solutions modernes" },
              { icon: Briefcase, title: "Intégrité", description: "Nous agissons avec honnêteté, transparence et éthique dans toutes nos activités" }
            ].map((value, index) => (
              <div 
                key={value.title} 
                ref={addToCardRefs} 
                className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <value.icon className="w-6 sm:w-8 h-6 sm:h-8 text-blue-600" />
                </div>
                <h4 className="text-base sm:text-lg font-bold mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;