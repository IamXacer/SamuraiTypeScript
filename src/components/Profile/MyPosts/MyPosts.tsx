import React, {ChangeEvent, MouseEvent} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionTypes, PostType} from "../../redux/state";
import {PostIcon} from "./Post/PostIcon";
import { SuperMyPostContainerType} from "./MyPostsContainer";
/*
export type MessageType = {
    profilePagestate: PostType[]
   addNewPost:(postMessage:string)=>void
    newPostText:string
        updateNewPostText:(newText:string)=>void
    dispatch:(action:ActionTypes)=>void
//  store:StoreType
}*/
export const MyPosts = (props:SuperMyPostContainerType) => {
    let {newPostText,posts} = props.profilePagestate;

    const post = props.profilePagestate.posts.map(postmassage =>
        <Post id={postmassage.id} message={postmassage.message}
              likeCount={postmassage.likesCount}/>)


    const onAddPost = () => {
        props.addNewPost(newPostText)
        //props.dispatch(props.newPostText)
        //props.dispatch(addPostAC(props.newPostText))
    }
const onchangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
 let text = e.currentTarget.value
    //props.dispatch(updateNewPostTextAC(text))
    props.updateNewPostText(text)
    }

  return (
     <div>
         <div>My Post</div>
         <div><textarea
             value={newPostText}
             onChange={onchangeHandler}/> </div>
           <div onClick={onAddPost}> <button>AddPost</button></div>

         <div>{post}</div>
       {/*<Post profilePage={props.profilePage}/>*/}
         <PostIcon/>
     </div>


  )
}