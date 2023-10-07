import React, { useState } from "react";

const FilterComponent = ({ userData, setUserData }) => {
  const options = [
    "Ai data & Science",
    "Algorith & data structure",
    "Robotics",
    "Web Development",
    "BlockChain",
    "Cooking",
    "T-shirt seeking",
    "Free food",
    "Escaping les tds",
    "tmrmid ta3 tri9",
  ];
  const [selectedOptions, setSelectedOptions] = useState(options);
  const [openOptions, setOpenOptions] = useState(false);

  const handleFilter = (e) => {
    if (e.target.value) {
      setSelectedOptions(options);
    }
    setSelectedOptions(() => {
      return options.filter((option) =>
        option.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
  };
  const handleSelect = (field) => {
    if (userData.interests.includes(field)) return;
    setUserData((prev) => ({ ...prev, interests: [...prev.interests, field] }));
  };

  return (
    <div className="relative shadow-md rounded-full shadow-gray-300">
      <input
        onClick={()=>setOpenOptions(true)}
        onBlur={()=>setTimeout(()=>setOpenOptions(false),500)}
        onChange={(e) => handleFilter(e)}
        className=" bg-bgDarker rounded-full p-2 w-full "
        type="text"
        placeholder="Enter your intrests ...| "
      />
      <div className="text-lg font-semibold absolute top-[calc(50%-14px)] right-4 pointer-events-none z-50 bg-bgDarker">
        <i className="uil uil-search "></i>
      </div>
      {openOptions ? (
        <ul className=" w-full absolute top-[100%] left-0 bg-white p-2 h-[100px] overflow-auto">
          {selectedOptions.map((option, idx) => (
            <li
              onClick={() => handleSelect(option)}
              className=" cursor-pointer p-2 hover:bg-bgDarker"
              key={idx}
            >
              {option}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default FilterComponent;