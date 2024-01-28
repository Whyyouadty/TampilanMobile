
import React, { createContext, useContext, useState } from 'react';

const RekapContext = createContext(); ///INI NAMA DARI CONTEXT YANG AKAN MUNCUL CTH: <RekapContext.Provider>

//DIBAWAH INI NAMA PROVIDER
export const RekapContextProvider = ({ children }) => {

    //INI ADALAH STATE, TEMPAT UNTUK MENAMPUNG DATA
    //PARAMETER 1 UNTUK MENGAMBIL, PARAMETER 2 UNTUK MENGUBAH DATA
    //CTH: AMBIL DATA KEHADIRAN PAKAI getKehadiranList
    //CTH: MENGISI ATAU MENGUBAH DATA KEHADIRAN PAKAI setKehadiranList(data dari kehadiran)

    const [getKehadiranList, setKehadiranList] = useState([]) // DALAM BUKA TUTUP KURUNG () TERDAPAT NILAI DEFAULT

    const initialState = {
        getKehadiranList,
        setKehadiranList
    };

    //INI TEMPAT MUNCUL DARI NAMA DIATAS
    return (
        <RekapContext.Provider value={initialState}>
        {children}
        </RekapContext.Provider>
    );
};

export const useRekapContext = () => {
    const context = useContext(RekapContext); //INI JUGA MENJADI NAMA DARI CONTEXTNYA
    if (!context) {
        throw new Error('useRekapContext must be used within a RekapContextProvider');
    }
    return context;
};
