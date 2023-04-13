import React from "react";
import {ActionTypes, PostType, ProfilePageType, RootStateType} from "./state";
import {Dispatch} from "redux";
import {usersAPI} from "../../api/api";
export type postsType ={
    id: string,
    message:string,
    likesCount: number
}

const inirialState = {
    posts: [
        {id: '1', message: 'Hi,how are you', likesCount: 1},
        {id: '2', message: 'It\'s nice to meet you', likesCount: 3},
        {id: '3', message: 'Blabla', likesCount: 12},
        {id: '4', message: 'It\'s a pleasure to meet you', likesCount: 4},
    ] as postsType[],
    newPostText: '',
    profile:null ,
}
export type initStateType = typeof inirialState
export const profileReducer = (state:initStateType=inirialState,action:ActionTypes):initStateType => {
  switch (action.type){
      case "ADD-POST":
          let newPost: PostType = {
              id: "7",
              // message: this._state.profilePage.newPostText,
              message: state.newPostText,
              likesCount: 0,
          }
          /*state.posts.push(newPost)
          state.newPostText = ''*/
          return {...state,posts:[...state.posts,newPost],newPostText:'' }
      case "UPDATE-NEW-POST-TEXT":
          console.log('from reducer ', action.newText)
       /*   state.newPostText = action.newText*/
          return {...state,newPostText: action.newText}
      case "SET_USER_PROFILE":
          return {...state,profile:action.profile}
      default: return state
  }

}
export const addPostAC = (newPostText:string) =>{
    return {type: 'ADD-POST',newPostText:newPostText} as const
}
export const updateNewPostTextAC = (text:string) =>{
    console.log('from AC ', text)
    return {type: 'UPDATE-NEW-POST-TEXT',newText:text} as const
}
export const setUserProfileAC = (profile:null) =>{
    return {type: 'SET_USER_PROFILE',profile} as const
}

export const getProfileTC =(userId:string)=>(dispatch:Dispatch)=>{
    usersAPI.getProfile(userId).then(res => {
        dispatch(setUserProfileAC(res.data))
    })
}