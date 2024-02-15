import React, {createContext, useState} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [Test, SetTest] = useState()
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}