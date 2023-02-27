import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType, ProfilePageType} from "../redux/state";

export type ProfileType ={
    profilePage:PostType[]
}
export const Profile = (props:ProfileType) => {
  return (
      <div className={s.profileWrapperContent}>
          <ProfileInfo />
          <MyPosts profilePage={props.profilePage}/>
      </div>
  )
}