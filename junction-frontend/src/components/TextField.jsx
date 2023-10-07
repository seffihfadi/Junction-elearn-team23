import React from "react";

const TextField = ({ type, placeholder, value, handleChange, name }) => {
  return (
    <input
      onChange={(e) => handleChange(e, name)}
      className=" w-full px-2 py-4 rounded shadow-md shadow-gray-300"
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default TextField;
