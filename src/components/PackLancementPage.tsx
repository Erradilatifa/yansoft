import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, PenTool, Globe, BadgeDollarSign, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const PackLancementPage = () => {
  const services = [
    {
      icon: PenTool,
      iconColor: 'text-purple-600',
      title: 'CRÉATION DE LOGO',
      description: 'Design professionnel d\'un logo unique qui représente parfaitement votre marque.',
      badgeColor: 'bg-purple-100 text-purple-700'
    },
    {
      icon: Globe,
      iconColor: 'text-green-600',
      title: 'SITE WEB',
      description: 'Création d\'un site web professionnel, responsive et optimisé pour les moteurs de recherche.',
      badgeColor: 'bg-green-100 text-green-700'
    },
    {
      icon: BadgeDollarSign,
      iconColor: 'text-amber-600',
      title: '3 MOIS D\'ABONNEMENT ERP',
      description: 'Accès complet à notre solution ERP pour gérer efficacement votre entreprise pendant 3 mois.',
      badgeColor: 'bg-amber-100 text-amber-700'
    },
    {
      icon: TrendingUp,
      iconColor: 'text-red-600',
      title: '1 MOIS DE MARKETING DIGITAL',
      description: 'Stratégie complète de marketing digital pour booster votre visibilité en ligne pendant 1 mois.',
      badgeColor: 'bg-red-100 text-red-700'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center 
      w-full 
      sm:w-full 
      md:w-[768px] 
      lg:w-[1024px] 
      xl:w-[1100px] 
      mx-auto 
      px-4
    ">
      {/* Pack Details Section */}
      <section className="w-full max-w-5xl py-8 md:py-16 bg-slate-50" id='pack'>
        {/* Responsive Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-100 -z-10 opacity-50"></div>
        
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-8">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4 md:space-y-6">
              <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                Offre Spéciale
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                <span className="text-blue-500">Pack</span> Lancement
              </h1>
              <p className="text-sm md:text-base text-slate-700 max-w-2xl">
                Tout ce dont vous avez besoin pour lancer votre entreprise avec une présence en ligne professionnelle.
              </p>
            </div>
          </div>

          <div className="text-center my-6 md:my-12">
            <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">
              Ce que comprend le <span className="text-blue-500">pack</span>
            </h2>
            <p className="text-xs md:text-base text-slate-700 max-w-2xl mx-auto">
              Une solution complète pour lancer votre entreprise en ligne
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="border-2 border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-blue-200 flex flex-col h-full"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <CardHeader className="text-center pt-4 md:pt-6 pb-2 md:pb-4">
                  <div className="flex justify-center mb-2 md:mb-3">
                    <service.icon className={`h-8 w-8 md:h-10 md:w-10 ${service.iconColor}`} />
                  </div>
                  <CardTitle className="text-sm md:text-lg font-bold text-gray-800">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow pt-2 md:pt-4">
                  <Badge className={`${service.badgeColor} hover:opacity-80 mb-2 md:mb-3 text-xs`}>
                    Inclus
                  </Badge>
                  <p className="text-xs md:text-sm text-gray-700">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="w-full py-6 md:py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900">
              Prêt à lancer votre entreprise ?
            </h2>
            <p className="text-xs md:text-base text-gray-600">
              Notre pack lancement vous offre tous les outils nécessaires pour démarrer votre activité avec une présence en ligne professionnelle.
            </p>
            <Link to="/chatbot">
              <Button className="rounded-full bg-blue-500 hover:bg-blue-600 px-4 md:px-6 py-2 md:py-3 text-xs md:text-base">
                Contactez-nous
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackLancementPage;