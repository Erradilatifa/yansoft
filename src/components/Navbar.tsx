import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowBigRight, Menu, X } from "lucide-react";
import { gsap } from 'gsap'; // Ajoutez cette importation si vous utilisez GSAP

const Navbar = () => {
  const buttonsRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    // Créez une timeline GSAP si vous utilisez GSAP
    const tl = gsap.timeline();
    
    if (buttonsRef.current) {
      tl.from(buttonsRef.current.children, { 
        y: 20, 
        opacity: 0, 
        duration: 0.6, 
        stagger: 0.2 
      }, "-=0.4");
    }
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src="/logo.png" alt="WebMojo Logo" className="h-16 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="text-brand-dark hover:text-brand-blue transition-colors">Accueil</a>
            <a href="#about" className="text-brand-dark hover:text-brand-blue transition-colors">À propos de YANSOFT</a>
            <a href="#services" className="text-brand-dark hover:text-brand-blue transition-colors">Services</a>
            <a href="#chatbot" className="text-brand-dark hover:text-brand-blue transition-colors">Chatbot</a>
            <a href="#ert" className="text-brand-dark hover:text-brand-blue transition-colors">ERT</a>
            <a href="#pack" className="text-brand-dark hover:text-brand-blue transition-colors">Pack Lancement</a>
            <a href="#contact" className="text-brand-dark hover:text-brand-blue transition-colors">Contact</a>



            
            

            {/* 
            <a href="#testimonials" className="text-brand-dark hover:text-brand-blue transition-colors">Témoignages</a>
            <a href="#team" className="text-brand-dark hover:text-brand-blue transition-colors">Équipe</a>
            <a href="#marketing" className="text-brand-dark hover:text-brand-blue transition-colors">Marketing Digital</a>
            <a href="#portfolio" className="text-brand-dark hover:text-brand-blue transition-colors">Portfolio</a>*/}
            
            <div ref={buttonsRef}>
              <Button 
                size="lg" 
                className="px-2 group relative overflow-hidden bg-blue-700 hover:bg-blue-900"
              >
                <a href="#chatbot" className="flex items-center gap-2">
                  Demander un devis
                  <ArrowBigRight className="h-4 w-3 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#hero" className="block px-3 py-2 text-brand-dark hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>Accueil</a>
            <a href="#about" className="block px-3 py-2 text-brand-dark hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>À propos de YANSOFT</a>
            <a href="#services" className="block px-3 py-2 text-brand-dark hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#chatbot" className="block px-3 py-2 text-brand-dark hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>Chatbot</a>
            <a href="#ert" className="block px-3 py-2 text-brand-dark hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>ERT</a>
            <a href="#pack" className="block px-3 py-2 text-brand-dark hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>Pack Lancement</a>
            <a href="#contact" className="block px-3 py-2 text-brand-dark hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>Contact</a>

            
            {/* <a href="#services" className="block px-3 py-2 text-brand-dark hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#testimonials" className="block px-3 py-2 text-brand-dark hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>Témoignages</a>
            <a href="#marketing" className="block px-3 py-2 text-brand-dark hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>Marketing Digital</a>
            <a href="#team" className="block px-3 py-2 text-brand-dark hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>Équipe</a>
            <a href="#portfolio" className="block px-3 py-2 text-brand-dark hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>Portfolio</a>*/}
            <div className="px-3 py-2">
              <Button className="w-full" asChild>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;