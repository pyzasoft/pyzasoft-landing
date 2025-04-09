/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "motion/react";
import Image from "next/image";

export default function ProjectsSection() {
    // Featured project data as an object
    const featuredProjects = [
        {
            tag: "Featured Project",
            title: "Enterprise Order Management System",
            description:
                "A comprehensive solution for managing orders, inventory, and customer relationships for a national retail chain. The system handles thousands of transactions monthly and has increased operational efficiency by 35%.",
            technologies: ["React", "Python", "DigitalOcean", "Docker", "Redux", "Redis"],
            buttonText: "View Case Study",
            buttonLink: "#",
            // The preview is rendered via a function component within the object.
            PreviewContent: () => (
                <div className="relative w-full max-w-md transform -rotate-6 hover:rotate-0 transition-transform duration-700">
                    <motion.div animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="w-full aspect-[16/9] bg-slate-800 rounded-xl shadow-2xl overflow-hidden border border-white/10">
                        <motion.div className="w-full h-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-700/20 flex items-center justify-center">
                            <motion.div

                                className="p-4 w-full h-full"
                            >
                                <Image
                                    src="/assets/oms.png"
                                    alt="PyzaSoft Logo"
                                    fill
                                    className="object-cover "
                                    priority
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    {/* Decorative circles */}
                    <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-yellow-400/80 rounded-full blur-xl"></div>
                    <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-500/80 rounded-full blur-xl"></div>
                </div>
            ),
        },
        {
            tag: "Featured Project",
            title: "Hotel Booking System",
            description:
                "A full-stack hotel booking platform with real-time availability, secure payments, and comprehensive admin controls. The system features a modern user interface for guests, an intuitive admin panel for hotel management, and seamless integration with Stripe for secure payment processing.",
            technologies: ["React", "Python", "Django", "PostgreSQL", "Stripe", "Redis"],
            buttonText: "View Case Study",
            buttonLink: "#",
            // The preview is rendered via a function component within the object.
            PreviewContent: () => (
                <div className="relative w-full max-w-md transform -rotate-6 hover:rotate-0 transition-transform duration-700">
                    <motion.div animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="w-full aspect-[16/9] bg-slate-800 rounded-xl shadow-2xl overflow-hidden border border-white/10">
                        <motion.div className="w-full h-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-700/20 flex items-center justify-center">
                            <motion.div

                                className="p-4 w-full h-full"
                            >
                                <Image
                                    src="/assets/hotel.png"
                                    alt="PyzaSoft Logo"
                                    fill
                                    className="object-cover "
                                    priority
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    {/* Decorative circles */}
                    <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-yellow-400/80 rounded-full blur-xl"></div>
                    <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-500/80 rounded-full blur-xl"></div>
                </div>
            ),
        },
    ];

    // Array of project cards data – each object represents one project.
    const projectCards: any[] = [
        /* {
            id: 1,
            title: "Hotel Booking Platform",
            description:
                "An intuitive platform for hotel reservations and management with integrated payment processing.",
            technologies: ["React", "Django", "PostgreSQL", "Stripe"],
            previewBg: "bg-gradient-to-br from-purple-900/30 to-blue-900/30",
            // Inline component for the project preview. It renders the mock preview using SVG.
            Preview: () => (
                <div className="relative w-4/5 aspect-[16/9] bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-white/10 transform hover:scale-105 transition-transform duration-500">
                    <div className="w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center p-3">
                        <svg viewBox="0 0 200 100" width="100%" className="w-full h-full opacity-40">
                            <rect x="10" y="10" width="180" height="15" rx="2" fill="#FFFFFF" opacity="0.2" />
                            <rect x="10" y="35" width="140" height="10" rx="2" fill="#FFFFFF" opacity="0.1" />
                            <rect x="10" y="55" width="160" height="10" rx="2" fill="#FFFFFF" opacity="0.1" />
                            <rect x="10" y="75" width="120" height="10" rx="2" fill="#FFFFFF" opacity="0.1" />
                        </svg>
                    </div>
                </div>
            ),
            overlayGradient: "from-blue-600/80 to-blue-800/80",
        }, */
        /* {
            id: 2,
            title: "Financial Analytics Dashboard",
            description:
                "Real-time financial data visualization and analytics platform for investment professionals.",
            technologies: ["React", "D3.js", "Node.js", "AWS", "Redux"],
            previewBg: "bg-gradient-to-br from-blue-900/30 to-green-900/30",
            Preview: () => (
                <div className="relative w-4/5 aspect-[16/9] bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-white/10 transform hover:scale-105 transition-transform duration-500">
                    <div className="w-full h-full bg-gradient-to-br from-blue-600/20 to-green-600/20 flex items-center justify-center p-3">
                        <svg viewBox="0 0 200 100" width="100%" className="w-full h-full opacity-40">
                            <circle cx="50" cy="50" r="30" fill="#3B82F6" opacity="0.2" />
                            <rect x="90" y="20" width="100" height="10" rx="2" fill="#FFFFFF" opacity="0.1" />
                            <rect x="90" y="40" width="80" height="10" rx="2" fill="#FFFFFF" opacity="0.1" />
                            <rect x="90" y="60" width="90" height="10" rx="2" fill="#FFFFFF" opacity="0.1" />
                        </svg>
                    </div>
                </div>
            ),
            overlayGradient: "from-green-600/80 to-blue-800/80",
        },
        {
            id: 3,
            title: "Healthcare Mobile App",
            description:
                "Patient management and telemedicine application for healthcare providers and patients.",
            technologies: ["React Native", "Firebase", "Node.js", "WebRTC"],
            previewBg: "bg-gradient-to-br from-red-900/30 to-blue-900/30",
            Preview: () => (
                <div className="relative w-4/5 aspect-[16/9] bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-white/10 transform hover:scale-105 transition-transform duration-500">
                    <div className="w-full h-full bg-gradient-to-br from-red-600/20 to-blue-600/20 flex items-center justify-center p-3">
                        <svg viewBox="0 0 200 100" width="100%" className="w-full h-full opacity-40">
                            <rect x="20" y="20" width="60" height="60" rx="10" fill="#EF4444" opacity="0.2" />
                            <rect x="90" y="20" width="100" height="10" rx="2" fill="#FFFFFF" opacity="0.1" />
                            <rect x="90" y="40" width="80" height="10" rx="2" fill="#FFFFFF" opacity="0.1" />
                            <rect x="90" y="60" width="90" height="10" rx="2" fill="#FFFFFF" opacity="0.1" />
                        </svg>
                    </div>
                </div>
            ),
            overlayGradient: "from-red-600/80 to-blue-800/80",
        },
        {
            id: 4,
            title: "E-Commerce Platform",
            description:
                "Fully-featured online store with inventory management, payment processing, and analytics.",
            technologies: ["Next.js", "Stripe", "MongoDB", "Vercel", "Tailwind CSS"],
            previewBg: "bg-gradient-to-br from-yellow-900/30 to-blue-900/30",
            Preview: () => (
                <div className="relative w-4/5 aspect-[16/9] bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-white/10 transform hover:scale-105 transition-transform duration-500">
                    <div className="w-full h-full bg-gradient-to-br from-yellow-600/20 to-blue-600/20 flex items-center justify-center p-3">
                        <svg viewBox="0 0 200 100" width="100%" className="w-full h-full opacity-40">
                            <rect x="10" y="10" width="180" height="80" rx="2" fill="#FFFFFF" opacity="0.05" />
                            <rect x="20" y="20" width="140" height="60" rx="2" fill="#FBBF24" opacity="0.1" />
                            <rect x="30" y="40" width="40" height="20" rx="2" fill="#FFFFFF" opacity="0.1" />
                            <rect x="80" y="40" width="40" height="20" rx="2" fill="#FFFFFF" opacity="0.1" />
                        </svg>
                    </div>
                </div>
            ),
            overlayGradient: "from-yellow-600/80 to-blue-800/80",
        },
        {
            id: 5,
            title: "Supply Chain Tracking System",
            description:
                "End-to-end logistics tracking platform with real-time updates and analytics dashboard.",
            technologies: ["React", "Node.js", "GraphQL", "PostgreSQL", "Docker"],
            previewBg: "bg-gradient-to-br from-blue-900/30 to-indigo-900/30",
            Preview: () => (
                <div className="relative w-4/5 aspect-[16/9] bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-white/10 transform hover:scale-105 transition-transform duration-500">
                    <div className="w-full h-full bg-gradient-to-br from-blue-600/20 to-indigo-600/20 flex items-center justify-center p-3">
                        <svg viewBox="0 0 200 100" width="100%" className="w-full h-full opacity-40">
                            <line x1="20" y1="50" x2="180" y2="50" stroke="#6366F1" strokeWidth="2" opacity="0.2" />
                            <circle cx="40" cy="50" r="10" fill="#3B82F6" opacity="0.2" />
                            <circle cx="80" cy="50" r="10" fill="#3B82F6" opacity="0.2" />
                            <circle cx="120" cy="50" r="10" fill="#3B82F6" opacity="0.2" />
                            <circle cx="160" cy="50" r="10" fill="#3B82F6" opacity="0.2" />
                        </svg>
                    </div>
                </div>
            ),
            overlayGradient: "from-indigo-600/80 to-blue-800/80",
        },
        {
            id: 6,
            title: "AI-Powered Chatbot",
            description:
                "Intelligent customer service chatbot with natural language processing and integration capabilities.",
            technologies: ["Python", "TensorFlow", "NLP", "Flask", "WebSocket"],
            previewBg: "bg-gradient-to-br from-purple-900/30 to-pink-900/30",
            Preview: () => (
                <div className="relative w-4/5 aspect-[16/9] bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-white/10 transform hover:scale-105 transition-transform duration-500">
                    <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center p-3">
                        <svg viewBox="0 0 200 100" width="100%" className="w-full h-full opacity-40">
                            <rect x="40" y="20" width="120" height="60" rx="30" fill="#A855F7" opacity="0.1" />
                            <circle cx="70" cy="50" r="15" fill="#FFFFFF" opacity="0.1" />
                            <circle cx="130" cy="50" r="15" fill="#FFFFFF" opacity="0.1" />
                        </svg>
                    </div>
                </div>
            ),
            overlayGradient: "from-purple-600/80 to-pink-600/80",
        }, */
    ];

    const renderFeatureProject = (featuredProject: any, index: number) => {
        if (!featuredProject) return null;
        return (
            < motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }
                }
                whileInView={{ opacity: 1, y: 0 }
                }
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-20"
            >
                <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-2xl overflow-hidden border border-blue-500/20 shadow-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {/* Project Visual */}
                        <div className="relative h-80 lg:h-auto bg-gradient-to-br from-blue-900/50 to-slate-900/50 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-yellow-400/10"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <featuredProject.PreviewContent />
                            </div>
                        </div>

                        {/* Project Info */}
                        <div className="p-8 lg:p-10">
                            <div className="flex flex-col h-full justify-center">
                                <div className="mb-2">
                                    <span className="px-3 py-1 text-xs font-medium bg-blue-900/50 text-blue-400 rounded-full border border-blue-500/20">
                                        {featuredProject.tag}
                                    </span>
                                </div>
                                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-yellow-400 mb-4">
                                    {featuredProject.title}
                                </h3>
                                <p className="text-gray-300 mb-6">{featuredProject.description}</p>

                                <div className="mb-8">
                                    <h4 className="text-yellow-400 text-sm font-semibold mb-3">TECHNOLOGIES USED</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {featuredProject.technologies.map((tech: any, i: number) => (
                                            <span
                                                key={i}
                                                className="text-xs bg-slate-700 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* <div className="mt-auto">
                                    <motion.a
                                        href={featuredProject.buttonLink}
                                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-300"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {featuredProject.buttonText}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </motion.a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div >
        )
    }

    return (
        <section
            id="projects"
            className="py-24 bg-transparent relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
            <motion.div
                className="absolute top-0 right-0 w-full h-full opacity-20"
                animate={{ opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <radialGradient id="projectGlow" cx="70%" cy="30%" r="50%" fx="70%" fy="30%">
                            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#projectGlow)" />
                </svg>
            </motion.div>

            <div className="container mx-auto px-4 md:px-6 relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-yellow-400">
                            Our Projects
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 mx-auto mb-6"></div>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Innovative solutions we&apos;ve delivered for industry-leading clients
                    </p>
                </motion.div>

                {featuredProjects.map((project, index: number) => renderFeatureProject(project, index))}

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {projectCards.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-xl overflow-hidden border border-blue-500/20 shadow-lg"
                        >
                            <div className={`h-56 ${project.previewBg} relative overflow-hidden`}>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {project.Preview && <project.Preview />}
                                </div>
                                <div
                                    className={`absolute inset-0 bg-gradient-to-r ${project.overlayGradient} opacity-0 hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}
                                >
                                    <motion.button
                                        className="bg-white text-slate-900 px-4 py-2 rounded-lg font-medium transform scale-90 hover:scale-100 transition-all duration-300"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        View Project
                                    </motion.button>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">{project.title}</h3>
                                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {project.technologies.map((tech: any, i: number) => (
                                        <span key={i} className="text-xs bg-slate-700 text-blue-400 px-2 py-0.5 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Projects Button */}
                {/*  <motion.div
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
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg shadow-lg shadow-blue-900/30 hover:shadow-blue-900/50 transition-all duration-300"
                    >
                        <span>Explore All Projects</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </motion.a>
                </motion.div> */}
            </div>
        </section>
    );
}
