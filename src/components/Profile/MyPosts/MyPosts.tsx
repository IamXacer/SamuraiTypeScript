import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType, ProfilePageType} from "../../redux/state";
import {PostIcon} from "./Post/PostIcon";

export type MessageType = {
    profilePage: PostType[]
}
export const MyPosts = (props:MessageType) => {
    const posts = props.profilePage.map(postmassage =>
        <Post id={postmassage.id} message={postmassage.message}
              likeCount={postmassage.likesCount}/>)
  return (
     <div>
         <div>My Post</div>
         <div><textarea></textarea> </div>
           <div> <button>AddPost</button></div>

         <div>{posts}</div>
       {/*<Post profilePage={props.profilePage}/>*/}
         <PostIcon/>
     </div>


  )
}