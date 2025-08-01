import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentCategory, setCurrentCategory] = useState<string>("all");

  // Gallery items with categories
  const galleryItems = [
    {
      id: 1,
      title: "Reforma integral de cocina moderna",
      category: "interiores",
      image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      description: "Reforma completa de cocina con isla central y acabados de alta calidad.",
    },
    {
      id: 2,
      title: "Baño minimalista",
      category: "interiores",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      description: "Transformación de baño con estilo minimalista y materiales premium.",
    },
    {
      id: 3,
      title: "Salón luminoso",
      category: "interiores",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      description: "Reforma de salón con ampliación de ventanas para maximizar la luz natural.",
    },
    {
      id: 4,
      title: "Vivienda unifamiliar",
      category: "viviendas",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      description: "Construcción de vivienda unifamiliar de 180m² en parcela con jardín.",
    },
    {
      id: 5,
      title: "Ampliación de chalet",
      category: "viviendas",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      description: "Ampliación de chalet con nueva planta y terraza panorámica.",
    },
    {
      id: 6,
      title: "Piscina con zona de relax",
      category: "piscinas",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      description: "Construcción de piscina con zona de relax y solarium integrado.",
    },
    {
      id: 7,
      title: "Piscina de diseño con cascada",
      category: "piscinas",
      image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      description: "Piscina personalizada con cascada y sistema de iluminación LED.",
    },
    {
      id: 8,
      title: "Dormitorio principal",
      category: "interiores",
      image: "https://images.unsplash.com/photo-1560448075-bb485b067938?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      description: "Reforma de dormitorio principal con vestidor integrado y baño en suite.",
    },
    {
      id: 9,
      title: "Reforma estructural edificio",
      category: "viviendas",
      image: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      description: "Reforma estructural de edificio histórico con conservación de elementos originales.",
    },
  ];

  // Filter gallery items based on selected category
  const filteredItems = currentCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === currentCategory);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Galería de proyectos</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore nuestra selección de proyectos de reformas y construcciones realizados por nuestro equipo de profesionales.
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-8" onValueChange={setCurrentCategory}>
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="interiores">Interiores</TabsTrigger>
            <TabsTrigger value="viviendas">Viviendas</TabsTrigger>
            <TabsTrigger value="piscinas">Piscinas</TabsTrigger>
          </TabsList>
          
          <TabsContent value={currentCategory} className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover cursor-pointer"
                      onClick={() => setSelectedImage(item.image)}
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {selectedImage && (
          <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
            <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black/90">
              <DialogHeader className="absolute top-2 right-2 z-10">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-black/50"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </DialogHeader>
              <div className="relative flex items-center justify-center h-full">
                <img
                  src={selectedImage}
                  alt="Proyecto ampliado"
                  className="max-h-[80vh] max-w-full object-contain"
                />
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>

      {/* Contact CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Le gustaría un proyecto similar?</h2>
          <p className="text-gray-600 max-w-lg mx-auto mb-6">
            Contáctenos para una consulta gratuita y descubra cómo podemos transformar su espacio.
          </p>
          <Button asChild>
            <a href="/contacto">Solicitar presupuesto</a>
          </Button>
        </div>
      </div>
    </div>
  );
}