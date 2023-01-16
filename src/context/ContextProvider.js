import React, { useState, createContext } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
    // creating context for Search and Filtered screens
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState([]);

    return (
        <Context.Provider value = {{ search, setSearch, selected, setSelected }}>
            { children }
        </Context.Provider>
    )
};

export default ContextProvider;