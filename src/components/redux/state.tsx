let rerenderEntireTree = (state: RootStateType) => {
    console.log('State changed')
}
export const subscribe  = (observer:(state: RootStateType)=>void) => {
    rerenderEntireTree = observer
}
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

export type  DialogPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}
export type  SidebarType = {}
export type  RootStateType = {
    profilePage:ProfilePageType
    dialogsPage:DialogPageType
    sidebar:SidebarType

}
export type  ProfilePageType = {
    posts: PostType[],
    newPostText:string

}
export const state:RootStateType = {
    profilePage :{
        posts: [
            {id: '1', message: 'Hi,how are you', likesCount: 1},
            {id: '2', message: 'It\'s nice to meet you', likesCount: 3},
            {id: '3', message: 'Blabla', likesCount: 12},
            {id: '4', message: 'It\'s a pleasure to meet you', likesCount: 4},
        ],
        newPostText:'',
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

        ]
    },
    sidebar:{}

}
export let addNewPost = (postMessage:string) =>{
    const newPost:PostType = {
        id:"5",
        message:state.profilePage.newPostText ,
        likesCount:0,
    }
  state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}
export let updateNewPostText = (newText:string) =>{
    state.profilePage.newPostText=newText
    rerenderEntireTree(state)
}


