import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

export default function Home() {
  // Services cards data
  const services = [
    {
      title: "Reformas integrales de interiores",
      description: "Transformación completa de baños, cocinas, salones y otros espacios de su hogar con acabados de alta calidad.",
      icon: "🏠",
    },
    {
      title: "Construcción de viviendas",
      description: "Construcción de viviendas desde cero, reformas estructurales y ampliaciones con los más altos estándares.",
      icon: "🏗️",
    },
    {
      title: "Construcción de piscinas",
      description: "Diseño y construcción de piscinas personalizadas que se adaptan perfectamente a su espacio y necesidades.",
      icon: "🏊",
    },
  ];

  // Key benefits
  const benefits = [
    "Más de 40 años de experiencia en el sector",
    "Atención personalizada y presupuesto sin compromiso",
    "Profesionales cualificados y materiales de primera calidad",
    "Garantía en todos nuestros trabajos",
    "Servicio en toda España",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[500px] md:h-[600px]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&q=80')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-start">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-2xl mb-4">
            Soluciones Integrales en Reformas y Construcción
          </h1>
          <p className="text-xl text-gray-200 max-w-xl mb-8">
            Más de 40 años construyendo y reformando hogares en toda España con profesionalidad y compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="font-semibold">
              <Link to="/contacto">
                Solicitar presupuesto
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 font-semibold">
              <Link to="/galeria">
                Ver proyectos <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Empresa de reformas y construcciones de confianza</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              En Soluciones Integrales Juma ofrecemos servicios completos de reformas y construcción adaptados a sus necesidades y presupuesto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">40 años de experiencia en el sector</h3>
              <p className="text-gray-600 mb-6">
                Somos especialistas en reformas integrales y construcción, ofreciendo soluciones adaptadas a cada cliente en toda España. Nuestro equipo de profesionales trabaja con dedicación y compromiso para garantizar resultados de calidad.
              </p>
              
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                alt="Equipo de profesionales"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros servicios</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios para transformar su hogar o negocio con la máxima calidad y profesionalidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-8">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button asChild variant="link" className="p-0 h-auto font-semibold">
                    <Link to="/contacto" className="flex items-center text-blue-600 hover:text-blue-800">
                      Solicitar información <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para transformar su espacio?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Contáctenos hoy para una visita y presupuesto sin compromiso. Transformamos sus ideas en realidad.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold border-white">
            <Link to="/contacto">
              Contactar ahora
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}