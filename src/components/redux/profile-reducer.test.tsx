 //import {addPostAC, profileReducer, ProfileType} from "./profile-reducer";


 import {addPostAC, profileReducer} from "./profile-reducer";

 export type ActionTypes =
     |ReturnType<typeof addPostAC>


 export type postsType ={
     id: string,
     message:string,
     likesCount: number
 }
 type ProfileType = {
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
 /*it ('new post should be add',()=>{
     let action:ActionTypes  = addPostAC('it-kamasutra.com')

     const State = {
         posts: [
             {id: '1', message: 'Hi,how are you', likesCount: 1},
             {id: '2', message: 'It\'s nice to meet you', likesCount: 3},
             {id: '3', message: 'Blabla', likesCount: 12},
             {id: '4', message: 'It\'s a pleasure to meet you', likesCount: 4},
         ] as postsType[],
         profile:{} as ProfileType ,
         statusss:''
     }
     let newState = profileReducer(State, action);

     expect(newState.posts.length).toBe(5)
     expect(newState.posts[4].message).toBe('it-kamasutra.com')
 })*/