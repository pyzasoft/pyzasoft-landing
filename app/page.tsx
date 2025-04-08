'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaReact, FaPython, FaGears, FaCheck, FaArrowRight, FaEnvelope, FaPhone, FaLocationDot } from 'react-icons/fa6';

export default function Home() {
  const [activeTab, setActiveTab] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  // Project data
  const projects = [
    {
      id: 1,
      title: 'Order Management System',
      category: 'web',
      description: 'A comprehensive solution for managing orders, inventory, and customer relationships for a national retail chain.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      image: '/oms-preview.jpg',
    },
    {
      id: 2,
      title: 'Hotel Booking Platform',
      category: 'web',
      description: 'An intuitive platform for hotel reservations and management with integrated payment processing.',
      technologies: ['React', 'Django', 'PostgreSQL', 'Stripe API'],
      image: '/hotel-preview.jpg',
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-yellow-400/20">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center"
              >
                <div className="w-10 h-10 mr-2 rounded-full overflow-hidden">
                <Image
                        src="/assets/LOGO.png"
                        alt="PyzaSoft Logo"
                        width={120}
                        height={120}
                        className="object-contain"
                      />
                </div>
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-yellow-400">
                  Pyza<span className="text-yellow-400">Soft</span>
                </div>
              </motion.div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'Services', 'Projects', 'Team', 'Contact'].map((item, index) => (
                <motion.a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-yellow-400 font-medium transition-colors relative group"
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 500 }}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </motion.a>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-yellow-400 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4"
              >
                <div className="flex flex-col space-y-4 py-4">
                  {['Home', 'Services', 'Projects', 'Team', 'Contact'].map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-300 hover:text-yellow-400 font-medium transition-colors block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Hero Section */}
      {/* High-End Enterprise Hero Section */}
<section id="home" className="min-h-screen bg-slate-900 relative overflow-hidden flex items-center">
  {/* Advanced Animated Background */}
  <div className="absolute inset-0 overflow-hidden">
    {/* Base Grid Layer */}
    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
    
    {/* Gradient Overlays */}
    <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/80 via-slate-900/90 to-slate-950/80"></div>
    
    {/* Dynamic Lighting Effects */}
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {/* Premium Light Sources */}
      <motion.div
        className="absolute top-[-10%] left-[-5%] w-[70%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]"
        animate={{
          opacity: [0.4, 0.6, 0.4],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      <motion.div
        className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[60%] bg-yellow-400/5 rounded-full blur-[150px]"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      ></motion.div>
    </motion.div>
    
    {/* Particle Effect Layer */}
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7 }}
      transition={{ duration: 3 }}
    >
      {Array.from({ length: 15 }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * -100 - 50],
            x: [0, (Math.random() - 0.5) * 50],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
      {Array.from({ length: 15 }).map((_, index) => (
        <motion.div
          key={index + 15}
          className="absolute w-1 h-1 bg-yellow-300/30 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * -100 - 50],
            x: [0, (Math.random() - 0.5) * 50],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  </div>

  <div className="container mx-auto px-4 md:px-6 relative z-10 py-12">
    <div className="flex flex-col md:flex-row items-center">
      {/* Premium Content Section */}
      <motion.div
        className="md:w-1/2 mb-12 md:mb-0 md:pr-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
      >
          {/* Brand Logo with Premium Animation */}
        {/* <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
          className="inline-block mb-8 relative"
        >
          <div className="relative">
            <motion.div
              className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500 to-yellow-400 opacity-30 blur-lg"
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            <div className="relative md:ml-0 ml-auto mr-auto w-40 h-40">
              <Image
                src="/assets/LOGO.png"
                alt="PyzaSoft Logo"
                width={160}
                height={160}
                className="object-contain"
              />
            </div>
          </div>
        </motion.div> */}
        
        {/* Headline with Staggered Reveal */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight"
        >
          <div className="overflow-hidden">
            <motion.span 
              className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
            >
              Transform
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span 
              className="block text-white"
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.33, 1, 0.68, 1] }}
            >
              Ideas Into
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span 
              className="block bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-300"
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.33, 1, 0.68, 1] }}
            >
              Reality
            </motion.span>
          </div>
        </motion.h1>
        
        {/* Premium Tagline */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 1 } }
          }}
          className="text-lg md:text-xl text-gray-300/90 mb-10 max-w-xl leading-relaxed"
        >
          Enterprise-grade solutions that drive digital transformation and deliver exceptional user experiences for industry leaders worldwide.
        </motion.p>
        
        {/* CTA Buttons with Premium Styling */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 1.2 } }
          }}
          className="flex flex-col sm:flex-row gap-5"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg shadow-blue-700/30 flex items-center justify-center group relative overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-blue-700 transition-all duration-300 ease-out transform group-hover:scale-105"></span>
            <span className="absolute -inset-px bg-gradient-to-r from-yellow-400/20 to-blue-400/20 rounded-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300"></span>
            <span className="relative flex items-center">
              Schedule a Consultation 
              <motion.span 
                className="ml-2"
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <FaArrowRight />
              </motion.span>
            </span>
          </motion.a>
          
          <motion.a
            href="#solutions"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 rounded-lg font-semibold relative group overflow-hidden flex items-center justify-center border border-blue-700/30"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-blue-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative text-white">Explore Our Solutions</span>
          </motion.a>
        </motion.div>
        
        {/* Enterprise Credentials */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1.2, delay: 1.5 } }
          }}
          className="mt-12 flex flex-col"
        >
          <p className="text-sm text-gray-400 mb-3">Trusted by industry leaders</p>
          <div className="flex items-center space-x-8">
            {/* Enterprise client logos would go here */}
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="h-6 w-16 bg-gray-400/10 rounded-md"></div>
            ))}
          </div>
        </motion.div>
      </motion.div>
      
      {/* Premium Visual Element */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="md:w-1/2 w-full"
      >
        <div className="relative w-full h-[500px] md:h-[600px]">
          {/* Orbital Animation */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="relative w-[400px] h-[400px]"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {/* Orbital Ring */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-blue-500/20"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-yellow-400/10"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] rounded-full border border-blue-500/10"></div>
              
              {/* Orbital Elements */}
              <motion.div 
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 flex items-center justify-center"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-12 h-12 bg-blue-900/70 backdrop-blur-md rounded-lg flex items-center justify-center shadow-lg shadow-blue-900/20 border border-blue-800/50">
                  <FaReact className="text-blue-400" size={24} />
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 flex items-center justify-center"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-12 h-12 bg-blue-900/70 backdrop-blur-md rounded-lg flex items-center justify-center shadow-lg shadow-blue-900/20 border border-blue-800/50">
                  <FaPython className="text-yellow-400" size={24} />
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute left-0 top-1/2 transform -translate-y-1/2 w-16 h-16 flex items-center justify-center"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-12 h-12 bg-blue-900/70 backdrop-blur-md rounded-lg flex items-center justify-center shadow-lg shadow-blue-900/20 border border-blue-800/50">
                  <FaGears className="text-blue-400" size={24} />
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute right-0 top-1/2 transform -translate-y-1/2 w-16 h-16 flex items-center justify-center"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-12 h-12 bg-blue-900/70 backdrop-blur-md rounded-lg flex items-center justify-center shadow-lg shadow-blue-900/20 border border-blue-800/50">
                  <FaCheck className="text-yellow-400" size={24} />
                </div>
              </motion.div>
            </motion.div>
            
            {/* Center Core Element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <motion.div
                className="relative w-48 h-48"
                animate={{ 
                  rotate: [0, 10, 0, -10, 0],
                  scale: [1, 1.05, 1, 1.05, 1]
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <motion.div
                  className="absolute -inset-6 rounded-full opacity-20 blur-2xl bg-gradient-to-r from-blue-500 to-yellow-400"
                  animate={{ 
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                ></motion.div>
                
                <div className="absolute inset-0 rounded-full overflow-hidden backdrop-blur-md bg-gradient-to-br from-blue-900/40 to-slate-900/60 border border-blue-700/30 shadow-xl shadow-blue-900/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-yellow-400/10"></div>
                  
                  {/* Dynamic Light Elements */}
                  <motion.div
                    className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-blue-400/20 rounded-full blur-xl"
                    animate={{ 
                      scale: [1, 1.2, 1], 
                      opacity: [0.2, 0.4, 0.2], 
                      x: [-5, 5, -5], 
                      y: [-5, 5, -5] 
                    }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  ></motion.div>
                  
                  <motion.div
                    className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-yellow-400/20 rounded-full blur-xl"
                    animate={{ 
                      scale: [1, 1.2, 1], 
                      opacity: [0.2, 0.4, 0.2], 
                      x: [5, -5, 5], 
                      y: [5, -5, 5] 
                    }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 1 
                    }}
                  ></motion.div>
                  
                  {/* Center Logo */}
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="w-32 h-32 relative">
                      <Image
                        src="/assets/LOGO.png"
                        alt="PyzaSoft Logo"
                        width={120}
                        height={120}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Decorative Light Flares */}
          <motion.div
            className="absolute top-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          
          <motion.div
            className="absolute bottom-0 left-1/4 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          ></motion.div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-blue-900/30 via-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-yellow-400">Our Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We deliver cutting-edge solutions using the latest technologies and methodologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'React Development', icon: <FaReact className="text-4xl text-blue-500" />, description: 'Building responsive and dynamic web applications with React ecosystem' },
              { title: 'Python Development', icon: <FaPython className="text-4xl text-yellow-400" />, description: 'Creating robust backend systems and data processing applications' },
              { title: 'DevOps Solutions', icon: <FaGears className="text-4xl text-blue-500" />, description: 'Implementing CI/CD pipelines and cloud infrastructure automation' },
              { title: 'Quality Assurance', icon: <FaCheck className="text-4xl text-yellow-400" />, description: 'Comprehensive testing strategies for reliable software delivery' },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-yellow-400/20 text-center shadow-lg shadow-blue-500/5 transition-all"
              >
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-yellow-400">Our Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore our portfolio of successful projects delivered to satisfied clients
            </p>
          </motion.div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-slate-800/50 p-1 rounded-full shadow-lg shadow-blue-500/10 border border-yellow-400/20">
              {['all', 'web', 'mobile', 'enterprise'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTab === tab 
                      ? 'bg-gradient-to-r from-blue-500 to-yellow-400 text-white' 
                      : 'text-gray-300 hover:text-yellow-400'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl overflow-hidden shadow-lg shadow-blue-500/10 border border-yellow-400/20 group hover:shadow-xl hover:shadow-blue-500/20 transition-all"
              >
                <div className="h-64 bg-gradient-to-r from-blue-600/20 to-yellow-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-16 w-16 mb-4">
                      <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#FFCC00" strokeWidth="2" />
                        <circle cx="50" cy="50" r="20" fill="#0088FF" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-xl backdrop-blur-sm">
                    {project.title}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-yellow-500/70 backdrop-blur-sm group-hover:bg-opacity-80 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button className="bg-white text-slate-900 px-4 py-2 rounded-full font-medium transform scale-90 group-hover:scale-100 transition-all">
                      View Project
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-yellow-400 mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-xs bg-blue-900/30 text-yellow-400 px-2 py-1 rounded-full border border-yellow-400/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-yellow-400">Our Team</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Meet our team of expert developers and designers dedicated to delivering excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Alex Morgan', role: 'Lead Developer', image: '/team1.jpg' },
              { name: 'Sarah Chen', role: 'UI/UX Designer', image: '/team2.jpg' },
              { name: 'David Kim', role: 'Backend Engineer', image: '/team3.jpg' },
              { name: 'Maria Rodriguez', role: 'DevOps Specialist', image: '/team4.jpg' },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl overflow-hidden text-center group backdrop-blur-sm border border-yellow-400/20 shadow-lg shadow-blue-500/5 hover:shadow-blue-500/20 hover:shadow-xl transition-all"
              >
                <div className="h-64 bg-gradient-to-br from-blue-600/20 to-yellow-500/20 relative flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-blue-900/30 backdrop-blur-sm border-2 border-yellow-400/40 flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-yellow-400/20"></div>
                    <span className="text-4xl relative z-10">👤</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-yellow-400">{member.name}</h3>
                  <p className="text-blue-400 font-medium">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-900/30 to-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-yellow-400">What Our Clients Say</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 mx-auto mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "PyzaSoft exceeded our expectations. The order management system they built has streamlined our operations significantly.",
                author: "John Doe",
                position: "CEO, RetailCorp"
              },
              {
                quote: "Working with PyzaSoft was a pleasure. They delivered our hotel booking platform on time and with all the features we needed.",
                author: "Jane Smith",
                position: "Operations Manager, Luxury Hotels"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/70 to-blue-900/30 backdrop-blur-sm p-8 rounded-xl border border-yellow-400/20 shadow-lg shadow-blue-500/5"
              >
                <div className="text-xl italic mb-6">"{testimonial.quote}"</div>
                <div>
                  <div className="font-semibold text-yellow-400">{testimonial.author}</div>
                  <div className="text-blue-300 text-sm">{testimonial.position}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-yellow-400">Let's Work Together</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We're always looking for new challenges and opportunities to create amazing software solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 rounded-xl h-full backdrop-blur-sm border border-yellow-400/20 shadow-lg shadow-blue-500/5">
                <h3 className="text-2xl font-bold text-yellow-400 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <FaEnvelope className="text-blue-500 mt-1 mr-4" />
                    <div>
                      <div className="font-semibold text-yellow-400">Email</div>
                      <a href="mailto:info@pyzasoft.com" className="text-gray-300 hover:text-blue-500 transition-colors">
                        info@pyzasoft.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaPhone className="text-blue-500 mt-1 mr-4" />
                    <div>
                      <div className="font-semibold text-yellow-400">Phone</div>
                      <a href="tel:+1234567890" className="text-gray-300 hover:text-blue-500 transition-colors">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaLocationDot className="text-blue-500 mt-1 mr-4" />
                    <div>
                      <div className="font-semibold text-yellow-400">Office</div>
                      <address className="text-gray-300 not-italic">
                        123 Innovation Drive<br />
                        Tech Park, Suite 456<br />
                        San Francisco, CA 94103
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <form className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 rounded-xl shadow-lg shadow-blue-500/5 backdrop-blur-sm border border-yellow-400/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-yellow-400 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-slate-700/50 border border-yellow-400/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-300 placeholder-gray-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-yellow-400 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-slate-700/50 border border-yellow-400/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-300 placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-yellow-400 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 bg-slate-700/50 border border-yellow-400/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-300 placeholder-gray-400"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-yellow-400 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 bg-slate-700/50 border border-yellow-400/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-300 placeholder-gray-400"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-500 to-yellow-400 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/40 transition-all"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-12 pb-6 border-t border-yellow-400/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center text-2xl font-bold mb-4">
                <div className="w-8 h-8 mr-2">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="50" fill="#0088FF" />
                    <path d="M50 15 C20 15, 15 45, 50 85 C85 45, 80 15, 50 15" fill="#FFCC00" />
                    <circle cx="50" cy="35" r="8" fill="#FFCC00" />
                    <circle cx="50" cy="65" r="8" fill="#0088FF" />
                  </svg>
                </div>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-yellow-400">
                  Pyza<span className="text-yellow-400">Soft</span>
                </span>
              </div>
              <p className="text-gray-300 mb-4">
                Transforming ideas into exceptional digital experiences with cutting-edge technology solutions.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'Services', 'Projects', 'Team', 'Contact'].map((item, index) => (
                  <li key={index}>
                    <a 
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-300 hover:text-blue-500 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {['twitter', 'facebook', 'linkedin', 'github'].map((platform, index) => (
                  <a 
                    key={index}
                    href={`#${platform}`}
                    className="w-10 h-10 rounded-full bg-slate-800/50 border border-yellow-400/20 flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-yellow-400 transition-all"
                  >
                    <div className="text-sm text-gray-300">{platform.charAt(0).toUpperCase()}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-yellow-400/20 pt-6 text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} PyzaSoft. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}