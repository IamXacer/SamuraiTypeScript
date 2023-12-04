import React from "react";

import {Post} from "./Post/Post";

import {PostIcon} from "./Post/PostIcon";
import { SuperMyPostContainerType} from "./MyPostsContainer";
import {reduxForm} from "redux-form";
import {addNewPostForm, TextareaFormType} from "./Post/MyPostForm";
/*
export type MessageType = {
    profilePagestate: PostType[]
   addNewPost:(postMessage:string)=>void
    newPostText:string
        updateNewPostText:(newText:string)=>void
    dispatch:(action:ActionTypes)=>void
//  store:StoreType
}*/
/*type TextareaFormType = {
    addnewPostText:string
}*/
//const maxLengthCreator10 = maxLengthCreator(10)
/*const addNewPostForm: React.FC<InjectedFormProps<TextareaFormType>>  = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>

            <div><Field name={'addnewPostText'}  component={Textarea}
                        placeholder={'Enter message'}
                        validate={[requiredField,maxLengthCreator10]}
            />
            </div>
            <div> <button>AddPost</button></div>
        </form>
    )
}*/
const AddNewPostReduxForm =reduxForm<TextareaFormType>
({form: 'ProfileAddNewPostForm'})(addNewPostForm)
export const MyPosts = React.memo((props:SuperMyPostContainerType) => {
    console.log('ReNderYo')
    let {posts} = props.profilePagestate;

    const post = props.profilePagestate.posts.map(postmassage =>
        <Post id={postmassage.id} message={postmassage.message}
              likeCount={postmassage.likesCount}/>)

    interface FormValues {
        addnewPostText: string;
    }
    const onAddPost = (values:FormValues) => {
        props.addNewPost(values.addnewPostText)
        values.addnewPostText = ""
        //props.dispatch(props.newPostText)
        //props.dispatch(addPostAC(props.newPostText))
    }

const onDeletePost = (postId:string)=>{
props.deletePost(postId)
}
  return (
     <div>

         <div>My Post</div>
<AddNewPostReduxForm onSubmit={onAddPost}/>

         <div>{post}</div>
         <PostIcon/>
     </div>


  )
})

