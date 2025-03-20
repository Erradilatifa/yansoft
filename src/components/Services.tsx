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

const services = [
  {
    icon: Code,
    title: "Développement site web",
    number: "01.",
    description: "Le développement de sites web est un service clé que nous proposons chez YANSOFT. En tant qu'agence de développement de logiciel, nous comprenons l'importance d'un site web pour les entreprises dans le monde numérique d'aujourd'hui. C'est pourquoi nous sommes fiers de fournir des sites web exceptionnels qui sont esthétiques, conviviaux et efficaces pour nos clients.",
    color: "blue"
  },
  {
    icon: Smartphone,
    title: "Développement mobile",
    number: "02.",
    description: "Notre service de développement mobile chez YANSOFT repousse les limites de l'innovation pour créer des applications mobiles qui inspirent et engagent les utilisateurs. Grâce à notre expertise technique et à notre passion pour la conception centrée sur l'utilisateur, nous transformons vos idées en réalité numérique",
    color: "violet"
  },
  {
    icon: Globe,
    title: "Développement sur mesure",
    number: "03.",
    description: "Le développement d'applications sur mesure est un service de création d'applications personnalisées pour les entreprises de toutes tailles et de tous les secteurs d'activité. Les applications sur mesure sont développées selon les besoins spécifiques de chaque entreprise et sont conçues pour répondre à leurs besoins uniques.",
    color: "indigo"
  },
  {
    icon: ShoppingCart,
    title: "Marketing Digital",
    number: "04.",
    description: "Notre service de marketing digital chez YANSOFT vise à propulser votre présence en ligne vers de nouveaux sommets. Nous comprenons que dans le paysage numérique en constante évolution, il est essentiel d'adopter des stratégies innovantes pour atteindre votre public cible de manière efficace.",
    color: "green"
  },
  {
    icon: BarChart,
    title: "Automatisation marketing",
    number: "05.",
    description: "Notre service d'automatisation marketing au sein de YANSOFT offre une solution intelligente pour rationaliser vos processus marketing et améliorer l'efficacité de vos campagnes.",
    color: "amber"
  },
  {
    icon: Database,
    title: "Hébergement",
    number: "06.",
    description: "Notre service d'hébergement garantit une plateforme robuste et sécurisée pour vos sites web, applications et données en ligne. Avec des solutions adaptées à vos besoins, nous assurons disponibilité, performances et sécurité.",
    color: "red"
  },
  {
    icon: Layers,
    title: "Conseil et accompagnement",
    number: "07.",
    description: "Avec notre service de conseil en IT chez YANSOFT, nous vous offrons un accompagnement personnalisé pour améliorer votre infrastructure. Profitez également de nos services d'audit pour évaluer votre environnement informatique et mettre en place des solutions efficaces.",
    color: "purple"
  },
  {
    icon: RefreshCw,
    title: "Intégration de solutions tierces",
    number: "08.",
    description: "Notre expertise chez YANSOFT réside dans l'intégration fluide de solutions tierces dans votre système, combinée à une gestion rigoureuse de projet. Nous assurons la coordination complète du processus, de la conception à la mise en œuvre, pour garantir le déploiement réussi de solutions innovantes.",
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
            Nous proposons une gamme complète de services de développement pour répondre à tous vos besoins numériques.
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