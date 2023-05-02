import React, {ComponentType} from "react";
import {Navigate} from "react-router-dom";
import {AppStateType} from "../components/redux/redux-store";
import {connect} from "react-redux";

type MapStatePropsType = {
    isAuth:boolean
}
const MapStateProps = (state:AppStateType):MapStatePropsType => {
    return{
        isAuth:state.auth.isAuth
    }
}
export function witchAutchRedirect <T> (Component:ComponentType<T>) {
  const RedirectComponent = (props:MapStatePropsType) => {
    let {isAuth,...restProps} = props
      console.log(isAuth )
      if (!isAuth) return <Navigate to={'/login'}/>
      return <Component {...restProps as T} key="ComponentWithSomething"/>

  }

 let   ConnectedAutchRedirectComponent = connect(MapStateProps)(RedirectComponent)
return ConnectedAutchRedirectComponent
}
