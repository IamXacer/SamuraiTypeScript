import React, {ChangeEvent, MouseEvent} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionTypes, PostType} from "../../redux/state";
import {PostIcon} from "./Post/PostIcon";
import { SuperMyPostContainerType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../FormsControls/FormsControls";
/*
export type MessageType = {
    profilePagestate: PostType[]
   addNewPost:(postMessage:string)=>void
    newPostText:string
        updateNewPostText:(newText:string)=>void
    dispatch:(action:ActionTypes)=>void
//  store:StoreType
}*/
type TextareaFormType = {
    addnewPostText:string
}
const maxLengthCreator10 = maxLengthCreator(10)
const addNewPostForm: React.FC<InjectedFormProps<TextareaFormType>>  = (props) => {
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
}
const AddNewPostReduxForm =reduxForm<TextareaFormType>({form: 'ProfileAddNewPostForm'})(addNewPostForm)
export const MyPosts = (props:SuperMyPostContainerType) => {
    let {posts} = props.profilePagestate;

    const post = props.profilePagestate.posts.map(postmassage =>
        <Post id={postmassage.id} message={postmassage.message}
              likeCount={postmassage.likesCount}/>)


    const onAddPost = (values:any) => {
        props.addNewPost(values.addnewPostText)
        //props.dispatch(props.newPostText)
        //props.dispatch(addPostAC(props.newPostText))
    }
/*const onchangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
 let text = e.currentTarget.value
    //props.dispatch(updateNewPostTextAC(text))
    props.updateNewPostText(text)
    }*/

  return (
     <div>

         <div>My Post</div>
<AddNewPostReduxForm onSubmit={onAddPost}/>
         <div>{post}</div>
         <PostIcon/>
     </div>


  )
}
