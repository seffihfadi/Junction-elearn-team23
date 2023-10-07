import { NavLink, Outlet } from "react-router-dom"
const AdultStudent = () => {
  return (
    <div className="container adult-student">
      <div className="bg-[#f9f9f9] rounded-lg shadow-lg my-20 p-10">
        <div className="flex justify-around border-b-2">
          <NavLink className={({ isActive }) => isActive ? "active" : ""} to='courses'>Courses</NavLink>
          <NavLink className={({ isActive }) => isActive ? "active" : ""} to='cards'>Cards</NavLink>
          <NavLink className={({ isActive }) => isActive ? "active" : ""} to='assigments'>Assigments</NavLink>
          <NavLink className={({ isActive }) => isActive ? "active" : ""} to='schdule'>Schdule</NavLink>
          <NavLink className={({ isActive }) => isActive ? "active" : ""} to='goodies'>Goodies</NavLink>
        </div>
        <div className="py-5">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdultStudent