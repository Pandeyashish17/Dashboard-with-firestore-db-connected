import React from "react";
import { motion } from "framer-motion";
import DatabaseList from "../Front/DatabaseList";
// import AuthContextProvider, { AuthContext } from "../HOC/Context/AuthContext2";

const containerVariants = {
  initial: {
    opacity: 0,
    x: "10vw",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", delay: 0.5 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};
const Analytics = () => {
  return (
    <>
      <motion.div
        className="base container"
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
   <DatabaseList />
      </motion.div>
    </>
  
  );
};

export default Analytics;
