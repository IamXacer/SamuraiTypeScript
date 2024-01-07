import React, {ChangeEvent, useState} from "react";
import s from "../ProfileInfo/ProfileInfo.module.css";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import {ProfileType} from "../../redux/profile-reducer";
import {ProfileStatusWitchHooks} from "./ProfileStatusWitchHooks";
import userPhoto from "../../../assets/img/photo.png";
import ProfileDataMyForm, {ProfileDataFormType} from "./ProfileDataMyForm";
//import {ProfileDataForm} from "./ProfileDataMyForm";

//export const ProfileInfo = (props: ProfileType) => {
export const ProfileInfo: React.FC<ProfileType> = (props: ProfileType) => {
    const {profile, isOwner, statusss, updateStatus, savePhoto, saveProfile} = props;


    const [isUploading, setIsUploading] = useState(false);
    const [editMode, seteditMode] = useState(false);
    if (!profile) {
        return <Preloader/>
    }
    console.log('props.profile', profile)
    const onMainPhotoSelector = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            setIsUploading(true);
            try {
                await savePhoto(e.target.files[0]);
            } finally {
                setIsUploading(false);
            }
        }
    };

    const onSubmit =  (formData: ProfileDataFormType) => {
    /*    saveProfile(formData)
        seteditMode(false)*/
        saveProfile(formData).then (()=>{
            seteditMode(false)
        })
    }

    // @ts-ignore
    return (

        <div className={s.profileWrapperContent}>
            <div className={s.impSize}><img
                src='https://avatanplus.com/files/resources/original/5b7c1efd295881655cd90cf1.jpg'/></div>
            <div><img className={s.mainPhoto} src={profile.photos?.large || userPhoto}/>
                {props.isOwner && (
                    <div>
                        <input type={'file'} onChange={onMainPhotoSelector}/>
                        {isUploading && <Preloader/>}
                    </div>
                )}
            </div>
            <div className={s.userInfo}><ProfileStatusWitchHooks
                status={statusss} updateStatus={updateStatus}/></div>

            {editMode ? <ProfileDataMyForm
                initialValues={profile}
                    saveProfile={saveProfile}
                    onSubmit={onSubmit}
                    profile={profile}
                    statusss={statusss}
                    updateStatus={updateStatus}
                    savePhoto={savePhoto}
                    isOwner={isOwner}
                    goToEditMode={() => {
                    }}
                /> :

                <ProfileData
                    saveProfile={saveProfile}
                    goToEditMode={() => {
                        seteditMode(true)
                    }}
                    profile={profile}
                    statusss={statusss}
                    updateStatus={updateStatus}
                    savePhoto={savePhoto}
                    isOwner={isOwner}
                />}

            {/*<div>
            <div>{props.profile.aboutMe}</div>
            <div> <b>FullName: </b>{props.profile.fullName}</div>
            <div>
                <b>LookingForAJob</b>:
                {props.profile.lookingForAJob ? 'Yes' : 'No'}</div>
            { props.profile.lookingForAJob ?
                <div><b>My profesional skils: </b>
                 {props.profile.lookingForAJobDescription}
                </div> : ''}


            <div>{props.profile.contacts?.facebook}</div>
            <div>{props.profile.contacts?.github}</div>
            <div> <b>Contacts: </b>
                {props.profile.contacts && Object.keys(props.profile.contacts).map((key)=>{
                   return <Contact key={key}
                        contactTitle={key}
                        contactValue={props.profile.contacts[key]}/>
                })}</div>
</div>*/}
        </div>
    )

}
const ProfileData = ({profile, isOwner, goToEditMode}: ProfileType) => {
    const {
        aboutMe, fullName, lookingForAJob,
        lookingForAJobDescription, contacts
    } = profile;
    return (
        <div className={s.userInfo}>
            {isOwner && <div>
                <button onClick={goToEditMode}>eDIt</button>
            </div>}

            <div><b>AboutMe: </b>{profile.aboutMe}</div>
            <div><b>FullName: </b>{profile.fullName}</div>
            <div>
                <b>LookingForAJob</b>:
                {profile.lookingForAJob ? 'Yes' : 'No'}</div>
            {profile.lookingForAJob ?
                <div><b>My profesional skils: </b>
                    {lookingForAJobDescription}
                </div> : ''}


            <div>{profile.contacts?.facebook}</div>
            <div>{profile.contacts?.github}</div>
            <div><b>Contacts: </b>
                {profile.contacts && Object.keys(profile.contacts).map((key) => {
                    return <Contact key={key}
                                    contactTitle={key}
                                    contactValue={profile.contacts[key]}/>
                })}</div>
        </div>
    )
}
/*const ProfileDataForm = ({profile}: ProfileType) => {
    return (
        <div className={s.userInfo}>
            FORM
        </div>
    )
}*/
// Обновите вашу функцию Contact с явными типами
export const Contact: React.FC<{
    contactTitle: string;
    contactValue: string
}> = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contacts}><b>{contactTitle}</b>: {contactValue}</div>
    );
};

