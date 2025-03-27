"use client";

import Head from 'next/head';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MenuIcon, X, Phone, Users, Server, FileText, Mail, Tool, Layers, RefreshCcw, ShoppingCart, Code } from 'lucide-react';
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Marquee from "react-fast-marquee";
import { SpeedInsights } from "@vercel/speed-insights/next";
import BlogTecnico from './blogtecnico';
import Nosotros from './nosotros';
import Calltoaction from './calltoaction';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [scrollY, setScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(null);


  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateTo = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    const element = document.getElementById(section);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Jelcom | Contact Center Solutions</title>
        <meta name="description" content="Soluciones integrales de contact center para su empresa" />
        <link rel="icon" href="/logo.png" />
      </Head>

      {/* Navbar */}
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${scrollY > 50
          ? "bg-gradient-to-r from-black to-gray-900 shadow-lg py-2"
          : "bg-gradient-to-r from-black/70 to-gray-900/70 backdrop-blur-md py-4"
          }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo con animación y efecto de brillo */}
          <div className="flex items-center relative overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
              style={{
                animation: "shine 3s infinite",
                clipPath: "polygon(0 0, 100% 0, 80% 100%, 20% 100%)"
              }}
            />
            <div className="text-3xl font-extrabold tracking-tight">
              <span className="text-white">Jel</span>
              <span className="text-[#ff9900] drop-shadow-[0_0_15px_rgba(255,153,0,0.5)]">com</span>
            </div>
          </div>

          {/* Desktop Menu con efectos de hover avanzados */}
          <nav className="hidden md:flex space-x-8">
            {["inicio", "nosotros", "servicios", "planes", "contacto"].map(
              (item) => (
                <div
                  key={item}
                  className="relative group"
                  onMouseEnter={() => setIsHovered(item)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <button
                    onClick={() => navigateTo(item)}
                    className={`text-lg font-medium transition-colors duration-300 ${activeSection === item
                      ? "text-[#ff9900]"
                      : "text-white group-hover:text-[#ff9900]"
                      }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                  <div
                    className={`absolute -bottom-1 left-0 w-full h-0.5 transition-all duration-300 transform ${activeSection === item || isHovered === item
                      ? "bg-[#ff9900] scale-x-100 opacity-100"
                      : "bg-[#ff9900]/50 scale-x-0 opacity-0"
                      }`}
                  />
                  {/* Indicador de sección activa con animación */}
                  {activeSection === item && (
                    <div className="absolute -right-2 -top-1 h-2 w-2 rounded-full bg-[#ff9900] animate-pulse" />
                  )}
                </div>
              )
            )}
          </nav>

          {/* Botón de contacto para desktop */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-[#ff9900] to-[#ff7700] text-white px-6 py-2 rounded-full font-medium hover:shadow-[0_0_15px_rgba(255,153,0,0.5)] transition-all duration-300 hover:scale-105">
              Contáctanos
            </button>
          </div>

          {/* Mobile Menu Button con animación */}
          <button
            className="md:hidden text-white relative w-8 h-8 flex items-center justify-center"
            onClick={toggleMenu}
          >
            <div
              className={`w-6 h-0.5 bg-white absolute transition-all duration-300 ${isMenuOpen ? "rotate-45" : "translate-y-[-5px]"
                }`}
            />
            <div
              className={`w-6 h-0.5 bg-white absolute transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
            />
            <div
              className={`w-6 h-0.5 bg-white absolute transition-all duration-300 ${isMenuOpen ? "-rotate-45" : "translate-y-[5px]"
                }`}
            />
          </button>
        </div>

        {/* Mobile Menu con animación más fluida */}
        {isMenuOpen && (
          <div
            className="md:hidden absolute top-full left-0 w-full overflow-hidden"
            style={{
              background: "linear-gradient(to bottom, rgba(0,0,0,0.95), rgba(20,20,20,0.98))",
              animation: "slide-down 0.3s ease-out"
            }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col">
              {["inicio", "nosotros", "servicios", "planes", "contacto"].map(
                (item, index) => (
                  <button
                    key={item}
                    onClick={() => navigateTo(item)}
                    className={`text-lg font-medium py-3 border-b border-gray-800 transition-all duration-300 ${activeSection === item ? "text-[#ff9900]" : "text-white hover:text-[#ff9900] hover:pl-2"
                      }`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                )
              )}
              <button className="mt-4 bg-gradient-to-r from-[#ff9900] to-[#ff7700] text-white px-6 py-3 rounded-full font-medium self-start">
                Contáctanos
              </button>
            </div>
          </div>
        )}

        {/* Estilos CSS para las animaciones */}
        <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          50%, 100% { transform: translateX(400%); }
        }
        
        @keyframes slide-down {
          from { max-height: 0; opacity: 0; }
          to { max-height: 300px; opacity: 1; }
        }
      `}</style>
      </header>

      <main>
        <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Fondo animado con efecto parallax */}
          <div className="absolute inset-0 z-0">
            {/* Capa de video o imagen de fondo */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
                transform: "scale(1.1)",
                animation: "slowZoom 20s infinite alternate ease-in-out"
              }}
            ></div>

            {/* Overlay con gradiente dinámico */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/90 to-transparent"></div>

            {/* Partículas flotantes - implementadas con posiciones fijas para evitar diferencias cliente/servidor */}
            <div className="absolute inset-0 opacity-40">
              {/* Utilizando un array con posiciones predefinidas en lugar de aleatorias */}
              {[
                { top: "20%", left: "80%", size: "3px", delay: "0s", duration: "15s" },
                { top: "15%", left: "20%", size: "2px", delay: "2s", duration: "18s" },
                { top: "65%", left: "50%", size: "4px", delay: "1s", duration: "12s" },
                { top: "35%", left: "30%", size: "2px", delay: "3s", duration: "20s" },
                { top: "75%", left: "75%", size: "3px", delay: "4s", duration: "16s" },
                { top: "85%", left: "15%", size: "1px", delay: "2s", duration: "14s" },
                { top: "45%", left: "90%", size: "2px", delay: "1s", duration: "18s" },
                { top: "55%", left: "10%", size: "3px", delay: "3s", duration: "15s" },
                { top: "25%", left: "55%", size: "2px", delay: "4s", duration: "17s" },
                { top: "90%", left: "40%", size: "2px", delay: "0s", duration: "16s" }
              ].map((particle, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-white"
                  style={{
                    width: particle.size,
                    height: particle.size,
                    top: particle.top,
                    left: particle.left,
                    opacity: 0.5,
                    animation: `float ${particle.duration} infinite linear`,
                    animationDelay: particle.delay
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Contenido principal con posicionamiento corregido */}
          <div className="relative z-20 text-center px-6 w-full max-w-6xl mx-auto pt-20 pb-32">
            <div className="flex flex-col items-center">
              {/* Logo con efecto de resplandor - Ajustado para no estar tan arriba */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, type: "spring", stiffness: 100 }}
                className="relative mb-6 w-40 md:w-48 aspect-square flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-[#fe9903]/20 rounded-full filter blur-xl animate-pulse"></div>
                <img
                  src="/jelcom3.png"
                  alt="Jelcom Logo"
                  className="relative z-10 w-full drop-shadow-[0_0_10px_rgba(254,153,3,0.5)]"
                />
              </motion.div>

              {/* Titular con efectos de texto */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight"
              >
                <span className="relative inline-block mr-4">
                  Contact
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent"></span>
                </span>
                <span className="relative inline-block mr-4">
                  Center
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent"></span>
                </span>
                <span className="relative inline-block bg-gradient-to-r from-[#fe9903] to-[#ff6a00] text-transparent bg-clip-text font-black">
                  especializado
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#fe9903] to-[#ff6a00]"></span>
                </span>
              </motion.h1>

              {/* Subtítulo con aparición secuencial */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-xl text-gray-300 mt-6 max-w-3xl mx-auto font-light leading-relaxed"
              >
                Elevamos la experiencia de tus clientes con
                <span className="relative mx-2 inline-block">
                  <span className="relative z-10 font-medium text-white">tecnología avanzada</span>
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-[#fe9903]/70"></span>
                </span>
                y
                <span className="relative mx-2 inline-block">
                  <span className="relative z-10 font-medium text-white">servicio de calidad</span>
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-[#fe9903]/70"></span>
                </span>.
              </motion.p>
              {/* Botones de acción principal - Espacio aumentado desde el final*/}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-4 mt-10 justify-center mb-16"
              >
                {/* Botón principal con efecto brillante */}
                <button
                  onClick={() => navigateTo('contacto')}
                  className="group relative overflow-hidden px-8 py-3.5 rounded-full bg-gradient-to-r from-[#fe9903] to-[#ff6a00] text-black font-bold text-lg shadow-lg hover:shadow-[#fe9903]/40 transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10">Contáctanos ahora</span>
                  <span className="absolute top-0 left-0 w-full h-full bg-white/30 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                </button>
                <button
                  onClick={() => navigateTo('servicios')}
                  className="px-8 py-3.5 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors duration-300"
                >
                  Ver servicios
                </button>
              </motion.div>
            </div>
          </div>
          <motion.div
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center"
            >
              <span className="text-white/70 text-sm mb-2 tracking-wide">Descubre más</span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1.5 h-1.5 bg-white rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Estilos CSS para animaciones personalizadas */}
          <style jsx>{`
    @keyframes slowZoom {
      0% { transform: scale(1.0); }
      100% { transform: scale(1.15); }
    }
    
    @keyframes float {
      0% { transform: translateY(0) translateX(0); }
      25% { transform: translateY(-20px) translateX(10px); }
      50% { transform: translateY(0) translateX(20px); }
      75% { transform: translateY(20px) translateX(10px); }
      100% { transform: translateY(0) translateX(0); }
    }
  `}</style></section>
        <Nosotros />



        <section id="clientes" className="py-20 bg-gradient-to-b from-zinc-900 to-black">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-bold text-white"
              >
                Nuestros <span className="text-[#fe9903]">Clientes</span>
              </motion.h2>
              <div className="w-20 h-1 bg-[#fe9903] mx-auto mt-2 rounded-full"></div>
            </div>

            {/* Carrusel de logos */}
            <Marquee gradient={false} speed={70} pauseOnHover={true} className="overflow-hidden">
              {[
                { name: "Cliente 1", logo: "/logos/1.png" },
                { name: "Cliente 2", logo: "/logos/2.png" },
                { name: "Cliente 3", logo: "/logos/3.png" },
                { name: "Cliente 4", logo: "/logos/4.png" },
                { name: "Cliente 5", logo: "/logos/5.png" },
                { name: "Cliente 6", logo: "/logos/6.png" },
                { name: "Cliente 7", logo: "/logos/7.png" },
                { name: "Cliente 8", logo: "/logos/8.png" },
                { name: "Cliente 9", logo: "/logos/12.png" },
                { name: "Cliente 10", logo: "/logos/15.png" },
              ].map((cliente, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="mx-8 flex justify-center"
                >
                  <div className="bg-white/80 p-4 rounded-lg shadow-lg flex items-center justify-center">
                    <img
                      src={cliente.logo}
                      alt={cliente.name}
                      className="h-20 md:h-24 w-auto object-contain transition-transform duration-300 hover:scale-110 hover:opacity-90"
                    />
                  </div>
                </motion.div>
              ))}
            </Marquee>
          </div>
        </section>





        {/* Servicios Section */}
        <section id="servicios" className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold mb-4"
              >
                Nuestros <span className="text-[#fe9903]">Servicios</span>
              </motion.h2>
              <div className="w-24 h-1 bg-[#fe9903] mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Phone size={48} />,
                  title: "Cobranza y recuperación de cartera",
                  description: "Cobro de facturas vencidas, negociación de pagos y recuperación de cartera morosa."
                },
                {
                  icon: <Users size={48} />,
                  title: "Encuestas y estudios de mercado",
                  description: "Recopilación y análisis de datos, además de generación de informes empresariales."
                },
                {
                  icon: <Server size={48} />,
                  title: "Promoción de productos y servicios",
                  description: "Realizar llamadas telefónicas para informar de productos, servicios y promociones."
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-zinc-900 rounded-lg p-8 hover:bg-zinc-800 transition duration-300 border-b-2 border-[#fe9903]"
                >
                  <div className="text-[#fe9903] mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <FileText size={48} />,
                  title: "Campañas publicitarias",
                  description: "Envío de correos, mensajes de texto y otros materiales promocionales a todos los clientes."
                },
                {
                  icon: <Mail size={48} />,
                  title: "Fidelización de clientes",
                  description: "Proceso estratégico que tiene como objetivo crear relaciones duraderas y positivas con los clientes."
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (index + 3) * 0.2 }}
                  className="bg-zinc-900 rounded-lg p-8 hover:bg-zinc-800 transition duration-300 border-b-2 border-[#fe9903]"
                >
                  <div className="text-[#fe9903] mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Nueva sección de Servicios de Desarrollo */}
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Code size={48} />,
                  title: "Páginas Web",
                  description: "Diseño y desarrollo de sitios web modernos, responsivos y totalmente personalizados."
                },
                {
                  icon: <ShoppingCart size={48} />,
                  title: "E-commerce",
                  description: "Creación de tiendas online con sistemas de pago, inventario y gestión de productos."
                },
                {
                  icon: <RefreshCcw size={48} />,
                  title: "Renovación Web",
                  description: "Actualización y optimización de sitios web existentes para mejorar rendimiento y diseño."
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-zinc-900 rounded-lg p-8 hover:bg-zinc-800 transition duration-300 border-b-2 border-[#fe9903]"
                >
                  <div className="text-[#fe9903] mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Layers size={48} />,
                  title: "Desarrollo de Software a Medida",
                  description: "Soluciones de software personalizadas adaptadas específicamente a las necesidades de tu negocio."
                },
                {
                  icon: <Layers size={48} />,
                  title: "Consultoría Tecnológica",
                  description: "Asesoramiento experto para optimizar tus procesos tecnológicos y estrategias digitales."
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (index + 3) * 0.2 }}
                  className="bg-zinc-900 rounded-lg p-8 hover:bg-zinc-800 transition duration-300 border-b-2 border-[#fe9903]"
                >
                  <div className="text-[#fe9903] mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Planes Section */}
        <section id="planes" className="py-20 bg-zinc-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold mb-4"
              >
                Nuestros <span className="text-[#fe9903]">Planes</span>
              </motion.h2>
              <div className="w-24 h-1 bg-[#fe9903] mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Basico redes sociales",
                  price: "",
                  description: "Ideal para pequeñas empresas que inician",
                  features: ["Realizacion de 4 reels", "7 fotografias", "5 diseños de promocion", "1 publicacion en meta Ads"]
                },
                {
                  name: "Contact center",
                  price: "",
                  description: "Perfecto para empresas en crecimiento",
                  features: ["Mensajeria masiva", "correos electronicos", "envio de whatsapp y sms", "Llamadas telefonicas"]
                },
                {
                  name: "Paginas web",
                  price: "",
                  description: "Solución para crecer tu negocio",
                  features: ["Paginas web en nextjs", "ecommerce usando tecnologia actual", "Software a la medida con lenguajes modernos", "Nada de CMS o plantillas genericas"]
                }
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`rounded-lg overflow-hidden ${index === 1 ? 'bg-[#fe9903] text-black transform md:-translate-y-4' : 'bg-zinc-800 text-white'
                    }`}
                >
                  <div className={`p-8 ${index === 1 ? 'border-b border-black' : 'border-b border-zinc-700'}`}>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold mb-4">{plan.price}<span className="text-sm font-normal"></span></div>
                    <p className={index === 1 ? 'text-black opacity-80' : 'text-gray-400'}>{plan.description}</p>
                  </div>
                  <div className="p-8">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-5 w-5 mr-2 ${index === 1 ? 'text-black' : 'text-[#fe9903]'}`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button
                      className={`mt-8 w-full py-3 rounded-full font-bold ${index === 1
                        ? 'bg-black text-white hover:bg-gray-900'
                        : 'bg-[#fe9903] text-black hover:bg-opacity-90'
                        } transition duration-300`}
                      onClick={() => navigateTo('contacto')}
                    >
                      Contratar ahora
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <BlogTecnico />
        <Calltoaction />
        {/* Contacto Section */}
        <section id="contacto" className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold mb-4"
              >
                <span className="text-[#fe9903]">Contáctanos</span>
              </motion.h2>
              <div className="w-24 h-1 bg-[#fe9903] mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold mb-6">¿Listo para transformar la <span className="text-[#fe9903]">experiencia</span> de tus clientes?</h3>
                <p className="text-gray-300 mb-8">
                  Completa el formulario y un asesor especializado se pondrá en contacto contigo para diseñar la solución que mejor se adapte a tus necesidades.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-zinc-800 p-3 rounded-full mr-4">
                      <Phone className="text-[#fe9903]" size={20} />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Teléfono</div>
                      <div className="font-medium">+57 3212631673 </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-zinc-800 p-3 rounded-full mr-4">
                      <Mail className="text-[#fe9903]" size={20} />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Email</div>
                      <div className="font-medium">comercial@jelcom.com.co</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-zinc-800 p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-[#fe9903]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Dirección</div>
                      <div className="font-medium">Cl 12 #12-123, San Gil, Santander</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <form className="bg-zinc-900 p-8 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-gray-400 mb-2">Nombre</label>
                      <input
                        type="text"
                        id="nombre"
                        className="w-full bg-zinc-800 border-0 rounded-md px-4 py-3 focus:ring-[#fe9903] focus:ring-2 outline-none"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full bg-zinc-800 border-0 rounded-md px-4 py-3 focus:ring-[#fe9903] focus:ring-2 outline-none"
                        placeholder="tucorreo@ejemplo.com"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="empresa" className="block text-sm font-medium text-gray-400 mb-2">Empresa</label>
                    <input
                      type="text"
                      id="empresa"
                      className="w-full bg-zinc-800 border-0 rounded-md px-4 py-3 focus:ring-[#fe9903] focus:ring-2 outline-none"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-400 mb-2">Mensaje</label>
                    <textarea
                      id="mensaje"
                      rows="4"
                      className="w-full bg-zinc-800 border-0 rounded-md px-4 py-3 focus:ring-[#fe9903] focus:ring-2 outline-none"
                      placeholder="¿Cómo podemos ayudarte?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#fe9903] text-black font-bold py-3 rounded-md hover:bg-opacity-90 transition duration-300"
                  >
                    Enviar mensaje
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-6">
                <span className="text-white">Jel</span>
                <span className="text-[#fe9903]">com</span>
              </div>
              <p className="text-gray-400 mb-6">
                Transformando la relación entre empresas y clientes con soluciones inteligentes de contact center.
              </p>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="bg-zinc-800 p-2 rounded-full hover:bg-[#fe9903] hover:text-black transition duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.102-1.101" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Enlaces rápidos</h4>
              <ul className="space-y-3">
                {['Inicio', 'Nosotros', 'Servicios', 'Planes', 'Contacto'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => navigateTo(item.toLowerCase())}
                      className="text-gray-400 hover:text-[#fe9903]"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Servicios</h4>
              <ul className="space-y-3">
                {['Atención Telefónica', 'Soporte Multicanal', 'Soluciones Cloud', 'Analytics', 'Automatización'].map((item) => (
                  <li key={item}>
                    <a href="#servicios" className="text-gray-400 hover:text-[#fe9903]">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Boletín</h4>
              <p className="text-gray-400 mb-4">
                Suscríbete para recibir noticias y actualizaciones.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-grow bg-zinc-800 border-0 rounded-l-md px-4 py-2 focus:ring-[#fe9903] focus:ring-2 outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#fe9903] text-black px-4 rounded-r-md hover:bg-opacity-90 transition duration-300"
                >
                  Suscribir
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="fixed bottom-5 right-5 flex flex-col space-y-3 z-50">
          <div className="fixed bottom-5 right-5 flex flex-col space-y-3 z-50">
            {/* Botón de WhatsApp */}
            <FloatingWhatsApp
              phoneNumber="+573212631673"
              accountName="Jelcom soluciones informaticas"
              avatar="./logo.png"
              darkMode={true}
              statusMessage="Normalmente responde en 1 hora"
              chatMessage="¡Hola! jelcom, ¿en qué te podemos ayudar?"
              placeholder="Escribe un mensaje"
              notification={true}
              chatboxHeight={340}
            />

            {/* Botón de Cotizar Ahora */}
            <a
              href="#contacto"
              className="fixed left-4 top-1/2 transform -translate-y-1/2 hidden md:flex items-center bg-[#fe9903] text-white p-3 rounded-full shadow-lg transition-all duration-300 group hover:p-4"
            >
              <svg className="w-5 h-5 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1C6.49 1 2 5.49 2 11v3c0 1.66 1.34 3 3 3h1v-2H5c-.55 0-1-.45-1-1v-3c0-4.41 3.59-8 8-8s8 3.59 8 8v3c0 .55-.45 1-1 1h-1v2h1c1.66 0 3-1.34 3-3v-3c0-5.51-4.49-10-10-10zm-1 19h2v2h-2v-2zm-3 0h2v2H8v-2zm8 0h2v2h-2v-2z"></path>
              </svg>
              <span className="opacity-0 text-sm ml-2 transition-all duration-300 group-hover:opacity-100 group-hover:ml-3">
                Cotizar
              </span>
            </a>
          </div>
        </div>
      </footer>
      <SpeedInsights />
    </div>
  );
}
