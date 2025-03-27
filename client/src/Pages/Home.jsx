import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiZap,
  FiShield,
  FiClock,
  FiDollarSign,
  FiCheck,
} from "react-icons/fi";
import illustration from "../assets/LandingPageImg.svg";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleGetStarted = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/signup");
    }
  };

  const features = [
    { name: "Instant Transfers", icon: <FiZap className="text-cyan-400" /> },
    {
      name: "Bank-Level Security",
      icon: <FiShield className="text-blue-400" />,
    },
    { name: "24/7 Support", icon: <FiClock className="text-purple-400" /> },
    { name: "Zero Fees", icon: <FiDollarSign className="text-green-400" /> },
    { name: "UPI 2.0", icon: <FiCheck className="text-emerald-400" /> },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900/50" />
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
      <main className="lg:mx-[5%] pt-[3%] mx-autopx-6 md:px-10 flex flex-col md:flex-row items-center gap-[5%] relative">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-[4vw] font-medium leading-tight mb-4">
            <span className="border-b">UPI Verse</span> The Future of{" "}
            <span className="text-cyan-400 italic font-thin">
              Payments Experience
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8">
            lightning-fast, secure transactions with our cutting-edge UPI
            platform.
          </p>
          <motion.img
            src={illustration}
            alt="Illustration"
            className="w-80 md:w-[40vw] mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          />
        </motion.div>

        <motion.div
          className="w-full md:w-[400px] min-h-[400px] flex flex-col items-start gap-6 bg-white/5 p-6 rounded-xl border border-white/10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <p className="text-4xl font-bold mb-2">9.8M</p>
            <p className="text-sm uppercase text-gray-400 tracking-wide">
              Satisfied Users
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">0%</p>
            <p className="text-sm uppercase text-gray-400 tracking-wide">
              Fees
            </p>
          </div>
          <div>
            <p className="font-semibold text-lg">Open, Honest, Hardworking.</p>
            <p className="text-gray-400">
              Changing lives — one member at a time.
            </p>
          </div>
          <button
            onClick={handleGetStarted}
            className="px-6 py-4 w-full mt-20 text-lg font-medium rounded-md bg-cyan-400 hover:gap-5 transition-all hover:opacity-90 flex items-center gap-2 text-black"
          >
            Get Started
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={handleGetStarted}
            className="py-2 border-b hover:bg-gray-800 font-medium hover:opacity-90 ml-auto mr-5"
          >
            Learn More
          </button>
        </motion.div>
      </main>

      <section className="bg-black/90 pb-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="text-2xl">{feature.icon}</div>
                <span className="font-medium">{feature.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
