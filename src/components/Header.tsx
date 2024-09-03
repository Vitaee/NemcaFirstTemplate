import { motion } from 'framer-motion'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-router-dom'

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
          <Link to="/">NemcaTech</Link>
        </motion.h1>
        <nav className="hidden md:flex space-x-4">
          <Link to="/services" className="text-white underline">Services</Link>
          <Link to="/about" className="text-white underline">About</Link>
          <Link to="/contact" className="text-white underline">Contact</Link>
        </nav>
        <button
          className="md:hidden text-2xl"
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
            <li><Link className='text-white' to="/services">Services</Link></li>
            <li><Link className='text-white' to="/about">About</Link></li>
            <li><Link className='text-white' to="/contact">Contact</Link></li>
          </ul>
        </motion.nav>
      )}
    </motion.header>
  )
}

export default Header