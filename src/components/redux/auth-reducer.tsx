import React from "react";
import {ActionTypes} from "./state";
import {AnyAction, Dispatch} from "redux";
import {LoginAPI} from "../../api/api";
import {stopSubmit} from "redux-form";
import {AppThunkType} from "./redux-store";
export type InitialStateType = {
    userId: null,
    email:null,
    login:any,
    isAuth:boolean,
    logout:null
}
let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    logout:null
}
export const authReducer = (state:InitialStateType = initialState,action:ActionTypes):InitialStateType => {
  switch(action.type){
      case 'SET_USER_DATA':
          return {
             ...state,...action.payload
          }
      default:return state
  }
}

export const setUserAuthDataAC = (email:null,userId:null,login:null,isAuth:boolean)=>{
    return  {type:'SET_USER_DATA',payload: {email, userId, login, isAuth}}as const }

export const getMeTC = ()=> async (dispatch:Dispatch)=>{
    let response = await LoginAPI.me()
  /* return  LoginAPI.me().then*/
    if (response.data.resultCode === 0){
            let {id,email,login} = response.data.data
            dispatch(setUserAuthDataAC(id,email,login,true))
        }

}

export const login  = (email:null,password:null,rememberMe:boolean): AppThunkType=>
    async  (dispatch)=>{
      //
        let response = await  LoginAPI.login(email,password,rememberMe)
/*            .then*/

           if(response.data.resultCode === 0){
               dispatch(getMeTC())
                          }else {
               let message = response.data.messages.length > 0 ? response.data.messages[0] :"Seme error"
               dispatch(stopSubmit("Login",{_error:message}))
           }

}
export const logoutTC= ()=>
    async (dispatch:Dispatch)=>{
        let response = await
            LoginAPI.logout()
            if (response.data.resultCode === 0){
                dispatch(setUserAuthDataAC(null,null,null,false))
            }
            return;
    }
