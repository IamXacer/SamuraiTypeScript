import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType, ProfilePageType} from "../redux/state";

export type ProfileType ={
    profilePagestate:PostType[]
    addNewPost:(postMessage:string)=>void
    newPostText:string
    updateNewPostText:(newText:string)=>void
}
export const Profile = (props:ProfileType) => {
  return (
      <div className={s.profileWrapperContent}>
          <ProfileInfo />
          <MyPosts profilePagestate={props.profilePagestate}
                   newPostText={props.newPostText}
                   addNewPost={props.addNewPost}
                   updateNewPostText={props.updateNewPostText}
          />
      </div>
  )
}