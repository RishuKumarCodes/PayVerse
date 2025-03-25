import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiMail, FiLock, FiArrowRight } from "react-icons/fi";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("token", data.token); // Save token
      toast.success("Login Successful! Redirecting...", { autoClose: 2000 });

      setTimeout(() => {
        navigate("/dashboard"); // Redirect after success
      }, 2000);

    } catch (error) {
      toast.error(error.message || "Login Failed");
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <ToastContainer position="top-center" autoClose={3000} />
      <m.div
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0 }}
        className="min-h-screen flex items-center justify-center bg-gray-900 relative"
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900/50" />

        {/* Sign-in Card */}
        <m.div
          variants={formVariants}
          className="bg-gray-800/80 backdrop-blur-md p-8 rounded-xl border border-gray-700 w-full max-w-md mx-4 shadow-xl"
        >
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Welcome Back
            </h2>
            <p className="text-gray-400 text-sm">Sign in to access your UPI Verse account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Input */}
            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                required
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                required
              />
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:scale-105 transition"
            >
              Sign In <FiArrowRight />
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="text-center mt-4 text-gray-400 text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-cyan-400 hover:underline">
              Sign Up
            </Link>
          </div>
        </m.div>
      </m.div>
    </LazyMotion>
  );
};

export default SignIn;
