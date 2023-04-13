import React from "react";
import {ActionTypes} from "./state";
import {AnyAction, Dispatch} from "redux";
import {usersAPI} from "../../api/api";
import { ThunkAction } from "redux-thunk";
import {AppStateType} from "./redux-store";
export type UsersType ={
    id:string,
    followed:boolean
    name:string
    status:string
    photoUrl:string
    location: UserLocation
    photos:{
        small: string,
        large: string
    },
}

type UserLocation = {
    city:string
    country:string
}
type InitialStateUserType = {
    users:UsersType[]
    pageSize:number
    totalUserCount:number
    currenPage:number
    isFetching:boolean
  //  followingInProgress:boolean
  followingInProgress:string[],
}
const inirialState:InitialStateUserType = {
    users: [],
    pageSize:10,
    totalUserCount:5,
    currenPage:10,
    isFetching:true,
   // followingInProgress:true
    followingInProgress:[]
}
export const userReducer = (state = inirialState, action: ActionTypes):InitialStateUserType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state,users:state.users.map(u=> {
                    debugger
   if(u.id === action.userId) {
       return {...u,followed:true}
    }
   return   u
    })}
        case'UNFOLLOW':
            return {...state,users:state.users.map(u=>{
                if(u.id === action.userId){
                    return {...u,followed:false}
                }  return   u
                })}
        case "SET_USERS":
            return {...state, users:action.users}
        case "SET_CURRENT_PAGE":
            return {...state,currenPage:action.currenPage}
        case "SET_USER_TOTAL_COUNT":
          return {...state,totalUserCount:action.count}
        case "TOGGLE_IS_FEATHING":
            return {...state,isFetching:action.isFetching}
        case 'FOLOWING_PROGRESS':{
            return {...state,
                followingInProgress:action.isFetching ?
                  [...state.followingInProgress,action.userId]
                    :state.followingInProgress.filter(id=>id !== action.userId)
            }
         /*   return {...state,
                followingInProgress:action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id=>id != action.userId)

            }*/
        }
        default:
            return state

    }


}

export const followSuccess = (userId:string) => {
    return {type:'FOLLOW',userId}as const
}
export const unfollowSuccess = (userId:string) => {
    return {type:'UNFOLLOW',userId} as const

}
export const setUsersAC = (users:UsersType[]) => {
    return {type:'SET_USERS',users} as const

}
export const setCurrentAC = (currenPage:number) => {
    return {type:'SET_CURRENT_PAGE',currenPage} as const
}
export const setUsersTotalCountAC = (count:number) => {
    return {type:'SET_USER_TOTAL_COUNT',count} as const
}
export const ToggleFeathingAC = (isFetching:boolean) => {
    return {type:'TOGGLE_IS_FEATHING',isFetching} as const
}
export const ToglefollowingInProgress = (isFetching:boolean, userId:string) => {
    return {type:'FOLOWING_PROGRESS',isFetching, userId} as const
}

export const getUsersTC =(currenPage:number,pageSize:number)=> {return(dispatch:Dispatch<ActionTypes>) => {
    dispatch(setCurrentAC(currenPage))
    dispatch(ToggleFeathingAC(true))
    usersAPI.getUsers(currenPage,pageSize).then(data => {
        dispatch(ToggleFeathingAC(false))
        dispatch(setUsersAC(data.items))
       dispatch(setUsersTotalCountAC(data.totalCount))
    })
}}

export const followTC =(userId:string)=> {return(dispatch:Dispatch<ActionTypes>) => {
    dispatch(ToglefollowingInProgress(true,userId))
    debugger
    usersAPI.follow(userId)
        .then(res => {
            if (res.data.resultCode === 0){
                dispatch(followSuccess(userId)) }
            dispatch(ToglefollowingInProgress(false,userId))
        })
}}
export const unfollowTC =(userId:string):ThunkAction<void, AppStateType, unknown, ActionTypes>=>
{return(dispatch
           // :Dispatch<ActionTypes>
) => {
    debugger
    dispatch(ToglefollowingInProgress(true,userId))
    usersAPI.unfollow(userId)
        .then(res => {
            debugger
            if (res.data.resultCode === 0){
                dispatch (unfollowSuccess(userId))}
            dispatch(ToglefollowingInProgress(false,userId))
        })
}}