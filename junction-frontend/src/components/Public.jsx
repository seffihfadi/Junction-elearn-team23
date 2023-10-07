import { Outlet } from "react-router-dom"
import PublicNav from "./navbar/PublicNav"
import Backdrop from "./Backdrop"
import { useLocation } from "react-router-dom"
const Public = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'
  return (
    <>
      {!isHome && <Backdrop />}
      <PublicNav />
      <main>
        <Outlet />
      </main>
      
    </>
  )
}

export default Public