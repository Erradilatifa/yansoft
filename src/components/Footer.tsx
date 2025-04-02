import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
 
  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Développement Web", href: "#services" },
        { name: "Marketing Digital & Stratégie de Croissance", href: "#services" },
        { name: "Automatisation Marketing & CRM", href: "#services" },
        { name: "Développement d’Applications & Solutions Sur Mesure", href: "#services" },
        { name: "Hébergement & Infrastructures Sécurisées", href: "#services" },
        { name: "Conseil & Accompagnement IT", href: "#services" },
        { name: "Intégration de Solutions Tierces & API", href: "#services" },
      ]
    },
    {
      title: "Entreprise",
      links: [
        { name: "Accueil", href: "#hero" },
        { name: "À propos de YANSOFT GROUP", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Chatbot", href: "#chatbot" },
        { name: "ERT", href: "#ertpage" },
        { name: "Nos Packs", href: "#pack" },
        { name: "Contactez-nous", href: "#contact" },
      ]
    },
  ];
 
  return (
    <footer className="bg-gray-900 text-white pt-8 md:pt-16 pb-6 md:pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Version Mobile (xs et sm) */}
        <div className="block md:hidden">
          <div className="mb-8 text-center">
            <div className="mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">YANSOFT</span>
            </div>
            <p className="text-gray-400 mb-6 mx-auto max-w-sm">
              Nous concevons et développons des solutions web et mobiles innovantes
              qui transforment les idées en produits numériques performants.
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="space-y-8">
            {footerLinks.map((column, index) => (
              <div key={index} className="text-center">
                <h3 className="text-lg font-semibold mb-3">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Version Desktop (md et plus) */}
        <div className="hidden md:block">
          <div className="grid grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <div className="mb-6">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">YANSOFT</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Nous concevons et développons des solutions web et mobiles innovantes
                qui transforment les idées en produits numériques performants.
              </p>
              <div className="flex space-x-4">
  <a href="https://www.facebook.com/share/18PxbzyBpx/?mibextid=wwXIfr" className="text-gray-400 hover:text-white transition-colors">
    <Facebook className="h-5 w-5" />
  </a>
  <a href="https://www.instagram.com/yansoft_?igsh=MXFjYWJnemVnOWh6eQ==" className="text-gray-400 hover:text-white transition-colors">
    <Instagram className="h-5 w-5" />
  </a>
  <a href="https://www.linkedin.com/company/yan-soft/?viewAsMember=true" className="text-gray-400 hover:text-white transition-colors">
    <Linkedin className="h-5 w-5" />
  </a>
</div>

            </div>
           
            {footerLinks.map((column, index) => (
              <div key={index} className="col-span-1">
                <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
       
        <div className="pt-6 md:pt-8 border-t border-gray-800 text-gray-400 text-sm text-center">
          <p>&copy; {currentYear} YANSOFT. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;