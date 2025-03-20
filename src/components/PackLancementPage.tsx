import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, PenTool, Globe, BadgeDollarSign, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const PackLancementPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
     {/* Pack Details Section */}
      <section className="py-16 bg-slate-50" id='pack'>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-100 -z-10"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-100/50 blur-3xl -top-64 -right-64 -z-10 animate-pulse-soft"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-100/50 blur-3xl -bottom-64 -left-64 -z-10 animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-4 bg-white rounded-lg shadow-sm">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto animate-fade-up">
            <div className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6 animate-blur-in">
              Offre Spéciale
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-slate-900">
              <span className="text-blue-500">Pack</span> Lancement
            </h1>
            <p className="text-lg text-slate-700 mb-8 max-w-2xl">
              Tout ce dont vous avez besoin pour lancer votre entreprise avec une présence en ligne professionnelle.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ce que comprend le <span className="text-blue-500">pack</span></h2>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              Une solution complète pour lancer votre entreprise en ligne
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {/* Service 1 - Logo */}
            <Card className="border-2 border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-blue-200 animate-fade-up flex flex-col h-full bg-white" style={{ animationDelay: '0.1s' }}>
              <CardHeader className="bg-white text-center pt-8 pb-6">
                <div className="flex justify-center mb-4">
                  <PenTool className="h-12 w-12 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">CRÉATION DE LOGO</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 flex-grow bg-white">
                <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 mb-4">Inclus</Badge>
                <p className="text-gray-700 text-sm">
                  Design professionnel d'un logo unique qui représente parfaitement votre marque.
                </p>
              </CardContent>
            </Card>

            {/* Service 2 - Site Web */}
            <Card className="border-2 border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-blue-200 animate-fade-up flex flex-col h-full bg-white" style={{ animationDelay: '0.2s' }}>
              <CardHeader className="bg-white text-center pt-8 pb-6">
                <div className="flex justify-center mb-4">
                  <Globe className="h-12 w-12 text-green-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">SITE WEB</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 flex-grow bg-white">
                <Badge className="bg-green-100 text-green-700 hover:bg-green-200 mb-4">Inclus</Badge>
                <p className="text-gray-700 text-sm">
                  Création d'un site web professionnel, responsive et optimisé pour les moteurs de recherche.
                </p>
              </CardContent>
            </Card>

            {/* Service 3 - ERP */}
            <Card className="border-2 border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-blue-200 animate-fade-up flex flex-col h-full bg-white" style={{ animationDelay: '0.3s' }}>
              <CardHeader className="bg-white text-center pt-8 pb-6">
                <div className="flex justify-center mb-4">
                  <BadgeDollarSign className="h-12 w-12 text-amber-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">3 MOIS D'ABONNEMENT ERP</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 flex-grow bg-white">
                <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200 mb-4">Inclus</Badge>
                <p className="text-gray-700 text-sm">
                  Accès complet à notre solution ERP pour gérer efficacement votre entreprise pendant 3 mois.
                </p>
              </CardContent>
            </Card>

            {/* Service 4 - Marketing Digital */}
            <Card className="border-2 border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-blue-200 animate-fade-up flex flex-col h-full bg-white" style={{ animationDelay: '0.4s' }}>
              <CardHeader className="bg-white text-center pt-8 pb-6">
                <div className="flex justify-center mb-4">
                  <TrendingUp className="h-12 w-12 text-red-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">1 MOIS DE MARKETING DIGITAL</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 flex-grow bg-white">
                <Badge className="bg-red-100 text-red-700 hover:bg-red-200 mb-4">Inclus</Badge>
                <p className="text-gray-700 text-sm">
                  Stratégie complète de marketing digital pour booster votre visibilité en ligne pendant 1 mois.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Prêt à lancer votre entreprise ?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Notre pack lancement est conçu pour vous offrir tous les outils nécessaires pour démarrer votre activité avec une présence en ligne professionnelle.
            </p>
            <Link to="/chatbot">
              <Button className="rounded-full bg-blue-500 hover:bg-blue-600 px-8 py-6 text-lg">
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