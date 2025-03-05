import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Layers, Zap } from 'lucide-react';

const BlogTecnico = () => {
  const [activeCategory, setActiveCategory] = useState('todos');

  const articulosBlog = [
    {
      titulo: "IA en Centros de Contacto: Revolución en Atención al Cliente",
      extracto: "Descubre cómo la inteligencia artificial está transformando la experiencia de servicio...",
      categoria: "tecnologia",
      fecha: "15 Mar 2024",
      autor: "Carlos Méndez",
      icono: <Zap size={32} className="text-blue-500" />
    },
    {
      titulo: "Estrategias Omnicanal: Conectando con Clientes Modernos",
      extracto: "Guía completa para implementar una estrategia de comunicación multicanal efectiva...",
      categoria: "estrategia",
      fecha: "22 Feb 2024",
      autor: "María Rodríguez",
      icono: <Layers size={32} className="text-green-500" />
    },
    {
      titulo: "Mejores Prácticas en Gestión de Experiencia de Cliente",
      extracto: "Técnicas avanzadas para elevar la satisfacción y lealtad de los clientes...",
      categoria: "mejores-practicas",
      fecha: "10 Ene 2024",
      autor: "Juan Pérez",
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

  return (
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
        <div className="flex justify-center mb-12 space-x-4">
          {categorias.map((categoria) => (
            <button
              key={categoria.id}
              onClick={() => setActiveCategory(categoria.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === categoria.id 
                  ? 'bg-[#fe9903] text-black' 
                  : 'bg-zinc-800 text-white hover:bg-zinc-700'
              }`}
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
                  <button className="text-[#fe9903] hover:underline">
                    Leer más
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogTecnico;