import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
//import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypes, PostType, ProfilePageType, StoreType} from "../redux/state";
import { SuperMyPostContainer, SuperMyPostContainerType} from "./MyPosts/MyPostsContainer";
import {initStateType, ProfileType} from "../redux/profile-reducer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

/*export type ProfileType ={
 //   profilePagestate:PostType[]
    //addNewPost:(postMessage:string)=>void
   // newPostText:string
   // updateNewPostText:(newText:string)=>void
 //   dispatch:(action:ActionTypes)=>void
 // store:StoreType
 // store:StoreType
}*/
/*export type ProfileType= {`   ```
    profile:null


}*/
export const Profile: React.FC<ProfileType> = (props) => {
    const {saveProfile, isOwner, goToEditMode, savePhoto, profile, statusss, updateStatus } = props;


    return (
        <div className={s.profileWrapperContent}>
            <ProfileInfo
                saveProfile={saveProfile}
                isOwner={isOwner}
                goToEditMode={goToEditMode}
                savePhoto={savePhoto}
                // @ts-ignore
                profile={profile}  // Измените это место
                statusss={statusss}
                updateStatus={updateStatus}
            />
            <SuperMyPostContainer />
        </div>
    );
};

// Определите тип ProfileInfoProps
