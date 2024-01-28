import React, { createContext, useContext, useState } from "react";

const absenContext = createContext()

export const AbsenContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [absenPayload, setAbsenPayload] = useState({
        lat: 0,
        lon: 0
    })
    
    const initialState = {
        isLoading,
        setIsLoading,
        absenPayload,
        setAbsenPayload
    };

    //INI TEMPAT MUNCUL DARI NAMA DIATAS
    return (
        <absenContext.Provider value={initialState}>
        {children}
        </absenContext.Provider>
    );
}

export const useAbsen = () => {
    const context = useContext(absenContext)
    if (!context) {
        throw new Error('useGlobal must be used within a GlobalProvider');
      }
      return context;
}