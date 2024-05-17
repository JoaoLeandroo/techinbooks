"use client"

import { useState, createContext } from 'react';

export const UserContext = createContext({});

function UserProvider({ children }: {children: React.ReactNode;}) {

    const [inputValue, setInputValue] = useState<any>("");

    return(
        <UserContext.Provider value={{inputValue, setInputValue}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;