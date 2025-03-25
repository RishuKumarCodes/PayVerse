import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import {FiSend, FiDownload, FiUser } from "react-icons/fi";

const Dashboard = () => {
  const [balance, setBalance] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const fetchData = useCallback(async (url, setter, errorMessage) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Authentication token is missing");
        navigate("/");
        return;
      }

      const response = await fetch(url, { headers: { Authorization: token } });

      if (!response.ok) throw new Error(`${errorMessage} ${response.status}: ${response.statusText}`);

      const result = await response.json();
      setter(result);
    } catch (error) {
      toast.error(error.message || `Couldn't fetch ${errorMessage.toLowerCase()}`);
    }
  }, [navigate]);

  useEffect(() => {
    fetchData("http://localhost:3000/api/bank/balance", setBalance, "Balance Error");
    fetchData("http://localhost:3000/api/users/getdetails", setUser, "User Details Error");
  }, [fetchData]);

  return (
    <motion.div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6">
      {/* User Info Card */}
      <motion.div className="w-full max-w-lg p-6 mb-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-4 shadow-lg">
        <div className="p-4 bg-blue-500 text-white rounded-full">
          <FiUser size={30} />
        </div>
        <div>
          <h1 className="text-2xl font-bold">
            {user ? `${user.firstName} ${user.lastName}` : "Loading..."}
          </h1>
          <p className="text-gray-300">Welcome back!</p>
        </div>
      </motion.div>

      {/* Balance Card */}
      <motion.div className="w-full max-w-lg p-8 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 shadow-xl text-center">
        <h2 className="text-2xl font-semibold text-white">Your Balance</h2>
        <p className="text-4xl font-bold mt-2 text-white">
          {balance === null ? "Loading..." : `₹ ${balance.balance}`}
        </p>
      </motion.div>

      {/* Quick Actions */}
      <motion.div className="mt-8 grid grid-cols-2 gap-6 w-full max-w-lg">
        <motion.button className="p-4 flex items-center justify-center gap-3 text-lg font-medium rounded-xl bg-blue-500 hover:bg-blue-600 transition">
          <FiSend size={20} /> Send Money
        </motion.button>
        <motion.button className="p-4 flex items-center justify-center gap-3 text-lg font-medium rounded-xl bg-green-500 hover:bg-green-600 transition">
          <FiDownload size={20} /> Receive Money
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
