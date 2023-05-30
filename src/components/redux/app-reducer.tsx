import React from "react";
import {ActionTypes} from "./state";
import {AnyAction, Dispatch} from "redux";
import {LoginAPI} from "../../api/api";
import {stopSubmit} from "redux-form";
import {getMeTC} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {AppThunkType} from "./redux-store";
export type InitialStateType = {
    initialized: boolean,
}
let initialState = {
    initialized: false,

}
export const appReducer = (state:InitialStateType = initialState,action:ActionTypes):InitialStateType => {
  switch(action.type){
      case 'INITIALIZED-SUCCESS':
          return {
             ...state,
              initialized:true
          }
      default:return state
  }
}

export const initializedSuccessAC = ( ) => {
  return {type:'INITIALIZED-SUCCESS',payload: {}} as const
}
export const initializeApp = (): AppThunkType => (dispatch) => {
  let promise = dispatch(getMeTC())
    promise.then(()=>{
        dispatch(initializedSuccessAC())
    })
}
/*
export const getMeTC = ()=>(dispatch:Dispatch)=>{
    LoginAPI.me().then(res => {
        if (res.data.resultCode === 0){
            let {id,email,login} = res.data.data
            dispatch(setUserAuthDataAC(id,email,login,true))
        }
    })
}

export const login = (email:null,password:null,rememberMe=false)=>
    (dispatch:Dispatch<AnyAction | any>)=>{
      //


    LoginAPI.login(email,password,rememberMe).then(res => {
        if (res.data.resultCode === 0){
            dispatch(getMeTC())
        }else {
            let message = res.data.messages.length > 0 ? res.data.messages[0] :"Seme error"
            dispatch(stopSubmit('Login',{_error:message}))
        }

    })
}
export const logout= ()=>
    (dispatch:Dispatch)=>{
        LoginAPI.logout().then(res => {
            if (res.data.resultCode === 0){
                dispatch(setUserAuthDataAC(null,null,null,false))
            }
        })
    }
*/
