import { motion } from 'framer-motion';
import { MessageCircle, Send, CheckCircle } from 'lucide-react';

const CallToAction = () => {
  const beneficios = [
    {
      icono: <CheckCircle size={24} className="text-black mr-2" />,
      texto: "Consulta sin costo"
    },
    {
      icono: <CheckCircle size={24} className="text-black mr-2" />,
      texto: "Soluciones personalizadas"
    },
    {
      icono: <CheckCircle size={24} className="text-black mr-2" />,
      texto: "Expertos en contact center"
    }
  ];

  return (
    <section className="bg-[#fe9903] text-black py-20 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute bg-black/10 rounded-full w-96 h-96 -top-40 -right-40"></div>
        <div className="absolute bg-black/10 rounded-full w-64 h-64 -bottom-20 -left-20"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <MessageCircle size={64} className="text-black mr-4" />
            <h2 className="text-4xl font-bold">
              Transformemos Juntos tu Comunicación
            </h2>
          </div>

          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Impulsa tu negocio con soluciones de contact center de vanguardia. 
            Nuestro equipo está listo para llevar tu atención al cliente al siguiente nivel.
          </p>

          {/* Beneficios */}
          <div className="flex justify-center space-x-6 mb-8">
            {beneficios.map((beneficio, index) => (
              <div 
                key={index} 
                className="flex items-center bg-black/10 px-4 py-2 rounded-full"
              >
                {beneficio.icono}
                <span>{beneficio.texto}</span>
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-10 py-4 rounded-full text-lg 
            hover:bg-zinc-800 transition-colors flex items-center mx-auto"
            onClick={() => window.open("https://wa.me/573212631673", "_blank")}
          >
            <Send size={24} className="mr-3" />
            Solicitar Consulta Gratuita
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;