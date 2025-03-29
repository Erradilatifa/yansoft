import { useEffect, useRef } from "react";
import { 
  Code, 
  Smartphone, 
  Globe, 
  ShoppingCart, 
  BarChart, 
  Database, 
  Layers, 
  RefreshCw 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const data = {
    description: "Nous créons des sites web modernes, performants et adaptés à vos besoins, en mettant l'accent sur l'expérience utilisateur, la réactivité mobile et une conception esthétique. Chaque projet est unique, et nous nous assurons qu'il soit optimisé pour le référencement et les conversions.",
    color: "blue"
};

const services = [
  {
    icon: Code,
    title: "Développement Web",
    number: "01.",
    description: "Nous créons des sites web modernes, performants et adaptés à vos besoins, en mettant l'accent sur l'expérience utilisateur, la réactivité mobile et une conception esthétique. Chaque projet est unique, et nous nous assurons qu'il soit optimisé pour le référencement et les conversions.",
    color: "blue"
  },
  {
    icon: ShoppingCart,
    title: "Marketing Digital & Stratégie de Croissance",
    number: "02.",
    description: "Nous élaborons des stratégies marketing digitales sur mesure pour augmenter votre visibilité en ligne, générer des leads qualifiés et développer votre présence sur les réseaux sociaux. Nos campagnes sont axées sur des résultats mesurables pour garantir votre succès à long terme.",
    color: "green"
  },
  {
    icon: BarChart,
    title: "Automatisation Marketing & CRM",
    number: "03.",
    description: "Optimisez vos processus marketing et relation client grâce à l'automatisation. Nous intégrons des solutions CRM intelligentes pour gérer vos leads, automatiser vos campagnes d'emailing, et offrir une expérience client personnalisée tout au long du parcours.",
    color: "amber"
  },
  {
    icon: Globe,
    title: "Développement d'Applications & Solutions Sur Mesure",
    number: "04.",
    description: "Nous concevons des applications web et mobiles sur mesure, adaptées à vos objectifs d'affaires. Nos solutions sont scalables, sécurisées et conçues pour améliorer votre productivité tout en répondant aux besoins spécifiques de votre entreprise.",
    color: "indigo"
  },
  {
    icon: Database,
    title: "Hébergement & Infrastructures Sécurisées",
    number: "05.",
    description: "Nous proposons des services d'hébergement web hautement sécurisés, allant des solutions mutualisées aux serveurs dédiés, pour garantir des performances optimales et une disponibilité continue. Votre sécurité et la protection de vos données sont notre priorité.",
    color: "red"
  },
  {
    icon: Layers,
    title: "Conseil & Accompagnement IT",
    number: "06.",
    description: "Avec notre expertise en informatique et transformation digitale, nous vous offrons des services de conseil personnalisés pour optimiser votre infrastructure et mettre en place des solutions performantes adaptées à vos besoins spécifiques. Nous vous guidons tout au long de votre parcours digital.",
    color: "purple"
  },
  {
    icon: RefreshCw,
    title: "Intégration de Solutions Tierces & API",
    number: "07.",
    description: "Nous facilitons l'intégration de solutions tierces et d'API pour une gestion optimale de vos processus. En particulier, nous vous accompagnons dans l'intégration d'un ERP (Enterprise Resource Planning) tel qu'Odoo, une solution complète pour automatiser et centraliser vos opérations commerciales. Grâce à Odoo, vous pouvez gérer efficacement vos CRM, stocks, facturation, achats, ventes, et bien plus encore. Nous proposons également l'intégration de chatbots pour automatiser vos interactions clients, améliorer l'engagement sur votre site web et répondre en temps réel à vos prospects et clients. Cette intégration permet d'améliorer la visibilité de vos données, de simplifier la gestion des ressources et d'optimiser la prise de décision pour la croissance de votre entreprise.",
    color: "cyan"
  }
];

const getColorClass = (color: string) => {
  const colorMap: Record<string, { bg: string, text: string, border: string }> = {
    blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
    violet: { bg: "bg-violet-50", text: "text-violet-600", border: "border-violet-200" },
    indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200" },
    green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200" },
    amber: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-200" },
    red: { bg: "bg-red-50", text: "text-red-600", border: "border-red-200" },
    purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
    cyan: { bg: "bg-cyan-50", text: "text-cyan-600", border: "border-cyan-200" }
  };
  
  return colorMap[color] || { bg: "bg-gray-50", text: "text-gray-600", border: "border-gray-200" };
};

const Services = () => {
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // Create refs
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const iconsRef = useRef<(HTMLDivElement | null)[]>([]);
  const numberRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Set up animations when component mounts
  useEffect(() => {
    // Header animations
    const headerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none none"
      }
    });

    headerTimeline
      .from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      })
      .from(descriptionRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.4");

    // Card animations - staggered entrance
    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        y: 60,
        opacity: 0,
        duration: 0.6,
        delay: 0.1 * index,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          end: "top 60%",
          toggleActions: "play none none none"
        }
      });
    });

    // Icon animations - continuous rotation
    iconsRef.current.forEach((icon) => {
      gsap.to(icon, {
        rotateY: 360,
        duration: 3,
        repeat: -1,
        ease: "none",
        transformOrigin: "center"
      });
    });

    // Number animations - color pulse
    numberRefs.current.forEach((number) => {
      gsap.to(number, {
        color: "#000000",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });

    // Hover animation setup
    cardsRef.current.forEach((card, index) => {
      card?.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -10,
          scale: 1.02,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          duration: 0.3,
          ease: "power2.out"
        });
      });

      card?.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });

    // Background color animation
    gsap.to(sectionRef.current, {
      backgroundColor: "rgba(243, 244, 246, 1)",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
      }
    });

    // Clean up all animations and event listeners
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      cardsRef.current.forEach(card => {
        card?.removeEventListener("mouseenter", () => {});
        card?.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-4">Nos Services</h2>
          <p ref={descriptionRef} className="text-xl text-gray-600">
          Une offre complète de solutions digitales sur mesure pour propulser votre
          entreprise dans l’ère numérique.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const colorClass = getColorClass(service.color);
            return (
              <Card 
                key={index} 
                className={`border ${colorClass.border} transition-all duration-300`}
                ref={el => cardsRef.current[index] = el}
              >
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div 
                      ref={el => iconsRef.current[index] = el}
                      className={`w-12 h-12 rounded-lg ${colorClass.bg} flex items-center justify-center mr-4 transform`}
                    >
                      <service.icon className={`h-6 w-6 ${colorClass.text}`} />
                    </div>
                    <div className="flex-1">
                      <div 
                        ref={el => numberRefs.current[index] = el}
                        className="font-medium text-sm text-gray-500 mb-1"
                      >
                        {service.number}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;