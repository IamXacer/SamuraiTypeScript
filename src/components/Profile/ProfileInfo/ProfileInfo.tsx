import React from "react";
import s from "../Profile.module.css";
import {MyPosts} from "../MyPosts/MyPosts";
import {mapStateToPropsType} from "../ProfileContainer";
import {Preloader} from "../../common/Preloader/Preloader";
export type ProfileInfoType ={
    profile:null,
    photos:{
        large:string
    }
}
export const ProfileInfo = (props:any) => {
    if (!props.profile){
      return   <Preloader/>
    }
    return (
        <div className={s.profileWrapperContent}>

            <div><img src='https://cs12.pikabu.ru/post_img/big/2020/05/12/9/1589296651155220841.jpg'/></div>
            <div><img src={props.profile.photos.large}/></div>
            <div>{props.profile.aboutMe}</div>
            <div>{props.profile.lookingForAJobDescription}</div>
            <div>{props.profile.contacts.facebook}</div>
            <div>{props.profile.contacts.github}</div>


        </div>
    )

}