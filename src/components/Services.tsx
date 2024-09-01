import { motion } from 'framer-motion'
import { FaRocket, FaUserTie, FaRobot, FaSearch } from 'react-icons/fa'

const services = [
  { icon: <FaRocket />, title: 'Rapid Software Development', description: 'Launch your venture with high-quality, fast-paced software development.' },
  { icon: <FaUserTie />, title: 'CTO as a Service', description: 'Get expert guidance and strategic tech leadership without the need for a full-time executive.' },
  { icon: <FaRobot />, title: 'AI Business Automation', description: 'Streamline your operations and boost productivity with our AI-powered business automation solutions.' },
  { icon: <FaSearch />, title: 'Tech Due Diligence', description: 'Evaluate your tech potential and secure your future with our comprehensive tech health checks.' },
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-4xl text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services