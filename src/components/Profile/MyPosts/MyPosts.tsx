import React, {useRef} from "react";
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
    let newPostEl = useRef<HTMLTextAreaElement>(null)
    const addPost = () => {
        debugger
        if (newPostEl.current !== null) {
            alert(newPostEl.current.value)
        }
    }
  return (
     <div>
         <div>My Post</div>
         <div><textarea ref={newPostEl}></textarea> </div>
           <div onClick={addPost}> <button>AddPost</button></div>

         <div>{posts}</div>
       {/*<Post profilePage={props.profilePage}/>*/}
         <PostIcon/>
     </div>


  )
}