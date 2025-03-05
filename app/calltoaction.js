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

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col sm:flex-row justify-center items-center mb-6">
            <MessageCircle size={48} className="text-black mb-4 sm:mb-0 sm:mr-4" />
            <h2 className="text-2xl sm:text-4xl font-bold text-center">
              Transformemos Juntos tu Comunicación
            </h2>
          </div>

          <p className="text-base sm:text-xl mb-8 max-w-2xl mx-auto">
            Impulsa tu negocio con soluciones de contact center de vanguardia. 
            Nuestro equipo está listo para llevar tu atención al cliente al siguiente nivel.
          </p>

          {/* Beneficios */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
            {beneficios.map((beneficio, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center bg-black/10 px-4 py-2 rounded-full"
              >
                {beneficio.icono}
                <span className="text-sm sm:text-base">{beneficio.texto}</span>
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg 
            hover:bg-zinc-800 transition-colors flex items-center mx-auto"
            onClick={() => window.open("https://wa.me/573212631673", "_blank")}
          >
            <Send size={20} className="mr-2 sm:mr-3" />
            Solicitar Consulta Gratuita
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;