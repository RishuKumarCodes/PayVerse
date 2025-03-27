import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiHome, FiUser, FiMail, FiGrid } from "react-icons/fi";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const navItems = [
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/contact",
      name: "Contact",
    },
  ];

  if (token) {
    navItems.push({
      path: "/dashboard",
      name: "Dashboard",
    });
  }

  return (
    <header className="w-full py-4 px-10 flex items-center justify-between bg-black text-white">
      <div className="flex items-center gap-2">
        <Link to="/">
          <span className="text-2xl font-bold">UPI Verse</span>
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="hover:text-gray-400 transition-colors"
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}

        {!token ? (
          <>
            <Link
              to="/signup"
              className="hover:text-gray-400 transition-colors"
            >
              <span>Register</span>
            </Link>
            <Link to="/login" className="hover:text-gray-400 transition-colors">
              <span>Login</span>
            </Link>
          </>
        ) : (
          <motion.button
            onClick={handleLogout}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hover:text-gray-400 transition-colors"
          >
            <span>Logout</span>
          </motion.button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
