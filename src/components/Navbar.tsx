import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowBigRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const buttonsRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const NavLinks = [
    { href: "#hero", label: "Accueil" },
    { href: "#about", label: "À propos de YANSOFT" },
    { href: "#services", label: "Services" },
    { href: "#chatbot", label: "Chatbot" },
    { href: "#ert", label: "ERT" },
    { href: "#pack", label: "Pack Lancement" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white/80 backdrop-blur-sm'
    } border-b border-gray-200`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 py-2">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src="/logo.png" alt="WebMojo Logo" className="h-10 sm:h-14 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {NavLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="nav-link text-sm lg:text-base text-brand-dark hover:text-brand-blue transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            
            <div ref={buttonsRef} className="ml-4 lg:ml-6">
              <Button 
                size="sm" 
                className="px-5 py-2 lg:px-7 lg:py-2.5 group relative overflow-hidden bg-brand-blue hover:bg-blue-800 transition-colors duration-300 rounded-full"
              >
                <a href="#chatbot" className="flex items-center gap-2 lg:gap-3 text-xs lg:text-sm">
                  Demander un devis
                  <ArrowBigRight className="h-4 w-4 lg:h-5 lg:w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden right-8">
  <Button 
    variant="ghost" 
    size="icon" 
    onClick={toggleMobileMenu} 
    className="text-brand-dark hover:bg-gray-100 p-2 mr-3" // Ajout de mr-4 ici
  >
    {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
  </Button>
</div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 animate-fade-in">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {NavLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="block px-4 py-3 text-sm text-brand-dark hover:bg-gray-50 rounded-lg transition-colors" 
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            
            <div className="px-4 pt-2">
              <Button 
                className="w-full bg-brand-blue hover:bg-blue-800 transition-colors duration-300 rounded-full text-sm py-3" 
                asChild
              >
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  <span className="flex items-center justify-center gap-2">
                    Demander un devis
                    <ArrowBigRight className="h-4 w-4" />
                  </span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;