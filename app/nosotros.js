import { motion } from 'framer-motion';
import { Target, Eye, CheckCircle, TrendingUp } from 'lucide-react';

const SobreNosotros = () => {
  const misionVisionData = [
    {
      icono: <Target size={48} className="text-[#fe9903] mb-4" />,
      titulo: "Misión",
      descripcion: "Transformar la experiencia de comunicación entre empresas y clientes mediante soluciones innovadoras de contact center, utilizando tecnología de vanguardia y un enfoque centrado en el ser humano.",
      color: "bg-orange-900/30"
    },
    {
      icono: <Eye size={48} className="text-[#fe9903] mb-4" />,
      titulo: "Visión", 
      descripcion: "Ser el líder indiscutible en soluciones de comunicación empresarial, reconocidos por nuestra capacidad de innovar constantemente y crear conexiones significativas que impulsen el éxito de nuestros clientes.",
      color: "bg-orange-900/30"
    }
  ];


  return (
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
            <h3 className="text-3xl font-bold mb-6">
              Mejoramos la comunicación entre <span className="text-[#fe9903]">empresas y clientes</span>
            </h3>
            <p className="text-gray-300 mb-6">
              En Jelcom, nos dedicamos a proporcionar soluciones de contact center de vanguardia que transforman la manera en que las empresas se conectan con sus clientes.
            </p>
            <p className="text-gray-300 mb-8">
              Con un equipo experto, combinamos tecnología avanzada con estrategias personalizadas para ofrecer experiencias excepcionales.
            </p>

            {/* Misión y Visión */}
            <div className="grid md:grid-cols-2 gap-6">
              {misionVisionData.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`p-6 rounded-lg ${item.color} border border-[#fe9903]/20 hover:scale-105 transition-transform`}
                >
                  {item.icono}
                  <h4 className="text-xl font-bold mb-3 text-white">{item.titulo}</h4>
                  <p className="text-gray-300">{item.descripcion}</p>
                </motion.div>
              ))}
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
  );
};

export default SobreNosotros;