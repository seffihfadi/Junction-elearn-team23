import React from "react";
import Logo from "../assets/logoWhite.png";
import map from '../assets/map.png'

const Footer = () => {
  return (
    <div className=" mt-12 bg-kbcyan p-4 text-white gap-8 flex flex-col md:flex-row justify-evenly items-center">
      <div className=" flex flex-col gap-2 max-w-[250px]">
        <img src={Logo} alt="logo" className=" w-28" />
        <p className=" text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          animi dicta delectus ab vel odio accusantium cum tenetur aspernatur
          placeat debitis nam harum recusandae, eaque sapiente esse assumenda ut
          dolorum!
        </p>
        <div className=" flex gap-2">
          <i className=" text-2xl cursor-pointer uil uil-facebook-f"></i>
          <i className=" text-2xl cursor-pointer uil uil-twitter"></i>
          <i className=" text-2xl cursor-pointer uil uil-linkedin"></i>
          <i className=" text-2xl cursor-pointer uil uil-instagram"></i>
        </div>
      </div>
      <div className=" flex gap-8 flex-wrap md:flex-nowrap justify-between">
        <ul className=" flex flex-col gap-2">
          <h4 className=" font-semibold">
            <a href="#">Pages</a>
          </h4>
          <li className=" opacity-50 cursor-pointer">
            <a href="#">Home it work</a>
          </li>
          <li className=" opacity-50 cursor-pointer">
            <a href="#">Join us</a>
          </li>
          <li className=" opacity-50 cursor-pointer">
            <a href="#">Instructors</a>
          </li>
          <li className=" opacity-50 cursor-pointer">
            <a href="#">Demo</a>
          </li>
        </ul>
        <ul className=" flex flex-col gap-2">
          <h4 className=" font-semibold">
            <a href="#">Services</a>
          </h4>
          <li className=" opacity-50 cursor-pointer">
            <a href="#">Courses</a>
          </li>
          <li className=" opacity-50 cursor-pointer">
            <a href="#">Internships</a>
          </li>
          <li className=" opacity-50 cursor-pointer">
            <a href="#">E-learn</a>
          </li>
        </ul>
      </div>
      <div className=" flex flex-col gap-4">
        <h4 className=" font-bold text-lg">Maps Location</h4>
        <div className="">
          <img src={map} alt="map" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
