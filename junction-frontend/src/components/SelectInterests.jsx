import React from "react";
import FilterComponent from "./signup/FilterComponent";

const SelectInterests = ({ userData, setUserData }) => {
  return (
    <div className=" relative z-40 scroll-auto w-full items-center rounded-md bg-white p-2 shadow shadow-gray-300 flex gap-2 flex-wrap">
      {userData.interests.length !== 0 ? (
        <ul className=" flex gap-2 max-w-[335px] p-2 overflow-auto">
          {userData.interests.map((interest, idx) => (
            <li
              onClick={() =>
                setUserData((prev) => ({
                  ...prev,
                  interests: prev.interests.filter(
                    (field) => field !== interest
                  ),
                }))
              }
              style={{
                backgroundImage:
                  "linear-gradient(107deg, #2A94F4 38.5%, #1665AD 135.59%)",
              }}
              className=" whitespace-nowrap cursor-pointer shadow shadow-gray-300 p-2 bg-kbcyana text-white rounded-full"
              key={idx}
            >
              {interest}
            </li>
          ))}
        </ul>
      ) : null}
      <FilterComponent userData={userData} setUserData={setUserData} />
    </div>
  );
};

export default SelectInterests;
