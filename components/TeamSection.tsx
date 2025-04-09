import { motion } from "motion/react";

export default function TeamSection() {
    const teamMembers = [
        {
            name: "Ashik",
            role: "Lead Developer",
            avatar: "👨‍💻",
            skills: ["React", "Node.js", "Next.js"],
            socials: ["L", "G", "T"],
        },
        {
            name: "Arif",
            role: "Full-Stack Developer",
            avatar: "👨‍💻",
            skills: ["Python", "React", "Django"],
            socials: ["L", "D", "B"],
        },
        {
            name: "Rahul",
            role: "Back-End Developer",
            avatar: "👨‍💻",
            skills: ["Python", "Django", "PostgreSQL"],
            socials: ["L", "G", "S"],
        },
        {
            name: "Shakib",
            role: "DevOps Specialist",
            avatar: "👨‍💻",
            skills: ["AWS", "Docker", "Kubernetes"],
            socials: ["L", "G", "T"],
        },
        {
            name: "Mrimmoaee",
            role: "Front-End Developer",
            avatar: "👩‍🎨",
            skills: ["React", "Redux", "Tailwind"],
            socials: ["L", "G", "T"],
        },
        {
            name: "Fauzia",
            role: "QA Engineer",
            avatar: "👩‍💻",
            skills: ["Automation", "Selenium", "Jira"],
            socials: ["L", "G", "T"],
        },
    ];

    const cardVariants = {
        offscreen: { opacity: 0, y: 40 },
        onscreen: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, type: "spring", bounce: 0.2 },
        },
    };

    return (
        <>
            <section
                id="team"
                className="py-20 relative overflow-hidden"
            >
                {/* Background Elements */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <motion.div
                    className="absolute top-20 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
                    animate={{ opacity: [0.2, 0.3, 0.2], scale: [1, 1.05, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>
                <motion.div
                    className="absolute bottom-20 left-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"
                    animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.05, 1] }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                ></motion.div>

                <div className="container mx-auto px-6 relative">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-yellow-400">
                            Our Team
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 mx-auto mb-6"></div>
                        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                            Meet our team of expert developers and designers dedicated to
                            delivering excellence.
                        </p>
                    </motion.div>

                    {/* Team Cards */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
                                className="w-full max-w-xs bg-slate-800 rounded-xl overflow-hidden text-center border border-yellow-400/20 shadow-xl transform transition-all"
                            >
                                <div className="p-4  flex items-center justify-center relative">
                                    <motion.div
                                        className="w-24 h-24 rounded-full bg-slate-700 border-2 border-yellow-400/40 flex items-center justify-center"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                    >
                                        <span className="text-3xl">{member.avatar}</span>
                                    </motion.div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-yellow-400 mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-blue-400 text-sm font-medium mb-4">
                                        {member.role}
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                                        {member.skills.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="text-xs bg-slate-700 text-blue-400 px-3 py-1 rounded-full"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                    {/* <div className="flex justify-center gap-3">
                                        {member.socials.map((letter, i) => (
                                            <motion.a
                                                key={i}
                                                href="#"
                                                className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center border border-blue-500/20 text-gray-400 hover:text-yellow-400"
                                                whileHover={{ y: -2, scale: 1.05 }}
                                            >
                                                <span className="text-xs">{letter}</span>
                                            </motion.a>
                                        ))}
                                    </div> */}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Call-To-Action (CTA) Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                        viewport={{ once: true }}
                        className="mt-20 text-center"
                    >
                        <motion.div
                            className="bg-slate-800 p-8 rounded-xl border border-blue-500/20 shadow-2xl max-w-2xl mx-auto transform hover:scale-105 transition-transform"
                            whileHover={{ scale: 1.03 }}
                        >
                            <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                                Join Our Team
                            </h3>
                            <p className="text-gray-300 mb-6 text-base">
                                We&apos;re always looking for talented individuals to join our team
                                and help us create amazing solutions.
                            </p>
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                            >
                                Explore Careers
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
