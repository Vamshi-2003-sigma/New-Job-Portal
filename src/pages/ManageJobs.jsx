// ManageJobs.jsx
import React from 'react'
import { manageJobsData } from '../assets/assets'
import moment from 'moment'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const ManageJobs = () => {

  const navigate=useNavigate();
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Table Card */}
      <div className="overflow-x-auto shadow-lg border border-gray-200 bg-white w-full max-w-6xl mx-auto rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 p-4 border-b text-center">
          Manage Jobs
        </h2>

        <table className="w-full text-sm text-left border-collapse">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Job Title</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3 text-center">Applicants</th>
              <th className="px-4 py-3 text-center">Visible</th>
            </tr>
          </thead>

          <tbody>
            {manageJobsData.map((job, index) => (
              <motion.tr
                key={index}
                className="border-b hover:bg-gray-50 transition"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <td className="px-4 py-3 font-medium text-gray-800">
                  {index + 1}
                </td>
                <td className="px-4 py-3">{job.title}</td>
                <td className="px-4 py-3 text-gray-600">
                  {moment(job.date).format('ll')}
                </td>
                <td className="px-4 py-3 text-gray-600">{job.location}</td>
                <td className="px-4 py-3 text-center font-semibold text-blue-600">
                  {job.applicants}
                </td>
                <td className="px-4 py-3 text-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-300"
                  />
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Button */}
      <div className="mt-4 flex justify-end max-w-6xl mx-auto">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-5 py-2 rounded-lg text-white font-semibold shadow-md bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition"

          onClick={()=>navigate('/dashboard/add-job')}
        >
          + Add New Job
        </motion.button>
      </div>
    </motion.div>
  )
}

export default ManageJobs
