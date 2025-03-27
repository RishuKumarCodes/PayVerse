import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiLock, FiArrowRight } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LandingPageImg from "../assets/Login.svg";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (isSubmitting) {
      const registerUser = async () => {
        try {
          const response = await fetch(
            "http://localhost:3000/api/users/register",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(formData),
            }
          );

          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.message || "Failed to register");
          }

          toast.success(data.message || "Registration successful!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
          });

          setTimeout(() => navigate("/signin"), 3000); // Redirect after success
        } catch (err) {
          setError(err.message);
          toast.error(err.message || "Error occurred!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
          });
        } finally {
          setIsSubmitting(false);
        }
      };

      registerUser();
    }
  }, [isSubmitting, formData, navigate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center bg-[#160B20]"
    >
      <ToastContainer />
      <div className="flex flex-col md:flex-row gap-4 bg-zinc-800/80 rounded-xl overflow-hidden shadow-2xl max-w-6xl w-full p-4">
        {/* Left side with image */}
        <div className="hidden md:flex md:w-1/2">
          <img
            src={LandingPageImg}
            alt="Landing Illustration"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Right side with form */}
        <div className="w-full md:w-1/2 p-8">
          <div className="text-center mb-8">
            <motion.h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 mb-2">
              Create Account
            </motion.h2>
            <p className="text-zinc-400">
              Join UPI Verse and experience next-gen payments
            </p>
          </div>

          {error && <p className="text-red-400 text-center">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full pl-10 pr-4 py-3 bg-zinc-700/50 border border-transparent rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </div>

            <div className="relative">
              <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full pl-10 pr-4 py-3 bg-zinc-700/50 border border-transparent rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </div>

            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-3 bg-zinc-700/50 border border-transparent rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </div>

            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full pl-10 pr-4 py-3 bg-zinc-700/50 border border-transparent rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-cyan-400 text-black py-3 rounded-lg font-medium flex items-center justify-center gap-2 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Signing Up..." : "Sign Up"}{" "}
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </motion.button>
          </form>

          <div className="text-center mt-6 text-zinc-400">
            Already have an account?{" "}
            <Link to="/signin" className="text-cyan-400 hover:underline">
              Sign In
            </Link>
          </div>

          <div className="mt-8 text-center text-xs text-zinc-500">
            By signing up, you agree to our Terms of Service and Privacy Policy
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SignupForm;
