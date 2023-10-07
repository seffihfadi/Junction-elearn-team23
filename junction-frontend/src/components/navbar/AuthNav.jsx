import { Link } from "react-router-dom";
import Logo from "../Logo";
const AuthNav = () => {
  return (
    <header className="flex justify-between items-center px-5 mx-10 py-4 border-kb-cyan border-b-2">
      <Logo />
      <div className=" hidden md:flex items-center gap-7">
        <Link to="/educative-reels">
          <i className="uil uil-film text-[25px] text-[#2a2828]"></i>
        </Link>
        <img
          src="/Vector.png"
          className="w-6 cursor-pointer"
          alt="notifications"
        />
        <Link to="/dashboard">
          <div className="img-rounded w-12">
            <img src="/mask.png" alt="user" />
          </div>
        </Link>
      </div>
        <div className=" md:hidden cursor-pointer">
          <i className="uil uil-list-ul text-2xl rotate-180 text-black"></i>
        </div>
    </header>
  );
};

export default AuthNav;
