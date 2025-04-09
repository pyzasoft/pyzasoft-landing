'use client';

import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import Image from 'next/image';
import { FaPython, FaGears, FaArrowRight, FaJs, FaCloud } from 'react-icons/fa6';
import ContactUsSection from '@/components/ContactUsSection';
import FooterSection from '@/components/FooterSection';
import ServicesSection from '@/components/ServicesSection';
import TeamSection from '@/components/TeamSection';
import ProjectsSection from '@/components/ProjectsSection';
// import AnimatedBackground from '@/components/AnimatedBackground';
const AnimatedBackground = dynamic(() => import('@/components/AnimatedBackground'), { ssr: false });
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen max-w-screen text-white relative overflow-x-hidden">
      {/* Unified Background */}
      <AnimatedBackground />

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
      <section id="home" className="min-h-screen relative flex items-center z-10 sm:mt-0 mt-[20%]">
        {/* Section-specific glowing elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-yellow-400/5 rounded-full blur-3xl"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10 py-12">
          <div className="flex flex-col md:flex-row items-center">
            {/* Content Section */}
            <motion.div
              className="md:w-1/2 mb-12 md:mb-0 md:pr-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
              }}
            >
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

              {/* Tagline */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 1 } }
                }}
                className="text-lg md:text-xl text-gray-300/90 mb-10 max-w-xl leading-relaxed"
              >
                Enterprise-grade solutions that drive digital transformation and deliver exceptional user experiences for industry leaders worldwide.
              </motion.p>

              {/* CTA Buttons */}
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
                  href="#services"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-4 rounded-lg font-semibold relative group overflow-hidden flex items-center justify-center border border-blue-700/30"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-blue-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative text-white">Explore Our Solutions</span>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Visual Element */}
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
                      <div className="w-12 h-12 bg-blue-900/70 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg shadow-blue-900/20 border border-blue-800/50">
                        <FaCloud className="text-blue-400" size={24} />
                      </div>
                    </motion.div>

                    <motion.div
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 flex items-center justify-center"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="w-12 h-12 bg-blue-900/70 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg shadow-blue-900/20 border border-blue-800/50">
                        <FaPython className="text-yellow-400" size={24} />
                      </div>
                    </motion.div>

                    <motion.div
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 w-16 h-16 flex items-center justify-center"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="w-12 h-12 bg-blue-900/70 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg shadow-blue-900/20 border border-blue-800/50">
                        <FaGears className="text-blue-400" size={24} />
                      </div>
                    </motion.div>

                    <motion.div
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 w-16 h-16 flex items-center justify-center"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="w-12 h-12 bg-blue-900/70 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg shadow-blue-900/20 border border-blue-800/50">
                        <FaJs className="text-yellow-400" size={24} />
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />
      
      {/* Projects Section */}
      <ProjectsSection />

      {/* Team Section */}
      <TeamSection />

      {/* Contact Section */}
      <ContactUsSection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
}