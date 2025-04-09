import { motion } from "motion/react";
// import { FaPaintBrush, FaShieldAlt } from "react-icons/fa";
import { FaReact, FaPython, FaGears, FaCloud, FaHeadset, FaMobile } from "react-icons/fa6";

export default function ServicesSection() {
    return (
        <>
            {/* Services Section */}
            <section id="services" className="py-20 bg-transparent relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <motion.div
                    className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"
                    animate={{
                        opacity: [0.3, 0.5, 0.3],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>
                <motion.div
                    className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl"
                    animate={{
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                ></motion.div>

                <div className="container mx-auto px-4 md:px-6 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-yellow-400">Our Expertise</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 mx-auto mb-6"></div>
                        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                            We deliver cutting-edge solutions using the latest technologies and methodologies
                        </p>
                    </motion.div>

                    {/* Services Grid with reliable layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Web Development */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="p-6 rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-yellow-400/20 text-center shadow-lg transition-all"
                        >
                            <div className="mb-6 flex justify-center">
                                <div className="p-3 rounded-full bg-slate-900/50 border border-yellow-400/20">
                                    <FaReact className="text-4xl text-blue-500" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                                Web Development
                            </h3>
                            <p className="text-gray-300 mb-6">Building responsive, scalable, and performance-optimized web applications for modern businesses.</p>
                            <div className="flex flex-wrap justify-center gap-2">
                                {['React', 'Vue.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GraphQL'].map((tech, idx) => (
                                    <span key={idx} className="text-xs bg-slate-800/80 text-blue-400 px-2 py-1 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Backend Development */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="p-6 rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-yellow-400/20 text-center shadow-lg transition-all"
                        >
                            <div className="mb-6 flex justify-center">
                                <div className="p-3 rounded-full bg-slate-900/50 border border-yellow-400/20">
                                    <FaPython className="text-4xl text-blue-500" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                                Backend Development
                            </h3>
                            <p className="text-gray-300 mb-6">Building robust, scalable server-side applications and APIs that power your digital experiences.</p>
                            <div className="flex flex-wrap justify-center gap-2">
                                {['Node.js', 'Python', 'Django', 'Express', 'PostgreSQL', 'MongoDB'].map((tech, idx) => (
                                    <span key={idx} className="text-xs bg-slate-800/80 text-blue-400 px-2 py-1 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* DevOps & Infrastructure */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="p-6 rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-yellow-400/20 text-center shadow-lg transition-all"
                        >
                            <div className="mb-6 flex justify-center">
                                <div className="p-3 rounded-full bg-slate-900/50 border border-yellow-400/20">
                                    <FaGears className="text-4xl text-blue-400" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                                DevOps & Infrastructure
                            </h3>
                            <p className="text-gray-300 mb-6">Implementing CI/CD pipelines and cloud infrastructure with automation for reliable deployment and scaling.</p>
                            <div className="flex flex-wrap justify-center gap-2">
                                {['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'].map((tech, idx) => (
                                    <span key={idx} className="text-xs bg-slate-800/80 text-blue-400 px-2 py-1 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        

                        {/* Mobile App Development */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="p-6 rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-yellow-400/20 text-center shadow-lg transition-all"
                        >
                            <div className="mb-6 flex justify-center">
                                <div className="p-3 rounded-full bg-slate-900/50 border border-yellow-400/20">
                                    <FaMobile className="text-4xl text-yellow-400" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                                Mobile App Development
                            </h3>
                            <p className="text-gray-300 mb-6">Creating native and cross-platform mobile applications that deliver exceptional user experiences.</p>
                            <div className="flex flex-wrap justify-center gap-2">
                                {['React Native', 'Android', 'iOS', 'Playstore', 'App Store'].map((tech, idx) => (
                                    <span key={idx} className="text-xs bg-slate-800/80 text-blue-400 px-2 py-1 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* UI/UX Design */}
                        {/* <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="p-6 rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-yellow-400/20 text-center shadow-lg transition-all"
                        >
                            <div className="mb-6 flex justify-center">
                                <div className="p-3 rounded-full bg-slate-900/50 border border-yellow-400/20">
                                    <FaPaintBrush className="text-4xl text-blue-500" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                                UI/UX Design
                            </h3>
                            <p className="text-gray-300 mb-6">Creating intuitive, beautiful user interfaces and experiences that delight users and drive engagement.</p>
                            <div className="flex flex-wrap justify-center gap-2">
                                {['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Testing'].map((tech, idx) => (
                                    <span key={idx} className="text-xs bg-slate-800/80 text-blue-400 px-2 py-1 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div> */}

                        {/* SaaS Solutions */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="p-6 rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-yellow-400/20 text-center shadow-lg transition-all"
                        >
                            <div className="mb-6 flex justify-center">
                                <div className="p-3 rounded-full bg-slate-900/50 border border-yellow-400/20">
                                    <FaCloud className="text-4xl text-yellow-400" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                                SaaS Solutions
                            </h3>
                            <p className="text-gray-300 mb-6">Developing custom Software-as-a-Service products with subscription models and multi-tenant architectures.</p>
                            <div className="flex flex-wrap justify-center gap-2">
                                {['Multi-tenancy', 'Subscription', 'Analytics', 'Integrations'].map((tech, idx) => (
                                    <span key={idx} className="text-xs bg-slate-800/80 text-blue-400 px-2 py-1 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* IT Support & Maintenance */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="p-6 rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-yellow-400/20 text-center shadow-lg transition-all"
                        >
                            <div className="mb-6 flex justify-center">
                                <div className="p-3 rounded-full bg-slate-900/50 border border-yellow-400/20">
                                    <FaHeadset className="text-4xl text-yellow-400" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                                IT Support & Maintenance
                            </h3>
                            <p className="text-gray-300 mb-6">Providing ongoing support, maintenance, and upgrades to ensure your applications run smoothly.</p>
                            <div className="flex flex-wrap justify-center gap-2">
                                {['24/7 Support', 'Monitoring', 'Security Patching', 'Optimization'].map((tech, idx) => (
                                    <span key={idx} className="text-xs bg-slate-800/80 text-blue-400 px-2 py-1 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Data Engineering & Analytics */}
                        {/* <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="p-6 rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-yellow-400/20 text-center shadow-lg transition-all"
                        >
                            <div className="mb-6 flex justify-center">
                                <div className="p-3 rounded-full bg-slate-900/50 border border-yellow-400/20">
                                    <FaDatabase className="text-4xl text-yellow-400" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                                Data Engineering & Analytics
                            </h3>
                            <p className="text-gray-300 mb-6">Building data pipelines, warehouses, and analytics solutions to turn your data into actionable insights.</p>
                            <div className="flex flex-wrap justify-center gap-2">
                                {['Big Data', 'ETL', 'Data Warehousing', 'Visualization'].map((tech, idx) => (
                                    <span key={idx} className="text-xs bg-slate-800/80 text-blue-400 px-2 py-1 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div> */}

                        {/* Cybersecurity */}
                        {/* <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="p-6 rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-yellow-400/20 text-center shadow-lg transition-all"
                        >
                            <div className="mb-6 flex justify-center">
                                <div className="p-3 rounded-full bg-slate-900/50 border border-yellow-400/20">
                                    <FaShieldAlt className="text-4xl text-blue-500" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                                Cybersecurity
                            </h3>
                            <p className="text-gray-300 mb-6">Implementing robust security measures to protect your applications, data, and infrastructure from threats.</p>
                            <div className="flex flex-wrap justify-center gap-2">
                                {['Threat Detection', 'Penetration Testing', 'Security Audits', 'Compliance'].map((tech, idx) => (
                                    <span key={idx} className="text-xs bg-slate-800/80 text-blue-400 px-2 py-1 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div> */}
                    </div>

                    {/* Call to Action */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="mt-16 text-center"
                    >
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-lg font-semibold shadow-lg shadow-blue-700/30 relative overflow-hidden group"
                        >
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            <span className="relative">Discuss Your Project</span>
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </>
    )
}