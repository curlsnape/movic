import React from 'react'
import { motion } from "framer-motion";
const About = () => {
    document.title = "Movixer | About"
    return (
        <div className="min-h-screen bg-gray-900 text-white text-center py-20 px-6 max-w-4xl mx-auto">
            <motion.h1 className="text-4xl font-bold mb-4" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>About Movixer</motion.h1>
            <motion.p className="text-lg text-gray-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                Movixer is your ultimate destination for high-quality movies and TV shows. With a vast library, seamless streaming, and personalized recommendations,
                we aim to redefine your entertainment experience. Whether you're a fan of classic films, the latest blockbusters, or binge-worthy TV series,
                Movixer offers an intuitive platform to explore and enjoy content anytime, anywhere. Our cutting-edge technology ensures buffer-free streaming
                with high-definition quality, and our AI-driven recommendation engine helps you discover hidden gems tailored to your preferences.
                Join our ever-growing community of movie lovers and experience cinema like never before!
            </motion.p>
        </div>
    )
}

export default About