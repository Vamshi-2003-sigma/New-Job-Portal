import React, { useContext, useRef } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'

const Hero = () => {
  const { setsearchFilter, setIsSearched } = useContext(AppContext)

  const titleRef = useRef(null)
  const locationRef = useRef(null)

  const onSearch = () => {
    setsearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value
    })
    setIsSearched(true)
  }

  return (
    <div className="container 2xl:px-20 mx-auto my-14">
      {/* Top Section */}
      <motion.div
        className="relative bg-gradient-to-r from-indigo-700 via-purple-800 to-purple-900 text-white py-20 text-center mx-2 rounded-3xl overflow-hidden shadow-xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Background Glow Circles */}
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-purple-600 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-indigo-500 rounded-full opacity-20 blur-3xl"></div>

        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-4 leading-snug"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Find Your <span className="text-yellow-400">Dream Job</span> Today
        </motion.h2>

        <motion.p
          className="mb-10 max-w-xl mx-auto text-base md:text-lg font-light px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Explore 10,000+ opportunities. Connecting <span className="font-semibold text-yellow-300">talent</span> with <span className="font-semibold text-yellow-300">opportunity</span>.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          className="flex items-center justify-between bg-white/90 backdrop-blur-md rounded-full text-gray-700 max-w-2xl mx-auto shadow-2xl border border-gray-200 px-4 py-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="flex items-center flex-1">
            <img className="h-5 mr-2 opacity-70" src={assets.search_icon} alt="" />
            <input
              type="text"
              placeholder="Search for Jobs"
              className="text-sm md:text-base p-2 rounded bg-transparent outline-none w-full"
              ref={titleRef}
            />
          </div>
          <div className="flex items-center flex-1 border-l pl-4">
            <img className="h-5 mr-2 opacity-70" src={assets.location_icon} alt="" />
            <input
              type="text"
              placeholder="Location"
              className="text-sm md:text-base p-2 rounded bg-transparent outline-none w-full"
              ref={locationRef}
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onSearch}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2 rounded-full text-white ml-3 font-medium shadow-md hover:shadow-lg transition"
          >
            Search
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Trusted By Logos */}
      <motion.div
        className="border border-gray-200 shadow-lg mt-10 p-6 rounded-2xl bg-white/60 backdrop-blur-md"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="flex justify-center gap-10 lg:gap-16 flex-wrap items-center">
          <p className="font-semibold text-gray-700">Trusted by</p>
          {[
            assets.microsoft_logo,
            assets.accenture_logo,
            assets.walmart_logo,
            assets.amazon_logo,
            assets.samsung_logo,
            assets.adobe_logo
          ].map((logo, index) => (
            <motion.img
              key={index}
              className="h-7   transition duration-300"
              src={logo}
              alt="logo"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Hero
