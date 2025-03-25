import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BadgeDollarSign, Package, Shield, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const ERPPage = () => {
  return (
    <div className="min-h-screen">
      <section className="py-12 sm:py-16 md:py-20 relative" id='erp'>
        {/* Background gradients - responsive positioning */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-100 -z-10"></div>
        <div className="absolute rounded-full bg-blue-100/50 blur-3xl -top-32 sm:-top-48 md:-top-64 -right-32 sm:-right-48 md:-right-64 -z-10 animate-pulse-soft"></div>
        <div className="absolute rounded-full bg-blue-100/50 blur-3xl -bottom-32 sm:-bottom-48 md:-bottom-64 -left-32 sm:-left-48 md:-left-64 -z-10 animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        
        {/* Main content */}
        <div className="container mx-auto px-4">
          {/* Header section */}
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto animate-fade-up">
              <div className="bg-primary/10 text-primary px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 animate-blur-in">
                Solutions ERP
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 text-slate-900">
                <span className="text-blue-500">ERP</span> pour votre entreprise
              </h1>
              <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8 max-w-2xl">
                Des solutions adaptées à vos besoins avec différentes options selon la taille et les besoins de votre entreprise.
              </p>
            </div>
          </div>
          
          {/* Pricing cards */}
          <div className="bg-white rounded-lg shadow-sm py-6 sm:py-8 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {/* Silver Plan */}
              <Card className="w-full border-2 border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-blue-200 animate-fade-up bg-white">
                <CardHeader className="bg-gradient-to-br from-gray-100 to-gray-200 text-center pt-4 sm:pt-6 pb-4 sm:pb-6">
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <BadgeDollarSign className="h-8 w-8 sm:h-12 sm:w-12 text-gray-600" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl font-bold text-gray-800">SILVER</CardTitle>
                  <p className="text-base sm:text-lg font-medium text-gray-600 mt-1 sm:mt-2">199 DH/mois</p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">(1 admin, 1 utilisateur)</p>
                </CardHeader>
                <CardContent className="pt-4 sm:pt-6 bg-white min-h-[10rem]">
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-start">
                      <Star className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700">CRM (Vente & Achat)</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700">Facturation</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700">Gestion de stock</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-center pb-4 sm:pb-8 pt-2 sm:pt-4 bg-white">
                  <Link to="/qchatbot">
                    <Button variant="outline" className="rounded-full text-xs sm:text-sm border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                      Demander un devis
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Gold Plan */}
              <Card className="w-full border-2 border-yellow-300 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-yellow-400 animate-fade-up bg-white" style={{ animationDelay: '0.2s' }}>
                <CardHeader className="bg-gradient-to-br from-yellow-50 to-yellow-100 text-center pt-4 sm:pt-6 pb-4 sm:pb-6">
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <Package className="h-8 w-8 sm:h-12 sm:w-12 text-yellow-600" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl font-bold text-gray-800">GOLD</CardTitle>
                  <p className="text-base sm:text-lg font-medium text-gray-600 mt-1 sm:mt-2">350 DH/mois</p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">(1 admin, 3 utilisateurs)</p>
                </CardHeader>
                <CardContent className="pt-4 sm:pt-6 bg-white min-h-[10rem]">
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-start font-semibold text-gray-800">
                      <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base">Tout ce qui est inclus dans SILVER</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700">Comptabilité</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700">Plus d'utilisateurs</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-center pb-4 sm:pb-8 pt-2 sm:pt-4 bg-white">
                  <Link to="/chatbot">
                    <Button className="rounded-full text-xs sm:text-sm bg-yellow-500 hover:bg-yellow-600">
                      Demander un devis
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Titanium Plan */}
              <Card className="w-full border-2 border-purple-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-purple-300 animate-fade-up bg-white" style={{ animationDelay: '0.4s' }}>
                <CardHeader className="bg-gradient-to-br from-purple-50 to-purple-100 text-center pt-4 sm:pt-6 pb-4 sm:pb-6">
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <Shield className="h-8 w-8 sm:h-12 sm:w-12 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl font-bold text-gray-800">TITANIUM</CardTitle>
                  <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-2">Tarification personnalisée</p>
                </CardHeader>
                <CardContent className="pt-4 sm:pt-6 bg-white min-h-[10rem]">
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-start font-semibold text-gray-800">
                      <Star className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base">Tout ce qui est inclus dans GOLD</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700">Développement spécifique</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700">Solutions sur mesure</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-center pb-4 sm:pb-8 pt-2 sm:pt-4 bg-white">
                  <Link to="/chatbot">
                    <Button className="rounded-full text-xs sm:text-sm bg-purple-500 hover:bg-purple-600">
                      Demander un devis
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ERPPage;