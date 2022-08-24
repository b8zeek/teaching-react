import { useState, createContext } from 'react'

export const loggedInContext = createContext()

const LoggedInContext = ({ children }) => {
    const [userLoggedIn, setUserLoggedIn] = useState(false)

    const logIn = () => setUserLoggedIn(true)
    const logOut = () => setUserLoggedIn(false)

    return <loggedInContext.Provider value={{
        userLoggedIn,
        logIn,
        logOut
    }}>
        {children}
    </loggedInContext.Provider>
}

export default LoggedInContext
