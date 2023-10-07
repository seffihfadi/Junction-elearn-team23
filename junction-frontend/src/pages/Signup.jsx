import { useState } from "react";
import Choose from "../components/signup/Chose";
import SignUpForm from "../components/signup/SignUpForm";
import SignUpFormPersonal from "../components/signup/SignUpFormPersonal";
import {motion, AnimatePresence} from 'framer-motion'

const Signup = () => {
  const [showChoose, setShowChoose] = useState(true);
  const [userData, setUserData] = useState({
    type: "",
    name: "",
    email: "",
    number: "+213",
    password: "",
    interests: [],
  });
  console.log();

  return (
    <div className=" relative sign">
      <AnimatePresence>
      {showChoose ? (
        <Choose setShowChoose={setShowChoose} setUserData={setUserData} />
      ) : (
        <>
          {userData.type === "Parental Account" ? (
            <div className=" p-8 flex justify-center">
              <SignUpForm userData={userData} setUserData={setUserData} />
            </div>
          ) : (
            <div className=" p-8 flex justify-center">
              <SignUpFormPersonal userData={userData} setUserData={setUserData} />
            </div>
          )}
        </>
      )}
      </AnimatePresence>
    </div>
  );
};

export default Signup;
