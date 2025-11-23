import React, { useState } from "react";
import Navbar from "../componentes/Navbar";
import { assets, jobsApplied } from "../assets/assets";
import moment from "moment";
import Footer from "../componentes/Footer";
import { motion } from "framer-motion";

const Applications = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [resume, setResume] = useState(null);

  return (
    <>
      <Navbar />
      <motion.div
        className="container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Resume Section */}
        <h2 className="text-2xl font-bold text-gray-800">Your Resume</h2>
        <div className="flex gap-2 mb-8 mt-4">
          {isEdit ? (
            <>
              <label htmlFor="resumeUpload" className="flex items-center">
                <p className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg mr-2 hover:scale-105 transition">
                  Select Resume*
                </p>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => setResume(e.target.files[0])}
                  id={"resumeUpload"}
                  hidden
                />
                <img src={assets.profile_upload_icon} alt="" />
              </label>
              <motion.button
                onClick={() => setIsEdit(false)}
                className="bg-green-500 text-white rounded-lg px-5 py-2 shadow-md hover:bg-green-600 transition"
                whileTap={{ scale: 0.9 }}
              >
                Save
              </motion.button>
            </>
          ) : (
            <div className="flex gap-2">
              <a
                className="bg-green-100 text-green-700 px-5 py-2 rounded-lg shadow-sm hover:bg-green-200 transition"
                href=""
              >
                Resume
              </a>
              <motion.button
                onClick={() => setIsEdit(true)}
                className="text-red-600 border border-red-400 rounded-lg px-5 py-2 cursor-pointer hover:bg-red-100 transition"
                whileTap={{ scale: 0.9 }}
              >
                Edit
              </motion.button>
            </div>
          )}
        </div>

        {/* Jobs Applied Section */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Jobs Applied</h2>

        <motion.div
          className="overflow-x-auto rounded-xl shadow-2xl border border-gray-200 bg-white/70 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <table className="min-w-full border-collapse">
            <thead className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
              <tr>
                <th className="py-4 px-6 text-left text-sm font-semibold">Company</th>
                <th className="py-4 px-6 text-left text-sm font-semibold">Job Title</th>
                <th className="py-4 px-6 text-left text-sm font-semibold max-sm:hidden">
                  Location
                </th>
                <th className="py-4 px-6 text-left text-sm font-semibold max-sm:hidden">
                  Date
                </th>
                <th className="py-4 px-6 text-left text-sm font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {jobsApplied.map((job, index) => (
                <motion.tr
                  key={index}
                  className="hover:bg-blue-50 transition duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <td className="py-4 px-6 flex items-center gap-3 border-b border-gray-200">
                    <img
                      src={job.logo}
                      className="w-10 h-13 rounded-full shadow-sm"
                      alt={job.company}
                    />
                    <span className="font-medium text-gray-800">{job.company}</span>
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200 text-gray-700">
                    {job.title}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200 text-gray-600 max-sm:hidden">
                    {job.location}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200 text-gray-500 max-sm:hidden">
                    {moment(job.date).format("ll")}
                  </td>
                  <td className="py-4 px-6 border-b border-gray-200">
                    <motion.span
                      className={`px-4 py-1.5 rounded-full text-xs font-semibold shadow-sm ${
                        job.status === "Accepted"
                          ? "bg-green-100 text-green-700 border border-green-300"
                          : job.status === "Rejected"
                          ? "bg-red-100 text-red-600 border border-red-300"
                          : "bg-yellow-100 text-yellow-600 border border-yellow-300"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {job.status}
                    </motion.span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Applications;
