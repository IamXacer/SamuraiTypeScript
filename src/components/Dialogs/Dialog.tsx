import React, {ChangeEvent, useRef} from "react";
import s from './Dialogs.module.css'
import {
    ActionTypes,
    DialogPageType, StoreType,
} from "../redux/state";
import {sendTextAC, updateNewMesssageTextAC} from "../redux/dialogs-reducer";
import {DialogsPropsType} from "./DialogsContainer";

// type DialogType = {
//     dialogsPage:DialogPageType
//     //  dispatch:(action:ActionTypes)=>void
//     //store:StoreType
//     // newMessageBody:string
//     updateNewMessageText:(newText: string)=>void
//     addNewDialog:(dialogMessage: string)=>void
// }

export const Dialog = (props: DialogsPropsType) => {
    let {messages, dialogs, newMessageText} = props.dialogsPage;

    let messageElemets = messages.map(m=><div key={m.id} >{m.message}</div>)
    let dialogsElement = dialogs.map(d=><div key={d.id}>{d.name}</div>)
    // let newMessageBody = newMessageText


    const onNewMassageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.updateNewMessageText(newText)
        //  props.store.dispatch(updateNewMesssageTextAC(newText))
    }
    const addDialog = () => {
        props.addNewDialog(newMessageText)
        // props.store.dispatch(sendTextAC(newMessageBody))

    }
    return (
        <div className={s.imgClas}>
            <div className={s.backgroundIMG}>
                <div className={s.dialogItem}>
                    {dialogsElement}
                </div>
                <div className={s.message}>
                    <div>{messageElemets}</div>
                    <div><textarea value={newMessageText}
                                   onChange={onNewMassageChange}
                                   placeholder={'Enter message'}></textarea></div>
                    <div onClick={addDialog}><button>AddDialog</button></div>
                </div>

            </div>
        </div>
    )
}