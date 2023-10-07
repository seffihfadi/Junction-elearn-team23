import { Outlet, Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthProvider"
import { Suspense } from "react"
import AuthNav from "./navbar/AuthNav"
import Backdrop from "../components/Backdrop"
import Footer from "./Footer"

const RequireAuth = () => {
  const user = useAuth()
  return (
    user &&
    
    <Suspense fallback={<div>loading...</div>}>
    <>
      <Backdrop />
      <AuthNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
    </Suspense>
    // :
    // <Navigate to='/signin' replace={true} />
  )
}

export default RequireAuth