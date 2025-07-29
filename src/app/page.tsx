"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Calendar,
  Users,
  FileText,
  Clock,
  CheckCircle,
  Star,
  Play,
  Smartphone,
  Monitor,
  Database,
  HeadphonesIcon,
  Lock,
  Award,
  Zap,
  BarChart3,
  Phone,
  Mail,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function DentaSoftwareLanding() {
  const [showTerms, setShowTerms] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [showAbout, setShowAbout] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#031749] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DS</span>
              </div>
              <span className="text-xl font-bold text-[#031749]">DentaSoftware</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#funcionalidades" className="text-gray-600 hover:text-[#031749] transition-colors">
                Funcionalidades
              </Link>
              <Link href="#precios" className="text-gray-600 hover:text-[#031749] transition-colors">
                Precios
              </Link>
              <Link href="#testimonios" className="text-gray-600 hover:text-[#031749] transition-colors">
                Testimonios
              </Link>
              <Link href="#contacto" className="text-gray-600 hover:text-[#031749] transition-colors">
                Contacto
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="https://wa.me/593978847401" passHref>
                <Button
                  variant="outline"
                  className="border-[#031749] text-[#031749] hover:bg-[#031749] hover:text-white bg-transparent"
                >
                  Agenda una Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#031749] to-[#0a2a6b]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                #1 Software para Consultorios Dentales
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Gestiona tu consultorio dental de forma <span className="text-blue-300">inteligente</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                DentaSoftware es la solución integral que necesitas para optimizar la administración de tu práctica
                dental. Agenda, historiales y más en una sola plataforma.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                { /* <Button size="lg" className="bg-white text-[#031749] hover:bg-gray-100 text-lg px-8 py-4">
                  <Play className="mr-2 h-5 w-5" />
                  Ver Demo en Vivo
                </Button> */}
                <Link href="https://wa.me/593978847401" passHref>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-[#031749] text-lg px-8 py-4 bg-transparent">
                    Agenda una Prueba Gratuita
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center space-x-6 text-sm text-blue-200">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Soporte 24/7
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Datos seguros
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <Image
                  src="/img/img_inicio.webp?height=400&width=600"
                  alt="DentaSoftware Dashboard"
                  width={600}
                  height={400}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Principales */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#031749] mb-4">¿Por qué elegir DentaSoftware?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Únete a la nueva generación de consultorios dentales que están transformando su gestión con nuestra plataforma. Simplifica procesos y ofrece una experiencia excepcional a tus pacientes. 
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-[#031749] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-[#031749]">Ahorra Tiempo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Automatiza tareas repetitivas y enfócate en lo que realmente importa: la atención de tus pacientes.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-[#031749] rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-[#031749]">Aumenta ingresos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Optimiza tu agenda, reduce cancelaciones y mejora el seguimiento de tratamientos para maximizar tus
                  ingresos.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-[#031749] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-[#031749]">Experiencia premium</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Brinda una experiencia profesional a tus pacientes con recordatorios automáticos y gestión eficiente.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Funcionalidades Interactivas */}
      <section id="funcionalidades" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#031749] mb-4">
              Funcionalidades que transforman tu consultorio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre cómo cada herramienta está diseñada específicamente para las necesidades de los profesionales
              dentales.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 p-6 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-[#031749] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#031749] mb-2">Agenda Inteligente</h3>
                  <p className="text-gray-600">
                    Gestiona citas con recordatorios automáticos y sincronización en tiempo real.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-[#031749] rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#031749] mb-2">Historiales Digitales</h3>
                  <p className="text-gray-600">
                    Almacena y accede a historiales clínicos completos con Antecedentes, Odontogramas, Examen Estomatognático y más.
                  </p>
                </div>
              </div>
              { /*<div className="flex items-start space-x-4 p-6 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-[#031749] rounded-lg flex items-center justify-center flex-shrink-0">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#031749] mb-2">Facturación Automática</h3>
                  <p className="text-gray-600">
                    Genera facturas, controla pagos y gestiona planes de tratamiento con seguimiento financiero
                    completo.
                  </p>
                </div>
              </div> */}
              <div className="flex items-start space-x-4 p-6 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-[#031749] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#031749] mb-2">Gestión de Pacientes</h3>
                  <p className="text-gray-600">
                    Base de datos completa con información de cada paciente.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/img/funcionalidades.webp?height=320&width=600"
                alt="Funcionalidades DentaSoftware"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl w-full h-auto max-h-134 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo */}
      <section className="py-20 bg-[#031749]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ve DentaSoftware en acción</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Descubre en 3 minutos cómo DentaSoftware puede revolucionar la gestión de tu consultorio dental.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
              <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden flex items-center justify-center">
                <video controls width={800} height={450}  className="rounded-xl w-full h-full">
                  <source src="/api/video" type="video/mp4" />
                  Tu navegador no soporta el video.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#031749] mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Muchos profesionales dentales han transformado su práctica con DentaSoftware.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Dr. Moises Laguatasig"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-[#031749]">Dr. Moises Laguatasig</CardTitle>
                    <CardDescription>Odontólogo General - Macas</CardDescription>
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                   &quot;DentaSoftware ha revolucionado mi consultorio. Ahorro más de 4 horas diarias en tareas
                  administrativas y mis pacientes están más satisfechos con el servicio.&quot;
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Dra. Maria Sifuentes"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-[#031749]">Dra. Maria Sifuentes </CardTitle>
                    <CardDescription>Odontóloga General - Cuenca</CardDescription>
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  &quot;La gestión de tratamientos de ortodoncia nunca fue tan fácil. La web es increíble.&quot;
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Dra. Ana Martín"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-[#031749]">Dra. Ana Martín</CardTitle>
                    <CardDescription>Directora Clínica Dental - Macas</CardDescription>
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  &quot;Gestiono 3 consultorios con DentaSoftware. La sincronización en tiempo real y los reportes
                  financieros me permiten tomar mejores decisiones.&quot;
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tabla de Precios */}
      <section id="precios" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#031749] mb-4">Planes diseñados para tu consultorio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elige el plan que mejor se adapte al tamaño y necesidades de tu práctica dental.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-[#031749]">Básico</CardTitle>
                <CardDescription>Perfecto para consultorios pequeños</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-[#031749]">$49</span>
                  <span className="text-gray-600">/mes</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Hasta 500 pacientes</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Agenda básica</span>
                </div>
                
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Historial clinico digital</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Soporte por email</span>
                </div>
                <Button className="w-full mt-6 bg-[#031749] hover:bg-[#031749]/90">Comenzar Prueba Gratuita</Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow border-[#031749] border-2 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#031749]">Más Popular</Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-[#031749]">Profesional</CardTitle>
                <CardDescription>Ideal para consultorios en crecimiento</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-[#031749]">$99</span>
                  <span className="text-gray-600">/mes</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Hasta 2,000 pacientes</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Agenda avanzada + recordatorios</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Historiales completos + imágenes</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Recordatorios a pacientes</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Soporte prioritario 24/7</span>
                </div>
                <Button className="w-full mt-6 bg-[#031749] hover:bg-[#031749]/90">Comenzar Prueba Gratuita</Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-[#031749]">Enterprise</CardTitle>
                <CardDescription>Para clínicas y múltiples consultorios</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-[#031749]">$199</span>
                  <span className="text-gray-600">/mes</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Pacientes ilimitados</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Múltiples consultorios</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Integraciones avanzadas</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Análisis avanzado</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Gerente de cuenta dedicado</span>
                </div>
                <Button className="w-full mt-6 bg-[#031749] hover:bg-[#031749]/90">Comenzar Prueba Gratuita</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integración y Compatibilidad */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#031749] mb-4">Integración y Compatibilidad</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              DentaSoftware se adapta perfectamente a tu flujo de trabajo actual y se integra con las herramientas que
              ya utilizas.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-[#031749] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-[#031749]">Multiplataforma</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Accede desde cualquier dispositivo: Windows, Mac, tablets y smartphones.
                </p>
                <div className="flex justify-center space-x-4">
                  <Smartphone className="h-6 w-6 text-gray-400" />
                  <Monitor className="h-6 w-6 text-gray-400" />
                </div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-[#031749] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-[#031749]">Migración Fácil</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Importa tus datos existentes sin perder información. Nuestro equipo te ayuda.
                </p>
                <Badge variant="secondary">Migración gratuita</Badge>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-[#031749] rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeadphonesIcon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-[#031749]">Soporte Experto</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Equipo especializado en software dental disponible 24/7 para ayudarte.
                </p>
                <Badge variant="secondary">Soporte en español</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#031749] mb-4">Preguntas Frecuentes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Resolvemos las dudas más comunes sobre DentaSoftware.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-[#031749] font-semibold">
                  ¿Qué incluye la prueba gratuita de 30 días?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  La prueba gratuita incluye acceso completo a todas las funcionalidades del plan Profesional, soporte
                  técnico completo y capacitación personalizada. No se requiere tarjeta de crédito para comenzar.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-[#031749] font-semibold">
                  ¿Mis datos están seguros con DentaSoftware?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Absolutamente. Utilizamos encriptación y realizamos copias de seguridad automáticas.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-[#031749] font-semibold">
                  ¿Puedo cambiar de plan en cualquier momento?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Sí, puedes actualizar o cambiar tu plan en cualquier momento. Los cambios se aplican inmediatamente y
                  solo pagas la diferencia. No hay penalizaciones por cambios de plan.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-[#031749] font-semibold">
                  ¿Ofrecen capacitación para mi equipo?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Sí, incluimos capacitación completa para todo tu equipo. Ofrecemos sesiones en vivo, videos tutoriales y soporte continuo para asegurar que aproveches al máximo
                  DentaSoftware.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-[#031749] font-semibold">
                  ¿Qué pasa si necesito cancelar mi suscripción?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Puedes cancelar en cualquier momento sin penalizaciones. Mantenemos tu información disponible por 30 días adicionales por si cambias de
                  opinión.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Seguridad y Garantías */}
      <section className="py-20 bg-[#031749]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Seguridad y Garantías</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Tu tranquilidad y la de tus pacientes es nuestra prioridad.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Encriptación SSL</h3>
              <p className="text-blue-200">Todos los datos se transmiten con encriptación de 256 bits</p>
            </div>
            { /*<div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">GDPR Compliant</h3>
              <p className="text-blue-200">Cumplimiento total con regulaciones europeas de protección de datos</p>
            </div> */}
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Backup Automático</h3>
              <p className="text-blue-200">Copias de seguridad automáticas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">99.9% Uptime</h3>
              <p className="text-blue-200">Garantía de disponibilidad con SLA y compensación por interrupciones</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-[#031749] to-[#0a2a6b]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">¿Listo para transformar tu consultorio?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Transforma y digitaliza tu consultorio con DentaSoftware. <br></br>
            Comienza tu prueba gratuita hoy mismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://wa.me/593978847401" passHref>
              <Button size="lg" className="bg-white text-[#031749] hover:bg-gray-100 text-lg px-8 py-4">
                <Play className="mr-2 h-5 w-5" />
                Solicitar Demo Personalizada
              </Button>
            </Link>
            { /* <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#031749] text-lg px-8 py-4 bg-transparent"
            >
              Comenzar Prueba Gratuita
            </Button> */}
          </div>
          <p className="text-sm text-blue-300 mt-6">
            ✓ Sin permanencia ✓ Migración ✓ Soporte 24/7 ✓ 30 días gratis
          </p>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#031749] mb-4">¿Tienes preguntas? Contáctanos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestro equipo está listo para ayudarte a encontrar la mejor solución para tu consultorio
              dental.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl text-[#031749]">Solicita una demo personalizada</CardTitle>
                  <CardDescription>Completa el formulario y te contactaremos en menos de 24 horas</CardDescription>
                </CardHeader>
                <CardContent className="px-0 space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nombre *</label>
                      <Input placeholder="Tu nombre completo" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono *</label>
                      <Input placeholder="+593 900 000 000" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <Input type="email" placeholder="tu@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nombre del consultorio</label>
                    <Input placeholder="Clínica Dental..." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Número de pacientes aproximado
                    </label>
                    <Input placeholder="Ej: 500 pacientes" />
                  </div>
                  <Button className="w-full bg-[#031749] hover:bg-[#031749]/90 text-lg py-3">
                    Solicitar Demo Gratuita
                  </Button>
                  <p className="text-sm text-gray-500 text-center">
                    Al enviar este formulario aceptas nuestros términos y condiciones
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#031749] mb-6">Otras formas de contacto</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#031749] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#031749]">Teléfono</h4>
                      <p className="text-gray-600">+593 97 884 7401</p>
                      <p className="text-sm text-gray-500">Lunes a Viernes: 8:00 - 18:00</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#031749] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#031749]">Email</h4>
                      <p className="text-gray-600">info@dentasoftware.com</p>
                      { /* <p className="text-sm text-gray-500">Respuesta en menos de 2 horas</p> */}
                    </div>
                  </div>
                  { /* <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#031749] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#031749]">Oficina</h4>
                      <p className="text-gray-600">Calle Serrano 123, 28006 Madrid</p>
                      <p className="text-sm text-gray-500">Visitas con cita previa</p>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="bg-[#031749] rounded-2xl p-8 text-white">
                <h4 className="text-xl font-bold mb-4">¿Necesitas ayuda urgente?</h4>
                <p className="mb-4">Nuestro equipo de soporte técnico está disponible 24/7 para clientes actuales.</p>
                <Link href="https://wa.me/593978847401" passHref>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#031749] bg-transparent">
                  Soporte Técnico 24/7
                </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#031749] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-[#031749] font-bold text-sm">DS</span>
                </div>
                <span className="text-xl font-bold">DentaSoftware</span>
              </div>
              <p className="text-blue-200 mb-4">
                La solución integral para la gestión de consultorios dentales. 
              </p>
              { /* <div className="flex space-x-4">
                <Badge variant="secondary" className="bg-white/20 text-white">
                  ISO 27001
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  GDPR
                </Badge>
              </div> */}
            </div>
            <div>
              <h4 className="font-semibold mb-4">Producto</h4>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <Link href="#funcionalidades" className="hover:text-white transition-colors">
                    Funcionalidades
                  </Link>
                </li>
                <li>
                  <Link href="#precios" className="hover:text-white transition-colors">
                    Precios
                  </Link>
                </li>
                <li>
                  <Link href="#testimonios" className="hover:text-white transition-colors">
                    Testimonios
                  </Link>
                </li>
              </ul>
            </div>
            { /* <div>
              <h4 className="font-semibold mb-4">Soporte</h4>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Centro de Ayuda
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Documentación
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Capacitación
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Estado del Sistema
                  </Link>
                </li>
              </ul>
            </div> */}
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <button
                    className="hover:text-white transition-colors bg-transparent text-blue-200"
                    onClick={() => setShowAbout(true)}
                    type="button">
                    Sobre Nosotros
                  </button>
                </li>
                <li>
                  <Link href="#contacto" className="hover:text-white transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">
              © {new Date().getFullYear()} DentaSoftware. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button
                className="text-blue-200 hover:text-white text-sm transition-colors underline"
                onClick={() => setShowTerms(true)}
                type="button"
              >
                Términos de Servicio
              </button>
              <button
                className="text-blue-200 hover:text-white text-sm transition-colors underline"
                onClick={() => setShowPrivacy(true)}
                type="button"
              >
                Política de Privacidad
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Popup Términos de Servicio */}
      <Dialog open={showTerms} onOpenChange={setShowTerms}>
        <DialogContent
          className="max-w-4xl max-h-[80vh] overflow-y-auto"
          onClose={() => setShowTerms(false)}
        >
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#031749] mb-4">
              Términos de Servicio - DentaSoftware
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              Última actualización: {new Date().toLocaleDateString("es-ES")}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 text-gray-700">
            <section>
              <h3 className="text-lg font-semibold text-[#031749] mb-3">1. Aceptación de los Términos</h3>
              <p className="mb-4">
                Al acceder y utilizar DentaSoftware, usted acepta estar sujeto a estos Términos de Servicio y todas las
                leyes y regulaciones aplicables. Si no está de acuerdo con alguno de estos términos, no debe utilizar
                este servicio.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold text-[#031749] mb-3">2. Descripción del Servicio</h3>
              <p className="mb-4">
                DentaSoftware es una plataforma SaaS (Software as a Service) diseñada para la gestión integral de
                consultorios dentales, que incluye pero no se limita a:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Gestión de citas y agenda</li>
                <li>Historiales clínicos digitales</li>
                <li>Gestión de pacientes</li>
              </ul>
            </section>
            <section>
              <h3 className="text-lg font-semibold text-[#031749] mb-3">3. Registro y Cuenta de Usuario</h3>
              <p className="mb-4">
                Para utilizar DentaSoftware, debe crear una cuenta proporcionando información precisa y completa. Usted
                es responsable de mantener la confidencialidad de su cuenta y contraseña, y de todas las actividades que
                ocurran bajo su cuenta.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold text-[#031749] mb-3">4. Uso Aceptable</h3>
              <p className="mb-4">
                Usted se compromete a utilizar DentaSoftware únicamente para fines legales y de acuerdo con estos
                términos. No debe:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Violar cualquier ley o regulación aplicable</li>
                <li>Interferir con el funcionamiento del servicio</li>
                <li>Intentar acceder a datos de otros usuarios</li>
                <li>Utilizar el servicio para actividades fraudulentas</li>
              </ul>
            </section>
            <section>
              <h3 className="text-lg font-semibold text-[#031749] mb-3">5. Privacidad y Protección de Datos</h3>
              <p className="mb-4">
                Nos comprometemos a proteger su privacidad y la de sus pacientes. El tratamiento de datos personales se
                rige por nuestra Política de Privacidad.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold text-[#031749] mb-3">6. Facturación y Pagos</h3>
              <p className="mb-4">
                Los pagos se procesan mensualmente por adelantado. Los precios pueden cambiar con un aviso previo de 30
                días. El incumplimiento de pago puede resultar en la suspensión del servicio.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold text-[#031749] mb-3">7. Cancelación</h3>
              <p className="mb-4">
                Puede cancelar su suscripción en cualquier momento. La cancelación será efectiva al final del período de
                facturación actual. Los datos se mantendrán disponibles por 30 días adicionales.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold text-[#031749] mb-3">8. Limitación de Responsabilidad</h3>
              <p className="mb-4">
                DentaSoftware se proporciona tal como está. No garantizamos que el servicio sea ininterrumpido o libre
                de errores. Nuestra responsabilidad se limita al monto pagado por el servicio en los últimos 12 meses.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold text-[#031749] mb-3">9. Modificaciones</h3>
              <p className="mb-4">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. 
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold text-[#031749] mb-3">10. Contacto</h3>
              <p className="mb-4">
                Para cualquier consulta sobre estos términos, puede contactarnos en:
                <br />
                Email: info@dentasoftware.com
                <br />
                Teléfono: +593 97 884 7401
              </p>
            </section>
          </div>
        </DialogContent>
      </Dialog>

      {/* Popup Política de Privacidad */}
      <Dialog open={showPrivacy} onOpenChange={setShowPrivacy}>
        <DialogContent
          className="max-w-4xl max-h-[80vh] overflow-y-auto"
          onClose={() => setShowPrivacy(false)}
        >
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#031749] mb-4">
              Política de Privacidad - DentaSoftware
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              Última actualización: {new Date().toLocaleDateString("es-ES")}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 text-gray-700">
            <section>
              <h3 className="text-lg font-semibold text-[#031749] mb-3">1. Información que Recopilamos</h3>
              <p className="mb-4">Recopilamos información que usted nos proporciona directamente, incluyendo:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Información de registro (nombre, email, teléfono)</li>
                <li>Datos de pacientes que usted ingresa en el sistema</li>
                <li>Comunicaciones con nuestro equipo de soporte</li>
              </ul>
            </section>
            <section>
              <h3 className="text-lg font-semibold text-[#031749] mb-3">2. Cómo Utilizamos su Información</h3>
              <p className="mb-4">Utilizamos la información recopilada para:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Proporcionar y mantener nuestro servicio</li>
                <li>Enviar comunicaciones importantes sobre el servicio</li>
                <li>Proporcionar soporte técnico</li>
                <li>Mejorar nuestros servicios</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </section>
            <section>
              <h3 className="text-lg font-semibold text-[#031749] mb-3">3. Protección de Datos de Pacientes</h3>
              <p className="mb-4">
                Entendemos la sensibilidad de los datos médicos y implementamos medidas especiales de protección:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Encriptación de extremo a extremo para todos los datos médicos</li>
                <li>Acceso restringido solo a personal autorizado</li>
              </ul>
            </section>
            <section>
              <h3 className="text-lg font-semibold text-[#031749] mb-3">4. Compartir Información</h3>
              <p className="mb-4">
                No vendemos, alquilamos o compartimos su información personal con terceros, excepto en las siguientes
                circunstancias:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Con su consentimiento explícito</li>
                <li>Para cumplir con obligaciones legales</li>
                <li>
                  Con proveedores de servicios que nos ayudan a operar (bajo estrictos acuerdos de confidencialidad)
                </li>
                <li>En caso de fusión o adquisición empresarial</li>
              </ul>
            </section>
            <section>
              <h3 className="text-lg font-semibold text-[#031749] mb-3">5. Seguridad de Datos</h3>
              <p className="mb-4">Implementamos medidas de seguridad técnicas y organizativas apropiadas:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Encriptación SSL/TLS para todas las transmisiones</li>
                <li>Encriptación AES-256 para datos almacenados</li>
                <li>Monitoreo continuo de seguridad</li>
                <li>Copias de seguridad automáticas y cifradas</li>
              </ul>
            </section>
          
            <section>
              <h3 className="text-lg font-semibold text-[#031749] mb-3">6. Retención de Datos</h3>
              <p className="mb-4">
                Conservamos sus datos personales solo durante el tiempo necesario para los fines descritos en esta
                política:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Datos de cuenta: Durante la vigencia de su suscripción + 7 años</li>
                <li>Datos de pacientes: Durante la vigencia de su suscripción + 30 días</li>
                <li>Logs de sistema: 2 años para fines de seguridad</li>
              </ul>
            </section>
            <section>
              <h3 className="text-lg font-semibold text-[#031749] mb-3">9. Cookies y Tecnologías Similares</h3>
              <p className="mb-4">
                Utilizamos cookies esenciales para el funcionamiento del servicio y cookies analíticas para mejorar la
                experiencia del usuario. Puede gestionar sus preferencias de cookies en la configuración de su
                navegador.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold text-[#031749] mb-3">
                10. Contacto y Delegado de Protección de Datos
              </h3>
              <p className="mb-4">
                Para ejercer sus derechos o realizar consultas sobre privacidad:
                <br />
                Email: info@dentasoftware.com
                <br />
                Teléfono: +593 97 884 7401
              </p>
            </section>
          </div>
        </DialogContent>
      </Dialog>

      {/* Popup Sobre Nosotros */}
      <Dialog open={showAbout} onOpenChange={setShowAbout}>
        <DialogContent
          className="max-w-3xl max-h-[70vh] overflow-y-auto"
          onClose={() => setShowAbout(false)}
        >
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#031749] mb-4">
              Sobre Nosotros - DentaSoftware
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              Conoce quiénes somos y por qué elegimos transformar la gestión dental.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 text-gray-700">
            <section>
              <h3 className="text-lg font-semibold text-[#031749] mb-3">Nuestra Misión</h3>
              <p>
                En DentaSoftware, ayudamos a consultorios dentales a digitalizar y optimizar su gestión diaria. Nuestra plataforma facilita la administración de pacientes, citas y tratamientos, permitiendo a los profesionales enfocarse en lo más importante: la salud de sus pacientes.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold text-[#031749] mb-3">Equipo</h3>
              <p>
                Somos un equipo comprometidos con la innovación y el soporte personalizado. Trabajamos cada día para ofrecerte una experiencia segura, eficiente y adaptada a las necesidades reales de tu consultorio.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold text-[#031749] mb-3">Compromiso</h3>
              <p>
                Creemos en la mejora continua y en el acompañamiento cercano a nuestros clientes. Tu éxito es nuestro objetivo.
              </p>
            </section>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
