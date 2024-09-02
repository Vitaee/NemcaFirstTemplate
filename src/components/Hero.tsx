import { motion } from 'framer-motion'
import logo from '../assets/nemcaTech.jpg'

const Hero = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">

      <motion.img
          src={logo}
          alt="NemcaTech Logo"
          className="mx-auto mb-8 h-80 w-80"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold mb-4 text-gray-600"
        >
          Welcome to the Future of Coding
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl mb-8 text-gray-600"
        >
          We're pioneers shaping the future of coding, turning startup dreams into reality.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold"
        >
          Get Started
        </motion.button>

       

      </div>
    </section>
  )
}

export default Hero