import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
    companyName: string;
    links: { href: string; label: string }[];
    socialMedia: { href: string; icon: JSX.Element }[];
}

const Footer: React.FC<FooterProps> = ({ companyName, links, socialMedia }) => {
    return (
        <footer className="bg-white text-purple-700 py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4 md:mb-0"
                >
                    <h2 className="text-lg font-semibold">{companyName}</h2>
                    <p className="text-sm">Empowering cleaning technology solutions.</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row"
                >
                    {links.map((link, index) => (
                        <motion.div
                            key={index}
                            href={link.href}
                            className="text-purple-500 hover:text-purple-700 transition duration-300 mx-2"
                            whileHover={{ scale: 1.05 }}
                        >
                            {link.label}
                        </motion.a>
                    ))}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex mt-4 md:mt-0"
                >
                    {socialMedia.map((media, index) => (
                        <motion.div
                            key={index}
                            href={media.href}
                            className="text-purple-500 hover:text-purple-700 transition duration-300 mx-2"
                            whileHover={{ scale: 1.1 }}
                        >
                            {media.icon}
                        </motion.a>
                    ))}
                </motion.div>
            </div>
            <div className="text-center mt-4">
                <p className="text-sm">© {new Date().getFullYear()} {companyName}. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;