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
    // Hero section animation
    const heroTimeline = gsap.timeline();
    heroTimeline.from(heroRef.current?.querySelector("h1"), {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out"
    });
    heroTimeline.from(heroRef.current?.querySelector("p"), {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.5");
    heroTimeline.from(heroRef.current?.querySelectorAll("a"), {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.4");

    // History section animation
    gsap.from(historyRef.current?.querySelector("h2"), {
      scrollTrigger: {
        trigger: historyRef.current?.querySelector("h2"),
        start: "top 80%",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out"
    });
    
    gsap.from(historyRef.current?.querySelector(".bg-white"), {
      scrollTrigger: {
        trigger: historyRef.current?.querySelector(".bg-white"),
        start: "top 75%",
      },
      opacity: 0,
      x: 100,
      duration: 1,
      ease: "power3.out"
    });
    
    gsap.from(historyRef.current?.querySelector(".grid > div:first-child"), {
      scrollTrigger: {
        trigger: historyRef.current?.querySelector(".grid > div:first-child"),
        start: "top 75%",
      },
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "power3.out"
    });

    // Values section animation
    gsap.from(valuesRef.current?.querySelector("h2"), {
      scrollTrigger: {
        trigger: valuesRef.current?.querySelector("h2"),
        start: "top 80%",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out"
    });
    
    // Value cards staggered animation
    cardRefs.current.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
        opacity: 0,
        y: 50,
        duration: 0.6,
        delay: index * 0.15,
        ease: "power3.out"
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
      
      {/* Hero Section */}
      <div ref={heroRef}  className="bg-gradient-to-b from-blue-400 to-indigo-700 text-white py-20 opacity-55 min-h-[400px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">À propos de YANSOFT</h1>
            <p className="text-xl opacity-90 mb-8">
              Nous transformons vos idées en solutions numériques innovantes et performantes
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/services" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                Découvrir nos services
              </Link>
              <Link to="/contact" className="border border-white hover:bg-white/10 font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Notre Histoire */}
      <section ref={historyRef} className="py-16" id="about">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Histoire</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Découvrez l'histoire de YANSOFT et comment nous sommes devenus un acteur majeur du développement logiciel au Maroc
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Présentation de l'agence</h3>
              <p className="text-gray-700 mb-6">
                <span className="font-semibold">YANSOFT est une agence de développement de logiciels et d'hébergement de sites web basée à Casablanca, Maroc.</span> Fondée en 2015, notre agence s'est rapidement fait un nom dans le secteur grâce à notre approche centrée sur le client et notre excellence technique.
              </p>
              <p className="text-gray-700 mb-6">
                Nous croyons que chaque entreprise est unique, c'est pourquoi nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins spécifiques et leur fournir des solutions personnalisées qui correspondent parfaitement à leurs objectifs commerciaux.
              </p>
              <p className="text-gray-700">
                Notre gamme de services comprend le développement de logiciels personnalisés, la création de sites web, l'intégration de solutions tierces, l'hébergement de sites web et la gestion de noms de domaine. Nous offrons également des services de conseil pour aider nos clients à tirer le meilleur parti de leurs investissements en technologie.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg relative">
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white">
                <Star className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold mb-4">Notre mission</h4>
              <p className="text-gray-700 mb-6">
                Notre mission est de fournir des solutions technologiques de qualité qui aident nos clients à prospérer dans l'économie numérique d'aujourd'hui. Nous nous engageons à offrir un service exceptionnel, une expertise technique approfondie et une valeur ajoutée tangible à chaque projet.
              </p>
              <h4 className="text-xl font-bold mb-4">Notre vision</h4>
              <p className="text-gray-700">
                Nous aspirons à devenir le partenaire technologique de référence pour les entreprises au Maroc et dans toute l'Afrique du Nord, en établissant de nouvelles normes d'excellence en matière de développement logiciel et de services d'hébergement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section ref={valuesRef} className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Valeurs</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Les principes qui guident notre travail au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div ref={addToCardRefs} className="bg-white p-6 rounded-lg shadow-md text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-bold mb-2">Collaboration</h4>
              <p className="text-gray-600">
                Nous travaillons main dans la main avec nos clients pour atteindre des objectifs communs
              </p>
            </div>

            <div ref={addToCardRefs} className="bg-white p-6 rounded-lg shadow-md text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-bold mb-2">Excellence</h4>
              <p className="text-gray-600">
                Nous visons l'excellence dans chaque ligne de code et chaque interaction avec le client
              </p>
            </div>

            <div ref={addToCardRefs} className="bg-white p-6 rounded-lg shadow-md text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-bold mb-2">Innovation</h4>
              <p className="text-gray-600">
                Nous explorons constamment de nouvelles technologies pour offrir des solutions modernes
              </p>
            </div>

            <div ref={addToCardRefs} className="bg-white p-6 rounded-lg shadow-md text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-bold mb-2">Intégrité</h4>
              <p className="text-gray-600">
                Nous agissons avec honnêteté, transparence et éthique dans toutes nos activités
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;