import React from "react";
import {ActionTypes} from "./state";
export type  DialogPageType = {
    dialogs: DialogType[]
    messages: MessageType[]

}
export type DialogType = {
    id: number,
    name: string,
}
export type MessageType = {
    id: number,
    message: string,
}
const initState = {
    dialogs: [
        {id: 1, name: 'Dimich'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Valera'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Sasha'},
    ] as DialogType[],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-education'},
        {id: 3, message: 'Hi'},
        {id: 4, message: 'LearnReack'},
        {id: 5, message: 'Redux'},

    ] as MessageType[],

}
export type initStateType = typeof initState
export const dialogsReducer = (state:initStateType = initState, action: ActionTypes): initStateType => {
    switch (action.type) {
/*        case "UPDATE-NEW-MESSAGE-BODY":
            //state.newMessageText = action.body
            return {...state,newMessageText:action.body}*/
        case "SEND_MESSAGE":
            let body = action.newMassageBody
          //  state.newMessageText = ''
           // state.messages.push({id: 6, message: body})
            return {...state,messages:[...state.messages,{id: 6, message: body}]}
        default:
            return state
    }
}
/*export const updateNewMesssageTextAC = (body: string) => {
    return {type: 'UPDATE-NEW-MESSAGE-BODY', body: body} as const
}*/
export const sendTextAC = (newMassageBody:string) => {
    return {type: 'SEND_MESSAGE', newMassageBody: newMassageBody} as const
}