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
export type  ProfilePageType = {
    posts: PostType[]
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

export const state:RootStateType = {
    profilePage :{
        posts: [
            {id: '1', message: 'Hi,how are you', likesCount: 12},
            {id: '2', message: 'It\'s nice to meet you', likesCount: 12},
            {id: '3', message: 'Blabla', likesCount: 12},
            {id: '4', message: 'It\'s a pleasure to meet you', likesCount: 12},
        ],
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
            {id: 4, message: 'Yo'},
        ]
    },
    sidebar:{}
}

