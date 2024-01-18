
import React, { createContext, useContext, useState } from 'react';

const ProfilContext = createContext(); ///INI NAMA DARI CONTEXT YANG AKAN MUNCUL CTH: <RekapContext.Provider>

//DIBAWAH INI NAMA PROVIDER
export const ProfilContextProvider = ({ children }) => {

    //INI ADALAH STATE, TEMPAT UNTUK MENAMPUNG DATA
    //PARAMETER 1 UNTUK MENGAMBIL, PARAMETER 2 UNTUK MENGUBAH DATA
    //CTH: AMBIL DATA KEHADIRAN PAKAI getKehadiranList
    //CTH: MENGISI ATAU MENGUBAH DATA KEHADIRAN PAKAI setKehadiranList(data dari kehadiran)

    const [getProfilList, setProfilList] = useState({
        foto: '',
        nama: '',
        nidn: '',
        departement_name: '',
        jabatan_name: '',
        ttl: '',
        alamat: '',
        agama: '',
        jk: '',
        no_hp: '',
    }) // DALAM BUKA TUTUP KURUNG () TERDAPAT NILAI DEFAULT

    const initialState = {
        getProfilList,
        setProfilList
    };

    //INI TEMPAT MUNCUL DARI NAMA DIATAS
    return (
        <ProfilContext.Provider value={initialState}>
        {children}
        </ProfilContext.Provider>
    );
};

export const useProfilContext = () => {
    const context = useContext(ProfilContext); //INI JUGA MENJADI NAMA DARI CONTEXTNYA
    if (!context) {
        throw new Error('useProfilContext must be used within a ProfilContextProvider');
    }
    return context;
};
