import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Soluciones Integrales Juma</h3>
            <p className="mb-4 text-gray-300">
              Más de 40 años ofreciendo servicios de construcción y reformas de alta calidad en toda España.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nuestros Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Reformas integrales de interiores
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Construcción de viviendas
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Reformas estructurales
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Construcción de piscinas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">+34 XXX XXX XXX</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">info@solucionesjuma.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Servicios en toda España</span>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Lun - Vie: 9:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-700 text-sm text-gray-400 text-center">
          <p>© {currentYear} Soluciones Integrales Juma. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;