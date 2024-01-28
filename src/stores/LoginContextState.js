import React, { createContext, useContext, useState } from "react";

const loginContext = createContext()

export const LoginContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [loginPayload, setLoginPayload] = useState({
        username: "",
        password: "",
    })
    
    const initialState = {
        isLoading,
        setIsLoading,
        loginPayload,
        setLoginPayload
    };

    //INI TEMPAT MUNCUL DARI NAMA DIATAS
    return (
        <loginContext.Provider value={initialState}>
        {children}
        </loginContext.Provider>
    );
}

export const useLogin = () => {
    const context = useContext(loginContext)
    if (!context) {
        throw new Error('useGlobal must be used within a GlobalProvider');
      }
      return context;
}