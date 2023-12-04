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
export const initializeApp = (): AppThunkType =>
    (dispatch) => {
  let promise = dispatch(getMeTC())
  Promise.all([promise]).then(()=>{
        dispatch(initializedSuccessAC())
    })
}

