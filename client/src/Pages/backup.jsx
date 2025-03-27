import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiHome,
  FiUser,
  FiMail,
  FiGrid,
  FiLogIn,
  FiLogOut,
} from "react-icons/fi";
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

  if (token)
    navItems.push({ path: "/dashboard", name: "Dashboard", icon: <FiGrid /> });

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div>
        {navItems.map((item) => (
          <Link to={item.path} key={item.path}>
            <motion.span whileHover={{ scale: 1.1 }}>{item.icon}</motion.span>
            <span>{item.name}</span>
          </Link>
        ))}
      </div>

      <div>
        {!token ? (
          <>
            <Link to="/signup">
              <FiUser />
              <span>Register</span>
            </Link>
            <Link to="/login">
              <FiLogIn />
              <span>Login</span>
            </Link>
          </>
        ) : (
          <motion.button
            onClick={handleLogout}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiLogOut />
            <span>Logout</span>
          </motion.button>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
