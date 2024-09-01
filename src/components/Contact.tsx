import { motion } from 'framer-motion'
import { FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="text-xl mb-8">
            Ready to rock the tech world together? Let's start your journey to success!
          </p>
          <a
            href="mailto:hello@nemcatect.com"
            className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition-colors"
          >
            <FaEnvelope className="mr-2" />
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact