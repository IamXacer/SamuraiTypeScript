import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import { PostType} from "../../redux/state";
import {PostIcon} from "./Post/PostIcon";

export type MessageType = {
    profilePagestate: PostType[]
    addNewPost:(postMessage:string)=>void
    newPostText:string
    updateNewPostText:(newText:string)=>void
}
export const MyPosts = (props:MessageType) => {
    const posts = props.profilePagestate.map(postmassage =>
        <Post id={postmassage.id} message={postmassage.message}
              likeCount={postmassage.likesCount}/>)


    const addPost = () => {
        props.addNewPost(props.newPostText)
    }
const onchangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
  props.updateNewPostText(e.currentTarget.value)

}
  return (
     <div>
         <div>My Post</div>
         <div><textarea
             value={props.newPostText}
             onChange={onchangeHandler}/> </div>
           <div onClick={addPost}> <button>AddPost</button></div>

         <div>{posts}</div>
       {/*<Post profilePage={props.profilePage}/>*/}
         <PostIcon/>
     </div>


  )
}