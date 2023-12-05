import React from "react";
import s from "../Profile.module.css";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import {ProfileType} from "../../redux/profile-reducer";
import {ProfileStatusWitchHooks} from "./ProfileStatusWitchHooks";
export const ProfileInfo = (props:ProfileType) => {
    if (!props.profile){
      return   <Preloader/>
    }
    console.log('props.profile',props.profile)
    return (

        <div className={s.profileWrapperContent}>
            <div className={s.impSize}><img src='https://cs12.pikabu.ru/post_img/big/2020/05/12/9/1589296651155220841.jpg'/></div>
            <div><img src={props.profile.photos?.large}/></div>
            <ProfileStatusWitchHooks status={props.statusss} updateStatus={props.updateStatus} />
            <div>{props.profile.aboutMe}</div>
            <div>{props.profile.lookingForAJobDescription}</div>
            <div>{props.profile.contacts?.facebook}</div>
            <div>{props.profile.contacts?.github}</div>


        </div>
    )

}