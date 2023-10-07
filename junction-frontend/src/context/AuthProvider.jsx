import { useState, useLayoutEffect, useContext, createContext } from "react"
import { Navigate } from "react-router-dom"
// import { getUser } from "../utils/server"
import axios from "axios"

const AuthContext = createContext([])

export const useAuth = () => {
  return useContext(AuthContext)[0]
}


const AuthProvider = ({children, type}) => {
  const [user, setUser] = useState(null)
  const [redirect, setRedirect] = useState(false)
  // console.log('type', type)

  useLayoutEffect(() => {
    (async function () {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/getuser/', 
          {headers: {Authorization: `Bearer ${localStorage.getItem('TOKEN')}`}}
        )
        // const serverUser = await getUser()
        setUser(response.data.user)
      } catch (error) {
        setRedirect(true)
      }
    })()
  }, [])
  
  // console.log('user', user)
  if (redirect) return <Navigate to='/signin' replace={true} />
  return (
    <AuthContext.Provider value={[user]} >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
