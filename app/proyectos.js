import { motion } from 'framer-motion';
import { Code, Server, Monitor, Globe } from 'lucide-react';

const Portafolio = () => {
  const proyectos = [
    {
      imagen: "url_de_imagen_proyecto_1",
      titulo: "Nombre del Proyecto 1",
      categoria: "Desarrollo de Software",
      descripcion: "Descripción detallada del proyecto, su alcance y logros principales.",
      tecnologias: ["Tecnología 1", "Tecnología 2", "Tecnología 3"],
      cliente: "Nombre del Cliente"
    },
    {
      imagen: "url_de_imagen_proyecto_2",
      titulo: "Nombre del Proyecto 2", 
      categoria: "Contact Center",
      descripcion: "Descripción detallada del proyecto, su alcance y logros principales.",
      tecnologias: ["Tecnología 1", "Tecnología 2", "Tecnología 3"],
      cliente: "Nombre del Cliente"
    },
    {
      imagen: "url_de_imagen_proyecto_3",
      titulo: "Nombre del Proyecto 3",
      categoria: "Integración de Sistemas",
      descripcion: "Descripción detallada del proyecto, su alcance y logros principales.",
      tecnologias: ["Tecnología 1", "Tecnología 2", "Tecnología 3"],
      cliente: "Nombre del Cliente"
    }
  ];

  return (
    <section id="portafolio" className="py-24 bg-zinc-900 relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Título principal */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Nuestros <span className="text-[#fe9903]">Proyectos realizados</span>
          </h2>
          <div className="w-24 h-1 bg-[#fe9903] mx-auto"></div>
        </motion.div>

        {/* Proyectos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((proyecto, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-zinc-800 rounded-xl overflow-hidden 
                         border border-[#fe9903]/20 
                         hover:shadow-lg transition-all duration-300 
                         transform hover:-translate-y-2"
            >
              {/* Imagen del Proyecto */}
              <div className="h-48 w-full relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110"
                  style={{ backgroundImage: proyecto.imagen }}
                >
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>
                <div className="absolute top-4 right-4 bg-[#fe9903] text-white px-3 py-1 rounded-full text-xs">
                  {proyecto.categoria}
                </div>
              </div>

              {/* Contenido del Proyecto */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{proyecto.titulo}</h3>
                <p className="text-gray-300 text-sm mb-4">{proyecto.descripcion}</p>
                
                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {proyecto.tecnologias.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-[#fe9903]/10 text-[#fe9903] 
                                 px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Cliente */}
                <div className="text-sm text-gray-400 mt-2">
                  Cliente: {proyecto.cliente}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portafolio;