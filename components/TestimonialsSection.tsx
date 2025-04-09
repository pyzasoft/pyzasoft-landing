import { motion } from "motion/react";

export default function TestimonialsSection() {
    return (
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
                            <div className="text-xl italic mb-6">&quot;{testimonial.quote}&quot;</div>
                            <div>
                                <div className="font-semibold text-yellow-400">{testimonial.author}</div>
                                <div className="text-blue-300 text-sm">{testimonial.position}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}