import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Users, Server, Layout, Send, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const navItems = [
    { name: 'inicio', icon: <Home size={20} /> },
    { name: 'nosotros', icon: <Users size={20} /> },
    { name: 'servicios', icon: <Server size={20} /> },
    { name: 'planes', icon: <Layout size={20} /> },
    { name: 'contacto', icon: <Send size={20} /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrollY > 50
          ? "bg-gradient-to-r from-zinc-900 to-black/90 shadow-2xl"
          : "bg-gradient-to-r from-black/70 to-zinc-900/70 backdrop-blur-xl"
      } border-b border-[#fe9903]/10`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo con efecto de neón */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2"
        >
          <div className="text-3xl font-extrabold tracking-tight">
            <span className="text-white">Jel</span>
            <span 
              className="text-[#fe9903] drop-shadow-[0_0_10px_rgba(254,153,3,0.5)]
                         hover:drop-shadow-[0_0_20px_rgba(254,153,3,0.7)]
                         transition-all duration-300"
            >
              com
            </span>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => navigateTo(item.name)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: navItems.findIndex(i => i.name === item.name) * 0.1 }}
              className={`group flex items-center space-x-2 text-sm font-medium uppercase tracking-wider
                          transition-all duration-300 relative
                          ${activeSection === item.name 
                            ? "text-[#fe9903]" 
                            : "text-gray-300 hover:text-white"}`}
            >
              <div className={`${activeSection === item.name ? "text-[#fe9903]" : "text-gray-500 group-hover:text-[#fe9903]"}`}>
                {item.icon}
              </div>
              <span>{item.name}</span>
              {activeSection === item.name && (
                <motion.div 
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#fe9903]"
                />
              )}
            </motion.button>
          ))}
        </nav>

        {/* Contact Button */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block"
        >
          <button className="px-6 py-2 bg-[#fe9903] text-black 
                             font-bold rounded-full 
                             hover:bg-[#ff7f00] 
                             transition-all duration-300
                             hover:scale-105 
                             hover:shadow-[0_0_15px_rgba(254,153,3,0.5)]">
            Contáctanos
          </button>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-white relative z-50"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full 
                        bg-gradient-to-br from-zinc-900 to-black 
                        shadow-2xl border-t border-[#fe9903]/10"
          >
            <div className="container mx-auto px-4 py-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => navigateTo(item.name)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`w-full text-left py-4 border-b border-zinc-800 
                              flex items-center space-x-4
                              ${activeSection === item.name 
                                ? "text-[#fe9903]" 
                                : "text-white hover:text-[#fe9903]"}`}
                >
                  <div>{item.icon}</div>
                  <span className="text-lg uppercase tracking-wider">
                    {item.name}
                  </span>
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="mt-6 w-full bg-[#fe9903] text-black 
                           py-3 rounded-full font-bold
                           hover:bg-[#ff7f00] transition-colors"
              >
                Contáctanos
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;