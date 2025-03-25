import { motion } from "framer-motion";
import { FiUsers, FiGlobe, FiAward, FiBarChart2, FiCheck } from "react-icons/fi";

const About = () => {
  const stats = [
    { value: "10M+", label: "Active Users", icon: <FiUsers className="text-3xl" /> },
    { value: "100+", label: "Countries", icon: <FiGlobe className="text-3xl" /> },
    { value: "24/7", label: "Support", icon: <FiAward className="text-3xl" /> },
    { value: "99.9%", label: "Uptime", icon: <FiBarChart2 className="text-3xl" /> }
  ];

  const features = [
    "Instant cross-border payments",
    "Bank-level security encryption",
    "No hidden fees",
    "Biometric authentication",
    "Real-time transaction tracking",
    "Multi-currency support"
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-900 text-white overflow-hidden relative"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900/50" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
      
      {/* Floating elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-400/10 blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-6 py-24 relative z-10">
        {/* Hero section */}
        <motion.section 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <motion.h2 
            className="text-sm uppercase tracking-widest text-cyan-400 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            About UPI Verse
          </motion.h2>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Revolutionizing Digital Payments
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            We're building the future of financial transactions with cutting-edge technology that makes payments faster, 
            more secure, and accessible to everyone.
          </motion.p>
        </motion.section>

        {/* Stats section */}
        <motion.section 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-cyan-400 mb-4">{stat.icon}</div>
              <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Mission section */}
        <motion.section 
          className="flex flex-col md:flex-row gap-12 items-center mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="flex-1"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
              Our Mission
            </h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              To democratize digital payments by creating an inclusive platform that bridges the gap between traditional 
              banking and modern financial technology.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              We believe everyone should have access to fast, secure, and affordable financial services regardless of 
              their location or economic status.
            </p>
          </motion.div>
          <motion.div 
            className="flex-1 bg-gradient-to-br from-cyan-500/10 to-blue-500/20 p-1 rounded-xl"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Key Features</h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FiCheck className="text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.section>

        {/* Team section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
            Meet The Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Founder & CEO', 'CTO', 'Head of Product'].map((role, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-cyan-400/30 transition-all"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Person {index + 1}</h3>
                  <p className="text-cyan-400 mb-4">{role}</p>
                  <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default About;