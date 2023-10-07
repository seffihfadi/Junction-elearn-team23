import React, { useState } from "react";
import Door from "../../assets/Door";
import TextField from "../TextField";
import Google from "../../assets/google.png";
import { MuiTelInput } from "mui-tel-input";
import SelectInterests from "../SelectInterests";

const UploadDocument = ({ setUserData }) => {
  const [fileSubmited, setFileSubmited] = useState(false);
  const handleSubmit = (e) => {
    const file = e.target.files[0];
    setUserData((prev) => ({ ...prev, cv: file }));
    setFileSubmited(true);
  };
  return (
    <div className=" flex justify-between w-full rounded shadow-md bg-white shadow-gray-300 ">
      {fileSubmited ? (
        <>
          <span className=" opacity-50 p-4">File Recieved Successfully </span>
          <div className=" bg-green-500 rounded-r p-4">
            <i className="uil uil-file-check text-lg text-white"></i>
          </div>
        </>
      ) : (
        <>
          <span className=" opacity-50 p-4">Upload your cv </span>
          <label
            htmlFor="inputFile"
            className=" cursor-pointer rounded-r p-4 bg-kbcyan"
          >
            <i className="uil uil-file-plus-alt text-white text-lg"></i>
            <input
              className=" hidden"
              id="inputFile"
              type="file"
              onChange={(e) => handleSubmit(e)}
            />
          </label>
        </>
      )}
    </div>
  );
};

const StepOne = ({ userData, setStep, handleChange, handleNumber }) => {
  return (
    <>
      <div>
        <Door />
      </div>
      <p className=" font-semibold text-xl">Hello to our future Instructor</p>
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
            "& input:focus": {
              outline: "solid 2px black",
            },
            "& input": {
              borderRadius: "6px",
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
        onClick={() => setStep((prev) => prev + 1)}
        className=" text-white w-full px-2 py-4 bg-kbcyan rounded shadow-md shadow-gray-300 cursor-pointer"
        type="submit"
      >
        {`Next ->`}
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
    </>
  );
};

const StepTwo = ({ userData, handleChange, setStep, setUserData }) => {
  return (
    <>
      <p className=" font-semibold text-xl max-w-xs">
        We need to know more about your professional career
      </p>
      <TextField
        placeholder={"LinkedIn"}
        type={"text"}
        value={userData.linkedin}
        name={"linkedin"}
        handleChange={handleChange}
      />
      <UploadDocument setUserData={setUserData} />
      <TextField
        placeholder={"Portfoliot Link"}
        type={"text"}
        value={userData.portfolio}
        name={"portfolio"}
        handleChange={handleChange}
      />
      <SelectInterests userData={userData} setUserData={setUserData} />
      <button
        onClick={() => setStep((prev) => prev + 1)}
        type="button"
        className=" w-full p-4 bg-kbcyan text-white rounded"
      >{`Next ->`}</button>
    </>
  );
};

const StepThree = ()=>{
  return (
    <>
      <i className="uil uil-check-circle text-kbcyan text-9xl"></i>
      <h3 className=" font-bold text-2xl">Thank you</h3>
      <p className=" text-center">we registred your application, we will reach you out soon </p>
      <button className=" w-full p-4 border-solid border-2 border-kbcyan rounded" type="button">Return</button>
    </>
  )
}

const SignUpInstructor = () => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    type: "instructor",
    name: "",
    email: "",
    number: "+213",
    password: "",
    linkedin: "",
    portfolio: "",
    interests: [],
    cv: null,
  });

  const handleChange = (e, name) => {
    setUserData((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const handleNumber = (newNum) => {
    setUserData((prev) => ({ ...prev, number: newNum }));
  };

  const progress = {
    1: "w-1/3",
    2: "w-2/3",
    3: "w-full",
  };

  return (
    <div className=" p-4 relative min-h-[calc(100vh-71px)] flex justify-center items-center">
      <div className=" shadow-sm shadow-kbcyan max-w-sm w-full relative rounded-md p-8 flex flex-col gap-2 items-center bg-bgDarker">
        <div className=" rounded-md absolute top-0 left-0 h-1 w-full bg-[#A1B6C2]">
          <div className={`${progress[step]} rounded-md bg-kbcyan h-1`}></div>
        </div>
        {step === 1 ? (
          <StepOne
            userData={userData}
            setStep={setStep}
            handleChange={handleChange}
            handleNumber={handleNumber}
          />
        ) : null}
        {step === 2 ? (
          <StepTwo
            userData={userData}
            handleChange={handleChange}
            setStep={setStep}
            setUserData={setUserData}
          />
        ) : null}
        {step === 3?<StepThree />:null}
      </div>
    </div>
  );
};

export default SignUpInstructor;