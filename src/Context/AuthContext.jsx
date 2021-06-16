import React from 'react'
// import { getData, saveData } from '../Utils/Localstorage';

// AUTH CONTEXT
const AuthContext = React.createContext();
export default AuthContext;

// AUTH CONTEXT PROVIDER
const AuthContextProvider = ({children}) => {

    // AUTH FROM LOCALSTORAGE
    // let authls = getData("auth") || false;

    // AUTH STATE
    const [auth,setAuth] = React.useState(false);

    // TOGGLES AUTH STATE
    const handleAuth = () => {
        setAuth(!auth);
        // saveData("auth",!auth);
    }

    // VALUE
    const value = {
        auth,
        handleAuth
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContextProvider };