import React, { useState } from "react";
import { assets, viewApplicationsPageData } from "../assets/assets";
import { motion } from "framer-motion";

const ViewApplications = () => {
  const [openRow, setOpenRow] = useState(null);

  return (
    <motion.div
      className="p-6 flex justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Job Applications
        </h2>

        {/* Desktop Table (lg and above) */}
        <div className="hidden lg:block overflow-x-auto shadow-lg rounded-2xl bg-white">
          <table className="w-full border-collapse">
            <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
              <tr>
                <th className="p-4">#</th>
                <th className="p-4">User Name</th>
                <th className="p-4">Job Title</th>
                <th className="p-4">Location</th>
                <th className="p-4">Resume</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>

            <tbody className="text-sm text-gray-700">
              {viewApplicationsPageData.map((applicant, index) => (
                <motion.tr
                  key={index}
                  className="hover:bg-gray-50 border-b last:border-none"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <td className="p-4">{index + 1}</td>
                  <td className="p-4 flex items-center gap-3">
                    <img
                      src={applicant.imgSrc}
                      alt={applicant.name}
                      className="w-10 h-10 rounded-full object-cover border"
                    />
                    <span className="font-medium">{applicant.name}</span>
                  </td>
                  <td className="p-4">{applicant.jobTitle}</td>
                  <td className="p-4">{applicant.location}</td>
                  <td className="p-4">
                    <a
                      href={applicant.resumeUrl || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:underline"
                    >
                      <img
                        src={assets.resume_download_icon}
                        alt="Download Resume"
                        className="w-5 h-5"
                      />
                      Resume
                    </a>
                  </td>
                  <td className="p-4 relative">
                    <button
                      onClick={() =>
                        setOpenRow(openRow === index ? null : index)
                      }
                      className="px-2 py-1 rounded hover:bg-gray-200"
                    >
                      ⋮
                    </button>
                    {openRow === index && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute right-0 mt-2 w-32 bg-white shadow-md rounded-lg z-10"
                      >
                        <button className="block w-full text-left px-4 py-2 hover:bg-green-100 text-green-600">
                          Accept
                        </button>
                        <button className="block w-full text-left px-4 py-2 hover:bg-red-100 text-red-600">
                          Reject
                        </button>
                      </motion.div>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tablet Table (sm to lg) */}
        <div className="hidden sm:block lg:hidden overflow-x-auto shadow-md rounded-xl bg-white">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Job</th>
                <th className="p-3">Resume</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {viewApplicationsPageData.map((applicant, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-3 flex items-center gap-2">
                    <img
                      src={applicant.imgSrc}
                      alt={applicant.name}
                      className="w-8 h-8 rounded-full object-cover border"
                    />
                    <span>{applicant.name}</span>
                  </td>
                  <td className="p-3">{applicant.jobTitle}</td>
                  <td className="p-3">
                    <a
                      href={applicant.resumeUrl || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Resume
                    </a>
                  </td>
                  <td className="p-3 flex gap-2">
                    <button className="px-2 py-1 text-green-600 bg-green-100 rounded hover:bg-green-200">
                      Accept
                    </button>
                    <button className="px-2 py-1 text-red-600 bg-red-100 rounded hover:bg-red-200">
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View (<sm) */}
        <div className="grid gap-4 sm:hidden">
          {viewApplicationsPageData.map((applicant, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-xl p-4 flex flex-col gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3">
                <img
                  src={applicant.imgSrc}
                  alt={applicant.name}
                  className="w-12 h-12 rounded-full object-cover border"
                />
                <div>
                  <p className="font-semibold text-gray-800">
                    {applicant.name}
                  </p>
                  <p className="text-sm text-gray-500">{applicant.jobTitle}</p>
                </div>
              </div>

              <p className="text-sm">
                <span className="font-medium">Location:</span>{" "}
                {applicant.location}
              </p>

              <a
                href={applicant.resumeUrl || "#"}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:underline text-sm"
              >
                <img
                  src={assets.resume_download_icon}
                  alt="Download Resume"
                  className="w-5 h-5"
                />
                Resume
              </a>

              <div className="flex gap-3">
                <button className="flex-1 bg-green-100 text-green-600 rounded-md py-2 text-sm hover:bg-green-200">
                  Accept
                </button>
                <button className="flex-1 bg-red-100 text-red-600 rounded-md py-2 text-sm hover:bg-red-200">
                  Reject
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ViewApplications;
