import React, { useState } from "react";
import bigwoman from "../assets/bigwoman.png";
import ProgressCircle from "../components/ProgressCircle";
import q from "../assets/Q.png";
import arduino from "../assets/Arduino.png";
import Calendar from "../components/Calendar";
import Footer from "../components/Footer";
import AuthNav from "../components/navbar/AuthNav";

const ProgressData = ({ content, desc, progress }) => {
  return (
    <div className=" felx flex-col gap-2 items-center">
      <div className=" relative w-40 h-40 flex justify-center items-center text-2xl font-bold">
        <div className=" absolute top-0 left-0 w-full h-full">
          <ProgressCircle percentage={progress} />
        </div>
        {content}
      </div>
      <p className=" text-center">{desc}</p>
    </div>
  );
};

const AnswerCard = ({ question }) => {
  const [answer, setAnswer] = useState("");
  return (
    <div className=" flex flex-col gap-2 bg-white rounded-md shadow shadow-gray-300 p-6">
      <div className=" flex gap-2 items-center">
        <img src={q} alt="question" className=" w-14" />
        <p className=" font-bold text-lg max-w-xs">{question}</p>
      </div>
      <div className=" relative">
        <textarea
          className=" bg-[#D9D9D9] p-4 w-full rounded-md h-full"
          placeholder="type an answer...|"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          cols="0"
        ></textarea>
        <button className=" bg-bgDarker absolute bottom-[-16px] left-[calc(50%-37.5px)] p-1 rounded-md">
          Answer
        </button>
      </div>
    </div>
  );
};

const CourseCard = ({ img, title, duration, material, students, endDate }) => {
  return (
    <div className=" flex flex-col gap-2 bg-white rounded shadow shadow-gray-300">
      <div>
        <img src={img} alt="img" />
      </div>
      <h4 className=" p-2 font-semibold">{title}</h4>
      <span className=" p-2">{duration}</span>
      <div className=" flex gap-2 justify-between p-2">
        <p>
          Material: <span>{material}</span>
        </p>
        <p>
          Students: <span>{students}</span>
        </p>
        <p>
          end date: <span>{endDate}</span>
        </p>
      </div>
    </div>
  );
};

const DashBoradInstructor = () => {
  return (
    <>
      <AuthNav/>
      <div className=" md:px-14 px-2 py-4">
        {/*Section One: */}
        <div className=" flex flex-col md:flex-row  justify-evenly items-center">
          <div className=" flex flex-col gap-4">
            <h3 className=" font-bold text-5xl">Welcome Again,</h3>
            <span className=" text-3xl">Dr. Lweijy</span>
          </div>
          <div>
            <img src={bigwoman} alt="Woman" className=" w-full h-full" />
          </div>
        </div>

        {/*Section Two: */}
        <div className=" flex flex-col gap-12 bg-veryLightBlue rounded-md p-4">
          
          <div className=" flex flex-wrap gap-2 justify-center md:justify-between items-center">
            <ProgressData
              content={"+245"}
              desc={"Active Students"}
              progress={68}
            />
            <ProgressData content={3} desc={"Live Courses"} progress={78} />
            <ProgressData
              content={4.3}
              desc={"Instructor rating"}
              progress={90}
            />
            <ProgressData content={8} desc={"Waiting cards"} progress={35} />
          </div>
          
          <div className=" flex flex-col gap-2">
            <h3 className=" font-bold text-2xl">Students Cards</h3>
            <div className=" flex gap-8 items-center flex-wrap md:flex-nowrap justify-center">
              <AnswerCard
                question={
                  "What is the most valuable time on earth bellara bendada ?"
                }
              />
              <AnswerCard
                question={
                  "What is the most valuable time on earth bellara bendada ?"
                }
              />
              <div className=" cursor-pointer flex flex-col gap-2 items-center">
                <i className="uil uil-arrow-circle-down text-6xl"></i>
                <span className=" font-semibold text-3xl">+12</span>
              </div>
            </div>
          </div>
          
          <div className=" flex flex-col gap-12 bg-veryLightBlue rounded-md p-4">
            <h3 className=" font-bold text-2xl">Live Courses</h3>
            <div className=" flex items-center gap-4 flex-wrap md:flex-nowrap  justify-center">
              <CourseCard
                img={arduino}
                title={"Introducion to arduino"}
                duration={"6months"}
                material={34}
                students={"+120"}
                endDate={"12/07"}
              />
              <CourseCard
                img={arduino}
                title={"Introducion to arduino"}
                duration={"6months"}
                material={34}
                students={"+120"}
                endDate={"12/07"}
              />
              <CourseCard
                img={arduino}
                title={"Introducion to arduino"}
                duration={"6months"}
                material={34}
                students={"+120"}
                endDate={"12/07"}
              />
            </div>
          </div>

          <div className=" flex flex-col gap-12 rounded-md md:p-4">
            <h3 className=" font-bold text-2xl">Live Courses</h3>
            <div className=" max-w-xl w-full m-auto">
              <Calendar />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashBoradInstructor;
