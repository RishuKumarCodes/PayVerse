import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiHome, FiUser, FiMail, FiGrid, FiLogIn, FiLogOut } from "react-icons/fi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setToken(localStorage.getItem("token")); 
  }, [location.pathname]); 

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    toast.success("Logged out successfully!");
    navigate("/signup");
  };

  const navItems = [
    { path: "/", name: "Home", icon: <FiHome /> },
    { path: "/about", name: "About", icon: <FiUser /> },
    { path: "/contact", name: "Contact", icon: <FiMail /> },
  ];

  if (token) navItems.push({ path: "/dashboard", name: "Dashboard", icon: <FiGrid /> });

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-gray-800/80 backdrop-blur-md p-4 text-white flex items-center justify-between border-b border-gray-700/50 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
      
      {/* Navigation Links */}
      <div className="flex items-center gap-1 relative z-10">
        {navItems.map((item) => (
          <Link 
            to={item.path} 
            key={item.path}
            className={`relative px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${location.pathname === item.path ? "bg-white/10" : "hover:bg-white/10"}`}
          >
            <motion.span className="text-lg" whileHover={{ scale: 1.1 }}>
              {item.icon}
            </motion.span>
            <span className="hidden md:inline-block">{item.name}</span>
          </Link>
        ))}
      </div>
      
      {/* Auth Buttons */}
      <div className="flex items-center gap-4 relative z-10">
        {!token ? (
          <>
            <Link to="/signup" className="px-4 py-2 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2">
              <FiUser />
              <span className="hidden md:inline-block">Register</span>
            </Link>
            <Link to="/login" className="px-4 py-2 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2">
              <FiLogIn />
              <span className="hidden md:inline-block">Login</span>
            </Link>
          </>
        ) : (
          <motion.button
            onClick={handleLogout}
            className="px-4 py-2 rounded-lg flex items-center gap-2 bg-red-500/80 hover:bg-red-500 transition-colors text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiLogOut />
            <span className="hidden md:inline-block">Logout</span>
          </motion.button>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
