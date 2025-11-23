import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";

const RecruiterLogin = () => {
  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [isTextDataSubmitted, setIsTextDataSubmitted] = useState(false);

  const {setShowRecruiterLogin}=useContext(AppContext)

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (state === "Signup" && !isTextDataSubmitted) {
      setIsTextDataSubmitted(true);
      return;
    }

    
  };
  useEffect(()=>{
document.body.style.overflow='hidden';
return ()=>{
  document.body.style.overflow='unset';
}
  },[])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm"
    >
      <motion.form
        onSubmit={onSubmitHandler}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
        className="relative bg-white rounded-xl shadow-2xl p-8 w-96 flex flex-col gap-5"
      >
        {/* Close Button */}
        <img
          src={assets.cross_icon}
          alt="Close"
          className="absolute top-4 right-4 w-4 h-4 cursor-pointer hover:scale-110 transition-transform"
          onClick={() => setShowRecruiterLogin(false)}
        />

        <h1 className="text-center text-2xl font-semibold text-gray-800">
          {state} - Recruiter
        </h1>
        <p className="text-center text-sm text-gray-500">
          Welcome back! Please sign in to continue
        </p>

        {state === "Signup" && isTextDataSubmitted ? (
          <>
            {/* Image Upload */}
            <div className="flex items-center gap-4 my-4">
              <label htmlFor="image" className="cursor-pointer">
                <img
                  className="w-16 h-16 rounded-full border border-gray-300"
                  src={image ? URL.createObjectURL(image) : assets.upload_area}
                  alt="Upload"
                />
                <input
                  type="file"
                  id="image"
                  hidden
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </label>
              <p>
                Upload Company Logo{" "}
                <span className="text-gray-400">(Optional)</span>
              </p>
            </div>
          </>
        ) : (
          <>
            {/* Company Name */}
            {state !== "Login" && (
              <motion.div
                className="flex items-center gap-3 px-4 py-2 border rounded-full shadow-sm hover:shadow-md transition"
                whileFocus={{ scale: 1.02 }}
              >
                <img src={assets.person_icon} className="w-5 h-5" />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="flex-1 outline-none text-gray-700"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </motion.div>
            )}

            {/* Email */}
            <motion.div
              className="flex items-center gap-3 px-4 py-2 border rounded-full shadow-sm hover:shadow-md transition"
              whileFocus={{ scale: 1.02 }}
            >
              <img src={assets.email_icon} className="w-5 h-5" />
              <input
                type="email"
                placeholder="Email"
                className="flex-1 outline-none text-gray-700"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </motion.div>

            {/* Password */}
            <motion.div
              className="flex items-center gap-3 px-4 py-2 border rounded-full shadow-sm hover:shadow-md transition"
              whileFocus={{ scale: 1.02 }}
            >
              <img src={assets.lock_icon} className="w-5 h-5" />
              <input
                type="password"
                placeholder="Password"
                className="flex-1 outline-none text-gray-700"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </motion.div>
          </>
        )}

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-2 rounded-full shadow-lg hover:shadow-xl transition-all"
          type="submit"
        >
          {state === "Login"
            ? "Login"
            : isTextDataSubmitted
            ? "Create Account"
            : "Next"}
        </motion.button>

        {/* Toggle Login/Signup */}
        {state === "Login" ? (
          <p className="mt-5 text-center">
            Don't have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Signup")}
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Already have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Login")}
            >
              Login
            </span>
          </p>
        )}

        {/* Forgot password */}
        {state === "Login" && (
          <p className="text-xs text-gray-400 text-center">
            Forgot password?{" "}
            <span className="text-blue-600 cursor-pointer hover:underline">
              Reset
            </span>
          </p>
        )}
      </motion.form>
    </motion.div>
  );
};

export default RecruiterLogin;
