import { motion } from 'framer-motion'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className="bg-blue-600 text-white p-4"
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold"
        >
          NemcaTech
        </motion.h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </button>
      </div>
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden"
        >
          <ul className="flex flex-col items-center space-y-2 mt-4">
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </motion.nav>
      )}
    </motion.header>
  )
}

export default Header