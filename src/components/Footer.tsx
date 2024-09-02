import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'
import logo from '../assets/nemcaTech.jpg'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center">
            <img src={logo} alt="NemcaTech Logo" className="h-10 mr-2" />
            <div>
              <h3 className="text-2xl font-bold">NemcaTech</h3>
              <p className="text-sm">Shaping the future of coding</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400"><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-blue-400"><FaLinkedin size={24} /></a>
            <a href="#" className="hover:text-blue-400"><FaGithub size={24} /></a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} NemcaTech. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer