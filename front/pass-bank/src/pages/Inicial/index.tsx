import { useState } from "react"
import { Login } from "./Pages/Login"
import { Home } from "./Pages/Home"

export function Incial() {

  const [ userIDSession, setUserIDSession ] = useState(sessionStorage.getItem('idUser') || '')

  return (
    <>

      {userIDSession ? 
        <Home onLogout={setUserIDSession} />
       : 
        <Login onLogin={setUserIDSession} />
      }
  

    </>
  )
}