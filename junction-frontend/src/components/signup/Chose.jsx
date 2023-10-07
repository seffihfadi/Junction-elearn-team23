import React from "react";
import parental from "../../../public/Group 27.png";
import personal from "../../../public/Group 23.png";
import { Link } from "react-router-dom";
import { motion }from 'framer-motion'

const ChooseCard = ({ title, text, img, setShowChoose, setUserData }) => {
  return (
    <div className=" flex flex-col justify-between items-center bg-bgDarker p-4 max-w-xs rounded-md shadow-md shadow-gray-300">
      <div className=" h-1/3">
        <img src={img} alt="parentalImg" className=" w-full h-full" />
      </div>
      <h2 className="title text-center">{title}</h2>
      <p className=" text-center">{text}</p>

      <button
        onClick={() => {
          setUserData((prev)=>({...prev,type:title}))
          setShowChoose(false);
        }}
        className="primary w-full mt-5"
      >
        Sign up
      </button>
    </div>
  );
};

const Choose = ({ setShowChoose, setUserData }) => {
  const lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odio iste quod pariatur eum expedita explicabo";
  return (
    <motion.div initial={{scale: 0}} animate={{scale: 1}} exit={{scale: 0}} className="chose">
      <h2 className="title text-center">Pick What Suit you best</h2>
      <div className=" w-full flex justify-center gap-12 flex-wrap p-4">
        <ChooseCard
          setUserData={setUserData}
          setShowChoose={setShowChoose}
          title={"Parental Account"}
          text={lorem}
          img={parental}
        />
        <ChooseCard
          setUserData={setUserData}
          setShowChoose={setShowChoose}
          title={"Personal Account"}
          text={lorem}
          img={personal}
        />
      </div>
      <div className=" flex justify-center p-2">
        Or maybe you already have an account ,
        <Link to={"/"}>
          <span className=" font-bold underline"> Log in</span>
        </Link>{" "}
      </div>
    </motion.div>
  );
};

export default Choose;
