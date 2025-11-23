// Dashboard.jsx
import React from 'react'
import { Outlet, useNavigate, NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Dashboard = () => {
  const navigate = useNavigate()

  return (
    <motion.div
      className="min-h-screen bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Navbar */}
      <motion.div
        className="shadow py-4 bg-white"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="px-5 flex justify-between items-center">
          <img
            onClick={() => navigate('/')}
            className="h-12 cursor-pointer"
            src={assets.logo}
            alt=""
          />
          <div className="flex items-center gap-3">
            <p className="max-sm:hidden">Welcome to Kashmir Careers</p>
            <div className="relative group">
              <img
                className="w-8 border rounded-full"
                src={assets.company_icon}
                alt=""
              />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-13">
                <ul className="list-none m-0 p-2 bg-white rounded-md text-sm shadow-lg">
                  <li className="py-1 px-2 cursor-pointer pr-10 hover:bg-gray-100">
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Sidebar + Content */}
      <div className="flex">
        {/* Sidebar */}
        <motion.div
          className="inline-block min-h-screen border-r-2 border-gray-200 bg-white"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ul className="flex flex-col items-start pt-5 text-gray-800">
            <NavLink
              className={({ isActive }) =>
                `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${
                  isActive && 'bg-blue-100 border-r-4 border-blue-500'
                }`
              }
              to={'/dashboard/add-job'}
            >
              <img className="min-w-4" src={assets.add_icon} alt="" />
              <p className="max-sm:hidden">Add Job</p>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${
                  isActive && 'bg-blue-100 border-r-4 border-blue-500'
                }`
              }
              to={'/dashboard/manage-jobs'}
            >
              <img className="min-w-4" src={assets.home_icon} alt="" />
              <p className="max-sm:hidden">Manage Jobs</p>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${
                  isActive && 'bg-blue-100 border-r-4 border-blue-500'
                }`
              }
              to={'/dashboard/view-applications'}
            >
              <img className="min-w-4" src={assets.person_icon} alt="" />
              <p className="max-sm:hidden">View Applications</p>
            </NavLink>
          </ul>
        </motion.div>

        {/* Content area */}
        <motion.div
          className="flex-1 flex justify-center items-start p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Outlet />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Dashboard
