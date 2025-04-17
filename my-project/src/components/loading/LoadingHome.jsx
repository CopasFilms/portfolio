import { motion } from "framer-motion";
import { useEffect } from "react";

import './LoadingHome.css';

import logoLoading from '../../assets/img/logoLoading.png';

const LoadingHome = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2800);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="loading-home"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.3, duration: 0.4, ease: "easeOut" }}
    >
      <img
        src={logoLoading}
        alt="Logo"
        className="logo-loading"
      />
      <motion.div
        className="mask-loading"
        initial={{ width: "100%" }}
        animate={{ width: 0 }}
        transition={{ duration: 2.3, ease: "linear" }}
      />
    </motion.div>
  );
};

export default LoadingHome;