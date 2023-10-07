import React from "react";
import HappyKid from "../assets/happy kid.png";
import GoldM from "../assets/GoldM.png";
import BronzM from "../assets/BronzM.png";
import pc from "../assets/pc.png";
import pending from "../assets/pending.png";

const KidCard = ({ img, name, nexAvatar }) => {
  return (
    <div className=" grow items-center bg-white rounded-xl p-4 pb-0 shadow shadow-gray-300 flex flex-col gap-4">
      <h3 className=" font-bold text-xl">{name}</h3>
      <p>{nexAvatar}</p>
      <img src={img} alt="avatar" className=" w-1/2" />
    </div>
  );
};

const NotificationCard = ({ notifications }) => {
  return (
    <div className=" grow flex items-center gap-4 bg-white rounded-xl shadow shadow-gray-300 p-4">
      <div className=" rotate-45">
        <i class="uil uil-bell text-5xl"></i>
      </div>
      <div className=" h-10 w-[2px] bg-black"></div>
      <div>
        <ul className=" flex flex-col gap-2">
          {notifications.map((not, idx) => (
            <li className=" flex gap-2 items-center" key={idx}>
              <span className=" h-2 w-2 rounded-full bg-green-500"></span>
              <p>{not}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const TableOfHonor = () => {
  return (
    <div className=" grow justify-center flex flex-col items-center gap-4 bg-white rounded-xl shadow shadow-gray-300 p-4">
      <h3 className=" font-bold text-xl">Table Of Honor</h3>
      <div className=" flex gap-4 justify-center w-full items-center ">
        <img src={BronzM} alt="BronzM" className=" w-12 " />
        <img
          src={GoldM}
          alt="GoldM"
          className=" w-16 relative -translate-y-2 "
        />
        <img src={BronzM} alt="BronzM" className=" w-12 " />
      </div>
    </div>
  );
};

const StatTable = () => {
  return (
    <div className="grow justify-between bg-white rounded-xl p-4 shadow shadow-gray-300 flex flex-col gap-4">
      <div className=" flex gap-2 items-center">
        <span className=" h-2 w-2 rounded-full bg-green-500"></span>
        <p>you studied for 6 days in a row! , thats amazing ! keep going </p>
      </div>
      <h3 className=" font-semibold text-xl">Current Courses:</h3>
      <CourseCard />
      <h3 className=" font-bold text-xl">Latest Assignment:</h3>
      <hr className=" border-solid border-gray-200 border-[1px]" />
      <div className="flex gap-2 justify-evenly items-center px-1 py-3 ">
        <img src={pending} alt="pending" className=" w-5 h-5" />
        <p>Study quizz 3, robotics </p>
        <span className=" text-orange-300">.pending</span>
      </div>
    </div>
  );
};

const CourseCard = () => {
  return (
    <div className=" bg-white rounded-md p-2 shadow shadow-gray-300 flex gap-2">
      <img src={pc} alt="pc" className="" />
      <div className=" flex flex-col gap-2">
        <h4 className=" font-semibold text-lg">Programing Fundementals :</h4>
        <span>Developper nasa avec assembleur </span>
        <p className=" flex items-center gap-1">
          <i className="uil uil-user"></i>
          <span>Dr daoudi , baraa </span>
        </p>
        <div className=" flex justify-between gap-1 items-center text-center">
          <div className="  rounded-full bg-bgDarker flex justify-center items-center flex-col">
            <i className="uil uil-graduation-cap text-lg"></i>
            <span className=" text-xs">upcoming exam 10 days</span>
          </div>
          <div className="  rounded-full bg-bgDarker flex justify-center items-center flex-col">
            <i className="uil uil-file-check text-lg"></i>
            <span className=" text-xs">All Assignments are done</span>
          </div>
          <div className="  rounded-full bg-bgDarker flex justify-center items-center flex-col">
            <i className="uil uil-file-check text-lg"></i>{" "}
            <span className=" text-xs">Join Course discussion</span>
          </div>
        </div>
        <div className=" w-full h-2 bg-bgDarker rounded-full">
          <div className=" w-3/4 bg-kbcyan h-2 rounded-full"></div>
        </div>
        <span className=" w-full flex justify-center opacity-50">
          Avancement : 70 %
        </span>
      </div>
    </div>
  );
};

const CoursesKid = () => {
  return (
    <div className=" w-full grid grid-cols-3 grid-rows-6 gap-2">
      <div className=" flex col-span-1 row-span-4 col-end-2">
        <KidCard
          img={HappyKid}
          name={"Ahla, Mounir"}
          nexAvatar={"Next avatar, dany the prince ! still 50Px to go"}
        />
      </div>
      <div className=" flex col-span-2 row-span-1 col-end-4">
        <NotificationCard
          notifications={[
            "Daddy Sent you a gift ! +100XP",
            "You did good on elec exam, + 50 points",
          ]}
        />
      </div>
      <div className=" flex col-span-1 row-span-2 col-end-2">
        <TableOfHonor />
      </div>
      <div className=" flex col-span-2 row-span-5 row-start-2 col-end-4">
        <StatTable />
      </div>
    </div>
  );
};

export default CoursesKid;