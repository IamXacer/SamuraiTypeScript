import React from "react";
import {ActionTypes} from "./state";
export type UsersType ={
    id:number,
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

}
const inirialState:InitialStateUserType = {
    users: [],
    pageSize:10,
    totalUserCount:5,
    currenPage:10,
    isFetching:true,
}
export const userReducer = (state = inirialState, action: ActionTypes):InitialStateUserType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state,users:state.users.map(u=> {
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
        default:
            return state

    }


}

export const FollowAC = (userId:number) => {
    return {type:'FOLLOW',userId}as const
}
export const ufollowAC = (userId:number) => {
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

