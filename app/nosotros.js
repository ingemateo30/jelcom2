import { motion } from 'framer-motion';
import { Target, Eye, CheckCircle, Award } from 'lucide-react';

const SobreNosotros = () => {
  const misionVisionData = [
    {
      icono: <Target size={48} className="text-[#fe9903]" />, 
      titulo: "Misión",
      descripcion: "Transformar la experiencia de comunicación entre empresas y clientes mediante soluciones innovadoras de contact center, utilizando tecnología de vanguardia y un enfoque centrado en el ser humano.",
    },
    {
      icono: <Eye size={48} className="text-[#fe9903]" />, 
      titulo: "Visión", 
      descripcion: "Ser el líder indiscutible en soluciones de comunicación empresarial, reconocidos por nuestra capacidad de innovar constantemente y crear conexiones significativas que impulsen el éxito de nuestros clientes.",
    }
  ];

  const caracteristicas = [
    {
      icono: <CheckCircle size={32} />,
      titulo: "Innovación Constante",
      descripcion: "Soluciones tecnológicas de punta que transforman la comunicación empresarial."
    },
    {
      icono: <Award size={32} />,
      titulo: "Calidad Garantizada",
      descripcion: "Comprometidos con la excelencia y satisfacción total de nuestros clientes."
    }
  ];

  return (
    <section id="nosotros" className="py-24 bg-zinc-900 relative">
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
            Sobre <span className="text-[#fe9903]">Nosotros</span>
          </h2>
          <div className="w-24 h-1 bg-[#fe9903] mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Columna de Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">
                Mejoramos la comunicación entre <span className="text-[#fe9903]">empresas y clientes</span>
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                En Jelcom, ofrecemos soluciones de contact center de vanguardia que optimizan la comunicación empresarial. 
                Combinamos tecnología avanzada con estrategias personalizadas para garantizar experiencias excepcionales.
              </p>
            </div>

            {/* Misión y Visión Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {misionVisionData.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-zinc-800 p-6 rounded-xl border border-[#fe9903]/20 
                             hover:bg-zinc-700 transition-all duration-300 
                             transform hover:-translate-y-2 hover:shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    {item.icono}
                    <h4 className="text-xl font-bold ml-4 text-white">{item.titulo}</h4>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.descripcion}</p>
                </motion.div>
              ))}
            </div>

            {/* Características Adicionales */}
            <div className="grid md:grid-cols-2 gap-4 pt-6">
              {caracteristicas.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex items-center bg-zinc-800/50 p-4 rounded-lg hover:bg-zinc-800 transition-colors"
                >
                  <div className="text-[#fe9903] mr-4">{item.icono}</div>
                  <div>
                    <h5 className="font-bold text-white">{item.titulo}</h5>
                    <p className="text-gray-400 text-sm">{item.descripcion}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Columna de Imagen con Efecto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="aspect-square rounded-2xl overflow-hidden 
                            border-4 border-[#fe9903]/30 
                            transform transition-transform duration-500 
                            group-hover:scale-105 group-hover:rotate-2 
                            shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 
                            group-hover:scale-110 group-hover:brightness-75"
                style={{ backgroundImage: "url('logos/qs.png')" }}
              ></div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 
                            w-24 h-24 bg-[#fe9903] 
                            rounded-full opacity-80 
                            blur-2xl group-hover:opacity-50 
                            transition-all duration-500"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;