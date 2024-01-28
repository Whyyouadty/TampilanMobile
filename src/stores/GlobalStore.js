import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
    const [GlobLoading, SetGlobLoading] = useState(false)
    const [GlobAuth, SetGlobAuth] = useState(false)

    const initialState = {
        GlobLoading,
        SetGlobLoading,
        GlobAuth,
        SetGlobAuth
    };

    //INI TEMPAT MUNCUL DARI NAMA DIATAS
    return (
        <GlobalContext.Provider value={initialState}>
        {children}
        </GlobalContext.Provider>
    );
}

export const useGlobal = () => {
    const context = useContext(GlobalContext)
    if (!context) {
        throw new Error('useGlobal must be used within a GlobalProvider');
      }
      return context;
}