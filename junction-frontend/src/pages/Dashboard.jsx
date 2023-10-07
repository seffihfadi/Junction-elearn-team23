import { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import BoyAvatar from "../assets/Boy Avatar.png";
import fire from "../assets/fire.png";
import boy from "../assets/boy.png";
import steak from "../assets/steak.png";
import ProgressCircle from "../components/ProgressCircle";
import Done from "../assets/done.png";
import Pending from "../assets/pending.png";
import achiement from "../assets/Achievement.png";
import woman from "../assets/woman.png";
import Assigments from "../components/shared/Assigments";

const ProgressCard = ({ title, text, desc, percentage }) => {
  return (
    <div className=" flex flex-col gap-2 bg-white">
      <div className=" relative flex flex-col justify-center items-center">
        <div className=" relative w-20 h-20 flex justify-center items-center">
          <div className=" absolute top-0 right-0 w-full h-full">
            <ProgressCircle percentage={percentage} />
          </div>
          <span className=" font-bold text-xl text-kbcyan">{title}</span>
        </div>
        <p className=" font-semibold text-lg">{text}</p>
        <p className=" opacity-50 text-xs">{desc}</p>
      </div>
    </div>
  );
};

const StudentCard = ({ setModalOpen }) => {
  return (
    <div
      onClick={() => setModalOpen(true)}
      className="student-card cursor-pointer"
    >
      <div className="col-span-12 md:col-span-4 flex gap-4 flex-col pr-4 border-r-2 items-center">
        <div className="img-rounded relative">
          <img className="w-full" src="/mask.png" alt="" />
          <img
            className="absolute right-0 bottom-0 w-10"
            src="/badge.svg"
            alt=""
          />
        </div>
        <h4 className="font-semibold text-lg">Sdkioe</h4>
      </div>

      <div className="col-span-12 md:col-span-8 flex flex-col gap-2">
        <div className="flex items-center gap-2 rounded-xl border-[1px] border-[#D1F5FF] p-1">
          <img
            className="w-20 max-h-full aspect-video rounded-xl object-cover flex-shrink-0"
            src="/cours.png"
            alt=""
          />
          <div className="flex flex-col">
            <p className="text-xs">
              <b>Currenlty following:</b> Fundementals of html{" "}
            </p>
            <p className="text-xs">
              <i className="uil uil-clock"></i> Remaining : 6 hours
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-xl border-[1px] border-[#D1F5FF] p-1">
          <img
            className="w-20 max-h-full aspect-video rounded-xl object-cover flex-shrink-0"
            src="/mask.png"
            alt=""
          />
          <div className="flex flex-col">
            <p className="text-xs">
              <b>Last achiement:</b> Bro made a full robot
            </p>
            <p className="text-xs">
              <i className="uil uil-watch-alt"></i> Next : learn python
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 mt-auto">
          <div className="fire">
            <span>12,421</span>
            <img src="/fire1.svg" alt="fire" />
          </div>
          <div className="fire">
            <span>12,421</span>
            <img src="/steak.svg" alt="cake" />
          </div>
          <div className="fire">
            <span>12,421</span>
            <img src="/per1.svg" alt="per" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Assinment = ({ done, Text }) => {
  return (
    <div className="flex gap-2 justify-between items-center px-1 py-3 ">
      {done ? (
        <img src={Done} alt="done" className=" w-5 h-5" />
      ) : (
        <img src={Pending} alt="pending" className=" w-5 h-5" />
      )}
      <p>{Text}</p>
      {done ? (
        <span className=" text-green-300">.done</span>
      ) : (
        <span className=" text-orange-300">.pending</span>
      )}
      <i class=" text-xl cursor-pointer uil uil-angle-down"></i>
    </div>
  );
};

const StudentModal = ({ setModalOpen }) => {
  return (
    <div className=" z-50 p-4 fixed w-[100vw] h-[100vh] bg-[rgb(85,85,85,65%)] top-0 left-0 flex justify-center items-center">
      <div className=" relative max-h-[80%] overflow-auto flex flex-col gap-2 bg-white p-8 rounded-xl">
        <div className=" absolute top-2 right-2 flex gap-2  text-slate-300">
          <i className=" cursor-pointer text-2xl uil uil-angle-left"></i>
          <i className=" cursor-pointer text-2xl uil uil-angle-right-b"></i>
          <i
            onClick={() => setModalOpen(false)}
            className=" cursor-pointer text-2xl uil uil-multiply"
          ></i>
        </div>

        <div className="border-b-2 flex flex-col md:flex-row items-center gap-2">
          <div className=" w-32 h-32">
            <img src={BoyAvatar} alt="boy avatar" className=" w-full h-full" />
          </div>
          <div className=" flex flex-col justify-evenly">
            <h4 className=" font-semibold text-xl">Zegtouf Safie errahmane</h4>
            <p>5th grade</p>
            <div className=" flex gap-2 flex-wrap">
              <span className=" rounded-lg shadow-md shadow-gray-300 whitespace-nowrap flex p-2 bg-bgDarker">
                12,421 <img src={fire} alt="fire" className=" w-5 h-5" />
              </span>
              <span className=" rounded-lg shadow-md shadow-gray-300 whitespace-nowrap flex p-2 bg-bgDarker">
                42 days <img src={steak} alt="fire" className=" w-5 h-5" />
              </span>
              <span className=" rounded-lg shadow-md shadow-gray-300 whitespace-nowrap flex p-2 bg-bgDarker">
                3/49 <img src={boy} alt="fire" className=" w-5 h-5" />
              </span>
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-2 md:grid md:grid-rows-4 md:grid-cols-4">
          <div className=" rounded-md col-span-2 row-span-2 flex flex-col gap-2 p-2 shadow shadow-gray-300">
            <h4 className=" font-semibold text-lg">Latest Stats:</h4>
            <div className="border-t-2 flex justify-around gap-2">
              <ProgressCard
                title={18}
                text={"Last Exam"}
                desc={"CSS 18/20"}
                percentage={89}
              />
              <ProgressCard
                title={"12H"}
                text={"This Week"}
                desc={"learning time"}
                percentage={65}
              />
              <ProgressCard
                title={"66%"}
                text={"Tasks Progress"}
                desc={"Weekly tasks"}
                percentage={66}
              />
            </div>
          </div>

          <div className=" rounded-md col-span-2 row-span-4 p-4 shadow-sm shadow-gray-300 flex flex-col gap-2">
            <Assigments />
          </div>

          <div className=" rounded-md gap-2 col-span-2 row-span-2 col-end-3 flex justify-evenly flex-col shadow shadow-gray-300 p-4">
            <h3 className=" font-bold text-xl">Currently Learning</h3>
            <div className=" flex flex-col gap-2 md:flex-row p-2 shadow shadow-gray-300 items-center">
              <img src={woman} alt="woman" className=" md:w-1/4" />
              <div className=" flex flex-col gap-1">
                <p>
                  <span className=" font-semibold">Currenlty following</span> :
                  Fundementals of 3afsa and data science
                </p>
                <span className=" font-semibold">Dr.daoudi</span>
                <div className=" w-full h-2 bg-bgDarker rounded-full">
                  <div className=" w-3/4 bg-kbcyan h-2 rounded-full"></div>
                </div>
                <span className=" opacity-50">Avancement : 70 %</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="relative dashboard min-h-[calc(100vh-71px)]">
      {modalOpen ? <StudentModal setModalOpen={setModalOpen} /> : null}
      <Sidebar />
      <div className="w-full h-[calc(100vh-82px)] flex justify-center items-center">
        <div className="rounded-xl p-30 bg-white shadow-xl w-[96%] h-[95%] overflow-y-auto">
          <div className="flex items-center justify-between py-3 px-14 mx-4 border-b-2">
            <div>
              <h1 className="text-4xl capitalize">wolcome, kamal</h1>
              <p>See your kids progress!</p>
            </div>
            <img src="/Group.svg" alt="" />
          </div>
          <div className="grid grid-cols-12 py-3 px-14 gap-4">
            <StudentCard setModalOpen={setModalOpen} />
            <div className="student-card add">
              <i className="uil uil-plus-circle text-[150px] text-kbcyan"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
