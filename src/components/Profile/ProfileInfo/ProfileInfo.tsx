import React, {ChangeEvent, useState} from "react";
import s from "../Profile.module.css";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import {ProfileType} from "../../redux/profile-reducer";
import {ProfileStatusWitchHooks} from "./ProfileStatusWitchHooks";
import userPhoto from "../../../assets/img/photo.png";
export const ProfileInfo = (props:ProfileType) => {
    const [isUploading, setIsUploading] = useState(false);
    if (!props.profile){
      return   <Preloader/>
    }
    console.log('props.profile',props.profile)
    const onMainPhotoSelector = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            setIsUploading(true);
            try {
                await props.savePhoto(e.target.files[0]);
            } finally {
              setIsUploading(false);
            }
        }
    };
    return (

        <div className={s.profileWrapperContent}>
            <div className={s.impSize}><img src='https://avatanplus.com/files/resources/original/5b7c1efd295881655cd90cf1.jpg'/></div>
            <div><img className={s.mainPhoto} src={props.profile.photos?.large || userPhoto}/>
                {props.isOwner && (
                    <div>
                        <input type={'file'} onChange={onMainPhotoSelector} />
                        {isUploading && <Preloader />}
                    </div>
                )}
            </div>
            <ProfileStatusWitchHooks status={props.statusss} updateStatus={props.updateStatus} />

            <div>{props.profile.aboutMe}</div>
            <div> <b>FullName: </b>{props.profile.fullName}</div>
            <div>
                <b>LookingForAJob</b>:
                {props.profile.lookingForAJob ? 'Yes' : 'No'}</div>
            { props.profile.lookingForAJob ?
                <div><b>My profesional skils: </b>
                 {props.profile.lookingForAJobDescription}
                </div> : ''
            }

            <div>{props.profile.contacts?.facebook}</div>
            <div>{props.profile.contacts?.github}</div>q


        </div>
    )

}
/*
const Contact = ({contactTitle,contactValue}) => {
    return(
        <div><b>{contactTitle}</b>: {contactValue}</div>
    )
  
}*/
