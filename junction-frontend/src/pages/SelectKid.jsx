import React from "react";
import PublicNav from "../components/navbar/PublicNav";
import PaperPlane from "../assets/PaperPlane";
import kid from "../assets/Boy Avatar.png";
import steak from "../assets/steak.png";
import fire from "../assets/fire.png";
import boy from "../assets/boy.png";


const KidCard = ({ img, name, stats }) => {
  return (
    <div className=" max-w-[405px] bg-white rounded-md shadow shadow-white p-4 flex flex-col md:flex-row items-center">
      <img src={img} alt="avatar" className=" w-32 h-32" />
      <div className=" flex flex-col gap-2">
        <h3 className=" font-bold text-2xl">{name}</h3>
        <ul className=" flex gap-2 justify-center">
          <li className=" whitespace-nowrap bg-bgDarker p-2 rounded-md flex items-center">
            {stats[0]} <img className=" w-4 h-4" src={fire} alt="fire" />
          </li>
          <li className=" whitespace-nowrap bg-bgDarker p-2 rounded-md flex items-center">
            {stats[1]} <img className=" w-4 h-4" src={steak} alt="steak" />
          </li>
          <li className=" whitespace-nowrap bg-bgDarker p-2 rounded-md flex items-center">
            {stats[2]} <img className=" w-4 h-4" src={boy} alt="boy" />
          </li>
        </ul>
      </div>
    </div>
  );
};

const SelectKid = () => {
  return (
    <>
      <PublicNav />
      <div className=" relative h-[calc(100vh-72px)]">
        <div className=" absolute w-full h-full top-0 left-0">
          <PaperPlane />
        </div>
        <div className=" absolute overflow-auto p-4 w-full h-full top-0 left-0 z-50 bg-[rgb(85,85,85,50%)] flex justify-center items-center">
          <div className=" flex flex-col overflow-auto max-h-full md:grid md:grid-cols-2 gap-4">
            {[...new Array(4)].map((_, idx) => (
              <div className=" col-span-1 ">
                <KidCard
                  img={kid}
                  name={"Safie errahmane Zegtouf"}
                  stats={["12,421", "43 days", "3/49"]}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectKid;
