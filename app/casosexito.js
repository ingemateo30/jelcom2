// Importaciones necesarias
import { motion } from 'framer-motion';
import { Star, TrendingUp, CheckCircle } from 'lucide-react';

// Componente de Casos de Éxito para añadir después de la sección de Servicios
const CasosExito = () => {
  const casosExito = [
    {
      cliente: "Bancolombia",
      industria: "Banca",
      desafio: "Reducir tiempo de respuesta en soporte",
      solucion: "Implementación de contact center omnicanal",
      resultado: {
        mejora: "Reducción del 40% en tiempo de espera",
        satisfaccion: "Aumento del 35% en satisfacción del cliente"
      },
      iconColor: "text-blue-500"
    },
    {
      cliente: "Movistar",
      industria: "Telecomunicaciones",
      desafio: "Gestión de quejas y reclamos",
      solucion: "Sistema de seguimiento y resolución automatizado",
      resultado: {
        mejora: "50% menos de escalamientos",
        satisfaccion: "Incremento del 45% en resolución primera llamada"
      },
      iconColor: "text-green-500"
    },
    {
      cliente: "Éxito",
      industria: "Retail",
      desafio: "Atención al cliente multicanal",
      solucion: "Integración de IA para soporte predictivo",
      resultado: {
        mejora: "Reducción del 30% en costos operativos",
        satisfaccion: "Aumento del 55% en lealtad del cliente"
      },
      iconColor: "text-orange-500"
    }
  ];

  return (
    <section id="casos-exito" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-4"
          >
            Casos de <span className="text-[#fe9903]">Éxito</span>
          </motion.h2>
          <div className="w-24 h-1 bg-[#fe9903] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {casosExito.map((caso, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-zinc-900 rounded-lg p-8 hover:bg-zinc-800 transition duration-300 border-b-2 border-[#fe9903]"
            >
              <div className={`mb-6 ${caso.iconColor}`}>
                <TrendingUp size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{caso.cliente}</h3>
              <div className="text-gray-400 mb-4">
                <p><strong>Industria:</strong> {caso.industria}</p>
                <p><strong>Desafío:</strong> {caso.desafio}</p>
                <p><strong>Solución:</strong> {caso.solucion}</p>
              </div>
              <div className="bg-zinc-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Resultados</h4>
                <ul>
                  <li className="flex items-center mb-2">
                    <CheckCircle className="mr-2 text-green-400" size={16} />
                    {caso.resultado.mejora}
                  </li>
                  <li className="flex items-center">
                    <Star className="mr-2 text-yellow-400" size={16} />
                    {caso.resultado.satisfaccion}
                  </li>
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasosExito;