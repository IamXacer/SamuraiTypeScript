import React from "react";
import {Post} from "./Post/Post";
import {ActionTypes, PostType, ProfilePageType, StoreType} from "../../redux/state";
import {addPostAC, initStateType, updateNewPostTextAC} from "../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import StoreContex from "../../../StoreContex";
import {connect} from "react-redux";
import {Dialog} from "../../Dialogs/Dialog";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


export type MessageType = {
//profilePagestate: PostType[]
 //addNewPost:(postMessage:string)=>void
 // newPostText:string
    //    updateNewPostText:(newText:string)=>void
 //dispatch:(action:ActionTypes)=>void
   // store:StoreType
}
/*export const MyPostsContainer = (
    //props:MessageType
) => {
 //   let state = props.store.getState()
   /!* const posts = props.profilePagestate.map(postmassage =>
        <Post id={postmassage.id} message={postmassage.message}
              likeCount={postmassage.likesCount}/>)
*!/



  return (
      <StoreContex.Consumer>
          {store=> {
              let state = store.getState()
              const addNewPost = () => {
                  //props.dispatch(props.newPostText)
                  store.dispatch(addPostAC(store._state.profilePage.newPostText))
              }
              const onchangeHandler = (newPostText:string) => {
                  console.log('onChangeHandler ', newPostText)
                  store.dispatch(updateNewPostTextAC(newPostText))
              }
            return  <MyPosts updateNewPostText={onchangeHandler}
                       addNewPost={addNewPost}
                       dispatch={store.dispatch}
                       profilePagestate={state.profilePage.posts}
                       newPostText={state.profilePage.newPostText}
            //store={store}
            />
          } }
      </StoreContex.Consumer>
  )
}*/
export type SuperMyPostContainerType = mapStateToPropsType & mapDispatchToPropsType

 type mapStateToPropsType = {
    profilePagestate: initStateType,
}
let mapStateToProps = (state:AppStateType):mapStateToPropsType => {
    return{
        profilePagestate:state.profileReducer,
       // newPostText:state.profileReducer.newPostText
    }
}
type mapDispatchToPropsType = {
    updateNewPostText : (newPostText:string) =>void
    addNewPost : (newPostText:string) =>void
}
let mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType =>{
    return{
        updateNewPostText : (newPostText:string) => {
             dispatch(updateNewPostTextAC(newPostText))
        },
        addNewPost : (newPostText:string) => {
            //props.dispatch(props.newPostText)
            dispatch(addPostAC(newPostText))
        }
    }
}
export const SuperMyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)