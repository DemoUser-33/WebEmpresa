import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Phone, Mail, Send, MessageSquare } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  phone: z.string().min(9, { message: "Teléfono inválido" }),
  city: z.string().min(2, { message: "Ciudad inválida" }),
  serviceType: z.string().min(1, { message: "Seleccione un tipo de servicio" }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
  acceptTerms: z.literal(true, {
    errorMap: () => ({ message: "Debe aceptar los términos y condiciones" }),
  }),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Define form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      city: "",
      serviceType: "",
      message: "",
      acceptTerms: false,
    },
  });

  // Submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log(values);
      toast.success("Mensaje enviado correctamente. Nos pondremos en contacto pronto.", {
        duration: 5000,
      });
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  }

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contáctenos</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos a su disposición para resolver cualquier duda o solicitar un presupuesto sin compromiso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Información de contacto</CardTitle>
                <CardDescription>Diferentes formas de ponerse en contacto con nosotros</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Teléfono</h3>
                    <p className="text-gray-600">+34 XXX XXX XXX</p>
                    <p className="text-sm text-gray-500 mt-1">Lun-Vie: 9:00-18:00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600">info@solucionesjuma.com</p>
                    <p className="text-sm text-gray-500 mt-1">Respuesta en 24-48h</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium">WhatsApp</h3>
                    <p className="text-gray-600">+34 XXX XXX XXX</p>
                    <Button variant="outline" size="sm" className="mt-2" asChild>
                      <a href="https://wa.me/34XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        Enviar mensaje <Send className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Additional info */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Proceso de solicitud</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-600 font-semibold">
                      1
                    </span>
                    <p>Rellene el formulario o contáctenos directamente.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-600 font-semibold">
                      2
                    </span>
                    <p>Concertaremos una visita para evaluar su proyecto.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-600 font-semibold">
                      3
                    </span>
                    <p>Le enviaremos un presupuesto detallado sin compromiso.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-600 font-semibold">
                      4
                    </span>
                    <p>Iniciamos el proyecto según el plan acordado.</p>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Formulario de contacto</CardTitle>
                <CardDescription>Envíenos sus datos y nos pondremos en contacto a la mayor brevedad</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nombre completo*</FormLabel>
                            <FormControl>
                              <Input placeholder="Su nombre y apellidos" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email*</FormLabel>
                            <FormControl>
                              <Input placeholder="ejemplo@email.com" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Teléfono*</FormLabel>
                            <FormControl>
                              <Input placeholder="612 345 678" type="tel" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Ciudad*</FormLabel>
                            <FormControl>
                              <Input placeholder="Su ciudad" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="serviceType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tipo de servicio*</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Seleccione un servicio" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="reforma_interior">Reforma interior</SelectItem>
                              <SelectItem value="construccion_vivienda">Construcción de vivienda</SelectItem>
                              <SelectItem value="reforma_estructural">Reforma estructural</SelectItem>
                              <SelectItem value="ampliacion">Ampliación</SelectItem>
                              <SelectItem value="piscina">Construcción de piscina</SelectItem>
                              <SelectItem value="otro">Otro</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensaje*</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Describa su proyecto o consulta..." 
                              className="min-h-[120px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="acceptTerms"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              Acepto la política de privacidad y el tratamiento de mis datos
                            </FormLabel>
                            <FormDescription>
                              Al enviar este formulario, acepta que utilicemos sus datos para ponernos en contacto con usted.
                            </FormDescription>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}