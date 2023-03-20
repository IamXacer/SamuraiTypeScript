import React from "react";
import {ActionTypes, DialogPageType, RootStateType, StoreType} from "./state";

const initState: DialogPageType = {
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
    newMessageText: '',
}
export const dialogsReducer = (state = initState, action: ActionTypes): DialogPageType => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            //state.newMessageText = action.body
            return {...state,newMessageText:action.body}
        case "SEND_MESSAGE":
            let body = state.newMessageText
            state.newMessageText = ''
           // state.messages.push({id: 6, message: body})
            return {...state,messages:[...state.messages,{id: 6, message: body}],newMessageText :''}
        default:
            return state
    }
}
export const updateNewMesssageTextAC = (body: string) => {
    return {type: 'UPDATE-NEW-MESSAGE-BODY', body: body} as const
}
export const sendTextAC = (newMessageText: string) => {
    return {type: 'SEND_MESSAGE', newMessageText: newMessageText} as const
}