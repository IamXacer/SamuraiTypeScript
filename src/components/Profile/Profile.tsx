import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionTypes, PostType, ProfilePageType, StoreType} from "../redux/state";
import { SuperMyPostContainer, SuperMyPostContainerType} from "./MyPosts/MyPostsContainer";
import {mapStateToPropsType} from "./ProfileContainer";

/*export type ProfileType ={
 //   profilePagestate:PostType[]
    //addNewPost:(postMessage:string)=>void
   // newPostText:string
   // updateNewPostText:(newText:string)=>void
 //   dispatch:(action:ActionTypes)=>void
 // store:StoreType
}*/
/*export type ProfileType= {
    profile:null


}*/
export const Profile = (props:any) => {
  return (
      <div className={s.profileWrapperContent}>
          <ProfileInfo profile={props.profile}/>
          <SuperMyPostContainer
              //store={props.store}

            //  profilePagestate={props.profilePagestate}
              //   store={props.store}
                  //newPostText={props.newPostText}
              // dispatch={props.dispatch}
              //dispatch={props.dispatch({type:"ADD-POST",newPostText:props.newPostText})}
                  // addNewPost={props.addNewPost}
                //updateNewPostText={props.updateNewPostText}
          />
      </div>
  )
}