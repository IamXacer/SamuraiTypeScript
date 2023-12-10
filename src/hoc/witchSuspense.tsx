import React, {ComponentType} from "react";
import {Navigate} from "react-router-dom";
import {AppStateType} from "../components/redux/redux-store";
import {connect} from "react-redux";
import {Preloader} from "../components/common/Preloader/Preloader";


export function witchSuspense <T> (Component:ComponentType<T>) {

return (props:any) =>{
    return <React.Suspense fallback={<div><Preloader /></div>}>
        <Component {...props}/>
    </React.Suspense>

}
}
