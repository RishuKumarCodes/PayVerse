import { motion } from "framer-motion";
import { FiGithub, FiTwitter, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <FiGithub />, url: "https://github.com" },
    { icon: <FiTwitter />, url: "https://twitter.com" },
    { icon: <FiLinkedin />, url: "https://linkedin.com" },
    { icon: <FiMail />, url: "mailto:contact@example.com" }
  ];

  const footerLinks = [
    { title: "Product", links: ["Features", "Pricing", "Case Studies", "Updates"] },
    { title: "Company", links: ["About", "Careers", "News", "Media Kit"] },
    { title: "Resources", links: ["Blog", "Help Center", "Tutorials", "Support"] },
    { title: "Legal", links: ["Privacy", "Terms", "Cookies", "Licenses"] }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative bg-gray-900 text-white pt-16 pb-8 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900/50" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
      
      {/* Floating elements */}
      <motion.div 
        className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-cyan-400/10 blur-3xl"
        animate={{
          x: [0, 20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:pl-2 block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-6 md:mb-0"
          >
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-white transition-colors duration-300"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-400 text-center md:text-right mb-6 md:mb-0"
          >
            © {new Date().getFullYear()} UPI Verse. All rights reserved.
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-3 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all flex items-center gap-2"
          >
            <FiArrowUp className="text-lg" />
            <span>Back to top</span>
          </motion.button>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;