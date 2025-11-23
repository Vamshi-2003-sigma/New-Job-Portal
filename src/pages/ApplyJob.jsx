import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Loading from "../componentes/Loading";
import Navbar from "../componentes/Navbar";
import kconvert from "k-convert";
import Moment from "moment";
import JobCard from "../componentes/JobCard";
import Footer from "../componentes/Footer";
import { motion } from "framer-motion";
import {
  FaPaperPlane,
  FaBriefcase,
  FaMapMarkerAlt,
  FaUser,
  FaMoneyBillWave,
} from "react-icons/fa";

const ApplyJob = () => {
  const { id } = useParams();
  const [jobData, setJobData] = useState(null);
  const { jobs } = useContext(AppContext);
  const navigate = useNavigate();

  const fetchJob = () => {
    const data = jobs.filter((job) => job._id === id);
    if (data.length !== 0) {
      setJobData(data[0]);
    }
  };

  useEffect(() => {
    if (jobs.length > 0) {
      fetchJob();
    }
  }, [id, jobs]);

  return jobData ? (
    <>
      <Navbar />
      <motion.div
        className="min-h-screen flex flex-col py-12 container px-4 2xl:px-20 mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Job Header */}
        <motion.div
          className="bg-gradient-to-r from-indigo-600 via-purple-700 to-indigo-800 text-white rounded-3xl w-full shadow-xl overflow-hidden"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex justify-center md:justify-between flex-wrap gap-10 px-10 py-16">
            <div className="flex flex-col md:flex-row items-center">
              <motion.img
                src={jobData.companyId.image}
                alt={jobData.companyId.name}
                className="h-24 bg-white rounded-2xl p-4 mr-4 max-md:mb-4 shadow-md"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
              />
              <div className="text-center md:text-left">
                <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
                  {jobData.title}
                </h1>
                <div className="flex flex-row flex-wrap max-md:justify-center gap-3 items-center mt-4">
                  <span className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full text-sm text-white">
                    <FaBriefcase className="text-white text-base" />
                    {jobData.companyId.name}
                  </span>

                  <span className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full text-sm text-white">
                    <FaMapMarkerAlt className="text-white text-base" />
                    {jobData.location}
                  </span>

                  <span className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full text-sm text-white">
                    <FaUser className="text-white text-base" />
                    {jobData.level}
                  </span>

                  <span className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full text-sm text-white">
                    <FaMoneyBillWave className="text-white text-base" />
                    {kconvert.convertTo(jobData.salary)} / Year
                  </span>
                </div>
              </div>
            </div>

            {/* Apply Section */}
            <motion.div
              className="flex flex-col justify-center text-center md:text-right"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <motion.button
                onClick={() => navigate(`/apply-form/${jobData._id}`)}
                className="relative flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 
                           px-10 py-3 rounded-full text-white font-semibold shadow-lg overflow-hidden group"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"></span>
                <FaPaperPlane className="relative z-10 text-lg group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">Apply Now</span>
              </motion.button>

              <p className="mt-2 text-sm text-center text-gray-200">
                Posted {Moment(jobData.date).fromNow()}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Job Content + Sidebar */}
        <div className="flex flex-col lg:flex-row justify-between items-start mt-10">
          {/* Left Content */}
          <motion.div
            className="w-full lg:w-2/3 bg-white rounded-2xl shadow-md p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Job Description Header */}
            <h2 className="font-bold text-2xl mb-6 text-gray-800 relative inline-block">
              Job Description
              <span className="absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></span>
            </h2>

            {/* Description Card */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div
                className="prose prose-blue max-w-none text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: jobData.description }}
              ></div>
            </div>

            {/* Apply Now Button */}
            <motion.button
              onClick={() => navigate(`/apply-form/${jobData._id}`)}
              className="relative flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 
                         px-8 py-3 rounded-full text-white font-semibold shadow-md overflow-hidden group mt-10"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"></span>
              <FaPaperPlane className="relative z-10 text-lg group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">Apply Now</span>
            </motion.button>
          </motion.div>

          {/* Right Sidebar */}
          <motion.div
            className="w-full lg:w-1/3 mt-12 lg:mt-0 lg:ml-8 bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-200"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-xl text-center font-semibold text-gray-800 mb-4 border-b pb-2">
              More jobs at{" "}
              <span className="text-indigo-600">{jobData.companyId.name}</span>
            </h2>
            <motion.div
              className="space-y-4"
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              {jobs
                .filter(
                  (job) =>
                    job._id !== jobData._id &&
                    job.companyId._id === jobData.companyId._id
                )
                .slice(0, 4)
                .map((job) => (
                  <motion.div
                    key={job._id}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <JobCard job={job} noBorder />
                  </motion.div>
                ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </>
  ) : (
    <Loading />
  );
};

export default ApplyJob;
