import React from "react";
import {store, StoreType} from "./components/redux/state";

/*interface IContextProps {
    state:RootStateType
    dispatch:({type}:{type:string})=>void
    getState:()=>RootStateType
}*/

export type ProviderType = {
    store:StoreType,
    children:React.ReactNode
}

const StoreContext = React.createContext({}as StoreType)
export const Provider = (props:ProviderType) =>{
    return  <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}
export default StoreContext