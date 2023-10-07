
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="img-rounded">
        <img className="w-32 mx-auto my-8" src="/cours.png" alt="" />
      </div>
      <Link to='/dashboard' className="active">
        <i className="uil uil-create-dashboard"></i>
        <span>dashboard</span>
      </Link>
      <Link to='/dashboard'>
        <i className="uil uil-flask"></i>
        <span>Expenses</span>
      </Link>
      <Link to='/dashboard'>
        <i className="uil uil-calendar-alt"></i>
        <span>Calendar</span>
      </Link>
      <Link to='/dashboard'>
        <i className="uil uil-chat"></i>
        <span>Communication</span>
      </Link>
      <Link to='/dashboard'>
        <i className="uil uil-envelope-question"></i>
        <span>Support</span>
      </Link>
      <div className="mt-auto">
        <button className="secondary w-full justify-center flex gap-4">
          <i className="uil uil-sign-out-alt"></i>
          <span className="hidden md:flex">Log out</span>
        </button>
        <p className="text-sm mt-2 mb-5 hidden md:block">Or just, <span className="cursor-pointer font-semibold">Change account</span></p>
      </div>
    </div>
  )
}

export default Sidebar