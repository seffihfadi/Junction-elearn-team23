import signupImg from "../../assets/signUpImg.png";
import Google from "../../assets/google.png";
import { MuiTelInput } from "mui-tel-input";
import TextField from "../TextField";
import {registerUser} from '../../utils/server'
import {motion} from 'framer-motion'

const SignUpForm = ({ userData, setUserData }) => {
  const handleChange = (e, name) => {
    setUserData((prev) => ({ ...prev, [name]: e.target.value }));
  };
  
  const handleNumber = (newNum) => {
    setUserData((prev) => ({ ...prev, number: newNum }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    registerUser(userData)
    return;
  };

  return (
    <motion.div initial={{scale: 0}} animate={{scale: 1}} exit={{scale: 0}} className=" flex flex-col md:flex-row bg-bgDarker rounded-md p-4 shadow-md shadow-gray-300 max-w-3xl ">
      <form
        onSubmit={handleSubmit}
        className=" order-1 md:-order-last w-full flex flex-col items-center gap-2 p-2 justify-between "
      >
        <h4 className=" font-bold text-xl">Sign Up</h4>
        <TextField
          placeholder={"Full name"}
          type={"text"}
          value={userData.name}
          name={"name"}
          handleChange={handleChange}
        />
        <TextField
          placeholder={"Email"}
          type={"text"}
          value={userData.email}
          name={"email"}
          handleChange={handleChange}
        />
        <div className=" relative shadow-md shadow-gray-300 w-full">
          {userData.number.length < 5 ? (
            <span className=" absolute top-[calc(50%-12px)] left-[calc(56px+50px)] z-50 opacity-50 pointer-events-none ">
              | Phone Number
            </span>
          ) : null}

          <MuiTelInput
            sx={{
              background: "white",
              width: "100%",
              "& fieldset": {
                border: "none",
                borderRadius: "6px",
              },
              "& input:focus":{
                outline:'solid 2px black'
              },
              "& input":{
                borderRadius:"6px"
              },
              borderRadius: "6px",
            }}
            value={userData.number}
            onChange={handleNumber}
          />
        </div>
        <TextField
          placeholder={"Password"}
          type={"password"}
          value={userData.password}
          name={"password"}
          handleChange={handleChange}
        />
        <button
          className=" text-white w-full px-2 py-4 bg-kbcyan rounded shadow-md shadow-gray-300 cursor-pointer"
          type="submit"
        >
          Sign Up
        </button>
        <span className=" font-semibold">or just</span>
        <button
          type="button"
          className=" shadow-md shadow-gray-300 relative w-full px-2 py-4 rounded-md"
        >
          <img
            src={Google}
            alt="google"
            className=" w-6 h-6 absolute top-[calc(50%-0.75rem)] left-2"
          />
          <span>Sign up using google</span>
        </button>
      </form>
      <div className=" flex justify-center items-center p-2 h-full">
        <div className=" w-[1px] h-5/6  bg-gray-200"></div>
      </div>
      <div className=" flex flex-col w-full p-4">
        <div className=" flex flex-col justify-evenly">
          <div className=" h-1/2">
            <img
              src={signupImg}
              alt="signupImg"
              className=" w-full h-full object-contain"
            />
          </div>
          <p className=" font-semibold text-center text-lg">
            Empowering Learningmethods Join Us to Transform Your Learning
            Experience!
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default SignUpForm;
