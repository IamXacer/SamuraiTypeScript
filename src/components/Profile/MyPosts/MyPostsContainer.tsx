import React from "react";
import {Post} from "./Post/Post";
import {ActionTypes, PostType, ProfilePageType, StoreType} from "../../redux/state";
import {
    addPostAC, deletePostAC, initStateType,
    /*  updateNewPostTextAC*/
} from "../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import StoreContex from "../../../StoreContex";
import {connect} from "react-redux";
import {Dialog} from "../../Dialogs/Dialog";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


export type MessageType = {

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
      //newPostText:state.profileReducer.newPostText
    }
}
type mapDispatchToPropsType = {
    //updateNewPostText : (newPostText:string) =>void
    addNewPost : (addnewPostText:string) =>void
    deletePost:(postId:string)=>void
}

export const SuperMyPostContainer =
    connect(mapStateToProps,{
        addNewPost:addPostAC,
        deletePost:deletePostAC
    })(MyPosts)