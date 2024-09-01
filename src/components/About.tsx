import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">About NemcaTech</h2>
          <p className="text-xl text-center mb-8">
            We're not just a software development agency - we're pioneers shaping the future of coding.
          </p>
          <p className="text-lg text-center mb-8">
            Our team of rockstar developers are ready to turn your startup dreams into reality, delivering top-tier solutions at lightning speed.
          </p>
          <p className="text-lg text-center">
            At NemcaTech, code quality isn't just a goal - it's a guarantee. We're committed to crafting flawless code, ensuring seamless operation and robust performance with every software solution we deliver.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About