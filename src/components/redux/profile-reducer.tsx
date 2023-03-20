import React from "react";
import {ActionTypes, PostType, ProfilePageType, RootStateType} from "./state";

const inirialState:ProfilePageType = {
    posts: [
        {id: '1', message: 'Hi,how are you', likesCount: 1},
        {id: '2', message: 'It\'s nice to meet you', likesCount: 3},
        {id: '3', message: 'Blabla', likesCount: 12},
        {id: '4', message: 'It\'s a pleasure to meet you', likesCount: 4},
    ],
    newPostText: '',
}
export const profileReducer = (state=inirialState,action:ActionTypes) => {
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