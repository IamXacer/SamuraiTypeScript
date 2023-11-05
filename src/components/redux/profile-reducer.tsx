import React from "react";
import {ActionTypes, PostType, ProfilePageType, RootStateType} from "./state";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../../api/api";
export type postsType ={
    id: string,
    message:string,
    likesCount: number
}
export type ProfileType = {
    profile:{
        aboutMe: string
        lookingForAJobDescription:string
        contacts?:{
            facebook:string
            github:string }
        photos?:{
            large:string }
    }

    statusss:string
    updateStatus: (val: string) => void
}

const inirialState = {
    posts: [
        {id: '1', message: 'Hi,how are you', likesCount: 1},
        {id: '2', message: 'It\'s nice to meet you', likesCount: 3},
        {id: '3', message: 'Blabla', likesCount: 12},
        {id: '4', message: 'It\'s a pleasure to meet you', likesCount: 4},
    ] as postsType[],
   // newPostText: '',
    profile:{} as ProfileType ,
    statusss:''
}
export type initStateType = typeof inirialState
export const profileReducer = (state:initStateType=inirialState,action:ActionTypes):initStateType => {
  switch (action.type){
      case "ADD-POST":
          let newPost: PostType = {
              id: "7",
              // message: this._state.profilePage.newPostText,
              message: action.addnewPostText,
              likesCount: 0,
          }
          /*state.posts.push(newPost)
          state.newPostText = ''*/
          return {...state,posts:[newPost,...state.posts] }
      case "SET_USER_PROFILE":
          return {...state,profile:action.profile}
  /*     case "UPDATE-NEW-POST-TEXT":
           console.log('from reducer ', action.newText)
           state.newPostText = action.newText
           return {...state,newPostText: action.newText}*/
      case 'SET_STATUS_PROFILE':
          return {...state,statusss:action.status}
      default: return state
  }

}
export const addPostAC = (addnewPostText:string) =>{
    return {type: 'ADD-POST',addnewPostText} as const
}
/*export const updateNewPostTextAC = (text:string) =>{
    console.log('from AC ', text)
    return {type: 'UPDATE-NEW-POST-TEXT',newText:text} as const
}*/
export const setUserProfileAC = (profile:ProfileType) =>{
    return {type: 'SET_USER_PROFILE',profile} as const
}
export const setStatusProfileAC = (status:string) =>{
    return {type: 'SET_STATUS_PROFILE',status} as const
}
/*export const updateStatusProfileAC = (statusText:string) =>{
    return {type: 'SET_STATUS_PROFILE',statusText} as const
}*/

export const getProfileTC =(userId:string)=>(dispatch:Dispatch)=>{
    usersAPI.getProfile(userId).then(res => {
        dispatch(setUserProfileAC(res.data))
    })
}
export const getProfileStatusTC =(userId:string)=>(dispatch:Dispatch)=>{
    profileAPI.getStatus(userId).then(res => {
        dispatch(setStatusProfileAC(res.data))
    })
}
export const updateStatus =(status:string)=>(dispatch:Dispatch)=>{
    profileAPI.updateStatus(status).then(res => {
        if(res.data.resultCode === 0) {

        dispatch(setStatusProfileAC (status))}
    })
}