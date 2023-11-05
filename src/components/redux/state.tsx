import {DialogPageType, dialogsReducer, sendTextAC} from "./dialogs-reducer"
import {addPostAC, profileReducer, setStatusProfileAC, setUserProfileAC,
/*    updateNewPostTextAC*/
} from "./profile-reducer"
import {sidebarReducer} from "./sidebar-reducer";
import {
    followSuccess,
    setCurrentAC,
    setUsersAC,
    setUsersTotalCountAC,
    ToggleFeathingAC, ToglefollowingInProgress,
     unfollowSuccess
} from "./users-reducer";
import {setUserAuthDataAC} from "./auth-reducer";
import { initializedSuccessAC } from "./app-reducer";

export type StoreType = {
    _state:RootStateType
    addNewPost:(postMessage: string)=>void
    addNewDialog:(dialogMessage: string)=>void
    _callSubscriber:(_state: RootStateType)=>void
    updateNewPostText:(newText: string)=>void
    subscribe:(observer: (state: RootStateType) => void)=>void
    getState:()=>RootStateType
    dispatch:(action:ActionTypes)=>void
    updateNewMessageText:(newText: string)=>void

}
/*export const store:StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: '1', message: 'Hi,how are you', likesCount: 1},
                {id: '2', message: 'It\'s nice to meet you', likesCount: 3},
                {id: '3', message: 'Blabla', likesCount: 12},
                {id: '4', message: 'It\'s a pleasure to meet you', likesCount: 4},
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimich'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Valera'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Sasha'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-education'},
                {id: 3, message: 'Hi'},
                {id: 4, message: 'LearnReack'},
                {id: 5, message: 'Redux'},

            ],
            newMessageText:'',
        },
        sidebar: {}

    },
    getState (){

return this._state
    },
    subscribe(observer: (state: RootStateType) => void) {
        this._callSubscriber = observer
    },
    _callSubscriber(_state: RootStateType) {
        console.log('State changed')
    },
    addNewPost(postMessage: string) {
        debugger
        const newPost: PostType = {
            id: "5",
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        store._callSubscriber(this._state)
    },
    addNewDialog(dialogMessage: string) {
        debugger
        const newDialog: DialogType = {
            id: 6,
            name: this._state.profilePage.newPostText
        }
        this._state.dialogsPage.dialogs.push(newDialog)
        this._state.dialogsPage.newMessageText = ''
        store._callSubscriber(this._state)
    },
    updateNewPostText(newText: string) {
        debugger
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    updateNewMessageText(newDialogText: string) {
        debugger
        this._state.dialogsPage.newMessageText = newDialogText
        this._callSubscriber(this._state)
    },
/!*    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
        this._state.sidebar = sidebarReducer(this._state.sidebar,action)
        store._callSubscriber(this._state)

/!*if (action.type === 'ADD-POST'){
    const newPost: PostType = {
        id: "5",
       // message: this._state.profilePage.newPostText,
        message: action.newPostText,
        likesCount: 0,
    }
    this._state.profilePage.posts.push(newPost)
    this._state.profilePage.newPostText = ''
    store._callSubscriber(this._state)
}
else if (action.type === 'UPDATE-NEW-POST-TEXT'){
    this._state.profilePage.newPostText = action.newText
    this._callSubscriber(this._state)
}
else if(action.type === 'UPDATE-NEW-MESSAGE-BODY'){
    this._state.dialogsPage.newMessageText = action.body
    this._callSubscriber(this._state)

}else if(action.type === 'SEND_MESSAGE'){
    let body = this._state.dialogsPage.newMessageText
    this._state.dialogsPage.newMessageText = ''
    this._state.dialogsPage.messages.push({id: 6,message:body})
    this._callSubscriber(this._state)
}*!/


    }*!/

}*/




export type ActionTypes =
    //ReturnType<typeof updateNewPostTextAC>
    |ReturnType<typeof addPostAC>
   // |ReturnType<typeof updateNewMesssageTextAC>
    |ReturnType<typeof sendTextAC>
    |ReturnType<typeof followSuccess>
    |ReturnType<typeof unfollowSuccess>
    |ReturnType<typeof setUsersAC>
    |ReturnType<typeof setCurrentAC>
    |ReturnType<typeof setUsersTotalCountAC>
    |ReturnType<typeof ToggleFeathingAC>
    |ReturnType<typeof setUserProfileAC>
    |ReturnType<typeof setUserAuthDataAC>
    |ReturnType<typeof ToglefollowingInProgress>
    |ReturnType<typeof setStatusProfileAC>
    |ReturnType<typeof initializedSuccessAC>


export type MessageType = {
    id: number
    message: string
}
export type  DialogType = {
    id: number
    name: string
}
export type  PostType = {
    id: string
    message: string
    likesCount: number
}

/*export type  DialogPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText:string
}*/
export type  SidebarType = {}
export type  RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType


}
export type  ProfilePageType = {
    posts: PostType[],
    newPostText: string

}




