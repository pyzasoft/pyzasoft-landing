import { motion } from "motion/react";
import { FaEnvelope, FaArrowRight, FaPhone, FaLocationDot } from "react-icons/fa6";

export default function ContactUsSection() {
    return (
        <section id="contact" className="py-20 bg-transparent relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
            <motion.div
                className="absolute -top-40 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
                animate={{
                    opacity: [0.1, 0.2, 0.1],
                    scale: [1, 1.1, 1],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
                className="absolute -bottom-40 left-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"
                animate={{
                    opacity: [0.1, 0.2, 0.1],
                    scale: [1, 1.1, 1],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            ></motion.div>

            {/* Animated Particles */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div className="w-full h-full">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <motion.div
                            key={index}
                            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, Math.random() * -200 - 100],
                                x: [0, (Math.random() - 0.5) * 100],
                                opacity: [0, 0.8, 0],
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

            <div className="container mx-auto px-4 md:px-6 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-yellow-400">Let&apos;s Work Together</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 mx-auto mb-6"></div>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        We&apos;re always looking for new challenges and opportunities to create amazing software solutions
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    <motion.div
                        className="lg:col-span-2"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 rounded-xl h-full backdrop-blur-sm border border-yellow-400/20 shadow-lg shadow-blue-500/5 relative overflow-hidden group">
                            {/* Background Highlight Effect */}
                            <motion.div
                                className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-400/5 rounded-full blur-2xl"
                                animate={{
                                    opacity: [0.1, 0.3, 0.1],
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            ></motion.div>

                            <h3 className="text-2xl font-bold text-yellow-400 mb-8 relative">Contact Information</h3>

                            <div className="space-y-8 relative z-10">
                                <motion.div
                                    className="flex items-start"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <div className="w-12 h-12 rounded-full bg-blue-900/50 border border-blue-500/30 flex items-center justify-center mr-4 shadow-md">
                                        <FaEnvelope className="text-blue-500 text-xl" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-yellow-400 mb-1">Email</div>
                                        <a href="mailto:contact@pyzasoft.com" className="text-gray-300 hover:text-blue-500 transition-colors flex items-center group">
                                            <span className="group-hover:underline">contact@pyzasoft.com</span>
                                            <motion.span
                                                className="ml-2 opacity-0 group-hover:opacity-100"
                                                animate={{ x: [0, 4, 0] }}
                                                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                            >
                                                <FaArrowRight className="text-xs" />
                                            </motion.span>
                                        </a>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex items-start"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <div className="w-12 h-12 rounded-full bg-blue-900/50 border border-blue-500/30 flex items-center justify-center mr-4 shadow-md">
                                        <FaPhone className="text-blue-500 text-xl" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-yellow-400 mb-1">Phone</div>
                                        <a href="tel:+8801795665287" className="text-gray-300 hover:text-blue-500 transition-colors flex items-center group">
                                            <span className="group-hover:underline">+880 (17) 95-665287</span>
                                            <motion.span
                                                className="ml-2 opacity-0 group-hover:opacity-100"
                                                animate={{ x: [0, 4, 0] }}
                                                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                            >
                                                <FaArrowRight className="text-xs" />
                                            </motion.span>
                                        </a>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex items-start"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <div className="w-12 h-12 rounded-full bg-blue-900/50 border border-blue-500/30 flex items-center justify-center mr-4 shadow-md">
                                        <FaLocationDot className="text-blue-500 text-xl" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-yellow-400 mb-1">Office</div>
                                        <address className="text-gray-300 not-italic">
                                            Dhka<br />
                                            Bangladesh<br />
                                            {/* San Francisco, CA 94103 */}
                                        </address>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Social Media Links */}
                            {/* <div className="mt-12 relative z-10">
                                <h4 className="text-blue-400 font-medium mb-4">Connect With Us</h4>
                                <div className="flex space-x-4">
                                    {['twitter', 'linkedin', 'github', 'facebook'].map((platform, index) => (
                                        <motion.a
                                            key={index}
                                            href={`#${platform}`}
                                            className="w-10 h-10 rounded-full bg-blue-900/50 border border-blue-500/30 flex items-center justify-center text-gray-300 hover:text-yellow-400 hover:border-yellow-400/50 transition-all shadow-md"
                                            whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3)" }}
                                        >
                                            <span className="text-sm">{platform.charAt(0).toUpperCase()}</span>
                                        </motion.a>
                                    ))}
                                </div>
                            </div> */}

                            {/* Decorative Elements */}
                            <div className="absolute bottom-4 right-4 w-16 h-16 opacity-10">
                                <svg viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="40" stroke="rgba(255, 204, 0, 0.5)" strokeWidth="2" fill="none" />
                                    <path d="M30,50 L70,50 M50,30 L50,70" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="2" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="lg:col-span-3"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <form className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 rounded-xl shadow-lg shadow-blue-500/5 backdrop-blur-sm border border-yellow-400/20 relative overflow-hidden">
                            {/* Background Highlight Effect */}
                            <motion.div
                                className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl"
                                animate={{
                                    opacity: [0.1, 0.3, 0.1],
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            ></motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 relative z-10">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-yellow-400 mb-2">Name</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-4 py-3 bg-slate-700/50 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-300 placeholder-gray-400"
                                            placeholder="Your name"
                                        />
                                        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-yellow-400 group-focus-within:w-full transition-all duration-300"></div>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-yellow-400 mb-2">Email</label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-4 py-3 bg-slate-700/50 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-300 placeholder-gray-400"
                                            placeholder="your.email@example.com"
                                        />
                                        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-yellow-400 group-focus-within:w-full transition-all duration-300"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6 relative z-10">
                                <label htmlFor="subject" className="block text-sm font-medium text-yellow-400 mb-2">Subject</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="subject"
                                        className="w-full px-4 py-3 bg-slate-700/50 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-300 placeholder-gray-400"
                                        placeholder="How can we help you?"
                                    />
                                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-yellow-400 group-focus-within:w-full transition-all duration-300"></div>
                                </div>
                            </div>

                            <div className="mb-8 relative z-10">
                                <label htmlFor="message" className="block text-sm font-medium text-yellow-400 mb-2">Message</label>
                                <div className="relative">
                                    <textarea
                                        id="message"
                                        rows={6}
                                        className="w-full px-4 py-3 bg-slate-700/50 border border-blue-500/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-300 placeholder-gray-400"
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-yellow-400 group-focus-within:w-full transition-all duration-300"></div>
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3)" }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white py-4 rounded-lg font-semibold shadow-lg relative overflow-hidden group z-10"
                                onClick={() => {
                                    const name = (document.getElementById('name') as HTMLInputElement)?.value || '';
                                    const email = (document.getElementById('email') as HTMLInputElement)?.value || '';
                                    const subject = (document.getElementById('subject') as HTMLInputElement)?.value || '';
                                    const message = (document.getElementById('message') as HTMLTextAreaElement)?.value || '';

                                    const mailtoLink = `mailto:contact@pyzasoft.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
                                    // alert(mailtoLink); // Log the link to debug
                                    // window.open(mailtoLink, "_blank");
                                    window.location.href = mailtoLink;
                                }}
                            >
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                <span className="relative flex items-center justify-center">
                                    Send Message
                                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </motion.button>

                            {/* Form Status Indicators (Optional) */}
                            <div className="mt-4 text-center opacity-0">
                                <div className="text-green-400">Thank you! Your message has been sent successfully.</div>
                                <div className="text-red-400">Oops! Something went wrong. Please try again.</div>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}