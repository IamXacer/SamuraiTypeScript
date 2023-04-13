import React from "react";
import {ActionTypes} from "./state";
import {Dispatch} from "redux";
import {LoginAPI} from "../../api/api";
export type InitialStateType = {
    userId: null,
    email:null,
    login:any,
    isAuth:boolean
}
let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: true
}
export const authReducer = (state:InitialStateType = initialState,action:ActionTypes):InitialStateType => {
  switch(action.type){
      case 'SET_USER_DATA':
          debugger
          return {
             ...state,...action.data
          }
      default:return state
  }
}

export const setUserAuthDataAC = ( userId: null, email: null, login: null,) => {
  return {type:'SET_USER_DATA',data: {userId, email, login}} as const
}

export const getMeTC = ()=>(dispatch:Dispatch)=>{
    LoginAPI.me().then(res => {
        if (res.data.resultCode === 0){
            let {id,email,login} = res.data.data
            dispatch(setUserAuthDataAC(id,email,login))

        }
    })

}
