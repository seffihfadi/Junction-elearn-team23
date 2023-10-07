import React, { useState } from "react";
import Google from "../assets/google.png";
import TextField from "../components/TextField";
import {motion} from 'framer-motion'

const Signin = () => {
  const [logInData, setLogInData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e, name) => {
    setLogInData((prev) => ({ ...prev, [name]: e.target.value }));
  };

  return (
    <div className=" relative w-full p-4 h-[calc(100vh-72px)] flex justify-center items-center">
      <motion.div initial={{scale: 0}} animate={{scale: 1}} exit={{scale: 0}} className=" shadow-md shadow-gray-300 flex flex-col p-8 gap-4 bg-bgDarker items-center rounded-md">
        <h3 className=" font-semibold text-3xl">Log In</h3>
        <TextField
          type={"text"}
          placeholder={"Email"}
          value={logInData.email}
          name={"email"}
          handleChange={handleChange}
        />
        <TextField
          type={"password"}
          placeholder={"Password"}
          value={logInData.password}
          name={"password"}
          handleChange={handleChange}
        />
        <div className=" flex flex-wrap sm:flex-nowrap gap-2 justify-between items-center">
          <button
            type="button"
            className=" min-w-[150px] flex justify-center rounded-md shadow shadow-gray-300 w-full p-4 "
          >
            <img src={Google} alt="googleImg" className="mr-2 w-6 h-6" />
            <span className=" whitespace-nowrap">Google</span>
          </button>
          <button
            type="button"
            className=" min-w-[150px] shadow shadow-gray-300  p-4 bg-kbcyan text-white rounded-md w-full"
          >
            Log in
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Signin;
