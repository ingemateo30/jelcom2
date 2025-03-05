import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Layers, Zap, X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const BlogTecnico = () => {
    const [activeCategory, setActiveCategory] = useState('todos');
    const [selectedArticle, setSelectedArticle] = useState(null)

    const articulosBlog = [
        {
            titulo: "Transformación Digital en Contact Centers: El Papel de la Inteligencia Artificial",
            extracto: "En la era digital actual, los contact centers están experimentando una revolución tecnológica sin precedentes.",
            contenidoCompleto: `
# Introducción
En la era digital actual, los contact centers están experimentando una revolución tecnológica sin precedentes. La inteligencia artificial (IA) se ha convertido en el motor principal de esta transformación, redefiniendo la forma en que las empresas interactúan con sus clientes.

## El Impacto de la IA en la Atención al Cliente

### Automatización Inteligente
La IA permite automatizar procesos repetitivos, liberando a los agentes humanos para que se concentren en tareas más complejas y de mayor valor agregado. Chatbots con procesamiento de lenguaje natural pueden resolver hasta el 70% de consultas simples en tiempo real.

### Análisis Predictivo
Los sistemas de IA pueden predecir las necesidades del cliente antes de que las manifieste, utilizando análisis de datos históricos y comportamiento de navegación.

## Beneficios Concretos

1. **Reducción de Tiempos de Espera**
   * Respuestas instantáneas
   * Resolución de problemas en minutos

2. **Personalización del Servicio**
   * Experiencias adaptadas a cada cliente
   * Reconocimiento de patrones individuales

## Desafíos y Consideraciones
* Mantener el factor humano
* Garantizar la privacidad de datos
* Capacitación continua del personal

## Conclusión
La IA no reemplaza a los humanos, los potencia. El futuro de los contact centers está en la colaboración inteligente entre tecnología y talento humano.
      `,
            categoria: "tecnologia",
            fecha: "05 Mar 2025",
            autor: "jelcom",
            icono: <Zap size={32} className="text-orange-500" />
        },
        {
            titulo: "Estrategias Omnicanal: Conectando con Clientes Modernos",
            extracto: "Los clientes actuales no solo quieren servicio, quieren una experiencia fluida y consistente sin importar el canal de comunicación.",
            contenidoCompleto: `
# El Nuevo Paradigma de la Comunicación
Los clientes actuales no solo quieren servicio, quieren una experiencia fluida y consistente sin importar el canal de comunicación.

## ¿Qué es una Estrategia Omnicanal?
Una aproximación que integra diversos canales de comunicación para ofrecer una experiencia unificada y sin problemas.

## Componentes Clave

### 1. Integración de Canales
* Whatsapp
* Redes Sociales
* Email
* Teléfono
* Chat Web

### 2. Datos Centralizados
Cada interacción se registra en un sistema único, permitiendo:
* Seguimiento completo
* Contexto de conversaciones
* Personalización

## Estadísticas Reveladoras
* 89% de los clientes quieren comunicarse con empresas por múltiples canales
* Las empresas con estrategias omnicanal retienen 89% más clientes

## Implementación Efectiva
1. Mapeo de Journey del Cliente
2. Tecnología de Integración
3. Formación del Equipo
4. Análisis Continuo

## Conclusión
La estrategia omnicanal no es una opción, es una necesidad para mantenerse competitivo.
      `,
            categoria: "estrategia",
            fecha: "05 marzo 2025",
            autor: "jelcom",
            icono: <Layers size={32} className="text-orange-500" />
        },
        {
            titulo: "KPIs Críticos para Medir el Rendimiento de tu Contact Center",
            extracto: "Medir el rendimiento de un contact center va más allá de contar llamadas. Se trata de evaluar la experiencia integral del cliente.",
            contenidoCompleto: `
# Introducción
Medir el rendimiento de un contact center va más allá de contar llamadas. Se trata de evaluar la experiencia integral del cliente.

## KPIs Fundamentales

### 1. Tiempo de Respuesta
* Promedio de espera
* Tiempo de resolución
* Impacto en satisfacción del cliente

### 2. Tasa de Resolución en Primera Llamada
* Indicador clave de eficiencia
* Objetivo: +75% de resoluciones

### 3. Satisfacción del Cliente (CSAT)
* Medición directa de la experiencia
* Encuestas post-interacción
* Benchmark: 80% de satisfacción

### 4. Net Promoter Score (NPS)
* Mide probabilidad de recomendación
* Segmentación de clientes

### 5. Costos Operativos
* Costo por llamada
* Eficiencia de recursos
* Inversión en tecnología

## Herramientas de Medición
* Dashboards en tiempo real
* Análisis predictivo
* IA para interpretación de datos

## Conclusión
Los KPIs son la brújula que guía la mejora continua en contact centers.
      `,
            categoria: "mejores-practicas",
            fecha: "05 Marzo 2025",
            autor: "Jelcom",
            icono: <BookOpen size={32} className="text-orange-500" />
        }
    ];

    const categorias = [
        { id: 'todos', nombre: 'Todos' },
        { id: 'tecnologia', nombre: 'Tecnología' },
        { id: 'estrategia', nombre: 'Estrategia' },
        { id: 'mejores-practicas', nombre: 'Mejores Prácticas' }
    ];

    const articulosFiltrados = activeCategory === 'todos'
        ? articulosBlog
        : articulosBlog.filter(articulo => articulo.categoria === activeCategory);

    const handleLeerMas = (articulo) => {
        setSelectedArticle(articulo);
    };

    const closeModal = () => {
        setSelectedArticle(null);
    };

    return (
        <>
            <section id="blog-tecnico" className="py-20 bg-zinc-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl font-bold mb-4"
                        >
                            Blog <span className="text-[#fe9903]">Técnico</span>
                        </motion.h2>
                        <div className="w-24 h-1 bg-[#fe9903] mx-auto"></div>
                    </div>

                    {/* Filtros de categoría */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {categorias.map((categoria) => (
                            <button
                                key={categoria.id}
                                onClick={() => setActiveCategory(categoria.id)}
                                className={`
                                        px-3 py-1.5 sm:px-4 sm:py-2 
                                        text-sm sm:text-base 
                                        rounded-full 
                                        transition-all 
                                        duration-300 
                                        ${activeCategory === categoria.id
                                        ? 'bg-[#fe9903] text-black'
                                        : 'bg-zinc-800 text-white hover:bg-zinc-700'
                                    }
      `}
                            >
                                {categoria.nombre}
                            </button>
                        ))}
                    </div>

                    {/* Grid de Artículos */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {articulosFiltrados.map((articulo, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="bg-zinc-800 rounded-lg overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300"
                            >
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        {articulo.icono}
                                        <span className="ml-3 text-gray-400">{articulo.fecha}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-white">{articulo.titulo}</h3>
                                    <p className="text-gray-400 mb-4">{articulo.extracto}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-500">Por {articulo.autor}</span>
                                        <button
                                            onClick={() => handleLeerMas(articulo)}
                                            className="text-[#fe9903] hover:underline"
                                        >
                                            Leer más
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal para Contenido Completo */}
            {selectedArticle && (
                <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 overflow-y-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="bg-zinc-800 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-white hover:text-[#fe9903] z-10"
                        >
                            <X size={32} />
                        </button>

                        <div className="p-8">
                            <div className="flex items-center mb-6">
                                {selectedArticle.icono}
                                <div className="ml-4">
                                    <h2 className="text-3xl font-bold text-white">{selectedArticle.titulo}</h2>
                                    <div className="flex items-center mt-2">
                                        <span className="text-gray-400 mr-4">Fecha: {selectedArticle.fecha}</span>
                                        <span className="text-gray-400">Autor: {selectedArticle.autor}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="prose prose-invert max-w-none">
                                <ReactMarkdown>{selectedArticle.contenidoCompleto}</ReactMarkdown>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </>
    );
};

export default BlogTecnico;