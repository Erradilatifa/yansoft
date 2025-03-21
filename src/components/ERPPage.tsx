import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BadgeDollarSign, Package, Shield, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const ERPPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="py-16 relative" id='ert'>
        {/* Background gradients - fixed position */}
        <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-slate-100 -z-10"></div>
        <div className="fixed w-[500px] h-[500px] rounded-full bg-blue-100/50 blur-3xl -top-64 -right-64 -z-10 animate-pulse-soft"></div>
        <div className="fixed w-[500px] h-[500px] rounded-full bg-blue-100/50 blur-3xl -bottom-64 -left-64 -z-10 animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        
        {/* Main content */}
        <div className="container mx-auto px-4">
          {/* Header section */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto animate-fade-up">
              <div className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6 animate-blur-in">
                Solutions ERP
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-slate-900">
                <span className="text-blue-500">ERP</span> pour votre entreprise
              </h1>
              <p className="text-lg text-slate-700 mb-8 max-w-2xl">
                Des solutions adaptées à vos besoins avec différentes options selon la taille et les besoins de votre entreprise.
              </p>
            </div>
          </div>
          
          {/* Pricing cards */}
          <div className="bg-white rounded-lg shadow-sm py-8 px-4">
            <div className="flex flex-wrap justify-center gap-8 lg:gap-12 max-w-6xl mx-auto">
              {/* Silver Plan */}
              <Card className="w-full md:w-80 border-2 border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-blue-200 animate-fade-up bg-white">
                <CardHeader className="bg-gradient-to-br from-gray-100 to-gray-200 text-center pt-6 pb-6">
                  <div className="flex justify-center mb-4">
                    <BadgeDollarSign className="h-12 w-12 text-gray-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800">SILVER</CardTitle>
                  <p className="text-lg font-medium text-gray-600 mt-2">199 DH/mois</p>
                  <p className="text-sm text-gray-500 mt-1">(1 admin, 1 utilisateur)</p>
                </CardHeader>
                <CardContent className="pt-6 bg-white min-h-40">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">CRM (Vente & Achat)</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Facturation</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Gestion de stock</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-center pb-8 pt-4 bg-white">
                  <Link to="/qchatbot">
                    <Button variant="outline" className="rounded-full border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                      Demander un devis
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Gold Plan */}
              <Card className="w-full md:w-80 border-2 border-yellow-300 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-yellow-400 animate-fade-up bg-white" style={{ animationDelay: '0.2s' }}>
                <CardHeader className="bg-gradient-to-br from-yellow-50 to-yellow-100 text-center pt-6 pb-6">
                  <div className="flex justify-center mb-4">
                    <Package className="h-12 w-12 text-yellow-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800">GOLD</CardTitle>
                  <p className="text-lg font-medium text-gray-600 mt-2">350 DH/mois</p>
                  <p className="text-sm text-gray-500 mt-1">(1 admin, 3 utilisateurs)</p>
                </CardHeader>
                <CardContent className="pt-6 bg-white min-h-40">
                  <ul className="space-y-3">
                    <li className="flex items-start font-semibold text-gray-800">
                      <Star className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Tout ce qui est inclus dans SILVER</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Comptabilité</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Plus d'utilisateurs</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-center pb-8 pt-4 bg-white">
                  <Link to="/chatbot">
                    <Button className="rounded-full bg-yellow-500 hover:bg-yellow-600">
                      Demander un devis
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Titanium Plan */}
              <Card className="w-full md:w-80 border-2 border-purple-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-purple-300 animate-fade-up bg-white" style={{ animationDelay: '0.4s' }}>
                <CardHeader className="bg-gradient-to-br from-purple-50 to-purple-100 text-center pt-6 pb-6">
                  <div className="flex justify-center mb-4">
                    <Shield className="h-12 w-12 text-purple-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800">TITANIUM</CardTitle>
                  <p className="text-sm text-gray-500 mt-2">Tarification personnalisée</p>
                </CardHeader>
                <CardContent className="pt-6 bg-white min-h-40">
                  <ul className="space-y-3">
                    <li className="flex items-start font-semibold text-gray-800">
                      <Star className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Tout ce qui est inclus dans GOLD</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Développement spécifique</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Solutions sur mesure</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-center pb-8 pt-4 bg-white">
                  <Link to="/chatbot">
                    <Button className="rounded-full bg-purple-500 hover:bg-purple-600">
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