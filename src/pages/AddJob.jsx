import React, { useRef, useEffect, useState } from "react";
import Quill from "quill";
import { JobCategories, JobLocations } from "../assets/assets";
import { motion } from "framer-motion";

const AddJob = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("Bangalore");
  const [category, setCategory] = useState("Programming");
  const [level, setLevel] = useState("Beginner Level");
  const [salary, setSalary] = useState("");

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
        placeholder: "Type the job description here...",
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      title,
      description: quillRef.current.root.innerHTML,
      category,
      location,
      level,
      salary,
    });
    alert("Job Added Successfully 🚀");
  };

  return (
    <motion.div
      className="w-full flex justify-center p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-3xl flex flex-col gap-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">
          Add New Job
        </h2>

        {/* Job Title */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700">Job Title</label>
          <input
            type="text"
            placeholder="Type Here..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        {/* Job Description */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700">Job Description</label>
          <div
            ref={editorRef}
            className="border rounded-lg min-h-[150px] p-2"
          ></div>
        </div>

        {/* Job Details (Grid Layout) */}
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Category */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">Job Category</label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            >
              {JobCategories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">Job Location</label>
            <select
              onChange={(e) => setLocation(e.target.value)}
              className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            >
              {JobLocations.map((loc, index) => (
                <option key={index} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* Level */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">Job Level</label>
            <select
              onChange={(e) => setLevel(e.target.value)}
              className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            >
              <option>Beginner Level</option>
              <option>Intermediate Level</option>
              <option>Senior Level</option>
            </select>
          </div>

          {/* Salary */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">Job Salary ($)</label>
            <input
              type="number"
              min={0}
              placeholder="2500"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="px-5 py-2 rounded-lg text-white font-semibold shadow-md 
                     bg-gradient-to-r from-blue-500 to-indigo-600 
                     hover:from-blue-600 hover:to-indigo-700 transition"
        >
          + Add Job
        </motion.button>
      </form>
    </motion.div>
  );
};

export default AddJob;
