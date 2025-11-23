import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const JobCard = ({ job, index }) => {
  const navigate = useNavigate()

  return (
    <motion.div
      className='bg-sky-50 border border-sky-400 rounded-xl p-6 shadow cursor-pointer hover:shadow-lg transition'
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
      whileHover={{ scale: 1.03 }}
    >
      <div className='flex justify-between items-center'>
        <img className='h-8' src={assets.company_icon} alt="company" />
      </div>

      <h4 className='font-medium text-xl mt-2'>{job.title}</h4>

      <div className='flex items-center gap-3 mt-2 text-xs'>
        <span className='bg-blue-50 border border-blue-200 px-4 py-1.5 rounded'>
          {job.location}
        </span>
        <span className='bg-red-50 border border-red-200 px-4 py-1.5 rounded'>
          {job.level}
        </span>
      </div>

      <p
        className='text-gray-500 text-sm mt-4'
        dangerouslySetInnerHTML={{ __html: job.description.slice(0, 150) }}
      ></p>

      <div className='mt-4 flex gap-4 text-sm'>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            navigate(`/apply-job/${job._id}`)
            scrollTo(0, 0)
          }}
          className='bg-blue-600 text-white px-4 py-2 rounded'
        >
          Apply Now
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            navigate(`/apply-job/${job._id}`)
            scrollTo(0, 0)
          }}
          className='text-gray-500 border border-gray-500 rounded px-4 py-2'
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  )
}

export default JobCard
