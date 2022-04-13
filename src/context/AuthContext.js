import { createContext } from "react";
import {userObserver} from "../auth/firebase"
import { useState, useEffect } from "react";

export const AuthContext = createContext()

const AuthContextProvider = ({children}) =>  {
    const [currentUser, setCurrentUser] = useState()

    useEffect(() => {
      userObserver(setCurrentUser)
    }, [])
    
    return(
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider