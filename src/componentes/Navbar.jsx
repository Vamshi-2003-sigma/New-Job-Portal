import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
  const { openSignIn } = useClerk()
  const { user } = useUser()
  const navigate = useNavigate()
  const {setShowRecruiterLogin}=useContext(AppContext);

  return (
    <motion.div
      className='shadow py-4 sticky top-0 bg-white z-50'
      initial={{ y: -80, opacity: 0 }}  
      animate={{ y: 0, opacity: 1 }}    
      transition={{ duration: 0.6, ease: "easeOut" }} 
    >
      <div className='container px-4 2xl:px-20 mx-auto flex justify-between items-center'>
        {/* Logo */}
        <motion.img
          onClick={() => navigate('/')}
          src={assets.logo}
          alt=""
          className='h-12 cursor-pointer'
          whileHover={{ scale: 1.1, rotate: 3 }} 
          transition={{ type: "spring", stiffness: 200 }}
        />

        {/* Right Side */}
        {user ? (
          <motion.div
            className='flex items-center gap-3'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to={'/applications'} className="hover:text-blue-600 transition-colors">
              Applied Jobs
            </Link>
            <p>|</p>
            <p className='max-sm:hidden font-medium'>
              Hi {user.firstName + " " + user.lastName}
            </p>
            <UserButton />
          </motion.div>
        ) : (
          <motion.div
            className='flex gap-4 max-sm:text-xs'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button onClick={e=>setShowRecruiterLogin(true)} className='text-gray-600 hover:text-blue-600 transition-colors cursor-pointer'>
              Recruiter Login
            </button>
            <button
              onClick={e => openSignIn()}
              className='bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full hover:bg-blue-700 transition'
            >
              Login
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default Navbar
