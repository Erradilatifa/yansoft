import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Développement Web", href: "#services" },
        { name: "Développement Mobile", href: "#services" },
        { name: "Développement sur mesure", href: "#services" },
        { name: "Marketing Digital", href: "#services" },
        { name: "Automatisation marketing", href: "#services" },
        { name: "Hébergement", href: "#services" },
        { name: "Conseil et accompagnement", href: "#services" }
      ]
    },
    {
      title: "Entreprise",
      links: [
        { name: "À propos", href: "#" },
        { name: "Équipe", href: "#team" },
        { name: "Témoignages", href: "#testimonials" },
        { name: "Contact", href: "#contact" },
      ]
    },
  ];
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1 lg:col-span-2">
            <div className="mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">YANSOFT</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Nous concevons et développons des solutions web et mobiles innovantes 
              qui transforment les idées en produits numériques performants.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {footerLinks.map((column, index) => (
            <div key={index} className="md:col-span-1">
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
        
        <div className="pt-8 border-t border-gray-800 text-gray-400 text-sm text-center">
          <p>&copy; {currentYear} YANSOFT. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;