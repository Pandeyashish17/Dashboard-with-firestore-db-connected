import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { db } from "../Firebase";
import { collection, getDocs , addDoc} from "firebase/firestore";
const containerVariants = {
  initial: {
    opacity: 0,
    x: "8vw",
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

const Dashboard = () => {
  const [students, setStudents] = useState([]);



  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [money, setMoney] = useState(0);


  console.log(name)

  const studentsCollectionRef = collection(db, "Enrolled Students");






  
  const addStudents = async () => {
    await addDoc(studentsCollectionRef,{fullName:name,money:money,address:address})

  };







  useEffect(() => {
    const getStudents = async () => {
      const data = await getDocs(studentsCollectionRef);
      setStudents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getStudents();
  }, []);

  return (
    <motion.div
      className="base container"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="container mx-auto p-4 bg-white">
        <div className="w-full md:w-1/2 lg:w-1/3 mx-auto my-12">
          <h1 className="text-lg font-bold">Add New Member</h1>
          <form className="flex flex-col mt-4" >
            <input
              type="text"
              name="full-name"
              className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              placeholder="Full Name"
              onChange={(e)=>{
                setName(e.target.value);
              }}
            />
            <input
              type="date"
              name="date"
              className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              placeholder="Enrolled Date"
            />
            <input
              type="text"
              name="address"
              className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              placeholder="Enter Your Address"
              onChange={(e)=>{
                setAddress(e.target.value);
              }}
            />
            <input
              type="number"
              name="address"
              className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              placeholder="Paid Amount"
              onChange={(e)=>{
                setMoney(e.target.value);
              }}
            />
            <button
              type="submit"
              className="mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent text-white focus:outline-none bg-blue-500 text-blue-100 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center items-center font-medium focus:outline-none"
              onClick={addStudents}
            >
              Add New Member
            </button>
          </form>
        </div>
      </div>

      <div>
        {students.map((student) => {
          return (
            <div>
              <h1>Name:{student.fullName}</h1>
              <h1>address:{student.address}</h1>
              <h1>Paid Money:{student.money}</h1>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Dashboard;
