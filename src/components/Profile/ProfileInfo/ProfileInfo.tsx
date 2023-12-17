import React, {ChangeEvent} from "react";
import s from "../Profile.module.css";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import {ProfileType} from "../../redux/profile-reducer";
import {ProfileStatusWitchHooks} from "./ProfileStatusWitchHooks";
import userPhoto from "../../../assets/img/photo.png";
export const ProfileInfo = (props:ProfileType) => {
    if (!props.profile){
      return   <Preloader/>
    }
    console.log('props.profile',props.profile)
    const onMainPhotoSelector = (e:ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length){
props.savePhoto(e.target.files[0])
      }
    }
    return (

        <div className={s.profileWrapperContent}>
            <div className={s.impSize}><img src='https://cs12.pikabu.ru/post_img/big/2020/05/12/9/1589296651155220841.jpg'/></div>
            <div><img className={s.mainPhoto} src={props.profile.photos?.large || userPhoto}/>
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelector}/>}
            </div>
            <ProfileStatusWitchHooks status={props.statusss} updateStatus={props.updateStatus} />
            <div>{props.profile.aboutMe}</div>
            <div>{props.profile.lookingForAJobDescription}</div>
            <div>{props.profile.contacts?.facebook}</div>
            <div>{props.profile.contacts?.github}</div>


        </div>
    )

}