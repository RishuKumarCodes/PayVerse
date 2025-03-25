import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck, FiShield, FiZap, FiClock, FiDollarSign } from 'react-icons/fi';

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/dashboard');
        }
    }, [navigate]);

    const handleGetStarted = () => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/dashboard');
        } else {
            navigate('/signup');
        }
    };

    const features = [
        { name: 'Instant Transfers', icon: <FiZap className="text-cyan-400" /> },
        { name: 'Bank-Level Security', icon: <FiShield className="text-blue-400" /> },
        { name: '24/7 Support', icon: <FiClock className="text-purple-400" /> },
        { name: 'Zero Fees', icon: <FiDollarSign className="text-green-400" /> },
        { name: 'UPI 2.0', icon: <FiCheck className="text-emerald-400" /> },
    ];

    return (
        <motion.div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 overflow-hidden relative">
            <div className="text-center max-w-2xl relative z-10">
                <motion.h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 leading-tight">
                    UPI Verse
                </motion.h1>
                <motion.h2 className="text-3xl md:text-5xl font-semibold mb-8">
                    <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500">
                        The Future of Payments
                    </span>
                </motion.h2>
                <motion.p className="text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
                    Experience lightning-fast, secure transactions with our cutting-edge UPI platform.
                </motion.p>
                <motion.div className="flex gap-4 justify-center">
                    <motion.button
                        onClick={handleGetStarted}
                        className="px-8 py-4 text-lg font-medium rounded-xl shadow-2xl bg-gradient-to-r from-green-400 to-blue-500"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            Get Started <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                        </span>
                    </motion.button>
                    <motion.button
                        onClick={() => navigate('/features')}
                        className="px-8 py-4 text-lg font-medium rounded-xl bg-transparent border-2 border-white/20 hover:border-white/40 transition-colors"
                    >
                        Learn More
                    </motion.button>
                </motion.div>
                <motion.div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
                    {features.map((feature, i) => (
                        <motion.div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all">
                            <div className="text-xl">{feature.icon}</div>
                            <span className="font-medium">{feature.name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Home;