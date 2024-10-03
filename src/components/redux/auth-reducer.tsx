import React from "react";
import {ActionTypes} from "./state";
import {AnyAction, Dispatch} from "redux";
import {LoginAPI, securityAPI} from "../../api/api";
import {stopSubmit} from "redux-form";
import {AppThunkType} from "./redux-store";
export type AuthStateType = {
    userId: string|null,
    email:string|null,
    login:string|null,
    isAuth:boolean,
    logout:null,
    captchaUrl:null
}
let initialState = {
    userId: '',
    email: null,
    login: null,
    isAuth: false,
    logout:null,
    captchaUrl:null // if null, the captcha is not required если null капча не обязательна
}
export const authReducer = (state:AuthStateType = initialState,
                            action:ActionTypes):AuthStateType => {
  switch(action.type){
      case 'SET_USER_DATA':
          return {
             ...state,...action.payload
          }
      case "GET_CAPTCHA_URL":
          return {
              ...state,...action.payload
                 /* .captchaUrl || null*/
          }
      default:return state
  }
}

export const setUserAuthDataAC = (email:string|null,userId:string|null,login:string|null,isAuth:boolean)=>{
    return  {type:'SET_USER_DATA',payload: {email, userId, login, isAuth}}as const }
export const getCaptchaUrlAC = (captchaUrl: null)=>{
    return  {type:'GET_CAPTCHA_URL',payload: {captchaUrl}}as const }

export const getMeTC = ()=> async (dispatch:Dispatch)=>{
    let response = await LoginAPI.me()
  /* return  LoginAPI.me().then*/
    if (response.data.resultCode === 0){
            let {id,email,login} = response.data.data

        dispatch(setUserAuthDataAC(email,id,login,true))
        }
}

export const login  = (email:null,password:null,rememberMe:boolean,captcha:string | null): AppThunkType=>
    async  (dispatch)=>{
      //
        let response = await  LoginAPI.login(email,password,rememberMe,captcha)
/*            .then*/
        if(response.data.resultCode === 0){
               dispatch(getMeTC())
                          }else {
            if (response.data.resultCode === 10 ){
                dispatch(getCaptchaUrl())
            }
               let message = response.data.messages.length > 0 ? response.data.messages[0] :"Seme error"
               dispatch(stopSubmit("Login",{_error:message}))
           }

}
export const getCaptchaUrl = () =>async (dispatch:Dispatch)=>{
    const response = await securityAPI.getCaptchaUrl()
    console.log('response.data.captchaUrl')
    const CaptchaUrl = response.data.url
    debugger
    dispatch(getCaptchaUrlAC(CaptchaUrl))
}
export const logoutTC = ()=>
    async (dispatch:Dispatch)=>{
        let response = await
            LoginAPI.logout()
            if (response.data.resultCode === 0){
                dispatch(setUserAuthDataAC(null,null,null,false))
            }
            return;
    }
