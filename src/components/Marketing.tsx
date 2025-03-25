import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Link } from 'lucide-react';
 // Assurez-vous d'importer Link depuis next/link


const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-marketing-light overflow-hidden">
     
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-marketing-accent text-sm font-medium mb-4 animate-fade-in">
              STRATÉGIE ET PERFORMANCE
            </span>
            <h1 className="marketing-heading text-4xl md:text-5xl lg:text-6xl mb-6 max-w-3xl mx-auto leading-tight">
              MARKETING DIGITAL
            </h1>
            <p className="marketing-subheading text-xl md:text-2xl max-w-2xl mx-auto mb-8">
              Optimisez votre présence en ligne et boostez vos résultats avec nos stratégies marketing sur mesure
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
  {/* Lien DEMANDER UN DEVIS */}
  <Link href="/devis">
    <a className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white text-center font-medium py-2 px-6 rounded-lg transition-colors duration-300">
      DEMANDER UN DEVIS
    </a>
  </Link>
  
  {/* Lien VOIR NOS SERVICES */}
  <Link href="/services">
    <a className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white text-center font-medium py-2 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center">
      VOIR NOS SERVICES <ChevronRight className="inline-block ml-2" size={16} />
    </a>
  </Link>
</div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 relative"
          >
            <div className="relative z-10 mx-auto rounded-2xl overflow-hidden shadow-elevation">
              <motion.img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Marketing Digital" 
                className="w-full h-auto object-cover rounded-2xl"
                initial={{ scale: 1.05, filter: 'blur(5px)' }}
                animate={{ scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1 }}
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-5 -left-5 w-20 h-20 bg-blue-100 rounded-full blur-2xl opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-marketing-accent rounded-full blur-3xl opacity-30 animate-pulse"></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;