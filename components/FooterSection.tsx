// import { motion } from "motion/react";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import Image from "next/image"
export default function FooterSection() {
    return (
        <>
            {/* Footer */}
            <footer className="bg-slate-900 text-white pt-16 pb-6 border-t border-yellow-400/20 relative">
                {/* Simple Background */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>

                <div className="container mx-auto px-4 md:px-6 relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        {/* Company Information */}
                        <div>
                            <div className="flex items-center text-2xl font-bold mb-4">
                                <div className="w-10 h-10 mr-2 rounded-full overflow-hidden">
                                    <Image
                                        src="/assets/LOGO.png"
                                        alt="PyzaSoft Logo"
                                        width={40}
                                        height={40}
                                        className="object-contain"
                                    />
                                </div>
                                <div className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-yellow-400">
                                    Pyza<span className="text-yellow-400">Soft</span>
                                </div>
                            </div>
                            <p className="text-gray-300 mb-6">
                                Transforming ideas into exceptional digital experiences with cutting-edge technology solutions.
                            </p>

                            {/* Newsletter Signup */}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-yellow-400 mb-3">Stay Updated</h3>
                                <div className="flex">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="flex-grow px-4 py-2 bg-slate-800 border border-blue-500/30 rounded-l-lg text-gray-300 placeholder-gray-500"
                                    />
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-lg font-semibold text-yellow-400 mb-6">
                                Quick Links
                            </h3>
                            <ul className="space-y-3">
                                {['Home', 'Services', 'Projects', 'Team', 'Contact'].map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={`#${item.toLowerCase()}`}
                                            className="text-gray-300 hover:text-blue-500 transition-colors flex items-center"
                                        >
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h3 className="text-lg font-semibold text-yellow-400 mb-6">
                                Our Services
                            </h3>
                            <ul className="space-y-3">
                                {['Web Development', 'Mobile Apps', 'DevOps', 'UI/UX Design', 'Cloud Solutions'].map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href="#services"
                                            className="text-gray-300 hover:text-blue-500 transition-colors flex items-center"
                                        >
                                            <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></span>
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-lg font-semibold text-yellow-400 mb-6">
                                Contact Us
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <FaLocationDot className="text-blue-500 mt-1 mr-3" />
                                    <span className="text-gray-300">
                                        Dhaka<br />
                                        Bangladesh<br />
                                        {/* San Francisco, CA 94103 */}
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <FaPhone className="text-blue-500 mr-3" />
                                    <a href="tel:+8801795665287" className="text-gray-300 hover:text-blue-500 transition-colors">
                                        +880 (17) 95-665287
                                    </a>
                                </li>
                                <li className="flex items-center">
                                    <FaEnvelope className="text-blue-500 mr-3" />
                                    <a href="mailto:info@pyzasoft.com" className="text-gray-300 hover:text-blue-500 transition-colors">
                                        contact@pyzasoft.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-blue-900/30 pt-6 flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-400 text-sm mb-4 md:mb-0">
                            &copy; {new Date().getFullYear()} PyzaSoft. All rights reserved.
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {['twitter', 'linkedin', 'github', 'facebook'].map((platform, index) => (
                                <a
                                    key={index}
                                    href={`#${platform}`}
                                    className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:text-yellow-400 border border-slate-700 hover:border-yellow-400/30 transition-colors"
                                >
                                    <span className="text-xs">{platform.charAt(0).toUpperCase()}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}