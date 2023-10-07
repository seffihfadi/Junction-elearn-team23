import Logo from "../Logo";
import { Link } from "react-router-dom";

const PublicNav = () => {
  return (
    <header className="flex justify-between items-center px-5 mx-10 py-4 border-b-2">
      <Logo />
      <div className="hidden md:flex items-center gap-4">
        <Link to="/pricing">Pricing</Link>
        <Link to="/signup-instructor">Teach with us</Link>
        <Link to="/signin" className="secondary">
          Log in
        </Link>
        <Link to="/signup" className="primary">
          Sign up
        </Link>
      </div>
      <div className=" md:hidden cursor-pointer">
        <i className="uil uil-list-ul text-2xl rotate-180"></i>
      </div>
    </header>
  );
};

export default PublicNav;
