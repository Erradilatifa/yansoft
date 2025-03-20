
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Application de commerce en ligne",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    description: "Plateforme e-commerce complète avec système de paiement intégré et gestion des stocks.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"]
  },
  {
    title: "Application de gestion de projet",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    description: "Solution de gestion de projet en temps réel avec tableaux Kanban et notifications.",
    tags: ["Vue.js", "Firebase", "Tailwind CSS"]
  },
  {
    title: "Application mobile de santé",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    description: "Application de suivi de santé et fitness avec analyses personnalisées et intégration HealthKit.",
    tags: ["React Native", "Redux", "AWS"]
  },
  {
    title: "Dashboard analytique",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    description: "Tableau de bord d'analyse avec visualisations de données et rapports automatisés.",
    tags: ["Angular", "D3.js", "Node.js", "PostgreSQL"]
  },
  {
    title: "Site vitrine immobilier",
    category: "Site Web",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    description: "Site vitrine moderne pour une agence immobilière avec recherche et filtrage avancés.",
    tags: ["Next.js", "Prisma", "Google Maps API"]
  },
  {
    title: "Application de livraison de repas",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    description: "Application de commande et livraison de repas avec suivi en temps réel.",
    tags: ["Flutter", "Firebase", "Stripe", "Google Maps"]
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Réalisations</h2>
          <p className="text-xl text-gray-600">
            Découvrez une sélection de projets web et mobiles que nous avons développés pour nos clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
                <Badge className="absolute top-3 right-3">
                  {project.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
