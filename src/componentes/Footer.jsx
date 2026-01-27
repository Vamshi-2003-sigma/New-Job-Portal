import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaHome, FaFileAlt, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16 pt-12">
      <div className="container mx-auto px-4 2xl:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
        {/* Logo + Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <img className="h-9" src={assets.logo} alt="Logo" />
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Discover top jobs and apply with ease. Empowering your career
            journey from
            <span className="text-blue-600 font-medium"> Kashmir </span> to the
            world 🌍.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h4 className="text-md font-semibold mb-4 text-gray-800 border-l-4 border-blue-500 pl-2">
            Quick Links
          </h4>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>
              <Link
                to="/"
                className="flex items-center gap-2 hover:text-blue-600 transition"
              >
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link
                to="/applications"
                className="flex items-center gap-2 hover:text-blue-600 transition"
              >
                <FaFileAlt /> My Applications
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="flex items-center gap-2 hover:text-blue-600 transition"
              >
                <FaInfoCircle /> About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="flex items-center gap-2 hover:text-blue-600 transition"
              >
                <FaPhoneAlt /> Contact
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h4 className="text-md font-semibold mb-4 text-gray-800 border-l-4 border-blue-500 pl-2">
            Contact
          </h4>
          <p className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <MapPin size={16} /> Srinagar, Jammu & Kashmir
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <Mail size={16} /> support@Kashmircareers.com
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-600">
            <Phone size={16} /> +91 98765 43210
          </p>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h4 className="text-md font-semibold mb-4 text-gray-800 border-l-4 border-blue-500 pl-2">
            Stay Updated
          </h4>
          <p className="text-sm text-gray-600 mb-3">
            Get the latest jobs directly in your inbox 🚀
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-100 py-5 border-t border-gray-200"
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-gray-700">
             Kashmir-Careers — Empowering careers, one job at a time.
            </span>{" "}
            |Designed & Developed by <a href="www.linkedin.com/in/syedmuzamilqadri" target="_blank">Syed Muzamil Qadri</a>
          </p>
          <div className="flex gap-4">
            <motion.a whileHover={{ scale: 1.2 }} href="#">
              <img
                className="w-8 h-8 rounded-full shadow hover:shadow-md"
                src={assets.facebook_icon}
                alt="Facebook"
              />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#">
              <img
                className="w-8 h-8 rounded-full shadow hover:shadow-md"
                src={assets.instagram_icon}
                alt="Instagram"
              />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#">
              <img
                className="w-8 h-8 rounded-full shadow hover:shadow-md"
                src={assets.twitter_icon}
                alt="Twitter"
              />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
