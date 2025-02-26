
"use client";

import Head from 'next/head';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MenuIcon, X, Phone, Users, Server, FileText, Mail } from 'lucide-react';
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold"
            >
              <span className="text-white">Jel</span>
              <span className="text-[#fe9903]">com</span>
            </motion.div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {['inicio', 'nosotros', 'servicios', 'planes', 'contacto'].map((item) => (
              <button
                key={item}
                onClick={() => navigateTo(item)}
                className={`text-lg font-medium relative ${activeSection === item ? 'text-[#fe9903]' : 'text-white hover:text-gray-300'
                  }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                {activeSection === item && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-0.5 bg-[#fe9903]"
                    style={{ bottom: '-5px' }}
                  />
                )}
              </button>
            ))}
          </nav>
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {['inicio', 'nosotros', 'servicios', 'planes', 'contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => navigateTo(item)}
                  className={`text-lg font-medium py-2 ${activeSection === item ? 'text-[#fe9903]' : 'text-white'
                    }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </header>

      <main>
        <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
          {/* Fondo con imagen y desenfoque dinámico */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
                filter: "brightness(0.5) blur(2px)"
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
          </div>

          {/* Contenido */}
          <div className="relative z-20 text-center px-6">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              src="/jelcom3.png"
              alt="Jelcom Logo"
              className="mx-auto w-44 md:w-52 mb-4"
            />
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-lg"
            >
              Contact Center <span className="text-[#fe9903]">especializado</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-lg md:text-2xl text-gray-300 mt-4 max-w-3xl mx-auto"
            >
              Elevamos la experiencia de tus clientes con tecnología avanzada y servicio de calidad.
            </motion.p>

            {/* Botón con efecto brillante */}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative mt-8 px-10 py-4 text-lg font-semibold rounded-full text-black bg-[#fe9903] hover:scale-105 transition-transform duration-300"
              onClick={() => navigateTo('contacto')}
            >
              Contáctanos
              <span className="absolute inset-0 bg-white opacity-20 rounded-full blur-lg transition-opacity duration-300 hover:opacity-30"></span>
            </motion.button>
          </div>

          {/* Indicador de scroll */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <button
                onClick={() => navigateTo('nosotros')}
                className="text-white opacity-80 hover:opacity-100 flex flex-col items-center"
              >
                <span className="text-xs mb-1">Desliza</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </motion.div>
          </div>
        </section>


        {/* Nosotros Section */}
        <section id="nosotros" className="py-20 bg-zinc-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold mb-4"
              >
                Sobre <span className="text-[#fe9903]">Nosotros</span>
              </motion.h2>
              <div className="w-24 h-1 bg-[#fe9903] mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-3xl font-bold mb-6">mejoramos la comunicacion entre <span className="text-[#fe9903]">empresas y clientes</span></h3>
                <p className="text-gray-300 mb-6">
                  En Jelcom, nos dedicamos a proporcionar soluciones de contact center de vanguardia que transforman la manera en que las empresas se conectan con sus clientes.
                </p>
                <p className="text-gray-300 mb-6">
                  Con un equipo experto, combinamos tecnología avanzada con estrategias personalizadas para ofrecer experiencias excepcionales.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="flex flex-col items-center">
                    <div className="text-4xl font-bold text-[#fe9903]">+100</div>
                    <div className="text-gray-400">Clientes satisfechos</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-4xl font-bold text-[#fe9903]">+12</div>
                    <div className="text-gray-400">profesionales</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-80 md:h-96 rounded-lg overflow-hidden"
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: "url('logos/qs.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t"></div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="clientes" className="py-20 bg-zinc-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold mb-4 text-white"
              >
                Nuestros <span className="text-[#fe9903]">Clientes</span>
              </motion.h2>
              <div className="w-24 h-1 bg-[#fe9903] mx-auto"></div>
            </div>

            {/* Contenedor de los logos */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-center">
              {[
                { name: "Cliente 1", logo: "/logos/1.png" },
                { name: "Cliente 2", logo: "/logos/2.png" },
                { name: "Cliente 3", logo: "/logos/3.png" },
                { name: "Cliente 4", logo: "/logos/4.png" },
                { name: "Cliente 5", logo: "/logos/5.png" },
                { name: "Cliente 1", logo: "/logos/6.png" },
                { name: "Cliente 2", logo: "/logos/7.png" },
                { name: "Cliente 3", logo: "/logos/8.png" },
                { name: "Cliente 4", logo: "/logos/11.png" },
              ].map((cliente, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex justify-center"
                >
                  <img
                    src={cliente.logo}
                    alt={cliente.name}
                    className="h-24 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                  />
                </motion.div>
              ))}
            </div>
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
                  name: "Básico",
                  price: "",
                  description: "Ideal para pequeñas empresas que inician",
                  features: ["Hasta 5 agentes", "Soporte telefónico", "Informes básicos", "servicio especializado"]
                },
                {
                  name: "Business",
                  price: "",
                  description: "Perfecto para empresas en crecimiento",
                  features: ["Hasta 10 agentes", "Soporte multicanal","servicio especializado", "Automatización básica"]
                },
                {
                  name: "Enterprise",
                  price: "",
                  description: "Solución para grandes corporaciones",
                  features: ["Agentes ilimitados", "IA y automatización", "Servicio especializado", "Integración sistemas"]
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
                      <div className="font-medium">+57 311 8661238 </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-zinc-800 p-3 rounded-full mr-4">
                      <Mail className="text-[#fe9903]" size={20} />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Email</div>
                      <div className="font-medium">contacto@jelcom.com</div>
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
              phoneNumber="+57"
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
              className="fixed left-4 bottom-20 flex items-center bg-orange-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-orange-600 transition"
            >
              Cotizar Ahora
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
