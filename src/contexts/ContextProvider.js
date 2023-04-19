import React, {createContext, useContext, useState} from "react";

const StateContext = createContext();

const initialState = {
    chat : false,
    cart : false,
    userProfile : false,
    notification : false
}

export const ContextProvider = ({children}) => {

    const [activeMenu, setactiveMenu] = useState(true);
    const [isclicked, setIsclicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const handleClick  = (clicked) => {
        setIsclicked({...initialState, [clicked] : true});
    }
    return(
        <StateContext.Provider 
        value={{ 
            activeMenu, 
            setactiveMenu,
            isclicked,
            setIsclicked,
            handleClick,
            screenSize, 
            setScreenSize
         }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);